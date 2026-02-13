---
title: "How to Implement SFI Coding in Your CMMS: A Practical Guide for Maritime Teams"
date: "2026-02-13"
description: "The step-by-step process for building an SFI-based asset hierarchy in your CMMS, from licence acquisition to fleet-wide rollout."
---

# How to Implement SFI Coding in Your CMMS: A Practical Guide for Maritime Teams

*The step-by-step process for building an SFI-based asset hierarchy in your CMMS, from licence acquisition to fleet-wide rollout*

## Introduction: Why Most SFI Implementations Go Wrong

You have your SFI licence. You know the standard is the right foundation for your fleet's maintenance data. But between the SFI Group System manual and a working CMMS, there's a gap that nobody talks about.

That gap is where most implementations stall. Not because the standard is complicated (the hierarchical logic of SFI is elegant) but because translating a classification standard into a production-ready asset hierarchy requires decisions that the standard itself doesn't make for you. Which level of detail do you code to? How do you handle equipment that doesn't fit neatly into one sub-group? What happens when your existing naming conventions conflict with SFI structure? How do you get data from twenty years of paper-based maintenance into a clean, coded hierarchy without losing the maintenance history that makes that data valuable?

This guide covers the practical implementation work: the decisions you need to make before you touch your CMMS, the staging process that prevents costly rework, and the platform-specific considerations for AMOS, Maximo, and other maritime CMMS platforms.

If you need a primer on what SFI is and how it relates to ISO 14224, start with our [Complete Guide to SFI Coding and ISO 14224](/blog/SFI-ISO14224). This article assumes you're past the "why" and ready for the "how."

## Step 1: Get Your SFI Licence and Know What You're Working With

Before anything else, you'll need to licence the SFI Group System from SpecTec, who own and maintain the standard. The SFI Group System is protected by the Norwegian Copyright Act and corresponding international conventions, so using the codes without a licence, or reproducing the detailed code tables, puts your company at legal risk. Contact SpecTec directly for current licensing terms and documentation formats.

Once licensed, familiarise yourself with what you actually have:

**The structure you're implementing** is a three-digit decimal classification with optional detail codes extending to six digits. The first digit defines the main function (e.g., Group 6 = Machinery Main Components), the second digit specifies the system (e.g., 60 = Diesel engines for propulsion), and the third digit identifies the sub-group (e.g., 601 = Diesel engines). Detail codes extend this to the individual component level.

**What the standard doesn't give you** is equally important. SFI provides the classification framework, but it doesn't define your asset hierarchy depth, your naming conventions, your spare parts numbering system, or your failure coding structure. These are decisions you need to make before implementation, not during it.

## Step 2: Define Your Hierarchy Depth Before You Start

The single most consequential decision in your SFI implementation is how deep to go. Getting this wrong creates either an unmanageable hierarchy that nobody maintains, or a shallow structure that doesn't support meaningful analysis.

**Three-digit (sub-group) level** is the minimum for meaningful maintenance management. At this level, you can track maintenance costs and work orders against specific equipment types. For a vessel with straightforward machinery, this may be sufficient.

**Six-digit (detail code) level** gives you individual component tracking. This is where you can link spare parts, build equipment-specific maintenance plans, and perform reliability analysis. Most operators implementing SFI into a modern CMMS will need to work at this level for critical machinery, even if non-critical equipment stays at three digits.

**The practical approach** is a mixed-depth hierarchy. Critical systems (main engines, generators, steering gear, fire safety equipment) get coded to detail level. Supporting systems and non-critical equipment can sit at the sub-group level. This balances the maintenance value of granular data against the effort required to create and maintain it.

A common mistake is trying to code everything to the maximum detail on day one. Start with the equipment that drives 80% of your maintenance costs and regulatory requirements, then extend coverage over time. Your chief engineers know which equipment that is. Involve them early.

## Step 3: Audit Your Existing Data

Before building anything in your CMMS, you need an honest assessment of what you're starting with. Every fleet has maintenance data. The question is what state it's in.

**Inventory your data sources.** Maintenance records may live in a legacy CMMS, Excel spreadsheets, paper-based logs, OEM manuals, class survey records, or a combination of all of these. Identify every source and assess what's in each.

**Identify the common problems.** In our experience working with maritime maintenance data, the same issues appear across almost every fleet:

*Inconsistent naming.* The same pump appears as "SW Cooling Pump," "Seawater Pump No.1," "SW CLG P/P 1," and "Pump, Cooling, Seawater" across different vessels, or even within the same vessel's records. Without standardisation, you cannot aggregate data across your fleet.

*Ghost assets.* Equipment that was decommissioned, replaced, or removed years ago but still exists in the system. These pollute your data and create confusion during audits.

*Orphaned maintenance history.* Work orders and maintenance records that aren't properly linked to the equipment they were performed on. This is particularly common when vessels have changed management companies or CMMS platforms.

*Missing attributes.* Serial numbers, manufacturer details, model numbers, and installation dates that were never captured or were lost during previous data migrations.

*Flat structures.* Many legacy systems store equipment as flat lists with no parent-child relationships. A centrifugal purifier appears as a standalone record with no connection to the lubrication oil system it serves, which in turn has no link to the main engine it supports.

**Decide what to migrate and what to leave behind.** Not every historical record needs to come forward. Focus on:

- Active equipment records with complete attributes
- Maintenance history for the past 3-5 years (or the current class cycle)
- Open work orders and outstanding defects
- Current spare parts inventories and BOMs
- Regulatory certificates and survey records

Data that's older than two class cycles, associated with decommissioned equipment, or too inconsistent to clean is often better archived separately than forced into your new structure.

## Step 4: Build Your Mapping (The Critical Staging Step)

This is where implementations succeed or fail. Mapping your existing equipment data to SFI codes is not a trivial translation exercise. It requires engineering judgement, fleet knowledge, and a structured process.

### Create Your Master Equipment List

Start by building a single, consolidated list of all equipment across your fleet. For each item, capture:

- Current name/description (as-is, however inconsistent)
- Vessel and location
- OEM manufacturer and model
- Current classification or coding (if any)
- Criticality (safety-critical, operationally critical, non-critical)
- Associated maintenance plans and task frequencies

### Map to SFI Codes

Working from your licensed SFI documentation, assign codes to each equipment item. This sounds straightforward but raises genuine technical questions:

**Multi-function equipment.** A diesel generator serves both propulsion and hotel load. Does it sit under Group 6 (Machinery Main Components) as a prime mover, or under Group 8 (Ship Common Systems) as a power source? The answer depends on its primary function in your vessel's design. SFI is function-oriented, so classify by the equipment's primary purpose, not by where it's physically located.

**Custom or non-standard equipment.** Specialised vessels often carry equipment that doesn't map cleanly to standard SFI sub-groups. The standard provides Primary Groups 0 and 9 for items not covered by the standard codes. Use these for genuinely unique equipment, but check carefully first. Most "unique" equipment actually fits within the existing structure when you look at its function rather than its name.

**Auxiliary and supporting systems.** Piping, valves, and instrumentation that serve a specific system should be coded under that system's SFI group, not as standalone items. The cooling water valve for the main engine lubrication oil cooler belongs under the engine's supporting systems, not under a generic "valves" category.

**Fleet standardisation.** If you operate multiple vessels, your SFI mapping should be consistent across the fleet. The same type of pump on the same type of vessel should get the same SFI code, the same standardised name, and the same attribute structure. This is what enables fleet-wide analysis: comparing failure rates, maintenance costs, and spare parts usage across vessels.

### Standardise Your Naming Convention

With SFI codes assigned, define a naming convention that works alongside them. A good naming convention for maritime CMMS typically includes:

- The equipment's standard name (not abbreviations that vary by vessel)
- A sequential identifier where multiples exist
- Enough description to distinguish similar items without being verbose

The SFI code provides the functional classification; the name provides the human-readable identification. Don't try to embed the SFI code into the name itself. Your CMMS should handle that relationship through its data fields.

### Stage and Validate Before Loading

This is the step most implementations skip, and it's the one that causes the most expensive rework. Loading unvalidated data directly into a production CMMS means every error (misallocated codes, inconsistent names, broken parent-child relationships) has to be fixed inside the live system, often while the vessel is operational.

A staging environment lets you:

- Validate SFI code assignments against the licensed standard
- Check parent-child hierarchy relationships for completeness and accuracy
- Identify gaps (equipment that exists physically but isn't in your data)
- Run consistency checks across vessels for fleet standardisation
- Review and approve the data with your technical superintendents before it goes live

This validation step is the difference between a CMMS that works on day one and one that takes months of post-implementation cleanup to become usable.

## Step 5: Configure Your CMMS Platform

With validated, SFI-coded data ready to load, the next step is configuring your CMMS to receive it properly. The approach varies by platform.

### AMOS (SpecTec / Kongsberg)

AMOS has the closest native relationship with SFI. This makes sense, since SpecTec owns both the SFI standard and the AMOS platform. The technical account structure in AMOS Maintenance is commonly based on the SFI Group System.

Key configuration considerations for AMOS:

- **Template library alignment.** AMOS provides maintenance task templates that can be aligned with SFI codes. Ensure your job plan references match your SFI hierarchy so that work orders roll up correctly for reporting.
- **Spare parts linkage.** AMOS supports spare part numbering based on SFI detail codes plus consecutive numbers (9-10 digits total). Configuring this correctly from the start enables fleet-wide parts interchangeability analysis.
- **Shore-to-ship synchronisation.** AMOS operates across vessel and office installations. Your SFI hierarchy needs to be consistent in both environments, with a defined process for updates and additions that maintains data integrity during synchronisation.

### IBM Maximo

Maximo doesn't have native SFI support, but its flexible data model accommodates SFI structures well. The implementation approach is different:

- **Asset templates.** Build Maximo asset templates that mirror SFI sub-groups. Each template should define the standard attributes, failure hierarchies, and maintenance plan associations for that equipment type.
- **Classification structure.** Use Maximo's classification and specification framework to create an SFI-based taxonomy. This becomes the backbone for consistent data entry across the fleet.
- **Functional locations (FLOCs).** Map your SFI hierarchy to Maximo's functional location structure. The SFI groups and sub-groups translate naturally into FLOC levels, giving you the location-based analysis that maintenance managers need.
- **Data loading.** Maximo's data import typically goes through tools like MXLoader or integration framework. The data format requirements are rigid, so validate your staging data against these formats before attempting import to avoid loading errors that corrupt your hierarchy.

### Other Maritime CMMS Platforms

DNV ShipManager, Bass, Danaos, and other maritime CMMS platforms each have their own data structures, but the principles are the same:

- Understand the platform's native hierarchy structure and how SFI maps to it
- Configure equipment templates before loading data
- Define your spare parts, failure codes, and maintenance task relationships in advance
- Test with a single vessel before fleet-wide rollout

## Step 6: Link Maintenance Plans to Your SFI Hierarchy

An SFI-coded asset hierarchy without linked maintenance plans is just a tidy equipment register. The real value comes when your planned maintenance system operates through the SFI structure.

### Map Maintenance Tasks to Equipment

For each SFI-coded equipment item, you need associated maintenance tasks derived from three sources:

**Manufacturer's instructions.** The OEM maintenance manual defines the baseline: what tasks, at what intervals, with what acceptance criteria. These form the foundation of your PMS and are what classification societies expect to see.

**Classification society requirements.** Class rules define specific inspection and testing requirements for survey items. These need to be captured as distinct maintenance tasks linked to the correct equipment in your SFI hierarchy. Under the ISM Code, your PMS must demonstrate that maintenance meets these requirements, and your SFI structure makes this auditable.

**Operating experience.** Your chief engineers and technical superintendents know which equipment needs more attention than the manufacturer suggests, and which maintenance intervals can safely be extended based on operational history. This knowledge should be captured in your maintenance plans, not kept in someone's head.

### Define Your Failure Coding Structure

SFI tells you *what* failed; your failure coding structure tells you *how* and *why*. If you're implementing ISO 14224 alongside SFI (and for offshore vessels, you should be), your failure modes, failure causes, and detection methods need to be defined and linked to the appropriate SFI-coded equipment.

This enables the analysis that justifies the whole implementation: tracking failure patterns across equipment types, identifying recurring issues that maintenance plans should address, and making evidence-based decisions about maintenance intervals and strategies.

## Step 7: Manage the Rollout

### Pilot First

Never attempt a fleet-wide SFI implementation simultaneously. Select one or two vessels as pilots:

- Choose vessels that represent your most common type (the lessons learned will apply to the most ships)
- Pick vessels with engaged chief engineers who will provide honest feedback
- Allow enough time for a full maintenance cycle to pass through the new system before expanding

### Train Your People

The best data structure in the world is useless if your crews don't use it correctly. Training should cover:

**For chief engineers and onboard technical staff:** How to find equipment in the new SFI hierarchy, how to raise and complete work orders against the correct assets, and how to properly record failure information. Keep this practical. Show them the three or four things they do every day and how those tasks work in the new system.

**For technical superintendents and shore-based planners:** How to use the SFI structure for fleet-wide analysis, how to maintain data quality as new equipment is added, and how to extract the reporting that supports maintenance optimisation and class survey preparation.

**For procurement teams:** How SFI-coded spare parts numbering works, how to use the hierarchy to identify parts interchangeability across vessels, and how to maintain the spare parts catalogue as equipment changes.

### Establish Data Governance

Your SFI hierarchy will degrade over time without active governance. Define:

- **Who can add or modify equipment records** (not everyone, as this should be controlled)
- **What the process is for new equipment** (every new installation gets coded and entered before it needs its first maintenance task)
- **How you handle fleet-wide updates** (when a new SFI sub-group is needed or a mapping error is discovered)
- **Regular data quality reviews** (quarterly checks for orphaned records, missing codes, inconsistent naming)

## Common Mistakes and How to Avoid Them

**Trying to do everything at once.** A phased rollout with a pilot vessel and progressive expansion always outperforms a big-bang approach. The first vessel will reveal problems you didn't anticipate. Better to find them on one ship than across the entire fleet.

**Skipping the staging step.** Loading data directly into your production CMMS without validation is the most expensive shortcut in maintenance data management. Every error fixed post-implementation costs significantly more than catching it during staging.

**Ignoring existing maintenance knowledge.** Your crews have decades of practical knowledge about your equipment. An SFI implementation that doesn't capture this knowledge, relying solely on OEM manuals and standard codes, misses half the value.

**Over-engineering the hierarchy.** Not every piece of equipment needs six-digit detail coding. A pragmatic approach that focuses detail on critical equipment and uses higher-level codes for non-critical items is both more manageable and more likely to be maintained over time.

**Treating it as an IT project.** SFI implementation is a maintenance engineering project with IT components, not the other way around. The critical decisions (hierarchy depth, equipment classification, maintenance plan structure) are engineering decisions that require engineering expertise.

**Not linking SFI to other standards.** If you operate offshore vessels, integrating ISO 14224 failure coding with your SFI hierarchy from the outset is far easier than retrofitting it later. Similarly, if your company also operates assets onshore using different standards (RDS-PP for power generation, KKS for industrial plants), consider how your maritime SFI data will need to interface with these systems for corporate-level reporting.

## Measuring Success

How do you know your SFI implementation is working? Track these indicators:

**Data quality metrics:** Percentage of equipment with complete SFI coding, consistency of naming across the fleet, percentage of work orders correctly linked to SFI-coded assets.

**Operational efficiency:** Time to locate spare parts, time to generate work orders for similar equipment across vessels, time to prepare for class surveys and audits.

**Analytical capability:** Can you compare failure rates for the same equipment type across vessels? Can you identify which SFI sub-groups account for the highest maintenance costs? Can you benchmark maintenance performance across your fleet?

**Compliance confidence:** How smoothly do ISM audits and class surveys proceed? Is your PMS documentation consistently linked to the equipment it covers?

If these metrics are improving, your implementation is delivering value. If they're not, the most likely cause is data quality issues in the initial staging and loading, which brings us back to why that step is so critical.

## Conclusion

Implementing SFI in your CMMS is fundamentally a data quality exercise. The standard provides the classification framework; your job is to apply it consistently, stage it properly, and maintain it over time.

The companies that get this right don't just end up with a tidier CMMS. They build a maintenance data foundation that supports fleet-wide analysis, predictive maintenance, evidence-based decision making, and streamlined regulatory compliance. Those outcomes compound over years of operation, making the upfront investment in proper implementation one of the highest-return activities in maritime maintenance management.

The companies that get it wrong usually made the same mistake: they skipped the staging step, loaded messy data directly into their CMMS, and spent the next two years cleaning it up (if they cleaned it up at all).

---

AssetStage helps maritime teams stage and validate SFI-coded asset hierarchies before they reach your production CMMS. Instead of loading unvalidated data and cleaning up errors after the fact, you can standardise naming, validate SFI codes, check hierarchy relationships, and get sign-off from your engineering team. All of this happens before a single record hits AMOS, Maximo, or any other platform. [Start a free trial](/#contact) or [book a demo](/#demo) to see how it works.
