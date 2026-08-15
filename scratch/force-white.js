const fs = require('fs');
const path = require('path');

const dirsToScan = ['app', 'components'];

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;

  // We want to force white mode
  // The site currently uses hardcoded dark colors: bg-[#0A0D14], bg-[#111111], text-white
  // Adani/Enterprise is mostly white/gray-50 background, black text.
  
  // Replace main dark backgrounds with white
  content = content.replace(/bg-\[#0A0D14\]/g, 'bg-white');
  content = content.replace(/bg-\[#111111\]/g, 'bg-gray-50');
  content = content.replace(/bg-\[#121212\]/g, 'bg-white');
  content = content.replace(/bg-\[#141414\]/g, 'bg-gray-50');
  content = content.replace(/bg-\[#1a1a1a\]/g, 'bg-white');
  content = content.replace(/bg-\[#222222\]/g, 'bg-gray-100');
  content = content.replace(/bg-black/g, 'bg-white');
  content = content.replace(/bg-\[#050505\]/g, 'bg-[#050505]'); // Keep hero cinematic
  
  // Text colors
  content = content.replace(/\btext-white\b/g, 'text-neutral-900');
  content = content.replace(/text-neutral-400/g, 'text-neutral-600');
  content = content.replace(/text-neutral-300/g, 'text-neutral-700');
  
  // Borders
  content = content.replace(/border-white\/10/g, 'border-black/10');
  content = content.replace(/border-white\/5/g, 'border-black/5');
  content = content.replace(/border-white\/20/g, 'border-black/20');
  
  // Backgrounds with opacity
  content = content.replace(/bg-white\/5/g, 'bg-black/5');
  content = content.replace(/bg-white\/10/g, 'bg-black/10');
  content = content.replace(/bg-white\/20/g, 'bg-black/20');

  // Let's protect HeroVideoSection manually after this script.
  
  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`White theme applied to ${filePath}`);
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
