<!-- last-reviewed: 2026-05-18 -->
<!-- source: notion -->

# AddictionEd / SUD Training Hub

## Snapshot
Addiction Psychiatry Training Hub - interactive educational dashboards for SUD topics, deployed as static GitHub Pages sites. Each substance use disorder has its own dedicated repo and dashboard. `AddictionEd` was the hub repo. Built for addiction psychiatry training and education.

- Hub repo: [https://github.com/TroyFowlerMD/AddictionEd](https://github.com/TroyFowlerMD/AddictionEd)
- Hub URL: [https://troyfowlermd.github.io/AddictionEd](https://troyfowlermd.github.io/AddictionEd) (unverified in original Notion note)
- Template: `TroyFowlerMD/SUD-Website-Template` (reusable scaffold stripped from OUD dashboard)

## Current Status In Original Notion Note
All topic repos had recent activity (last push 2026-03-24 to 2026-03-25). Deployed and active. No known open bugs documented in audit files. Architecture details below were from GitHub metadata; full per-repo inspection was not yet completed.

## Architecture Map
**Stack:** Static HTML/CSS/JS. No build tools, no backend, no database. Each topic repo deployed independently to GitHub Pages.

**Hub:** `AddictionEd` repo served as the central index/landing page linking to topic dashboards.

**Template:** `SUD-Website-Template` - reusable scaffold stripped from the OUD dashboard. Use this as the base for new topic dashboards if the template remains active.

## Topic Repo Map
| Repo | Topic | Pages URL in original note |
|---|---|---|
| TroyFowlerMD/AddictionEd | Hub / index | https://troyfowlermd.github.io/AddictionEd |
| TroyFowlerMD/Opioid-Use-Disorder | OUD dashboard | https://troyfowlermd.github.io/Opioid-Use-Disorder |
| TroyFowlerMD/Cannabis-Use-Disorder | CUD dashboard | https://troyfowlermd.github.io/Cannabis-Use-Disorder |
| TroyFowlerMD/Perinatal-Substance-Use-Disorders | Perinatal SUD | https://troyfowlermd.github.io/Perinatal-Substance-Use-Disorders |
| TroyFowlerMD/Stimulant-Use-Disorder | Stimulant SUD | https://troyfowlermd.github.io/Stimulant-Use-Disorder |
| TroyFowlerMD/Alcohol-and-Benzodiazepine-Use-Disorders | Alcohol/Benzo | https://troyfowlermd.github.io/Alcohol-and-Benzodiazepine-Use-Disorders |
| TroyFowlerMD/SUD-Website-Template | Reusable template | n/a |

All Pages URLs above were inferred from GitHub Pages conventions in the original Notion note. Confirm actual deployed URLs before sharing externally.

## Open Questions / Decisions Pending
- Full per-repo inspection had not yet been completed in the original audit.
- Is there a shared navigation/header across topic dashboards, or are they fully independent?
- Any plans for a new topic dashboard, such as tobacco or benzodiazepines standalone?
- Does `sud-patient-education` relate to or link from AddictionEd?

## External References
- Hub repo: [https://github.com/TroyFowlerMD/AddictionEd](https://github.com/TroyFowlerMD/AddictionEd)
- Template repo: [https://github.com/TroyFowlerMD/SUD-Website-Template](https://github.com/TroyFowlerMD/SUD-Website-Template)
- Patient education repo: [https://github.com/TroyFowlerMD/sud-patient-education](https://github.com/TroyFowlerMD/sud-patient-education)
