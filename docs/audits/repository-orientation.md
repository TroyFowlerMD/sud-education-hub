# Repository Orientation Audit

**Reviewed:** 2026-07-23  
**Scope:** structure, live routes, shared architecture, canonical documentation, and future workflow. This is not a complete educational-content audit.

## Executive summary

`sud-education-hub` is a static GitHub Pages clinician-education site with seven public HTML routes: a root hub, five topic dashboards, and one focused phenobarbital clinical-reference page. There are five topic revamp units: opioids; alcohol/benzodiazepines; stimulants; cannabis; and perinatal SUD. The main strength is a consistent teaching-oriented dashboard pattern with interactive tools; the main risks are duplicated monolithic inline code, limited accessibility structure, and no automated build or test system.

## Repository and deployment map

| Area | Current purpose | Public route |
| --- | --- | --- |
| `index.html` | Root clinician-facing hub and topic navigation | `/sud-education-hub/` |
| `opioids/` | OUD dashboard plus MOUD-duration `.docx` resources | `/sud-education-hub/opioids/index.html` |
| `alcohol-benzodiazepines/` | Combined alcohol/benzodiazepine dashboard and phenobarbital AWS reference | `/sud-education-hub/alcohol-benzodiazepines/index.html` |
| `alcohol-benzodiazepines/phenobarbital-aws.html` | Focused dosing, evidence, safety, and calculator reference within the combined unit | `/sud-education-hub/alcohol-benzodiazepines/phenobarbital-aws.html` |
| `stimulants/` | Stimulant use disorder dashboard | `/sud-education-hub/stimulants/index.html` |
| `cannabis/` | Cannabis use disorder dashboard | `/sud-education-hub/cannabis/index.html` |
| `perinatal/` | Perinatal substance-use dashboard | `/sud-education-hub/perinatal/index.html` |

GitHub is the source of truth and GitHub Pages is the current public host. No package manager, framework, build configuration, tracked deployment workflow, PWA manifest, service worker, analytics integration, or automated test suite is present.

## Site and revamp-unit inventory

| Unit | Scope and notable features | Current grouping decision |
| --- | --- | --- |
| Opioids | Knowledge tree, COWS/MME tools, buprenorphine material, quick reference, downloads, activities | Single-topic unit |
| Alcohol / benzodiazepines | Knowledge tree, CIWA-Ar, benzodiazepine converter, standard-drink tool, quick reference, activities, phenobarbital reference | Intentional combined unit; do not split |
| Stimulants | Large knowledge tree, DAST-10, symptom tracker, pharmacotherapy guide, activities | Single-topic unit |
| Cannabis | Knowledge tree, CUDIT-R, detection and withdrawal tools, activities | Single-topic unit |
| Perinatal | Cross-substance pregnancy/postpartum teaching, Finnegan/ESC/EPDS and breastfeeding tools | Intentional perinatal context unit |

The hub is shared navigation, not an independent topic curriculum. The phenobarbital reference is a route inside the alcohol/benzodiazepine unit, not a separate revamp unit.

## Shared architecture and technical findings

The five dashboards are self-contained HTML documents of roughly 234–367 KB each. They share an embedded dark-theme dashboard structure: navigation, search, knowledge-tree cards, activities, theme toggle, print styles, interactive calculators/reference panels, and feedback form. CSS, JavaScript, content data, modal behavior, and page-specific tools are all embedded in each document.

This provides a consistent live experience but duplicates substantial UI and behavior. Later standardization should be proven in one rebuilt unit before shared code is introduced broadly. The focused phenobarbital page has separate styling and interaction patterns and should be evaluated in the alcohol/benzodiazepine redesign, not prematurely merged into the dashboard template.

Visible risks to address later:

- Large coupled single-file pages make review, testing, and safe updates difficult.
- No shared component or content model prevents consistent maintenance across dashboards.
- The main dashboards have responsive and print CSS but need later mobile/browser validation.
- Current pages generally lack `main` landmarks and skip links; ARIA use is limited.
- Current FormSubmit feedback is third-party email intake and will be replaced by the shared private GitHub Issues workflow.

## High-level live review

The root hub and all six topic/reference routes loaded during browser review. The root hub presents clear card-based topic navigation. The five dashboards visibly use a shared compact, dark teaching interface with Explore/Activities modes and dense category navigation. The phenobarbital page visibly behaves as a focused clinical reference. This confirmed later audits must inspect rendered interaction and responsiveness, not source alone.

## Canonical documentation audit

| Document | Status | Finding |
| --- | --- | --- |
| `AGENTS.md` | Current | Operating and safety rules are current; needs links to redesign records. |
| `TASKS.md` | Partly current | Existing maintenance work is useful; redesign and feedback-platform work needs explicit tracking. |
| `WORKLOG.md` | Current historical log | Needs a new session entry when orientation documentation is completed. |
| `DECISIONS.md` | Current but incomplete | Needs redesign-process, shared-feedback, and hosting-timing decisions. |
| `CONTEXT.md` | Current pointer | Correctly avoids becoming another long-form source. |
| `README.md` | Partly outdated | Structure is accurate but it foregrounds consolidation-era source mapping rather than current onboarding and redesign governance. |
| `docs/addictioned-sud-training-hub.md` | Historical | Explicitly Notion-derived and describes pre-consolidation independent deployments. Useful history only. |
| `docs/addictioned-sud-training-hub-legacy-snapshot.md` | Historical | Useful cutover record; not current architecture. |
| `docs/phenobarbital-aws-reference-refactor.md` | Historical but useful | Preserves evidence-edit rationale for that page. |

Missing durable material before this audit: a current repository map, redesign governance, detailed audit location, and feedback-platform strategy. A later documentation refresh should rewrite the root README around current architecture, setup, deployment, and the redesign process while retaining the historical records in `docs/`.

## Capability inventory

| Capability | Best use | Recommendation |
| --- | --- | --- |
| Browser control | Rendered behavior, responsive/accessibility checks, live verification | Recommended for every site-specific audit and release check |
| GitHub tools | Repository/issue history, shared feedback inbox, issue migration | Routine for feedback and repository work |
| Vercel deployment tools | Shared feedback API, environment configuration, preview/hosting comparison | Recommended for feedback; defer full SUD hosting decision |
| Visualize | Compare PGY pathways, IA, presentation, and progressive-disclosure models | Use only when a real decision benefits from comparison |
| Site/prototype builders | Isolated teaching interaction proof of concept | Optional; never replace canonical repository implementation |

## First site-specific audit candidates

- **Alcohol/benzodiazepines:** broad foundational-to-advanced range, combined topic boundary, and a separate focused reference tool.
- **Opioids:** central psychiatry curriculum with interactive calculators and downloads.
- **Stimulants:** largest dashboard and strongest test of duplicated-pattern modernization.
- **Perinatal:** intentionally cross-substance context that tests content-boundary decisions.
- **Cannabis:** a comparatively contained unit for establishing the first audit/rebuild workflow.

No first unit has been selected.
