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

## Generating PDFs

The comprehensive source content is in `content/resources/` as Markdown files. To regenerate PDFs:

1. Use a Markdown-to-PDF converter (Pandoc, md-to-pdf, etc.)
2. Apply AssetStage branding/styling
3. Replace the placeholder PDFs in this directory

Example with Pandoc:
```bash
pandoc content/resources/ISO14224_Implementation_CheatSheet.md -o public/resources/ISO14224_AssetStage_CheatSheet_Clean.pdf
```

## FMEA Workbook

The FMEA workbook has two CSV source files:
- `FMEA_Workbook_Template.csv` - Blank template with reference scales
- `FMEA_Workbook_Example_Pump.csv` - Worked example for a seawater pump

To create the Excel workbook:
1. Open both CSVs in Excel
2. Create a multi-sheet workbook with both templates
3. Format tables, add conditional formatting for RPN values
4. Save as .xlsx

## Implementation Notes

- ResourcesSection.tsx references these files directly
- All 9 resources are configured and ready
- Download counts in ResourcesSection.tsx can be updated as needed
- Consider adding file size information to resource cards
