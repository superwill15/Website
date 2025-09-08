---
title: "Maximo vs SAP PM: Data Structure Comparison"
date: "2025-08-04"
description: "A technical comparison of how Maximo and SAP PM handle asset hierarchies, work orders, and preventive maintenance. Essential reading for migration projects."
---

## The Great CMMS Divide

If you're migrating between IBM Maximo and SAP PM (Plant Maintenance), you're not just moving data – you're translating between two fundamentally different philosophies of maintenance management. This technical deep-dive will help you navigate the complexities and avoid the pitfalls that derail 40% of CMMS-to-CMMS migrations.

## Core Philosophy Differences

**Maximo:** Object-oriented, flexible, maintenance-centric
**SAP PM:** Process-oriented, integrated, enterprise-centric

This fundamental difference shapes everything from data structures to user workflows.

## Asset Hierarchy: Two Worlds

### Maximo Asset Structure

Maximo uses a flexible, multi-level hierarchy:

```
SITES
  └── LOCATIONS (Functional)
      └── ASSETS (Physical)
          └── ASSET (Parent-Child)
              └── ASSET (Components)
```

**Key Characteristics:**
- Locations and Assets are separate entities
- Assets can move between locations
- Unlimited hierarchy levels
- Flexible parent-child relationships

**Example:**
```
Site: PLANT-01
  Location: BLDG-A-FLOOR-2-ROOM-201
    Asset: PMP-2001 (Pump)
      Child Asset: MTR-2001-01 (Motor)
        Child Asset: BRG-2001-01-01 (Bearing)
```

### SAP PM Structure

SAP uses Functional Locations and Equipment:

```
FUNCTIONAL LOCATIONS (Where)
  └── EQUIPMENT (What)
      └── EQUIPMENT (Assembly)
          └── EQUIPMENT (Component)
```

**Key Characteristics:**
- Functional Locations represent the "where"
- Equipment represents the "what"
- Equipment can be installed/removed from locations
- Structured using FLOC and Equipment numbers

**Example:**
```
Functional Location: 1000-200-PMP-001
  Equipment: 10000123 (Pump)
    Equipment: 10000124 (Motor)
      Equipment: 10000125 (Bearing)
```

### Migration Mapping Strategy

| Maximo | SAP PM | Transformation Notes |
|--------|--------|---------------------|
| Site | Plant | Direct mapping |
| Location | Functional Location | Requires structure code definition |
| Asset (fixed) | Functional Location | For non-moveable assets |
| Asset (moveable) | Equipment | Maintain installation history |
| Asset Hierarchy | Equipment BOM | Rebuild parent-child relationships |

## Work Order Architecture

### Maximo Work Orders

**Structure:**
```
WORKORDER
  └── WOTASK (Multiple tasks)
      └── WOACTIVITY (Nested work)
          └── WOMATL (Materials)
          └── WOLABOR (Labor)
```

**Key Fields:**
- WONUM (Unique identifier)
- STATUS (State machine driven)
- WORKTYPE (PM, CM, EM, etc.)
- JPNUM (Job Plan reference)

### SAP PM Orders

**Structure:**
```
MAINTENANCE ORDER
  └── ORDER HEADER
      └── OPERATIONS (Multiple)
          └── COMPONENTS (Materials)
          └── CONFIRMATIONS (Time)
```

**Key Fields:**
- AUFNR (Order number)
- AUART (Order type)
- STTXT (System status)
- ILART (Activity type)

### Critical Mapping Considerations

```
Maximo WORKORDER.STATUS → SAP Status Profile
Maximo WOTASK → SAP Operations
Maximo JPNUM → SAP Task List
Maximo WOACTIVITY → Separate SAP Orders
```

**Warning:** SAP's status management is more rigid than Maximo's. Plan status mapping carefully.

## Preventive Maintenance: Different Paradigms

### Maximo PM Structure

```
PM (Preventive Maintenance)
  ├── Frequency (Time/Meter based)
  ├── Job Plan (Template)
  └── Routes (Multiple assets)
```

**Characteristics:**
- PM generates Work Orders
- Flexible frequency options
- Job Plans are reusable
- Routes group multiple assets

### SAP PM Structure

```
MAINTENANCE PLAN
  ├── Maintenance Strategy
  ├── Task List (IA01)
  └── Maintenance Items
```

**Characteristics:**
- Strategy defines cycles
- Task Lists contain operations
- Plans generate Call Objects
- Call Objects become Orders

### PM Migration Complexity

The translation isn't one-to-one:

| Maximo PM Element | SAP PM Element | Complexity |
|-------------------|----------------|------------|
| PM Frequency | Strategy Package | Medium |
| Job Plan | Task List | High |
| PM Route | Multiple Plans | Very High |
| Meter-based PM | Performance-based | Medium |
| Season Dates | Time-based with calendar | Low |

## Data Field Mapping Challenges

### Critical Field Differences

**Asset/Equipment Master:**
```
Maximo                 → SAP
ASSETNUM (free text)   → EQUNR (number range)
DESCRIPTION (255 char) → EQKTX (40 char)
SERIALNUM             → SERNR (via separate object)
FAILURECODE           → FECOD (catalog dependent)
```

**Work Order Fields:**
```
Maximo                → SAP
TARGSTARTDATE        → GSTRP (Basic start)
ACTSTART/ACTFINISH   → Confirmation records
WORKTYPE             → AUART (limited values)
REPORTEDBY           → QMNAM (notification)
```

### The Description Truncation Problem

Maximo allows 255 characters for descriptions. SAP limits you to 40.

**Before Migration:**
```
"Centrifugal Pump - Cooling Water System Building A Floor 2 
High Pressure Side with Variable Speed Drive and Remote Monitoring"
```

**After Migration:**
```
"CENT PUMP CW BLDG-A FL2 HP VSD"
```

**Solution:** Implement description mapping tables and use SAP long text for full descriptions.

## Hidden Gotchas in Migration

### 1. Status Mapping Nightmare

Maximo statuses don't map directly to SAP:

```
Maximo: WAPPR → APPR → INPRG → COMP → CLOSE
SAP: REL (Released) → TECO (Technically Complete) → CLSD
```

You'll need custom status profiles in SAP to maintain process flows.

### 2. The Spare Parts Connection

**Maximo:** Direct asset-to-inventory item links
**SAP:** Equipment BOM with material masters

This requires complete BOM creation during migration.

### 3. Cost Tracking Philosophy

**Maximo:** Costs tracked at Work Order level
**SAP:** Costs flow through controlling (CO) module

Budget planning and cost center assignments become critical.

### 4. User Permissions

**Maximo:** Role-based with data restrictions
**SAP:** Authorization objects with org levels

Complete security redesign usually required.

## Migration Best Practices

### Pre-Migration Assessment

1. **Data Volume Analysis**
```
SELECT COUNT(*) FROM ASSET WHERE STATUS = 'ACTIVE';
SELECT COUNT(*) FROM WORKORDER WHERE YEAR(REPORTDATE) >= 2022;
```

2. **Complexity Scoring**
- Simple asset: 1 point
- Complex hierarchy: 5 points
- PM with route: 10 points
- Calculate total complexity score

3. **Risk Identification**
- Custom fields in Maximo
- Workflow dependencies
- Integration touch points

### Phased Migration Approach

**Phase 1: Master Data**
- Sites → Plants
- Locations → Functional Locations
- Assets → Equipment
- Validate hierarchy integrity

**Phase 2: Maintenance Plans**
- Job Plans → Task Lists
- PM → Maintenance Plans
- Test scheduling logic

**Phase 3: Open Work Orders**
- Only migrate APPR and INPRG statuses
- Close historical work in legacy system
- Maintain reference numbers

### Data Transformation Rules

```python
# Example: Maximo to SAP Equipment Number
def transform_asset_number(maximo_assetnum):
    """Convert Maximo asset to SAP equipment number"""
    # Remove special characters
    clean = re.sub(r'[^A-Z0-9]', '', maximo_assetnum.upper())
    # Pad with zeros for SAP format
    if len(clean) < 18:
        return clean.zfill(18)
    return clean[:18]

# Example: Status mapping
STATUS_MAP = {
    'WAPPR': 'CRTD',
    'APPR': 'REL',
    'INPRG': 'PCNF',
    'COMP': 'TECO',
    'CLOSE': 'CLSD'
}
```

## Post-Migration Validation

### Critical Checks

```sql
-- Hierarchy Integrity
SELECT COUNT(*) 
FROM equipment e1
LEFT JOIN equipment e2 ON e1.superior_equipment = e2.equipment
WHERE e1.superior_equipment IS NOT NULL 
AND e2.equipment IS NULL;

-- PM Coverage
SELECT 
  COUNT(DISTINCT equipment) as total_equipment,
  COUNT(DISTINCT maintained_equipment) as maintained,
  (COUNT(DISTINCT maintained_equipment) * 100.0 / 
   COUNT(DISTINCT equipment)) as pm_coverage
FROM equipment_maintenance_plans;
```

## Tools for Success

### Extraction Tools
- **Maximo:** MEA (Migration Manager)
- **SAP:** LSMW (Legacy System Migration Workbench)

### Transformation Tools
- **AssetStage:** Purpose-built for CMMS migration
- **Talend:** Enterprise ETL platform
- **Python + Pandas:** For custom transformations

### Validation Tools
- **SQL queries:** For data integrity
- **Excel/Power BI:** For reconciliation
- **Custom scripts:** For business rule validation

## The Reality Check

Migrating between Maximo and SAP PM is not a simple data copy. It's a translation between two different maintenance philosophies. Success requires:

1. **Deep understanding** of both systems
2. **Careful mapping** of data structures
3. **Extensive testing** of transformed data
4. **User training** on new paradigms
5. **Patience** during the transition

## Conclusion

Whether you're moving from Maximo to SAP or vice versa, the key to success isn't the technology – it's understanding the fundamental differences in how these systems think about maintenance. Plan for complexity, test thoroughly, and always maintain a path back to your source data.

Remember: You're not just migrating data. You're translating between two different maintenance languages.

---

*Facing a Maximo to SAP migration? Or moving the other direction? AssetStage specializes in complex CMMS-to-CMMS migrations, with pre-built mappings and transformation rules for all major platforms. [Learn about our migration services](/services) or [schedule a consultation](/demo).*