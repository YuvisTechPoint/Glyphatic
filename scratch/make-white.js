const fs = require('fs');
const path = require('path');

const dirsToScan = ['app', 'components'];

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;

  // Backgrounds - turning dark backgrounds to light
  content = content.replace(/bg-\[#0A0D14\]/g, 'bg-white');
  content = content.replace(/bg-\[#111111\]/g, 'bg-gray-50');
  content = content.replace(/bg-\[#121212\]/g, 'bg-white');
  content = content.replace(/bg-\[#141414\]/g, 'bg-gray-50');
  content = content.replace(/bg-\[#1a1a1a\]/g, 'bg-white');
  content = content.replace(/bg-\[#222222\]/g, 'bg-gray-100');
  
  // Specifically target black backgrounds (except hero which we might want to keep cinematic)
  if (!filePath.includes('HeroVideoSection') && !filePath.includes('AIWorldSection')) {
    content = content.replace(/\bbg-black\b/g, 'bg-white');
  }

  // Text Colors
  // We only replace text-white with text-neutral-900 if it's not a button or Hero/cinematic section where white text on image is needed
  if (!filePath.includes('HeroVideoSection') && !filePath.includes('AIWorldSection') && !filePath.includes('Button.tsx')) {
    content = content.replace(/\btext-white\b/g, 'text-neutral-900');
    content = content.replace(/text-neutral-400/g, 'text-neutral-600');
    content = content.replace(/text-neutral-300/g, 'text-neutral-700');
  }

  // Borders
  content = content.replace(/border-white\/10/g, 'border-black/10');
  content = content.replace(/border-white\/5/g, 'border-black/5');
  content = content.replace(/border-white\/20/g, 'border-black/20');
  content = content.replace(/border-white\/30/g, 'border-black/30');

  // Background Opacities
  content = content.replace(/bg-white\/5/g, 'bg-black/5');
  content = content.replace(/bg-white\/10/g, 'bg-black/10');
  content = content.replace(/bg-white\/20/g, 'bg-black/20');

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
