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

