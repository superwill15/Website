# AssetStage Resources

This directory contains downloadable resources for users who complete the lead capture form.

## Current Resources

| File | Source Content |
|------|----------------|
| `ISO14224_AssetStage_CheatSheet_Clean.pdf` | `content/resources/ISO14224_Implementation_CheatSheet.md` |
| `Asset_Standardization_Guide_CMMS.pdf` | `content/resources/Asset_Standardization_Guide.md` |
| `Maximo_to_MAS9_Migration_Checklist.pdf` | `content/resources/Maximo_MAS9_Migration_Checklist.md` |
| `SAP_S4HANA_Migration_Checklist.pdf` | `content/resources/SAP_S4HANA_Migration_Checklist.md` |
| `Maritime_CMMS_Setup_Guide.pdf` | `content/resources/Maritime_CMMS_Setup_Guide.md` |
| `Engineering_Standards_Implementation_Guide.pdf` | `content/resources/Engineering_Standards_Implementation_Guide.md` |
| `FMEA_for_Maintenance_Engineers.pdf` | `content/resources/FMEA_Guide_Maintenance_Engineers.md` |
| `FMEA_Workbook_AssetStage.xlsx` | `content/resources/FMEA_Workbook_Template.csv` + `FMEA_Workbook_Example_Pump.csv` |
| `ISO14224_for_Non_OilGas_Guide.pdf` | `content/resources/ISO14224_Non_OilGas_Guide.md` |
| `SFI_CMMS_Implementation_Checklist.pdf` | `content/resources/SFI_CMMS_Implementation_Checklist.md` |

---

## Content Standards

All resource documents must follow these standards for consistency and branding.

### Markdown Structure

Every resource markdown file must include:

```markdown
---
title: "Document Title"
subtitle: "Descriptive Subtitle"
author: "AssetStage"
---

![AssetStage](logo-primary.png)

# Document Title
## Descriptive Subtitle

---

## First Section

Content here...

---

## Next Section

More content...

---

*CTA text with contact info. Contact us at sales@assetstage.io*

---

© 2026 AssetStage. This guide may be freely distributed with attribution.
```

### Required Elements

1. **Frontmatter**: Title, subtitle, and author fields
2. **Logo**: `![AssetStage](logo-primary.png)` immediately after frontmatter
3. **Title block**: H1 title and H2 subtitle matching frontmatter
4. **Section dividers**: Use `---` between major sections
5. **CTA**: Contact information before copyright
6. **Copyright**: Standard copyright notice at the end

### Checklists

Use standard markdown task list syntax:

```markdown
- [ ] Unchecked item
- [ ] Another unchecked item
  - [ ] Nested item (indent with 2 spaces)
```

The CSS will automatically:
- Remove bullet points from checkbox items
- Align checkboxes properly with text
- Style checkboxes with brand green accent color

### Tables

Use standard markdown tables:

```markdown
| Column 1 | Column 2 | Column 3 |
|----------|----------|----------|
| Data | Data | Data |
```

Tables will be styled with:
- Navy header row (#1e3c72)
- Alternating row colors
- Proper padding and borders

### Code Blocks

Use fenced code blocks with language hints:

```markdown
```sql
SELECT * FROM assets WHERE status = 'ACTIVE'
```
```

---

## Generating PDFs

### Prerequisites

The logo file must exist in the same directory as the markdown:
```bash
cp public/logo-primary.png content/resources/
```

### Generate Command

Use md-to-pdf with the branded stylesheet:

```bash
npx md-to-pdf content/resources/YOUR_FILE.md --stylesheet content/resources/pdf-styles.css
```

### Copy to Public

After generation, copy to public/resources with the correct filename:

```bash
cp content/resources/YOUR_FILE.pdf public/resources/YOUR_PUBLIC_FILENAME.pdf
```

### Full Example

```bash
# Generate new resource PDF
cd /path/to/AssetStage-site

# Ensure logo is in resources directory
cp public/logo-primary.png content/resources/

# Generate PDF
npx md-to-pdf content/resources/New_Resource_Guide.md --stylesheet content/resources/pdf-styles.css

# Copy to public with correct name
cp content/resources/New_Resource_Guide.pdf public/resources/New_Resource_Guide.pdf

# Clean up intermediate file
rm content/resources/New_Resource_Guide.pdf
```

### Regenerate All PDFs

To regenerate all PDFs (e.g., after CSS changes):

```bash
cd /path/to/AssetStage-site

# Generate all
npx md-to-pdf content/resources/Maximo_MAS9_Migration_Checklist.md --stylesheet content/resources/pdf-styles.css
npx md-to-pdf content/resources/SAP_S4HANA_Migration_Checklist.md --stylesheet content/resources/pdf-styles.css
npx md-to-pdf content/resources/Maritime_CMMS_Setup_Guide.md --stylesheet content/resources/pdf-styles.css
npx md-to-pdf content/resources/ISO14224_Implementation_CheatSheet.md --stylesheet content/resources/pdf-styles.css
npx md-to-pdf content/resources/Asset_Standardization_Guide.md --stylesheet content/resources/pdf-styles.css
npx md-to-pdf content/resources/Engineering_Standards_Implementation_Guide.md --stylesheet content/resources/pdf-styles.css
npx md-to-pdf content/resources/FMEA_Guide_Maintenance_Engineers.md --stylesheet content/resources/pdf-styles.css
npx md-to-pdf content/resources/ISO14224_Non_OilGas_Guide.md --stylesheet content/resources/pdf-styles.css
npx md-to-pdf content/resources/SFI_CMMS_Implementation_Checklist.md --stylesheet content/resources/pdf-styles.css

# Copy to public (note filename mappings)
cp content/resources/Maximo_MAS9_Migration_Checklist.pdf public/resources/Maximo_to_MAS9_Migration_Checklist.pdf
cp content/resources/SAP_S4HANA_Migration_Checklist.pdf public/resources/SAP_S4HANA_Migration_Checklist.pdf
cp content/resources/Maritime_CMMS_Setup_Guide.pdf public/resources/Maritime_CMMS_Setup_Guide.pdf
cp content/resources/ISO14224_Implementation_CheatSheet.pdf public/resources/ISO14224_AssetStage_CheatSheet_Clean.pdf
cp content/resources/Asset_Standardization_Guide.pdf public/resources/Asset_Standardization_Guide_CMMS.pdf
cp content/resources/Engineering_Standards_Implementation_Guide.pdf public/resources/Engineering_Standards_Implementation_Guide.pdf
cp content/resources/FMEA_Guide_Maintenance_Engineers.pdf public/resources/FMEA_for_Maintenance_Engineers.pdf
cp content/resources/ISO14224_Non_OilGas_Guide.pdf public/resources/ISO14224_for_Non_OilGas_Guide.pdf
cp content/resources/SFI_CMMS_Implementation_Checklist.pdf public/resources/SFI_CMMS_Implementation_Checklist.pdf

# Clean up
rm content/resources/*.pdf
```

---

## Branding Stylesheet

The PDF stylesheet is at `content/resources/pdf-styles.css`. Key brand elements:

| Element | Style |
|---------|-------|
| Primary navy | #1e3c72 |
| Accent green | #27ae60 |
| Accent blue | #3498db |
| Text dark | #2c3e50 |
| Text light | #7f8c8d |
| Background light | #f8f9fa |
| Border light | #e9ecef |

### What the Stylesheet Handles

- Logo sizing and positioning
- Header styling (H1 with green underline, H2 with light border)
- Table formatting (navy headers, alternating rows)
- Checkbox lists (no bullets, proper alignment)
- Code block styling (left navy border)
- Horizontal rules
- Page margins (2cm top/bottom, 2.5cm sides)

---

## FMEA Workbook

The FMEA workbook has two CSV source files:
- `FMEA_Workbook_Template.csv` - Blank template with reference scales
- `FMEA_Workbook_Example_Pump.csv` - Worked example for a seawater pump

To create the Excel workbook:
1. Open both CSVs in Excel
2. Create a multi-sheet workbook with both templates
3. Format tables, add conditional formatting for RPN values
4. Save as .xlsx

---

## Adding a New Resource

1. Create markdown file in `content/resources/` following the structure above
2. Add logo reference: `![AssetStage](logo-primary.png)`
3. Generate PDF with stylesheet
4. Copy PDF to `public/resources/`
5. Add entry to `src/components/ResourcesSection.tsx`
6. Update this README with the new file mapping
7. Commit all changes

---

## Implementation Notes

- ResourcesSection.tsx references PDF files directly from this directory
- All resources require lead capture form completion before download
- Download counts in ResourcesSection.tsx are display values (update as needed)
