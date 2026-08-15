const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '..', 'data', 'formations.json');
let data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

const newSeq = {
  "id": "seq_1pro_s_electricite_alternatif",
  "title": "Séquence : Électricité - Courant Alternatif Sinusoïdal",
  "items": [
    {
      "id": "1pro_s_elec_alt_auto",
      "titre": "Automatismes - Tension & Courant Alternatif",
      "type": "Automatismes",
      "desc": "Rituel 5-10 min (Flashcards 3D, formules f=1/T, Umax=Ueff x sqrt(2) et QCM 20 pts).",
      "url": "ressources/premiere/sciences/electricite-alternatif/automatismes.html",
      "date": "13/08/2026",
      "category": "automatismes"
    },
    {
      "id": "1pro_s_elec_alt_act",
      "titre": "Activités - Courant Alternatif Sinusoïdal",
      "type": "Activités",
      "desc": "Investigations pro (Onduleur baie serveur, alternateur auto, poste TIG).",
      "url": "ressources/premiere/sciences/electricite-alternatif/activites.html",
      "date": "13/08/2026",
      "category": "activites"
    },
    {
      "id": "1pro_s_elec_alt_cours",
      "titre": "Cours - Courant Alternatif Sinusoïdal",
      "type": "Cours",
      "desc": "Synthèse de cours officielle (Umax, Ueff, T, f, réglages oscilloscope Sv/Sh, réseau 230V/50Hz et sécurité).",
      "url": "ressources/premiere/sciences/electricite-alternatif/cours.html",
      "date": "13/08/2026",
      "category": "cours"
    },
    {
      "id": "1pro_s_elec_alt_td",
      "titre": "TD - Courant Alternatif Sinusoïdal",
      "type": "Exercices",
      "desc": "8 Exercices gradués avec corrigés rédigés dépliables.",
      "url": "ressources/premiere/sciences/electricite-alternatif/td.html",
      "date": "13/08/2026",
      "category": "exercices"
    },
    {
      "id": "1pro_s_elec_alt_tice",
      "titre": "TP / Simulator - Oscilloscope Virtuel & GBF",
      "type": "TP Informatique",
      "desc": "Simulateur interactif d'oscilloscope et GBF en temps réel HTML5 Canvas.",
      "url": "ressources/premiere/sciences/electricite-alternatif/tice.html",
      "date": "13/08/2026",
      "category": "tice"
    },
    {
      "id": "1pro_s_elec_alt_eval",
      "titre": "Évaluation CCF - Électricité Alternatif",
      "type": "Évaluation CCF",
      "desc": "Sujet type CCF sur 20 pts avec grille officielle 5 compétences et corrigé enseignant.",
      "url": "ressources/premiere/sciences/electricite-alternatif/eval.html",
      "date": "13/08/2026",
      "category": "ccf"
    }
  ]
};

let count = 0;
data.forEach(formation => {
  if (formation.niveau === 'premiere' || formation.id.match(/^1[a-z]+/)) {
    if (!formation.resources) formation.resources = {};
    if (!formation.resources.sciences) formation.resources.sciences = [];

    // Remove old occurrence if exists
    formation.resources.sciences = formation.resources.sciences.filter(
      seq => seq.id !== newSeq.id
    );

    // Add sequence
    formation.resources.sciences.push(newSeq);
    count++;
  }
});

fs.writeFileSync(dataPath, JSON.stringify(data, null, 2), 'utf8');
console.log(`✅ Mise à jour réussie : ${count} formations de Première Pro ont été mises à jour dans formations.json.`);
