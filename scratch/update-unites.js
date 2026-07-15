const fs = require('fs');
const path = require('path');

const jsonPath = path.join(__dirname, '../data/formations.json');
const data = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));

const formation = data.find(f => f.id === '3pm');
if (!formation) {
  console.error('Formation 3pm non trouvée !');
  process.exit(1);
}

// Trouver la séquence gestion unités
const seq = formation.resources.maths.find(s => s.id === 'seq_maths_standalone_6');
if (!seq) {
  console.error('Séquence unités non trouvée.');
  process.exit(1);
}

console.log('Séquence trouvée :', seq.id, '-', seq.title);

const hasLocalCours = seq.items.some(i => i.url && i.url.includes('gestion-unites/cours'));
const hasLocalTD    = seq.items.some(i => i.url && i.url.includes('gestion-unites/td'));

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
    titre: "Leçon - Gestion d'unités",
    type: "Cours",
    desc: "Conversions de longueurs, masses, aires, volumes, et gestion du temps avec les heures sexagésimales et décimales.",
    url: "ressources/3pm/gestion-unites/cours.html",
    date: today,
    category: "cours"
  });
}

if (!hasLocalTD) {
  newItems.push({
    id: maxId + 2,
    titre: "TD - Gestion d'unités",
    type: "Exercices",
    desc: "Fiche d'exercices à imprimer (4 niveaux) : conversions 1D, 2D, 3D, équivalence Litre/dm³, et calculs de salaire sur fiche de paie.",
    url: "ressources/3pm/gestion-unites/td.html",
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
