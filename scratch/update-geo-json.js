const fs = require('fs');
const path = require('path');
const dataPath = path.join(__dirname, '..', 'data', 'formations.json');
let data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

const classe = data.find(f => f.id === '3pm');
const sequence = classe.resources.maths[1]; // Géométrie plane et aires
sequence.items = [
    {
        "id": Date.now() + 1,
        "titre": "Leçon - Géométrie plane et aires",
        "type": "Cours",
        "desc": "Cours structuré avec définitions, propriétés et méthodes.",
        "url": "ressources/3pm/gometrie-plane-et-aires/cours.html",
        "date": "14/07/2026",
        "category": "cours"
    },
    {
        "id": Date.now() + 2,
        "titre": "TD Complet - Géométrie plane et aires",
        "type": "Exercices",
        "desc": "Fiche d'exercices à imprimer (4 niveaux progressifs).",
        "url": "ressources/3pm/gometrie-plane-et-aires/td.html",
        "date": "14/07/2026",
        "category": "exercices"
    },
    {
        "id": Date.now() + 3,
        "titre": "TP - Application Pro",
        "type": "TP",
        "desc": "Mise en situation professionnelle.",
        "url": "ressources/3pm/gometrie-plane-et-aires/tp.html",
        "date": "14/07/2026",
        "category": "tp"
    }
];

fs.writeFileSync(dataPath, JSON.stringify(data, null, 2), 'utf8');
console.log("Updated JSON for Géométrie");
