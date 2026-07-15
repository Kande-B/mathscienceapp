const fs = require('fs');
const path = require('path');

const jsonPath = path.join(__dirname, '../data/formations.json');
const data = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));

const formation = data.find(f => f.id === '3pm');
if (!formation) {
  console.error('Formation 3pm non trouvée !');
  process.exit(1);
}

// Trouver la séquence calcul littéral
const seq = formation.resources.maths.find(s => s.title && s.title.includes('litt'));
if (!seq) {
  console.error('Séquence calcul littéral non trouvée. Titres disponibles :');
  formation.resources.maths.forEach(s => console.log(' -', s.title));
  process.exit(1);
}

console.log('Séquence trouvée :', seq.id, '-', seq.title);
console.log('Items actuels :');
seq.items.forEach((item, i) => console.log(` ${i+1}.`, item.titre, '-', item.url));

// Vérifier si les items locaux existent déjà
const hasLocalCours = seq.items.some(i => i.url && i.url.includes('calcul-litteral/cours'));
const hasLocalTD    = seq.items.some(i => i.url && i.url.includes('calcul-litteral/td'));

if (hasLocalCours && hasLocalTD) {
  console.log('\nLes items locaux existent déjà, rien à faire.');
  process.exit(0);
}

// Trouver l'ID max dans toute la formation
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
console.log('\nID max trouvé :', maxId);

const today = new Date().toLocaleDateString('fr-FR');

// Préparer les nouveaux items à insérer en début (avant le cours interactif externe)
const newItems = [];

if (!hasLocalCours) {
  newItems.push({
    id: maxId + 1,
    titre: "Leçon - Calcul littéral et identités remarquables",
    type: "Cours",
    desc: "Rappels de calcul littéral, développement par distributivité, factorisation et les 3 identités remarquables avec exemples contextualisés métiers.",
    url: "ressources/3pm/calcul-litteral/cours.html",
    date: today,
    category: "cours"
  });
}

if (!hasLocalTD) {
  newItems.push({
    id: maxId + 2,
    titre: "TD - Calcul littéral et identités remarquables",
    type: "Exercices",
    desc: "Fiche d'exercices à imprimer (4 niveaux) : substitution, développement-réduction, factorisation et tâche complexe (dalle béton).",
    url: "ressources/3pm/calcul-litteral/td.html",
    date: today,
    category: "exercices"
  });
}

// Insérer les nouveaux items avant l'item externe (cours interactif)
const externalItem = seq.items.find(i => i.url && i.url.startsWith('http'));
const externalIdx  = seq.items.indexOf(externalItem);

if (externalIdx >= 0) {
  seq.items.splice(externalIdx, 0, ...newItems);
} else {
  seq.items.push(...newItems);
}

console.log('\nItems après mise à jour :');
seq.items.forEach((item, i) => console.log(` ${i+1}.`, item.titre, '-', item.url));

// Sauvegarder
fs.writeFileSync(jsonPath, JSON.stringify(data, null, 2), 'utf8');
console.log('\n✅ formations.json mis à jour avec succès !');
