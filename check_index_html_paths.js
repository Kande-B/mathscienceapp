const fs = require('fs');
const path = require('path');

const rootDir = __dirname;

const indexHtmlPath = path.join(rootDir, 'index.html');
const indexContent = fs.readFileSync(indexHtmlPath, 'utf8');

const regexMaths = /ressources\/seconde\/(?!maths\/|sciences\/)([a-z0-9-]+)\//g;
let matches = [];
let match;
while ((match = regexMaths.exec(indexContent)) !== null) {
    matches.push(match[0]);
}

console.log(`Found ${matches.length} occurrences in index.html missing /maths/ or /sciences/ prefix.`);
if (matches.length > 0) {
    console.log('Sample matches in index.html:', matches.slice(0, 10));
}
