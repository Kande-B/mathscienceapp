const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '..', 'data', 'formations.json');
let data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

// Find 3pm
const pm3 = data.find(f => f.id === '3pm');

if (pm3 && pm3.resources && pm3.resources.maths) {
    // Find sequence
    const seqIndex = pm3.resources.maths.findIndex(s => s.title.includes('Proportionnalité'));
    
    if (seqIndex !== -1) {
        pm3.resources.maths[seqIndex].items = [
            {
                "id": 1,
                "titre": "Leçon - Proportionnalité et pourcentages",
                "type": "Cours",
                "desc": "Définitions, produit en croix et calculs de pourcentages avec exemples concrets.",
                "url": "ressources/3pm/proportionnalite/cours.html",
                "date": "13/07/2026",
                "category": "cours"
            },
            {
                "id": 2,
                "titre": "TD 1 - Proportionnalité",
                "type": "Exercices",
                "desc": "Fiche d'exercices à imprimer (3 niveaux de difficulté).",
                "url": "ressources/3pm/proportionnalite/td.html",
                "date": "13/07/2026",
                "category": "exercices"
            },
            {
                "id": 3,
                "titre": "TP - Préparation d'un chantier",
                "type": "TP",
                "desc": "Travaux pratiques : Calcul des quantités de matériaux pour couler du béton.",
                "url": "ressources/3pm/proportionnalite/tp.html",
                "date": "13/07/2026",
                "category": "tp"
            },
            {
                "id": 4,
                "titre": "Module de révision en ligne",
                "type": "Cours interactif",
                "desc": "Site pédagogique interactif avec exemples du quotidien.",
                "url": "https://kande-b.github.io/3pm-proportionnalite",
                "date": "2025-09-28",
                "category": "cours"
            }
        ];
        
        fs.writeFileSync(dataPath, JSON.stringify(data, null, 2), 'utf8');
        console.log("Mise à jour réussie de formations.json !");
    } else {
        console.log("Séquence introuvable.");
    }
} else {
    console.log("Classe 3pm introuvable.");
}
