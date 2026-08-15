const fs = require('fs');
const path = require('path');

const dirsToScan = ['app', 'components'];

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;

  // Remove dark: classes
  content = content.replace(/\bdark:[^\s'"`]+\b/g, '');
  
  // Clean up any double spaces left by removal
  content = content.replace(/\s{2,}/g, ' ');

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Removed dark classes from ${filePath}`);
  }
}

function scanDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      scanDir(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      processFile(fullPath);
    }
  }
}

dirsToScan.forEach(scanDir);
