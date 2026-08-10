const fs = require('fs');

const formations = JSON.parse(fs.readFileSync('data/formations.json', 'utf8'));
let indexHtml = fs.readFileSync('index.html', 'utf8');

const regex = /const FALLBACK_FORMATIONS = \[[\s\S]*?\]; \/\/ FIN FALLBACK_FORMATIONS/;

if (regex.test(indexHtml)) {
    const replacement = `const FALLBACK_FORMATIONS = ${JSON.stringify(formations, null, 4)}; // FIN FALLBACK_FORMATIONS`;
    indexHtml = indexHtml.replace(regex, replacement);
    fs.writeFileSync('index.html', indexHtml, 'utf8');
    console.log('Successfully updated FALLBACK_FORMATIONS in index.html!');
} else {
    console.error('Could not find FALLBACK_FORMATIONS pattern in index.html');
}
