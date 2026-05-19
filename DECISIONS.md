# Decisions

This file records durable architectural, workflow, safety, and publishing decisions for SUD Education Hub. Each entry should include Context, Decision, Rationale, and Consequences.

---

### 2026-05-14 - Use sud-education-hub As Clinician-Facing Destination
Context: SUD education content was split across `AddictionEd` and multiple topic-specific repos.
Decision: Consolidate clinician-facing SUD education content into `sud-education-hub`.
Rationale: One repo is easier for Codex and future maintainers to understand, update, and publish.
Consequences: Legacy topic repos are historical sources; new clinician-facing SUD work should start here.

### 2026-05-14 - Keep Patient Education Separate
Context: SUD material exists for both clinicians and patients.
Decision: Keep `sud-patient-education` separate from `sud-education-hub`.
Rationale: The audiences, tone, and expected workflows differ.
Consequences: Do not move patient-facing pages into this repo without explicit approval.

### 2026-05-14 - Keep Topic Pages In Separate Folders
Context: Topic dashboards came from separate repos with their own internal assets and references.
Decision: Keep topic folders such as `opioids/`, `cannabis/`, `perinatal/`, `stimulants/`, and `alcohol-benzodiazepines/`.
Rationale: Preserves navigability and reduces broken relative links.
Consequences: New topics should probably get their own folder rather than being flattened into the root.

### 2026-05-07 - Use Traceable Evidence Wording On Phenobarbital AWS
Context: The Phenobarbital AWS page had numeric claims and ceiling language that needed tighter evidence framing.
Decision: Reframe the 20-30 mg/kg ceiling as a practice-based safety boundary, attribute Pourmand 2023 explicitly, add study-design tags, and keep numeric claims only when traceable to published abstracts.
Rationale: The page is aimed at addiction medicine / psychiatry colleagues and should avoid overstating what guidelines endorse.
Consequences: Future evidence edits should verify claims against accessible sources and use qualitative language when exact numbers are not traceable.
