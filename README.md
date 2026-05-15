# sud-education-hub

Local destination repo for clinician-facing SUD education dashboards.

## Current structure

- `index.html`: root hub for the merged repo
- `alcohol-benzodiazepines/`: topic pages migrated from `Alcohol-and-Benzodiazepine-Use-Disorders`
- `cannabis/`: topic pages migrated from `Cannabis-Use-Disorder`
- `opioids/`: topic pages and download resources migrated from `Opioid-Use-Disorder`
- `perinatal/`: topic pages migrated from `Perinatal-Substance-Use-Disorders`
- `stimulants/`: topic pages migrated from `Stimulant-Use-Disorder`

## Source mapping

- `AddictionEd` -> represented by the new root hub concept
- `Alcohol-and-Benzodiazepine-Use-Disorders` -> `alcohol-benzodiazepines/`
- `Cannabis-Use-Disorder` -> `cannabis/`
- `Opioid-Use-Disorder` -> `opioids/`
- `Perinatal-Substance-Use-Disorders` -> `perinatal/`
- `Stimulant-Use-Disorder` -> `stimulants/`

## Merge notes

- The legacy source repos were not modified.
- Topic pages were kept in separate folders instead of being flattened.
- `phenobarbital-aws.html` stays with the alcohol / benzodiazepine topic.
- The opioid `.docx` resources stay with the opioid topic.
- The navigation role of `AddictionEd` was carried forward into the new top-level hub.
