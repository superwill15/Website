# Asset Standardization Guide for CMMS
## Stop Fighting Duplicates, Messy Hierarchies, and Inconsistent Data

---

## The Real Cost of Naming Chaos

Before we get into solutions, let's quantify the problem.

### The Math Nobody Does

**Scenario:** PM optimization project across 5,000 pumps

| Situation | Time Required | Cost @ £75/hr |
|-----------|---------------|---------------|
| **With standardization** | | |
| Filter by pump type | 5 minutes | - |
| Apply PM template | 30 minutes | - |
| Review and adjust | 4 hours | - |
| **Total** | **~5 hours** | **£375** |
| | | |
| **Without standardization** | | |
| Export to Excel | 30 minutes | - |
| Manually classify 47 naming variations | 40 hours | - |
| Build lookup table | 8 hours | - |
| Verify classifications | 16 hours | - |
| Apply PM templates one-by-one | 24 hours | - |
| **Total** | **~90 hours** | **£6,750** |

**Cost of naming chaos on ONE project: £6,375**

Now multiply by every report, every migration, every consultant engagement, every new site onboarding.

### What Bad Data Actually Looks Like

Export your asset register. Filter by "pump." You'll find:

```
Pump                          ← What type?
PUMP                          ← Same thing, different case
Centrifugal Pump              ← Good start
Cent. Pump                    ← Abbreviated
Centrif Pump                  ← Different abbreviation
CP                            ← Cryptic
Pump, Centrifugal             ← Comma-first format
Pump - Centrifugal            ← Dash format
Centrifugal pump (Grundfos)   ← Manufacturer in name
Grundfos Pump                 ← Manufacturer only
Process Pump                  ← Application, not type
Transfer Pump                 ← Also application
Pump_01                       ← Sequence number
P-101                         ← Tag number, not description
CW Pump                       ← System abbreviation
Seawater Lift Pump            ← Full description
```

16 variations. Same asset type. Zero ability to query "all centrifugal pumps."

---

## The Naming Convention Framework

Every asset name should follow a consistent structure.

### Structure 1: Tag-Based (Most Common)

```
[SITE]-[AREA]-[SYSTEM]-[TYPE]-[SEQUENCE]

Example: PLT1-UTIL-CW-PP-001
         │    │    │   │   │
         │    │    │   │   └── Sequence number (001-999)
         │    │    │   └────── Equipment type code (2-3 char)
         │    │    └────────── System code (2-4 char)
         │    └─────────────── Area code (2-4 char)
         └──────────────────── Site code (3-5 char)
```

### Structure 2: Functional Location Based

```
[FUNCTIONAL_LOCATION]-[TYPE]-[SEQUENCE]

Example: 1000-PWRGEN-STM-PP-001
         │    │      │   │
         │    │      │   └── Pump 001
         │    │      └────── Steam system
         │    └───────────── Power Generation unit
         └────────────────── Plant 1000
```

### Structure 3: Hybrid (SAP Style)

```
[PLANT]-[FUNCTIONAL_LOC]-[EQUIPMENT]

Example: 1000-UTIL-CW-010-PP001
         │    │    │   │   │
         │    │    │   │   └── Pump 001
         │    │    │   └────── Subsystem sequence
         │    │    └────────── Cooling Water
         │    └─────────────── Utilities
         └──────────────────── Plant 1000
```

**Key rule:** Pick ONE structure. Document it. Enforce it everywhere.

---

## Equipment Type Codes (Complete Reference)

Use these codes in your asset names and class fields.

### Rotating Equipment

| Code | Equipment Type | Alt Codes | Notes |
|------|---------------|-----------|-------|
| PP | Pump | PU, P | Use subtype suffix if needed (PP-CF, PP-RCP) |
| PP-CF | Pump, Centrifugal | | Horizontal and vertical |
| PP-RCP | Pump, Reciprocating | | Plunger, piston, diaphragm |
| PP-ROT | Pump, Rotary | | Gear, screw, lobe, vane |
| PP-SUB | Pump, Submersible | | |
| CP | Compressor | CO, C | |
| CP-CF | Compressor, Centrifugal | | |
| CP-RCP | Compressor, Reciprocating | | |
| CP-SCR | Compressor, Screw | | |
| MO | Motor, Electric | EM, M | |
| MO-AC | Motor, AC | | Induction, synchronous |
| MO-DC | Motor, DC | | |
| GB | Gearbox | GR | |
| FN | Fan | FA | Axial, centrifugal |
| BL | Blower | BW | |
| TB | Turbine | TU | Gas, steam, hydro |
| TB-GAS | Turbine, Gas | GT | |
| TB-STM | Turbine, Steam | ST | |
| GN | Generator | GE | |
| AG | Agitator/Mixer | MX | |

### Static Equipment

| Code | Equipment Type | Alt Codes | Notes |
|------|---------------|-----------|-------|
| VE | Vessel, Pressure | PV | |
| TK | Tank | TA | Atmospheric storage |
| TK-ATM | Tank, Atmospheric | | |
| TK-PRES | Tank, Pressurized | | |
| CL | Column/Tower | TW | Distillation, absorption |
| HX | Heat Exchanger | HE | |
| HX-ST | Heat Exchanger, Shell & Tube | | |
| HX-PL | Heat Exchanger, Plate | | |
| HX-AC | Heat Exchanger, Air Cooled | | Fin-fan |
| FT | Filter | FL | |
| ST | Strainer | SR | |
| DR | Dryer | DY | |
| EJ | Ejector | | Steam jet |
| SP | Separator | SE | |

### Valves

| Code | Equipment Type | Alt Codes | Notes |
|------|---------------|-----------|-------|
| VV | Valve (generic) | VA, V | Avoid - use specific type |
| VV-GT | Valve, Gate | | |
| VV-GL | Valve, Globe | | |
| VV-BL | Valve, Ball | | |
| VV-BF | Valve, Butterfly | | |
| VV-CK | Valve, Check | | Swing, lift, dual plate |
| VV-CV | Valve, Control | CV | Includes actuator/positioner |
| VV-SV | Valve, Safety/Relief | SV, RV, PSV | |
| VV-SD | Valve, Shutdown | SDV | ESD/PSD valves |
| VV-BV | Valve, Blowdown | | |
| VV-DV | Valve, Drain | | |

### Piping & Structures

| Code | Equipment Type | Alt Codes | Notes |
|------|---------------|-----------|-------|
| PI | Piping | PL | Line number, not equipment |
| FL | Flange | | Track only if critical |
| SP | Spool Piece | | |
| EX | Expansion Joint | | Bellows, slip |
| ST | Structure | | Pipe racks, platforms |

### Electrical

| Code | Equipment Type | Alt Codes | Notes |
|------|---------------|-----------|-------|
| TR | Transformer | TX, XF | Power, instrument |
| SW | Switchgear | SG | MV, LV |
| CB | Circuit Breaker | | Often part of switchgear |
| MC | Motor Control Center | MCC | |
| VF | Variable Frequency Drive | VFD, VSD | |
| UP | UPS | | |
| BT | Battery | BA | |
| CH | Charger, Battery | BC | |
| CA | Cable | | Usually not tracked individually |
| PD | Panel, Distribution | DB | |
| LT | Lighting | | |
| GR | Grounding | | |

### Instrumentation

| Code | Equipment Type | Alt Codes | Notes |
|------|---------------|-----------|-------|
| FT | Flow Transmitter | | |
| PT | Pressure Transmitter | | |
| TT | Temperature Transmitter | | |
| LT | Level Transmitter | | |
| AT | Analyzer/Analyzer Transmitter | | |
| FE | Flow Element | | Orifice, venturi |
| TE | Temperature Element | | RTD, thermocouple |
| PE | Pressure Element | | Gauge |
| FI | Flow Indicator | | Local |
| PI | Pressure Indicator | | Local gauge |
| TI | Temperature Indicator | | Local |
| LI | Level Indicator | | Sight glass |
| FC | Flow Controller | | |
| PC | Pressure Controller | | |
| TC | Temperature Controller | | |
| LC | Level Controller | | |
| PLC | Programmable Logic Controller | | |
| DCS | Distributed Control System | | |

### Material Handling

| Code | Equipment Type | Alt Codes | Notes |
|------|---------------|-----------|-------|
| CV | Conveyor | CN | Belt, screw, chain |
| CR | Crane | | Overhead, mobile, jib |
| HO | Hoist | | Chain, wire rope |
| EL | Elevator/Lift | | Personnel, freight |
| FO | Forklift | | Usually not in CMMS |
| LD | Loader | | |

### HVAC

| Code | Equipment Type | Alt Codes | Notes |
|------|---------------|-----------|-------|
| AH | Air Handling Unit | AHU | |
| AC | Air Conditioner | | Package, split |
| CH | Chiller | | |
| CT | Cooling Tower | | |
| BL | Boiler | | Steam, hot water |
| DH | Dehumidifier | | |
| HU | Humidifier | | |
| EF | Exhaust Fan | | |
| DU | Ductwork | | Usually not tracked |

---

## Asset Descriptions: Good vs Bad

The description field should be STANDARDIZED and SEARCHABLE.

### Description Formula

```
[Equipment Type], [Configuration/Subtype], [Key Spec]

Examples:
- Centrifugal Pump, Horizontal, 50HP
- Electric Motor, TEFC, 37kW
- Control Valve, Globe, 4" 300#
- Heat Exchanger, Shell & Tube, 500kW
- Transformer, Dry Type, 1000kVA
```

### Before & After Examples

| BAD (Don't Use) | GOOD (Use This) | Why |
|-----------------|-----------------|-----|
| Pump | Centrifugal Pump, Horizontal, 50HP | Specific, searchable |
| P-101 | Centrifugal Pump, Horizontal, 50HP | Tag ≠ description |
| Grundfos Pump | Centrifugal Pump, Horizontal, 50HP | Manufacturer goes in MFR field |
| Cooling Water Pump | Centrifugal Pump, Horizontal, 50HP | System goes in hierarchy |
| Main Pump | Centrifugal Pump, Horizontal, 50HP | "Main" is meaningless |
| Pump 1 | Centrifugal Pump, Horizontal, 50HP | Sequence in tag, not description |
| Motor | Electric Motor, TEFC, 37kW | Specify type and rating |
| 37kW Motor | Electric Motor, TEFC, 37kW | Format consistently |
| WEG Motor | Electric Motor, TEFC, 37kW | Manufacturer in MFR field |
| Pump Motor | Electric Motor, TEFC, 37kW | Driven equipment in relationships |
| Big Valve | Ball Valve, Full Port, 6" 150# | Specify type, size, class |
| V-2301 | Gate Valve, 8" 300#, CS | Tag ≠ description |
| Control Valve | Control Valve, Globe, 3", Equal % | Include size and characteristic |

---

## Attribute Templates by Equipment Class

Every equipment class needs a template defining:
- Required attributes (must fill)
- Optional attributes (fill if known)
- Format/allowed values
- Examples

### Template: Centrifugal Pump

| Attribute | Required | Format | Allowed Values | Example |
|-----------|----------|--------|----------------|---------|
| Asset ID | Yes | [SITE]-[SYS]-PP-[###] | Per naming convention | PLT1-CW-PP-001 |
| Description | Yes | [Type] Pump, [Config], [Power] | Standardized format | Centrifugal Pump, Horizontal, 50HP |
| Equipment Class | Yes | ISO 14224 or internal code | 1.1, PP-CF, PUMP-CENT | 1.1 |
| Manufacturer | Yes | Dropdown | Approved vendor list | Grundfos |
| Model Number | Yes | Free text | - | CR 32-2-2 |
| Serial Number | Yes | Free text | - | 2024-ABC-12345 |
| Criticality | Yes | Dropdown | A, B, C | B |
| Safety Class | Yes | Dropdown | Safety-Critical, Non-Safety | Non-Safety |
| Installation Date | Yes | YYYY-MM-DD | Valid date | 2019-03-15 |
| Design Flow Rate | Yes | Number + unit | m³/h, GPM | 150 m³/h |
| Design Head | Yes | Number + unit | m, ft, bar | 45 m |
| Design Pressure | Yes | Number + unit | bar, psi | 10 bar |
| Motor Power | Yes | Number + unit | kW, HP | 37 kW |
| RPM | Yes | Number | - | 2950 |
| Impeller Diameter | Opt | Number + unit | mm, in | 215 mm |
| Seal Type | Yes | Dropdown | Single Mech, Double Mech, Packed | Mechanical - Double |
| API Plan | Opt | Dropdown | Plan 11, 13, 21, 23, 32, 52, 53A, 53B, 54 | Plan 53B |
| Material - Casing | Opt | Dropdown | Cast Iron, CS, SS316, Duplex, Super Duplex | Cast Iron |
| Material - Impeller | Opt | Dropdown | Bronze, SS316, Duplex, Super Duplex | SS316 |
| Coupling Type | Opt | Dropdown | Flexible, Spacer, Direct | Flexible |
| Parent Location | Yes | Location ID | Valid FLOC | PLT1-UTIL-CW |
| Driven By | Opt | Asset ID | Motor asset ID | PLT1-CW-MO-001 |

### Template: Electric Motor

| Attribute | Required | Format | Allowed Values | Example |
|-----------|----------|--------|----------------|---------|
| Asset ID | Yes | [SITE]-[SYS]-MO-[###] | Per naming convention | PLT1-CW-MO-001 |
| Description | Yes | Electric Motor, [Enclosure], [Power] | Standardized format | Electric Motor, TEFC, 37kW |
| Equipment Class | Yes | Code | 3.3, MO, MOTOR-ELEC | 3.3 |
| Manufacturer | Yes | Dropdown | Approved vendor list | WEG |
| Model Number | Yes | Free text | - | W22 315S/M |
| Serial Number | Yes | Free text | - | BR-2024-78901 |
| Criticality | Yes | Dropdown | A, B, C | B |
| Frame Size | Yes | Text | NEMA or IEC frame | 315S/M |
| Power Rating | Yes | Number + unit | kW, HP | 37 kW |
| Voltage | Yes | Number + unit | V | 400V |
| Full Load Amps | Yes | Number | A | 68 |
| RPM | Yes | Number | - | 2960 |
| Phases | Yes | Dropdown | 1, 3 | 3 |
| Frequency | Yes | Dropdown | 50Hz, 60Hz | 50Hz |
| Enclosure Type | Yes | Dropdown | ODP, TEFC, TENV, XP | TEFC |
| Insulation Class | Yes | Dropdown | B, F, H | F |
| Service Factor | Opt | Number | - | 1.15 |
| Efficiency Class | Opt | Dropdown | IE1, IE2, IE3, IE4 | IE3 |
| Bearing DE | Opt | Text | Part number | 6316-2Z |
| Bearing NDE | Opt | Text | Part number | 6314-2Z |
| Parent Location | Yes | Location ID | Valid FLOC | PLT1-UTIL-CW |
| Drives | Opt | Asset ID | Driven asset ID | PLT1-CW-PP-001 |

### Template: Control Valve

| Attribute | Required | Format | Allowed Values | Example |
|-----------|----------|--------|----------------|---------|
| Asset ID | Yes | [SITE]-[SYS]-CV-[###] | Per naming convention | PLT1-CW-CV-001 |
| Description | Yes | Control Valve, [Body Type], [Size] [Rating] | Format | Control Valve, Globe, 4" 300# |
| Equipment Class | Yes | Code | 8.6, VV-CV, VALVE-CTRL | 8.6 |
| Manufacturer | Yes | Dropdown | Approved vendor list | Fisher |
| Model Number | Yes | Free text | - | ED 4" 300# |
| Serial Number | Yes | Free text | - | FI-2024-12345 |
| Criticality | Yes | Dropdown | A, B, C | A |
| Size | Yes | Text | Nominal size | 4" |
| Pressure Rating | Yes | Dropdown | 150#, 300#, 600#, 900#, 1500#, 2500# | 300# |
| Body Type | Yes | Dropdown | Globe, Angle, Ball, Butterfly | Globe |
| Cv | Yes | Number | - | 150 |
| Characteristic | Yes | Dropdown | Linear, Equal %, Quick Opening | Equal % |
| Material - Body | Yes | Dropdown | CS, SS316, Alloy 20, etc. | WCB |
| Material - Trim | Opt | Dropdown | SS316, SS317, Stellite, etc. | SS316 |
| Actuator Type | Yes | Dropdown | Pneumatic, Electric, Hydraulic | Pneumatic - Diaphragm |
| Actuator Size | Opt | Number | - | 40 |
| Air Fail Action | Yes | Dropdown | Fail Open, Fail Close, Fail Last | Fail Close |
| Positioner | Yes | Y/N | - | Y |
| Positioner Model | Opt | Text | - | DVC6200 |
| SIS Classification | Opt | Dropdown | SIL 1, SIL 2, SIL 3, Non-SIS | Non-SIS |
| Parent Location | Yes | Location ID | Valid FLOC | PLT1-UTIL-CW |

### Template: Heat Exchanger

| Attribute | Required | Format | Allowed Values | Example |
|-----------|----------|--------|----------------|---------|
| Asset ID | Yes | [SITE]-[SYS]-HX-[###] | Per naming convention | PLT1-COOL-HX-001 |
| Description | Yes | Heat Exchanger, [Type], [Duty] | Format | Heat Exchanger, Shell & Tube, 500kW |
| Equipment Class | Yes | Code | 5.1, HX-ST | 5.1 |
| Manufacturer | Yes | Dropdown | Approved vendor list | Alfa Laval |
| Model Number | Yes | Free text | - | M10-BFG |
| Serial Number | Yes | Free text | - | AL-2024-45678 |
| Criticality | Yes | Dropdown | A, B, C | B |
| Type | Yes | Dropdown | Shell & Tube, Plate, Air Cooled, Double Pipe | Shell & Tube |
| Duty | Yes | Number + unit | kW, BTU/hr | 500 kW |
| Surface Area | Yes | Number + unit | m², ft² | 50 m² |
| Design Pressure - Shell | Yes | Number + unit | bar, psi | 10 bar |
| Design Pressure - Tube | Yes | Number + unit | bar, psi | 16 bar |
| Design Temp - Shell | Yes | Number + unit | °C, °F | 150°C |
| Design Temp - Tube | Yes | Number + unit | °C, °F | 200°C |
| Material - Shell | Yes | Dropdown | CS, SS304, SS316, Titanium | CS |
| Material - Tubes | Yes | Dropdown | CS, SS304, SS316, Cu-Ni, Titanium | SS316 |
| TEMA Type | Opt | Text | - | AES |
| Number of Tubes | Opt | Number | - | 200 |
| Tube Length | Opt | Number + unit | m, ft | 3 m |
| Number of Passes - Shell | Opt | Number | - | 1 |
| Number of Passes - Tube | Opt | Number | - | 2 |
| Parent Location | Yes | Location ID | Valid FLOC | PLT1-COOL |

---

## Hierarchy Design Patterns

Choose a pattern that fits your industry and CMMS.

### Pattern 1: Location-First (Facilities/Commercial)

```
Enterprise
└── Site (Campus/Building)
    └── Area (Floor/Zone)
        └── System (HVAC, Electrical, Plumbing)
            └── Equipment
                └── Component

Example:
ACME Corp
└── HQ Building
    └── Floor 3
        └── HVAC System
            └── AHU-3-01
                └── Supply Fan
                └── Cooling Coil
                └── Filter Bank
```

**Best for:** Commercial buildings, campuses, facilities management

### Pattern 2: Process-First (Manufacturing/Process)

```
Enterprise
└── Site (Plant)
    └── Process Unit
        └── System
            └── Subsystem
                └── Equipment
                    └── Component

Example:
ACME Chemicals
└── Plant 1
    └── Distillation Unit 100
        └── Feed System
            └── Feed Preheat
                └── E-101 Feed/Effluent Exchanger
                    └── Tube Bundle
                    └── Channel Head
```

**Best for:** Refineries, chemical plants, process industries

### Pattern 3: ISO 14224 Full (Oil & Gas)

```
Industry
└── Business Category
    └── Installation
        └── Plant/Unit
            └── Section
                └── Equipment Unit
                    └── Subunit
                        └── Maintainable Item
                            └── Part

Example:
Petroleum
└── Upstream - Offshore
    └── Platform Alpha
        └── Water Injection
            └── Seawater Lift
                └── P-4501A Seawater Lift Pump
                    └── Pump Assembly
                        └── Mechanical Seal
                            └── O-Ring
```

**Best for:** Oil & gas when benchmarking with OREDA data

### Pattern 4: Hybrid (Common Compromise)

```
Site
└── Area
    └── Functional Location (System + Tag)
        └── Equipment
            └── Component

Example:
Plant 1
└── Utilities
    └── 1-UTIL-CW-010 (Cooling Water Pump Station)
        └── PP-001 Cooling Water Pump A
            └── Mechanical Seal
            └── Coupling
        └── MO-001 Pump A Motor
        └── PP-002 Cooling Water Pump B
        └── MO-002 Pump B Motor
```

**Best for:** Most industrial sites, especially SAP PM users

---

## The Standardization Crosswalk

Before you can standardize, you need to MAP your chaos.

### Step 1: Export and Count Variations

```sql
-- Find all unique values in asset type/class field
SELECT asset_type, COUNT(*) as count
FROM assets
GROUP BY asset_type
ORDER BY count DESC;
```

### Step 2: Build Your Crosswalk Table

| Current Value | Standard Value | Count | Action | Notes |
|---------------|----------------|-------|--------|-------|
| Pump | PP - Pump | 234 | AUTO-MAP | Generic - may need review |
| PUMP | PP - Pump | 89 | AUTO-MAP | Case variation |
| Centrifugal Pump | PP-CF - Pump, Centrifugal | 156 | AUTO-MAP | Good |
| Cent. Pump | PP-CF - Pump, Centrifugal | 23 | AUTO-MAP | Abbreviation |
| Centrif Pump | PP-CF - Pump, Centrifugal | 12 | AUTO-MAP | Abbreviation |
| CP | PP-CF - Pump, Centrifugal | 45 | VERIFY | Confirm these are centrifugal |
| Pump, Centrifugal | PP-CF - Pump, Centrifugal | 8 | AUTO-MAP | Format variation |
| Pump - Centrifugal | PP-CF - Pump, Centrifugal | 5 | AUTO-MAP | Format variation |
| Grundfos Pump | PP-CF - Pump, Centrifugal | 67 | AUTO-MAP | Move MFR to correct field |
| Process Pump | MANUAL REVIEW | 34 | REVIEW | Need to verify pump type |
| Transfer Pump | MANUAL REVIEW | 28 | REVIEW | Need to verify pump type |
| CW Pump | PP-CF - Pump, Centrifugal | 45 | AUTO-MAP | Confirm system from hierarchy |
| Submersible Pump | PP-SUB - Pump, Submersible | 12 | AUTO-MAP | Different type |
| Sump Pump | PP-SUB - Pump, Submersible | 8 | VERIFY | May be centrifugal or submersible |
| P-101 | MANUAL REVIEW | 1 | REVIEW | Tag number, not type |

### Step 3: Apply Transformations

```sql
-- Example update query (test in staging first!)
UPDATE assets
SET asset_type_standard = 'PP-CF'
WHERE asset_type IN ('Centrifugal Pump', 'Cent. Pump', 'Centrif Pump',
                     'Pump, Centrifugal', 'Pump - Centrifugal');
```

### Blank Crosswalk Template

| Current Value | Standard Value | Count | Action | Notes |
|---------------|----------------|-------|--------|-------|
| | | | | |
| | | | | |
| | | | | |
| | | | | |
| | | | | |

---

## Data Quality Governance

### RACI Matrix

| Activity | Data Owner | CMMS Admin | Reliability Eng | Maintenance Sup | Technician |
|----------|------------|------------|-----------------|-----------------|------------|
| Define naming convention | A | R | C | C | I |
| Approve new equipment classes | A | R | C | I | I |
| Create new asset records | I | C | I | R | R |
| Modify asset hierarchy | A | R | C | I | I |
| Add new failure codes | C | R | A | C | I |
| Review data quality KPIs | A | R | C | I | I |
| Delete/merge duplicate assets | A | R | C | C | I |
| Approve vendor master additions | A | R | I | C | I |

**A** = Accountable (decision maker)
**R** = Responsible (does the work)
**C** = Consulted (input required)
**I** = Informed (kept in loop)

### Change Request Workflow

```
1. REQUEST
   └── Requestor submits change request form
       - What: Describe the change
       - Why: Business justification
       - Impact: Affected assets/processes

2. ANALYSIS
   └── CMMS Admin performs impact analysis
       - How many assets affected?
       - What reports/integrations impacted?
       - Reversibility?

3. REVIEW
   └── Data Owner reviews and approves/rejects
       - Aligns with standards?
       - Worth the effort?
       - Timing appropriate?

4. IMPLEMENT
   └── CMMS Admin implements change
       - In test environment first
       - Document changes made
       - Update related documentation

5. VERIFY
   └── Requestor verifies change
       - Meets requirements?
       - No unintended consequences?

6. COMMUNICATE
   └── Notify affected users
       - What changed
       - When effective
       - What to do differently
```

---

## Data Quality KPIs Dashboard

Track these metrics monthly.

### Completeness Metrics

| KPI | Formula | Target | Your Current |
|-----|---------|--------|--------------|
| Assets with manufacturer | Assets with MFR ÷ Total Assets × 100 | >90% | ____% |
| Assets with model number | Assets with Model ÷ Total Assets × 100 | >85% | ____% |
| Assets with serial number | Assets with S/N ÷ Total Assets × 100 | >80% | ____% |
| Assets with criticality | Assets with Criticality ÷ Total Assets × 100 | 100% | ____% |
| Assets with install date | Assets with Date ÷ Total Assets × 100 | >90% | ____% |
| Assets with parent location | Assets with Parent ÷ Total Assets × 100 | 100% | ____% |

### Consistency Metrics

| KPI | Formula | Target | Your Current |
|-----|---------|--------|--------------|
| Naming convention compliance | Compliant Names ÷ Total Assets × 100 | >95% | ____% |
| Equipment class assigned | Assets with Class ÷ Total Assets × 100 | 100% | ____% |
| Valid equipment class | Assets with Valid Class ÷ Assets with Class × 100 | 100% | ____% |
| Duplicate asset rate | Duplicate Assets ÷ Total Assets × 100 | <2% | ____% |
| Orphan assets (no parent) | Orphans ÷ Total Assets × 100 | 0% | ____% |

### Description Quality

| KPI | Formula | Target | Your Current |
|-----|---------|--------|--------------|
| Avg description length | Sum of char lengths ÷ Total Assets | >25 chars | ____ chars |
| Descriptions >10 chars | Long descriptions ÷ Total × 100 | >95% | ____% |
| Unique descriptions | Unique ÷ Total × 100 | >80% | ____% |

### Audit Queries

**Find assets missing manufacturer:**
```sql
SELECT assetnum, description, location
FROM asset
WHERE (manufacturer IS NULL OR manufacturer = '')
  AND status = 'OPERATING'
ORDER BY location;
```

**Find duplicate descriptions:**
```sql
SELECT description, COUNT(*) as count
FROM asset
WHERE status = 'OPERATING'
GROUP BY description
HAVING COUNT(*) > 3
ORDER BY count DESC;
```

**Find naming convention violations:**
```sql
-- Adjust pattern to match your convention
SELECT assetnum, description
FROM asset
WHERE assetnum NOT REGEXP '^[A-Z]{3,5}-[A-Z]{2,4}-[A-Z]{2}-[0-9]{3}$'
  AND status = 'OPERATING';
```

**Find orphan assets:**
```sql
SELECT a.assetnum, a.description
FROM asset a
LEFT JOIN locations l ON a.location = l.location
WHERE l.location IS NULL
  AND a.status = 'OPERATING';
```

**Find equipment class variations:**
```sql
SELECT
  UPPER(TRIM(equipment_class)) as normalized_class,
  COUNT(*) as count,
  GROUP_CONCAT(DISTINCT equipment_class) as variations
FROM asset
GROUP BY UPPER(TRIM(equipment_class))
HAVING COUNT(DISTINCT equipment_class) > 1
ORDER BY count DESC;
```

---

## 90-Day Implementation Roadmap

### Days 1-30: Assess & Define

**Week 1: Data Discovery**
- [ ] Export complete asset register to Excel
- [ ] Count unique values in: asset type, class, manufacturer, description
- [ ] Identify top 20 equipment classes by count
- [ ] Document current naming patterns (or lack thereof)
- [ ] Count duplicates (same serial number, same location+type)

**Week 2: Gap Analysis**
- [ ] Choose target standard (ISO 14224, KKS, or custom)
- [ ] Compare current classes to target classes
- [ ] Identify required attributes per class (from templates above)
- [ ] Calculate completeness % for each required attribute
- [ ] Prioritize gaps by impact and effort

**Week 3: Standards Definition**
- [ ] Draft naming convention document
- [ ] Draft equipment class list with definitions
- [ ] Draft attribute templates for top 10 equipment classes
- [ ] Draft description format rules
- [ ] Create good/bad examples

**Week 4: Stakeholder Alignment**
- [ ] Present standards to maintenance leadership
- [ ] Present to reliability engineering
- [ ] Present to CMMS administrators
- [ ] Incorporate feedback
- [ ] Get formal sign-off

### Days 31-60: Build & Map

**Week 5-6: Crosswalk Development**
- [ ] Build crosswalk for asset type/class variations
- [ ] Build crosswalk for manufacturer name variations
- [ ] Build crosswalk for description standardization
- [ ] Build crosswalk for location hierarchy mapping
- [ ] Identify records requiring manual review

**Week 7: Staging Environment**
- [ ] Set up staging environment (AssetStage or test CMMS)
- [ ] Configure validation rules
- [ ] Load asset data into staging
- [ ] Run automated transformations
- [ ] Generate exception reports

**Week 8: Pilot & Refine**
- [ ] Select pilot area (500-1000 assets)
- [ ] Apply all transformations to pilot
- [ ] Review results with SMEs
- [ ] Adjust crosswalks based on findings
- [ ] Document lessons learned

### Days 61-90: Implement & Enforce

**Week 9-10: Full Transformation**
- [ ] Apply transformations to remaining assets
- [ ] Complete manual review items
- [ ] Validate parent-child relationships
- [ ] Verify no orphan assets
- [ ] Run full data quality report

**Week 11: Go-Live**
- [ ] Load standardized data to production CMMS
- [ ] Verify data integrity post-load
- [ ] Configure CMMS validation rules (dropdowns, required fields)
- [ ] Update user documentation
- [ ] Train users on new standards

**Week 12: Sustain**
- [ ] Set up data quality dashboard
- [ ] Schedule monthly data quality reviews
- [ ] Establish change request process
- [ ] Assign data stewards per area
- [ ] Plan quarterly standards review

---

## Quick Reference Card

### Naming Convention
```
[SITE]-[AREA]-[SYSTEM]-[TYPE]-[SEQ]
Example: PLT1-UTIL-CW-PP-001
```

### Top Equipment Codes
| Code | Type | Code | Type |
|------|------|------|------|
| PP | Pump | VV | Valve |
| MO | Motor | HX | Heat Exchanger |
| CP | Compressor | TK | Tank |
| GB | Gearbox | VE | Vessel |
| FN | Fan | TR | Transformer |
| BL | Blower | SW | Switchgear |

### Description Format
```
[Equipment Type], [Configuration], [Key Spec]
Example: Centrifugal Pump, Horizontal, 50HP
```

### Required Attributes (All Classes)
- Manufacturer
- Model Number
- Serial Number
- Criticality (A/B/C)
- Installation Date
- Parent Location

### Data Quality Contacts
- Data Owner: ________________
- CMMS Admin: ________________
- Questions: ________________

---

## Self-Assessment: Are You Ready?

Score yourself 0-2 on each item (0=No, 1=Partial, 2=Yes)

| Item | Score |
|------|-------|
| We have a documented naming convention | /2 |
| The naming convention is enforced in CMMS | /2 |
| We have defined equipment classes | /2 |
| Equipment classes are consistently applied | /2 |
| We have attribute templates per class | /2 |
| Required attributes are enforced | /2 |
| We have a data quality owner | /2 |
| We measure data quality KPIs | /2 |
| We have a change control process | /2 |
| We review data quality monthly | /2 |
| **TOTAL** | **/20** |

**Scoring:**
- 16-20: Excellent - focus on continuous improvement
- 11-15: Good foundation - close the gaps
- 6-10: Significant work needed - start with standards
- 0-5: Major overhaul required - get help

---

*Need help standardizing your asset data? AssetStage provides the staging environment, validation rules, and bulk transformation tools to make standardization practical. Contact us at sales@assetstage.io*

---

© 2025 AssetStage. This guide may be freely distributed with attribution.
