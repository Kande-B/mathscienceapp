const fs = require('fs');
const path = require('path');

const coursPath = path.join(__dirname, 'ressources', 'seconde', 'maths', 'geometrie-espace-volumes', 'cours.html');
const fixPath = path.join(__dirname, 'fix_cours_simulator.js');

const coursContent = fs.readFileSync(coursPath, 'utf-8');

const fixScriptContent = `const fs = require('fs');
const path = require('path');

const targetFile = 'ressources/seconde/maths/geometrie-espace-volumes/cours.html';

const htmlContent = ${JSON.stringify(coursContent)};

fs.writeFileSync(path.join(__dirname, targetFile), htmlContent, 'utf-8');
console.log('Fixed simulator in cours.html!');
`;

fs.writeFileSync(fixPath, fixScriptContent, 'utf-8');
console.log('Synchronized fix_cours_simulator.js');
