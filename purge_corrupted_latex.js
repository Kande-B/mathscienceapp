const fs = require('fs');
const path = require('path');

const dir = 'ressources/seconde/maths/equations-1er-degre';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

files.forEach(file => {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf8');

    // 1. Remove form-feed characters (\x0c)
    content = content.replace(/\x0c/g, '');

    // 2. Remove tabs before 'ext' (\text -> \t + ext -> tab + ext)
    content = content.replace(/\text/g, '\\text');

    // 3. Fix multiple \f before \frac (e.g. \f\frac, \f\f\frac, etc.)
    content = content.replace(/(\\f)+(\\frac|frac)/g, '\\frac');

    // 4. Fix stray \f before fraction or LaTeX symbols
    content = content.replace(/\\f(?=\\frac|frac|\{)/g, '');

    // 5. Fix \f\ (stray \f with backslash)
    content = content.replace(/\\f\\/g, '\\');

    // 6. Fix \f alone before letters
    content = content.replace(/\\f(?=[a-zA-Z])/g, '');

    // 7. Ensure \frac has single backslash
    content = content.replace(/(?<!\\)frac/g, '\\frac');
    content = content.replace(/\\\\frac/g, '\\frac');

    // 8. Ensure \text has single backslash
    content = content.replace(/(?<!\\)text(?=\{|\s)/g, '\\text');
    content = content.replace(/\\\\text/g, '\\text');

    // 9. Clean up any double backslashes in math blocks
    content = content.replace(/\\\\(mathbf|emptyset|mathbb|implies|iff|frac|times|quad|neq|cdot|leqslant|geqslant)/g, '\\$1');

    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Purged corrupted LaTeX in ${file}`);
});
