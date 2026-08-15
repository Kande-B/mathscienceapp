const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '..', 'data', 'formations.json');
let data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

const newSeq = {
  "id": "seq_1pro_s_mecanique_energie",
  "title": "Séquence : Mécanique & Énergie",
  "items": [
    {
      "id": "1pro_s_mec_eng_auto",
      "titre": "Automatismes - Énergie Cinétique, Potentielle & Travail",
      "type": "Automatismes",
      "desc": "Rituel 5-10 min (Flashcards 3D, formules Ec=1/2mv², Ep=mgh, W=Fd, conversions km/h et QCM 20 pts).",
      "url": "ressources/premiere/sciences/mecanique-energie/automatismes.html",
      "date": "14/08/2026",
      "category": "automatismes"
    },
    {
      "id": "1pro_s_mec_eng_act",
      "titre": "Activités - Mécanique & Énergie",
      "type": "Activités",
      "desc": "Investigations pro (Sécurité routière MVM, monte-charge MELEC/BTP, crash-test rampe TCI).",
      "url": "ressources/premiere/sciences/mecanique-energie/activites.html",
      "date": "14/08/2026",
      "category": "activites"
    },
    {
      "id": "1pro_s_mec_eng_cours",
      "titre": "Cours - Mécanique & Énergie",
      "type": "Cours",
      "desc": "Synthèse de cours officielle (Travail W, Ec, Ep, conservation Em, frottements et puissance P).",
      "url": "ressources/premiere/sciences/mecanique-energie/cours.html",
      "date": "14/08/2026",
      "category": "cours"
    },
    {
      "id": "1pro_s_mec_eng_td",
      "titre": "TD - Mécanique & Énergie",
      "type": "Exercices",
      "desc": "8 Exercices gradués avec corrigés rédigés dépliables.",
      "url": "ressources/premiere/sciences/mecanique-energie/td.html",
      "date": "14/08/2026",
      "category": "exercices"
    },
    {
      "id": "1pro_s_mec_eng_tice",
      "titre": "TP Hybride - Paillasse Réelle & Rampe Virtuelle",
      "type": "TP Informatique",
      "desc": "Manipulations au labo (banc de dynamique, chronomètre photoélectrique) + Simulateur 3D Canvas.",
      "url": "ressources/premiere/sciences/mecanique-energie/tice.html",
      "date": "14/08/2026",
      "category": "tice"
    },
    {
      "id": "1pro_s_mec_eng_eval",
      "titre": "Évaluation CCF - Mécanique & Énergie",
      "type": "Évaluation CCF",
      "desc": "Sujet type CCF sur 20 pts avec grille officielle 5 compétences et corrigé enseignant.",
      "url": "ressources/premiere/sciences/mecanique-energie/eval.html",
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
