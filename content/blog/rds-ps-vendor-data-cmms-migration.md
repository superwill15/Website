---
title: "Your Vendor Data Doesn't Match RDS-PS (And It's About to Become Your Problem)"
date: "2026-01-09"
description: "RDS-PS and ISO 14224 solve different problems but work together. Learn why your EPC vendor data never arrives RDS-compliant and how to fix it before CMMS go-live."
---

If you're implementing a CMMS for a power plant, wind farm, solar installation, or process facility, you've probably encountered RDS-PP (or its successor, RDS-PS) and ISO 14224 in the same conversation.

They're often mentioned together. They're both "standards." They both relate to asset data. And most project teams assume their EPC contractor is handling compliance with both.

They're usually wrong.

Here's what actually happens: Your vendor delivers equipment lists, tag registers, and maintenance documentation that technically references RDS-PP codes. But when you try to load it into Maximo, SAP PM, or any other CMMS, nothing lines up. The hierarchy is wrong. The tag structure is inconsistent. And your ISO 14224-compliant maintenance strategy has no clean way to attach to assets that aren't properly classified.

This isn't a vendor failure. It's a standards gap that nobody explained to you.

## RDS-PS and ISO 14224: Same Project, Different Jobs

The confusion starts because both standards deal with "asset classification" but solve completely different problems.

### RDS-PS (Reference Designation System for Power Systems)

RDS-PS—the evolution of RDS-PP, aligned with IEC 81346—is a designation system. It tells you what something is called and where it sits in the functional hierarchy.

It answers questions like:

- What's the standardised tag for this feedwater pump, wind turbine gearbox, or solar inverter?
- Where does this motor sit in the plant structure?
- How do I ensure consistent naming across 47 vendors delivering equipment to the same project—whether that's a combined cycle plant, a 200-turbine wind farm, or a utility-scale solar array?

RDS-PS gives you a **taxonomy**: a structured way to name and organise equipment so that everyone—engineering, operations, maintenance—uses the same language.

### ISO 14224 (Reliability and Maintenance Data)

ISO 14224 is a data collection standard. It tells you what information to capture about equipment and how to record failure and maintenance events.

It answers questions like:

- What attributes should I record for this pump?
- How do I categorise this failure mode?
- What maintenance data do I need for reliability analysis?

ISO 14224 gives you a **data model**: a structured way to capture equipment characteristics and maintenance history so it's consistent, auditable, and usable for reliability engineering.

## Where They Overlap (And Where They Don't)

Both standards want consistent asset classification. But:

<table>
<thead>
<tr><th>Aspect</th><th>RDS-PS</th><th>ISO 14224</th></tr>
</thead>
<tbody>
<tr><td>Primary purpose</td><td>Naming/designation</td><td>Data collection</td></tr>
<tr><td>Hierarchy focus</td><td>Functional location</td><td>Equipment taxonomy</td></tr>
<tr><td>Maintenance strategy</td><td>Not addressed</td><td>Core requirement</td></tr>
<tr><td>Failure recording</td><td>Not addressed</td><td>Core requirement</td></tr>
<tr><td>Vendor deliverables</td><td>Common requirement</td><td>Rarely specified</td></tr>
</tbody>
</table>

**The overlap:** Both need you to know "what type of equipment is this?" and "where does it belong?"

**The gap:** RDS-PS doesn't care about your maintenance strategy. ISO 14224 doesn't care about your tag naming convention.

Your CMMS needs both. And your vendor data usually provides neither correctly.

## Why Vendor Data Never Arrives RDS-Compliant

Every project team expects vendor equipment lists to arrive cleanly structured with proper RDS-PS designations. Every project team is disappointed.

Here's the pattern:

### 1. Specification Says "RDS-PP Compliant"

Your engineering contractor wrote "equipment tagging per RDS-PP" into the vendor specifications. You assumed this meant you'd receive consistent, hierarchical asset data ready for CMMS loading.

### 2. Vendors Interpret Differently

Vendor A uses RDS-PP aspect codes correctly but invents their own location structure. Vendor B uses the right location codes but wrong function designations. Vendor C delivers Excel spreadsheets with no RDS codes at all—just their internal part numbers with a column that says "RDS Tag" containing values they made up.

Renewables projects face additional complexity: your turbine OEM uses one tagging system, your inverter supplier uses another, your tracker vendor delivers data in yet another format, and your balance of plant contractor has their own conventions. By the time commissioning finishes, you've got equipment data in five different structures—none of which match your CMMS hierarchy.

### 3. Nobody Validates During Delivery

Equipment arrives. Documentation arrives. Someone files it. Nobody systematically checks whether the tag register actually follows RDS-PS structure until...

### 4. CMMS Implementation Reveals the Chaos

You try to build your asset hierarchy. The data doesn't fit. Tags don't follow the standard. Parent-child relationships are inconsistent. Equipment that should be identical has different designations. Your carefully planned hierarchy template doesn't match what the vendors delivered.

Now you're 3 months from go-live with a data cleanup project nobody budgeted for.

## The Real Problem: No Bridge Between Design and Maintenance

Here's what the standards bodies don't tell you: RDS-PS and ISO 14224 were designed by different communities for different purposes.

**RDS-PS** came from electrical engineering and power systems design. It's about designation—ensuring everyone uses the same naming convention during design and construction.

**ISO 14224** came from reliability engineering and oil & gas operations. It's about data quality—ensuring maintenance and failure information is consistent and analysable.

Your CMMS sits in the middle. It needs:

- Functional hierarchy (RDS-PS territory)
- Equipment taxonomy (overlap zone)
- Maintenance strategy attachment (ISO 14224 territory)
- Consistent tag naming (RDS-PS territory)
- Reliability data structure (ISO 14224 territory)

Neither standard fully delivers what the CMMS needs. And vendor data rarely delivers either standard correctly.

## What Your CMMS Actually Requires

Let's be specific about what "CMMS-ready" asset data looks like:

**From RDS-PS:**

- Consistent functional location hierarchy (=A=B=C structure)
- Standardised product designations (-M, -P, -Q codes)
- Parent-child relationships that match physical reality
- Tag format that your operations team can actually use

**From ISO 14224:**

- Equipment class and type attributes
- Manufacturer, model, serial number structure
- Criticality classification
- Maintenance-relevant characteristics (materials, design specs)

**Beyond Both Standards:**

- Preventive maintenance assignments
- Work order templates linked to equipment
- Spare parts relationships
- Document and drawing links

Vendors deliver pieces of this. Your job is assembling the puzzle—except nobody gave you the picture on the box.

## A Practical Framework: RDS-PS to CMMS Migration

Here's how to actually get from vendor chaos to CMMS-ready data:

### Phase 1: Establish Your Target Hierarchy

Before touching vendor data, define what your CMMS hierarchy should look like:

1. **Map RDS-PS to your CMMS structure** - How do RDS-PS aspects (=, -, +) translate to your locations, assets, and sub-assets?
2. **Define your equipment taxonomy** - What ISO 14224 equipment classes will you use? How do they map to RDS-PS product codes?
3. **Create the template** - Build a sample hierarchy for one system (e.g., feedwater system, wind turbine string, or solar array block) showing exactly how data should be structured.
4. **Document the rules** - What's mandatory? What are valid values? What parent-child relationships are allowed?

### Phase 2: Assess Vendor Data Quality

Now look at what you actually received:

1. **Inventory all vendor deliverables** - Equipment lists, tag registers, datasheets, maintenance manuals
2. **Map to your template** - For each vendor package, how does their data structure compare to your target?
3. **Identify the gaps** - Missing RDS codes? Inconsistent hierarchy? Wrong classification? No maintenance data?
4. **Quantify the work** - How many assets need remediation? What's the effort per asset class?

### Phase 3: Remediate Systematically

Don't fix data asset-by-asset. Fix it by pattern:

1. **Group by vendor** - Each vendor's data usually has consistent problems. Fix the pattern, not individual records.
2. **Group by equipment class** - All centrifugal pumps should follow the same structure. Define it once, apply to all.
3. **Automate where possible** - Tag format corrections, hierarchy mapping, attribute population from rules.
4. **Validate continuously** - Check each batch against your template before loading more data.

### Phase 4: Bridge to Maintenance Strategy

This is where ISO 14224 meets reality:

1. **Link equipment classes to PM templates** - Your ISO 14224-compliant maintenance strategy should attach to equipment taxonomy, not individual assets.
2. **Inherit, don't duplicate** - When you add a new centrifugal pump to the hierarchy, it should inherit the PM schedule automatically.
3. **Document deviations** - If specific assets need different maintenance (criticality, duty cycle), document why.

## The Hidden Cost Nobody Budgets

Here's a number most project teams never calculate:

**Manual RDS remediation: 15-45 minutes per asset**

That includes:

- Finding the asset in vendor documentation
- Determining correct RDS-PS designation
- Validating parent-child relationships
- Mapping to ISO 14224 equipment class
- Populating CMMS-required attributes
- Linking to maintenance strategy

For a mid-size power plant with 5,000 maintainable assets, that's:

- **Conservative:** 1,250 hours (31 weeks of full-time work)
- **Realistic:** 2,500 hours (62 weeks)
- **Complex brownfield:** 3,750 hours (93 weeks)

Wind and solar portfolios face similar challenges at scale. A 100-turbine wind farm might have 3,000+ maintainable assets across nacelles, towers, foundations, substations, and collection systems. A 200MW solar plant can easily exceed 10,000 assets when you include inverters, trackers, combiner boxes, and balance of plant equipment—often from a dozen different vendors.

This work happens. The question is whether you budget for it or discover it 3 months before go-live.

## What Good Looks Like

When RDS-PS and ISO 14224 are properly implemented together, your CMMS enables:

### Consistent Asset Identification

- Every asset has a standardised tag following RDS-PS conventions
- Operations, maintenance, and engineering use the same terminology
- New equipment follows the same rules automatically

### Structured Equipment Data

- ISO 14224-compliant attributes captured for all equipment
- Manufacturer data, design specifications, materials of construction
- Consistent across vendors and installation phases

### Rational Maintenance Strategy

- PM schedules attached at equipment class level
- Identical equipment gets identical maintenance (ISO 14224 principle)
- Deviations documented and justified

### Auditable Data Quality

- Clear hierarchy from plant to component
- Traceable parent-child relationships
- Validation rules that catch errors before they propagate

### Reliable Analysis Foundation

- Failure data structured per ISO 14224
- Maintenance history actually usable for reliability engineering
- Benchmarking possible across identical equipment populations

## Key Takeaways

1. **RDS-PS and ISO 14224 solve different problems** but your CMMS needs both
2. **Vendor data rarely arrives compliant** with either standard despite specifications
3. **The gap between "RDS-PP compliant" specifications and reality** creates significant remediation work
4. **Manual remediation costs 15-45 minutes per asset**—budget accordingly
5. **Systematic data staging before CMMS loading** prevents months of cleanup later
6. **Equipment taxonomy is the bridge:** get classification right and maintenance strategy follows

---

Ready to bridge the gap between your vendor data and CMMS-ready assets? AssetStage helps you stage, structure, and standardise equipment data before loading—whether you're working with RDS-PS hierarchies, ISO 14224 equipment classes, or the messy reality of what vendors actually deliver. [Request a demo](/demo) to see how your current data measures up.
