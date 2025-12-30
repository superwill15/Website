const XLSX = require('xlsx');
const fs = require('fs');
const path = require('path');

// Read CSVs
const templatePath = path.join(__dirname, '../content/resources/FMEA_Workbook_Template.csv');
const examplePath = path.join(__dirname, '../content/resources/FMEA_Workbook_Example_Pump.csv');
const outputPath = path.join(__dirname, '../public/resources/FMEA_Workbook_AssetStage.xlsx');

// Parse CSVs
const templateCSV = fs.readFileSync(templatePath, 'utf8');
const exampleCSV = fs.readFileSync(examplePath, 'utf8');

// Create workbook
const workbook = XLSX.utils.book_new();

// Add template sheet
const templateSheet = XLSX.utils.aoa_to_sheet(
  templateCSV.split('\n').map(row => row.split(',').map(cell => cell.replace(/^"|"$/g, '').trim()))
);
XLSX.utils.book_append_sheet(workbook, templateSheet, 'FMEA Template');

// Add example sheet
const exampleSheet = XLSX.utils.aoa_to_sheet(
  exampleCSV.split('\n').map(row => row.split(',').map(cell => cell.replace(/^"|"$/g, '').trim()))
);
XLSX.utils.book_append_sheet(workbook, exampleSheet, 'Example - Pump FMEA');

// Set column widths for both sheets
const colWidths = [
  { wch: 8 },   // Item #
  { wch: 25 },  // Equipment
  { wch: 25 },  // Function
  { wch: 20 },  // Failure Mode
  { wch: 30 },  // Effect Local
  { wch: 30 },  // Effect System
  { wch: 25 },  // Cause
  { wch: 8 },   // S
  { wch: 8 },   // O
  { wch: 8 },   // D
  { wch: 8 },   // RPN
  { wch: 40 },  // Action
  { wch: 15 },  // Owner
  { wch: 12 },  // Date
  { wch: 30 },  // Action Taken
  { wch: 8 },   // New S
  { wch: 8 },   // New O
  { wch: 8 },   // New D
  { wch: 8 },   // New RPN
];

templateSheet['!cols'] = colWidths;
exampleSheet['!cols'] = colWidths;

// Write to file
XLSX.writeFile(workbook, outputPath);

console.log('FMEA Workbook created:', outputPath);
