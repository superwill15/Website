---
title: "SFI CMMS Implementation Checklist"
subtitle: "The Complete Checklist for Implementing SFI Coding in Your Maritime CMMS"
author: "AssetStage"
---

# SFI CMMS Implementation Checklist
## The Complete Checklist for Implementing SFI Coding in Your Maritime CMMS

---

## How to Use This Checklist

This checklist covers every phase of implementing SFI coding in your CMMS, from licence acquisition to fleet-wide rollout. Use it to:

- Track progress through each implementation phase
- Ensure nothing is missed before loading data into production
- Coordinate between technical superintendents, CMMS administrators, and vessel crews
- Provide documentation for audits and project governance

Each section builds on the previous one. Complete them in order for best results.

---

## Pre-Implementation

- [ ] SFI User Licence Certificate purchased from SpecTec for each vessel/site
- [ ] SFI manuals distributed to project team (A5 book, database file, or both)
- [ ] Project sponsor identified (Technical Director or Fleet Manager level)
- [ ] Implementation team assembled: technical superintendent, CMMS administrator, chief engineer from pilot vessel, procurement representative
- [ ] Target CMMS platform confirmed and version documented
- [ ] Hierarchy depth decision made: which equipment gets detail-level coding, which stays at sub-group level
- [ ] Naming convention standard drafted and agreed by stakeholders
- [ ] Pilot vessel(s) selected
- [ ] Timeline and milestones defined with realistic allowances for data cleansing

---

## Data Audit

- [ ] All data sources identified: legacy CMMS, spreadsheets, paper logs, OEM manuals, class records
- [ ] Master equipment list consolidated from all sources
- [ ] Ghost assets identified and flagged for removal
- [ ] Naming inconsistencies catalogued across fleet
- [ ] Missing attributes identified: serial numbers, OEM details, installation dates
- [ ] Orphaned work orders and maintenance history identified
- [ ] Decision made on historical data: what migrates, what gets archived, what gets discarded
- [ ] Criticality assessment completed for all equipment (safety-critical, operationally critical, non-critical)

---

## SFI Mapping

- [ ] Each equipment item assigned an SFI code from licensed documentation
- [ ] Multi-function equipment classified by primary function
- [ ] Custom/non-standard equipment reviewed (Groups 0 and 9 used only where genuinely necessary)
- [ ] Auxiliary systems (piping, valves, instrumentation) coded under parent system, not standalone
- [ ] Fleet standardisation check: same equipment type on same vessel type gets same SFI code
- [ ] Spare parts numbered using SFI detail code + sequential identifier
- [ ] Parent-child hierarchy relationships defined and documented
- [ ] Mapping reviewed and approved by technical superintendent and chief engineer

---

## Data Staging and Validation

- [ ] Staging environment set up (dedicated tool or controlled spreadsheet structure)
- [ ] Equipment data loaded into staging environment
- [ ] SFI code assignments validated against licensed standard
- [ ] Parent-child hierarchy checked for completeness (no orphaned children, no missing levels)
- [ ] Naming convention compliance verified across all records
- [ ] Cross-vessel consistency checks completed for fleet standardisation
- [ ] Gaps identified: equipment physically present but missing from data
- [ ] Duplicate records identified and resolved
- [ ] Staged data reviewed and signed off by engineering team before CMMS loading

---

## CMMS Configuration

- [ ] Equipment templates/asset classes configured to match SFI sub-groups
- [ ] Attribute fields defined for each equipment type
- [ ] Failure coding structure configured (failure modes, causes, detection methods)
- [ ] Spare parts catalogue structure aligned with SFI hierarchy
- [ ] Maintenance task templates created and linked to SFI-coded equipment
- [ ] Manufacturer maintenance intervals loaded
- [ ] Class survey requirements mapped to specific equipment
- [ ] Shore-to-ship synchronisation tested (if applicable)
- [ ] User roles and data entry permissions defined

---

## Data Loading

- [ ] Test load completed with subset of pilot vessel data
- [ ] Loaded data verified against staging data (spot checks on hierarchy, codes, attributes)
- [ ] Work order generation tested against SFI-coded equipment
- [ ] Spare parts retrieval tested using SFI-based search
- [ ] Reporting tested: can you filter and aggregate by SFI group across the fleet?
- [ ] Full pilot vessel data loaded after test validation
- [ ] Post-load data quality audit completed

---

## Rollout and Training

- [ ] Chief engineer training delivered: navigation, work orders, failure recording
- [ ] Technical superintendent training delivered: fleet analysis, data quality, reporting
- [ ] Procurement training delivered: SFI-based spare parts numbering and search
- [ ] User guides created for day-to-day operations (platform-specific, not generic)
- [ ] Help desk or support contact established for first 90 days
- [ ] Pilot vessel running for minimum one full maintenance cycle before fleet expansion
- [ ] Lessons learned captured and applied to next wave of vessels

---

## Data Governance (Ongoing)

- [ ] Data steward role assigned (who maintains the SFI hierarchy?)
- [ ] New equipment process defined: coding, naming, and data entry before first maintenance task
- [ ] Change control process for hierarchy modifications
- [ ] Quarterly data quality review scheduled
- [ ] Annual review of SFI mapping against fleet changes (new vessels, equipment upgrades, decommissioning)

---

## Data Audit Template

Use this structure when building your master equipment list during the audit phase. Populate one row per equipment item across all vessels.

| Field | Description | Example |
|-------|-------------|---------|
| Vessel Name | Ship or installation name | MV Northern Spirit |
| Current Equipment ID | As-is identifier from legacy system | EQ-4471 |
| Current Name/Description | Current name, however inconsistent | SW Cooling Pump No.1 |
| Physical Location | Where on the vessel | Engine Room, Port Side |
| OEM Manufacturer | Equipment manufacturer | Alfa Laval |
| Model | Manufacturer model number | SB-150 |
| Serial Number | If available | ALV-2019-08841 |
| Year Installed | Installation or commissioning date | 2019 |
| Criticality | Safety-critical / Operationally critical / Non-critical | Operationally critical |
| Proposed SFI Code | Assigned during mapping phase | 713.002 |
| Proposed Standardised Name | Per your naming convention | Seawater Cooling Pump No.1 |
| Parent Equipment | SFI-coded parent in hierarchy | 713 (Central Cooling System) |
| Maintenance Plan Exists? | Y/N (is there a current PM schedule?) | Y |
| Maintenance Source | OEM manual / Class requirement / Operating experience | OEM + Class |
| Spare Parts Linked? | Y/N (are BOMs available?) | Y |
| Notes / Issues | Migration concerns, data gaps, anomalies | Serial number unverified |

---

## Equipment Mapping Decision Guide

When SFI mapping isn't obvious, use this decision logic.

### Question 1: What is the equipment's primary function?

SFI is function-oriented, not location-oriented. A pump in the engine room could belong to several SFI groups depending on what it does. Classify by function, not by physical position.

### Question 2: Does it serve one system exclusively, or multiple systems?

Equipment dedicated to one system belongs under that system's SFI group. Equipment serving multiple systems (like a common seawater cooling pump) is classified under the primary system it supports or under Ship Common Systems (Group 8) if it's genuinely shared.

### Question 3: Is it a standalone asset or a component of a larger assembly?

Standalone assets get their own SFI detail code and appear as discrete items in the hierarchy. Components (sub-assemblies, parts) are typically captured within the parent equipment's spare parts list rather than as separate hierarchy entries, unless they are maintainable items with their own PM schedules.

### Question 4: Is there an existing SFI sub-group that fits, or is this genuinely unique?

Check thoroughly before using Groups 0 or 9. Most equipment that seems unique to a particular vessel type actually fits within the standard SFI structure when classified by function. Reserve Groups 0 and 9 for genuinely novel equipment with no functional equivalent in the standard.

### Question 5: How have you classified this equipment type on other vessels?

Fleet consistency matters more than getting the "perfect" code for one vessel. If you've already mapped similar equipment on a sister vessel, use the same classification, even if an argument could be made for an alternative code. Consistency enables fleet-wide analysis; individual optimisation doesn't.

---

## SFI Structure Quick Reference

### Main Groups

| Group | Name | Covers |
|-------|------|--------|
| 0 | Ship General | Administrative functions, certificates |
| 1 | Hull | Structure, framing, outfit |
| 2 | Cargo Equipment | Holds, handling, tank systems |
| 3 | Ship Equipment | Mooring, anchoring, navigation, safety |
| 4 | Accommodation | Bridge, cabins, galley, HVAC |
| 5 | Crew Equipment | Communications, workshop |
| 6 | Machinery Main Components | Engines, propellers, shafting |
| 7 | Systems for Machinery | Fuel, lube, cooling, compressed air |
| 8 | Ship Common Systems | Fresh water, electrical, fire-fighting |
| 9 | Unassigned | For equipment not covered elsewhere |

### Code Structure

```
Main Group (1 digit)   → Major function (e.g., 6 = Machinery Main Components)
Group (2 digits)       → System (e.g., 60 = Diesel engines for propulsion)
Sub-group (3 digits)   → Component type (e.g., 601 = Diesel engines)
Detail Code (6 digits) → Specific item (e.g., 601.001 = Main Diesel Engine No.1)
```

### Common Examples

| SFI Code | Equipment |
|----------|-----------|
| 601.001 | Main Diesel Engine No.1 |
| 611.001 | Auxiliary Engine No.1 |
| 616.001 | Turbocharger (Main Engine) |
| 631.001 | Main Propeller |
| 632.001 | Bow Thruster |
| 641.001 | Propeller Shaft |
| 701.001 | Fuel Oil Purifier No.1 |
| 721.001 | Seawater Cooling Pump No.1 |
| 722.001 | Fresh Water Cooling Pump No.1 |
| 731.001 | Main Air Compressor No.1 |
| 735.001 | Stern Tube Forward Seal |
| 851.001 | Main Switchboard |

---

## Hierarchy Depth Decision Guide

### When to Code to Detail Level (6 digits)

- Safety-critical equipment (steering gear, fire pumps, emergency generator)
- Main propulsion machinery (main engines, turbochargers, propeller shaft)
- Equipment with individual PM schedules
- Class survey items tracked separately
- High-value equipment with dedicated spare parts

### When Sub-group Level (3 digits) Is Sufficient

- Non-critical support equipment
- Equipment maintained as part of a system (not individually)
- Low-cost items that are run-to-failure
- Equipment without dedicated spare parts inventory

### Mixed-Depth Strategy

Most implementations benefit from mixed depth:

| Equipment Category | Recommended Depth | Rationale |
|--------------------|-------------------|-----------|
| Main engines | 6-digit with component level | High value, complex PM, class survey |
| Auxiliary engines | 6-digit | Individual PM schedules, class survey |
| Steering gear | 6-digit | Safety-critical, ISM requirement |
| Fire pumps | 6-digit | Safety-critical, SOLAS requirement |
| Cargo pumps | 6-digit | Operational critical, individual PM |
| Mooring winches | 6-digit | Individual PM, class survey |
| Bilge pumps | 6-digit | Safety requirement |
| HVAC units (accommodation) | 3-digit | Non-critical, group maintenance |
| Lighting circuits | 3-digit | Maintained as system |
| Deck fittings | 3-digit | Low maintenance intensity |

---

## Common Naming Convention Patterns

### Structure

```
[Equipment Type] [System Qualifier] [Sequential Number]
```

### Examples

| Current (Inconsistent) | Standardised |
|------------------------|--------------|
| SW Cooling Pump | Seawater Cooling Pump No.1 |
| SW CLG P/P 1 | Seawater Cooling Pump No.1 |
| SW Pump (Port) | Seawater Cooling Pump No.1 |
| ME LO Purifier | Lubricating Oil Purifier (Main Engine) No.1 |
| Purifier #2 | Lubricating Oil Purifier (Main Engine) No.2 |
| FO Trans Pump | Fuel Oil Transfer Pump No.1 |
| Aux Gen 1 | Auxiliary Generator No.1 |
| D/G No.1 | Auxiliary Generator No.1 |
| Genset A | Auxiliary Generator No.1 |

### Rules

1. Use full equipment names, not abbreviations
2. Include system qualifier where needed to distinguish (e.g., "Seawater" vs "Fresh Water")
3. Use sequential numbers consistently across the fleet
4. Match SFI functional classification in the name
5. Keep names concise but unambiguous

---

## Measuring Success

Track these indicators to confirm your implementation is delivering value.

### Data Quality Metrics

| Metric | Target | How to Measure |
|--------|--------|----------------|
| SFI coding completeness | 100% of active equipment | Count of equipment with valid SFI code / total equipment |
| Naming convention compliance | 95%+ | Sample audit of equipment names against standard |
| Work order linkage | 100% | Work orders correctly linked to SFI-coded assets |
| Duplicate records | 0 | Periodic duplicate detection queries |
| Orphaned records | 0 | Equipment with no parent / work orders with no equipment |

### Operational Efficiency

| Metric | Baseline | Post-Implementation Target |
|--------|----------|---------------------------|
| Time to locate spare parts | Measure current | 50% reduction |
| Time to generate work orders for similar equipment | Measure current | 70% reduction |
| Class survey preparation time | Measure current | 40% reduction |
| New vessel setup time | Measure current | 60% reduction (using templates) |

### Fleet Analysis Capability

After implementation, you should be able to answer:

- [ ] Which SFI sub-groups account for highest maintenance costs?
- [ ] What are the failure rates for the same equipment type across vessels?
- [ ] Which vessels have overdue maintenance on safety-critical equipment?
- [ ] What spare parts are common across the fleet?
- [ ] How do maintenance costs compare between sister vessels?

---

## Platform-Specific Notes

### AMOS (SpecTec / Kongsberg)

- Native SFI support (SpecTec owns both SFI and AMOS)
- Technical account structure based on SFI Group System
- Spare part numbering: SFI detail code + consecutive numbers (9-10 digits)
- Shore-to-ship sync requires consistent hierarchy in both environments
- Template library should align with SFI codes for work order rollup

### IBM Maximo

- No native SFI support, but flexible data model accommodates it
- Build asset templates mirroring SFI sub-groups
- Use classification/specification framework for SFI taxonomy
- Map SFI hierarchy to functional locations (FLOCs)
- Data loading via MXLoader or integration framework (validate staging data first)

### DNV ShipManager

- Native integration with DNV class requirements
- Configure SFI mapping to match platform's hierarchy structure
- Survey tracking built in

### Other Platforms (Bass, Danaos, SERTICA, MESPAS)

- Understand platform's native hierarchy structure
- Configure equipment templates before loading data
- Define failure codes, spare parts linkage, and maintenance tasks in advance
- Test with single vessel before fleet rollout

---

## Project Timeline Template

| Phase | Duration | Key Deliverables |
|-------|----------|------------------|
| Pre-Implementation | 2-4 weeks | Licence, team, hierarchy depth decision, pilot vessel selection |
| Data Audit | 4-6 weeks | Master equipment list, inconsistency catalogue, migration decisions |
| SFI Mapping | 4-8 weeks | All equipment mapped, naming standardised, hierarchy documented |
| Staging & Validation | 2-4 weeks | Validated data ready for loading, sign-off from engineering |
| CMMS Configuration | 2-4 weeks | Templates, failure codes, maintenance tasks configured |
| Data Loading | 1-2 weeks | Pilot vessel loaded and verified |
| Training & Rollout | 2-4 weeks | Training delivered, pilot running, lessons captured |
| Fleet Expansion | Ongoing | Progressive rollout to remaining vessels |

**Total for pilot vessel:** 17-32 weeks depending on fleet size and data complexity.

---

*Need help with SFI data staging and validation? AssetStage provides a dedicated staging environment for maritime teams implementing SFI coding. Standardise naming, validate codes, check hierarchy relationships, and get engineering sign-off before loading into AMOS, Maximo, or any other platform. Contact us at sales@assetstage.io*

---

© 2026 AssetStage. This checklist may be freely distributed with attribution.
