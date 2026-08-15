const fs = require('fs');
const path = require('path');

const dirsToScan = ['app', 'components'];

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;

  content = content.replace(/\bbg-black\b/g, 'bg-white dark:bg-black');
  
  // Also clean up any accidental issues: text-black dark:text-black dark:text-white
  content = content.replace(/text-black dark:text-black dark:text-white/g, 'text-black dark:text-white');
  content = content.replace(/bg-white dark:bg-white dark:bg-\[#0A0D14\]/g, 'bg-white dark:bg-[#0A0D14]');
  
  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated 2: ${filePath}`);
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
