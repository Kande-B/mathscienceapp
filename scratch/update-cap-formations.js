const fs = require('fs');
const path = require('path');

const file = 'c:/Users/pc/Maths-Sciences-App/data/formations.json';
const data = JSON.parse(fs.readFileSync(file, 'utf8'));

const capSeqs = [
    { id: 'seq_cap_s_1', title: 'Séquence 1 : Sécurité des produits chimiques', folder: 'securite-produits-chimiques' },
    { id: 'seq_cap_s_2', title: 'Séquence 2 : Solutions aqueuses, acides & pH', folder: 'solutions-acides-bases-ph' },
    { id: 'seq_cap_s_3', title: 'Séquence 3 : Mouvement & Vitesse Moyenne', folder: 'mouvement-vitesse' },
    { id: 'seq_cap_s_4', title: 'Séquence 4 : Poids, Masse & Forces', folder: 'poids-masse-forces' },
    { id: 'seq_cap_s_5', title: "Séquence 5 : Équilibre d'un Solide", folder: 'equilibre-solide' },
    { id: 'seq_cap_s_6', title: 'Séquence 6 : Électricité : Tension & Intensité', folder: 'electricite-tension-intensite' },
    { id: 'seq_cap_s_7', title: 'Séquence 7 : Puissance & Énergie Électrique', folder: 'puissance-energie-electrique' },
    { id: 'seq_cap_s_8', title: 'Séquence 8 : Acoustique, Bruit & Optique', folder: 'acoustique-bruit-optique' }
];

data.forEach(f => {
    if (f.id === 'cap1-rics' || f.id === 'cap2-rics') {
        f.resources.sciences = capSeqs.map((s, idx) => {
            const num = idx + 1;
            return {
                id: s.id,
                title: s.title,
                items: [
                    {
                        id: `cap_s${num}_auto`,
                        titre: `Automatismes - ${s.title.replace(/^Séquence \d+ : /, '')}`,
                        type: 'Automatismes',
                        desc: 'Rituel 5-10 min (6 flashcards 3D + QCM chrono sur 20 pts).',
                        url: `ressources/cap/sciences/${s.folder}/automatismes.html`,
                        date: '15/08/2026',
                        category: 'automatismes'
                    },
                    {
                        id: `cap_s${num}_act`,
                        titre: `Activités - ${s.title.replace(/^Séquence \d+ : /, '')}`,
                        type: 'Activités',
                        desc: 'Scénarios d\'investigation professionnelle CAP.',
                        url: `ressources/cap/sciences/${s.folder}/activites.html`,
                        date: '15/08/2026',
                        category: 'activites'
                    },
                    {
                        id: `cap_s${num}_cours`,
                        titre: `Cours - ${s.title.replace(/^Séquence \d+ : /, '')}`,
                        type: 'Cours',
                        desc: 'Synthèse de cours officielle et formulaire A4.',
                        url: `ressources/cap/sciences/${s.folder}/cours.html`,
                        date: '15/08/2026',
                        category: 'cours'
                    },
                    {
                        id: `cap_s${num}_td`,
                        titre: `TD - ${s.title.replace(/^Séquence \d+ : /, '')}`,
                        type: 'Exercices',
                        desc: '8 exercices gradués d\'application avec corrigés.',
                        url: `ressources/cap/sciences/${s.folder}/td.html`,
                        date: '15/08/2026',
                        category: 'exercices'
                    },
                    {
                        id: `cap_s${num}_tp`,
                        titre: `TP Hybride - ${s.title.replace(/^Séquence \d+ : /, '')}`,
                        type: 'TP Hybride Réel/Virtuel',
                        desc: 'TP Hybride Paillasse Réelle & Simulateur Virtuel Canvas 60 FPS avec signature Labo Maths Sciences.',
                        url: `ressources/cap/sciences/${s.folder}/tice.html`,
                        date: '15/08/2026',
                        category: 'tp'
                    },
                    {
                        id: `cap_s${num}_ccf`,
                        titre: `Évaluation CCF - ${s.title.replace(/^Séquence \d+ : /, '')}`,
                        type: 'Évaluation CCF',
                        desc: 'Sujet CCF Sciences CAP sur 20 pts avec grille 5 compétences.',
                        url: `ressources/cap/sciences/${s.folder}/eval.html`,
                        date: '15/08/2026',
                        category: 'ccf'
                    }
                ]
            };
        });
    }
});

fs.writeFileSync(file, JSON.stringify(data, null, 2), 'utf8');
console.log('formations.json updated successfully for CAP Sciences!');

// Also create placeholders for sequences 2 to 8 if not exist
const capDir = 'c:/Users/pc/Maths-Sciences-App/ressources/cap/sciences';
capSeqs.forEach(s => {
    const dir = path.join(capDir, s.folder);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    
    const files = ['automatismes.html', 'activites.html', 'cours.html', 'td.html', 'tice.html', 'eval.html'];
    files.forEach(f => {
        const filePath = path.join(dir, f);
        if (!fs.existsSync(filePath)) {
            fs.writeFileSync(filePath, '<!DOCTYPE html><html><head><meta charset="UTF-8"><title>En construction</title></head><body><h1>En construction</h1></body></html>', 'utf8');
        }
    });
});
console.log('Placeholders created for sequences 2-8!');
