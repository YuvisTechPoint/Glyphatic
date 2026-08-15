const fs = require('fs');
const path = require('path');

const dirsToScan = ['app', 'components'];

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;

  // Replacements
  // Backgrounds
  content = content.replace(/bg-\[#0A0D14\]/g, 'bg-white dark:bg-[#0A0D14]');
  content = content.replace(/bg-\[#111111\]/g, 'bg-gray-50 dark:bg-[#111111]');
  content = content.replace(/bg-\[#121212\]/g, 'bg-white dark:bg-[#121212]');
  content = content.replace(/bg-\[#141414\]/g, 'bg-gray-50 dark:bg-[#141414]');
  content = content.replace(/bg-\[#050505\]/g, 'bg-white dark:bg-[#050505]');
  content = content.replace(/bg-\[#0a0a0a\]/g, 'bg-white dark:bg-[#0a0a0a]');
  content = content.replace(/bg-\[#0d0d0d\]/g, 'bg-gray-50 dark:bg-[#0d0d0d]');
  
  // Text colors
  content = content.replace(/\btext-white\b/g, 'text-black dark:text-white');
  content = content.replace(/text-neutral-400/g, 'text-neutral-600 dark:text-neutral-400');
  content = content.replace(/text-neutral-300/g, 'text-neutral-700 dark:text-neutral-300');
  content = content.replace(/text-neutral-500/g, 'text-neutral-500 dark:text-neutral-500');

  // Borders
  content = content.replace(/border-white\/10/g, 'border-black/10 dark:border-white/10');
  content = content.replace(/border-white\/5/g, 'border-black/5 dark:border-white/5');
  content = content.replace(/border-white\/20/g, 'border-black/20 dark:border-white/20');

  // Background opacities
  content = content.replace(/bg-white\/5/g, 'bg-black/5 dark:bg-white/5');
  content = content.replace(/bg-white\/10/g, 'bg-black/10 dark:bg-white/10');
  
  // Fix double darks if already replaced previously
  content = content.replace(/text-black dark:text-black dark:text-white/g, 'text-black dark:text-white');
  content = content.replace(/bg-white dark:bg-white dark:bg-\[#0A0D14\]/g, 'bg-white dark:bg-[#0A0D14]');

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${filePath}`);
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
