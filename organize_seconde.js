const fs = require('fs');
const path = require('path');

const baseSeconde = 'ressources/seconde';
const mathsDir = path.join(baseSeconde, 'maths');
const sciencesDir = path.join(baseSeconde, 'sciences');

if (!fs.existsSync(mathsDir)) fs.mkdirSync(mathsDir, { recursive: true });
if (!fs.existsSync(sciencesDir)) fs.mkdirSync(sciencesDir, { recursive: true });

const mathsFolders = [
    'statistiques-1-variable',
    'pourcentages-proportions',
    'equations-1er-degre',
    'fonctions-reference',
    'geometrie-plane-trigonometrie',
    'geometrie-espace-volumes',
    'vecteurs-plan',
    'probabilites-fluctuation'
];

const sciencesFolders = [
    'securite-produits-chimiques',
    'solutions-acides-bases-ph',
    'mouvement-vitesse',
    'poids-masse-forces',
    'equilibre-solide-moment',
    'electricite-circuit-continu',
    'puissance-energie-electrique',
    'acoustique-optique-thermique'
];

mathsFolders.forEach(folder => {
    const src = path.join(baseSeconde, folder);
    const dest = path.join(mathsDir, folder);
    if (fs.existsSync(src)) {
        fs.cpSync(src, dest, { recursive: true });
        fs.rmSync(src, { recursive: true, force: true });
        console.log(`Moved Maths: ${src} -> ${dest}`);
    }
});

sciencesFolders.forEach(folder => {
    const src = path.join(baseSeconde, folder);
    const dest = path.join(sciencesDir, folder);
    if (fs.existsSync(src)) {
        fs.cpSync(src, dest, { recursive: true });
        fs.rmSync(src, { recursive: true, force: true });
        console.log(`Moved Sciences: ${src} -> ${dest}`);
    }
});

// Update data/formations.json for all classes that point to ressources/seconde/
const formationsPath = 'data/formations.json';
const formations = JSON.parse(fs.readFileSync(formationsPath, 'utf8'));

formations.forEach(f => {
    ['maths', 'sciences'].forEach(domain => {
        const seqs = f.resources && f.resources[domain] ? f.resources[domain] : [];
        seqs.forEach(seq => {
            if (seq.items) {
                seq.items.forEach(item => {
                    if (item.url && item.url.startsWith('ressources/seconde/')) {
                        if (!item.url.startsWith('ressources/seconde/maths/') && !item.url.startsWith('ressources/seconde/sciences/')) {
                            // Determine whether it's maths or sciences
                            const isMaths = mathsFolders.some(mf => item.url.includes(`ressources/seconde/${mf}/`));
                            const isSciences = sciencesFolders.some(sf => item.url.includes(`ressources/seconde/${sf}/`));
                            if (isMaths) {
                                item.url = item.url.replace('ressources/seconde/', 'ressources/seconde/maths/');
                            } else if (isSciences) {
                                item.url = item.url.replace('ressources/seconde/', 'ressources/seconde/sciences/');
                            }
                        }
                    }
                });
            }
        });
    });
});

fs.writeFileSync(formationsPath, JSON.stringify(formations, null, 2), 'utf8');
console.log('Updated data/formations.json for Seconde Maths & Sciences URLs');
