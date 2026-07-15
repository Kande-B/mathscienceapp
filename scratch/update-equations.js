const fs = require('fs');
const path = require('path');

const jsonPath = path.join(__dirname, '../data/formations.json');
const data = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));

const formation = data.find(f => f.id === '3pm');
if (!formation) {
  console.error('Formation 3pm non trouvée !');
  process.exit(1);
}

// Trouver la séquence équations
const seq = formation.resources.maths.find(s => s.id === 'seq_maths_standalone_4');
if (!seq) {
  console.error('Séquence équation non trouvée.');
  process.exit(1);
}

console.log('Séquence trouvée :', seq.id, '-', seq.title);

const hasLocalCours = seq.items.some(i => i.url && i.url.includes('equations/cours'));
const hasLocalTD    = seq.items.some(i => i.url && i.url.includes('equations/td'));

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
    titre: "Leçon - Équation du premier degré",
    type: "Cours",
    desc: "Principe de la balance, méthodes de résolution par étapes, et mise en équation d'un problème professionnel.",
    url: "ressources/3pm/equations/cours.html",
    date: today,
    category: "cours"
  });
}

if (!hasLocalTD) {
  newItems.push({
    id: maxId + 2,
    titre: "TD - Équation du premier degré",
    type: "Exercices",
    desc: "Fiche d'exercices à imprimer (4 niveaux) : équations simples, classiques, inconnues des deux côtés, et problèmes métier.",
    url: "ressources/3pm/equations/td.html",
    date: today,
    category: "exercices"
  });
}

const externalItem = seq.items.find(i => i.url && i.url.startsWith('http'));
const externalIdx  = seq.items.indexOf(externalItem);

if (externalIdx >= 0) {
  seq.items.splice(externalIdx, 0, ...newItems);
} else {
  seq.items.push(...newItems);
}

console.log('\nItems après mise à jour :');
seq.items.forEach((item, i) => console.log(` ${i+1}.`, item.titre, '-', item.url));

fs.writeFileSync(jsonPath, JSON.stringify(data, null, 2), 'utf8');
console.log('\n✅ formations.json mis à jour avec succès !');
