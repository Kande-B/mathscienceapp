const fs = require('fs');
const path = require('path');

const dir = 'ressources/seconde/maths/equations-1er-degre';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

const replacements = [
    { from: /([^\\])mathbf/g, to: '$1\\mathbf' },
    { from: /([^\\])emptyset/g, to: '$1\\emptyset' },
    { from: /([^\\])mathbb/g, to: '$1\\mathbb' },
    { from: /([^\\])implies/g, to: '$1\\implies' },
    { from: /([^\\])iff/g, to: '$1\\iff' },
    { from: /([^\\])frac/g, to: '$1\\frac' },
    { from: /([^\\])times/g, to: '$1\\times' },
    { from: /([^\\])quad/g, to: '$1\\quad' },
    { from: /([^\\])neq/g, to: '$1\\neq' },
    { from: /([^\\])cdot/g, to: '$1\\cdot' }
];

files.forEach(file => {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf8');

    // Run replacements multiple times if needed
    replacements.forEach(r => {
        content = content.replace(r.from, r.to);
    });

    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Fixed LaTeX in ${file}`);
});
