<!-- last-reviewed: 2026-05-18 -->
<!-- source: notion -->

# AddictionEd / SUD Training Hub

## Snapshot
Addiction Psychiatry Training Hub - interactive educational dashboards for SUD topics, deployed as static GitHub Pages sites. Each substance use disorder has its own dedicated repo and dashboard. `AddictionEd` was the hub repo. Built for addiction psychiatry training and education.

- Hub repo: [https://github.com/TroyFowlerMD/AddictionEd](https://github.com/TroyFowlerMD/AddictionEd)
- Hub URL: [https://troyfowlermd.github.io/sud-education-hub/](https://troyfowlermd.github.io/sud-education-hub/) (unverified in original Notion note)
- Template: `TroyFowlerMD/SUD-Website-Template` (reusable scaffold stripped from OUD dashboard)

## Current Status In Original Notion Note
All topic repos had recent activity (last push 2026-03-24 to 2026-03-25). Deployed and active. No known open bugs documented in audit files. Architecture details below were from GitHub metadata; full per-repo inspection was not yet completed.

## Architecture Map
**Stack:** Static HTML/CSS/JS. No build tools, no backend, no database. Each topic repo deployed independently to GitHub Pages.

**Hub:** `AddictionEd` repo served as the central index/landing page linking to topic dashboards.

**Template:** `SUD-Website-Template` - reusable scaffold stripped from the OUD dashboard. Use this as the base for new topic dashboards if the template remains active.

## Topic Repo Map
| Repo | Topic | Canonical Pages URL |
|---|---|---|
| TroyFowlerMD/AddictionEd | Hub / index | https://troyfowlermd.github.io/sud-education-hub/ |
| TroyFowlerMD/Opioid-Use-Disorder | OUD dashboard | https://troyfowlermd.github.io/sud-education-hub/opioids/ |
| TroyFowlerMD/Cannabis-Use-Disorder | CUD dashboard | https://troyfowlermd.github.io/sud-education-hub/cannabis/ |
| TroyFowlerMD/Perinatal-Substance-Use-Disorders | Perinatal SUD | https://troyfowlermd.github.io/sud-education-hub/perinatal/ |
| TroyFowlerMD/Stimulant-Use-Disorder | Stimulant SUD | https://troyfowlermd.github.io/sud-education-hub/stimulants/ |
| TroyFowlerMD/Alcohol-and-Benzodiazepine-Use-Disorders | Alcohol/Benzo | https://troyfowlermd.github.io/sud-education-hub/alcohol-benzodiazepines/ |
| TroyFowlerMD/SUD-Website-Template | Reusable template | n/a |

Canonical URLs above were verified as the maintained SUD Education Hub destinations on 2026-08-07. The legacy repository URLs are retained only as redirect endpoints for old bookmarks.

## Open Questions / Decisions Pending
- Full per-repo inspection had not yet been completed in the original audit.
- Is there a shared navigation/header across topic dashboards, or are they fully independent?
- Any plans for a new topic dashboard, such as tobacco or benzodiazepines standalone?
- Does `sud-patient-education` relate to or link from AddictionEd?

## External References
- Hub repo: [https://github.com/TroyFowlerMD/AddictionEd](https://github.com/TroyFowlerMD/AddictionEd)
- Template repo: [https://github.com/TroyFowlerMD/SUD-Website-Template](https://github.com/TroyFowlerMD/SUD-Website-Template)
- Patient education repo: [https://github.com/TroyFowlerMD/sud-patient-education](https://github.com/TroyFowlerMD/sud-patient-education)
