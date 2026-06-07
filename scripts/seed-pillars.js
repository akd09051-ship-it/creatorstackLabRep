// Minimal pillar seed script for future expansion
const fs = require('fs');
const path = require('path');

const dataPath = path.join(process.cwd(), 'content', 'pillars.json');
let data = [];
try {
  data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
} catch (e) {
  console.error('Could not read pillars.json:', e.message);
  process.exit(1);
}

console.log(`Loaded ${data.length} pillars:`);
data.forEach((p) => console.log(` - [${p.slug}] ${p.title}: ${p.description}`));

// Extend here: write to a DB, push to an API, etc.
console.log('Seed complete.');
