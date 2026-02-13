---
title: "Maritime CMMS Setup Guide"
subtitle: "Implementing CMMS for Vessels, Fleets, and Maritime Operations"
author: "AssetStage"
---

# Maritime CMMS Setup Guide
## Implementing CMMS for Vessels, Fleets, and Maritime Operations

---

## Why Maritime CMMS Is Different

Maintaining ships isn't like maintaining factories. Your challenges are unique:

| Factory CMMS | Maritime CMMS |
|--------------|---------------|
| Fixed location | Asset moves globally |
| Consistent connectivity | Intermittent satellite/port connectivity |
| Local spare parts | Parts shipped to next port |
| Single jurisdiction | Multiple flag states, port states, class societies |
| Day shift maintenance | 24/7 crew, rotating every 3-9 months |
| Planned outages | Maintenance while underway |

This guide covers maritime-specific CMMS setup including SFI classification, regulatory compliance, and fleet-wide standardization.

---

## Part 1: The SFI Group System

### What Is SFI?

The SFI Group System is the international standard for classifying ship components. Developed in Norway in 1972, it's used by:

- 90%+ of commercial shipping
- All major class societies
- Most maritime CMMS platforms (AMOS, NS5, ShipManager, etc.)
- Shipyards, suppliers, and repair facilities worldwide

SFI provides a universal language for maritime maintenance.

### SFI Structure

SFI codes are hierarchical:

```
Main Group (1 digit)  → Major function
Group (2 digits)      → System
Subgroup (3 digits)   → Component type
Detail Code (6 digits)→ Specific item
Full Code (9-10 digits)→ With sequence number
```

**Example:**
```
6        → Machinery Main Components
61       → Diesel Engines, Main
611      → Engine Block
611.001  → Engine Block, Unit 1
611.001.01 → Specific part of engine block
```

### Complete SFI Main Group Reference

| Group | Name | Description |
|-------|------|-------------|
| **0** | **Ship General** | Administrative functions |
| 01 | Certificates, Class | Class certificates, ISM, ISPS |
| 02 | Documentation | Drawings, manuals |
| 03 | Ship Particulars | Principal dimensions, capacity |
| 04 | Ship Contracts | Charter parties, agreements |
| **1** | **Hull** | |
| 10 | Hull General | Shell plating, framing |
| 11 | Frame & Hull | Frames, longitudinals |
| 12 | Fore Hull | Bow, bulbous bow |
| 13 | Aft Hull | Stern, transom |
| 14 | Upper Deck | Main deck structure |
| 15 | Hull Outfit | Rails, ladders, doors |
| **2** | **Cargo Equipment** | |
| 20 | Cargo Equipment General | |
| 21 | Cargo Holds | Hatch covers, tank tops |
| 22 | Cargo Handling | Cranes, derricks |
| 23 | Cargo Tank Systems | Cargo pumps, piping (tankers) |
| 24 | Ro-Ro Equipment | Ramps, car decks |
| 25 | Container Systems | Cell guides, lashing |
| **3** | **Ship Equipment** | |
| 30 | Ship Equipment General | |
| 31 | Mooring | Windlass, winches, lines |
| 32 | Anchoring | Anchor, chain, hawse pipe |
| 33 | Deck Machinery | Capstans, cranes |
| 34 | Navigation Equipment | Radar, GPS, AIS |
| 35 | Safety Equipment | Lifeboats, life rafts |
| 36 | Fire Fighting | Fixed systems, portable |
| **4** | **Ship Accommodation** | |
| 40 | Accommodation General | |
| 41 | Bridge | Wheelhouse structure |
| 42 | Crew Accommodation | Cabins, mess |
| 43 | Passenger Accommodation | (Cruise/ferry) |
| 44 | Sanitary Systems | Toilets, showers |
| 45 | Galley | Kitchen equipment |
| 46 | HVAC | Air conditioning, ventilation |
| **5** | **Equipment for Crew** | |
| 50 | Crew Equipment General | |
| 51 | Communication | Radios, satellite |
| 52 | Office Equipment | |
| 53 | Entertainment | (Cruise ships) |
| 54 | Workshop Equipment | Lathe, welding |
| **6** | **Machinery Main Components** | |
| 60 | Diesel Engines, Propulsion | Main engines |
| 61 | Diesel Engines, Auxiliary | Generators |
| 62 | Turbines | Steam/gas turbines |
| 63 | Propeller/Thrusters | Props, bow thrusters |
| 64 | Shafting | Shaft, bearings, seals |
| 65 | Gearboxes | Reduction gears |
| **7** | **Systems for Machinery** | |
| 70 | Fuel Oil Systems | Storage, transfer, purifiers |
| 71 | Lubricating Oil | Main engine, aux |
| 72 | Cooling Water | Sea water, fresh water |
| 73 | Compressed Air | Start air, control air |
| 74 | Steam Systems | Boilers, steam distribution |
| 75 | Exhaust Systems | Uptakes, silencers |
| 76 | Bilge/Ballast | Pumps, piping |
| **8** | **Ship Common Systems** | |
| 80 | Common Systems General | |
| 81 | Fresh Water | Potable, distilling |
| 82 | Sewage/Gray Water | Treatment, discharge |
| 83 | Fire Fighting (Machinery) | CO2, foam systems |
| 84 | Control/Monitoring | Automation, alarms |
| 85 | Electrical Power | Generators, switchboards |
| 86 | Lighting | Navigation, interior |
| 87 | HVAC (Machinery Spaces) | ER ventilation |

### SFI Code Examples

| Code | Description |
|------|-------------|
| 601 | Main Diesel Engine |
| 601.001 | Main Engine No. 1 |
| 601.002 | Main Engine No. 2 |
| 611 | Engine Block |
| 612 | Crankshaft & Main Bearings |
| 613 | Connecting Rods & Pistons |
| 614 | Cylinder Heads & Valves |
| 615 | Camshaft & Valve Train |
| 616 | Turbocharger |
| 617 | Fuel Injection System |
| 618 | Exhaust System |
| 641 | Cooling Water Pumps |
| 641.001 | SW Cooling Pump No. 1 |
| 641.002 | SW Cooling Pump No. 2 |
| 721 | Sea Water Cooling System |
| 722 | Fresh Water Cooling System |
| 731 | Main Air Compressor |
| 735 | Stern Tube & Shaft Seals |
| 735.001 | Stern Tube Forward Seal |
| 735.007 | Stern Tube Aft Seal |
| 851 | Main Switchboard |
| 852 | Emergency Switchboard |
| 853 | Shore Connection |

---

## Part 2: Vessel Hierarchy Setup

### Recommended Hierarchy Structure

```
Fleet
└── Vessel Type/Class
    └── Individual Vessel
        └── SFI Main Group (0-8)
            └── SFI Group (2-digit)
                └── SFI Subgroup (3-digit)
                    └── Equipment Item (with sequence)
                        └── Component (if tracked)
```

### Example: Container Vessel Hierarchy

```
ABC Shipping Fleet
└── Container Vessels
    └── MV Pacific Star (IMO 9876543)
        ├── 0 - Ship General
        │   ├── 01 - Certificates & Class
        │   └── 02 - Documentation
        ├── 1 - Hull
        │   ├── 10 - Hull General
        │   ├── 14 - Upper Deck
        │   └── 15 - Hull Outfit
        ├── 2 - Cargo Equipment
        │   ├── 21 - Cargo Holds
        │   │   ├── 21.001 - Hatch Cover No. 1
        │   │   ├── 21.002 - Hatch Cover No. 2
        │   │   └── ...
        │   └── 25 - Container Systems
        ├── 3 - Ship Equipment
        │   ├── 31 - Mooring
        │   │   ├── 311.001 - Fwd Mooring Winch PS
        │   │   ├── 311.002 - Fwd Mooring Winch SB
        │   │   └── ...
        │   ├── 32 - Anchoring
        │   │   ├── 321.001 - Windlass
        │   │   └── 322.001 - Anchor PS
        │   ├── 34 - Navigation
        │   │   ├── 341.001 - Radar X-Band
        │   │   ├── 341.002 - Radar S-Band
        │   │   └── ...
        │   └── 35 - Safety Equipment
        │       ├── 351.001 - Lifeboat PS
        │       ├── 351.002 - Lifeboat SB
        │       └── ...
        ├── 6 - Machinery Main Components
        │   ├── 60 - Main Engines
        │   │   ├── 601.001 - Main Engine
        │   │   │   ├── 611.001 - Engine Block
        │   │   │   ├── 612.001 - Crankshaft
        │   │   │   ├── 613.001 - Piston & Rod Cyl 1
        │   │   │   ├── 616.001 - Turbocharger
        │   │   │   └── ...
        │   ├── 61 - Auxiliary Engines
        │   │   ├── 611.001 - Aux Engine No. 1
        │   │   ├── 611.002 - Aux Engine No. 2
        │   │   └── 611.003 - Aux Engine No. 3
        │   ├── 63 - Propulsion
        │   │   ├── 631.001 - Main Propeller
        │   │   └── 632.001 - Bow Thruster
        │   └── 64 - Shafting
        │       ├── 641.001 - Propeller Shaft
        │       └── 642.001 - Intermediate Shaft
        └── 7 - Systems for Machinery
            ├── 70 - Fuel Oil
            │   ├── 701.001 - FO Purifier No. 1
            │   └── 702.001 - FO Transfer Pump
            ├── 72 - Cooling Water
            │   ├── 721.001 - SW Cooling Pump No. 1
            │   ├── 721.002 - SW Cooling Pump No. 2
            │   └── 722.001 - FW Cooling Pump
            └── 73 - Compressed Air
                ├── 731.001 - Main Air Compressor No. 1
                └── 731.002 - Main Air Compressor No. 2
```

### Vessel Identification Fields

Every vessel in your CMMS should have:

| Field | Example | Notes |
|-------|---------|-------|
| Vessel Name | MV Pacific Star | Official registered name |
| IMO Number | 9876543 | Unique, never changes |
| Call Sign | ABCD | Radio call sign |
| MMSI | 123456789 | Maritime Mobile Service Identity |
| Flag State | Panama | Registration country |
| Classification Society | DNV | Or Lloyd's, ABS, BV, etc. |
| Vessel Type | Container | Per class society definition |
| Gross Tonnage | 45,000 | From tonnage certificate |
| Deadweight | 52,000 | DWT |
| Year Built | 2015 | Keel laid or delivery |
| Shipyard | Hyundai Heavy | Builder |
| Hull Number | 2456 | Yard hull number |

---

## Part 3: Regulatory Compliance

### ISM Code Requirements

The International Safety Management (ISM) Code mandates documented maintenance systems.

**ISM Code Section 10: Maintenance of Ship and Equipment**

Your CMMS must support:

| Requirement | CMMS Implementation |
|-------------|---------------------|
| 10.1 - Procedures for maintenance | PM schedules, job plans |
| 10.2 - Inspections at appropriate intervals | Inspection task types |
| 10.3 - Reporting of non-conformities | Work orders, notifications |
| 10.4 - Corrective action | Work order completion tracking |
| 10.5 - Records of maintenance | Complete work history |

**Document Control:**

- [ ] Maintenance procedures accessible on board
- [ ] Revision control for procedures
- [ ] Crew trained on procedures
- [ ] Master and officers can access records

### Class Society Requirements

**Continuous Survey Machinery (CSM):**
Track survey items with due dates:

| Equipment | Survey Interval | Last Survey | Next Due |
|-----------|-----------------|-------------|----------|
| Main Engine | Annual | 2024-03-15 | 2025-03-15 |
| Aux Engines | Annual | 2024-03-15 | 2025-03-15 |
| Boiler | Annual + 5-yr hydraulic | 2024-03-15 | 2025-03-15 |
| Steering Gear | Annual | 2024-03-15 | 2025-03-15 |
| Emergency Generator | Annual | 2024-03-15 | 2025-03-15 |
| Anchor Windlass | 5-year | 2022-03-15 | 2027-03-15 |

**Hull Survey Cycles:**

| Survey | Interval | Window |
|--------|----------|--------|
| Annual Survey | 12 months | ± 3 months |
| Intermediate Survey | 2.5 years | Between 2nd-3rd annual |
| Special Survey (Dry Dock) | 5 years | ± 3 months |
| Bottom Survey | 2.5 years | Can coincide with intermediate |

Configure CMMS to:

- [ ] Track survey due dates per equipment
- [ ] Generate reminders 3 months before due
- [ ] Record survey findings
- [ ] Track condition of class items

### SOLAS Equipment

Safety of Life at Sea (SOLAS) equipment requires specific maintenance:

| Equipment | Inspection Interval | Maintenance Interval |
|-----------|--------------------|--------------------|
| Lifeboats | Weekly + Monthly | Annual service |
| Liferafts | Monthly | Annual service + 5-yr replacement |
| EPIRB | Monthly | Battery replacement per MFR |
| SART | Monthly | Battery per MFR |
| Fire Extinguishers | Monthly | Annual + 5-yr hydrotest |
| Fixed Fire Fighting | Weekly | Annual service |
| Breathing Apparatus | Monthly | Annual certification |
| Immersion Suits | Monthly visual | Annual inspection |

### Port State Control Preparation

Create checklist job plans for PSC readiness:

**Machinery Items:**

- [ ] Main engine operational and records current
- [ ] Generators operational with proper load sharing
- [ ] Steering gear operational with emergency
- [ ] Bilge pumps operational and tested
- [ ] Fire pumps operational
- [ ] Emergency generator starts and loads

**Safety Items:**

- [ ] All LSA inspection current
- [ ] Fire-fighting equipment serviced
- [ ] Emergency lighting functional
- [ ] Watertight doors operational
- [ ] Muster lists posted and current

---

## Part 4: Running Hours & Counter-Based Maintenance

### Critical Running Hour Meters

| Equipment | Meter Type | Unit | Update Frequency |
|-----------|------------|------|------------------|
| Main Engine | Running Hours | Hours | Daily |
| Auxiliary Engine 1 | Running Hours | Hours | Daily |
| Auxiliary Engine 2 | Running Hours | Hours | Daily |
| Auxiliary Engine 3 | Running Hours | Hours | Daily |
| Bow Thruster | Running Hours | Hours | Per use |
| Emergency Generator | Running Hours | Hours | Per test/use |
| Incinerator | Running Hours | Hours | Per use |
| FO Purifier 1 | Running Hours | Hours | Daily |
| FO Purifier 2 | Running Hours | Hours | Daily |
| Main Air Compressor 1 | Running Hours | Hours | Daily or weekly |
| Main Air Compressor 2 | Running Hours | Hours | Daily or weekly |

### Counter-Based PM Examples

| Equipment | PM Task | Trigger | Tolerance |
|-----------|---------|---------|-----------|
| Main Engine | Cylinder Inspection | 8,000 hours | ± 500 hours |
| Main Engine | Turbocharger Overhaul | 12,000 hours | ± 1,000 hours |
| Main Engine | Piston Overhaul | 16,000 hours | ± 1,000 hours |
| Main Engine | Major Overhaul | 48,000 hours | Per condition |
| Aux Engine | Top End Overhaul | 8,000 hours | ± 500 hours |
| Aux Engine | Complete Overhaul | 24,000 hours | ± 2,000 hours |
| Air Compressor | Valve Inspection | 4,000 hours | ± 250 hours |
| Air Compressor | Complete Overhaul | 16,000 hours | ± 1,000 hours |

### Voyage-Based Tracking

Some maintenance triggers on voyages/port calls:

| Task | Trigger | Example |
|------|---------|---------|
| Hull cleaning | Port call at facility | Every 18 months max |
| Propeller polish | Dry dock or diving | Every 30 months max |
| Anchoring gear test | Every voyage | Or weekly if not anchoring |
| Lifeboat launch | Monthly + port | Must be from water |

---

## Part 5: Spare Parts Management

### Critical Spares List

Every vessel should have:

**Main Engine Spares:**

| Item | Min Qty | Location | Lead Time |
|------|---------|----------|-----------|
| Cylinder liner | 1 | On board | 12 weeks |
| Piston | 1 complete | On board | 12 weeks |
| Piston rings (1 cyl set) | 2 | On board | 6 weeks |
| Connecting rod bearing | 2 | On board | 6 weeks |
| Main bearing (crankpin) | 1 | On board | 8 weeks |
| Fuel injector | 2 | On board | 4 weeks |
| Fuel pump | 1 | On board | 6 weeks |
| Turbocharger cartridge | 1 | On board | 16 weeks |
| Cylinder head | 1 | Shore (class req) | 12 weeks |

**Aux Engine Spares:**

| Item | Min Qty | Location | Lead Time |
|------|---------|----------|-----------|
| Cylinder head | 1 | On board | 6 weeks |
| Injector | 2 | On board | 2 weeks |
| Governor actuator | 1 | On board | 4 weeks |
| Turbocharger cartridge | 1 | On board | 8 weeks |

**Pumps & Rotating Equipment:**

| Item | Min Qty | Location | Lead Time |
|------|---------|----------|-----------|
| Mechanical seal (per pump type) | 2 | On board | 2-4 weeks |
| Impeller wear rings | 1 set | On board | 4 weeks |
| Coupling element | 2 | On board | 2 weeks |
| Bearing kit | 2 | On board | 2 weeks |

### Global Logistics Considerations

Configure your CMMS for:

- **Multi-port delivery:** Specify delivery port when ordering
- **Agent network:** Store agent contacts per port
- **Lead time by region:** Adjust reorder points by vessel location
- **Emergency suppliers:** Pre-qualify suppliers in key ports
- **Courier options:** TNT, DHL, ship's agent

---

## Part 6: Fleet Standardization

### Sister Vessel Templates

When you have sister vessels (same design):

1. **Create master template vessel**
   - Complete SFI hierarchy
   - All equipment with specs
   - All PM schedules
   - All job plans

2. **Copy to each sister vessel**
   - Adjust serial numbers
   - Adjust running hours
   - Adjust survey dates

3. **Maintain consistency**
   - PM changes apply to all sisters
   - Job plan updates apply fleet-wide
   - Spare parts common catalog

### Equipment Standardization Across Fleet

| Equipment Type | Standard Make/Model | Vessels Using | Notes |
|----------------|---------------------|---------------|-------|
| Main Engine | MAN B&W 6S60ME-C | 8 | Tier III |
| Aux Engine | Wärtsilä 6L20 | 12 | |
| LO Purifier | Alfa Laval MOPX | 15 | |
| FO Purifier | Alfa Laval MOPX | 15 | |
| SW Pumps | Sulzer SNZ | 20 | |
| FW Generator | Alfa Laval D-Type | 8 | |

Benefits of standardization:

- Common spare parts pool
- Consistent training
- Comparable performance data
- Bulk purchasing power

### Failure Code Standardization

Use ISO 14224 failure modes across the fleet (see ISO 14224 guide):

| Failure Mode | Code | Use For |
|--------------|------|---------|
| External leak | ELP | Seal, gasket, flange leaks |
| Low output | LOO | Reduced flow, pressure, power |
| Fail to start | FTS | Won't start on demand |
| Vibration | VIB | Abnormal vibration |
| Overheating | OHE | High temperature |
| Spurious stop | UST | Unexpected shutdown |

---

## Part 7: Crew Change & Handover

### CMMS Handover Checklist

Before crew change:

**Outgoing Chief Engineer:**

- [ ] Update all running hours
- [ ] Close completed work orders
- [ ] Document ongoing work (status, parts needed)
- [ ] List priority items for incoming CE
- [ ] Update deficiency log
- [ ] Ensure spare parts inventory accurate

**Incoming Chief Engineer:**

- [ ] Review open work orders
- [ ] Review overdue PMs
- [ ] Review deficiency log
- [ ] Review upcoming survey items
- [ ] Verify critical spares on board
- [ ] Familiarize with vessel-specific equipment

### Knowledge Transfer Features

Your CMMS should support:

- **Work order comments:** Detailed notes on what was done
- **Equipment notes:** Vessel-specific quirks and tips
- **Photo attachments:** Before/after, installation details
- **Document links:** Manuals, drawings, procedures
- **Deficiency tracking:** Outstanding items with history

---

## Part 8: CMMS Platform Comparison

### Major Maritime CMMS Platforms

| Platform | Vendor | Vessels | Strengths | Considerations |
|----------|--------|---------|-----------|----------------|
| AMOS | SpecTec | 20,000+ | Most comprehensive, class approved | Complex, expensive |
| NS5 | ABS Nautical | 4,000+ | ABS integration, US support | Less global |
| ShipManager | DNV | 15,000+ | DNV integration, analytics | DNV ecosystem |
| SERTICA | Logimatic | 1,200+ | Modern, user-friendly | Smaller market share |
| MESPAS | MESPAS | Growing | Cloud-native, affordable | Newer platform |
| Maximo | IBM | Varies | Enterprise integration | Not maritime-specific |
| SAP PM | SAP | Varies | ERP integration | Not maritime-specific |

### Minimum Requirements Checklist

- [ ] SFI hierarchy support
- [ ] Running hour tracking
- [ ] Counter-based PM scheduling
- [ ] Class society survey tracking
- [ ] ISM Code compliance features
- [ ] Offline capability (vessels at sea)
- [ ] Data sync (ship-shore)
- [ ] Multi-vessel management
- [ ] Spare parts with global logistics
- [ ] Document management
- [ ] Mobile/tablet interface
- [ ] Reporting and KPIs

---

## Part 9: Implementation Checklist

### Phase 1: Setup (Weeks 1-4)

**Week 1: Fleet Structure**

- [ ] Define fleet organization in CMMS
- [ ] Create vessel types/classes
- [ ] Enter vessel master data (IMO, flag, etc.)
- [ ] Configure user roles (Supt, CE, 2E, ETO)

**Week 2: SFI Hierarchy**

- [ ] Load SFI code master
- [ ] Build hierarchy for first vessel
- [ ] Add equipment specifications
- [ ] Link spare parts

**Week 3: PM Setup**

- [ ] Define PM schedules (time-based)
- [ ] Define PM schedules (counter-based)
- [ ] Create job plans with tasks
- [ ] Link job plans to equipment

**Week 4: Survey & Compliance**

- [ ] Set up class survey tracking
- [ ] Enter next survey due dates
- [ ] Create SOLAS equipment checklist
- [ ] Set up PSC readiness checklist

### Phase 2: Data Migration (Weeks 5-8)

- [ ] Export data from legacy system
- [ ] Transform to CMMS format
- [ ] Load equipment data
- [ ] Load historical work orders (if migrating)
- [ ] Load spare parts catalog
- [ ] Validate data accuracy

### Phase 3: Testing (Weeks 9-10)

- [ ] Test PM generation
- [ ] Test work order workflow
- [ ] Test spare parts requisition
- [ ] Test running hour updates
- [ ] Test ship-shore sync
- [ ] User acceptance testing

### Phase 4: Rollout (Weeks 11-12)

- [ ] Train superintendents
- [ ] Train Chief Engineers
- [ ] Roll out to pilot vessel
- [ ] Monitor and adjust
- [ ] Roll out to fleet

---

## Quick Reference: SFI Main Groups

| 0 | Ship General | Certificates, docs |
|---|--------------|-------------------|
| 1 | Hull | Structure, outfit |
| 2 | Cargo Equipment | Holds, handling, tanks |
| 3 | Ship Equipment | Mooring, nav, safety |
| 4 | Accommodation | Living spaces, galley |
| 5 | Crew Equipment | Comms, workshop |
| 6 | Machinery Main | Engines, props, shafts |
| 7 | Machinery Systems | Fuel, lube, cooling, air |
| 8 | Common Systems | Water, fire, electrical |

---

*Need help implementing maritime CMMS or standardizing your fleet data? AssetStage provides SFI hierarchy templates, data staging, and clean import to any CMMS platform. Contact us at sales@assetstage.io*

---

© 2026 AssetStage. This guide may be freely distributed with attribution.
