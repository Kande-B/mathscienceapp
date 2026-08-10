const fs = require('fs');
const path = require('path');

const base3pm = 'ressources/3pm';
const mathsDir = path.join(base3pm, 'maths');

if (!fs.existsSync(mathsDir)) {
    fs.mkdirSync(mathsDir, { recursive: true });
}

const mathsFolders = [
    'agrandissement-reduction',
    'aires-volumes-conversions',
    'algorithmique',
    'calcul-litteral',
    'cours',
    'divisibilite-nombres-premiers',
    'equations',
    'fonctions-affines',
    'operations-nombres-rationnels',
    'probabilites',
    'proportionnalite',
    'puissances',
    'pythagore',
    'reperage',
    'statistiques-1-variable',
    'thales',
    'trigonometrie',
    'types-brevet'
];

mathsFolders.forEach(folder => {
    const src = path.join(base3pm, folder);
    const dest = path.join(mathsDir, folder);
    if (fs.existsSync(src)) {
        fs.cpSync(src, dest, { recursive: true });
        fs.rmSync(src, { recursive: true, force: true });
        console.log(`Copied & removed ${src} -> ${dest}`);
    }
});

// Update data/formations.json
const formationsPath = 'data/formations.json';
const formations = JSON.parse(fs.readFileSync(formationsPath, 'utf8'));

const f3pm = formations.find(f => f.id === '3pm');
if (f3pm && f3pm.resources && f3pm.resources.maths) {
    f3pm.resources.maths.forEach(seq => {
        if (seq.items) {
            seq.items.forEach(item => {
                if (item.url && item.url.startsWith('ressources/3pm/') && !item.url.startsWith('ressources/3pm/maths/') && !item.url.startsWith('ressources/3pm/sciences/')) {
                    item.url = item.url.replace('ressources/3pm/', 'ressources/3pm/maths/');
                }
            });
        }
    });
}

fs.writeFileSync(formationsPath, JSON.stringify(formations, null, 2), 'utf8');
console.log('Updated data/formations.json URLs for 3PM Maths');

// Update progression_maths.html if there are any links to ressources/3pm/cours/
const progMaths = path.join(base3pm, 'progression_maths.html');
if (fs.existsSync(progMaths)) {
    let content = fs.readFileSync(progMaths, 'utf8');
    if (content.includes('ressources/3pm/cours/')) {
        content = content.replaceAll('ressources/3pm/cours/', 'ressources/3pm/maths/cours/');
        fs.writeFileSync(progMaths, content, 'utf8');
        console.log('Updated progression_maths.html links');
    }
}
