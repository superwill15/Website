---
title: "Don't Move the Mess: A Data Engineer's Guide to Maximo MAS 9 Migration"
date: "2026-03-10"
description: "Your Maximo migration will fail without clean data. Here's exactly what to fix — asset hierarchies, duplicates, field gaps — before you move to MAS 9."
---

# Don't Move the Mess: A Data Engineer's Guide to Maximo MAS 9 Migration

**Your Maximo migration will fail without clean data. Here's exactly what to fix — asset hierarchies, duplicates, field gaps — before you move to MAS 9.**

-----

If you're a Maximo admin or maintenance engineer, you've probably had "MAS migration" on your radar for a while now. Maybe your manager has been talking about it. Maybe IBM has been calling. Maybe you've been quietly ignoring the whole thing, hoping it goes away.

It's not going away.

Maximo 7.6.1.x mainstream support ended in September 2025. Extended support runs until September 2026. If you're on MAS 8.10 or 8.11, standard support ends April 2026. MAS 9.0 is here, and IBM is making it very clear: this is where Maximo is going.

Most of the migration guides out there focus on OpenShift, Kubernetes, licensing models, and infrastructure. That's all important. But here's the thing nobody wants to talk about: **the data is what kills migrations**. Not the infrastructure. Not the licensing. The 15 years of messy, inconsistent, "we'll-fix-that-later" data sitting in your Maximo database right now.

This article is about what to actually fix in your data before you touch MAS 9.

-----

## Why MAS 9 Is Less Forgiving Than Maximo 7.6

Your old Maximo instance was tolerant of messy data because humans were the primary interface. A technician could look at a misspelled asset description and figure out what it meant. A planner could eyeball a hierarchy and mentally fill in the gaps.

MAS 9 doesn't work like that.

The architecture has changed fundamentally. MAS runs containerised on Kubernetes, not on standalone servers. MongoDB now serves as the data dictionary and default user registry. The whole system is built around modular services — Manage, Monitor, Health, Predict, Assist — each consuming your data through APIs that expect clean, consistent, well-structured inputs.

Here's why that matters: **APIs are brittle when faced with inconsistent values or broken relationships.** A human can look at "PUMP-001" and "PMP-001" and know they're the same thing. An API can't. A human can see that an asset's parent location was deleted and figure out where it should go. An API throws an error and stops.

If you're moving to MAS specifically to use the AI and IoT capabilities — Health scoring, Predict failure forecasting, Monitor sensor integration — those modules amplify data quality problems rather than solving them. Feed Predict a dataset full of duplicate assets and missing manufacturer data, and you'll get predictions that are worse than useless. You'll get predictions that make people distrust the system.

The custom workflows your team built over the past decade also need attention. Automation scripts may reference hard-coded values that exist in your legacy data but won't survive a cleanup. Escalation rules may depend on classification structures that you're about to restructure. Configuration and data are intertwined — you can't clean one without reviewing the other.

**Bottom line: what Maximo 7.6 tolerated, MAS 9 will reject.**

-----

## The 6 Data Problems That Will Wreck Your Migration

After working with organisations going through CMMS migrations, we see the same problems over and over. Here are the six that cause the most damage — and what to do about each one.

### 1. Broken Asset Hierarchies

**The problem:** Parent-child relationships that reference deleted locations or assets. Hierarchy depth that varies wildly — some sites use 3 levels, others use 7 for equivalent structures. Locations and assets mixed inappropriately (assets sitting under assets when they should be under locations, or vice versa).

**Why it happens:** Over 10-15 years, different people manage the data with different standards. Sites get decommissioned but their child records aren't cleaned up. Restructures happen in the physical plant but nobody updates Maximo.

**What breaks in MAS:** The Spatial, Monitor, and Health modules all rely on clean hierarchies. Broken parent references cause cascade failures during migration — you can't import 5,000 child assets if their parent locations are invalid. Even if you force them through, the hierarchy-dependent features in MAS won't function correctly.

**How to fix it:**

- Export your full hierarchy and validate that every parent reference actually exists
- Standardise hierarchy depth across all sites — agree on a structure (typically: Site → Facility → System → Equipment → Component) and apply it consistently
- Identify and resolve all orphaned records — assets whose parent was deleted but still reference the old parent ID
- Decide whether each record should be a location or an asset — this distinction matters much more in MAS than it did in 7.6

-----

### 2. Duplicate Records

**The problem:** The same physical pump entered three times with slight naming variations: "PUMP-CW-001", "CW-PUMP-001", and "Cooling Water Pump 1". Duplicate locations for the same physical space. Duplicate spare parts with different commodity codes pointing to the same item on the shelf.

**Why it happens:** Multiple people entering data over many years. Mergers and acquisitions bringing duplicate data sets. MXLoader imports using Sync-AddChange that created records instead of updating existing ones. Nobody had time to deduplicate because the system still "worked."

**What breaks in MAS:** Duplicates create conflicting IoT sensor mappings — which "PUMP-CW-001" does the vibration sensor belong to? Work order history gets split across duplicate records, making failure analysis unreliable. Predict and Health give inaccurate scores because they're looking at partial histories. Your spare parts inventory looks wrong because BOMs reference different versions of the same asset.

**How to fix it:**

- Export assets, locations, and items. Cross-reference by a combination of serial number, location, classification, and description to identify probable duplicates
- For each set of duplicates, define a "golden record" — the one that keeps all the history and becomes the single source of truth
- Merge work order history and meter readings onto the golden record before deleting the duplicates
- This is tedious work in Excel. It's exactly the kind of problem that data staging tools are designed to solve at scale

-----

### 3. Empty Critical Fields

**The problem:** Asset criticality: blank on 60% of records. Manufacturer: blank on 40%. Model number: populated but inconsistent ("Grundfos" vs "GRUNDFOS" vs "grundfos pumps"). Serial number: blank on half your assets. Installation date: missing on anything installed before 2015 because "we didn't track that back then."

**Why it happens:** When Maximo was first set up, nobody enforced mandatory fields. Data was entered to get work orders raised, not to build a complete asset register. Over time, the gaps compounded.

**What breaks in MAS:** Maximo Health and Predict need manufacturer, model, and serial number to provide failure predictions. No manufacturer data = no failure curve = no predictions. Criticality analysis is meaningless if 60% of your assets don't have a criticality rating. Monitor can't alert on the right assets if it can't distinguish critical from non-critical.

**How to fix it:**

- Don't try to fill every field on every record — you'll never finish. Instead, identify which fields your target MAS modules actually consume and prioritise those
- For Health and Predict: manufacturer, model, serial number, installation date, criticality
- For Monitor: classification, location (for spatial placement), operational status
- For Manage (core): all parent references, status, description, classification
- Use a phased approach — clean the highest-criticality assets first, then work outward

-----

### 4. Classification Chaos

**The problem:** Multiple classification hierarchies used across sites or time periods. Site A uses a custom classification tree built in 2009. Site B adopted ISO 14224 in 2018. Site C uses something that started as ISO 14224 but was modified until it no longer conforms to the standard. Classifications that were changed mid-life, breaking parent-child relationships in the classification hierarchy.

**Why it happens:** Standards evolve, teams change, and nobody enforces consistency across sites. Sometimes a well-meaning engineer restructures the classification tree without understanding the downstream impact on every asset that references it.

**What breaks in MAS:** You cannot migrate a classification hierarchy where parent classifications were changed in a way that breaks the original structure. MAS Manage's new automation features depend on consistent classification for grouping, reporting, and PM scheduling. If your classifications are inconsistent, every report and dashboard built on them will be unreliable.

**How to fix it:**

- Choose one classification standard and commit to it. ISO 14224 works well for oil & gas and process industries. RDS-PP or RDS-PS suits power generation and electrical systems. SFI suits maritime. Custom systems work if they're well-documented and consistently applied
- Map every existing classification to the target standard — this is a manual exercise that requires engineering knowledge, not just data skills
- Rebuild the classification hierarchy from scratch in your target structure, then reclassify assets against it
- Do this in a staging environment, not in your live Maximo instance

-----

### 5. Sequence and Key Conflicts

**The problem:** The MAXSEQUENCE table is out of sync with actual data. This happens when data was loaded via MXLoader or direct SQL inserts that bypassed sequence management. Someone ran an INSERT statement directly against the MAXIMO schema, creating records with IDs higher than MAXSEQUENCE thinks is current.

**Why it happens:** Years of direct database interventions, emergency fixes, data loads from external sources, and environment refreshes that didn't properly reset sequences. In MAS 9, the problem is compounded because SQL Server now uses native sequences rather than the Maximo-managed MAXSEQUENCE table.

**What breaks in MAS:** 2601 errors — duplicate key violations. Your migration batch processes 500 records, hits a key conflict at record 347, and the whole batch fails. You fix it, restart, and hit another conflict at record 412. This can turn a weekend migration into a week-long nightmare.

**How to fix it:**

- Audit every MAXSEQUENCE value against the actual maximum ID in each corresponding table
- Where MAXSEQUENCE is behind, update it to max(ID) + 100 (buffer for safety)
- Document every table where you find discrepancies — these are the tables where someone has been doing direct SQL operations
- After cleanup, enforce a policy: no direct SQL inserts into Maximo tables without updating sequences

-----

### 6. Orphaned Transactional Data

**The problem:** Work orders referencing assets that no longer exist. PM schedules pointing to deleted routes or job plans. Meter readings for decommissioned equipment. Purchase orders linked to vendors that were removed from the vendor register.

**Why it happens:** When assets are decommissioned, the asset record gets set to DECOMMISSIONED status, but the related work orders, PMs, and meter readings stay behind. When someone does a bulk delete of "old" locations, the work orders that referenced those locations become orphans.

**What breaks in MAS:** Referential integrity failures during migration. The migration tool tries to import a work order, finds that the referenced asset doesn't exist, and stops. Multiply this by thousands of orphaned records and your migration is dead in the water.

**How to fix it:**

- Before migration, decide what transactional history you actually need to bring across. Usually the answer is: open work orders, active PMs, and the last 12-24 months of completed work orders (for Health/Predict to analyse)
- Archive everything else. IBM provides tools for archiving Maximo transaction data — use them
- For the records you are migrating, validate every foreign key reference: does the asset exist? Does the location exist? Does the job plan exist?
- Fix or remove any records with broken references before attempting the migration

-----

## The Migration Data Sequence

Even with clean data, order matters. You can't import an asset that references a location that doesn't exist yet. You can't import a PM that references a job plan that hasn't been created.

Here's the correct loading sequence for MAS 9 migration:

1. **Sites and organisations** — everything references these, so they go first
2. **Classification hierarchies** — must exist before assets can reference them
3. **Locations** — top of hierarchy down. Parents before children. Level 1 locations first, then level 2, then level 3, and so on
4. **Assets** — each asset maps to a location and references a classification. Both must exist first
5. **Item master / spare parts** — the catalogue of parts that links to assets via BOMs
6. **Job plans and safety plans** — define the work that PMs will schedule
7. **PM programs and routes** — reference assets, locations, and job plans
8. **Open work orders** — reference everything above
9. **Meter readings and condition data** — reference assets, needed for Health and Predict

Each layer depends on the one before it. If locations have errors, every asset mapping fails. If classifications are wrong, every attribute assignment fails. This is why the data quality work happens before the technical migration, not during it.

-----

## A Practical Cleanup Process

Here's the process that works. It's not glamorous, but it's effective.

**Step 1: Audit.** Export your data and profile it. Count the nulls, the duplicates, the orphaned references. Understand the scale of the problem before you touch anything. You need to know whether you're dealing with 500 issues or 50,000.

**Step 2: Define standards.** Agree on naming conventions, classification system, required fields, and hierarchy depth. Document these standards. Get sign-off from operations, not just IT — the maintenance team needs to own the data standards because they're the ones who'll maintain them after migration.

**Step 3: Pilot.** Pick one site or one asset category. Apply your standards. Clean the data. Validate the results with the people who actually work on those assets. If your "cleaned" data doesn't make sense to a maintenance planner, it's not clean enough.

**Step 4: Stage.** Load cleaned data into a staging environment. Run validation against MAS schema rules. Fix issues. This is where having a proper staging tool saves enormous time versus doing it in Excel — you can validate thousands of records in minutes instead of days.

**Step 5: Scale.** Apply the rules you validated in the pilot across all remaining sites and asset categories. This is the bulk of the work and where most projects get bogged down.

**Step 6: UAT.** Load into a MAS test environment. Validate that data renders correctly in Manage, Monitor, and Health. Walk the maintenance team through it. Let them poke holes.

**Step 7: Go-live.** Final export from staging, import to production MAS. Post-migration validation.

Steps 1 through 5 are where 80% of the effort goes. The actual technical migration — steps 6 and 7 — is the easy part if the data is clean.

-----

## The Timeline Reality

Let's be blunt about timing:

- **Maximo 7.6.1.x mainstream support:** ended September 2025
- **Extended support:** until September 2026
- **MAS 8.10/8.11 standard support:** ends April 2026
- **MAS 9.0:** available now

A realistic data cleanup timeline is 3 to 6 months depending on data volume and quality. The technical migration itself takes weeks. The data preparation takes months.

If you haven't started data cleanup, you're already behind. Not critically — you have time if you start now. But every month you wait compresses the timeline further and increases the risk of a rushed migration that moves the mess rather than fixing it.

-----

## Your Next Steps

1. **Get your data out and look at it.** Export your asset, location, and classification data. Profile it. How many nulls? How many duplicates? How many broken parent references? You need to know the scale before you can plan.

2. **Download our free Maximo to MAS 9 Migration Checklist** — it's a 100+ point checklist covering data export sequencing, field mapping, validation rules, and common gotchas. It'll save you from learning the hard lessons the hard way.

3. **Decide your classification standard now, not later.** This is the decision that takes the longest to get consensus on and affects everything downstream.

4. **Start with your highest-criticality assets.** You don't need to clean everything at once. Clean the assets that matter most first, migrate those, prove the process, then scale.

5. **Consider your tooling.** If you're managing this in Excel with 50-tab spreadsheets being emailed between team members, you already know that doesn't scale. Tools that provide hierarchy visualisation, real-time validation, and audit trails exist specifically for this problem.

The organisations that succeed with MAS 9 migration aren't the ones with the biggest budgets or the best infrastructure teams. They're the ones that took their data seriously before the migration started.

**Don't move the mess.**

-----

*This article comes from the team at AssetStage, where we've helped maintenance teams across manufacturing, utilities, and maritime prepare their CMMS data for migration. If you're staring at years of legacy data and wondering where to start, [get in touch](/#contact) — or start with our [free resources](/resources).*
