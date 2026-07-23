# Alcohol and Benzodiazepines Audit

## Status

- **Unit:** combined alcohol and benzodiazepines, including `alcohol-benzodiazepines/phenobarbital-aws.html`.
- **Phase:** deep audit and research preparation; no redesign or educational-content revision has been approved.
- **Rendered review:** initial live review completed 2026-07-23.
- **Purpose:** establish a source-backed inventory and identify what requires detailed verification before any curriculum, UX, or implementation choice.

## Current product inventory

| Surface | Current role | Notable functionality |
| --- | --- | --- |
| `alcohol-benzodiazepines/index.html` | Combined educational dashboard | 5-category, 32-subtopic knowledge tree; Explore and Activities modes; search, theme toggle, print view, clinical cases/quizzes, CIWA-Ar calculator, benzodiazepine equivalency converter, standard-drinks calculator, and medication quick reference. |
| `alcohol-benzodiazepines/phenobarbital-aws.html` | Standalone clinical reference | Phenobarbital pharmacology, protocol comparison, 72-hour cumulative-dose calculator, comparative evidence, safety, and guideline summary. |

The dashboard and reference are both live. They should remain grouped for the redesign, but the phenobarbital reference needs its own high-stakes evidence and calculator verification track.

## Initial technical and UX findings

- Both surfaces are self-contained static HTML files with embedded CSS, content, and JavaScript; the dashboard is approximately 270 KB and the phenobarbital reference approximately 54 KB. This makes changes easy to publish but difficult to review, test, reuse, and maintain.
- The dashboard combines foundational material, advanced inpatient management, reference calculations, and activities in one navigation model. It does not yet distinguish PGY-1 versus PGY-3 paths or presenter versus independent-learning paths.
- The dashboard has a substantial interactive footprint, but its feedback form still uses the legacy FormSubmit integration. It will be migrated to the shared image-capable GitHub Issues service as repository infrastructure work, without treating that as a redesign.
- The rendered dashboard is navigable and exposes its main functions, but its content-dense knowledge tree, multiple utility controls, and unstructured category sequence need a later focused accessibility, mobile, keyboard, and lecture-flow review.
- The phenobarbital page clearly labels its 20–30 mg/kg cumulative figure as practice-based rather than guideline-endorsed. That framing is a strength, but the calculator, exact protocol values, source provenance, and clinical guardrails require independent verification before any reliance or redesign.

## Initial content-risk register

These are audit questions, not conclusions or content changes.

| Priority | Topic needing verification | Why it matters |
| --- | --- | --- |
| High | Alcohol withdrawal severity, disposition, symptom scales, and medication pathways | The dashboard includes numerical thresholds and management recommendations that must align with current ASAM guidance and clear limits of CIWA-Ar use. |
| High | Benzodiazepine tapering, withdrawal, equivalency, and conversion tool | The current official source is the 2025 Joint Clinical Practice Guideline on Benzodiazepine Tapering; equivalency tables and taper decisions require explicit uncertainty and patient-specific safeguards. |
| High | Phenobarbital protocols and cumulative-dose calculator | A calculation may be interpreted as bedside dosing advice. Each reference protocol, its population, route, monitoring setting, and limit must be traceable. |
| High | Alcohol pharmacotherapy selection | The dashboard cites “APA 2023,” whereas APA’s current listed pharmacological AUD guideline is 2018. Treatment claims need a source-by-source refresh rather than a blanket citation. |
| Medium | Categorical language about long-term benzodiazepines in AUD | The page should distinguish general risk, withdrawal treatment, and an otherwise-indicated co-occurring condition rather than rely on unsupported absolutes. |
| Medium | Neurobiology, prognosis, and stigma statistics | Numerous precise claims appear in expandable content; they need source attribution or appropriately qualified qualitative wording. |

## Source register for this unit

Use the following sources first. Record the relevant recommendation and publication/update date alongside every high-stakes claim considered for revision.

| Source | Role in the audit |
| --- | --- |
| [ASAM Clinical Practice Guideline on Alcohol Withdrawal Management (2020)](https://www.asam.org/quality-care/clinical-guidelines/alcohol-withdrawal-management-guideline) | Primary source for alcohol-withdrawal assessment, level of care, medication approach, monitoring, and phenobarbital recommendation boundaries. |
| [Joint Clinical Practice Guideline on Benzodiazepine Tapering (2025)](https://downloads.asam.org/sitefinity-production-blobs/docs/default-source/guidelines/benzodiazepine-tapering-2025/bzd-tapering-document---final-approved-version-for-distribution-02-28-25.pdf) | Primary source for safe tapering, withdrawal risk, individualized pace, care settings, and limits of dose-equivalence conversion. |
| [APA guideline index: Pharmacological Treatment of Patients With Alcohol Use Disorder (2018)](https://www.psychiatry.org/psychiatrists/practice/clinical-practice-guidelines) | Primary psychiatric guideline source for AUD medication selection and contraindication framing. |
| [AAAP educational opportunities and collaborations](https://www.aaap.org/education/educational-opportunities/) | Addiction-psychiatry education and competency context; use where it provides relevant curricular framing, not as a substitute for a clinical guideline. |
| [NIAAA Alcohol Treatment Navigator for healthcare professionals](https://alcoholtreatment.niaaa.nih.gov/healthcare-professionals) | Federal source for evidence-based care and referral framing. |
| [FDA benzodiazepine boxed-warning update](https://www.fda.gov/drugs/drug-safety-and-availability/fda-requiring-boxed-warning-updated-improve-safe-use-benzodiazepine-drug-class) | Regulatory source for class risks, gradual discontinuation, and alcohol/opioid co-use warnings. |

## Next audit steps

1. Create a complete, item-level content inventory for the dashboard and phenobarbital reference.
2. Map each high-stakes claim, algorithm, calculator input/output, and cited guideline to an authoritative source.
3. Complete rendered keyboard, responsive, presentation-flow, and accessible-name review.
4. Define draft PGY-1 and PGY-3 learning objectives before choosing an information architecture.
5. Consider Visualize only when there are concrete pathway or information-architecture alternatives to compare.
