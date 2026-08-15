const fs = require('fs');
const path = require('path');

const secondeSciencesDir = path.join(__dirname, '..', 'ressources', 'seconde', 'sciences');

// List of 10 official Seconde Pro Sciences sequences
const sequences = [
  {
    dir: 'securite-produits-chimiques',
    id: 'seq_2pro_s_securite_produits_chimiques',
    title: 'Séquence 1 : Sécurité des Produits Chimiques (T1.1)',
    period: 'Période 1 - Chimie'
  },
  {
    dir: 'solutions-acides-bases-ph',
    id: 'seq_2pro_s_solutions_acides_bases_ph',
    title: 'Séquence 2 : Solutions Aqueuses, Acides, Bases et pH (T1.2)',
    period: 'Période 1 - Chimie'
  },
  {
    dir: 'mouvement-vitesse',
    id: 'seq_2pro_s_mouvement_vitesse',
    title: 'Séquence 3 : Mouvement et Vitesse (T2.1)',
    period: 'Période 2 - Mécanique'
  },
  {
    dir: 'poids-masse-forces',
    id: 'seq_2pro_s_poids_masse_forces',
    title: 'Séquence 4 : Poids, Masse et Forces (T2.2)',
    period: 'Période 2 - Mécanique'
  },
  {
    dir: 'equilibre-solide-moment',
    id: 'seq_2pro_s_equilibre_solide_moment',
    title: "Séquence 5 : Équilibre d'un Solide & Moment d'une Force (T2.3)",
    period: 'Période 3 - Mécanique'
  },
  {
    dir: 'electricite-circuit-continu',
    id: 'seq_2pro_s_electricite_circuit_continu',
    title: 'Séquence 6 : Circuits Électriques en Courant Continu (T3.1)',
    period: 'Période 4 - Électricité'
  },
  {
    dir: 'puissance-energie-electrique',
    id: 'seq_2pro_s_puissance_energie_electrique',
    title: 'Séquence 7 : Puissance et Énergie Électrique (T3.2)',
    period: 'Période 4 - Électricité'
  },
  {
    dir: 'acoustique-bruit',
    id: 'seq_2pro_s_acoustique_bruit',
    title: 'Séquence 8 : Acoustique, Signaux Sonores et Bruit (T4.1)',
    period: 'Période 5 - Signaux & Ondes'
  },
  {
    dir: 'optique-propagation-reflexion',
    id: 'seq_2pro_s_optique_propagation_reflexion',
    title: 'Séquence 9 : Optique - Propagation Rectiligne et Réflexion (T4.2)',
    period: 'Période 5 - Signaux & Ondes'
  },
  {
    dir: 'thermique-transferts-isolants',
    id: 'seq_2pro_s_thermique_transferts_isolants',
    title: 'Séquence 10 : Transferts Thermiques et Isolation (T4.3)',
    period: 'Période 5 - Thermique'
  }
];

// Remove old compacted directory acoustique-optique-thermique if present
const oldCompactedDir = path.join(secondeSciencesDir, 'acoustique-optique-thermique');
if (fs.existsSync(oldCompactedDir)) {
  fs.rmSync(oldCompactedDir, { recursive: true, force: true });
  console.log('🗑️ Ancien dossier compacté "acoustique-optique-thermique" supprimé.');
}

// Prepare 10 clean directories with .gitkeep
sequences.forEach(seq => {
  const dirPath = path.join(secondeSciencesDir, seq.dir);
  if (fs.existsSync(dirPath)) {
    // Remove existing files inside to leave clean empty dir
    const files = fs.readdirSync(dirPath);
    files.forEach(f => {
      fs.unlinkSync(path.join(dirPath, f));
    });
  } else {
    fs.mkdirSync(dirPath, { recursive: true });
  }
  fs.writeFileSync(path.join(dirPath, '.gitkeep'), `# Dossier séquence ${seq.dir}\n`, 'utf8');
  console.log(`📁 Dossier créé/nettoyé : ${seq.dir}/.gitkeep`);
});

// Update data/formations.json for Seconde Pro classes
const dataPath = path.join(__dirname, '..', 'data', 'formations.json');
let data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

// Generate json items for each sequence
function buildSequenceItems(seq) {
  const base = `ressources/seconde/sciences/${seq.dir}`;
  return {
    "id": seq.id,
    "title": seq.title,
    "period": seq.period,
    "items": [
      {
        "id": `${seq.id}_auto`,
        "titre": `Automatismes - ${seq.title}`,
        "type": "Automatismes",
        "desc": "Rituel 5-10 min (Flashcards 3D & QCM chrono 20 pts).",
        "url": `${base}/automatismes.html`,
        "category": "automatismes"
      },
      {
        "id": `${seq.id}_act`,
        "titre": `Activités - ${seq.title}`,
        "type": "Activités",
        "desc": "Investigations et situations professionnelles contextualisées.",
        "url": `${base}/activites.html`,
        "category": "activites"
      },
      {
        "id": `${seq.id}_cours`,
        "titre": `Cours - ${seq.title}`,
        "type": "Cours",
        "desc": "Synthèse de cours officielle illustrée avec formulaire A4.",
        "url": `${base}/cours.html`,
        "category": "cours"
      },
      {
        "id": `${seq.id}_td`,
        "titre": `TD - ${seq.title}`,
        "type": "Exercices",
        "desc": "Exercices d'entraînement gradués avec corrigés rédigés pas à pas.",
        "url": `${base}/td.html`,
        "category": "exercices"
      },
      {
        "id": `${seq.id}_tice`,
        "titre": `TP Hybride - Paillasse Réelle & Simulateur Virtuel`,
        "type": "TP Informatique",
        "desc": "Manipulations au labo (matériel réel) + Simulateur numérique HTML5 Canvas.",
        "url": `${base}/tice.html`,
        "category": "tice"
      },
      {
        "id": `${seq.id}_eval`,
        "titre": `Évaluation CCF - ${seq.title}`,
        "type": "Évaluation CCF",
        "desc": "Sujet type CCF sur 20 pts avec grille officielle 5 compétences et corrigé enseignant.",
        "url": `${base}/eval.html`,
        "category": "ccf"
      }
    ]
  };
}

const newSciencesSequences = sequences.map(buildSequenceItems);

let updatedCount = 0;
data.forEach(formation => {
  if (formation.niveau === 'seconde' || formation.id.match(/^2[a-z]+/)) {
    if (!formation.resources) formation.resources = {};
    formation.resources.sciences = newSciencesSequences;
    updatedCount++;
  }
});

fs.writeFileSync(dataPath, JSON.stringify(data, null, 2), 'utf8');
console.log(`✅ ${updatedCount} formations de Seconde Pro ont été mises à jour dans data/formations.json.`);
