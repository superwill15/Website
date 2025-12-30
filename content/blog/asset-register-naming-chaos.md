---
title: "Why Your Asset Register Has 47 Different Pump Types"
date: "2025-12-30"
description: "You can't standardise maintenance on assets you can't find. Here's how naming chaos quietly kills your CMMS investment."
---

## Pull Up Your Asset Register

Filter by "pump."

Go on. I'll wait.

What did you find?

```
Pump
PUMP
Centrifugal Pump
Cent. Pump
Centrif Pump
CP
Pump, Centrifugal
Pump - Centrifugal
Centrifugal pump (Grundfos)
Grundfos Pump
Process Pump
Transfer Pump
Pump_01
P-101
```

All the same asset type. All entered by different people, at different times, with different ideas about what "consistent" means.

Now try to answer a simple question: **How many centrifugal pumps do we have?**

You can't. Not without manually reviewing every record.

That's not an asset register. That's a graveyard of good intentions.

## How This Happens

Nobody creates naming chaos on purpose. It accumulates.

**Year one:** Someone builds the initial asset list. They have a system. It makes sense to them.

**Year two:** New site comes online. Different team loads assets. They have their own system.

**Year three:** Consultant migrates data from legacy CMMS. They preserve the old naming because "that's what the client had."

**Year four:** Technician creates a new asset in the field. Types what makes sense in the moment. Nobody told them there was a standard.

**Year five:** You inherit this.

47 ways to describe a pump. 23 variations of "motor." 8 different spellings of the same manufacturer.

And a PM optimisation project that was supposed to take 3 months is now on month 9.

## The Real Cost

This isn't pedantry. It's money.

**You can't standardise PMs.** You want to apply a single PM template to all centrifugal pumps. But you can't find all centrifugal pumps. So you build PMs asset by asset. 200 pumps × 30 minutes = 100 hours of work that shouldn't exist.

**Spare parts don't link.** Your storeroom has "Mechanical Seal - Centrifugal Pump." But the asset says "Grundfos CR" and another says "Process Pump." Nobody makes the connection. You order duplicates. Or worse—you don't have the part when you need it.

**Reporting is fiction.** Leadership wants failure data by asset class. You export to Excel and spend two days manually categorising because the CMMS can't group what it can't identify.

**Consultants work around it.** They quote 6 weeks for PM optimisation. Four weeks in, they're still building lookup tables to translate your naming chaos. You pay for their detective work.

**Real example:** Manufacturing client wanted to standardise PM frequencies across 3 facilities. Same equipment, different naming conventions at each site. Project quoted at £45K. Final cost: £127K. Eleven months instead of four. Most of the overrun was data harmonisation nobody scoped.

## The Question Nobody Asks

"What's our naming standard?"

Most organisations have one. It's in a document somewhere. Maybe a PDF from the original CMMS implementation. Maybe a SharePoint folder nobody's opened since 2019.

But ask: "Is it enforced?"

Silence.

Because enforcement requires validation. Validation requires tooling. And most CMMS systems don't stop you from typing "Pump" when the standard says "PUMP-CENT."

So the standard exists. And the chaos continues.

## What Good Looks Like

You should be able to:

- Filter by asset class and get every asset of that type
- Apply a PM template and know exactly which assets receive it
- Pull failure data by equipment category without manual cleanup
- Onboard new sites with the same naming structure as existing sites
- Have the system reject non-compliant entries before they're saved

Not "eventually." Not "after the data cleanse project." Now.

The organisations that get this right don't rely on discipline. They rely on constraints. The system doesn't let you deviate from the standard.

## The Uncomfortable Truth

Your asset register isn't a database. It's a history of every shortcut, every rushed go-live, every "we'll fix it later" that never got fixed.

And now someone's asking why your maintenance costs are 15% higher than the facility next door.

You know why. You just can't prove it because you can't query your own data.

## What to Do

**If you're living with naming chaos:**

1. **Audit first.** Export your asset classes. How many variations exist for common equipment? That number is your problem size.
2. **Define the standard.** One naming convention. Documented. Non-negotiable.
3. **Build a crosswalk.** Map every existing variation to the correct standard. This is the work nobody wants to do.
4. **Enforce going forward.** Validation rules. Dropdowns. Whatever stops free-text chaos.
5. **Clean the backlog.** Bulk updates. Not one record at a time.

**If you're about to implement a new CMMS:**

Get the naming standard right before you load a single asset. It's 100x cheaper to prevent this than to fix it.

## Final Thought

47 pump types isn't a data quality problem. It's a symptom.

The real problem: nobody owns asset data standards. So everyone invents their own.

Some organisations fix this with governance and discipline.

Some organisations fix this with tools that enforce standards automatically.

Some organisations just keep paying the hidden tax—every report, every PM project, every consultant engagement.

Which one are you?

---

*Tired of naming chaos blocking your PM optimisation? AssetStage enforces your standards before data hits your CMMS—so "centrifugal pump" means the same thing everywhere. [See how it works](/#assetstage) or [talk to our team](/#contact).*
