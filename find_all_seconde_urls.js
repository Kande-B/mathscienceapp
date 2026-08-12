const fs = require('fs');
const path = require('path');

const rootDir = __dirname;
let brokenLinks = [];
let totalLinksChecked = 0;

// Check data/formations.json
const formationsPath = path.join(rootDir, 'data', 'formations.json');
if (fs.existsSync(formationsPath)) {
    const formations = JSON.parse(fs.readFileSync(formationsPath, 'utf8'));
    formations.forEach(f => {
        ['maths', 'sciences'].forEach(domain => {
            const seqs = f.resources && f.resources[domain] ? f.resources[domain] : [];
            seqs.forEach(seq => {
                const items = seq.items || [];
                items.forEach(item => {
                    if (item.url) {
                        totalLinksChecked++;
                        const fullPath = path.join(rootDir, item.url.replace(/\//g, path.sep));
                        if (!fs.existsSync(fullPath)) {
                            brokenLinks.push({ formation: f.id, title: item.titre, url: item.url });
                        }
                    }
                });
            });
        });
    });
}

console.log(`Checked ${totalLinksChecked} links in data/formations.json.`);
console.log(`Found ${brokenLinks.length} broken links!`);
if (brokenLinks.length > 0) {
    console.log('Sample broken links:', brokenLinks.slice(0, 10));
}
