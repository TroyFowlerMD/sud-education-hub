# SUD Education Redesign

## Project purpose

Modernize the educational, technical, and visual design of the clinician-facing SUD Education Hub. The initiative should preserve clinically useful material while improving accuracy, organization, accessibility, maintainability, and teaching effectiveness for live lectures and independent learning.

## Learners and intended use

- **PGY-1 psychiatry residents:** foundational SUD recognition, diagnosis, screening, safety, and treatment frameworks.
- **PGY-3 psychiatry residents:** advanced, clinically applied assessment, treatment selection, complications, and decision-making.
- **Uses:** live lecture guidance, independent reference, and later possible presentation, learner, or level-specific pathways.

Intentional overlap between levels is expected; avoid simple repetition.

## PGY-1 epidemiology foundation

Each topic unit should open PGY-1 teaching with a concise, source-backed epidemiology and clinical-burden orientation when it improves clinical relevance. For the alcohol/benzodiazepines unit, limit this to three or four dated claims on AUD burden, benzodiazepine use or misuse context, alcohol-related harm, treatment gap or equity, and the limitations of the underlying surveillance data. This is a foundation before the 32 audited topics, not a new content-heavy dashboard branch.

## Architecture remains open

No PGY-level delivery model has been selected. Later exploration may compare separate sites, a PGY-level switch, foundational/advanced layers, shared canonical content with separate lecture paths, and other evidence-backed models. Do not treat any model as settled before collaborative review.

## Core redesign workflow

1. Maintain a repository-wide map and select one topic unit.
2. Complete that unit's rendered, code, content, UX, accessibility, and maintainability audit.
3. Research curriculum expectations and authoritative sources for that unit; create or update its interactive decision workbook when one improves owner review.
4. Map PGY-1 and PGY-3 learning objectives, epidemiology foundation where relevant, and meaningful overlap; classify items keep, update, remove, or hold.
5. Complete source-to-claim, citation, direct-link, and clinical-sign-off review for every high-stakes retained item.
6. Compare pathway, information-architecture, and presentation options.
7. Implement, verify, and document the selected unit.
8. Move to another unit only after the active unit reaches an agreed stopping point.

Repository-wide work is allowed only when it supports all units without becoming a simultaneous curriculum or interface revamp.

## Evidence and source standard

For every topic unit, make educational-content decisions from the most current, applicable authoritative sources available at the time of review. Prioritize relevant guidance from the American Society of Addiction Medicine (ASAM), American Psychiatric Association (APA), and American Academy of Addiction Psychiatry (AAAP). Use authoritative federal and regulatory sources—such as SAMHSA, NIAAA, CDC, and FDA—when they govern the clinical question, medication information, epidemiology, or public-health recommendation. Use primary peer-reviewed literature to address questions not settled by those sources, and identify the evidence type and important limitations.

Record the source, publication or update date, and what the source supports in each site-specific audit. Do not treat an older page, a secondary summary, or an unsupported numeric claim as authoritative merely because it is already in the repository.

## Citation and link verification

Codex performs citation and link verification; Dr. Fowler is not responsible for manually proving that a citation is current or that a link works. Before retained educational content is approved or published, record the source, update date, source type, direct URL, and the precise claim it supports. Verify that the source supports the claim, the link opens to the intended source, and the citation appears near high-stakes material. Use linked citations whenever a stable accessible URL exists, plus a complete linked references section for each evidence page. Keep clinical sign-off as a distinct state rather than treating a working link as clinical approval.

## Workflow checkpoint cadence

Use this document as the single current order-of-operations record. The first substantive user-facing Codex reply in a new project conversation, and every other substantive reply after that, begins with a concise **Workflow checkpoint**: canonical record, current gate, completed work, and next allowed action. The alternating reply confirms that the next reply will include a checkpoint and updated plan. Update durable records for real milestones and decisions, not merely to log chat cadence.

## Capability guidance

- **Browser control:** recommended for every rendered-site review, responsive/accessibility check, and deployment verification.
- **Visualize:** defer until content disposition, learner-level mapping, and viable information-architecture options exist; then use it to compare guided presenter and independent-reference flows. Outputs are planning artifacts, not production authority.
- **GitHub tools:** use for repository, issue, history, and feedback-inbox work.
- **Vercel capabilities:** use for the shared feedback API and later hosting comparison. A full hosting migration is not approved until after the first rebuilt topic unit is reviewed.
- **Site-building/prototype tools:** use only for a contained experiment when a real design question cannot be resolved by the repository implementation and visual comparison alone.

Before a substantial phase, record a material capability decision here when it changes the recurring workflow or output. Do not create a parallel authoritative product outside the repository.

## Shared feedback / IT request platform

- Create private `TroyFowlerMD/website-feedback` as the common issue inbox, screenshot store, API source, and operator documentation for TroyMD websites.
- The complete existing Psych Scheduler/JFK feedback history was migrated from `non-clinical-feedback` on 2026-07-23: nine issues, their open/closed state, and comments were retained. The existing private screenshot file was copied into this repository before transfer so its issue link continues to work. GitHub did not retain labels during the transfer; the shared service creates the current labels for all new requests.
- The five SUD dashboards and Psych Scheduler now use the shared service. The visible title is **Feedback / IT Request**; the SUD pages load the version-controlled `assets/feedback-client.js` client.
- The shared Vercel API at `https://all-website-feedback.vercel.app/api/feedback` creates private GitHub issues, stores accepted screenshots privately, and applies source/area/status labels. It assigns each issue to Dr. Fowler; a GitHub Actions mention from `github-actions[bot]` creates a GitHub web/app/email notification under the account's normal notification settings.
- Screenshot support matches the current Psych Scheduler technical limits: PNG, JPEG, or WebP; up to three images; 1.5 MB each and 3.5 MB total.
- Retain origin allowlisting, rate limiting, honeypot handling, deduplication, server-held credentials, and failure/retry behavior. No special clinical-image screening is required for this education-site feedback flow.

## One-site-at-a-time rule

The initial units are opioids, alcohol/benzodiazepines, stimulants, cannabis, and perinatal SUD. Alcohol and benzodiazepines remain one combined unit, including `phenobarbital-aws.html`, unless Dr. Fowler explicitly changes that decision. The root hub is shared navigation rather than a sixth topic unit.

## Decision log

| Date | Status | Decision | Implication |
| --- | --- | --- | --- |
| 2026-07-23 | Final | Use one-topic-unit-at-a-time redesigns. | No simultaneous wholesale dashboard rebuilds. |
| 2026-07-23 | Final | Use `website-feedback` as one private inbox for all TroyMD website Feedback / IT Requests. | Shared labels, issue filters, screenshots, and owner notifications are required. |
| 2026-07-23 | Final | Keep SUD on GitHub Pages through the first rebuilt unit. | Use Vercel for the feedback API now; revisit full hosting after a real rebuilt-unit comparison. |
| 2026-07-23 | Working hypothesis | Visualize is decision-triggered. | Defer it until content review and PGY mapping produce viable options; then compare a guided, potentially Prezi-like presenter flow with independent-reference mode. |
| 2026-07-23 | Final | Audit alcohol and benzodiazepines first, using an authoritative-source standard for this and every later unit. | Keep the combined boundary; prioritize current ASAM, APA, and AAAP guidance, then authoritative federal/regulatory sources and primary literature as needed. |
| 2026-07-24 | Final | Use a repository-canonical workflow plus an interactive Google Sheets decision workbook for the alcohol/benzodiazepines review. | The workbook gathers owner decisions; `docs/SUD_EDUCATION_REDESIGN.md` remains the source future Codex sessions must follow. |
| 2026-07-24 | Final | Codex owns citation/link and source-to-claim verification before approval or publication. | Record verification in the audit/workbook, place linked citations near high-stakes claims, and keep clinical sign-off separate. |

## Open questions

- Which PGY pathway model best supports lecture flow and independent learning?
- What is the presenter-versus-learner presentation-mode boundary?
- Which duplicated dashboard components should become shared after the first unit proves the target architecture?
- After the first rebuild, should the public hub remain on GitHub Pages or move fully to Vercel?

## Current phase and active site

- **Current phase:** alcohol/benzodiazepines decision-workbook preparation complete; item-level disposition, source/link verification, and clinical sign-off remain.
- **Active topic unit:** combined alcohol and benzodiazepines, including `phenobarbital-aws.html`.
- **Completed:** repository map, live-route smoke review, documentation audit, capability review, and redesign-process decisions.
- **Completed deliverables:** repository orientation audit; living redesign document; private `website-feedback` repository and feedback API source; migration of nine legacy feedback issues; Vercel production project `website-feedback` live at `all-website-feedback.vercel.app`; one-year, repository-restricted GitHub token stored only as a production Vercel secret; verified private text and screenshot issues plus rejected-origin behavior; GitHub Actions owner-notification workflow.
- **Immediate next steps:** import and verify the prepared native Google Sheets workbook, then complete item-level keep/update/remove and PGY-1/PGY-3 classification. Follow with dated source-to-claim and link verification, then clinical sign-off for high-stakes claims and calculators before comparing pathway or interface options.
- **Material blockers:** the direct Google Drive spreadsheet importer is not exposed in the current Codex session, so the locally verified workbook is awaiting native Google Sheets import. `website-feedback.vercel.app` remains unavailable; production clients must use the approved `all-website-feedback.vercel.app` endpoint until a later naming decision changes it.

## Maintenance rules

- Update this document when process, scope, architecture, plugin strategy, current phase, or material decisions change.
- Keep it concise; put detailed evidence in `docs/audits/` and link to it.
- Revise stale material rather than creating contradictory instructions.
- Preserve historical decisions that still explain current constraints, but label them clearly.
