---
title: "The Excel Handover Every CMMS Project Dreads"
date: "2025-11-11"
description: "Six months into implementation, your consultant sends you 47 tabs of asset data. You have two weeks to review it. Here's why this moment breaks most projects."
---

# The Excel Handover Every CMMS Project Dreads

**Six months into implementation, your consultant sends you 47 tabs of asset data. You have two weeks to review it. Here's why this moment breaks most projects.**

-----

You know the moment.

Six months into your CMMS implementation—whether it's Maximo, SAP PM, Brightly, or AMOS—the consultant emails you a file called "Final_Asset_Data_v7_UPDATED_USE_THIS_ONE.xlsx"

You open it. 47 tabs. Colour-coded cells you don't understand. Formulas that reference other tabs that reference other formulas. A notes column that just says "CHECK WITH DAVE."

Dave left three months ago.

This is your asset data. This is what's going into your £1M CMMS project—and £200K/year after that. Whether it works or not.

And you have two weeks to review it.

-----

## Why Excel Becomes the Problem

Excel isn't built for this. It's brilliant for analysis, terrible for data staging.

Here's what breaks:

**The hierarchy collapses.** Your site-location-asset structure lives across multiple sheets. Someone deletes a parent location. Suddenly 200 assets are orphaned. You won't know until go-live.

**Versions multiply.** Finance has one version. Operations has another. The consultant has a third. Nobody knows which is current. Nobody wants to ask.

**Validation doesn't exist.** Is "Pump" the same as "PUMP" or "pump" or "Centrifugal Pump"? Excel doesn't care. Your CMMS will.

**History disappears.** Who changed that criticality rating? When? Why? Excel doesn't track changes across multiple editors.

**The formula graveyard.** Column AF has a formula that populates parent codes. It breaks if you sort. Nobody told you. You sort. Now 4,000 assets have wrong parents.

-----

## The Real Cost

This isn't about Excel being bad. It's about using the wrong tool for the job.

Asset staging needs:

- Hierarchy validation (does this parent actually exist?)
- Change tracking (who changed what, when?)
- Relationship management (parent-child, asset-PM linkages)
- Multi-user access (without version chaos)
- Quality rules (enforce standards before data hits your CMMS)

Excel gives you none of this. So the handover becomes a detective exercise.

You're not reviewing data quality. You're trying to figure out what the consultant did, why they did it, and whether it'll break when you import it.

-----

## What Actually Happens

Three scenarios:

**1. You trust it blindly.** Import everything. Discover the issues six months later when maintenance teams are complaining about missing PMs and broken hierarchies.

*Real example:* Major utilities company implementing SAP PM imported 12,000 assets. Three months later discovered that 2,400 had incorrect functional locations because a lookup formula referenced the wrong sheet. Cost: £180K in consultant time to fix, 6-month delay to phase 2.

**2. You audit everything.** Weeks of manual checking. Spot-checking sample assets. Building pivot tables to find duplicates. Hoping you caught the major issues.

*Real example:* Oil & gas client implementing Maximo spent 4 weeks auditing asset data across 8 facilities. Found 847 issues. Sent back to consultant. Received new version. Couldn't identify what changed between versions. Started audit again. Project delayed 3 months.

**3. You send it back.** Consultant fixes issues. Sends new version. Repeat cycle. Nobody's quite sure what changed between versions. Relationship tension builds.

Cost of all three scenarios: credibility + time + money + stress.

-----

## The Question Nobody Asks

"How are you validating this before it goes into the system?"

Most consultants will say: "We've checked it" or "We have a QA process" or "This is based on our template."

But ask: "Can I see the validation report?"

Silence.

Because there isn't one. There's just Excel and experienced consultants making their best judgment.

That's not insurance. That's hope.

-----

## What Good Staging Looks Like

You should be able to:

- See your full hierarchy visually (not across 12 tabs)
- Know immediately if a parent-child relationship is broken
- Track every change with user + timestamp
- Run validation rules (your rules, your standards)
- Export clean, verified data when you're ready

Not six months from now. Not during go-live. **Before handover.**

The consultant should be sending you a validation report, not a spreadsheet. Something that says: "We checked 847 assets against 23 validation rules. Here are the 12 exceptions that need decisions."

That's a conversation you can have. That's data you can trust.

-----

## The Uncomfortable Truth

If your CMMS data is being staged in Excel, you're taking on risk you don't need to.

Not because consultants are bad at their jobs. They're not.

But because Excel wasn't designed to validate hierarchies, enforce business rules, track changes, or manage relationships across thousands of assets.

It's a spreadsheet. You're building a database.

The handover is dreaded because everyone knows this gap exists. Nobody talks about it. Projects just absorb the risk and deal with the consequences later.

-----

## What to Do

**If you're about to receive an Excel handover:**

1. Ask how the data was validated
2. Request a validation report (not just the spreadsheet)
3. Understand what rules were checked
4. Know what wasn't checked (somebody has to decide this)
5. Get a plan for fixing issues found during review

**If you're planning a CMMS project:**

Ask your consultant early: "How will you stage our data, and how will we validate quality before import?"

If the answer is "Excel," ask what happens when Excel's limits are reached.

There might be a better answer.

-----

## Final Thought

Nobody sets out to create data chaos. It just happens when you use tools that can't handle the job.

The Excel handover is dreaded because it represents a moment of truth: Is your data actually ready? Or are you about to find out it isn't?

Most projects gamble on "probably fine."

Some projects insure against it.

**Which one are you?**

-----

*Need to validate your CMMS data before it goes live? [AssetStage](https://app.assetstage.io) gives you hierarchy validation, change tracking, and quality rules—before the handover becomes a crisis.*