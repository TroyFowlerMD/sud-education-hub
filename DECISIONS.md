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

### 2026-05-22 - Explain Repo Work With Beginner Context
Context: Dr. Fowler is new to Git, GitHub, GitHub Desktop, Codex, and local-vs-remote repository workflows.
Decision: Codex should explain repo work with extra beginner-friendly context by default, including definitions, why each step matters, exact local paths/button names when useful, and a clear distinction between local files, local commits, pushed GitHub commits, pull requests, and deployed site changes.
Rationale: Better context reduces accidental duplicate clones, OneDrive/Git confusion, and uncertainty about whether work is local, synced, or live.
Consequences: Future repo instructions and shutdown summaries should favor plain outcome language and step-by-step guidance over unexplained Git shorthand.

### 2026-05-22 - Surface Workflow Streamlining Opportunities
Context: Dr. Fowler wants Codex to notice chances to make his coding, GitHub, GitHub Desktop, deployment, and cross-machine workflows smoother.
Decision: When Codex sees a practical workflow improvement, it should present the opportunity proactively with the expected benefit, any risk or cost, and the smallest safe next step.
Rationale: Small workflow improvements compound, especially while Dr. Fowler is learning Git and using Codex across multiple machines.
Consequences: Future sessions should separate optional workflow suggestions from required task work so recommendations help without derailing the current task.

### 2026-07-23 - Use a One-Topic-Unit-At-a-Time SUD Redesign Process
Context: The consolidated hub contains several substantial dashboards with different clinical scopes and shared legacy patterns.
Decision: Maintain repository-wide orientation and common infrastructure, but perform complete educational and interface redesigns one topic unit at a time. Keep alcohol and benzodiazepines combined, including the phenobarbital AWS reference, unless Dr. Fowler explicitly changes that boundary.
Rationale: A focused unit makes curriculum, pathway, architecture, and verification choices reviewable without attempting a simultaneous wholesale revamp.
Consequences: `docs/SUD_EDUCATION_REDESIGN.md` is the living process source; detailed evidence belongs in `docs/audits/`; no first unit is selected until Dr. Fowler chooses one.

### 2026-07-23 - Establish One Private Website Feedback / IT Request Inbox
Context: The SUD dashboards use FormSubmit email while Psych Scheduler already uses a Vercel API that creates private GitHub Issues with screenshot support.
Decision: Create private `TroyFowlerMD/website-feedback` as the shared repository for all TroyMD website Feedback / IT Requests, API source, private screenshot storage, labels, and operator guidance. Migrate the full existing scheduler feedback history and replace the SUD FormSubmit integration.
Rationale: One private inbox simplifies monitoring and triage while source/area/status labels retain site-level separation. A GitHub Actions mention on each new issue provides a GitHub web/app/email notification under the owner's normal notification settings.
Consequences: The feedback token remains server-side in Vercel; browser clients never receive it. FormSubmit becomes retired after verified migration. The nine legacy issues were moved on 2026-07-23; GitHub retained their text, comments, and state but did not retain their labels, so labels are a forward-looking service convention.

### 2026-07-23 - Defer Full SUD Hosting Migration Until After the First Rebuilt Unit
Context: The SUD hub is a working public GitHub Pages static site, while a shared Vercel API is needed for secure issue creation and screenshot storage.
Decision: Keep the SUD public host on GitHub Pages through the first topic rebuild and use Vercel only for the shared feedback service. Reassess full Vercel hosting after a rebuilt unit can be compared in a real preview workflow.
Rationale: This preserves the current public URL and avoids prematurely selecting a final public Vercel hostname while still enabling secure server-side feedback handling.
Consequences: A later full-hosting decision must compare preview workflow, deployment/recovery behavior, URL continuity, and maintenance overhead, then obtain Dr. Fowler's explicit naming choice.

### 2026-07-23 - Activate the Shared Feedback API at the Approved Endpoint
Context: Dr. Fowler confirmed `website-feedback` for the shared feedback Vercel project. `website-feedback.vercel.app` was unavailable, so he approved the attempted candidate order that produced `all-website-feedback.vercel.app`.
Decision: Use `https://all-website-feedback.vercel.app/api/feedback` as the current production API endpoint. Store the one-year fine-grained GitHub token only as Vercel's production-only `GITHUB_FEEDBACK_TOKEN`; it is restricted to `TroyFowlerMD/website-feedback` with Issues and Contents read/write permissions. Disable Vercel Authentication for this API project so public website clients can reach it.
Rationale: The API must be publicly reachable for browser clients while server-side origin allowlisting, rate limiting, deduplication, and the restricted token protect the private inbox.
Consequences: Text, image-attachment, and rejected-origin production checks passed on 2026-07-23. New issues are private, assigned to Dr. Fowler, and receive a GitHub Actions `@TroyFowlerMD` notification. No existing browser client has been migrated yet.

### 2026-07-23 - Preserve the Endpoint Naming Constraint
Context: Dr. Fowler requested `website-feedback.vercel.app`; Vercel rejected that alias because it is already in use.
Decision: Do not use `website-feedback-nine.vercel.app`. Use the subsequently approved `all-website-feedback.vercel.app` endpoint until Dr. Fowler chooses a later naming change.
Rationale: The endpoint name is user-facing and must remain under Dr. Fowler's control.
Consequences: This does not affect the separate later decision about whether public SUD pages stay on GitHub Pages or migrate to Vercel.

### 2026-07-23 - Select Alcohol and Benzodiazepines as the First Revamp Unit
Context: The repository-wide orientation is complete, the shared feedback foundation is live, and Dr. Fowler selected the first site for detailed work.
Decision: Begin with the combined alcohol/benzodiazepines unit, including `phenobarbital-aws.html`; do not split the grouping during this phase.
Rationale: It is an intentional combined educational site and includes both foundational and clinically applied material suitable for exploring later PGY-1/PGY-3 pathways.
Consequences: Do not begin a full redesign yet. First produce a site-specific rendered, code, content, UX, accessibility, and maintainability audit.

### 2026-07-23 - Apply an Authoritative Source Standard Across SUD Units
Context: Existing educational pages may contain legacy material of mixed provenance and currency.
Decision: For each SUD unit, prioritize current applicable guidance from ASAM, APA, and AAAP; then use authoritative federal/regulatory sources such as SAMHSA, NIAAA, CDC, and FDA when relevant. Use primary peer-reviewed literature for questions those sources do not settle, and record source date, role, and evidence limitations in the site audit.
Rationale: This keeps content review clinically reliable while avoiding unsupported certainty and stale guidance.
Consequences: No content revision should rely only on the existing page or an unverified secondary source. The source standard applies to every later unit, not only alcohol/benzodiazepines.
