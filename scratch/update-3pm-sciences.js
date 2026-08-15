const fs = require('fs');
const path = require('path');

const formationsPath = path.join(__dirname, '..', 'data', 'formations.json');
const formations = JSON.parse(fs.readFileSync(formationsPath, 'utf8'));

const index = formations.findIndex(f => f.id === '3pm');
if (index === -1) {
    console.error("Formation 3pm non trouvée");
    process.exit(1);
}

const sequences = [
    {
        id: "seq_3pm_sci_1",
        title: "Séquence 1 : Constitution de la Matière & Modèle de l'Atome",
        periode: "Période 1",
        folder: "constitution-matiere-atomes",
        theme: "Matière & Atomes"
    },
    {
        id: "seq_3pm_sci_2",
        title: "Séquence 2 : Solutions Aqueuses, Ions & Mesure du pH",
        periode: "Période 1",
        folder: "solutions-aqueuses-ions-ph",
        theme: "Ions & pH"
    },
    {
        id: "seq_3pm_sci_3",
        title: "Séquence 3 : Mouvement, Trajectoire & Vitesse Moyenne",
        periode: "Période 2",
        folder: "mouvement-trajectoire-vitesse",
        theme: "Mouvement & Vitesse"
    },
    {
        id: "seq_3pm_sci_4",
        title: "Séquence 4 : Actions Mécaniques, Forces & Poids",
        periode: "Période 2",
        folder: "actions-forces-poids-masse",
        theme: "Forces & Poids"
    },
    {
        id: "seq_3pm_sci_5",
        title: "Séquence 5 : Circuits Électriques & Loi d'Ohm",
        periode: "Période 3",
        folder: "circuits-electriques-loi-ohm",
        theme: "Circuits & Loi d'Ohm"
    },
    {
        id: "seq_3pm_sci_6",
        title: "Séquence 6 : Puissance & Énergie Électrique",
        periode: "Période 3",
        folder: "puissance-energie-electrique",
        theme: "Puissance & Énergie"
    },
    {
        id: "seq_3pm_sci_7",
        title: "Séquence 7 : Sources, Formes & Conversions d'Énergie",
        periode: "Période 4",
        folder: "sources-conversions-energie",
        theme: "Conversions d'Énergie"
    },
    {
        id: "seq_3pm_sci_8",
        title: "Séquence 8 : Signaux Sonores, Optique & Ondes",
        periode: "Période 4",
        folder: "signaux-sonores-lumineux",
        theme: "Signaux & Optique"
    }
];

formations[index].resources.sciences = sequences.map((seq, i) => {
    const sNum = i + 1;
    return {
        id: seq.id,
        title: seq.title,
        periode: seq.periode,
        items: [
            {
                id: `3p_s${sNum}_sci_auto`,
                titre: `Automatismes - ${seq.theme}`,
                type: "Automatismes",
                desc: "Rituel 5-10 min (6 Flashcards 3D + Quiz chrono 20 pts).",
                url: `ressources/3pm/sciences/${seq.folder}/automatismes.html`,
                date: "09/08/2026",
                category: "automatismes"
            },
            {
                id: `3p_s${sNum}_sci_act`,
                titre: `Activités - ${seq.theme}`,
                type: "Activités",
                desc: "3 activités d'investigation contextualisées aux métiers.",
                url: `ressources/3pm/sciences/${seq.folder}/activites.html`,
                date: "09/08/2026",
                category: "activites"
            },
            {
                id: `3p_s${sNum}_sci_cours`,
                titre: `Cours - ${seq.theme}`,
                type: "Cours",
                desc: "Synthèse de cours officielle Cycle 4 et Fiche Brevet A4.",
                url: `ressources/3pm/sciences/${seq.folder}/cours.html`,
                date: "09/08/2026",
                category: "cours"
            },
            {
                id: `3p_s${sNum}_sci_td`,
                titre: `TD - ${seq.theme}`,
                type: "Exercices",
                desc: "8 exercices d'entraînement gradués avec solutions rédigées.",
                url: `ressources/3pm/sciences/${seq.folder}/td.html`,
                date: "09/08/2026",
                category: "exercices"
            },
            {
                id: `3p_s${sNum}_sci_tp`,
                titre: `TP - ${seq.theme}`,
                type: "TP Expérimental",
                desc: "TP Hybride Paillasse Réelle & Simulateur 60 FPS (Labo Maths Sciences).",
                url: `ressources/3pm/sciences/${seq.folder}/tp.html`,
                date: "09/08/2026",
                category: "tp"
            },
            {
                id: `3p_s${sNum}_sci_brev`,
                titre: `Vers le Brevet - ${seq.theme}`,
                type: "Vers le Brevet",
                desc: "Sujet officiel DNB Pro Sciences sur 25 points avec corrigé.",
                url: `ressources/3pm/sciences/${seq.folder}/brevet.html`,
                date: "09/08/2026",
                category: "brevet"
            }
        ]
    };
});

fs.writeFileSync(formationsPath, JSON.stringify(formations, null, 2), 'utf8');
console.log("✅ data/formations.json mis à jour avec les 8 séquences de 3PM Sciences !");
