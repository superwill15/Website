# FMEA for Maintenance Engineers
## A Practical Guide to Failure Mode and Effects Analysis

---

## What Is FMEA?

Failure Mode and Effects Analysis (FMEA) is a systematic method for identifying:
- **What can fail** (failure modes)
- **Why it might fail** (causes)
- **What happens when it fails** (effects)
- **How bad it is** (risk ranking)
- **What to do about it** (actions)

FMEA helps you focus maintenance resources on what matters most.

### Types of FMEA

| Type | Focus | When Used |
|------|-------|-----------|
| **Design FMEA (DFMEA)** | Product design | During engineering |
| **Process FMEA (PFMEA)** | Manufacturing process | Process design |
| **Equipment FMEA** | Physical assets | Asset management |
| **System FMEA** | Interconnected systems | System reliability |

This guide focuses on **Equipment FMEA** for maintenance applications.

---

## When to Use FMEA

### Good Applications

- **New equipment installation** - Understand failure modes before commissioning
- **Chronic bad actors** - Equipment with recurring failures
- **Critical equipment** - High consequence of failure
- **PM optimization** - Developing RCM-based maintenance strategies
- **Incident investigation** - Understanding failure progression
- **Design modifications** - Evaluating proposed changes

### Poor Applications

- **Every piece of equipment** - Too time-consuming, focus on critical items
- **Very simple equipment** - Overhead exceeds value
- **Equipment being replaced** - Invest effort in replacement instead
- **Without follow-through** - FMEA without action is wasted effort

---

## The FMEA Process

### Step 1: Define Scope

Before starting, clearly define:

| Question | Answer |
|----------|--------|
| What equipment? | (e.g., Seawater Lift Pump P-4501A) |
| What boundaries? | (e.g., From suction flange to discharge flange, excluding motor) |
| What operating context? | (e.g., Continuous duty, offshore platform, corrosive environment) |
| What level of detail? | (e.g., Component level for critical, subassembly for others) |
| Who is the team? | (e.g., Maintenance eng, operator, reliability eng, OEM rep) |

### Step 2: Identify Functions

List everything the equipment is supposed to do.

**Primary functions:** The main reason the equipment exists
**Secondary functions:** Other requirements it must meet

**Example: Centrifugal Pump**

| # | Function | Performance Standard |
|---|----------|---------------------|
| 1 | Transfer fluid from A to B | Flow rate: 450 m³/hr minimum |
| 2 | Develop required pressure | Head: 85 meters minimum |
| 3 | Contain fluid | Zero external leakage |
| 4 | Not overheat | Bearing temp < 80°C |
| 5 | Not vibrate excessively | < 4.5 mm/s velocity |
| 6 | Start on demand | Start within 10 seconds |
| 7 | Meet environmental requirements | Noise < 85 dB at 1m |

### Step 3: Identify Failure Modes

For each function, identify HOW it could fail to meet the performance standard.

**Function: Transfer fluid (450 m³/hr minimum)**

| Failure Mode | Description |
|--------------|-------------|
| No flow | Pump produces zero output |
| Low flow | Output below 450 m³/hr |
| Intermittent flow | Flow stops and starts |
| Reverse flow | Flow goes backward (when stopped) |

**Function: Contain fluid (zero external leakage)**

| Failure Mode | Description |
|--------------|-------------|
| Seal leak (minor) | Dripping, < 1 L/hr |
| Seal leak (major) | Continuous stream, > 1 L/hr |
| Casing leak | Leak from casing/cover |
| Flange leak | Leak from connections |

### Step 4: Identify Failure Effects

For each failure mode, describe what happens at three levels:

| Level | Question |
|-------|----------|
| **Local** | What happens at the equipment? |
| **System** | What happens to the system/process? |
| **Plant** | What happens to production/safety? |

**Example: Seal leak (major)**

| Level | Effect |
|-------|--------|
| Local | Fluid spraying from seal area, contamination of surroundings |
| System | Loss of fluid inventory, potential pump damage if run dry |
| Plant | Water injection system offline, production deferral, potential environmental incident |

### Step 5: Identify Causes

For each failure mode, identify root causes. This is where your maintenance experience matters.

**Failure Mode: Seal leak (major)**

| Cause | Category |
|-------|----------|
| Seal faces worn beyond tolerance | Wear |
| Seal faces damaged by debris | Contamination |
| O-rings degraded | Age/chemical attack |
| Shaft sleeve worn | Wear |
| Misalignment | Installation error |
| Running dry | Operational error |
| Incorrect seal for application | Design error |
| Exceeded pressure rating | Operational error |

### Step 6: Identify Current Controls

Document what's currently in place to prevent, detect, or mitigate each failure.

**Detection Controls:** How do we know it's failing?
**Prevention Controls:** What do we do to prevent it?

| Control Type | Example |
|--------------|---------|
| Scheduled PM | Replace seal every 2 years |
| Condition monitoring | Vibration monitoring weekly |
| Operator rounds | Visual inspection daily |
| Instrumentation | Temperature alarm |
| Redundancy | Standby pump available |

### Step 7: Assess Risk (RPN Scoring)

Rate each failure mode on three scales, then multiply for Risk Priority Number (RPN).

**Severity (S):** How bad is the effect?

| Rating | Severity | Description |
|--------|----------|-------------|
| 10 | Hazardous - No warning | Death or serious injury possible, no warning |
| 9 | Hazardous - With warning | Death or serious injury possible, with warning |
| 8 | Very high | Major environmental incident or $1M+ loss |
| 7 | High | Significant production loss or $500K+ loss |
| 6 | Moderate | Production impact or $100K+ loss |
| 5 | Low | Minor production impact or $50K+ loss |
| 4 | Very low | Minor impact, $10K+ loss |
| 3 | Minor | Slight inconvenience, < $10K loss |
| 2 | Very minor | Noticed by trained personnel only |
| 1 | None | No discernible effect |

**Occurrence (O):** How often does this failure mode occur?

| Rating | Occurrence | Probability |
|--------|------------|-------------|
| 10 | Very high | > 1 in 2 (> 50%) |
| 9 | High | 1 in 3 (33%) |
| 8 | High | 1 in 8 (12.5%) |
| 7 | Moderate | 1 in 20 (5%) |
| 6 | Moderate | 1 in 80 (1.25%) |
| 5 | Low | 1 in 400 (0.25%) |
| 4 | Low | 1 in 2,000 (0.05%) |
| 3 | Very low | 1 in 15,000 (0.007%) |
| 2 | Remote | 1 in 150,000 (0.0007%) |
| 1 | Nearly impossible | < 1 in 1,500,000 |

**Detection (D):** How likely is it to be detected before causing the effect?

| Rating | Detection | Description |
|--------|-----------|-------------|
| 10 | Absolute uncertainty | No known control, cannot detect |
| 9 | Very remote | Controls probably won't detect |
| 8 | Remote | Controls have poor chance of detection |
| 7 | Very low | Controls have very low chance |
| 6 | Low | Controls have low chance |
| 5 | Moderate | Controls may detect |
| 4 | Moderately high | Controls have moderately high chance |
| 3 | High | Controls have high chance |
| 2 | Very high | Controls will almost certainly detect |
| 1 | Almost certain | Controls will detect, proven methods |

**Calculate RPN:**
```
RPN = Severity × Occurrence × Detection
Range: 1 to 1,000
```

### Step 8: Prioritize and Take Action

**Prioritization Guidelines:**

| RPN Range | Priority | Action |
|-----------|----------|--------|
| > 200 | Critical | Immediate action required |
| 100-200 | High | Action within 1 month |
| 50-100 | Medium | Action within 3 months |
| < 50 | Low | Monitor, address opportunistically |

**But also consider:**
- Any Severity = 9 or 10 requires action regardless of RPN
- High occurrence items may warrant action even with low RPN
- Easy wins (low effort, high impact) should be prioritized

**Action Types:**

| Action Type | Purpose | Example |
|-------------|---------|---------|
| Design change | Eliminate or reduce failure | Install seal flush system |
| PM task | Prevent failure | Replace seal every 18 months |
| Condition monitoring | Detect degradation | Install vibration sensor |
| Procedure change | Prevent operational errors | Add startup checklist |
| Training | Improve human reliability | Seal replacement training |
| Redundancy | Mitigate effect | Install standby pump |
| Spare parts | Enable quick recovery | Stock critical spares |

### Step 9: Reassess After Actions

After implementing actions, re-score to verify improvement.

| State | S | O | D | RPN |
|-------|---|---|---|-----|
| Before | 7 | 6 | 5 | 210 |
| After (new PM task) | 7 | 3 | 5 | 105 |
| After (+ condition monitoring) | 7 | 3 | 2 | 42 |

---

## FMEA Worksheet Template

| Item | Function | Failure Mode | Effect (Local) | Effect (System) | Effect (Plant) | Cause | Current Controls | S | O | D | RPN | Recommended Action | Resp. | Due | New S | New O | New D | New RPN |
|------|----------|--------------|----------------|-----------------|----------------|-------|------------------|---|---|---|-----|-------------------|-------|-----|-------|-------|-------|---------|
| | | | | | | | | | | | | | | | | | | |

---

## Worked Example: Centrifugal Pump FMEA

### Equipment Information

| Field | Value |
|-------|-------|
| Equipment | Seawater Lift Pump P-4501A |
| Location | Offshore Platform Alpha |
| Class | ISO 14224: 1.1 Centrifugal Pump |
| Manufacturer | Sulzer |
| Model | MSD-D 80-200 |
| Service | Seawater for water injection |
| Criticality | A - Production Critical |
| Operating Hours | 8,000 hrs/year continuous |

### Function List

| # | Function | Performance Standard |
|---|----------|---------------------|
| F1 | Pump seawater | 450 m³/hr at 85m head |
| F2 | Contain seawater | Zero external leakage |
| F3 | Operate within temperature limits | Bearing temp < 80°C |
| F4 | Operate within vibration limits | < 4.5 mm/s |
| F5 | Start on demand | Start within 10 seconds |

### FMEA Analysis (Partial)

**F2: Contain seawater - Zero external leakage**

| FM | Failure Mode | Effect (Local) | Effect (System) | Effect (Plant) | Cause | Current Controls | S | O | D | RPN | Action |
|----|--------------|----------------|-----------------|----------------|-------|------------------|---|---|---|-----|--------|
| 2.1 | Seal leak - minor (< 1 L/hr) | Visible dripping, wet area | Slight inventory loss | No immediate impact, housekeeping | Wear - normal life | PM: Replace seal @ 16,000 hrs | 3 | 5 | 3 | 45 | None - acceptable |
| 2.2 | Seal leak - major (> 1 L/hr) | Continuous spray, motor contamination risk | Significant inventory loss, pump damage if run dry | Production deferral if both pumps fail | Worn seal faces | PM: Replace seal @ 16,000 hrs | 7 | 4 | 5 | 140 | Add vibration monitoring |
| 2.2 | Seal leak - major | As above | As above | As above | Debris in seal faces | Strainer upstream | 7 | 3 | 5 | 105 | Increase strainer PM frequency |
| 2.2 | Seal leak - major | As above | As above | As above | Dry running | Low level alarm | 7 | 2 | 3 | 42 | None - acceptable |
| 2.3 | Casing leak | External leak at joint | System contamination | Production deferral | Gasket failure | Inspection @ major PM | 6 | 2 | 4 | 48 | None - acceptable |
| 2.3 | Casing leak | As above | As above | As above | Corrosion | Thickness testing @ 5 yrs | 6 | 2 | 3 | 36 | None - acceptable |

**F4: Operate within vibration limits - < 4.5 mm/s**

| FM | Failure Mode | Effect (Local) | Effect (System) | Effect (Plant) | Cause | Current Controls | S | O | D | RPN | Action |
|----|--------------|----------------|-----------------|----------------|-------|------------------|---|---|---|-----|--------|
| 4.1 | High vibration | Accelerated wear, noise | Reduced reliability | Potential unplanned shutdown | Unbalance (impeller erosion) | Monthly vibe check | 5 | 5 | 4 | 100 | Install continuous monitoring |
| 4.1 | High vibration | As above | As above | As above | Misalignment | Alignment check @ PM | 5 | 4 | 3 | 60 | None - adequate |
| 4.1 | High vibration | As above | As above | As above | Bearing wear | Monthly vibe check | 5 | 4 | 4 | 80 | Install continuous monitoring |
| 4.1 | High vibration | As above | As above | As above | Cavitation | Operator training | 5 | 3 | 2 | 30 | None - acceptable |

---

## Converting FMEA to PM Tasks

FMEA findings should drive your PM strategy:

### Mapping FMEA to Maintenance Tasks

| FMEA Finding | Task Type | Example Task |
|--------------|-----------|--------------|
| Time-based failure | Scheduled replacement | Replace seal every 16,000 hours |
| Wear-out pattern | Condition monitoring | Monitor vibration trending |
| Random failure (detectable) | Inspection | Visual inspection for leaks |
| Random failure (hidden) | Functional test | Test backup pump monthly |
| Operational error | Procedure/training | Pre-start checklist |
| Design deficiency | Modification | Install seal flush system |

### Task Interval Selection

| Failure Pattern | Maintenance Strategy |
|-----------------|---------------------|
| Wear-out (predictable) | Scheduled replacement before wear-out |
| Wear-out (variable) | Condition monitoring + limit |
| Random | Run-to-failure if low consequence |
| Random (safety critical) | Redundancy + proof testing |
| Hidden failure | Scheduled functional test |

---

## FMEA Workshop Facilitation

### Before the Workshop

1. **Select equipment** - Focus on critical or problem equipment
2. **Gather documentation** - P&IDs, manuals, maintenance history
3. **Analyze failure history** - What has actually failed?
4. **Identify participants** - Operations, maintenance, engineering, OEM
5. **Schedule adequate time** - 4-8 hours for complex equipment

### During the Workshop

**Facilitator responsibilities:**
- Keep discussion focused on one failure mode at a time
- Ensure all functions are covered
- Challenge assumptions (not all failures are "operator error")
- Record everything - even if not consensus
- Watch for dominant personalities
- Keep energy up (breaks, snacks)

**Ground rules:**
- No idea is stupid
- Focus on failure modes, not blame
- Use data where available, experience where not
- Document assumptions
- Complete is better than perfect

### After the Workshop

1. **Clean up documentation** - Format FMEA worksheet
2. **Calculate RPNs** - Verify math
3. **Prioritize actions** - Use RPN plus judgment
4. **Assign owners** - Every action needs a name and date
5. **Update PM program** - Implement task changes
6. **Track completion** - Follow up on actions
7. **Review periodically** - Update FMEA as conditions change

---

## Common FMEA Mistakes

| Mistake | Problem | Solution |
|---------|---------|----------|
| Confusing failure mode and cause | "Bearing failure" isn't a mode - it's a cause of "high vibration" | Mode = loss of function, Cause = why it happened |
| Too many failure modes | Unmanageable, analysis paralysis | Focus on significant modes, combine trivial ones |
| Too few failure modes | Miss important risks | Ensure every function has at least one mode |
| Same scores for everything | Defeats prioritization | Be specific about your facility/context |
| No follow-through on actions | Wasted effort | Assign owners, track to completion |
| One-time exercise | FMEA becomes outdated | Review annually or after changes |
| No data used | Scores are pure opinion | Use failure history, industry data |
| All failures are "operator error" | Avoids addressing real issues | Challenge this - what set up the error? |

---

## FMEA-to-CMMS Integration

### Recording FMEA Data in CMMS

**Option 1: Document attachment**
- Attach FMEA spreadsheet to equipment record
- Simple but not queryable

**Option 2: Custom fields**
- Add RPN field to equipment
- Track highest-risk items

**Option 3: Dedicated module**
- Some CMMS have FMEA/RCM modules
- Full integration with PM tasks

### PM Task Traceability

Link PM tasks back to FMEA findings:

| PM Task | FMEA Reference | Failure Mode Addressed |
|---------|----------------|----------------------|
| Replace mechanical seal | FMEA-P4501A-2.2 | Seal leak - major |
| Vibration measurement | FMEA-P4501A-4.1 | High vibration |
| Alignment check | FMEA-P4501A-4.1 | High vibration |

---

## Quick Reference: FMEA Scales

### Severity

| 10 | Death/injury possible | 6 | Production impact |
| 9 | Death/injury with warning | 5 | Minor production impact |
| 8 | Major environmental/$1M+ | 4 | $10K+ loss |
| 7 | Significant impact/$500K+ | 3 | Slight inconvenience |
| | | 2-1 | Minimal/no effect |

### Occurrence

| 10 | > 50% | 5 | 1 in 400 |
| 9 | 33% | 4 | 1 in 2,000 |
| 8 | 12.5% | 3 | 1 in 15,000 |
| 7 | 5% | 2 | 1 in 150,000 |
| 6 | 1.25% | 1 | < 1 in 1,500,000 |

### Detection

| 10 | Cannot detect | 5 | May detect |
| 9 | Very unlikely to detect | 4 | Moderate chance |
| 8 | Poor chance | 3 | High chance |
| 7 | Very low chance | 2 | Very high chance |
| 6 | Low chance | 1 | Will detect |

---

*Need help conducting FMEA workshops for your critical equipment? AssetStage offers facilitated FMEA sessions and integration with your CMMS. Contact us at sales@assetstage.io*

---

© 2025 AssetStage. This guide may be freely distributed with attribution.
