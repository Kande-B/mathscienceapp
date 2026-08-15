const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '..', 'data', 'formations.json');
let data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

const newSeq = {
  "id": "seq_1pro_s_optique_lentilles",
  "title": "Séquence : Optique & Lentilles Minces Convergentes",
  "items": [
    {
      "id": "1pro_s_opt_lent_auto",
      "titre": "Automatismes - Vergence, 3 Rayons & Grandissement",
      "type": "Automatismes",
      "desc": "Rituel 5-10 min (Flashcards 3D, V=1/f', 3 rayons remarquables, gamma=A'B'/AB et QCM 20 pts).",
      "url": "ressources/premiere/sciences/optique-lentilles/automatismes.html",
      "date": "14/08/2026",
      "category": "automatismes"
    },
    {
      "id": "1pro_s_opt_lent_act",
      "titre": "Activités - Optique & Lentilles",
      "type": "Activités",
      "desc": "Investigations pro (Caméra de contrôle SN, verres correcteurs presbytie, vidéoprojecteur d'atelier).",
      "url": "ressources/premiere/sciences/optique-lentilles/activites.html",
      "date": "14/08/2026",
      "category": "activites"
    },
    {
      "id": "1pro_s_opt_lent_cours",
      "titre": "Cours - Optique & Lentilles Minces",
      "type": "Cours",
      "desc": "Synthèse de cours officielle (Foyers F/F', 3 rayons, formules de conjugaison/grandissement, œil).",
      "url": "ressources/premiere/sciences/optique-lentilles/cours.html",
      "date": "14/08/2026",
      "category": "cours"
    },
    {
      "id": "1pro_s_opt_lent_td",
      "titre": "TD - Optique & Lentilles",
      "type": "Exercices",
      "desc": "8 Exercices gradués avec tracés optiques et corrigés rédigés pas à pas.",
      "url": "ressources/premiere/sciences/optique-lentilles/td.html",
      "date": "14/08/2026",
      "category": "exercices"
    },
    {
      "id": "1pro_s_opt_lent_tice",
      "titre": "TP Hybride - Paillasse Réelle & Banc Optique Virtuel",
      "type": "TP Informatique",
      "desc": "Manipulations au labo (banc optique, autocollimation) + Simulateur Canvas 3 rayons temps réel.",
      "url": "ressources/premiere/sciences/optique-lentilles/tice.html",
      "date": "14/08/2026",
      "category": "tice"
    },
    {
      "id": "1pro_s_opt_lent_eval",
      "titre": "Évaluation CCF - Optique & Lentilles",
      "type": "Évaluation CCF",
      "desc": "Sujet type CCF sur 20 pts avec grille officielle 5 compétences et corrigé enseignant.",
      "url": "ressources/premiere/sciences/optique-lentilles/eval.html",
      "date": "14/08/2026",
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
