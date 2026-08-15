const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '..', 'data', 'formations.json');
let data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

const newSeq = {
  "id": "seq_1pro_s_thermique_isolation",
  "title": "Séquence : Thermique & Isolation Thermique",
  "items": [
    {
      "id": "1pro_s_thm_iso_auto",
      "titre": "Automatismes - Transferts, Chaleur, Résistance R & Flux",
      "type": "Automatismes",
      "desc": "Rituel 5-10 min (Flashcards 3D, Q=mcΔT, R=e/λ, Φ=SΔT/R et QCM 20 pts).",
      "url": "ressources/premiere/sciences/thermique-isolation/automatismes.html",
      "date": "14/08/2026",
      "category": "automatismes"
    },
    {
      "id": "1pro_s_thm_iso_act",
      "titre": "Activités - Thermique & Isolation",
      "type": "Activités",
      "desc": "Investigations pro (Audit DPE BTP, refroidissement moteur MVM, calorifugeage cuve TCI).",
      "url": "ressources/premiere/sciences/thermique-isolation/activites.html",
      "date": "14/08/2026",
      "category": "activites"
    },
    {
      "id": "1pro_s_thm_iso_cours",
      "titre": "Cours - Thermique & Isolation",
      "type": "Cours",
      "desc": "Synthèse de cours officielle (3 modes de transfert, Q=mcΔT, résistance multicouche, flux et kWh).",
      "url": "ressources/premiere/sciences/thermique-isolation/cours.html",
      "date": "14/08/2026",
      "category": "cours"
    },
    {
      "id": "1pro_s_thm_iso_td",
      "titre": "TD - Thermique & Isolation",
      "type": "Exercices",
      "desc": "8 Exercices gradués avec bilans thermiques et corrigés rédigés pas à pas.",
      "url": "ressources/premiere/sciences/thermique-isolation/td.html",
      "date": "14/08/2026",
      "category": "exercices"
    },
    {
      "id": "1pro_s_thm_iso_tice",
      "titre": "TP Hybride - Paillasse Réelle & Profil Température Virtuel",
      "type": "TP Informatique",
      "desc": "Manipulations au labo (calorimétrie, isolants) + Simulateur Canvas T(x) mur multicouche.",
      "url": "ressources/premiere/sciences/thermique-isolation/tice.html",
      "date": "14/08/2026",
      "category": "tice"
    },
    {
      "id": "1pro_s_thm_iso_eval",
      "titre": "Évaluation CCF - Thermique & Isolation",
      "type": "Évaluation CCF",
      "desc": "Sujet type CCF sur 20 pts avec grille officielle 5 compétences et corrigé enseignant.",
      "url": "ressources/premiere/sciences/thermique-isolation/eval.html",
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
