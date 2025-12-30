# SAP S/4HANA Migration Checklist
## Complete Data Preparation Guide for SAP PM to S/4HANA Asset Management Migration

---

## Before You Start

### What's Different in S/4HANA

| Area | SAP ECC PM | S/4HANA Asset Management | Migration Impact |
|------|------------|--------------------------|------------------|
| **Database** | Any DB (Oracle, DB2, SQL Server) | SAP HANA only | Full data migration |
| **Data Model** | Traditional tables | Simplified data model | Some tables merged/removed |
| **Transactions** | Classic GUI (IW31, IE01, etc.) | Fiori apps + GUI | User retraining |
| **Analytics** | BW, BI reports | Embedded analytics | Report redesign |
| **Integration** | PI/PO, IDocs, BAPIs | SAP Integration Suite | Interface updates |
| **Master Data** | ECC structures | MDG-ready structures | Governance changes |

### Migration Paths

**Path 1: Greenfield (New Implementation)**
- Fresh S/4HANA installation
- Selective data migration
- Process redesign opportunity
- Highest effort, cleanest result

**Path 2: Brownfield (System Conversion)**
- Convert existing ECC to S/4HANA
- All data migrates
- Minimal process change
- Fastest but carries technical debt

**Path 3: Selective Data Transition (Bluefield)**
- New S/4HANA with selected data
- Best of both approaches
- Requires careful scoping

This checklist covers data preparation for all paths.

---

## Phase 1: Discovery & Assessment

### 1.1 Current Environment Documentation

- [ ] Document SAP ECC version: _____________
- [ ] Document Enhancement Package level: _____________
- [ ] Document database platform: _____________
- [ ] List active PM modules:
  - [ ] PM-EQM (Equipment Management)
  - [ ] PM-PRM (Preventive Maintenance)
  - [ ] PM-WOC (Work Order Management)
  - [ ] PM-SMA (Service Management)
  - [ ] PM-PRO (Projects)
  - [ ] PM-WCM (Work Clearance Management)
  - [ ] CS (Customer Service)
  - [ ] QM (Quality Management integration)

### 1.2 Data Volume Assessment

Run transaction DB02 or SE16N to get record counts:

| Table | Description | Record Count | Data Size (MB) |
|-------|-------------|--------------|----------------|
| EQUI | Equipment Master | | |
| EQKT | Equipment Short Text | | |
| EQUZ | Equipment Time Segment | | |
| ILOA | PM Object Location and Account | | |
| IFLOT | Functional Location Master | | |
| IFLOTX | Functional Location Text | | |
| AFIH | Maintenance Order Header | | |
| AFKO | Order Header | | |
| AFPO | Order Item | | |
| AFVC | Operations | | |
| AFVV | Quantities/Dates | | |
| AUFK | Order Master | | |
| CAUFV | Order Header View | | |
| JEST | Object Status | | |
| JSTO | Status Object Info | | |
| MPOS | BOM Position | | |
| MPLA | Maintenance Plan | | |
| MHIS | Maintenance History | | |
| QMEL | Quality Notification | | |
| QMFE | Notification Items | | |
| QMUR | Notification Causes | | |
| VIQMEL | Notification View | | |

### 1.3 Customization Assessment

**Custom Tables (Z tables):**
```
Count of Z* tables in PM area: _____
Critical Z tables requiring migration:
1. _____________
2. _____________
3. _____________
```

**Custom Fields (Append Structures, CI Includes):**
```
Equipment (EQUI): _____ custom fields
Functional Location (IFLOT): _____ custom fields
Notification (QMEL): _____ custom fields
Order (AUFK): _____ custom fields
```

**Custom Transactions:**
| Transaction | Description | Usage (High/Med/Low) | S/4HANA Equivalent |
|-------------|-------------|---------------------|-------------------|
| Z* | | | |
| | | | |

**Custom Reports (Y/Z programs):**
| Report | Description | Usage | Action (Migrate/Retire/Replace) |
|--------|-------------|-------|---------------------------------|
| | | | |
| | | | |

**Enhancements & Modifications:**
- [ ] Count of user exits (CMOD): _____
- [ ] Count of BADIs: _____
- [ ] Count of BTE: _____
- [ ] Count of modified SAP objects (SPAU/SPDD): _____

### 1.4 Data Quality Assessment

**Equipment Master Quality:**
```abap
* Count equipment missing key fields
SELECT COUNT(*) INTO @DATA(lv_no_floc)
  FROM equi
  WHERE tplnr IS INITIAL
    AND eqtyp <> 'V'.

SELECT COUNT(*) INTO @DATA(lv_no_class)
  FROM equi AS e
  LEFT JOIN klah AS k ON k~clint = e~clint
  WHERE k~clint IS NULL
    AND e~eqtyp <> 'V'.

SELECT COUNT(*) INTO @DATA(lv_no_mfr)
  FROM equi
  WHERE herst IS INITIAL
    AND eqtyp <> 'V'.
```

Record results:
| Metric | Count | % of Total | Action Required |
|--------|-------|------------|-----------------|
| Equipment without functional location | | | |
| Equipment without classification | | | |
| Equipment without manufacturer | | | |
| Equipment without serial number | | | |
| Inactive equipment (never used) | | | |
| Duplicate serial numbers | | | |

**Functional Location Quality:**
| Metric | Count | % of Total | Action Required |
|--------|-------|------------|-----------------|
| FLOCs without structure indicator | | | |
| FLOCs without account assignment | | | |
| Orphan FLOCs (invalid parent) | | | |
| FLOCs with missing descriptions | | | |

---

## Phase 2: Data Cleansing

### 2.1 Equipment Master Cleanup

**Identification:**
- [ ] Standardize equipment categories (A, M, Q, etc.)
- [ ] Verify equipment types are consistently used
- [ ] Standardize equipment descriptions (see naming convention guide)
- [ ] Clean up manufacturer names (use vendor master)
- [ ] Clean up model numbers (consistent format)
- [ ] Verify/fill serial numbers
- [ ] Verify/fill inventory numbers

**Organizational Assignment:**
- [ ] Verify maintenance planning plant
- [ ] Verify maintenance plant
- [ ] Verify company code
- [ ] Verify cost center
- [ ] Verify business area
- [ ] Clean up work centers

**Location:**
- [ ] Verify functional location assignments
- [ ] Verify location (maintenance) assignments
- [ ] Verify room assignments
- [ ] Verify asset (fixed asset) links

**Classification:**
- [ ] Verify class type 002 assignments
- [ ] Fill missing characteristic values
- [ ] Standardize characteristic values
- [ ] Remove obsolete classifications

**Delete/Archive Candidates:**
- [ ] Equipment never installed (created but unused)
- [ ] Equipment scrapped >5 years ago
- [ ] Test/training equipment
- [ ] Duplicate equipment (merge first)

### 2.2 Functional Location Cleanup

**Structure:**
- [ ] Verify structure indicator consistency
- [ ] Verify hierarchy is correct (parent-child)
- [ ] Standardize descriptions
- [ ] Verify account assignment categories
- [ ] Clean up object types

**Master Data:**
- [ ] Fill missing planning plants
- [ ] Fill missing maintenance plants
- [ ] Verify cost center assignments
- [ ] Clean up location data (room, building)

**Archive Candidates:**
- [ ] Demolished facilities
- [ ] Divested assets
- [ ] Never-used planning locations

### 2.3 Work Order History Cleanup

**Decide Retention Period:**
- Open/active orders: All (must migrate)
- Completed orders: _____ years
- Archived orders: _____ years (may not migrate)

**Data Quality:**
- [ ] Close ancient open orders (or document why open)
- [ ] Verify all orders have valid equipment/FLOC
- [ ] Clean up orders on deleted equipment
- [ ] Verify operation data completeness
- [ ] Clean up orphan confirmations

### 2.4 Maintenance Plan Cleanup

- [ ] Review plan categories (time-based, counter-based, etc.)
- [ ] Deactivate obsolete plans
- [ ] Verify scheduling parameters
- [ ] Verify task list assignments
- [ ] Clean up call objects
- [ ] Verify maintenance item assignments

### 2.5 Notification Cleanup

**Retention Decision:**
- Completed notifications: _____ years
- Open notifications: All

**Quality:**
- [ ] Close ancient open notifications
- [ ] Verify catalog assignments
- [ ] Verify damage/cause codes
- [ ] Clean up notifications on deleted objects

---

## Phase 3: S/4HANA Specific Preparation

### 3.1 Simplified Data Model Changes

S/4HANA merges/changes some tables. Verify your custom code and interfaces.

| ECC Tables | S/4HANA Status | Action Required |
|------------|----------------|-----------------|
| EQUI, EQUZ, EQBS | Merged to EQUI | Check custom joins |
| IFLOT, IFLOTX | Still separate | None |
| AFIH, AFKO, AFPO | Still separate | None |
| JEST | Still exists | None |
| T370* (old PM config) | Deprecated | Use new config |
| QMEL, VIQMEL | VIQMEL is view | Use QMEL |

### 3.2 Business Partner Conversion

S/4HANA requires Business Partners instead of separate vendor/customer masters.

- [ ] Verify vendor master data quality
- [ ] Plan BP conversion approach (synchronous vs batch)
- [ ] Map vendor to BP for equipment manufacturer
- [ ] Test equipment-BP relationships

### 3.3 Material Master Changes

- [ ] Verify material types are S/4HANA compatible
- [ ] Check for deprecated fields
- [ ] Verify stock management settings
- [ ] Test BOM structures

### 3.4 Finance Integration Changes

- [ ] Verify cost element assignments
- [ ] Check for deprecated cost object types
- [ ] Verify activity type assignments
- [ ] Test settlement rules

---

## Phase 4: Data Export

### 4.1 Export Sequence

Export in dependency order:

**Tier 1: Organizational Structure**
1. [ ] Company Codes (T001)
2. [ ] Plants (T001W)
3. [ ] Planning Plants (T024F)
4. [ ] Maintenance Plants
5. [ ] Work Centers (CRHD, CRCO)
6. [ ] Cost Centers (CSKS)

**Tier 2: Master Data Setup**
1. [ ] Planner Groups (T024I)
2. [ ] Maintenance Activity Types (T353I)
3. [ ] Object Types (T370T)
4. [ ] ABC Indicators (T370A)
5. [ ] Equipment Categories (T370K)

**Tier 3: Catalogs and Codes**
1. [ ] Catalog Profiles (T357P)
2. [ ] Catalogs (TQ80)
3. [ ] Code Groups (QPCD)
4. [ ] Codes (QPCT)
5. [ ] Damage Codes
6. [ ] Cause Codes
7. [ ] Task Codes

**Tier 4: Classification**
1. [ ] Class Types (T174)
2. [ ] Classes (KLAH)
3. [ ] Characteristics (CABN)
4. [ ] Class-Characteristic Links (KSML)

**Tier 5: Functional Locations**
1. [ ] Structure Indicators (T370S)
2. [ ] Functional Location Hierarchy
3. [ ] Functional Location Master (IFLOT)
4. [ ] Functional Location Texts (IFLOTX)
5. [ ] Functional Location Data (ILOA)
6. [ ] Functional Location Classification

**Tier 6: Equipment**
1. [ ] Equipment Master (EQUI)
2. [ ] Equipment Texts (EQKT)
3. [ ] Equipment-FLOC Links
4. [ ] Equipment Classification
5. [ ] Equipment BOM Links
6. [ ] Measuring Points (IMPT)
7. [ ] Measurement Documents (IMRG)

**Tier 7: Task Lists**
1. [ ] Task List Headers (PLKO)
2. [ ] Task List Operations (PLPO)
3. [ ] Task List Components (STPO via PLMZ)
4. [ ] Maintenance Packages (PLWP)

**Tier 8: Maintenance Plans**
1. [ ] Maintenance Plan (MPLA)
2. [ ] Maintenance Items (MPOS)
3. [ ] Maintenance Cycles (MZYK)
4. [ ] Scheduling Parameters (MHIS)
5. [ ] Call Objects

**Tier 9: Transactional Data**
1. [ ] Notifications (QMEL, QMFE, QMUR)
2. [ ] Order Headers (AUFK, AFIH)
3. [ ] Order Operations (AFVC, AFVV)
4. [ ] Order Components (RESB)
5. [ ] Confirmations (AFRU)
6. [ ] Goods Movements (MSEG linked)

### 4.2 Export Methods

**Option 1: SAP Migration Cockpit (Recommended for S/4HANA)**
- Use standard migration objects
- Handles data transformations
- Built-in validation

**Option 2: LSMW (Legacy System Migration Workbench)**
- Traditional SAP migration tool
- More manual control
- Requires more expertise

**Option 3: Direct Database Export**
- Maximum flexibility
- Requires transformation layer
- Use for complex scenarios

**Export Format Specification:**
| Field Type | Format | Example |
|------------|--------|---------|
| Date | YYYYMMDD | 20241115 |
| Time | HHMMSS | 143022 |
| Decimal | No thousands separator, period for decimal | 1234.56 |
| Text | UTF-8 encoded | |
| Delimiter | Tab or pipe | |

---

## Phase 5: Data Transformation

### 5.1 Key Field Mappings

**Equipment Master (EQUI):**

| ECC Field | S/4HANA Field | Transformation | Notes |
|-----------|---------------|----------------|-------|
| EQUNR | EQUNR | None | Primary key |
| EQKTX | EQKTX | None | Short text |
| TPLNR | TPLNR | None | Functional location |
| EQTYP | EQTYP | None | Equipment category |
| EQART | EQART | None | Equipment type |
| ANSWT | ANSWT | None | Acquisition value |
| ANSDT | ANSDT | None | Acquisition date |
| HERST | HERST | Business Partner conversion | Manufacturer |
| TYPBZ | TYPBZ | None | Model |
| SERGE | SERGE | None | Serial number |
| MATNR | MATNR | None | Material |
| SWERK | SWERK | None | Maintenance plant |
| INGRP | INGRP | None | Planner group |
| ABCKZ | ABCKZ | None | ABC indicator |
| IWERK | IWERK | None | Planning plant |
| BEBER | BEBER | None | Plant section |
| ANLNR | ANLNR | None | Fixed asset |

**Functional Location (IFLOT):**

| ECC Field | S/4HANA Field | Transformation | Notes |
|-----------|---------------|----------------|-------|
| TPLNR | TPLNR | None | Primary key |
| PLTXT | Via IFLOTX | None | Description |
| FLTYP | FLTYP | None | FLOC type |
| TPLKZ | TPLKZ | None | Structure indicator |
| TRESSION | Check usage | May be simplified | Category |
| IWERK | IWERK | None | Planning plant |
| SWERK | SWERK | None | Maint. plant |
| MSGRP | MSGRP | None | Auth. group |

**Maintenance Order (AUFK + AFIH):**

| ECC Field | S/4HANA Field | Transformation | Notes |
|-----------|---------------|----------------|-------|
| AUFNR | AUFNR | None | Order number |
| AUART | AUART | Verify mapping | Order type |
| AUTYP | AUTYP | None | Order category |
| BUKRS | BUKRS | None | Company code |
| WERKS | WERKS | None | Plant |
| EQUNR | EQUNR | None | Equipment |
| TPLNR | TPLNR | None | FLOC |
| ARBPL | ARBPL | None | Work center |
| KTEXT | KTEXT | None | Description |
| IPHAS | IPHAS | None | PM phase |

### 5.2 Validation Rules

**Pre-Load Validation:**

```abap
* Validate equipment references valid FLOC
SELECT e~equnr, e~tplnr
  FROM zstg_equi AS e
  LEFT JOIN zstg_iflot AS f ON f~tplnr = e~tplnr
  WHERE e~tplnr IS NOT INITIAL
    AND f~tplnr IS NULL
  INTO TABLE @DATA(lt_orphan_equi).

* Validate orders reference valid equipment
SELECT a~aufnr, a~equnr
  FROM zstg_aufk AS a
  LEFT JOIN zstg_equi AS e ON e~equnr = a~equnr
  WHERE a~equnr IS NOT INITIAL
    AND e~equnr IS NULL
  INTO TABLE @DATA(lt_orphan_orders).

* Validate no duplicate equipment numbers
SELECT equnr, COUNT(*) AS count
  FROM zstg_equi
  GROUP BY equnr
  HAVING COUNT(*) > 1
  INTO TABLE @DATA(lt_dup_equi).
```

**Domain Validation:**
- [ ] Equipment categories exist in T370K
- [ ] Equipment types exist in T370T
- [ ] Structure indicators exist in T370S
- [ ] Planner groups exist in T024I
- [ ] Work centers exist in CRHD
- [ ] Plants exist in T001W

---

## Phase 6: S/4HANA Load

### 6.1 Pre-Load Configuration

**Organizational Setup:**
- [ ] Company codes created
- [ ] Plants created
- [ ] Planning plants configured
- [ ] Work centers created
- [ ] Cost centers created
- [ ] Planner groups created

**Master Data Config:**
- [ ] Equipment categories configured
- [ ] Equipment types configured
- [ ] Structure indicators configured
- [ ] Object types configured
- [ ] Number ranges assigned

**Catalog Config:**
- [ ] Catalog profiles created
- [ ] Damage code catalogs loaded
- [ ] Cause code catalogs loaded
- [ ] Activity type catalogs loaded

**Classification:**
- [ ] Class types configured
- [ ] Classes created
- [ ] Characteristics created
- [ ] Classes linked to characteristics

### 6.2 Load Sequence

1. [ ] Structure Indicators
2. [ ] Catalog/Code groups
3. [ ] Classification (classes, characteristics)
4. [ ] Functional Locations (by hierarchy level)
   - [ ] Level 1 (top)
   - [ ] Level 2
   - [ ] Level 3
   - [ ] Level 4+
5. [ ] Equipment Master
6. [ ] Equipment Classification
7. [ ] Measuring Points
8. [ ] Measurement Documents
9. [ ] BOMs
10. [ ] Task Lists
11. [ ] Maintenance Plans
12. [ ] Notifications (historical)
13. [ ] Orders (historical)
14. [ ] Confirmations

### 6.3 Load Methods

**Migration Cockpit Objects for PM:**
| Object | Description | S/4HANA Object Name |
|--------|-------------|---------------------|
| Functional Location | FLOC master data | S4_FUN_LOC |
| Equipment | Equipment master | S4_EQUIPMENT |
| Measuring Point | Counter/gauge | S4_MEAS_POINT |
| Measurement Document | Readings | S4_MEAS_DOC |
| Maintenance Plan | PM schedules | S4_MAINT_PLAN |
| Maintenance Item | Plan items | Part of S4_MAINT_PLAN |
| Task List | Routings | S4_TASK_LIST_PM |

---

## Phase 7: Validation & Testing

### 7.1 Record Count Reconciliation

| Object | ECC Count | S/4HANA Count | Variance | Status |
|--------|-----------|---------------|----------|--------|
| Functional Locations | | | | |
| Equipment | | | | |
| Measuring Points | | | | |
| Maintenance Plans | | | | |
| Task Lists | | | | |
| Notifications | | | | |
| Orders | | | | |
| Confirmations | | | | |

### 7.2 Functional Test Cases

**Equipment Management (IE01, IE02, IE03):**
| Test | Transaction | Expected Result | Pass/Fail |
|------|-------------|-----------------|-----------|
| View equipment | IE03 | Display all fields correctly | |
| View equipment BOM | IE03 → Structure | BOM displays | |
| View equipment docs | IE03 → Documents | Links work | |
| View where-used | IE03 → Where-used | Shows orders/notifications | |
| Create equipment | IE01 | Creates with all fields | |
| Change equipment | IE02 | Changes save correctly | |
| Move equipment | IE01 | FLOC assignment updates | |

**Functional Location (IL01, IL02, IL03):**
| Test | Transaction | Expected Result | Pass/Fail |
|------|-------------|-----------------|-----------|
| View FLOC | IL03 | Display correctly | |
| View FLOC hierarchy | IL03 → Structure | Tree displays | |
| View FLOC equipment | IL03 → Equipment | List displays | |
| Create FLOC | IL01 | Creates in hierarchy | |
| Change FLOC | IL02 | Changes save | |

**Notification (IW21, IW22, IW23):**
| Test | Transaction | Expected Result | Pass/Fail |
|------|-------------|-----------------|-----------|
| Create notification | IW21 | Creates with codes | |
| Add items | IW22 | Damage/cause codes | |
| Complete notification | IW22 | Status changes | |
| Create order from notif | IW22 → Order | Order created | |

**Maintenance Order (IW31, IW32, IW33):**
| Test | Transaction | Expected Result | Pass/Fail |
|------|-------------|-----------------|-----------|
| Create order | IW31 | Creates with operations | |
| Plan operations | IW32 | Add labor/materials | |
| Release order | IW32 | Status = REL | |
| Confirm order | IW41 | Time/completion | |
| Complete order | IW32 | TECO status | |
| View order history | IW33 | All data visible | |

**Maintenance Planning (IP10, IP30):**
| Test | Transaction | Expected Result | Pass/Fail |
|------|-------------|-----------------|-----------|
| View maint plan | IP03 | Displays correctly | |
| Schedule plan | IP10 | Creates calls | |
| Generate orders | IP30 | Orders created | |
| View scheduling params | IP03 | Correct parameters | |

### 7.3 Integration Test Cases

| Integration | Test | Expected Result | Pass/Fail |
|-------------|------|-----------------|-----------|
| MM - Materials | Create order with components | Material reserved | |
| MM - Goods Issue | Confirm with goods movement | Stock decreases | |
| FI - Cost Posting | Confirm labor | Cost hits cost center | |
| FI - Settlement | Settle order | Costs settled | |
| HR - Time | Confirm with CATS | Time recorded | |
| QM - Inspection | Complete with inspection | QM lot created | |

### 7.4 Fiori App Testing

| App | Function | Test | Pass/Fail |
|-----|----------|------|-----------|
| My Maintenance Notifications | Create/view notifications | Create, add damage code | |
| Maintenance Orders | View/process orders | View details, confirm | |
| Equipment Master | View equipment | Search, display hierarchy | |
| Functional Locations | View FLOC | Search, display hierarchy | |
| Schedule Maintenance Plans | Schedule plans | Generate orders | |

---

## Phase 8: Cutover

### 8.1 Cutover Timeline

| Phase | Duration | Activities |
|-------|----------|------------|
| T-4 weeks | 1 week | Final dress rehearsal, fix issues |
| T-2 weeks | 1 week | Final data freeze decisions, communicate |
| T-1 week | 1 week | Final testing sign-off, runbook review |
| Cutover weekend | 2-3 days | Execute migration |
| T+1 week | 1 week | Hypercare, issue resolution |
| T+1 month | Ongoing | Stabilization |

### 8.2 Cutover Runbook

| Step | Task | Owner | Duration | Start | End | Status |
|------|------|-------|----------|-------|-----|--------|
| 1 | Disable ECC PM transactions | | 30 min | | | |
| 2 | Final ECC data export | | 4 hrs | | | |
| 3 | Transform delta data | | 2 hrs | | | |
| 4 | Validate transformed data | | 2 hrs | | | |
| 5 | Load to S/4HANA | | 4 hrs | | | |
| 6 | Reconcile counts | | 2 hrs | | | |
| 7 | Execute test cases | | 4 hrs | | | |
| 8 | Go/No-Go decision | | 1 hr | | | |
| 9 | Enable S/4HANA access | | 30 min | | | |
| 10 | User communication | | 30 min | | | |

### 8.3 Rollback Plan

If Go/No-Go = No-Go:
1. Disable S/4HANA access
2. Re-enable ECC access
3. Document issues
4. Schedule remediation
5. Plan new cutover date

---

## Appendix: Transaction Code Mapping

| Function | ECC Transaction | S/4HANA Transaction | Fiori App |
|----------|-----------------|---------------------|-----------|
| Create Equipment | IE01 | IE01 | Manage Equipment |
| Change Equipment | IE02 | IE02 | Manage Equipment |
| Display Equipment | IE03 | IE03 | Manage Equipment |
| Create Func. Location | IL01 | IL01 | Manage Functional Locations |
| Change Func. Location | IL02 | IL02 | Manage Functional Locations |
| Display Func. Location | IL03 | IL03 | Manage Functional Locations |
| Create Notification | IW21 | IW21 | My Maintenance Notifications |
| Change Notification | IW22 | IW22 | My Maintenance Notifications |
| Display Notification | IW23 | IW23 | My Maintenance Notifications |
| Create Order | IW31 | IW31 | Maintenance Orders |
| Change Order | IW32 | IW32 | Maintenance Orders |
| Display Order | IW33 | IW33 | Maintenance Orders |
| Confirm Order | IW41 | IW41 | Confirmation of MaintOrd |
| Order List | IW39 | IW39 | Maintenance Orders |
| Create Maint Plan | IP01 | IP01 | Maintain Maint Plans |
| Schedule Maint Plan | IP10 | IP10 | Schedule Maintenance Plans |
| Generate Orders | IP30 | IP30 | N/A |

---

## Appendix: Common Issues

| Issue | Cause | Solution |
|-------|-------|----------|
| FLOC hierarchy broken | Parent loaded after child | Load top-down by level |
| Equipment without FLOC | Invalid TPLNR | Validate FLOC exists before loading |
| Classification errors | Class not activated | Activate classes before loading |
| MP scheduling fails | Missing parameters | Verify all scheduling params |
| Confirmation errors | Invalid work center | Verify work center-plant assignment |
| Settlement errors | Missing rules | Configure settlement rules |
| BP conversion issues | Missing vendor data | Clean vendor master first |

---

*Need help with your SAP S/4HANA migration? AssetStage provides data staging, validation, and transformation services for complex migrations. Contact us at sales@assetstage.io*

---

© 2025 AssetStage. This checklist may be freely distributed with attribution.
