---
title: "Engineering Standards Implementation Guide"
subtitle: "RDS-PP, RDS-PS, KKS, ISO 14224, and SFI for CMMS"
author: "AssetStage"
---

# Engineering Standards Implementation Guide
## RDS-PP, RDS-PS, KKS, ISO 14224, and SFI for CMMS

---

## Why Engineering Standards Matter

Without standards, every site invents its own:

- Naming conventions
- Equipment classifications
- Failure codes
- Hierarchy structures

The result: incompatible data across sites, useless for benchmarking, impossible to standardize maintenance.

Engineering standards solve this by providing:

- **Consistent taxonomy** - Same equipment = same classification everywhere
- **Comparable data** - MTBF means the same thing across all sites
- **Industry benchmarking** - Compare your performance to peers
- **Vendor communication** - Universal language with suppliers

---

## Choosing the Right Standard

### Decision Matrix

| Standard | Primary Industry | Hierarchy Focus | Failure Data | Best For |
|----------|------------------|-----------------|--------------|----------|
| **ISO 14224** | Oil & Gas, Process | Equipment taxonomy | Yes (comprehensive) | Reliability analysis, failure tracking |
| **RDS-PP** | Power Plants | Functional + Physical | Limited | Power generation facilities |
| **RDS-PS** | Power Systems | Functional + Physical | Limited | Electrical systems, renewables |
| **KKS** | Power Plants (German) | Functional + Physical | Limited | German/European power plants |
| **SFI** | Maritime/Shipping | Functional | Limited | Vessels, offshore |
| **ISO 55000** | All industries | Asset management | No | Governance framework |

### Decision Tree

```
What industry are you in?
│
├─► Oil & Gas (Upstream, Downstream, Midstream)
│   └─► Use ISO 14224 for equipment taxonomy and failure codes
│       Consider RDS-PP/KKS if strong power generation component
│
├─► Power Generation (Thermal, Nuclear)
│   └─► Use KKS (German-speaking) or RDS-PP (international)
│       Add ISO 14224 failure codes for reliability analysis
│
├─► Power Generation (Renewables - Wind, Solar)
│   └─► Use RDS-PS (enhanced IEC 81346)
│       Add ISO 14224 failure codes for reliability analysis
│
├─► Maritime/Shipping
│   └─► Use SFI for vessel hierarchy
│       Add ISO 14224 failure codes for reliability analysis
│
├─► Manufacturing/Process Industries
│   └─► Use ISO 14224 (adapted) for equipment taxonomy
│       Create custom hierarchy based on your process
│
└─► Utilities (Water, Gas Distribution)
    └─► Use ISO 14224 for equipment
        Consider GIS-based linear asset management
```

---

## Part 1: ISO 14224

### Overview

ISO 14224:2016 "Petroleum, petrochemical and natural gas industries — Collection and exchange of reliability and maintenance data for equipment"

**What it provides:**

- 9-level equipment taxonomy
- Standard equipment classes with boundaries
- Failure mode, mechanism, cause codes
- Data collection requirements
- Example data sheets

**See our dedicated ISO 14224 Cheat Sheet for complete code tables.**

### ISO 14224 Hierarchy (Quick Reference)

| Level | Name | Example |
|-------|------|---------|
| 1 | Industry | Petroleum |
| 2 | Business Category | Upstream - Offshore |
| 3 | Installation | Platform Alpha |
| 4 | Plant/Unit | Water Injection |
| 5 | Section/System | Seawater Lift |
| 6 | Equipment Unit | Pump P-4501A |
| 7 | Subunit | Pump Assembly |
| 8 | Maintainable Item | Mechanical Seal |
| 9 | Part | O-Ring |

### Key Equipment Classes

| Class | Equipment | Typical Boundary |
|-------|-----------|------------------|
| 1.1 | Centrifugal Pump | From suction flange to discharge flange, excluding motor |
| 1.2 | Reciprocating Pump | From suction to discharge, excluding driver |
| 2.1 | Centrifugal Compressor | From suction to discharge, including internal seals |
| 3.3 | Electric Motor | From terminal box to coupling |
| 5.1 | Shell & Tube HX | From inlet to outlet flanges |
| 8.6 | Control Valve | Body, actuator, positioner as one unit |

### Implementation Steps

1. **Map your equipment to ISO 14224 classes**
   - Export your asset register
   - Assign ISO 14224 class code to each asset type
   - Document boundary definitions

2. **Load failure code tables**
   - Failure modes (ELP, LOO, VIB, etc.)
   - Failure mechanisms (wear, corrosion, fatigue, etc.)
   - Failure causes (design, operations, maintenance, etc.)

3. **Configure CMMS**
   - Add classification field
   - Add failure code fields to work orders
   - Make codes mandatory for failure records

4. **Train users**
   - What codes mean
   - How to select appropriate codes
   - Why it matters for analysis

---

## Part 2: RDS-PP (Reference Designation System for Power Plants)

### Overview

RDS-PP is based on IEC 81346 and provides designation systems for power generation facilities.

**Key features:**

- Three-aspect designation (Function, Location, Product)
- Covers entire power plant lifecycle
- International standard (VGB PowerTech)

### RDS-PP Structure

**Aspect Prefixes:**

- `=` Function aspect (what it does)
- `+` Location aspect (where it is)
- `-` Product aspect (what it is)

**Example designation:**
```
=G1 +KAA -AA001
│    │     │
│    │     └── Product: Turbine 001
│    └──────── Location: Unit 1, Turbine Building
└───────────── Function: Generator system 1
```

### RDS-PP Function Codes (Main Groups)

| Code | System | Description |
|------|--------|-------------|
| A | Electrical Power Supply | Grid connection, transformers |
| B | Instrumentation & Control | DCS, PLCs, instruments |
| C | Communication | Telecom, networks |
| E | Water Supply | Raw water, cooling water |
| G | Steam/Water Cycle | Boiler, turbine, condenser |
| H | Heat Supply | District heating |
| K | I&C for Machine | Turbine controls |
| L | Fuel Storage & Handling | Coal, oil, gas handling |
| M | Combustion Air/Flue Gas | Air systems, FGD, SCR |
| N | Auxiliary Systems | Compressed air, HVAC |
| P | Process (non-power) | Chemical dosing |
| Q | Auxiliary Steam | Auxiliary boilers |
| R | Waste Disposal | Ash handling |
| U | Structural Facilities | Buildings, civil |
| X | Heavy Machinery | Cranes, conveyors |

### RDS-PP Examples

| Designation | Description |
|-------------|-------------|
| =G1 +KAA -MK001 | Unit 1 HP Turbine |
| =G1 +KBA -AN001 | Unit 1 Generator |
| =G1 +MAA -PU001 | Unit 1 FD Fan |
| =G2 +HAA -WE001 | Unit 2 Steam Drum |
| =A0 +UCA -TN001 | Common Station Transformer |
| =N0 +BAA -PU001 | Instrument Air Compressor |

### Implementation Steps

1. **Define plant structure**
   - Identify all units
   - Define location hierarchy (buildings, floors, areas)
   - Define function groups

2. **Assign designations**
   - Start with major equipment
   - Work down to components
   - Document designation rules

3. **Configure CMMS**
   - Add function, location, product fields
   - Or combine into single designation field
   - Build hierarchy structure

---

## Part 3: RDS-PS (Reference Designation System for Power Supply)

### Overview

RDS-PS extends IEC 81346 specifically for electrical power systems, including:

- Transmission & Distribution
- Substations
- Renewable energy (wind, solar)
- Energy storage
- Smart grid infrastructure

### RDS-PS vs RDS-PP

| Aspect | RDS-PP | RDS-PS |
|--------|--------|--------|
| Focus | Power generation | Power systems (gen + T&D) |
| Renewables | Limited | Full support |
| Grid integration | Limited | Comprehensive |
| Energy storage | Limited | Full support |
| Standard base | VGB R 116 | IEC 81346 series |

### RDS-PS Structure

Same three-aspect system as RDS-PP:

- `=` Function
- `+` Location
- `-` Product

### RDS-PS for Renewables

**Wind Farm Example:**
```
=WF01          Wind Farm 01 (function)
+A01           Array 01 (location)
-WTG001        Wind Turbine Generator 001 (product)

Complete: =WF01+A01-WTG001

Subcomponents:
=WF01+A01-WTG001.ROT    Rotor assembly
=WF01+A01-WTG001.GBX    Gearbox
=WF01+A01-WTG001.GEN    Generator
=WF01+A01-WTG001.NAC    Nacelle
=WF01+A01-WTG001.TWR    Tower
```

**Solar Plant Example:**
```
=PV01          PV Plant 01 (function)
+F01           Field 01 (location)
-INV001        Inverter 001 (product)

Related equipment:
=PV01+F01-STR001       String 001
=PV01+F01-CB001        Combiner Box 001
=PV01+SUB-TR001        Main Transformer
```

**Battery Energy Storage Example:**
```
=BES1          Battery Energy Storage System 1
+R01           Rack 01
-BAT001        Battery Module 001

Related:
=BES1+PWR-PCS001       Power Conversion System
=BES1+CTL-BMS001       Battery Management System
=BES1+THM-HVAC001      Thermal Management
```

### RDS-PS Implementation

1. **Define system boundaries**
   - Generation assets
   - Transmission/interconnection
   - Distribution (if applicable)
   - Customer interface

2. **Establish designation rules**
   - Function codes by system type
   - Location codes by geographic/physical
   - Product codes by equipment type

3. **Document crosswalks**
   - If migrating from other standards
   - Map old designations to RDS-PS

---

## Part 4: KKS (Kraftwerk-Kennzeichensystem)

### Overview

KKS is the German power plant identification system, widely used in Europe and globally where German engineering influence is strong.

**KKS structure:**
```
Plant Unit + Function + Equipment + Component
   1            2          3           4
```

### KKS Code Structure

**Level 0: Plant identification (optional)**

- AA = Plant A
- AB = Plant B

**Level 1: Unit/system area (1-2 characters)**

| Code | System |
|------|--------|
| 0 | Plant general |
| 1 | Main machine set |
| 2 | High pressure systems |
| 3 | Intermediate pressure systems |
| 4 | Low pressure systems |
| 5 | Feedwater systems |
| 6 | Condensate systems |
| 7 | Cooling water systems |
| 8 | Auxiliary systems |
| 9 | Gas turbine |

**Level 2: System (2-3 characters)**

| Code | System |
|------|--------|
| LAB | Boiler |
| LBA | Superheater |
| MAA | Turbine HP |
| MAB | Turbine IP |
| MAG | Turbine LP |
| MKA | Generator |

**Level 3: Equipment (2-3 characters)**

| Code | Equipment |
|------|-----------|
| AA | General |
| AP | Pump |
| AT | Tank |
| AV | Valve |
| AN | Motor |
| CF | Filter |

**Level 4: Component/signal (optional)**

| Code | Meaning |
|------|---------|
| 001 | Sequence number |
| M01 | Motor |
| P01 | Instrument |

### KKS Examples

| KKS Code | Description |
|----------|-------------|
| 1MAA AA001 | Unit 1 HP Turbine |
| 1MKA AN001 | Unit 1 Generator |
| 1LAA AP001 | Unit 1 Boiler Feed Pump 1 |
| 1LAA AP002 | Unit 1 Boiler Feed Pump 2 |
| 1LAB AV001 | Unit 1 Main Steam Valve |
| 0LCB AP001 | Common Condensate Pump 1 |

### KKS to RDS-PP Mapping

| KKS | RDS-PP | Description |
|-----|--------|-------------|
| 1MAA AA001 | =G1+KAA-MK001 | HP Turbine |
| 1MKA AN001 | =G1+KBA-AN001 | Generator |
| 1LAA AP001 | =G1+LAA-AP001 | Boiler Feed Pump |

---

## Part 5: SFI Group System (Maritime)

### Overview

SFI is the international standard for ship classification. (See Maritime CMMS Guide for full details.)

### SFI Structure

```
Main Group (1 digit)  → Major ship function
Group (2 digits)      → System
Subgroup (3 digits)   → Component type
Detail (6 digits)     → Specific item
```

### SFI Main Groups

| Group | Name |
|-------|------|
| 0 | Ship General |
| 1 | Hull |
| 2 | Cargo Equipment |
| 3 | Ship Equipment |
| 4 | Accommodation |
| 5 | Crew Equipment |
| 6 | Machinery Main |
| 7 | Machinery Systems |
| 8 | Common Systems |

### SFI Examples

| Code | Description |
|------|-------------|
| 601 | Main Diesel Engine |
| 611 | Auxiliary Engine |
| 631 | Propeller |
| 721 | Sea Water Cooling System |
| 731 | Air Compressor |
| 851 | Main Switchboard |

---

## Part 6: Combining Standards

### ISO 14224 + RDS-PP/KKS

Use RDS-PP or KKS for:

- Equipment naming/designation
- Hierarchy structure
- Location identification

Use ISO 14224 for:

- Equipment classification (for reliability analysis)
- Failure modes
- Failure mechanisms
- Failure causes
- Data collection requirements

**Example combined approach:**

| Field | Standard | Example |
|-------|----------|---------|
| Asset ID | RDS-PP | =G1+LAA-AP001 |
| Description | Company | Boiler Feed Pump A |
| Equipment Class | ISO 14224 | 1.1 - Centrifugal Pump |
| Failure Mode | ISO 14224 | ELP - External Leak |
| Failure Mechanism | ISO 14224 | 1.1 - Wear |

### SFI + ISO 14224

Use SFI for:

- Vessel hierarchy
- Equipment identification
- Spare parts cataloging

Use ISO 14224 for:

- Failure coding
- Reliability analysis
- Industry benchmarking

---

## Part 7: Implementation Roadmap

### Phase 1: Assessment (Weeks 1-2)

- [ ] Audit current equipment naming
- [ ] Count naming variations
- [ ] Identify applicable standard(s)
- [ ] Define implementation scope

### Phase 2: Design (Weeks 3-4)

- [ ] Define hierarchy structure
- [ ] Create designation rules
- [ ] Build equipment class crosswalk
- [ ] Design failure code structure
- [ ] Document standards guide

### Phase 3: Configuration (Weeks 5-6)

- [ ] Configure CMMS fields
- [ ] Load code tables
- [ ] Build hierarchy
- [ ] Set up validation rules
- [ ] Create templates

### Phase 4: Data Migration (Weeks 7-10)

- [ ] Export current data
- [ ] Apply designations
- [ ] Classify equipment
- [ ] Validate relationships
- [ ] Load to CMMS

### Phase 5: Rollout (Weeks 11-12)

- [ ] Train administrators
- [ ] Train end users
- [ ] Monitor compliance
- [ ] Refine as needed

---

## Quick Reference: Standard Selection

| If your industry is... | Use this for hierarchy | Use this for failure codes |
|------------------------|----------------------|---------------------------|
| Oil & Gas - Offshore | ISO 14224 (9-level) | ISO 14224 |
| Oil & Gas - Refining | ISO 14224 or custom | ISO 14224 |
| Power - Coal/Gas/Nuclear | RDS-PP or KKS | ISO 14224 |
| Power - Wind/Solar | RDS-PS | ISO 14224 |
| Maritime - Vessels | SFI | ISO 14224 |
| Maritime - Offshore platforms | SFI or ISO 14224 | ISO 14224 |
| Manufacturing | Custom (based on ISO 14224) | ISO 14224 (adapted) |
| Utilities - Water | Custom | ISO 14224 (adapted) |
| Facilities | Custom (location-based) | Simplified ISO 14224 |

---

*Need help implementing engineering standards? AssetStage provides data staging, validation, and clean import to any CMMS platform. Contact us at sales@assetstage.io*

---

© 2026 AssetStage. This guide may be freely distributed with attribution.
