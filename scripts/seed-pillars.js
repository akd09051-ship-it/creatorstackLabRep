// Minimal pillar seed script for future expansion
const fs = require('fs');
const path = require('path');
const dataPath = path.join(process.cwd(), 'content', 'pillars.json');
let data = [];
try {
  data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
} catch (e) {
  console.error('Could not read pillars.json', e);
}
console.log('Loaded pillars:', data.length);
