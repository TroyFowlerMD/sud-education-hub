<!-- last-reviewed: 2026-05-18 -->
<!-- source: notion -->

# 2026-05-07 - Phenobarbital AWS Reference Refactor

## Scope
Refactored `phenobarbital-aws.html` in `Alcohol-and-Benzodiazepine-Use-Disorders` to:
1. reframe the 20-30 mg/kg ceiling as a practice-based safety boundary rather than a guideline-mandated cap,
2. name the Pourmand 2023 meta-analysis explicitly, tag each evidence card with study design, qualitative-ize numeric claims that could not be cleanly traced to published abstracts, and add an explicit Limitations card,
3. add PubMed PMID hyperlinks on each study title.

## Commits Landed On Main
- `1910ce0` - Refine phenobarbital 72h ceiling language and tighten evidence summaries.
- `a321aa9` - Cleanup pass: dropped residual mono-span OR/days values from Fleenor bullets and added PMID hyperlinks.

## What Went Right
Drafting the proposed ceiling paragraph and full evidence rewrite in chat first, then narrowing to a much smaller Option C lead-in only after a user check-in, kept the edit surface tight and the diff easy to review.

Cross-checking each numeric claim against PubMed before committing caught at least one untraceable figure and allowed replacement with a verifiable ICU LOS figure.

Splitting the work into two commits made the second pass low-risk; the earlier successful commit was always a safe fallback if the cleanup attempt corrupted the buffer.

## What Went Wrong
GitHub web editor + Find/Replace is fragile. Twice the Find/Replace input field lost focus and keystrokes landed in the main code editor. The worst miss: a Ctrl+A intended for the Replace field selected the entire file, and the next Delete keystroke wiped it. This was caught via Ctrl+Z and discarded via Cancel; no bad commit pushed.

Whitespace-bearing find strings do not behave reliably in the GitHub Find/Replace bar; a multi-line replacement collapsed onto a single packed line. Cosmetic only, but left an ugly artifact near the Limitations card.

Empty-string replacements leave orphan blank lines that have to be cleaned up separately; safer to replace with the next valid sibling line directly.

GitHub Copilot's commit-message suggester silently prepended its own text in front of the typed message, producing a mangled title. Web UI cannot amend a pushed commit message without git CLI + force-push.

## Lessons For Future Repo Edits
For any non-trivial multi-edit pass, prefer local editing over GitHub web editor, or use strictly single-line Find/Replace pairs with verification after every replacement.

Always anchor Find/Replace search strings on uniquely identifying surrounding HTML (class name, id, full `li` tag) instead of bare prose fragments.

Before clicking Commit changes, click into the commit-message field first and check the placeholder/auto-suggested text.

When qualitative-izing numeric claims, replace the entire `li` or analogous unit, not just the prose prefix.

Maintain a clear two-pass cadence on substantive edits: pass 1 = content/structure, pass 2 = formatting + linking.

## Reference Design Intent Reaffirmed
Tone target for this page is concise, PK-forward, addressed to addiction medicine / psychiatry colleagues who do hospital work but are not ICU residents. Numbers stay only when traceable to a published abstract; otherwise direction-and-magnitude language. Guideline language is descriptive, never prescriptive of a numeric cap that no society endorses.

## Next-Pass Candidates (Deferred)
- Cosmetic: orphan blank line in the Kessel `ul`; the packed single line carrying the Limitations card opener - both render fine, just ugly source.
- Optional: amend `a321aa9` commit message via local git CLI to drop the Copilot prefix.
- Optional: fold the Ronan ward-safety anchor into the Comparative Evidence section as its own card with a PMID link, instead of leaving it as a freestanding evidence-anchor block.
