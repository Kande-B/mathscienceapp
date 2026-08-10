const fs = require('fs');
const path = require('path');

const dir = 'ressources/seconde/maths/equations-1er-degre';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

files.forEach(file => {
    const filePath = path.join(dir, file);
    let html = fs.readFileSync(filePath, 'utf8');

    // Fix form feed control char \x0c before rac
    html = html.replace(/\x0crac/g, '\\frac');
    html = html.replace(/rac\{/g, '\\frac{');

    // Fix solution set formatting
    html = html.replace(/\\mathbf\{S = \{([^}]+)\}\}/g, '\\mathbf{S} = \\{$1\\}');
    html = html.replace(/\\mathbf\{S = \{([^}]+)\}/g, '\\mathbf{S} = \\{$1\\}');
    html = html.replace(/\\mathbf\{S = ([^}]+)\}/g, '\\mathbf{S} = $1');

    // Fix specific solution notations
    html = html.replace(/mathbf\{S = \\emptyset\}/g, '\\mathbf{S} = \\emptyset');
    html = html.replace(/mathbf\{S = \\mathbb\{R\}\}/g, '\\mathbf{S} = \\mathbb{R}');
    html = html.replace(/mathbf\{S = \{5\}\}/g, '\\mathbf{S} = \\{5\\}');

    fs.writeFileSync(filePath, html, 'utf8');
    console.log(`Cleaned details in ${file}`);
});
