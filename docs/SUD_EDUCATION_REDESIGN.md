# SUD Education Redesign

## Project purpose

Modernize the educational, technical, and visual design of the clinician-facing SUD Education Hub. The initiative should preserve clinically useful material while improving accuracy, organization, accessibility, maintainability, and teaching effectiveness for live lectures and independent learning.

## Learners and intended use

- **PGY-1 psychiatry residents:** foundational SUD recognition, diagnosis, screening, safety, and treatment frameworks.
- **PGY-3 psychiatry residents:** advanced, clinically applied assessment, treatment selection, complications, and decision-making.
- **Uses:** live lecture guidance, independent reference, and later possible presentation, learner, or level-specific pathways.

Intentional overlap between levels is expected; avoid simple repetition.

## Architecture remains open

No PGY-level delivery model has been selected. Later exploration may compare separate sites, a PGY-level switch, foundational/advanced layers, shared canonical content with separate lecture paths, and other evidence-backed models. Do not treat any model as settled before collaborative review.

## Core redesign workflow

1. Maintain a repository-wide map and select one topic unit.
2. Complete that unit's rendered, code, content, UX, accessibility, and maintainability audit.
3. Research curriculum expectations and authoritative sources for that unit.
4. Map PGY-1 and PGY-3 learning objectives and identify meaningful overlap.
5. Compare pathway, information-architecture, and presentation options.
6. Implement, verify, and document the selected unit.
7. Move to another unit only after the active unit reaches an agreed stopping point.

Repository-wide work is allowed only when it supports all units without becoming a simultaneous curriculum or interface revamp.

## Capability guidance

- **Browser control:** recommended for every rendered-site review, responsive/accessibility check, and deployment verification.
- **Visualize:** consider only when competing learner pathways, presentation modes, information architectures, or progressive-disclosure patterns need a tangible comparison. Outputs are planning artifacts, not production authority.
- **GitHub tools:** use for repository, issue, history, and feedback-inbox work.
- **Vercel capabilities:** use for the shared feedback API and later hosting comparison. A full hosting migration is not approved until after the first rebuilt topic unit is reviewed.
- **Site-building/prototype tools:** use only for a contained experiment when a real design question cannot be resolved by the repository implementation and visual comparison alone.

Before a substantial phase, record a material capability decision here when it changes the recurring workflow or output. Do not create a parallel authoritative product outside the repository.

## Shared feedback / IT request platform

- Create private `TroyFowlerMD/website-feedback` as the common issue inbox, screenshot store, API source, and operator documentation for TroyMD websites.
- The complete existing Psych Scheduler/JFK feedback history was migrated from `non-clinical-feedback` on 2026-07-23: nine issues, their open/closed state, and comments were retained. The existing private screenshot file was copied into this repository before transfer so its issue link continues to work. GitHub did not retain labels during the transfer; the shared service creates the current labels for all new requests.
- Replace the five SUD dashboard FormSubmit forms with the shared service. The visible title is **Feedback / IT Request**.
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
| 2026-07-23 | Working hypothesis | Visualize is decision-triggered. | Use it for competing teaching/IA choices, not by default. |

## Open questions

- Which topic unit should receive the first complete audit and rebuild?
- Which PGY pathway model best supports lecture flow and independent learning?
- What is the presenter-versus-learner presentation-mode boundary?
- Which duplicated dashboard components should become shared after the first unit proves the target architecture?
- After the first rebuild, should the public hub remain on GitHub Pages or move fully to Vercel?

## Current phase and active site

- **Current phase:** repository orientation and cross-site feedback-platform foundation.
- **Active topic unit:** none selected.
- **Completed:** repository map, live-route smoke review, documentation audit, capability review, and redesign-process decisions.
- **Completed deliverables:** repository orientation audit; living redesign document; private `website-feedback` repository and feedback API source; migration of nine legacy feedback issues; Vercel production project `website-feedback` live at `all-website-feedback.vercel.app`; one-year, repository-restricted GitHub token stored only as a production Vercel secret; verified private text and screenshot issues plus rejected-origin behavior; GitHub Actions owner-notification workflow.
- **Immediate next steps:** migrate and verify the Psych Scheduler client, then the five SUD FormSubmit clients, before presenting topic-unit candidates for selection.
- **Material blockers:** no infrastructure blocker. `website-feedback.vercel.app` remains unavailable; production clients must use the approved `all-website-feedback.vercel.app` endpoint until a later naming decision changes it.

## Maintenance rules

- Update this document when process, scope, architecture, plugin strategy, current phase, or material decisions change.
- Keep it concise; put detailed evidence in `docs/audits/` and link to it.
- Revise stale material rather than creating contradictory instructions.
- Preserve historical decisions that still explain current constraints, but label them clearly.
