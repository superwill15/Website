---
title: "Insure Your Maximo Application Suite Migration Against Known Data Failures"
date: "2025-11-03"
description: "Data quality problems derail most CMMS upgrades. Here's how to catch them before they cost you 6 months and £200K in consultant time."
---

# Insure Your Maximo Application Suite Migration Against Known Data Failures

**Data quality problems derail most CMMS upgrades. Here's how to catch them before they cost you 6 months and £200K in consultant time.**

-----

## The Pattern

Maximo Application Suite (MAS) migrations follow a predictable timeline:

**Months 1-6:** Requirements gathering, system design, consultant scoping
**Months 7-12:** Configuration, testing, user training
**Month 13:** Data migration begins
**Month 13.5:** "We've found issues with your data"
**Months 14-18:** Emergency data remediation
**Month 19:** Go-live (6 months late, 40% over budget)

The delay isn't system complexity or consultant competence. It's data quality issues that nobody checked until it was expensive to fix.

-----

## Understanding MAS vs Legacy Maximo

IBM rebranded their CMMS platform as **Maximo Application Suite (MAS)**, which contains **Maximo Manage 8.x** as the core asset management component. Most organizations are migrating from **Maximo 7.6** (on-premise) to MAS (cloud-native).

The architectural shift to cloud introduces significantly stricter data validation. Issues that Maximo 7.6 ignored or allowed through manual workarounds will block your MAS migration completely.

-----

## The Known Data Failures

Industry research and consultant experience shows these problems appear in most MAS migrations. The only variable is when you discover them.

### 1. Missing and Incomplete Data

**What breaks:** Legacy systems often lack data that MAS requires. Fields that were optional in 7.6 become mandatory. Data imported from spreadsheets over decades has gaps.

**The research:** Data completeness is the most common migration issue. You're trying to populate one database from another, and that other database doesn't have the data you need.

**Discovery cost:** Populating missing required fields for thousands of records during migration = 3-4 weeks consultant time = £45-60K

**Prevention cost:** Pre-migration data completeness analysis identifies gaps when fixing is simple

**Real scenario:**

```
15,000 assets imported from Excel over 20 years
Many missing: STATUS, ASSETTYPE, SITEID, parent relationships
7.6: Tolerated blanks, queries worked around missing data
MAS: Import rejected - required fields cannot be NULL
Fix required: Maintenance team reviews each asset to populate correct values
Impact: 6-8 week delay gathering information that should have been staged
```

-----

### 2. Data Format Inconsistencies

**What breaks:** Different date formats, inconsistent naming conventions, text in numeric fields. Legacy systems used varying approaches to data management over 20+ years.

**The research:** Data compatibility depends on formats, standards, structures, and rules. When source systems use different formats than target systems, migrations fail.

**Discovery cost:** Import failures require data cleanup and re-import attempts = 2-4 weeks = £30-60K

**Prevention cost:** Format validation and automated correction during staging

**Real scenario:**

```
Date fields contain: "01/03/2024", "March 1 2024", "1-3-24", blank
Cost fields contain: "£1,250", "1250.00", "~1000", "N/A"
Asset numbers: "PUMP-001", "pump001", "PUMP 001", "Pump-1"
7.6: Flexible parsing, coercion, manual workarounds
MAS: Strict validation - "Invalid format" errors across thousands of records
Impact: Manual data cleansing mid-project when timeline is at risk
```

-----

### 3. Classification and Hierarchy Problems

**What breaks:** Asset hierarchies where parent relationships changed cannot migrate. Two classifications with the same hierarchy path cause conflicts. Parent locations that were deleted leave orphaned assets.

**The research:** Classification data related to the CLASSIFICATION table often fails migration. Hierarchies where parent classifications changed cannot be migrated, and duplicate hierarchy paths are rejected.

**Discovery cost:** Rebuilding corrupted hierarchies during migration = 4-6 weeks = £60-90K

**Prevention cost:** Hierarchy validation and correction in staging environment

**Real scenario:**

```
Site hierarchy restructured 3 times over 15 years
Parent locations deleted but child assets never reassigned
Classification "Rotating Equipment" exists at multiple levels
7.6: Allowed inconsistent hierarchy, reported as-is
MAS: Import fails - "Cannot migrate classification hierarchy"
Fix required: Rebuild entire location structure with valid parent relationships
Impact: 8-12 week delay while maintenance team provides correct structure
```

-----

### 4. Undocumented Legacy Customizations

**What breaks:** Business logic implemented in PL/SQL procedures. Custom applications poorly documented. Developers who built modifications long gone. Data structures that evolved without documentation.

**The research:** Legacy applications are often poorly or not documented, original developers unavailable, and business logic implemented outside standard Maximo structures.

**Discovery cost:** Reverse engineering undocumented customizations = 6-10 weeks = £90-150K

**Prevention cost:** Documentation and assessment before migration starts

**Real scenario:**

```
Custom work order routing logic in Oracle PL/SQL triggers
Asset criticality calculated by external script (not Maximo field)
PM generation uses custom tables not part of standard schema
Documentation: None. Original developer: Left company in 2015.
7.6: Works but nobody knows how
MAS: Custom logic breaks, standard migration doesn't capture it
Fix required: Reverse engineer logic, rebuild in MAS-compatible way
Impact: 3-4 month delay rediscovering and recreating business rules
```

-----

### 5. Legacy Data Not Properly Separated

**What breaks:** Decades of data mixed with current operational records. Consultants must spend time identifying what should migrate versus what should be archived. Test migrations include unnecessary historical records, slowing validation cycles.

**The research:** Historical data significantly increases active database size, leading to slower upgrade execution, more downtime, and increased risk of data-related issues during the upgrade process.

**Discovery cost:** Consultant time identifying migration scope + repeated test cycles = £40-80K

**Prevention cost:** Data assessment and archiving strategy before migration starts

**Real scenario:**

```
Maximo 7.6 database contains 20 years of work orders
Active maintenance: 2020-present (45,000 work orders)
Historical archive: 2005-2019 (380,000 work orders)
No clear archive strategy documented
7.6: Everything accessible, performance acceptable
MAS: Consultant must determine what to migrate
Impact: 2-3 weeks scoping what's "current" vs "historical"
Plus: Initial test migrations include everything, taking days to run
Fix required: Define retention policy, archive old data, migrate only active records
```

-----

## The Insurance Model

**Total exposure:** £235-345K in unplanned consultant time
**Timeline risk:** 3-6 month delay
**Reputation cost:** Board-level explanations for budget overrun

**The premium:** £10-50K data staging platform that validates all five failure modes before the migration project starts.

**Coverage period:** 2-3 months parallel to consultant scoping phase

**Claim process:** Fix issues in staging environment when:

- Stakes are low (pre-production)
- Changes can be tested safely
- Consultant rates aren't ticking (not on critical path)
- Timeline isn't at risk

-----

## What This Actually Looks Like

**Traditional approach:**

```
Month 1-12:  Configuration and design
Month 13:    Start data migration
Month 13.5:  Discover data problems
Month 14-18: Emergency fixes in production
Month 19:    Go-live (delayed)
```

**Staged approach:**

```
Month 1-3:   Stage and validate data (parallel to scoping)
Month 4-15:  Configuration and design (data issues already resolved)
Month 16:    Data migration (loads cleanly on first attempt)
Month 17:    Go-live (on schedule)
```

**Time saved:** 6 months
**Cost avoided:** £200-500K
**Risk eliminated:** Known failure modes caught early

-----

## The Business Case

**Project budget:** £2M
**Contingency buffer:** 10-15% (£200-300K)
**Data staging insurance:** From £30K (1.5% of total)

**ROI calculation:**

- If migration is clean: From £30K spent, schedule protected
- If data issues found early: From £30K + 3 months fixing = £60-80K total
- If issues found during migration: From £30K + 6 months emergency fixes = £200-350K total

**Expected value:** Data staging pays for itself if it prevents one 4-week consultant delay.

The question isn't whether you can afford data staging. It's whether you can afford not to.

-----

## What Qualifies as "At Risk"

Run these queries against your Maximo 7.6 database:

```sql
-- Duplicate asset numbers
SELECT ASSETNUM, COUNT(*)
FROM ASSET
GROUP BY ASSETNUM
HAVING COUNT(*) > 1;

-- Orphaned assets (no parent or location)
SELECT COUNT(*)
FROM ASSET
WHERE PARENT IS NULL AND LOCATION IS NULL;

-- Invalid PM job plan references
SELECT COUNT(*)
FROM PM
WHERE JPNUM IS NOT NULL
AND JPNUM NOT IN (SELECT JPNUM FROM JOBPLAN WHERE STATUS='ACTIVE');

-- Missing PMANCESTOR records (critical for work order generation)
SELECT COUNT(*)
FROM PM
WHERE PMNUM NOT IN (SELECT PMNUM FROM PMANCESTOR);

-- Assets with no status
SELECT COUNT(*)
FROM ASSET
WHERE STATUS IS NULL OR STATUS = '';

-- Locations with invalid parent references
SELECT COUNT(*)
FROM LOCATIONS
WHERE PARENT IS NOT NULL
AND PARENT NOT IN (SELECT LOCATION FROM LOCATIONS);
```

**Risk assessment:**

- **If any query returns > 100 records:** You have unmitigated migration risk
- **If multiple queries return > 1,000 records:** High probability of 3+ month delay
- **If PMANCESTOR query returns any records:** Work order generation will fail in MAS

-----

## Prevention vs. Recovery: The Cost Difference

**The math is simple:**

### Finding duplicate asset numbers in staging environment:

- Export data (1 hour)
- Run validation (5 minutes)
- Review results (2 hours)
- Fix in staging (1-2 days)
- Verify correction (1 hour)
- **Total: 3-4 days, £0 consultant time**

### Finding duplicate asset numbers during migration:

- Consultant discovers issue (1 day)
- Impact assessment meeting (2 days)
- Manual investigation (3-5 days)
- Fix strategy debate (2 days)
- Emergency fixes in production (5-10 days)
- Re-test integration (3-5 days)
- **Total: 3-4 weeks, £30-50K consultant time**

**Same problem. 10x cost difference.**

This pattern repeats across all five failure modes. Data problems don't get cheaper to fix over time - they get exponentially more expensive as project timeline pressure increases.

-----

## Why MAS Makes This Worse

Maximo 7.6 databases typically accumulated 15-20 years of:

- Workarounds for system bugs
- Manual edits that bypassed validation
- Incomplete migrations from even older systems (MP2, Datastream 7i)
- Custom modifications that broke referential integrity
- Data imported from spreadsheets without proper validation

**7.6 was forgiving.** It converted invalid data types, allowed null foreign keys, and let you manually override most constraints.

**MAS is not forgiving.** Cloud-native architecture means:

- Strict schema enforcement (no "close enough" data types)
- Mandatory referential integrity (all foreign keys must exist)
- Required Row-Level Security (organizational structure must be perfect)
- No post-migration "fix it later" - RLS prevents admin workarounds

The technical debt in your 7.6 database will surface during MAS migration. The question is whether you surface it deliberately (staging) or accidentally (go-live).

-----

## Getting Started

**Week 1:** Export current Maximo 7.6 data (assets, locations, PMs, job plans, routes)

**Week 2:** Load into staging environment, run comprehensive validation suite

**Week 3:** Review validation results, prioritize fixes by impact

**Weeks 4-8:** Remediate issues in staging, verify corrections don't break dependencies

**Week 9:** Export clean data, ready for MAS migration phase

**Parallel activity:** IBM consultant proceeds with MAS configuration (not blocked on data work)

**Key advantage:** Data validation completes before consultant discovery phase begins. Issues are found when fixing is cheap, not when timeline is at risk.

-----

## The Question

Would you rather spend:

- **From £30K now** finding data problems when they're cheap to fix
- **£200K+ later** finding them when the project timeline is at risk

That's not a software purchase decision. That's project insurance.

Every Maximo 7.6 to MAS migration encounters these five data failures. The only variable is whether you find them during staging (fixable) or during go-live (expensive).

-----

## Next Steps

**Option 1: Self-Assessment**
Run the SQL queries above against your 7.6 database. If any return concerning numbers, you have quantified risk.

**Option 2: Professional Assessment**
30-minute data quality audit with MAS migration specialist. We'll:

- Review your validation query results
- Identify highest-risk data areas
- Estimate remediation effort required
- Provide staging vs. emergency fix cost comparison

**Option 3: Download Checklist**
Complete Maximo 7.6 to MAS migration data validation checklist (PDF). Covers all five failure modes plus 20 additional validation checks.

-----

**The reality:** Your MAS migration will encounter data problems. The only choice is whether you encounter them early (cheap) or late (expensive).

Data staging isn't a nice-to-have. It's insurance against known, predictable, expensive failures.

-----

*AssetStage provides data staging and validation for CMMS migrations, helping organizations identify and fix data quality issues before production deployment. [Learn more about our migration services](/) or [start your free trial](https://app.assetstage.io) to validate your Maximo data today.*
