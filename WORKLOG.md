# Worklog

This file records completed Codex work sessions for SUD Education Hub. Append new entries during the shutdown routine so future sessions can resume without prior chat context.

---

## Entry Format

    ### YYYY-MM-DD - [machine/profile] - [session summary]
    - Completed: ...
    - In progress: ...
    - Blockers/notes: ...

### 2026-05-19 - Codex desktop - Repository maintenance sweep
- Completed: Fast-forward pulled `origin/main` and confirmed the working tree was clean before maintenance logging.
- Completed: Smoke-checked the public SUD Education Hub and Phenobarbital AWS live URLs; both returned HTTP 200 with expected SUD/phenobarbital text.
- Completed: Ran a local relative href/src scan with no missing local targets found for this repo.
- In progress: Existing template role, AddictionEd role, future-topic planning, Phenobarbital cleanup, and route-confirmation tasks remain open in TASKS.md.
- Blockers/notes: No app code changed; TASKS.md and DECISIONS.md were not changed.

### 2026-05-22 - Codex desktop - Owner communication and workflow preference
- Completed: Added `AGENTS.md` Owner Communication guidance so future Codex sessions explain Git, GitHub, GitHub Desktop, Codex workspace behavior, local-vs-remote state, commits, pushes, pulls, branches, and deployments with extra beginner-friendly context.
- Completed: Added guidance to proactively surface opportunities to streamline Dr. Fowler's workflow, including expected benefit, risk/cost, and smallest safe next step.
- In progress: Existing SUD Education Hub tasks remain unchanged.
- Blockers/notes: Instruction-only change; no app runtime code changed.

### 2026-07-23 - Codex desktop - Redesign orientation and shared feedback foundation
- Completed: Verified clean, synchronized `main`; mapped the static GitHub Pages routes, five topic revamp units, shared dashboard patterns, canonical documentation status, and available capabilities.
- Completed: Added the living SUD redesign process document and detailed repository-orientation audit; recorded one-unit workflow, feedback-platform, and staged-hosting decisions. Created private `TroyFowlerMD/website-feedback`, added its Vercel feedback API source, copied the legacy private screenshot asset, and migrated all nine existing scheduler/JFK feedback issues with their state and discussions.
- In progress: Deploy the shared service, configure its server-side GitHub permissions, migrate Psych Scheduler and SUD FormSubmit clients, then select the first topic rebuild.
- Blockers/notes: No topic unit is selected. A Vercel public project/hostname must be chosen before the shared API can be deployed; full SUD hosting remains on GitHub Pages pending first-unit comparison.

### 2026-07-23 - Codex desktop - Shared feedback API production deployment
- Completed: Confirmed Vercel project name `website-feedback`, created the production project, and deployed the API as READY. Verified that an allowed origin returns `feedback_not_configured` while an unapproved origin receives `403`; no feedback issue was created during these checks.
- In progress: Approve the usable public API hostname, configure the server-side fine-grained GitHub token, then migrate the Psych Scheduler and SUD browser clients.
- Blockers/notes: Vercel assigned `website-feedback-nine.vercel.app`, not the expected `website-feedback.vercel.app`; no production client points there yet. The project has no environment variables, so the API is safely inactive until `GITHUB_FEEDBACK_TOKEN` is configured.

### 2026-07-23 - Codex desktop - Feedback hostname and token activation follow-up
- Completed: Verified that Vercel will not assign the requested `website-feedback.vercel.app` alias because it is already in use. Confirmed that no browser client has been migrated to the temporary Vercel hostname.
- In progress: Create the approved one-year, fine-grained GitHub token restricted to `TroyFowlerMD/website-feedback`, then save it only as the production Vercel secret and verify a complete issue submission.
- Blockers/notes: GitHub requires mobile/authenticator sudo confirmation before token creation. A browser tab is intentionally left at that confirmation step. Dr. Fowler must also choose a final alternative API hostname before client migration.

### 2026-07-23 - Codex desktop - Shared feedback API activation and notification verification
- Completed: Activated `https://all-website-feedback.vercel.app/api/feedback` with a production-only, repository-restricted GitHub token; disabled Vercel Authentication for this public API endpoint; verified a private text issue, private screenshot issue, and `403 origin_not_allowed` rejection. Added and verified the `github-actions[bot]` owner-mention notification workflow.
- In progress: Migrate and verify the Psych Scheduler feedback client, then replace the five SUD FormSubmit clients with the same `Feedback / IT Request` experience.
- Blockers/notes: No infrastructure blocker. Three clearly marked live test issues (#10–#12) remain available to close or ignore in the private `website-feedback` inbox.

### 2026-07-23 - Codex desktop - Alcohol/benzodiazepines audit start and shared feedback migration
- Completed: Selected the combined alcohol/benzodiazepines unit as the first revamp unit, established the ASAM/APA/AAAP-first evidence standard for every later SUD unit, and created its initial audit record.
- Completed: Routed Psych Scheduler and all five SUD dashboard feedback forms through the shared `Feedback / IT Request` client. GitHub Pages deployment succeeded; the live alcohol/benzodiazepines page and API created private verification issue #14 with the expected allowed origin.
- In progress: Build the item-level content, source, UX, accessibility, and maintainability inventory for the active combined unit before any redesign.
- Blockers/notes: The legacy inline FormSubmit code remains dormant beneath the dynamically replaced SUD forms and should be removed in a focused cleanup after the new flow has had ordinary use. Test issues #10–#14 are clearly labeled for closure or disregard.

