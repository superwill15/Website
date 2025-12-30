# ISO 14224 Implementation Cheat Sheet
## A Practical Reference Guide for Reliability & Maintenance Engineers

---

## Who This Guide Is For

- Reliability engineers implementing failure tracking
- CMMS administrators setting up code tables
- Data migration teams preparing for Maximo/SAP upgrades
- Maintenance managers standardizing across sites

---

## What ISO 14224 Actually Does

ISO 14224:2016 standardizes how you collect, structure, and exchange reliability and maintenance data for industrial equipment. It gives you:

- **A common taxonomy** - 9 levels from industry down to part
- **Standard failure codes** - Failure modes, mechanisms, causes
- **Equipment boundaries** - What counts as "one asset"
- **Data collection requirements** - What to record for each failure

**What it doesn't do:** Tell you how to organize your CMMS. You adapt ISO 14224 to your system, not the other way around.

---

## The 9-Level Taxonomy

This is the backbone of ISO 14224. Every piece of equipment fits somewhere in this hierarchy.

| Level | Name | Description | Example (Seawater Lift Pump) | Typical CMMS Field |
|-------|------|-------------|------------------------------|-------------------|
| 1 | Industry | Broad industry sector | Petroleum | Business Unit |
| 2 | Business Category | Type of operation | Upstream | Facility Type |
| 3 | Installation | Physical facility | Offshore Platform Alpha | Site |
| 4 | Plant/Unit | Process unit | Water Injection System | Functional Location L1 |
| 5 | Section/System | Sub-process | Seawater Lift | Functional Location L2 |
| 6 | Equipment Unit | Maintainable item | Seawater Lift Pump P-4501A | Equipment/Asset |
| 7 | Subunit | Major assembly | Pump Assembly | Component Group |
| 8 | Maintainable Item | Replaceable component | Mechanical Seal | Component |
| 9 | Part | Individual part | O-Ring | Spare Part |

**Key decision:** Most CMMS implementations track to Level 6 (Equipment Unit) or Level 8 (Maintainable Item). Going deeper adds data entry burden without proportional analysis value.

---

## Equipment Classes (Annex A Reference)

ISO 14224 defines standard equipment classes. Use these codes consistently across all sites.

### Rotating Equipment

| Code | Equipment Class | Typical Subunits | Key Attributes |
|------|-----------------|------------------|----------------|
| 1.1 | Centrifugal Pump | Impeller, Mechanical Seal, Bearings, Coupling | Flow rate (m³/h), Head (m), Power (kW), RPM |
| 1.2 | Reciprocating Pump | Plunger/Piston, Valves, Packing, Crankshaft | Flow rate, Pressure (bar), Stroke, Power |
| 1.3 | Rotary Pump | Rotor, Timing Gears, Bearings, Seals | Flow rate, Pressure, Viscosity range |
| 2.1 | Centrifugal Compressor | Impeller, Seals, Bearings, Lube System | Capacity (m³/h), Discharge P (bar), Power |
| 2.2 | Reciprocating Compressor | Piston, Valves, Packing, Crankshaft | Capacity, Pressure ratio, Stages |
| 2.3 | Screw Compressor | Rotors, Bearings, Seals, Oil System | Capacity, Pressure, Oil injection rate |
| 3.1 | Gas Turbine | Compressor Section, Combustor, Power Turbine | Power (MW), Heat rate, Fuel type |
| 3.2 | Steam Turbine | Rotor, Blades, Bearings, Governor | Power, Inlet P/T, Exhaust P |
| 3.3 | Electric Motor | Stator, Rotor, Bearings, Cooling | Power (kW), Voltage, RPM, Frame size |
| 3.4 | Diesel/Gas Engine | Cylinder, Pistons, Fuel System, Turbocharger | Power, Cylinders, Fuel consumption |
| 4.1 | Generator | Rotor, Stator, Exciter, AVR | Power (MVA), Voltage, Power factor |

### Static Equipment

| Code | Equipment Class | Typical Subunits | Key Attributes |
|------|-----------------|------------------|----------------|
| 5.1 | Shell & Tube HX | Tubes, Shell, Gaskets, Baffles | Duty (kW), Area (m²), Design P/T |
| 5.2 | Plate Heat Exchanger | Plates, Gaskets, Frame | Duty, Plates, Design P/T |
| 5.3 | Air Cooled HX | Tubes, Fins, Headers, Fans | Duty, Face area, Fan power |
| 6.1 | Pressure Vessel | Shell, Heads, Nozzles, Internals | Volume (m³), Design P/T, Material |
| 6.2 | Atmospheric Tank | Shell, Roof, Floor, Nozzles | Capacity (m³), Diameter, Height |
| 6.3 | Column/Tower | Shell, Trays/Packing, Distributors | Height, Diameter, Stages/HETP |
| 7.1 | Piping | Pipe, Fittings, Supports | Diameter, Schedule, Material, Length |

### Valves

| Code | Equipment Class | Typical Subunits | Key Attributes |
|------|-----------------|------------------|----------------|
| 8.1 | Gate Valve | Body, Gate, Stem, Packing | Size, Pressure class, Material |
| 8.2 | Globe Valve | Body, Plug, Stem, Packing | Size, Cv, Pressure class |
| 8.3 | Ball Valve | Body, Ball, Seats, Stem | Size, Port (full/reduced), Pressure class |
| 8.4 | Butterfly Valve | Body, Disc, Shaft, Seat | Size, Pressure class, Liner material |
| 8.5 | Check Valve | Body, Disc/Ball, Seat | Size, Type (swing/lift/dual), Pressure class |
| 8.6 | Control Valve | Body, Trim, Actuator, Positioner | Size, Cv, Characteristic, Actuator type |
| 8.7 | Safety/Relief Valve | Body, Disc, Spring, Bonnet | Size, Set pressure, Capacity |

### Electrical & Instrumentation

| Code | Equipment Class | Typical Subunits | Key Attributes |
|------|-----------------|------------------|----------------|
| 9.1 | Transformer | Core, Windings, Bushings, Cooling | Rating (MVA), Voltage ratio, Cooling type |
| 9.2 | Switchgear | Breaker, Bus, CT/PT, Protection | Voltage, Current rating, Breaking capacity |
| 9.3 | UPS | Rectifier, Inverter, Batteries, Static switch | Capacity (kVA), Autonomy, Battery type |
| 10.1 | Transmitter | Sensor, Electronics, Housing | Measurement type, Range, Output signal |
| 10.2 | Analyzer | Sensor, Sample system, Electronics | Measurement type, Range, Sample handling |
| 10.3 | Control System | I/O, Processor, Power supply, HMI | I/O count, Redundancy, Protocol |

---

## Failure Mode Codes

Use these codes on EVERY failure record. No free text. No "Other" unless genuinely novel.

### Primary Failure Modes (Equipment Level)

| Code | Failure Mode | Definition | Use When... |
|------|--------------|------------|-------------|
| AIR | Abnormal instrument reading | Instrument shows incorrect value | Transmitter drift, gauge error |
| BRD | Breakdown | Complete loss of function requiring major repair | Catastrophic failure |
| ELP | External leakage - Loss of containment to environment | Process fluid leaking externally | Flange leak, seal leak, casing crack |
| ELU | External leakage - Utility | Utility fluid leaking externally | Cooling water leak, steam leak |
| ERO | Erratic output | Irregular, fluctuating, or intermittent output | Unstable flow, fluctuating pressure |
| FTC | Fail to close | Does not close on demand | Valve stuck open |
| FTO | Fail to open | Does not open on demand | Valve stuck closed |
| FTR | Fail to regulate | Does not control to setpoint | Control valve hunting |
| FTS | Fail to start on demand | Does not start when commanded | Motor won't start, pump won't prime |
| FTF | Fail to function on demand | General failure to perform function | Safety device doesn't trip |
| HIO | High output | Output above acceptable operating range | Overpressure, overtemperature |
| ILP | Internal leakage - Process | Internal process leakage | Valve passing, tube leak |
| ILU | Internal leakage - Utility | Internal utility leakage | Internal cooling water bypass |
| LOO | Low output | Output below acceptable operating range | Low flow, low pressure |
| NOI | Noise | Abnormal noise | Cavitation, bearing noise |
| OHE | Overheating | Temperature above acceptable | Hot bearing, motor overheating |
| PDE | Parameter deviation | Gradual drift outside acceptable limits | Vibration trending up |
| PLU | Plugged/Choked | Flow restriction or blockage | Strainer blocked, line fouled |
| SER | Minor in-service problems | Degraded but functional | Requiring adjustment |
| SET | Spurious trip/activation | Trips or activates without demand | Nuisance trip |
| STP | Structural deficiency | Mechanical damage or deformation | Cracked casing, bent shaft |
| UST | Spurious stop | Stops without command | Random shutdown |
| VIB | Vibration | Abnormal vibration | Imbalance, misalignment |
| OTH | Other | Not covered above | Document details in comments |
| UNK | Unknown | Cannot determine | Use sparingly - investigate! |

---

## Failure Mechanism Codes

Record WHY it failed, not just HOW it failed.

### Mechanical Mechanisms

| Code | Mechanism | Definition | Common Causes |
|------|-----------|------------|---------------|
| 1.1 | Wear - General | Material loss from relative motion | Normal service, inadequate lubrication |
| 1.2 | Wear - Abrasive | Material removal by hard particles | Contaminated fluid, sand ingress |
| 1.3 | Wear - Erosive | Material removal by fluid/particle impact | High velocity flow, cavitation |
| 1.4 | Corrosion - External | Chemical attack from external environment | Atmospheric, CUI, soil |
| 1.5 | Corrosion - Internal | Chemical attack from process fluid | CO2, H2S, acids, chlorides |
| 1.6 | Erosion-Corrosion | Combined erosion and corrosion | High velocity corrosive flow |
| 1.7 | Fatigue | Cyclic stress failure | Vibration, pressure cycling |
| 1.8 | Overload | Stress beyond design limits | Surge, water hammer, overpressure |
| 1.9 | Fracture - Brittle | Sudden crack propagation | Low temperature, hydrogen embrittlement |
| 1.10 | Fracture - Ductile | Crack with plastic deformation | Overload, creep |
| 1.11 | Deformation | Permanent shape change | Overload, thermal expansion |
| 1.12 | Looseness | Loss of fastener integrity | Vibration, thermal cycling |
| 1.13 | Seizure/Galling | Binding of moving parts | Lack of lubrication, contamination |
| 1.14 | Clearance/Alignment | Out of tolerance | Wear, installation error, settlement |

### Electrical Mechanisms

| Code | Mechanism | Definition | Common Causes |
|------|-----------|------------|---------------|
| 2.1 | Short circuit | Insulation breakdown | Moisture, overheating, age |
| 2.2 | Open circuit | Loss of continuity | Wire break, connector failure |
| 2.3 | Earth/Ground fault | Unintended ground connection | Insulation failure, contamination |
| 2.4 | Electrical overheating | Thermal damage | Overload, poor connection |
| 2.5 | Insulation failure | Loss of dielectric integrity | Age, contamination, overvoltage |

### Instrument/Control Mechanisms

| Code | Mechanism | Definition | Common Causes |
|------|-----------|------------|---------------|
| 3.1 | Out of calibration | Drift beyond tolerance | Time, temperature, vibration |
| 3.2 | Software fault | Logic or code error | Bug, configuration error |
| 3.3 | Signal interference | Electrical noise | EMI, grounding issues |
| 3.4 | Sensor fouling | Contamination of sensing element | Process deposits |

### External Mechanisms

| Code | Mechanism | Definition | Common Causes |
|------|-----------|------------|---------------|
| 4.1 | Foreign object damage | FOD ingress | Debris, dropped objects |
| 4.2 | Contamination | Unwanted material in system | Process upset, ingress |
| 4.3 | Environmental | Weather, temperature extremes | Flooding, freezing, heat |
| 4.4 | External impact | Physical damage from outside | Collision, dropped load |

### Other

| Code | Mechanism | Definition | Common Causes |
|------|-----------|------------|---------------|
| 5.1 | Material defect | Manufacturing flaw | Poor QC, casting defect |
| 5.2 | Design error | Inadequate design | Wrong material, undersized |
| 5.3 | Fabrication error | Construction/installation defect | Weld defect, wrong gasket |
| 5.4 | Operating error | Incorrect operation | Wrong procedure, operator error |
| 5.5 | Maintenance error | Incorrect maintenance | Reassembly error, wrong parts |
| 5.9 | Combined causes | Multiple mechanisms | Document all in comments |
| 5.0 | Unknown | Cannot determine | Investigate further |

---

## Failure Cause Codes

The ROOT CAUSE - what initiated the failure chain.

| Code | Cause Category | Examples |
|------|----------------|----------|
| 1 | Design-related | Inadequate capacity, wrong material selection, poor design margins |
| 2 | Fabrication/Installation | Weld defects, assembly errors, wrong components installed |
| 3 | Operations-related | Operating outside design envelope, operator error, process upset |
| 4 | Maintenance-related | PM not performed, incorrect procedure, wrong parts, reassembly error |
| 5 | Management-related | Inadequate procedures, insufficient training, poor spare parts management |
| 6 | Miscellaneous | Unknown, combination, not applicable |

---

## Detection Method Codes

How was the failure discovered?

| Code | Detection Method | Description |
|------|------------------|-------------|
| PER | Periodic maintenance | Found during scheduled PM |
| INS | Periodic inspection | Found during scheduled inspection |
| TST | Functional testing | Found during proof test |
| PRM | Production/Process demand | Demand revealed the failure |
| OBS | Casual observation | Found by chance during other work |
| CPM | Condition monitoring | Vibration, oil analysis, thermography |
| ALM | Process alarm | SCADA/DCS alarm triggered |
| OTH | Other | Document in comments |

---

## Maintenance Activity Codes

What did you DO about it?

| Code | Activity | Description |
|------|----------|-------------|
| REP | Repair | Restore to function without full replacement |
| RPL | Replace | Replace with new/reconditioned item |
| MOD | Modify | Change design or configuration |
| ADJ | Adjust | Realign, retorque, recalibrate |
| CHK | Check/Inspect | Inspect with no action needed |
| REC | Recondition | Refurbish to like-new condition |
| TST | Test | Functional test with no deficiency |
| CMB | Combination | Multiple activities - document all |

---

## Complete Worked Example

### Scenario
Seawater lift pump on offshore platform fails with external seal leak during normal operation.

### Equipment Data Record

| Field | Value |
|-------|-------|
| **Hierarchy** | |
| Industry | Petroleum |
| Business Category | Upstream - Offshore |
| Installation | Platform Alpha |
| Plant/Unit | Water Injection |
| Section | Seawater Lift |
| **Equipment** | |
| Equipment ID | P-4501A |
| Equipment Class | 1.1 - Centrifugal Pump |
| Description | Seawater Lift Pump A |
| Manufacturer | Sulzer |
| Model | MSD-D 80-200 |
| Serial Number | SZ-2019-45678 |
| **Design Data** | |
| Flow Rate | 450 m³/h |
| Head | 85 m |
| Power | 160 kW |
| Speed | 2980 RPM |
| Seal Type | Double mechanical (API Plan 53B) |
| Material - Casing | Super Duplex SS |
| Material - Impeller | Super Duplex SS |
| **Operating Context** | |
| Installation Date | 2019-03-15 |
| Operating Hours at Failure | 32,456 |
| Criticality | A - Production Critical |
| Safety Class | Non safety-critical |

### Failure Data Record

| Field | Value |
|-------|-------|
| Failure Date | 2024-11-15 |
| Failure Time | 14:32 |
| Operating Hours | 32,456 |
| **Failure Classification** | |
| Failure Mode | ELP - External leakage - process |
| Subunit Failed | Mechanical Seal Assembly |
| Maintainable Item | Outboard Mechanical Seal |
| Part Failed | Stationary face |
| **Root Cause Analysis** | |
| Failure Mechanism | 1.1 - Wear - General |
| Failure Cause | 4 - Maintenance-related (seal faces not replaced at last overhaul) |
| Detection Method | OBS - Casual observation (operator noticed dripping) |
| **Impact** | |
| Severity | Degraded - Reduced capacity required |
| Downtime | 18 hours |
| Production Loss | 1,200 m³ water injection capacity |

### Maintenance Data Record

| Field | Value |
|-------|-------|
| Work Order | WO-2024-8934 |
| Activity Date | 2024-11-15 to 2024-11-16 |
| **Work Performed** | |
| Activity Type | RPL - Replace |
| Description | Replace outboard mechanical seal cartridge |
| **Resources** | |
| Labor Hours | 24 (2 techs × 12 hours) |
| Parts Used | 1× Seal cartridge P/N SZ-MSD-SEAL-OB |
| Parts Cost | £4,200 |
| **Timing** | |
| Active Repair Time | 8 hours |
| Waiting Time | 6 hours (parts from store) |
| Admin/Logistics | 4 hours |

### Lessons Learned
- Seal faces should be replaced at every major overhaul regardless of condition
- Update PM procedure PMP-4501 to mandate seal face replacement
- Consider upgrading to Silicon Carbide faces for longer life

---

## CMMS Field Mapping Quick Reference

### Maximo Mapping

| ISO 14224 Concept | Maximo Object | Maximo Field |
|-------------------|---------------|--------------|
| Equipment Unit | ASSET | ASSETNUM, DESCRIPTION |
| Equipment Class | CLASSSTRUCTURE | CLASSSTRUCTUREID |
| Hierarchy Level 1-5 | LOCATIONS | LOCATION (hierarchy) |
| Equipment Attributes | ASSETSPEC | ALNVALUE, NUMVALUE |
| Failure Mode | FAILURECODE | FAILURECODE |
| Failure Mechanism | PROBLEMCODE | PROBLEMCODE |
| Failure Cause | CAUSECODE | CAUSECODE |
| Maintenance Activity | WORKORDER | WORKTYPE |
| Downtime | DOWNTIME | DOWNTIME object |
| Operating Hours | METER | METERNAME, LASTREADING |

### SAP PM Mapping

| ISO 14224 Concept | SAP Object | SAP Field |
|-------------------|------------|-----------|
| Equipment Unit | Equipment Master | EQUNR, EQKTX |
| Equipment Class | Classification | CLASS, KLART |
| Hierarchy Level 1-5 | Functional Location | TPLNR (hierarchy) |
| Equipment Attributes | Characteristics | ATNAM, ATWRT |
| Failure Mode | Damage Code | FECOD (catalog type C) |
| Failure Mechanism | Cause Code | URSACH (catalog type 5) |
| Failure Cause | Root Cause | Custom catalog |
| Maintenance Activity | Order Type | AUART |
| Downtime | Breakdown indicator | MSAUS |
| Operating Hours | Measuring Point | POINT, READG |

---

## Implementation Decision Tree

```
START: What industry are you in?
│
├─► Oil & Gas (Upstream/Downstream)
│   └─► Use ISO 14224 as primary standard
│       └─► Implement full 9-level taxonomy
│       └─► Use all failure code tables as-is
│
├─► Power Generation
│   └─► Use KKS or RDS-PP for hierarchy structure
│   └─► Adopt ISO 14224 failure modes & mechanisms
│   └─► Map KKS equipment classes to ISO 14224 Annex A
│
├─► Maritime/Shipping
│   └─► Use SFI Group System for hierarchy
│   └─► Adopt ISO 14224 failure codes
│   └─► See our Maritime CMMS Guide for integration
│
├─► Manufacturing/Process Industries
│   └─► Create custom hierarchy (Site→Area→Line→Equipment)
│   └─► Adopt ISO 14224 equipment classes where applicable
│   └─► Use ISO 14224 failure modes & mechanisms
│   └─► Customize equipment classes for industry-specific assets
│
└─► Facilities/Commercial
    └─► Create location-based hierarchy (Building→Floor→Zone→Asset)
    └─► Adopt simplified ISO 14224 failure codes
    └─► Focus on equipment classes relevant to HVAC, electrical, plumbing
```

---

## Common Mistakes & How to Fix Them

| Mistake | Why It's Wrong | How to Fix |
|---------|----------------|------------|
| Recording "Pump failed" | Too vague for analysis | Require specific failure mode code (ELP, LOO, FTS, etc.) |
| Using UNK/Other for >10% of failures | Destroys analytical value | Train technicians, require supervisor review, investigate |
| Free-text failure descriptions | Can't aggregate or trend | Lock fields to dropdowns, add comments field for details |
| Inconsistent equipment boundaries | Corrupts rollup reporting | Document boundary definitions with diagrams |
| Not recording operating hours | Can't calculate MTBF | Install hour meters, enforce meter readings on failures |
| Skipping mechanism/cause | Lose root cause data | Make fields mandatory, won't close WO without them |
| Too many failure codes | Users confused, inconsistent selection | Limit to 20-30 codes per equipment class, retire unused codes |
| Too few failure codes | Lose detail, everything is "Other" | Review annually, add codes for top recurring issues |

---

## 30-Point Implementation Checklist

### Setup (Do First)

- [ ] Download ISO 14224:2016 standard (or access via corporate subscription)
- [ ] Identify pilot equipment group (10-20 critical assets)
- [ ] Map existing CMMS hierarchy to ISO 14224 9-level structure
- [ ] Document equipment boundary definitions with diagrams
- [ ] Create equipment class crosswalk (your codes → ISO 14224)

### Code Tables

- [ ] Load failure mode codes into CMMS (from this guide)
- [ ] Load failure mechanism codes into CMMS
- [ ] Load failure cause codes into CMMS
- [ ] Load detection method codes into CMMS
- [ ] Load maintenance activity codes into CMMS
- [ ] Configure code relationships (which mechanisms valid for which modes)
- [ ] Set up code table governance (who can add/modify)

### Data Collection

- [ ] Create failure report template/form
- [ ] Define mandatory fields for failure records
- [ ] Configure CMMS validation rules (can't close WO without codes)
- [ ] Install/verify hour meters on rotating equipment
- [ ] Create work order templates that prompt for ISO 14224 data

### Training

- [ ] Train reliability engineers on code selection
- [ ] Train technicians on failure data collection
- [ ] Train supervisors on data quality review
- [ ] Create quick reference cards for field use
- [ ] Document 5-10 example failure records as training reference

### Governance

- [ ] Assign data quality owner
- [ ] Set up monthly data quality review
- [ ] Create KPI dashboard (% complete, % with codes, UNK rate)
- [ ] Establish quarterly code table review process
- [ ] Document lessons learned process

---

## Data Quality KPIs to Track

| Metric | Target | Formula |
|--------|--------|---------|
| Failure records with valid failure mode | >95% | Records with FM ≠ blank or UNK / Total failure records |
| Failure records with mechanism | >90% | Records with mechanism / Total failure records |
| Failure records with cause | >85% | Records with cause / Total failure records |
| "Unknown" failure mode rate | <5% | Records with FM = UNK / Total failure records |
| "Other" failure mode rate | <10% | Records with FM = OTH / Total failure records |
| Operating hours recorded | >95% | Failures with hours / Total failures on metered equipment |
| Average time to close failure record | <7 days | Mean days from failure to WO close |

---

## Quick Reference: Top 10 Equipment Classes

For quick code selection in the field:

| If the asset is a... | Use class... | Common failure modes |
|---------------------|--------------|---------------------|
| Centrifugal pump | 1.1 | ELP, LOO, VIB, FTS, NOI |
| Reciprocating pump | 1.2 | ELP, LOO, VIB, NOI |
| Electric motor | 3.3 | FTS, OHE, VIB, ELP (bearing) |
| Centrifugal compressor | 2.1 | VIB, STP, OHE, ELP |
| Control valve | 8.6 | FTR, ELP, ILP, STP |
| Manual valve | 8.1-8.5 | ELP, ILP, FTO, FTC |
| Safety valve | 8.7 | FTO, SET, ELP, ILP |
| Heat exchanger | 5.1 | ILP (tube leak), PLU, LOO |
| Instrument/Transmitter | 10.1 | AIR, PDE, FTF |
| Transformer | 9.1 | OHE, ELP (oil), STP |

---

*Need help implementing ISO 14224 in your CMMS? AssetStage provides staging, validation, and clean import to Maximo and SAP. Contact us at sales@assetstage.io*

---

© 2025 AssetStage. This guide may be freely distributed with attribution.
