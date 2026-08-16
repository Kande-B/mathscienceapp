const fs = require('fs');
const path = require('path');

const sequences = [
  {
    id: 'seq_term_s_1',
    folder: 'electricite-monophase',
    title: 'Séquence 1 : Régime Sinusoïdal Monophasé, Puissances & Incertitudes',
    periode: 'Période 1',
    desc: 'Mesures & incertitudes, signal alternatif sinusoïdal, valeurs efficaces, déphasage, puissances active/réactive/apparente et facteur de puissance.'
  },
  {
    id: 'seq_term_s_2',
    folder: 'electricite-triphase',
    title: 'Séquence 2 : Réseaux & Systèmes Triphasés Équilibrés',
    periode: 'Période 2',
    desc: 'Tensions simples et composées (U = V√3), couplages Étoile (Y) et Triangle (Δ), puissances triphasées et moteurs asynchrones (Spécial MELEC & Industrie).'
  },
  {
    id: 'seq_term_s_3',
    folder: 'thermique-transferts-isolation',
    title: 'Séquence 3 : Transferts Thermiques, Isolation & Bilan Énergétique',
    periode: 'Période 2',
    desc: 'Conduction, convection, rayonnement (Loi de Wien), résistance thermique (Rth), coefficient U, calorimétrie et déperditions de bâtiments/armoires.'
  },
  {
    id: 'seq_term_s_4',
    folder: 'mecanique-dynamique-energie',
    title: 'Séquence 4 : Cinématique, Dynamique & Énergie Mécanique',
    periode: 'Période 3',
    desc: 'Mouvement varié et rotation, principe fondamental (F = ma), travail d\'une force (W = F·AB), énergie cinétique/potentielle et puissance P = Cω.'
  },
  {
    id: 'seq_term_s_5',
    folder: 'chimie-solutions-ph-dosage',
    title: 'Séquence 5 : Solutions Aqueuses, Mesure du pH & Dosages Acido-Basiques',
    periode: 'Période 4',
    desc: 'Concentrations molaire/massique, produit ionique de l\'eau, pH = -log[H3O+], titrage acido-basique, saut de pH et neutralisation d\'effluents.'
  },
  {
    id: 'seq_term_s_6',
    folder: 'chimie-oxydoreduction-combustion',
    title: 'Séquence 6 : Oxydoréduction, Piles/Batteries & Combustion Industrielle',
    periode: 'Période 4',
    desc: 'Couples Redox, demi-équations, corrosion des métaux, accumulateurs Li-ion/Plomb, combustion des hydrocarbures, pouvoir calorifique PCI/PCS et sécurité gaz.'
  },
  {
    id: 'seq_term_s_7',
    folder: 'acoustique-bruit-protection',
    title: 'Séquence 7 : Acoustique Physique, Décibels & Protection en Atelier',
    periode: 'Période 5',
    desc: 'Niveau sonore en dB (L = 10 log(I/I0)), atténuation avec la distance (-6 dB), cumul de machines sonores, absorption et réglementation SST (80/85 dB).'
  },
  {
    id: 'seq_term_s_8',
    folder: 'optique-ondes-eclairagisme',
    title: 'Séquence 8 : Ondes Électromagnétiques, Fibre Optique & Éclairagisme',
    periode: 'Période 5',
    desc: 'Spectre électromagnétique (λ = c/f), réfraction de Snell-Descartes, réflexion totale et fibre optique, flux lumineux (lm), éclairement (lux) et efficacité LED.'
  }
];

const baseDir = path.join(__dirname, '..', 'ressources', 'terminale', 'sciences');

sequences.forEach(seq => {
  const seqDir = path.join(baseDir, seq.folder);
  if (!fs.existsSync(seqDir)) {
    fs.mkdirSync(seqDir, { recursive: true });
  }

  const files = [
    { name: 'automatismes.html', title: 'Automatismes', type: 'Automatismes', cat: 'automatismes' },
    { name: 'activites.html', title: 'Activités', type: 'Activités', cat: 'activites' },
    { name: 'cours.html', title: 'Cours', type: 'Cours', cat: 'cours' },
    { name: 'td.html', title: 'TD & Exercices', type: 'Exercices', cat: 'exercices' },
    { name: 'tp.html', title: 'TP Numérique', type: 'TP Informatique', cat: 'tp' },
    { name: 'bac.html', title: 'Vers le Bac Pro', type: 'Vers le Bac', cat: 'bac' }
  ];

  files.forEach(f => {
    const filePath = path.join(seqDir, f.name);
    if (!fs.existsSync(filePath)) {
      const content = `<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${f.title} - ${seq.title} (Terminale Bac Pro Sciences)</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-slate-50 text-slate-800 p-8 min-h-screen flex items-center justify-center">
  <div class="max-w-lg bg-white p-8 rounded-3xl border border-slate-200 shadow-xl text-center space-y-4">
    <span class="px-3 py-1 bg-amber-100 text-amber-800 text-xs font-extrabold rounded-full uppercase tracking-wider">En attente de construction pas à pas</span>
    <h1 class="text-2xl font-extrabold text-slate-900">${seq.title}</h1>
    <h2 class="text-lg font-bold text-amber-600">Module : ${f.title}</h2>
    <p class="text-slate-600 text-sm">Ce module sera rédigé en haute fidélité pédagogique lors de l'étape de construction pas à pas.</p>
  </div>
</body>
</html>`;
      fs.writeFileSync(filePath, content, 'utf8');
    }
  });
});

// Update data/formations.json
const jsonPath = path.join(__dirname, '..', 'data', 'formations.json');
const data = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
const termIds = ['tmvm', 'tmmev', 'tmp3d', 'tmelec', 'ttci'];

const newSciencesSequences = sequences.map(seq => ({
  id: seq.id,
  title: seq.title,
  periode: seq.periode,
  items: [
    {
      id: seq.id + '_auto',
      titre: 'Automatismes - ' + seq.title.split(' : ')[1],
      type: 'Automatismes',
      desc: 'Rituel Bac Pro (Flashcards 3D interactives + Challenge chrono 20 pts).',
      url: 'ressources/terminale/sciences/' + seq.folder + '/automatismes.html',
      date: '16/08/2026',
      category: 'automatismes'
    },
    {
      id: seq.id + '_act',
      titre: 'Activités - ' + seq.title.split(' : ')[1],
      type: 'Activités',
      desc: 'Démarche d\'investigation en contexte professionnel réel.',
      url: 'ressources/terminale/sciences/' + seq.folder + '/activites.html',
      date: '16/08/2026',
      category: 'activites'
    },
    {
      id: seq.id + '_cours',
      titre: 'Cours - ' + seq.title.split(' : ')[1],
      type: 'Cours',
      desc: 'Synthèse officielle BO 2020 avec formules et fiche méthode imprimable A4.',
      url: 'ressources/terminale/sciences/' + seq.folder + '/cours.html',
      date: '16/08/2026',
      category: 'cours'
    },
    {
      id: seq.id + '_td',
      titre: 'TD - ' + seq.title.split(' : ')[1],
      type: 'Exercices',
      desc: '8 exercices gradués préparant au Bac Pro avec corrigés rédigés pas à pas.',
      url: 'ressources/terminale/sciences/' + seq.folder + '/td.html',
      date: '16/08/2026',
      category: 'exercices'
    },
    {
      id: seq.id + '_tp',
      titre: 'TP Numérique - ' + seq.title.split(' : ')[1],
      type: 'TP Informatique',
      desc: 'TP Hybride NumWorks / EXAO + Simulateur Canvas 60 FPS signé Labo Maths Sciences.',
      url: 'ressources/terminale/sciences/' + seq.folder + '/tp.html',
      date: '16/08/2026',
      category: 'tp'
    },
    {
      id: seq.id + '_bac',
      titre: 'Vers le Bac Pro - ' + seq.title.split(' : ')[1],
      type: 'Vers le Bac',
      desc: 'Sujet officiel type Bac Pro (Partie 1 sans calculatrice 5 pts + Partie 2 Problème 15 pts) et grille des 5 compétences.',
      url: 'ressources/terminale/sciences/' + seq.folder + '/bac.html',
      date: '16/08/2026',
      category: 'bac'
    }
  ]
}));

termIds.forEach(id => {
  const f = data.find(x => x.id === id);
  if (f) {
    if (!f.resources) f.resources = {};
    f.resources.sciences = newSciencesSequences;
  }
});

fs.writeFileSync(jsonPath, JSON.stringify(data, null, 2), 'utf8');
console.log('Successfully initialized all 8 Sciences sequences for Terminale Bac Pro!');
