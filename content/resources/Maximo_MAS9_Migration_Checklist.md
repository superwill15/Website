# Maximo to MAS 9 Migration Checklist
## Complete Data Preparation Guide for IBM Maximo Application Suite Migration

---

## Before You Start

### What's Different in MAS 9

| Area | Maximo 7.x | MAS 9 | Migration Impact |
|------|------------|-------|------------------|
| **Deployment** | On-premise or hosted | Cloud-native (OpenShift) | Architecture change |
| **Database** | DB2, Oracle, SQL Server | DB2 Warehouse on Cloud | Data export/import |
| **Integration** | MIF, REST API | App Connect, REST API | Integration rebuild |
| **Customizations** | Java, JSP | App Framework + Manage | Custom code review |
| **Automation** | Escalations, workflows | Maximo + external tools | Logic migration |
| **Reporting** | BIRT, Cognos | Manage Reports + external | Report rebuild |

### Migration Paths

**Path 1: Side-by-Side Migration (Recommended)**
- Stand up new MAS 9 environment
- Export data from Maximo 7.x
- Transform and load to MAS 9
- Parallel run and cutover

**Path 2: In-Place Upgrade (Limited scenarios)**
- Upgrade existing infrastructure
- Higher risk, less flexibility
- Only for specific configurations

This checklist assumes Path 1 (Side-by-Side).

---

## Phase 1: Discovery & Assessment

### 1.1 Environment Documentation

- [ ] Document current Maximo version (7.6.0.x, 7.6.1.x)
- [ ] Document database platform and version
- [ ] Document application server (WebSphere version)
- [ ] Document integration middleware
- [ ] List all Maximo modules in use:
  - [ ] Asset Management
  - [ ] Work Management
  - [ ] Service Management
  - [ ] Inventory Management
  - [ ] Procurement
  - [ ] Contracts
  - [ ] Transportation
  - [ ] Linear Assets
  - [ ] Calibration
  - [ ] Nuclear
  - [ ] Other: _____________
- [ ] Document hosted/managed service provider (if applicable)

### 1.2 Customization Inventory

**Application Customizations:**
- [ ] Count custom applications: _____
- [ ] Count modified standard applications: _____
- [ ] List custom applications:
  | App Name | Purpose | Complexity (H/M/L) |
  |----------|---------|-------------------|
  | | | |
  | | | |

**Database Customizations:**
- [ ] Count custom tables: _____
- [ ] Count custom columns on standard tables: _____
- [ ] Count custom indexes: _____
- [ ] Count custom views: _____
- [ ] Count database triggers: _____
- [ ] Count stored procedures: _____

**Business Logic:**
- [ ] Count escalations: _____
- [ ] Count workflows: _____
- [ ] Count automation scripts: _____
- [ ] Count custom Java classes: _____
- [ ] Count custom MBOs: _____
- [ ] Count cron tasks: _____

**Integration:**
- [ ] Count integration channels: _____
- [ ] Count external systems integrated: _____
- [ ] List integration points:
  | System | Direction | Method | Data |
  |--------|-----------|--------|------|
  | ERP (SAP/Oracle) | Bi-directional | MIF | PO, Receipts, GL |
  | HR System | Inbound | REST | Person records |
  | | | | |

**Reporting:**
- [ ] Count BIRT reports: _____
- [ ] Count Cognos reports: _____
- [ ] Count KPI Manager configurations: _____
- [ ] Identify critical reports for Day 1

### 1.3 Data Volume Assessment

| Object | Record Count | Active Records | Data Size (GB) |
|--------|--------------|----------------|----------------|
| ASSET | | | |
| LOCATIONS | | | |
| WORKORDER | | | |
| WOACTIVITY | | | |
| MATUSETRANS | | | |
| LABTRANS | | | |
| TOOLTRANS | | | |
| INVENTORY | | | |
| INVBALANCES | | | |
| ITEM | | | |
| PO | | | |
| PR | | | |
| CONTRACT | | | |
| TICKET (SR) | | | |
| INCIDENT | | | |
| PROBLEM | | | |
| PERSON | | | |
| LABOR | | | |
| CRAFT | | | |
| FAILURECODE | | | |
| COMMLOG | | | |
| DOCLINKS | | | |
| **TOTAL** | | | |

### 1.4 Data Quality Assessment

Run these queries to assess data health:

**Asset Data Quality:**
```sql
-- Assets missing critical fields
SELECT
  (SELECT COUNT(*) FROM ASSET WHERE MANUFACTURER IS NULL AND STATUS = 'OPERATING') as missing_mfr,
  (SELECT COUNT(*) FROM ASSET WHERE SERIALNUM IS NULL AND STATUS = 'OPERATING') as missing_serial,
  (SELECT COUNT(*) FROM ASSET WHERE INSTALLDATE IS NULL AND STATUS = 'OPERATING') as missing_install,
  (SELECT COUNT(*) FROM ASSET WHERE LOCATION IS NULL AND STATUS = 'OPERATING') as missing_location,
  (SELECT COUNT(*) FROM ASSET WHERE PARENT IS NULL AND STATUS = 'OPERATING') as no_parent,
  (SELECT COUNT(*) FROM ASSET WHERE STATUS = 'OPERATING') as total_operating
FROM SYSIBM.SYSDUMMY1;
```

**Duplicate Detection:**
```sql
-- Potential duplicate assets
SELECT SERIALNUM, MANUFACTURER, COUNT(*) as count
FROM ASSET
WHERE STATUS = 'OPERATING'
  AND SERIALNUM IS NOT NULL
GROUP BY SERIALNUM, MANUFACTURER
HAVING COUNT(*) > 1;
```

**Orphan Records:**
```sql
-- Work orders on non-existent assets
SELECT COUNT(*)
FROM WORKORDER w
WHERE w.ASSETNUM IS NOT NULL
  AND NOT EXISTS (SELECT 1 FROM ASSET a WHERE a.ASSETNUM = w.ASSETNUM AND a.SITEID = w.SITEID);

-- Assets at non-existent locations
SELECT COUNT(*)
FROM ASSET a
WHERE a.LOCATION IS NOT NULL
  AND NOT EXISTS (SELECT 1 FROM LOCATIONS l WHERE l.LOCATION = a.LOCATION AND l.SITEID = a.SITEID);
```

**Record your findings:**
| Metric | Count | % of Total | Action Required |
|--------|-------|------------|-----------------|
| Assets missing manufacturer | | | |
| Assets missing serial number | | | |
| Assets missing location | | | |
| Potential duplicate assets | | | |
| Orphan work orders | | | |
| Orphan assets | | | |

---

## Phase 2: Data Cleansing

### 2.1 Master Data Cleanup

**Organizations & Sites:**
- [ ] Review organization structure - still valid?
- [ ] Review site definitions - consolidation needed?
- [ ] Verify GL account mappings
- [ ] Clean up unused organizations/sites

**Locations:**
- [ ] Verify location hierarchy is correct
- [ ] Remove decommissioned locations (or mark inactive)
- [ ] Standardize location descriptions
- [ ] Verify address data for shipping locations
- [ ] Check location types are consistently applied

**Assets:**
- [ ] Resolve duplicate assets (merge or delete)
- [ ] Fill missing manufacturer data
- [ ] Fill missing model/serial numbers
- [ ] Verify asset-location relationships
- [ ] Verify parent-child relationships
- [ ] Standardize asset descriptions
- [ ] Review and clean asset specifications
- [ ] Verify classification/class structure assignments
- [ ] Remove decommissioned assets (or mark DECOMMISSIONED)

**Items (Spare Parts):**
- [ ] Resolve duplicate item numbers
- [ ] Standardize item descriptions
- [ ] Verify item-asset relationships (spare parts)
- [ ] Clean up unused items (no transactions, no inventory)
- [ ] Verify commodity codes
- [ ] Verify units of measure

**Vendors:**
- [ ] Remove duplicate vendors
- [ ] Verify vendor status (active/inactive)
- [ ] Clean up address data
- [ ] Verify default payment terms

**Companies:**
- [ ] Merge duplicate company records
- [ ] Verify company type assignments
- [ ] Update contact information

### 2.2 Transactional Data Decisions

**Work Order History:**
- [ ] Decide retention period: _____ years
- [ ] Archive work orders older than retention period
- [ ] Verify all work orders to migrate have valid asset references
- [ ] Clean up work orders in draft/open status (cancel or complete)
- [ ] Decide on migrating: Labor transactions? Material transactions? Tool transactions?

**Purchase History:**
- [ ] Decide retention period: _____ years
- [ ] Archive POs older than retention period
- [ ] Cancel ancient open POs
- [ ] Verify vendor references on POs to migrate

**Inventory Transactions:**
- [ ] Decide retention period: _____ years
- [ ] Archive transactions older than retention period
- [ ] Verify current balances are accurate

**Service Desk History:**
- [ ] Decide retention period: _____ years
- [ ] Archive tickets older than retention period
- [ ] Close ancient open tickets

### 2.3 Configuration Data Cleanup

**Failure Codes:**
- [ ] Review failure hierarchies - consolidate duplicates
- [ ] Remove unused failure codes
- [ ] Verify failure code associations with asset classes

**Job Plans:**
- [ ] Review job plan library - remove unused
- [ ] Verify job plan labor/material/tool references
- [ ] Update outdated task instructions

**PM Records:**
- [ ] Review PM definitions - remove obsolete
- [ ] Verify PM-asset associations
- [ ] Verify PM-job plan associations
- [ ] Recalculate PM frequencies if needed

**Routes:**
- [ ] Review route definitions
- [ ] Remove routes for decommissioned assets
- [ ] Verify route stop sequences

**Safety Plans:**
- [ ] Review safety plan library
- [ ] Verify hazard references
- [ ] Update outdated procedures

---

## Phase 3: Data Export

### 3.1 Export Sequence

Export in this order to maintain referential integrity:

**Tier 1: Foundation Data (No dependencies)**
1. [ ] Organizations (ORGANIZATION)
2. [ ] Sites (SITE)
3. [ ] GL Components (GLCOMPONENTS)
4. [ ] Currency (CURRENCY)
5. [ ] Exchange Rates (EXCHANGE)
6. [ ] Tax Codes (TAX)

**Tier 2: Reference Data (Depends on Tier 1)**
1. [ ] Persons (PERSON)
2. [ ] Labor (LABOR)
3. [ ] Crafts (CRAFT)
4. [ ] Labor Craft Rate (LABORCRAFTRATE)
5. [ ] Calendars (CALENDAR)
6. [ ] Calendar Shifts (CALENDARSHIFT)
7. [ ] Modifiers (MODIFIERS)
8. [ ] Work Type (WORKTYPE)
9. [ ] Work Priority (WOPRIORITY)

**Tier 3: Classification & Codes (Depends on Tiers 1-2)**
1. [ ] Classification (CLASSSTRUCTURE)
2. [ ] Class Spec (CLASSSPEC)
3. [ ] Failure Codes (FAILURECODE, FAILURELIST)
4. [ ] Commodity Codes (COMMODITIES)
5. [ ] Commodity Groups (COMMODITYGROUP)
6. [ ] Condition Codes (CONDITION)
7. [ ] Units of Measure (MEASUREUNIT)
8. [ ] Meter Groups (METERGROUP)
9. [ ] Meter (METER)

**Tier 4: Company & Vendor Data (Depends on Tiers 1-3)**
1. [ ] Companies (COMPANIES)
2. [ ] Company Contacts (COMPCONTACT)
3. [ ] Company Master (COMPMASTER, if used)

**Tier 5: Location Data (Depends on Tiers 1-4)**
1. [ ] Locations (LOCATIONS)
2. [ ] Location Hierarchy (via PARENT field)
3. [ ] Location Specs (LOCATIONSPEC)
4. [ ] Location Meters (LOCATIONMETER)

**Tier 6: Asset Data (Depends on Tiers 1-5)**
1. [ ] Assets (ASSET)
2. [ ] Asset Hierarchy (via PARENT field)
3. [ ] Asset Specs (ASSETSPEC)
4. [ ] Asset Meters (ASSETMETER)
5. [ ] Moving Assets (if used)
6. [ ] Asset Features (if used)

**Tier 7: Inventory Data (Depends on Tiers 1-6)**
1. [ ] Items (ITEM)
2. [ ] Item Specs (ITEMSPEC)
3. [ ] Storerooms (STOREROOM in LOCATIONS)
4. [ ] Inventory (INVENTORY)
5. [ ] Inventory Balances (INVBALANCES)
6. [ ] Inventory Costs (INVCOST)
7. [ ] Spare Parts (SPAREPART - item-asset relationships)

**Tier 8: Maintenance Setup (Depends on Tiers 1-7)**
1. [ ] Job Plans (JOBPLAN)
2. [ ] Job Plan Labor (JOBLABOR)
3. [ ] Job Plan Material (JOBMATERIAL)
4. [ ] Job Plan Tool (JOBTOOL)
5. [ ] Job Plan Tasks (JOBTASK)
6. [ ] Routes (ROUTE)
7. [ ] Route Stops (ROUTE_STOP)
8. [ ] Safety Plans (SAFETYPLAN)
9. [ ] Safety Hazards (HAZARD)
10. [ ] PM Master (PM)
11. [ ] PM Sequences (PMSEQUENCE, if used)
12. [ ] PM Forecast (PMFORECAST)

**Tier 9: Transactional Data (Depends on Tiers 1-8)**
1. [ ] Work Orders (WORKORDER)
2. [ ] Work Order Tasks (WOACTIVITY, WOTASK)
3. [ ] Actual Labor (LABTRANS)
4. [ ] Actual Materials (MATUSETRANS)
5. [ ] Actual Tools (TOOLTRANS)
6. [ ] Work Order Specs (WORKORDERSPEC)
7. [ ] Work Order Failure Reporting (FAILUREREPORT)

**Tier 10: Procurement Data (If migrating)**
1. [ ] Purchase Requisitions (PR)
2. [ ] PR Lines (PRLINE)
3. [ ] Purchase Orders (PO)
4. [ ] PO Lines (POLINE)
5. [ ] Receipts (MATRECTRANS)
6. [ ] Invoices (INVOICE, if separate from ERP)

**Tier 11: Service Desk Data (If migrating)**
1. [ ] Tickets/Service Requests (TICKET or SR)
2. [ ] Incidents (INCIDENT)
3. [ ] Problems (PROBLEM)
4. [ ] Solutions (SOLUTION)
5. [ ] Knowledge Base (KBANSWER)

**Tier 12: Supporting Data**
1. [ ] Document Links (DOCLINKS) - plan for document migration
2. [ ] Communication Logs (COMMLOG)
3. [ ] Work Log (WORKLOG)
4. [ ] Custom table data

### 3.2 Export Format

**Recommended: CSV with defined specifications**

| Table | File Name | Delimiter | Encoding | Date Format |
|-------|-----------|-----------|----------|-------------|
| ASSET | ASSET_export.csv | Pipe (|) | UTF-8 | YYYY-MM-DD |
| LOCATIONS | LOCATIONS_export.csv | Pipe (|) | UTF-8 | YYYY-MM-DD |
| WORKORDER | WORKORDER_export.csv | Pipe (|) | UTF-8 | YYYY-MM-DD HH:MM:SS |
| ... | ... | ... | ... | ... |

**Why pipe delimiter:** Commas appear in descriptions, addresses, etc.

**Export Query Template:**
```sql
-- Export ASSET to CSV
SELECT
  ASSETNUM,
  DESCRIPTION,
  SITEID,
  LOCATION,
  PARENT,
  ASSETTYPE,
  STATUS,
  MANUFACTURER,
  MODELNUM,
  SERIALNUM,
  INSTALLDATE,
  PURCHASEPRICE,
  REPLACECOST,
  PRIORITY,
  CALNUM,
  SHIFTNUM,
  CLASSSTRUCTUREID,
  FAILURECODE,
  ISRUNNING,
  PLUSPCUSTOMER,
  -- Add all required fields
  CHANGEBY,
  CHANGEDATE
FROM ASSET
WHERE SITEID IN ('SITE1', 'SITE2')  -- Limit to sites being migrated
ORDER BY ASSETNUM;
```

---

## Phase 4: Data Transformation

### 4.1 Field Mapping

Map Maximo 7.x fields to MAS 9 fields. Most are 1:1 but some require transformation.

**ASSET Mapping:**

| Maximo 7.x Field | MAS 9 Field | Transformation | Notes |
|------------------|-------------|----------------|-------|
| ASSETNUM | ASSETNUM | None | Primary key |
| DESCRIPTION | DESCRIPTION | Truncate to 100 chars | Verify length limits |
| SITEID | SITEID | None | Must exist in MAS |
| ORGID | ORGID | None | Must exist in MAS |
| LOCATION | LOCATION | None | Must exist in MAS |
| PARENT | PARENT | None | Validate exists |
| ASSETTYPE | ASSETTYPE | None | Verify domain |
| STATUS | STATUS | None | Verify domain |
| STATUSDATE | STATUSDATE | Date format | YYYY-MM-DD |
| MANUFACTURER | MANUFACTURER | Company lookup | Verify exists |
| VENDOR | VENDOR | Company lookup | Verify exists |
| MODELNUM | MODELNUM | None | |
| SERIALNUM | SERIALNUM | None | |
| INSTALLDATE | INSTALLDATE | Date format | YYYY-MM-DD |
| PURCHASEPRICE | PURCHASEPRICE | Decimal(10,2) | |
| REPLACECOST | REPLACECOST | Decimal(10,2) | |
| TOTALCOST | TOTALCOST | Decimal(10,2) | |
| YTDCOST | YTDCOST | Decimal(10,2) | |
| BUDGETCOST | BUDGETCOST | Decimal(10,2) | |
| PRIORITY | PRIORITY | Integer | Verify domain |
| CALNUM | CALNUM | None | Verify exists |
| SHIFTNUM | SHIFTNUM | None | Verify exists |
| CLASSSTRUCTUREID | CLASSSTRUCTUREID | None | Verify exists |
| FAILURECODE | FAILURECODE | None | Verify exists |
| ISRUNNING | ISRUNNING | Y/N | |
| MAINTHIERCHY | MAINTHIERCHY | None | |
| ITEMNUM | ITEMNUM | None | Rotating item |
| ITEMSETID | ITEMSETID | None | |
| BINNUM | BINNUM | None | Rotating |
| PLUSCISMTE | PLUSCISMTE | Y/N | Calibration |
| EQ1-EQ24 | (custom fields) | Map to specifications | |

**WORKORDER Mapping:**

| Maximo 7.x Field | MAS 9 Field | Transformation | Notes |
|------------------|-------------|----------------|-------|
| WONUM | WONUM | None | Primary key |
| DESCRIPTION | DESCRIPTION | Truncate if needed | |
| LONGDESCRIPTION | DESCRIPTION_LONGDESCRIPTION | HTML cleanup | Remove unsupported tags |
| SITEID | SITEID | None | |
| ASSETNUM | ASSETNUM | None | Validate exists |
| LOCATION | LOCATION | None | Validate exists |
| WORKTYPE | WORKTYPE | None | Verify domain |
| STATUS | STATUS | None | Verify domain |
| STATUSDATE | STATUSDATE | Datetime | |
| WOPRIORITY | WOPRIORITY | Integer | |
| SCHEDSTART | SCHEDSTART | Datetime | |
| SCHEDFINISH | SCHEDFINISH | Datetime | |
| ACTSTART | ACTSTART | Datetime | |
| ACTFINISH | ACTFINISH | Datetime | |
| ESTDUR | ESTDUR | Decimal | Hours |
| ACTLABHRS | ACTLABHRS | Decimal | |
| ACTMATCOST | ACTMATCOST | Decimal | |
| ACTLABCOST | ACTLABCOST | Decimal | |
| ACTTOOLCOST | ACTTOOLCOST | Decimal | |
| ACTSERVCOST | ACTSERVCOST | Decimal | |
| REPORTEDBY | REPORTEDBY | Person lookup | Verify exists |
| REPORTDATE | REPORTDATE | Datetime | |
| LEAD | LEAD | Labor lookup | Verify exists |
| SUPERVISOR | SUPERVISOR | Person lookup | Verify exists |
| PMNUM | PMNUM | None | PM reference |
| JPNUM | JPNUM | None | Job plan reference |
| FAILURECODE | FAILURECODE | None | |
| PROBLEMCODE | PROBLEMCODE | None | |
| FINCNTRLID | FINCNTRLID | None | GL account |
| GLACCOUNT | GLACCOUNT | None | |

### 4.2 Data Validation Rules

Run these validations on transformed data before loading:

**Referential Integrity:**
```sql
-- Assets reference valid locations
SELECT a.ASSETNUM, a.LOCATION
FROM ASSET_STAGING a
WHERE a.LOCATION IS NOT NULL
  AND NOT EXISTS (SELECT 1 FROM LOCATIONS_STAGING l
                  WHERE l.LOCATION = a.LOCATION
                  AND l.SITEID = a.SITEID);

-- Work orders reference valid assets
SELECT w.WONUM, w.ASSETNUM
FROM WORKORDER_STAGING w
WHERE w.ASSETNUM IS NOT NULL
  AND NOT EXISTS (SELECT 1 FROM ASSET_STAGING a
                  WHERE a.ASSETNUM = w.ASSETNUM
                  AND a.SITEID = w.SITEID);

-- PMs reference valid assets
SELECT p.PMNUM, p.ASSETNUM
FROM PM_STAGING p
WHERE p.ASSETNUM IS NOT NULL
  AND NOT EXISTS (SELECT 1 FROM ASSET_STAGING a
                  WHERE a.ASSETNUM = p.ASSETNUM
                  AND a.SITEID = p.SITEID);
```

**Domain Validation:**
```sql
-- Status values in allowed list
SELECT ASSETNUM, STATUS
FROM ASSET_STAGING
WHERE STATUS NOT IN ('OPERATING', 'NOT READY', 'DECOMMISSIONED', 'SEALED');

-- Priority values in range
SELECT ASSETNUM, PRIORITY
FROM ASSET_STAGING
WHERE PRIORITY NOT BETWEEN 1 AND 5;
```

**Data Type Validation:**
```sql
-- Numeric fields contain valid numbers
SELECT ASSETNUM, PURCHASEPRICE
FROM ASSET_STAGING
WHERE PURCHASEPRICE IS NOT NULL
  AND PURCHASEPRICE NOT REGEXP '^[0-9]+\.?[0-9]*$';

-- Date fields contain valid dates
SELECT ASSETNUM, INSTALLDATE
FROM ASSET_STAGING
WHERE INSTALLDATE IS NOT NULL
  AND INSTALLDATE NOT REGEXP '^[0-9]{4}-[0-9]{2}-[0-9]{2}$';
```

**Uniqueness Validation:**
```sql
-- No duplicate asset numbers per site
SELECT ASSETNUM, SITEID, COUNT(*)
FROM ASSET_STAGING
GROUP BY ASSETNUM, SITEID
HAVING COUNT(*) > 1;

-- No duplicate location codes per site
SELECT LOCATION, SITEID, COUNT(*)
FROM LOCATIONS_STAGING
GROUP BY LOCATION, SITEID
HAVING COUNT(*) > 1;
```

---

## Phase 5: MAS 9 Environment Setup

### 5.1 Pre-Load Configuration

**Organizations & Sites:**
- [ ] Create organizations in MAS 9
- [ ] Create sites in MAS 9
- [ ] Configure site defaults (storeroom, calendar, etc.)
- [ ] Configure GL accounts

**Security:**
- [ ] Create security groups matching source
- [ ] Map users to groups
- [ ] Configure application-level security
- [ ] Set up condition restrictions (if used)

**System Configuration:**
- [ ] Configure system properties
- [ ] Set up cron tasks schedule
- [ ] Configure bulletin board (if used)
- [ ] Set up email configuration

**Domains & Lookups:**
- [ ] Load/verify synonym domains match source
- [ ] Load/verify ALN domains match source
- [ ] Load/verify numeric domains match source
- [ ] Configure crossover domains

**Classifications:**
- [ ] Load class structure
- [ ] Load class specifications
- [ ] Verify attribute data types

### 5.2 Load Sequence

Load data in this sequence:

1. [ ] Reference data (domains, UoM, currencies)
2. [ ] Classifications
3. [ ] Failure codes
4. [ ] Calendars
5. [ ] Persons and Labor
6. [ ] Companies
7. [ ] Locations
8. [ ] Assets
9. [ ] Items
10. [ ] Inventory
11. [ ] Spare parts relationships
12. [ ] Job plans
13. [ ] Routes
14. [ ] Safety plans
15. [ ] PM records
16. [ ] Work orders (historical)
17. [ ] Transactions (labor, material, tools)
18. [ ] Service desk records
19. [ ] Document links

---

## Phase 6: Validation & Testing

### 6.1 Record Count Reconciliation

| Object | Source Count | Target Count | Variance | Status |
|--------|--------------|--------------|----------|--------|
| Organizations | | | | |
| Sites | | | | |
| Locations | | | | |
| Assets | | | | |
| Items | | | | |
| Inventory Balances | | | | |
| Companies | | | | |
| Persons | | | | |
| Labor Records | | | | |
| Job Plans | | | | |
| PM Records | | | | |
| Work Orders | | | | |
| Labor Transactions | | | | |
| Material Transactions | | | | |

### 6.2 Sample Data Validation

Select 20-50 records per object type. Verify field-by-field accuracy.

**Asset Validation Sample:**
| ASSETNUM | Field | Source Value | Target Value | Match? |
|----------|-------|--------------|--------------|--------|
| AST-001 | Description | | | |
| AST-001 | Location | | | |
| AST-001 | Manufacturer | | | |
| AST-001 | Install Date | | | |
| AST-002 | Description | | | |
| ... | ... | ... | ... | ... |

### 6.3 Functional Testing

**Asset Management:**
- [ ] Can view asset details
- [ ] Can view asset hierarchy (parent/children)
- [ ] Can view asset specifications
- [ ] Can view asset meters
- [ ] Can view work order history
- [ ] Can view cost history
- [ ] Can create new asset
- [ ] Can move asset

**Work Management:**
- [ ] Can view work order details
- [ ] Can view work order tasks
- [ ] Can view labor, material, tool actuals
- [ ] Can view failure reporting
- [ ] Can create new work order
- [ ] Can apply job plan
- [ ] PM generation works
- [ ] Route generation works

**Inventory:**
- [ ] Can view inventory balances
- [ ] Can view item details
- [ ] Can view spare parts for asset
- [ ] Can issue material
- [ ] Can receive material
- [ ] Can transfer material
- [ ] Reorder point processing works

**Procurement:**
- [ ] Can create PR
- [ ] Can create PO
- [ ] Can receive against PO
- [ ] Approval workflow works

**Reporting:**
- [ ] Key reports run successfully
- [ ] Data in reports matches expectations
- [ ] KPIs calculate correctly

### 6.4 Integration Testing

- [ ] ERP integration (PO, receipt, GL)
- [ ] HR integration (person sync)
- [ ] IoT/sensor integration
- [ ] GIS integration
- [ ] Mobile app connectivity
- [ ] Document management integration

---

## Phase 7: Cutover

### 7.1 Pre-Cutover Checklist

**2 Weeks Before:**
- [ ] Final user acceptance sign-off
- [ ] Go/No-Go criteria defined
- [ ] Rollback plan documented
- [ ] Support team briefed
- [ ] User communication sent

**1 Week Before:**
- [ ] Delta load requirements identified
- [ ] Cutover runbook finalized
- [ ] Team roles and responsibilities confirmed
- [ ] Contact list distributed
- [ ] War room scheduled

**Day Before:**
- [ ] System health check (source and target)
- [ ] Backup source system
- [ ] Verify target system access
- [ ] Notify users of downtime window

### 7.2 Cutover Runbook

| Step | Task | Owner | Est. Duration | Actual Start | Actual End | Status |
|------|------|-------|---------------|--------------|------------|--------|
| 1 | Disable source system access | | 15 min | | | |
| 2 | Final source data export | | 2 hrs | | | |
| 3 | Transform delta data | | 1 hr | | | |
| 4 | Load delta data to target | | 2 hrs | | | |
| 5 | Reconcile record counts | | 1 hr | | | |
| 6 | Validate sample records | | 2 hrs | | | |
| 7 | Run smoke tests | | 1 hr | | | |
| 8 | Enable target system access | | 15 min | | | |
| 9 | Go/No-Go decision | | 30 min | | | |
| 10 | Notify users of go-live | | 15 min | | | |

### 7.3 Post-Cutover

**Day 1:**
- [ ] Monitor system performance
- [ ] Monitor error logs
- [ ] Support team on standby
- [ ] Hourly check-ins with key users
- [ ] Document issues

**Week 1:**
- [ ] Daily check-ins with key users
- [ ] Address critical issues
- [ ] Performance tuning
- [ ] Integration monitoring

**Month 1:**
- [ ] Weekly review meetings
- [ ] Training reinforcement
- [ ] Process refinement
- [ ] Issue resolution
- [ ] Lessons learned documentation

---

## Appendix: Common Issues & Solutions

| Issue | Cause | Solution |
|-------|-------|----------|
| Duplicate key errors on load | Record already exists | Check for existing data, use update vs insert |
| Foreign key constraint failures | Parent record missing | Verify load sequence, load parents first |
| Character encoding issues | UTF-8 mismatch | Ensure consistent encoding in export/import |
| Date format errors | Locale differences | Use ISO format (YYYY-MM-DD) |
| Truncation errors | Field length exceeded | Truncate long values, document truncations |
| Invalid domain values | Domain not configured | Load domain values before transactional data |
| Missing classifications | Class structure not loaded | Load classifications before assets |
| Broken asset hierarchies | Parent loaded after child | Sort by hierarchy level before loading |
| PM generation failure | Calendar/frequency issue | Verify calendars, recalculate forecasts |
| Integration failures | Endpoint changes | Update integration configurations |

---

## Appendix: Key Contacts

| Role | Name | Email | Phone |
|------|------|-------|-------|
| Project Manager | | | |
| Technical Lead | | | |
| Maximo SME | | | |
| IBM Support | | | |
| DBA | | | |
| Integration Lead | | | |
| Business Owner | | | |

---

*Need help with your Maximo to MAS 9 migration? AssetStage provides data staging, transformation, and validation services to ensure clean data migration. Contact us at sales@assetstage.io*

---

© 2025 AssetStage. This checklist may be freely distributed with attribution.
