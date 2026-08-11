import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import { dirname, extname, join, relative, resolve } from 'node:path';

const root = resolve(import.meta.dirname, '..');
const rootHtml = readFileSync(join(root, 'index.html'), 'utf8');

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

assert(
  rootHtml.includes('<website-feedback app-id="sud-education-hub"></website-feedback>'),
  'index.html must use the registered sud-education-hub feedback App ID.',
);
assert(
  rootHtml.includes('https://all-website-feedback.vercel.app/feedback-widget.js'),
  'index.html must load the standard shared feedback widget.',
);

function walk(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    if (entry.name === '.git') return [];
    const path = join(directory, entry.name);
    return entry.isDirectory() ? walk(path) : [path];
  });
}

const htmlFiles = walk(root).filter((path) => extname(path).toLowerCase() === '.html');
const localReference = /(?:href|src)=["']([^"'#?]+)["']/g;

for (const htmlFile of htmlFiles) {
  const html = readFileSync(htmlFile, 'utf8');
  for (const match of html.matchAll(localReference)) {
    const target = match[1];
    if (/^(?:[a-z]+:|\/\/|data:|mailto:|tel:)/i.test(target)) continue;
    const resolved = resolve(dirname(htmlFile), target);
    const candidates = [resolved];
    if (target.endsWith('/')) candidates.push(join(resolved, 'index.html'));
    if (existsSync(resolved) && statSync(resolved).isDirectory()) candidates.push(join(resolved, 'index.html'));
    assert(
      candidates.some((candidate) => existsSync(candidate)),
      `${relative(root, htmlFile)} references missing local target: ${target}`,
    );
  }
}

console.log(`SUD Education Hub validation passed for ${htmlFiles.length} HTML files.`);
