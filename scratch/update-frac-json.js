const fs = require('fs');
const path = require('path');
const dataPath = path.join(__dirname, '..', 'data', 'formations.json');
let data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

const classe = data.find(f => f.id === '3pm');
const sequence = classe.resources.maths[4]; // Fraction irréductible, PGCD
sequence.items = [
    {
        "id": Date.now() + 1,
        "titre": "Leçon - Fraction irréductible et PGCD",
        "type": "Cours",
        "desc": "Critères de divisibilité et recherche du PGCD.",
        "url": "ressources/3pm/fraction-pgcd/cours.html",
        "date": "15/07/2026",
        "category": "cours"
    },
    {
        "id": Date.now() + 2,
        "titre": "TD - Fraction irréductible",
        "type": "Exercices",
        "desc": "Exercices sur le PGCD (4 niveaux).",
        "url": "ressources/3pm/fraction-pgcd/td.html",
        "date": "15/07/2026",
        "category": "exercices"
    },
    {
        "id": Date.now() + 3,
        "titre": "TP - Électricité (Résistances)",
        "type": "TP",
        "desc": "Calcul de résistances en dérivation.",
        "url": "ressources/3pm/fraction-pgcd/tp.html",
        "date": "15/07/2026",
        "category": "tp"
    }
];

fs.writeFileSync(dataPath, JSON.stringify(data, null, 2), 'utf8');
console.log("Updated JSON for Fraction PGCD");
