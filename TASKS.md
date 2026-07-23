# Tasks - sud-education-hub

## Status Key
- [ ] Not started
- [~] In progress
- [x] Complete
- [!] Blocked - include reason in parentheses

## Active Tasks
- [~] Maintain `sud-education-hub` as the clinician-facing SUD education destination while keeping `sud-patient-education` separate.
- [~] Establish the one-topic-unit-at-a-time SUD redesign process and maintain its canonical audit/governance records.
- [~] Verify the shared private `website-feedback` GitHub Issues / Vercel feedback service, then replace FormSubmit before the first topic rebuild. The private repository, API source, nine legacy feedback issues, and Vercel project are in place; `website-feedback.vercel.app` is unavailable, and an alternative production hostname plus the server-side GitHub token remain to be completed.

## Upcoming
- [ ] Select the first topic unit for its detailed educational, technical, UX, and accessibility audit.
- [ ] After the first rebuilt topic unit, decide whether the public SUD hub remains on GitHub Pages or moves fully to Vercel.
- [ ] Decide whether `SUD-Website-Template` remains standalone long-term or gets repurposed.
- [ ] Decide what role, if any, the old `AddictionEd` repo should retain after cutover.
- [ ] Confirm whether new topic dashboards are planned, such as tobacco or standalone benzodiazepines.
- [ ] Review current `phenobarbital-aws.html` source for deferred cleanup items from the 2026-05-07 refactor note.
- [ ] Confirm exact public URLs and internal navigation after future topic changes.

## Completed (last 30 days)
- [x] Consolidated clinician-facing SUD topic repos into `sud-education-hub`.
- [x] Preserved patient-facing content as a separate `sud-patient-education` repo.
- [x] Kept topic pages in separate folders instead of flattening the hub.
- [x] Repointed the TroyMD dashboard Phenobarbital for AWS route to `sud-education-hub/alcohol-benzodiazepines/phenobarbital-aws.html`.
- [x] Refactored Phenobarbital AWS ceiling/evidence wording in the legacy source before consolidation.

## Backlog
- [ ] Continue removing public-facing migration/source-repo language if it appears in topic pages.
- [ ] Keep evidence pages concise and psychiatry/addiction-medicine colleague-facing.
- [ ] If migrating more SUD context later, verify whether it belongs here or in patient education before adding it.
