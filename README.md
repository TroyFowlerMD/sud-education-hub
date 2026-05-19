# sud-education-hub

Clinician-facing substance use disorder education hub for residents, fellows, and clinicians. This repo consolidates the older AddictionEd hub and topic-specific SUD dashboards into one GitHub Pages project while keeping patient-facing education separate.

## Current Structure

- `index.html`: root hub for the merged repo
- `alcohol-benzodiazepines/`: topic pages migrated from `Alcohol-and-Benzodiazepine-Use-Disorders`
- `cannabis/`: topic pages migrated from `Cannabis-Use-Disorder`
- `opioids/`: topic pages and download resources migrated from `Opioid-Use-Disorder`
- `perinatal/`: topic pages migrated from `Perinatal-Substance-Use-Disorders`
- `stimulants/`: topic pages migrated from `Stimulant-Use-Disorder`

## Source Mapping

- `AddictionEd` -> represented by the new root hub concept
- `Alcohol-and-Benzodiazepine-Use-Disorders` -> `alcohol-benzodiazepines/`
- `Cannabis-Use-Disorder` -> `cannabis/`
- `Opioid-Use-Disorder` -> `opioids/`
- `Perinatal-Substance-Use-Disorders` -> `perinatal/`
- `Stimulant-Use-Disorder` -> `stimulants/`

## Merge Notes

- The legacy source repos were not modified.
- Topic pages were kept in separate folders instead of being flattened.
- `phenobarbital-aws.html` stays with the alcohol / benzodiazepine topic.
- The opioid `.docx` resources stay with the opioid topic.
- The navigation role of `AddictionEd` was carried forward into the new top-level hub.
- Patient-facing education belongs in the separate `sud-patient-education` repo.

## Project Files

- `CONTEXT.md`: Short session-start briefing for Codex and returning developers.
- `TASKS.md`: Live working task list seeded from the migrated Notion state.
- `WORKLOG.md`: Append-only session-end worklog format.
- `DECISIONS.md`: Key architectural and workflow decisions extracted from Notion.
- `docs/addictioned-sud-training-hub.md`: Original AddictionEd/SUD topic hub context.
- `docs/addictioned-sud-training-hub-legacy-snapshot.md`: Consolidation-era AddictionEd legacy-source snapshot.
- `docs/phenobarbital-aws-reference-refactor.md`: Phenobarbital AWS evidence/ceiling language refactor note.
