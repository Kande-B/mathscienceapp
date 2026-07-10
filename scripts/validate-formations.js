#!/usr/bin/env node
/**
 * Script de validation du fichier data/formations.json
 * 
 * Usage :
 *   node scripts/validate-formations.js
 */

const fs = require('fs');
const path = require('path');

const DATA_PATH = path.join(__dirname, '..', 'data', 'formations.json');

console.log('🔍 Validation de data/formations.json...\n');

let data;
try {
  const raw = fs.readFileSync(DATA_PATH, 'utf-8');
  data = JSON.parse(raw);
} catch (e) {
  console.error('❌ Impossible de lire ou parser le fichier JSON');
  console.error(e.message);
  process.exit(1);
}

if (!Array.isArray(data)) {
  console.error('❌ Le fichier doit contenir un tableau de formations');
  process.exit(1);
}

let errors = 0;
const ids = new Set();

data.forEach((f, index) => {
  const prefix = `[#${index}] ${f.short || f.id || 'FORMATION SANS NOM'}`;

  if (!f.id) {
    console.error(`${prefix} → id manquant`);
    errors++;
  } else if (ids.has(f.id)) {
    console.error(`${prefix} → id en double : ${f.id}`);
    errors++;
  } else {
    ids.add(f.id);
  }

  if (!f.short) {
    console.error(`${prefix} → champ "short" manquant`);
    errors++;
  }
  if (!f.niveau) {
    console.error(`${prefix} → champ "niveau" manquant`);
    errors++;
  }
  if (!f.filiere) {
    console.error(`${prefix} → champ "filiere" manquant`);
    errors++;
  }
  if (!f.couleur) {
    console.error(`${prefix} → champ "couleur" manquant`);
    errors++;
  }

  // Vérifie la structure resources
  if (!f.resources) {
    console.error(`${prefix} → objet "resources" manquant`);
    errors++;
  }
});

console.log(`\n✅ Validation terminée : ${data.length} formations analysées`);
if (errors === 0) {
  console.log('🎉 Aucune erreur détectée. Le fichier est valide !');
  process.exit(0);
} else {
  console.log(`❌ ${errors} erreur(s) détectée(s).`);
  process.exit(1);
}
