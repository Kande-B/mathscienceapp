const fs = require('fs');
const path = require('path');

const jsonPath = path.join(__dirname, '../data/formations.json');
const data = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));

const formation = data.find(f => f.id === '3pm');
if (!formation) {
  console.error('Formation 3pm non trouvée !');
  process.exit(1);
}

// Trouver la séquence types brevet
const seq = formation.resources.maths.find(s => s.id === 'seq_maths_standalone_7');
if (!seq) {
  console.error('Séquence types brevet non trouvée.');
  process.exit(1);
}

console.log('Séquence trouvée :', seq.id, '-', seq.title);

const hasLocalCours = seq.items.some(i => i.url && i.url.includes('types-brevet/cours'));
const hasLocalTD    = seq.items.some(i => i.url && i.url.includes('types-brevet/td'));

if (hasLocalCours && hasLocalTD) {
  console.log('\nLes items locaux existent déjà, rien à faire.');
  process.exit(0);
}

let maxId = 0;
['maths', 'sciences'].forEach(matiere => {
  if (formation.resources[matiere]) {
    formation.resources[matiere].forEach(s => {
      s.items.forEach(item => {
        if (typeof item.id === 'number' && item.id > maxId) maxId = item.id;
      });
    });
  }
});

const today = new Date().toLocaleDateString('fr-FR');
const newItems = [];

if (!hasLocalCours) {
  newItems.push({
    id: maxId + 1,
    titre: "Méthodologie - DNB Pro",
    type: "Cours",
    desc: "Conseils, format de l'épreuve, attentes des correcteurs, et grands thèmes à réviser pour le Brevet.",
    url: "ressources/3pm/types-brevet/cours.html",
    date: today,
    category: "cours"
  });
}

if (!hasLocalTD) {
  newItems.push({
    id: maxId + 2,
    titre: "Sujet Blanc - DNB Pro",
    type: "Exercices",
    desc: "Sujet d'entraînement type Brevet : Proportionnalité, Géométrie, Aires, Équations et Conversions.",
    url: "ressources/3pm/types-brevet/td.html",
    date: today,
    category: "exercices"
  });
}

// On enlève le vieux item avec url "#"
seq.items = seq.items.filter(i => i.url !== "#");

// On ajoute les nouveaux
seq.items.push(...newItems);

console.log('\nItems après mise à jour :');
seq.items.forEach((item, i) => console.log(` ${i+1}.`, item.titre, '-', item.url));

fs.writeFileSync(jsonPath, JSON.stringify(data, null, 2), 'utf8');
console.log('\n✅ formations.json mis à jour avec succès !');
