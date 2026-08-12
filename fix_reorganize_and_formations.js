const fs = require('fs');
const path = require('path');

const scriptPath = path.join(__dirname, 'reorganize_all_formations.js');
let content = fs.readFileSync(scriptPath, 'utf8');

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

// Fix Maths paths
mathsFolders.forEach(folder => {
    const wrongPattern = new RegExp(`"ressources/seconde/${folder}/`, 'g');
    const correctPath = `"ressources/seconde/maths/${folder}/`;
    content = content.replace(wrongPattern, correctPath);
});

// Fix Sciences paths
sciencesFolders.forEach(folder => {
    const wrongPattern = new RegExp(`"ressources/seconde/${folder}/`, 'g');
    const correctPath = `"ressources/seconde/sciences/${folder}/`;
    content = content.replace(wrongPattern, correctPath);
});

fs.writeFileSync(scriptPath, content, 'utf8');
console.log('Fixed paths in reorganize_all_formations.js');
