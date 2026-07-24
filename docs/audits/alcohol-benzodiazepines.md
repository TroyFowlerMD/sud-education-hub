# Alcohol and Benzodiazepines Audit

## Status

- **Unit:** combined alcohol and benzodiazepines, including `alcohol-benzodiazepines/phenobarbital-aws.html`.
- **Phase:** audit baseline complete; item-level disposition and clinical sign-off remain before design or educational-content changes.
- **Rendered review:** completed 2026-07-23 with browser control at desktop and mobile widths.
- **Purpose:** establish a source-backed inventory and identify what requires detailed verification before any curriculum, UX, or implementation choice.

The dashboard and reference are intentionally treated as one learning unit. This audit does not recommend splitting them before the content, learner-level, and presentation decisions are made.

## Current product inventory

| Surface | Current role | Notable functionality |
| --- | --- | --- |
| `alcohol-benzodiazepines/index.html` | Combined educational dashboard | 5-category, 32-subtopic knowledge tree; Explore and Activities modes; search, theme toggle, print view, clinical cases/quizzes, CIWA-Ar calculator, benzodiazepine-equivalency converter, standard-drinks calculator, medication quick reference, and feedback. |
| `alcohol-benzodiazepines/phenobarbital-aws.html` | Standalone clinical reference | Phenobarbital pharmacology, protocol comparison, 72-hour cumulative-dose calculator, editable dose log, comparative evidence, safety, and guideline summary. |

Together, the two self-contained HTML/JavaScript surfaces are approximately 324 KB. Each embeds most content, style, data, and interaction logic in place.

### Dashboard content inventory

| Category | Subtopics |
| --- | --- |
| Clinical Withdrawal Syndromes | Alcohol withdrawal syndrome; benzodiazepine withdrawal; delirium tremens; withdrawal seizures; combined alcohol and benzodiazepine withdrawal |
| Neurobiology | GABA-A; glutamate/NMDA; allostasis and opponent process; reward circuitry; neuroinflammation; cross-tolerance; kindling |
| Acute Management | Symptom-triggered versus fixed dosing; benzodiazepine selection; phenobarbital; thiamine and nutrition; special populations; ASAM levels of care |
| Long-term Treatment / Medications | Naltrexone; acamprosate; disulfiram; gabapentin; topiramate; off-label treatment; psychosocial care |
| Recovery and Stigma | Natural history; brain recovery; post-acute withdrawal; harm reduction; recovery capital; outcomes; stigma |

Teaching activities include 75 Jeopardy-style questions across three difficulty levels, five clinical cases, eight pharmacotherapy scenarios, 12 myth checks, and flashcards derived from the activities. Interactive tools include CIWA-Ar, benzodiazepine-equivalency, standard-drink, and medication-reference tools, plus search, theme, print, and feedback functions.

### PGY-1 epidemiology foundation

Add a compact orientation before the 32 audited topics, rather than a content-heavy new dashboard branch. It will contain three or four dated, Codex-verified claims on AUD burden, benzodiazepine use or misuse context, alcohol-related harm, treatment gap or equity, and surveillance limits. Seed sources are the current [NIAAA AUD statistics page](https://www.niaaa.nih.gov/alcohols-effects-health/alcohol-topics/alcohol-facts-and-statistics/alcohol-use-disorder-aud-united-states-age-groups-and-demographic-characteristics), [SAMHSA 2024 NSDUH detailed tables](https://www.samhsa.gov/data/sites/default/files/reports/rpt56484/NSDUHDetailedTabs2024/NSDUHDetailedTabs2024/2024-nsduh-detailed-tables.htm), and [CDC Alcohol Use FastStats](https://www.cdc.gov/nchs/fastats/alcohol.htm). Do not publish a numeric statement until its direct source, date, denominator, and claim support are verified in the crosswalk.

## Source and claim crosswalk

| Claim area | Primary hierarchy | Baseline finding and required later handling |
| --- | --- | --- |
| Alcohol-withdrawal severity, disposition, and CIWA-Ar use | ASAM Alcohol Withdrawal Management Guideline (2020) | Reconcile every threshold and calculator instruction. ASAM example bands are mild CIWA-Ar less than 10, moderate 10 to 18, and severe 19 or greater; the current dashboard bands do not consistently align. |
| Benzodiazepine tapering and conversion | Joint Clinical Practice Guideline on Benzodiazepine Tapering (2025) | Treat dose equivalents as approximate and patient-specific, not a precise converter. Reframe categorical cross-taper language as individualized and monitored; initial reductions are generally 5 to 10 percent, with schedules adjusted to response. |
| AUD pharmacotherapy | APA pharmacologic AUD guideline (2018); NIAAA medication overview; FDA labeling as needed | Correct the dashboard provenance that calls the APA guideline “2023.” Revalidate every dose, contraindication, monitoring statement, and off-label designation. |
| Benzodiazepine safety | FDA class boxed-warning update | Preserve alcohol/opioid co-use, dependence, gradual taper, and patient-specific schedule safety framing. |
| Phenobarbital | ASAM 2020; institutional protocol where applicable; primary literature including Wolpaw et al. (2025) and Lee et al. ED systematic review (2024) | Separate guideline-supported boundaries from local protocol and observational findings. The 20 to 30 mg/kg headroom calculator is a high-risk educational aid, not a universal guideline ceiling. |
| Addiction-psychiatry learning context | AAAP AUD educational activity | Use only for curriculum context; it is not clinical management guidance. |

### Clinical-source register

- [ASAM Alcohol Withdrawal Management Guideline (2020)](https://www.asam.org/quality-care/clinical-guidelines/alcohol-withdrawal-management-guideline)
- [Joint Clinical Practice Guideline on Benzodiazepine Tapering (2025)](https://www.asam.org/quality-care/clinical-guidelines/benzodiazepine-tapering)
- [APA clinical practice guideline index](https://www.psychiatry.org/psychiatrists/practice/clinical-practice-guidelines)
- [NIAAA medication overview](https://www.niaaa.nih.gov/health-professionals-communities/alcohol-interventions-young-adults-healthcare-professionals)
- [FDA benzodiazepine boxed-warning update](https://www.fda.gov/drugs/drug-safety-and-availability/fda-requiring-boxed-warning-updated-improve-safe-use-benzodiazepine-drug-class)
- [Wolpaw et al. (2025) phenobarbital implementation study](https://pubmed.ncbi.nlm.nih.gov/40853658/)
- [Lee et al. emergency-department phenobarbital systematic review](https://pubmed.ncbi.nlm.nih.gov/37923363/)
- [AAAP AUD educational activity](https://education.aaap.org/Public/Catalog/Details.aspx?id=WU%2FSj5SOC0LtamCBwLoI0A%3D%3D)

## Technical, UX, and accessibility findings

- The dashboard’s dense navigation, 32 expandable topics, embedded teaching activities, and inline tools make individual claims hard to review, test, cite, or sequence by learner level.
- At a 375 px rendered viewport, both pages show horizontal overflow or clipped top navigation. The dashboard header clips controls; the phenobarbital navigation and large protocol table scroll horizontally without strong affordance.
- The dashboard has no page-level `h1` or `main` landmark. Several tool controls, including search and calculator inputs, lack programmatic labels. Custom modal overlays require a later keyboard, focus-trap, Escape, and focus-return audit.
- The phenobarbital page has a useful `h1` and heading hierarchy but no `main` landmark. Editable dose-log fields lack labels; its dosing table lacks a caption; and the click-to-edit dose entries are mouse-oriented.
- The live Feedback / IT Request client renders successfully. A legacy FormSubmit endpoint and related source code remain dormant in the dashboard source and should be removed or isolated only during later approved cleanup.

## Learner-objective map

| Learner level | Objectives |
| --- | --- |
| PGY-1 | Recognize alcohol and benzodiazepine withdrawal risk; use structured assessment within its limits; identify first-line treatment and escalation; explain AUD medications and benzodiazepine safety; apply stigma-aware, recovery-oriented care. |
| PGY-3 | Manage diagnostic ambiguity and co-occurring conditions; individualize tapering and medication selection; critique evidence; apply monitored severe-withdrawal and phenobarbital boundaries; lead safe escalation and teaching discussions. |

## Risks requiring independent review

- High stakes: all withdrawal thresholds, disposition criteria, medication dose/contraindication/monitoring claims, benzodiazepine equivalents, cross-taper statements, phenobarbital protocols, calculator inputs and outputs, and numeric outcome claims.
- Do not treat the page’s current calculators as point-of-care decision support until institutional ownership, intended use, validation, and clinician sign-off are determined.
- Cite numeric claims to accessible published abstracts or use direction-and-magnitude language when a traceable numeric source is unavailable.
- A source listed in a reference section is not sufficient by itself: retained high-stakes claims need nearby linked citations, source-to-claim verification, direct-link verification, and distinct clinical-sign-off state.

## Decision workbook and citation assurance

The prepared review workbook contains a PGY-1 epidemiology foundation plus the 32-topic map, teaching activities, tools/calculators, high-stakes source crosswalk, and a decision dashboard. It uses a custom-answer field on every decision row; dropdowns for single-select decisions; and review, accept-draft, and needs-discussion controls. Repository documentation remains canonical. The workbook must be imported as native Google Sheets and visually verified before owner review begins.

Codex owns the following before any approved content is published: verify the cited source supports the exact claim; record source type and update/publication date; verify the direct link opens to the intended source; verify citation placement in the rendered page; and flag inaccessible, stale, conflicting, paywalled, or unsupported sources. Clinical sign-off remains a separate requirement.

## Decision points before architecture or design

1. Decide which calculators remain educational demonstrations, become clearly non-actionable references, or are removed pending institutional protocol ownership.
2. Complete item-level keep, update, remove, and PGY-1/PGY-3 classification before deciding between combined versus separate sites, layered content, or a learner-level switch.
3. Decide whether the future surface should offer a guided presenter sequence, an independent reference mode, or both.
4. Defer Visualize until content disposition, learner-level mapping, and viable information-architecture options exist. At that point, use it to compare learner and presenter flows, including a possible Prezi-like guided sequence, rather than as a premature design exercise.
5. Require independent source review and clinical sign-off for each high-stakes threshold, dose, equivalency, calculator output, or medication recommendation.

## Baseline-complete next steps

1. Crosswalk every high-stakes claim and each calculator input/output to a dated source, labeled guideline, regulatory source, institutional protocol, observational evidence, or unsupported claim.
2. Complete the item-level keep, update, remove, and PGY-1/PGY-3 classification for the 32 subtopics, teaching activities, and tools.
3. Test any later changes at 320 px and desktop widths; verify keyboard order, modal focus/Escape/return behavior, labels, landmarks, tables, contrast, print output, internal links, and calculator boundary cases.
4. Do not edit educational content, redesign, publish, or alter hosting until those reviews and decision points are complete.
