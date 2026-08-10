const fs = require('fs');

const path = 'data/formations.json';
const formations = JSON.parse(fs.readFileSync(path, 'utf8'));

// 1. 3PM Sciences Sequences (4 sequences, 6 items each)
const sciences3PM = [
    {
        id: "seq_3pm_sci_1",
        title: "Séquence 1 : Matière, Atomes & Mesure du pH",
        periode: "Période 1",
        items: [
            { id: "3p_s1_sci_auto", titre: "Automatismes - Matière & pH", type: "Automatismes", desc: "Rituel 5-10 min (Flashcards & Quiz autonome).", url: "ressources/3pm/sciences/chimie-matiere-solutions-ph/automatismes.html", date: "09/08/2026", category: "automatismes" },
            { id: "3p_s1_sci_act", titre: "Activités - Matière & pH", type: "Activités", desc: "Investigation sur les risques chimiques et le pH.", url: "ressources/3pm/sciences/chimie-matiere-solutions-ph/activites.html", date: "09/08/2026", category: "activites" },
            { id: "3p_s1_sci_cours", titre: "Cours - Matière & pH", type: "Cours", desc: "Synthèse sur les atomes, ions, pH et sécurité CLP.", url: "ressources/3pm/sciences/chimie-matiere-solutions-ph/cours.html", date: "09/08/2026", category: "cours" },
            { id: "3p_s1_sci_td", titre: "TD - Matière & pH", type: "Exercices", desc: "Exercices guidés sur le pH et les solutions.", url: "ressources/3pm/sciences/chimie-matiere-solutions-ph/td.html", date: "09/08/2026", category: "exercices" },
            { id: "3p_s1_sci_tp", titre: "TP - Mesure du pH en Labo", type: "TP Expérimental", desc: "TP de mesure de pH au papier pH et pH-mètre.", url: "ressources/3pm/sciences/chimie-matiere-solutions-ph/tp.html", date: "09/08/2026", category: "tp" },
            { id: "3p_s1_sci_brev", titre: "Vers le Brevet - Matière & pH", type: "Vers le Brevet", desc: "Sujet officiel DNB Pro Sciences (25 pts).", url: "ressources/3pm/sciences/chimie-matiere-solutions-ph/brevet.html", date: "09/08/2026", category: "brevet" }
        ]
    },
    {
        id: "seq_3pm_sci_2",
        title: "Séquence 2 : Mouvement, Vitesse & Forces",
        periode: "Période 2",
        items: [
            { id: "3p_s2_sci_auto", titre: "Automatismes - Mouvement & Forces", type: "Automatismes", desc: "Rituel 5-10 min (Conversions m/s et P=mxg).", url: "ressources/3pm/sciences/mouvement-vitesse-interactions/automatismes.html", date: "09/08/2026", category: "automatismes" },
            { id: "3p_s2_sci_act", titre: "Activités - Mouvement & Forces", type: "Activités", desc: "Étude de la vitesse de véhicules en transport.", url: "ressources/3pm/sciences/mouvement-vitesse-interactions/activites.html", date: "09/08/2026", category: "activites" },
            { id: "3p_s2_sci_cours", titre: "Cours - Mouvement & Forces", type: "Cours", desc: "Définitions v=d/t, trajectoires et poids P=mxg.", url: "ressources/3pm/sciences/mouvement-vitesse-interactions/cours.html", date: "09/08/2026", category: "cours" },
            { id: "3p_s2_sci_td", titre: "TD - Mouvement & Forces", type: "Exercices", desc: "Exercices de calcul de vitesse et de forces.", url: "ressources/3pm/sciences/mouvement-vitesse-interactions/td.html", date: "09/08/2026", category: "exercices" },
            { id: "3p_s2_sci_tp", titre: "TP - Dynamomètre et Vitesse", type: "TP Expérimental", desc: "Mesure de forces au dynamomètre et chronométrage.", url: "ressources/3pm/sciences/mouvement-vitesse-interactions/tp.html", date: "09/08/2026", category: "tp" },
            { id: "3p_s2_sci_brev", titre: "Vers le Brevet - Mécanique", type: "Vers le Brevet", desc: "Sujet officiel DNB Pro Sciences (25 pts).", url: "ressources/3pm/sciences/mouvement-vitesse-interactions/brevet.html", date: "09/08/2026", category: "brevet" }
        ]
    },
    {
        id: "seq_3pm_sci_3",
        title: "Séquence 3 : Circuits Électriques, Puissance & Énergie",
        periode: "Période 3",
        items: [
            { id: "3p_s3_sci_auto", titre: "Automatismes - Électricité & Énergie", type: "Automatismes", desc: "Rituel 5-10 min (Loi d'Ohm U=RxI et P=UxI).", url: "ressources/3pm/sciences/electricite-circuit-puissance-energie/automatismes.html", date: "09/08/2026", category: "automatismes" },
            { id: "3p_s3_sci_act", titre: "Activités - Électricité & Énergie", type: "Activités", desc: "Étude d'une installation électrique d'atelier.", url: "ressources/3pm/sciences/electricite-circuit-puissance-energie/activites.html", date: "09/08/2026", category: "activites" },
            { id: "3p_s3_sci_cours", titre: "Cours - Électricité & Énergie", type: "Cours", desc: "Loi d'Ohm, circuits série/dérivation, P=UxI et E=Pxt.", url: "ressources/3pm/sciences/electricite-circuit-puissance-energie/cours.html", date: "09/08/2026", category: "cours" },
            { id: "3p_s3_sci_td", titre: "TD - Électricité & Énergie", type: "Exercices", desc: "Exercices de calcul de puissance et coût électrique.", url: "ressources/3pm/sciences/electricite-circuit-puissance-energie/td.html", date: "09/08/2026", category: "exercices" },
            { id: "3p_s3_sci_tp", titre: "TP - Circuit Électrique et Multimètre", type: "TP Expérimental", desc: "Montage et mesures de tension U et d'intensité I.", url: "ressources/3pm/sciences/electricite-circuit-puissance-energie/tp.html", date: "09/08/2026", category: "tp" },
            { id: "3p_s3_sci_brev", titre: "Vers le Brevet - Électricité", type: "Vers le Brevet", desc: "Sujet officiel DNB Pro Sciences (25 pts).", url: "ressources/3pm/sciences/electricite-circuit-puissance-energie/brevet.html", date: "09/08/2026", category: "brevet" }
        ]
    },
    {
        id: "seq_3pm_sci_4",
        title: "Séquence 4 : Acoustique, Optique & Signaux",
        periode: "Période 4",
        items: [
            { id: "3p_s4_sci_auto", titre: "Automatismes - Ondes & Signaux", type: "Automatismes", desc: "Rituel 5-10 min (Fréquence f=1/T et décibels).", url: "ressources/3pm/sciences/acoustique-optique-signaux/automatismes.html", date: "09/08/2026", category: "automatismes" },
            { id: "3p_s4_sci_act", titre: "Activités - Ondes & Signaux", type: "Activités", desc: "Étude des risques sonores sur chantier.", url: "ressources/3pm/sciences/acoustique-optique-signaux/activites.html", date: "09/08/2026", category: "activites" },
            { id: "3p_s4_sci_cours", titre: "Cours - Ondes & Signaux", type: "Cours", desc: "Caractéristiques du son, réflexion et optique.", url: "ressources/3pm/sciences/acoustique-optique-signaux/cours.html", date: "09/08/2026", category: "cours" },
            { id: "3p_s4_sci_td", titre: "TD - Ondes & Signaux", type: "Exercices", desc: "Exercices sur la période, fréquence et optique.", url: "ressources/3pm/sciences/acoustique-optique-signaux/td.html", date: "09/08/2026", category: "exercices" },
            { id: "3p_s4_sci_tp", titre: "TP - Mesure de Décibels et Réflexion", type: "TP Expérimental", desc: "TP avec sonomètre et tracé de rayons lumineux.", url: "ressources/3pm/sciences/acoustique-optique-signaux/tp.html", date: "09/08/2026", category: "tp" },
            { id: "3p_s4_sci_brev", titre: "Vers le Brevet - Signaux", type: "Vers le Brevet", desc: "Sujet officiel DNB Pro Sciences (25 pts).", url: "ressources/3pm/sciences/acoustique-optique-signaux/brevet.html", date: "09/08/2026", category: "brevet" }
        ]
    }
];

// 2. CAP Maths Sequences (8 sequences, 6 items each)
const mathsCAP = [
    {
        id: "seq_cap_m_1",
        title: "Séquence 1 : Statistiques à une variable",
        items: [
            { id: "cap_m1_auto", titre: "Automatismes - Statistiques", type: "Automatismes", desc: "Rituel 5 min (Tableaux et moyennes).", url: "ressources/cap/maths/statistiques-1-variable/automatismes.html", date: "09/08/2026", category: "automatismes" },
            { id: "cap_m1_act", titre: "Activités - Statistiques", type: "Activités", desc: "Analyse de séries d'atelier.", url: "ressources/cap/maths/statistiques-1-variable/activites.html", date: "09/08/2026", category: "activites" },
            { id: "cap_m1_cours", titre: "Cours - Statistiques", type: "Cours", desc: "Effectifs, fréquences et moyenne.", url: "ressources/cap/maths/statistiques-1-variable/cours.html", date: "09/08/2026", category: "cours" },
            { id: "cap_m1_td", titre: "TD - Statistiques", type: "Exercices", desc: "Exercices pratiques et représentations.", url: "ressources/cap/maths/statistiques-1-variable/td.html", date: "09/08/2026", category: "exercices" },
            { id: "cap_m1_tp", titre: "TP - Tableur Excel / Calc", type: "TP Informatique", desc: "Diagrammes en bâtons sur tableur.", url: "ressources/cap/maths/statistiques-1-variable/tp.html", date: "09/08/2026", category: "tp" },
            { id: "cap_m1_ccf", titre: "Évaluation CCF - Statistiques", type: "Évaluation CCF", desc: "Sujet type CCF CAP sur 20 pts.", url: "ressources/cap/maths/statistiques-1-variable/ccf.html", date: "09/08/2026", category: "ccf" }
        ]
    },
    {
        id: "seq_cap_m_2",
        title: "Séquence 2 : Proportionnalité & Ratios",
        items: [
            { id: "cap_m2_auto", titre: "Automatismes - Proportionnalité", type: "Automatismes", desc: "Rituel 5 min (Quatrième proportionnelle).", url: "ressources/cap/maths/proportionnalite/automatismes.html", date: "09/08/2026", category: "automatismes" },
            { id: "cap_m2_act", titre: "Activités - Proportionnalité", type: "Activités", desc: "Problèmes de dosage et recettes pro.", url: "ressources/cap/maths/proportionnalite/activites.html", date: "09/08/2026", category: "activites" },
            { id: "cap_m2_cours", titre: "Cours - Proportionnalité", type: "Cours", desc: "Coefficients et produits en croix.", url: "ressources/cap/maths/proportionnalite/cours.html", date: "09/08/2026", category: "cours" },
            { id: "cap_m2_td", titre: "TD - Proportionnalité", type: "Exercices", desc: "Exercices de proportionnalité.", url: "ressources/cap/maths/proportionnalite/td.html", date: "09/08/2026", category: "exercices" },
            { id: "cap_m2_tp", titre: "TP - Graphiques et Tableur", type: "TP Informatique", desc: "Vérification d'alignement sur tableur.", url: "ressources/cap/maths/proportionnalite/tp.html", date: "09/08/2026", category: "tp" },
            { id: "cap_m2_ccf", titre: "Évaluation CCF - Proportionnalité", type: "Évaluation CCF", desc: "Sujet type CCF CAP sur 20 pts.", url: "ressources/cap/maths/proportionnalite/ccf.html", date: "09/08/2026", category: "ccf" }
        ]
    },
    {
        id: "seq_cap_m_3",
        title: "Séquence 3 : Pourcentages & Évolutions Simples",
        items: [
            { id: "cap_m3_auto", titre: "Automatismes - Pourcentages", type: "Automatismes", desc: "Rituel 5 min (Calcul de t%).", url: "ressources/cap/maths/pourcentages-simples/automatismes.html", date: "09/08/2026", category: "automatismes" },
            { id: "cap_m3_act", titre: "Activités - Pourcentages", type: "Activités", desc: "Remises et augmentations de prix.", url: "ressources/cap/maths/pourcentages-simples/activites.html", date: "09/08/2026", category: "activites" },
            { id: "cap_m3_cours", titre: "Cours - Pourcentages", type: "Cours", desc: "Calcul de pourcentages et coefficients.", url: "ressources/cap/maths/pourcentages-simples/cours.html", date: "09/08/2026", category: "cours" },
            { id: "cap_m3_td", titre: "TD - Pourcentages", type: "Exercices", desc: "Exercices de remises commerciales.", url: "ressources/cap/maths/pourcentages-simples/td.html", date: "09/08/2026", category: "exercices" },
            { id: "cap_m3_tp", titre: "TP - Calculateur de Remises", type: "TP Informatique", desc: "Modélisation de devis sur tableur.", url: "ressources/cap/maths/pourcentages-simples/tp.html", date: "09/08/2026", category: "tp" },
            { id: "cap_m3_ccf", titre: "Évaluation CCF - Pourcentages", type: "Évaluation CCF", desc: "Sujet type CCF CAP sur 20 pts.", url: "ressources/cap/maths/pourcentages-simples/ccf.html", date: "09/08/2026", category: "ccf" }
        ]
    },
    {
        id: "seq_cap_m_4",
        title: "Séquence 4 : Équations du 1er Degré",
        items: [
            { id: "cap_m4_auto", titre: "Automatismes - Équations", type: "Automatismes", desc: "Rituel 5 min (ax + b = c).", url: "ressources/cap/maths/equations-1er-degre/automatismes.html", date: "09/08/2026", category: "automatismes" },
            { id: "cap_m4_act", titre: "Activités - Équations", type: "Activités", desc: "Mise en équation de problèmes de chantier.", url: "ressources/cap/maths/equations-1er-degre/activites.html", date: "09/08/2026", category: "activites" },
            { id: "cap_m4_cours", titre: "Cours - Équations", type: "Cours", desc: "Résolution algébrique d'équations.", url: "ressources/cap/maths/equations-1er-degre/cours.html", date: "09/08/2026", category: "cours" },
            { id: "cap_m4_td", titre: "TD - Équations", type: "Exercices", desc: "Exercices de résolution d'équations.", url: "ressources/cap/maths/equations-1er-degre/td.html", date: "09/08/2026", category: "exercices" },
            { id: "cap_m4_tp", titre: "TP - GeoGebra & Solveur", type: "TP Informatique", desc: "Résolution graphique d'équations.", url: "ressources/cap/maths/equations-1er-degre/tp.html", date: "09/08/2026", category: "tp" },
            { id: "cap_m4_ccf", titre: "Évaluation CCF - Équations", type: "Évaluation CCF", desc: "Sujet type CCF CAP sur 20 pts.", url: "ressources/cap/maths/equations-1er-degre/ccf.html", date: "09/08/2026", category: "ccf" }
        ]
    },
    {
        id: "seq_cap_m_5",
        title: "Séquence 5 : Théorème de Pythagore",
        items: [
            { id: "cap_m5_auto", titre: "Automatismes - Pythagore", type: "Automatismes", desc: "Rituel 5 min (Carrés et racines).", url: "ressources/cap/maths/pythagore/automatismes.html", date: "09/08/2026", category: "automatismes" },
            { id: "cap_m5_act", titre: "Activités - Pythagore", type: "Activités", desc: "Équerrage en menuiserie et maçonnerie.", url: "ressources/cap/maths/pythagore/activites.html", date: "09/08/2026", category: "activites" },
            { id: "cap_m5_cours", titre: "Cours - Pythagore", type: "Cours", desc: "Théorème de Pythagore et sa réciproque.", url: "ressources/cap/maths/pythagore/cours.html", date: "09/08/2026", category: "cours" },
            { id: "cap_m5_td", titre: "TD - Pythagore", type: "Exercices", desc: "Exercices de calcul de longueurs.", url: "ressources/cap/maths/pythagore/td.html", date: "09/08/2026", category: "exercices" },
            { id: "cap_m5_tp", titre: "TP - Construction GeoGebra", type: "TP Informatique", desc: "Vérification d'angles droits sur GeoGebra.", url: "ressources/cap/maths/pythagore/tp.html", date: "09/08/2026", category: "tp" },
            { id: "cap_m5_ccf", titre: "Évaluation CCF - Pythagore", type: "Évaluation CCF", desc: "Sujet type CCF CAP sur 20 pts.", url: "ressources/cap/maths/pythagore/ccf.html", date: "09/08/2026", category: "ccf" }
        ]
    },
    {
        id: "seq_cap_m_6",
        title: "Séquence 6 : Géométrie Plane, Périmètres & Aires",
        items: [
            { id: "cap_m6_auto", titre: "Automatismes - Périmètres & Aires", type: "Automatismes", desc: "Rituel 5 min (Formules d'aires usuelles).", url: "ressources/cap/maths/geometrie-plane-perimetres-aires/automatismes.html", date: "09/08/2026", category: "automatismes" },
            { id: "cap_m6_act", titre: "Activités - Périmètres & Aires", type: "Activités", desc: "Calcul de surfaces de peinture et carrelage.", url: "ressources/cap/maths/geometrie-plane-perimetres-aires/activites.html", date: "09/08/2026", category: "activites" },
            { id: "cap_m6_cours", titre: "Cours - Périmètres & Aires", type: "Cours", desc: "Formules pour carré, rectangle, triangle, disque.", url: "ressources/cap/maths/geometrie-plane-perimetres-aires/cours.html", date: "09/08/2026", category: "cours" },
            { id: "cap_m6_td", titre: "TD - Périmètres & Aires", type: "Exercices", desc: "Exercices de calcul de surfaces.", url: "ressources/cap/maths/geometrie-plane-perimetres-aires/td.html", date: "09/08/2026", category: "exercices" },
            { id: "cap_m6_tp", titre: "TP - GeoGebra 2D", type: "TP Informatique", desc: "Tracé et mesure de figures planes.", url: "ressources/cap/maths/geometrie-plane-perimetres-aires/tp.html", date: "09/08/2026", category: "tp" },
            { id: "cap_m6_ccf", titre: "Évaluation CCF - Géométrie Plane", type: "Évaluation CCF", desc: "Sujet type CCF CAP sur 20 pts.", url: "ressources/cap/maths/geometrie-plane-perimetres-aires/ccf.html", date: "09/08/2026", category: "ccf" }
        ]
    },
    {
        id: "seq_cap_m_7",
        title: "Séquence 7 : Volumes des Solides Usuels",
        items: [
            { id: "cap_m7_auto", titre: "Automatismes - Volumes", type: "Automatismes", desc: "Rituel 5 min (Conversions 1L = 1dm3).", url: "ressources/cap/maths/volumes-solides/automatismes.html", date: "09/08/2026", category: "automatismes" },
            { id: "cap_m7_act", titre: "Activités - Volumes", type: "Activités", desc: "Calcul de contenance de cuves et béton.", url: "ressources/cap/maths/volumes-solides/activites.html", date: "09/08/2026", category: "activites" },
            { id: "cap_m7_cours", titre: "Cours - Volumes", type: "Cours", desc: "Pavé droit, cylindre, prisme et cône.", url: "ressources/cap/maths/volumes-solides/cours.html", date: "09/08/2026", category: "cours" },
            { id: "cap_m7_td", titre: "TD - Volumes", type: "Exercices", desc: "Exercices de cubage et contenance.", url: "ressources/cap/maths/volumes-solides/td.html", date: "09/08/2026", category: "exercices" },
            { id: "cap_m7_tp", titre: "TP - GeoGebra 3D", type: "TP Informatique", desc: "Modélisation 3D de réservoirs.", url: "ressources/cap/maths/volumes-solides/tp.html", date: "09/08/2026", category: "tp" },
            { id: "cap_m7_ccf", titre: "Évaluation CCF - Volumes", type: "Évaluation CCF", desc: "Sujet type CCF CAP sur 20 pts.", url: "ressources/cap/maths/volumes-solides/ccf.html", date: "09/08/2026", category: "ccf" }
        ]
    },
    {
        id: "seq_cap_m_8",
        title: "Séquence 8 : Probabilités & Chance",
        items: [
            { id: "cap_m8_auto", titre: "Automatismes - Probabilités", type: "Automatismes", desc: "Rituel 5 min (Chances et fractions).", url: "ressources/cap/maths/probabilites/automatismes.html", date: "09/08/2026", category: "automatismes" },
            { id: "cap_m8_act", titre: "Activités - Probabilités", type: "Activités", desc: "Contrôle qualité sur pièces défectueuses.", url: "ressources/cap/maths/probabilites/activites.html", date: "09/08/2026", category: "activites" },
            { id: "cap_m8_cours", titre: "Cours - Probabilités", type: "Cours", desc: "Événements, probabilité entre 0 et 1.", url: "ressources/cap/maths/probabilites/cours.html", date: "09/08/2026", category: "cours" },
            { id: "cap_m8_td", titre: "TD - Probabilités", type: "Exercices", desc: "Exercices de calcul de probabilités.", url: "ressources/cap/maths/probabilites/td.html", date: "09/08/2026", category: "exercices" },
            { id: "cap_m8_tp", titre: "TP - Simulation Tableur", type: "TP Informatique", desc: "Tirages aléatoires sur tableur.", url: "ressources/cap/maths/probabilites/tp.html", date: "09/08/2026", category: "tp" },
            { id: "cap_m8_ccf", titre: "Évaluation CCF - Probabilités", type: "Évaluation CCF", desc: "Sujet type CCF CAP sur 20 pts.", url: "ressources/cap/maths/probabilites/ccf.html", date: "09/08/2026", category: "ccf" }
        ]
    }
];

// 3. CAP Sciences Sequences (8 sequences, 6 items each)
const sciencesCAP = [
    {
        id: "seq_cap_s_1",
        title: "Séquence 1 : Sécurité des produits chimiques",
        items: [
            { id: "cap_s1_auto", titre: "Automatismes - Chimie & Sécurité", type: "Automatismes", desc: "Pictogrammes CLP/SGH.", url: "ressources/cap/sciences/chimie-securite-pictogrammes/automatismes.html", date: "09/08/2026", category: "automatismes" },
            { id: "cap_s1_act", titre: "Activités - Chimie & Sécurité", type: "Activités", desc: "Analyse d'étiquettes de solvants.", url: "ressources/cap/sciences/chimie-securite-pictogrammes/activites.html", date: "09/08/2026", category: "activites" },
            { id: "cap_s1_cours", titre: "Cours - Chimie & Sécurité", type: "Cours", desc: "FDS, EPI et consignes de sécurité.", url: "ressources/cap/sciences/chimie-securite-pictogrammes/cours.html", date: "09/08/2026", category: "cours" },
            { id: "cap_s1_td", titre: "TD - Chimie & Sécurité", type: "Exercices", desc: "Exercices sur les risques chimiques.", url: "ressources/cap/sciences/chimie-securite-pictogrammes/td.html", date: "09/08/2026", category: "exercices" },
            { id: "cap_s1_tp", titre: "TP - Analyse de FDS en Labo", type: "TP Expérimental", desc: "Lecture de Fiches de Données de Sécurité.", url: "ressources/cap/sciences/chimie-securite-pictogrammes/tp.html", date: "09/08/2026", category: "tp" },
            { id: "cap_s1_ccf", titre: "Évaluation CCF - Sécurité Chimie", type: "Évaluation CCF", desc: "Sujet CCF Sciences CAP sur 20 pts.", url: "ressources/cap/sciences/chimie-securite-pictogrammes/ccf.html", date: "09/08/2026", category: "ccf" }
        ]
    },
    {
        id: "seq_cap_s_2",
        title: "Séquence 2 : Solutions aqueuses, acides & pH",
        items: [
            { id: "cap_s2_auto", titre: "Automatismes - Solutions & pH", type: "Automatismes", desc: "Échelle de pH 0-14.", url: "ressources/cap/sciences/chimie-solutions-ph/automatismes.html", date: "09/08/2026", category: "automatismes" },
            { id: "cap_s2_act", titre: "Activités - Solutions & pH", type: "Activités", desc: "Étude des produits d'entretien.", url: "ressources/cap/sciences/chimie-solutions-ph/activites.html", date: "09/08/2026", category: "activites" },
            { id: "cap_s2_cours", titre: "Cours - Solutions & pH", type: "Cours", desc: "Acides, bases, neutralisation et ions.", url: "ressources/cap/sciences/chimie-solutions-ph/cours.html", date: "09/08/2026", category: "cours" },
            { id: "cap_s2_td", titre: "TD - Solutions & pH", type: "Exercices", desc: "Exercices sur le pH et la dilution.", url: "ressources/cap/sciences/chimie-solutions-ph/td.html", date: "09/08/2026", category: "exercices" },
            { id: "cap_s2_tp", titre: "TP - Mesure de pH au Labo", type: "TP Expérimental", desc: "TP papier pH et pH-mètre.", url: "ressources/cap/sciences/chimie-solutions-ph/tp.html", date: "09/08/2026", category: "tp" },
            { id: "cap_s2_ccf", titre: "Évaluation CCF - pH & Solutions", type: "Évaluation CCF", desc: "Sujet CCF Sciences CAP sur 20 pts.", url: "ressources/cap/sciences/chimie-solutions-ph/ccf.html", date: "09/08/2026", category: "ccf" }
        ]
    },
    {
        id: "seq_cap_s_3",
        title: "Séquence 3 : Mouvement & Vitesse Moyenne",
        items: [
            { id: "cap_s3_auto", titre: "Automatismes - Vitesse", type: "Automatismes", desc: "Calcul v=d/t.", url: "ressources/cap/sciences/mouvement-vitesse/automatismes.html", date: "09/08/2026", category: "automatismes" },
            { id: "cap_s3_act", titre: "Activités - Vitesse", type: "Activités", desc: "Chronométrage de convoyeurs.", url: "ressources/cap/sciences/mouvement-vitesse/activites.html", date: "09/08/2026", category: "activites" },
            { id: "cap_s3_cours", titre: "Cours - Vitesse", type: "Cours", desc: "Trajectoires et vitesse moyenne.", url: "ressources/cap/sciences/mouvement-vitesse/cours.html", date: "09/08/2026", category: "cours" },
            { id: "cap_s3_td", titre: "TD - Vitesse", type: "Exercices", desc: "Calculs de d, v et t.", url: "ressources/cap/sciences/mouvement-vitesse/td.html", date: "09/08/2026", category: "exercices" },
            { id: "cap_s3_tp", titre: "TP - Mesure de Vitesse", type: "TP Expérimental", desc: "TP expérimental de cinématique.", url: "ressources/cap/sciences/mouvement-vitesse/tp.html", date: "09/08/2026", category: "tp" },
            { id: "cap_s3_ccf", titre: "Évaluation CCF - Mouvement", type: "Évaluation CCF", desc: "Sujet CCF Sciences CAP sur 20 pts.", url: "ressources/cap/sciences/mouvement-vitesse/ccf.html", date: "09/08/2026", category: "ccf" }
        ]
    },
    {
        id: "seq_cap_s_4",
        title: "Séquence 4 : Poids, Masse & Forces",
        items: [
            { id: "cap_s4_auto", titre: "Automatismes - Poids & Masse", type: "Automatismes", desc: "P=mxg.", url: "ressources/cap/sciences/poids-masse-forces/automatismes.html", date: "09/08/2026", category: "automatismes" },
            { id: "cap_s4_act", titre: "Activités - Poids & Masse", type: "Activités", desc: "Pesée et dynamomètre en atelier.", url: "ressources/cap/sciences/poids-masse-forces/activites.html", date: "09/08/2026", category: "activites" },
            { id: "cap_s4_cours", titre: "Cours - Poids & Masse", type: "Cours", desc: "Caractéristiques des forces et pesanteur.", url: "ressources/cap/sciences/poids-masse-forces/cours.html", date: "09/08/2026", category: "cours" },
            { id: "cap_s4_td", titre: "TD - Poids & Masse", type: "Exercices", desc: "Exercices de représentation de forces.", url: "ressources/cap/sciences/poids-masse-forces/td.html", date: "09/08/2026", category: "exercices" },
            { id: "cap_s4_tp", titre: "TP - Étalonnage du Dynamomètre", type: "TP Expérimental", desc: "TP de mesure de forces.", url: "ressources/cap/sciences/poids-masse-forces/tp.html", date: "09/08/2026", category: "tp" },
            { id: "cap_s4_ccf", titre: "Évaluation CCF - Forces", type: "Évaluation CCF", desc: "Sujet CCF Sciences CAP sur 20 pts.", url: "ressources/cap/sciences/poids-masse-forces/ccf.html", date: "09/08/2026", category: "ccf" }
        ]
    },
    {
        id: "seq_cap_s_5",
        title: "Séquence 5 : Équilibre d'un Solide",
        items: [
            { id: "cap_s5_auto", titre: "Automatismes - Équilibre", type: "Automatismes", desc: "Conditions d'équilibre.", url: "ressources/cap/sciences/equilibre-solide/automatismes.html", date: "09/08/2026", category: "automatismes" },
            { id: "cap_s5_act", titre: "Activités - Équilibre", type: "Activités", desc: "Manutention et élingage.", url: "ressources/cap/sciences/equilibre-solide/activites.html", date: "09/08/2026", category: "activites" },
            { id: "cap_s5_cours", titre: "Cours - Équilibre", type: "Cours", desc: "Solide soumis à 2 forces oppsosées.", url: "ressources/cap/sciences/equilibre-solide/cours.html", date: "09/08/2026", category: "cours" },
            { id: "cap_s5_td", titre: "TD - Équilibre", type: "Exercices", desc: "Exercices de statique.", url: "ressources/cap/sciences/equilibre-solide/td.html", date: "09/08/2026", category: "exercices" },
            { id: "cap_s5_tp", titre: "TP - Équilibre sous 2 Forces", type: "TP Expérimental", desc: "TP d'équilibrage expérimental.", url: "ressources/cap/sciences/equilibre-solide/tp.html", date: "09/08/2026", category: "tp" },
            { id: "cap_s5_ccf", titre: "Évaluation CCF - Équilibre", type: "Évaluation CCF", desc: "Sujet CCF Sciences CAP sur 20 pts.", url: "ressources/cap/sciences/equilibre-solide/ccf.html", date: "09/08/2026", category: "ccf" }
        ]
    },
    {
        id: "seq_cap_s_6",
        title: "Séquence 6 : Électricité : Tension & Intensité",
        items: [
            { id: "cap_s6_auto", titre: "Automatismes - Électricité", type: "Automatismes", desc: "Symboles et unités U, I, R.", url: "ressources/cap/sciences/electricite-tension-intensite/automatismes.html", date: "09/08/2026", category: "automatismes" },
            { id: "cap_s6_act", titre: "Activités - Électricité", type: "Activités", desc: "Câblage d'un circuit simple.", url: "ressources/cap/sciences/electricite-tension-intensite/activites.html", date: "09/08/2026", category: "activites" },
            { id: "cap_s6_cours", titre: "Cours - Électricité", type: "Cours", desc: "Loi d'Ohm U=RxI et multimètre.", url: "ressources/cap/sciences/electricite-tension-intensite/cours.html", date: "09/08/2026", category: "cours" },
            { id: "cap_s6_td", titre: "TD - Électricité", type: "Exercices", desc: "Exercices sur la loi d'Ohm.", url: "ressources/cap/sciences/electricite-tension-intensite/td.html", date: "09/08/2026", category: "exercices" },
            { id: "cap_s6_tp", titre: "TP - Multimètre & Circuit", type: "TP Expérimental", desc: "Mesures de U et I en TP.", url: "ressources/cap/sciences/electricite-tension-intensite/tp.html", date: "09/08/2026", category: "tp" },
            { id: "cap_s6_ccf", titre: "Évaluation CCF - Électricité", type: "Évaluation CCF", desc: "Sujet CCF Sciences CAP sur 20 pts.", url: "ressources/cap/sciences/electricite-tension-intensite/ccf.html", date: "09/08/2026", category: "ccf" }
        ]
    },
    {
        id: "seq_cap_s_7",
        title: "Séquence 7 : Puissance & Énergie Électrique",
        items: [
            { id: "cap_s7_auto", titre: "Automatismes - Puissance & Énergie", type: "Automatismes", desc: "P=UxI et E=Pxt.", url: "ressources/cap/sciences/puissance-energie-electrique/automatismes.html", date: "09/08/2026", category: "automatismes" },
            { id: "cap_s7_act", titre: "Activités - Puissance & Énergie", type: "Activités", desc: "Analyse de la consommation d'appareils.", url: "ressources/cap/sciences/puissance-energie-electrique/activites.html", date: "09/08/2026", category: "activites" },
            { id: "cap_s7_cours", titre: "Cours - Puissance & Énergie", type: "Cours", desc: "Calculs de puissance W et énergie kWh.", url: "ressources/cap/sciences/puissance-energie-electrique/cours.html", date: "09/08/2026", category: "cours" },
            { id: "cap_s7_td", titre: "TD - Puissance & Énergie", type: "Exercices", desc: "Exercices de coût électrique.", url: "ressources/cap/sciences/puissance-energie-electrique/td.html", date: "09/08/2026", category: "exercices" },
            { id: "cap_s7_tp", titre: "TP - Wattmètre & Récepteur", type: "TP Expérimental", desc: "Mesure de puissance électrique.", url: "ressources/cap/sciences/puissance-energie-electrique/tp.html", date: "09/08/2026", category: "tp" },
            { id: "cap_s7_ccf", titre: "Évaluation CCF - Énergie", type: "Évaluation CCF", desc: "Sujet CCF Sciences CAP sur 20 pts.", url: "ressources/cap/sciences/puissance-energie-electrique/ccf.html", date: "09/08/2026", category: "ccf" }
        ]
    },
    {
        id: "seq_cap_s_8",
        title: "Séquence 8 : Acoustique, Bruit & Optique",
        items: [
            { id: "cap_s8_auto", titre: "Automatismes - Bruit & Lumière", type: "Automatismes", desc: "Décibels et réflexion.", url: "ressources/cap/sciences/acoustique-bruit-optique/automatismes.html", date: "09/08/2026", category: "automatismes" },
            { id: "cap_s8_act", titre: "Activités - Bruit & Lumière", type: "Activités", desc: "Protections auditives en atelier.", url: "ressources/cap/sciences/acoustique-bruit-optique/activites.html", date: "09/08/2026", category: "activites" },
            { id: "cap_s8_cours", titre: "Cours - Bruit & Lumière", type: "Cours", desc: "Niveau sonore dB et optique géométrique.", url: "ressources/cap/sciences/acoustique-bruit-optique/cours.html", date: "09/08/2026", category: "cours" },
            { id: "cap_s8_td", titre: "TD - Bruit & Lumière", type: "Exercices", desc: "Exercices d'acoustique et optique.", url: "ressources/cap/sciences/acoustique-bruit-optique/td.html", date: "09/08/2026", category: "exercices" },
            { id: "cap_s8_tp", titre: "TP - Sonomètre & Miroir", type: "TP Expérimental", desc: "TP de mesure sonore et réflexion.", url: "ressources/cap/sciences/acoustique-bruit-optique/tp.html", date: "09/08/2026", category: "tp" },
            { id: "cap_s8_ccf", titre: "Évaluation CCF - Ondes", type: "Évaluation CCF", desc: "Sujet CCF Sciences CAP sur 20 pts.", url: "ressources/cap/sciences/acoustique-bruit-optique/ccf.html", date: "09/08/2026", category: "ccf" }
        ]
    }
];

// 4. Seconde Pro Maths Sequences (8 sequences, 6 items each)
const mathsSeconde = [
    {
        id: "seq_2nde_m_1",
        title: "Séquence 1 : Statistiques à une variable",
        items: [
            { id: "2nde_m1_auto", titre: "Automatismes - Statistiques", type: "Automatismes", desc: "Flashcards 3D & Défis rituels sur 20 pts.", url: "ressources/seconde/statistiques-1-variable/automatismes.html", date: "09/08/2026", category: "automatismes" },
            { id: "2nde_m1_act", titre: "Activités - Statistiques", type: "Activités", desc: "Scénarios d'investigation professionnelle.", url: "ressources/seconde/statistiques-1-variable/activites.html", date: "09/08/2026", category: "activites" },
            { id: "2nde_m1_cours", titre: "Cours - Statistiques à une variable", type: "Cours", desc: "Définitions, théorèmes et indicateurs (moyenne, médiane, quartiles).", url: "ressources/seconde/statistiques-1-variable/cours.html", date: "09/08/2026", category: "cours" },
            { id: "2nde_m1_td", titre: "TD - Statistiques", type: "Exercices", desc: "Fiche A4 imprimable (10 exercices corrigés).", url: "ressources/seconde/statistiques-1-variable/td.html", date: "09/08/2026", category: "exercices" },
            { id: "2nde_m1_tice", titre: "TICE - Tableur Excel / Calc", type: "TICE Excel", desc: "Travaux Pratiques sur tableur (histogrammes, quartiles).", url: "ressources/seconde/statistiques-1-variable/tice.html", date: "09/08/2026", category: "tice" },
            { id: "2nde_m1_eval", titre: "Évaluation - Statistiques", type: "Évaluation", desc: "Évaluation bilan sur 20 points avec barème rédigé.", url: "ressources/seconde/statistiques-1-variable/eval.html", date: "09/08/2026", category: "eval" }
        ]
    },
    {
        id: "seq_2nde_m_2",
        title: "Séquence 2 : Pourcentages, Proportions & Variations",
        items: [
            { id: "2nde_m2_auto", titre: "Automatismes - Pourcentages", type: "Automatismes", desc: "Flashcards 3D & Défis rituels sur 20 pts.", url: "ressources/seconde/pourcentages-proportions/automatismes.html", date: "09/08/2026", category: "automatismes" },
            { id: "2nde_m2_act", titre: "Activités - Pourcentages", type: "Activités", desc: "Scénarios d'investigation professionnelle.", url: "ressources/seconde/pourcentages-proportions/activites.html", date: "09/08/2026", category: "activites" },
            { id: "2nde_m2_cours", titre: "Cours - Pourcentages & Proportions", type: "Cours", desc: "Proportions, coefficients multiplicateurs et évolutions.", url: "ressources/seconde/pourcentages-proportions/cours.html", date: "09/08/2026", category: "cours" },
            { id: "2nde_m2_td", titre: "TD - Pourcentages & Proportions", type: "Exercices", desc: "Fiche A4 imprimable (10 exercices corrigés).", url: "ressources/seconde/pourcentages-proportions/td.html", date: "09/08/2026", category: "exercices" },
            { id: "2nde_m2_tice", titre: "TICE - Tableur Excel / Calc", type: "TICE Excel", desc: "TP Tableur sur les taux d'évolution.", url: "ressources/seconde/pourcentages-proportions/tice.html", date: "09/08/2026", category: "tice" },
            { id: "2nde_m2_eval", titre: "Évaluation - Pourcentages", type: "Évaluation", desc: "Évaluation bilan sur 20 points.", url: "ressources/seconde/pourcentages-proportions/eval.html", date: "09/08/2026", category: "eval" }
        ]
    },
    {
        id: "seq_2nde_m_3",
        title: "Séquence 3 : Équations & Inéquations du 1er Degré",
        items: [
            { id: "2nde_m3_auto", titre: "Automatismes - Équations", type: "Automatismes", desc: "Flashcards 3D & Défis rituels.", url: "ressources/seconde/equations-1er-degre/automatismes.html", date: "09/08/2026", category: "automatismes" },
            { id: "2nde_m3_act", titre: "Activités - Équations", type: "Activités", desc: "Mise en équation de problèmes pro.", url: "ressources/seconde/equations-1er-degre/activites.html", date: "09/08/2026", category: "activites" },
            { id: "2nde_m3_cours", titre: "Cours - Équations & Inéquations", type: "Cours", desc: "Résolution ax+b=c et inéquations.", url: "ressources/seconde/equations-1er-degre/cours.html", date: "09/08/2026", category: "cours" },
            { id: "2nde_m3_td", titre: "TD - Équations & Inéquations", type: "Exercices", desc: "Exercices corrigés sur 10 cas.", url: "ressources/seconde/equations-1er-degre/td.html", date: "09/08/2026", category: "exercices" },
            { id: "2nde_m3_tice", titre: "TICE - GeoGebra", type: "TICE GeoGebra", desc: "Résolution d'équations sur GeoGebra.", url: "ressources/seconde/equations-1er-degre/tice.html", date: "09/08/2026", category: "tice" },
            { id: "2nde_m3_eval", titre: "Évaluation - Équations", type: "Évaluation", desc: "Évaluation bilan sur 20 points.", url: "ressources/seconde/equations-1er-degre/eval.html", date: "09/08/2026", category: "eval" }
        ]
    },
    {
        id: "seq_2nde_m_4",
        title: "Séquence 4 : Fonctions Linéaires & Affines",
        items: [
            { id: "2nde_m4_auto", titre: "Automatismes - Fonctions", type: "Automatismes", desc: "Images, antécédents et droites.", url: "ressources/seconde/fonctions-reference/automatismes.html", date: "09/08/2026", category: "automatismes" },
            { id: "2nde_m4_act", titre: "Activités - Fonctions", type: "Activités", desc: "Modélisation de coûts et devis.", url: "ressources/seconde/fonctions-reference/activites.html", date: "09/08/2026", category: "activites" },
            { id: "2nde_m4_cours", titre: "Cours - Fonctions Linéaires & Affines", type: "Cours", desc: "f(x) = ax + b, coefficient directeur, ordonnée à l'origine.", url: "ressources/seconde/fonctions-reference/cours.html", date: "09/08/2026", category: "cours" },
            { id: "2nde_m4_td", titre: "TD - Fonctions Linéaires & Affines", type: "Exercices", desc: "Exercices de tracé et lecture graphique.", url: "ressources/seconde/fonctions-reference/td.html", date: "09/08/2026", category: "exercices" },
            { id: "2nde_m4_tice", titre: "TICE - GeoGebra Droites", type: "TICE GeoGebra", desc: "Tracé dynamique de droites affines.", url: "ressources/seconde/fonctions-reference/tice.html", date: "09/08/2026", category: "tice" },
            { id: "2nde_m4_eval", titre: "Évaluation - Fonctions Affines", type: "Évaluation", desc: "Évaluation bilan sur 20 points.", url: "ressources/seconde/fonctions-reference/eval.html", date: "09/08/2026", category: "eval" }
        ]
    },
    {
        id: "seq_2nde_m_5",
        title: "Séquence 5 : Thalès, Pythagore & Trigonométrie",
        items: [
            { id: "2nde_m5_auto", titre: "Automatismes - Géométrie Plane", type: "Automatismes", desc: "Flashcards cos, sin, tan, Pythagore.", url: "ressources/seconde/geometrie-plane-trigonometrie/automatismes.html", date: "09/08/2026", category: "automatismes" },
            { id: "2nde_m5_act", titre: "Activités - Géométrie Plane", type: "Activités", desc: "Calcul de pente et toiture.", url: "ressources/seconde/geometrie-plane-trigonometrie/activites.html", date: "09/08/2026", category: "activites" },
            { id: "2nde_m5_cours", titre: "Cours - Thalès, Pythagore & Trigo", type: "Cours", desc: "Théorèmes et trigonométrie dans le triangle rectangle.", url: "ressources/seconde/geometrie-plane-trigonometrie/cours.html", date: "09/08/2026", category: "cours" },
            { id: "2nde_m5_td", titre: "TD - Thalès, Pythagore & Trigo", type: "Exercices", desc: "10 exercices pratiques corrigés.", url: "ressources/seconde/geometrie-plane-trigonometrie/td.html", date: "09/08/2026", category: "exercices" },
            { id: "2nde_m5_tice", titre: "TICE - GeoGebra Trigo", type: "TICE GeoGebra", desc: "Simulations de triangles et angles.", url: "ressources/seconde/geometrie-plane-trigonometrie/tice.html", date: "09/08/2026", category: "tice" },
            { id: "2nde_m5_eval", titre: "Évaluation - Géométrie Plane", type: "Évaluation", desc: "Évaluation bilan sur 20 points.", url: "ressources/seconde/geometrie-plane-trigonometrie/eval.html", date: "09/08/2026", category: "eval" }
        ]
    },
    {
        id: "seq_2nde_m_6",
        title: "Séquence 6 : Solides Usuels, Aires & Volumes",
        items: [
            { id: "2nde_m6_auto", titre: "Automatismes - Solides & Volumes", type: "Automatismes", desc: "Conversions 1L = 1dm3.", url: "ressources/seconde/geometrie-espace-volumes/automatismes.html", date: "09/08/2026", category: "automatismes" },
            { id: "2nde_m6_act", titre: "Activités - Solides & Volumes", type: "Activités", desc: "Cubage de réservoirs et béton.", url: "ressources/seconde/geometrie-espace-volumes/activites.html", date: "09/08/2026", category: "activites" },
            { id: "2nde_m6_cours", titre: "Cours - Solides, Aires & Volumes", type: "Cours", desc: "Formules pour tous les solides usuels.", url: "ressources/seconde/geometrie-espace-volumes/cours.html", date: "09/08/2026", category: "cours" },
            { id: "2nde_m6_td", titre: "TD - Solides, Aires & Volumes", type: "Exercices", desc: "Exercices de calcul de volumes.", url: "ressources/seconde/geometrie-espace-volumes/td.html", date: "09/08/2026", category: "exercices" },
            { id: "2nde_m6_tice", titre: "TICE - GeoGebra 3D Solides", type: "TICE 3D", desc: "Modélisation 3D de pièces.", url: "ressources/seconde/geometrie-espace-volumes/tice.html", date: "09/08/2026", category: "tice" },
            { id: "2nde_m6_eval", titre: "Évaluation - Volumes", type: "Évaluation", desc: "Évaluation bilan sur 20 points.", url: "ressources/seconde/geometrie-espace-volumes/eval.html", date: "09/08/2026", category: "eval" }
        ]
    },
    {
        id: "seq_2nde_m_7",
        title: "Séquence 7 : Vecteurs du Plan & Translation",
        items: [
            { id: "2nde_m7_auto", titre: "Automatismes - Vecteurs", type: "Automatismes", desc: "Norme, direction, sens.", url: "ressources/seconde/vecteurs-plan/automatismes.html", date: "09/08/2026", category: "automatismes" },
            { id: "2nde_m7_act", titre: "Activités - Vecteurs", type: "Activités", desc: "Déplacement de charges et forces.", url: "ressources/seconde/vecteurs-plan/activites.html", date: "09/08/2026", category: "activites" },
            { id: "2nde_m7_cours", titre: "Cours - Vecteurs du Plan", type: "Cours", desc: "Chasles, coordonnées et opérations.", url: "ressources/seconde/vecteurs-plan/cours.html", date: "09/08/2026", category: "cours" },
            { id: "2nde_m7_td", titre: "TD - Vecteurs du Plan", type: "Exercices", desc: "Exercices de sommes vectorielles.", url: "ressources/seconde/vecteurs-plan/td.html", date: "09/08/2026", category: "exercices" },
            { id: "2nde_m7_tice", titre: "TICE - GeoGebra Vecteurs", type: "TICE GeoGebra", desc: "Construction de vecteurs sur GeoGebra.", url: "ressources/seconde/vecteurs-plan/tice.html", date: "09/08/2026", category: "tice" },
            { id: "2nde_m7_eval", titre: "Évaluation - Vecteurs", type: "Évaluation", desc: "Évaluation bilan sur 20 points.", url: "ressources/seconde/vecteurs-plan/eval.html", date: "09/08/2026", category: "eval" }
        ]
    },
    {
        id: "seq_2nde_m_8",
        title: "Séquence 8 : Probabilités & Échantillonnage",
        items: [
            { id: "2nde_m8_auto", titre: "Automatismes - Probabilités", type: "Automatismes", desc: "Événements contraires et chances.", url: "ressources/seconde/probabilites-fluctuation/automatismes.html", date: "09/08/2026", category: "automatismes" },
            { id: "2nde_m8_act", titre: "Activités - Probabilités", type: "Activités", desc: "Simulations de contrôle de qualité.", url: "ressources/seconde/probabilites-fluctuation/activites.html", date: "09/08/2026", category: "activites" },
            { id: "2nde_m8_cours", titre: "Cours - Probabilités & Échantillonnage", type: "Cours", desc: "Calcul de probabilités et fluctuation.", url: "ressources/seconde/probabilites-fluctuation/cours.html", date: "09/08/2026", category: "cours" },
            { id: "2nde_m8_td", titre: "TD - Probabilités & Échantillonnage", type: "Exercices", desc: "Exercices d'arbres de choix et tirages.", url: "ressources/seconde/probabilites-fluctuation/td.html", date: "09/08/2026", category: "exercices" },
            { id: "2nde_m8_tice", titre: "TICE - Tableur Simulation", type: "TICE Simulation", desc: "Simulation de 1000 tirages sur tableur.", url: "ressources/seconde/probabilites-fluctuation/tice.html", date: "09/08/2026", category: "tice" },
            { id: "2nde_m8_eval", titre: "Évaluation - Probabilités", type: "Évaluation", desc: "Évaluation bilan sur 20 points.", url: "ressources/seconde/probabilites-fluctuation/eval.html", date: "09/08/2026", category: "eval" }
        ]
    }
];

// 5. Seconde Pro Sciences Sequences (8 sequences, 6 items each)
const sciencesSeconde = [
    {
        id: "seq_2nde_s_1",
        title: "Séquence 1 : Sécurité des Produits Chimiques & Pictogrammes",
        items: [
            { id: "2nde_s1_auto", titre: "Automatismes - Chimie & Sécurité", type: "Automatismes", desc: "Flashcards pictogrammes CLP/SGH.", url: "ressources/seconde/securite-produits-chimiques/automatismes.html", date: "09/08/2026", category: "automatismes" },
            { id: "2nde_s1_act", titre: "Activités - Chimie & Sécurité", type: "Activités", desc: "Analyse de fiches FDS de produits pro.", url: "ressources/seconde/securite-produits-chimiques/activites.html", date: "09/08/2026", category: "activites" },
            { id: "2nde_s1_cours", titre: "Cours - Sécurité des Produits Chimiques", type: "Cours", desc: "Risques chimiques, FDS, EPI et consignes labo.", url: "ressources/seconde/securite-produits-chimiques/cours.html", date: "09/08/2026", category: "cours" },
            { id: "2nde_s1_td", titre: "TD - Sécurité des Produits Chimiques", type: "Exercices", desc: "Exercices d'analyse d'étiquettes.", url: "ressources/seconde/securite-produits-chimiques/td.html", date: "09/08/2026", category: "exercices" },
            { id: "2nde_s1_tp", titre: "TP Expérimental - Sécurité Chimie", type: "TP Expérimental", desc: "TP de sensibilisation et EPI en labo.", url: "ressources/seconde/securite-produits-chimiques/tp.html", date: "09/08/2026", category: "tp" },
            { id: "2nde_s1_ccf", titre: "Évaluation CCF - Sécurité Chimie", type: "Évaluation CCF", desc: "Évaluation type CCF Sciences sur 20 pts.", url: "ressources/seconde/securite-produits-chimiques/ccf.html", date: "09/08/2026", category: "ccf" }
        ]
    },
    {
        id: "seq_2nde_s_2",
        title: "Séquence 2 : Solutions Acides, Basiques & Mesure du pH",
        items: [
            { id: "2nde_s2_auto", titre: "Automatismes - pH & Solutions", type: "Automatismes", desc: "Échelle de pH 0 à 14 et ions H+/OH-.", url: "ressources/seconde/solutions-acides-bases-ph/automatismes.html", date: "09/08/2026", category: "automatismes" },
            { id: "2nde_s2_act", titre: "Activités - pH & Solutions", type: "Activités", desc: "Investigation sur l'acidité d'effluents.", url: "ressources/seconde/solutions-acides-bases-ph/activites.html", date: "09/08/2026", category: "activites" },
            { id: "2nde_s2_cours", titre: "Cours - Solutions Acides, Basiques & pH", type: "Cours", desc: "Dilution, pH-mètre et réaction de neutralisation.", url: "ressources/seconde/solutions-acides-bases-ph/cours.html", date: "09/08/2026", category: "cours" },
            { id: "2nde_s2_td", titre: "TD - Solutions Acides, Basiques & pH", type: "Exercices", desc: "Exercices de dilution et calculs de pH.", url: "ressources/seconde/solutions-acides-bases-ph/td.html", date: "09/08/2026", category: "exercices" },
            { id: "2nde_s2_tp", titre: "TP Expérimental - Mesure de pH", type: "TP Expérimental", desc: "Dosage et mesure de pH au pH-mètre.", url: "ressources/seconde/solutions-acides-bases-ph/tp.html", date: "09/08/2026", category: "tp" },
            { id: "2nde_s2_ccf", titre: "Évaluation CCF - pH & Solutions", type: "Évaluation CCF", desc: "Évaluation type CCF Sciences sur 20 pts.", url: "ressources/seconde/solutions-acides-bases-ph/ccf.html", date: "09/08/2026", category: "ccf" }
        ]
    },
    {
        id: "seq_2nde_s_3",
        title: "Séquence 3 : Mouvement, Trajectoire & Vitesse Moyenne",
        items: [
            { id: "2nde_s3_auto", titre: "Automatismes - Vitesse & Mouvement", type: "Automatismes", desc: "Conversions m/s et km/h.", url: "ressources/seconde/mouvement-vitesse/automatismes.html", date: "09/08/2026", category: "automatismes" },
            { id: "2nde_s3_act", titre: "Activités - Vitesse & Mouvement", type: "Activités", desc: "Étude cinématique de transport.", url: "ressources/seconde/mouvement-vitesse/activites.html", date: "09/08/2026", category: "activites" },
            { id: "2nde_s3_cours", titre: "Cours - Mouvement & Vitesse Moyenne", type: "Cours", desc: "Référentiel, trajectoire et formule v = d / t.", url: "ressources/seconde/mouvement-vitesse/cours.html", date: "09/08/2026", category: "cours" },
            { id: "2nde_s3_td", titre: "TD - Mouvement & Vitesse Moyenne", type: "Exercices", desc: "Exercices de calcul de vitesse et distance.", url: "ressources/seconde/mouvement-vitesse/td.html", date: "09/08/2026", category: "exercices" },
            { id: "2nde_s3_tp", titre: "TP Expérimental - Cinématique", type: "TP Expérimental", desc: "Mesure expérimentale de vitesse.", url: "ressources/seconde/mouvement-vitesse/tp.html", date: "09/08/2026", category: "tp" },
            { id: "2nde_s3_ccf", titre: "Évaluation CCF - Mouvement", type: "Évaluation CCF", desc: "Évaluation type CCF Sciences sur 20 pts.", url: "ressources/seconde/mouvement-vitesse/ccf.html", date: "09/08/2026", category: "ccf" }
        ]
    },
    {
        id: "seq_2nde_s_4",
        title: "Séquence 4 : Poids, Masse & Caractéristiques de Forces",
        items: [
            { id: "2nde_s4_auto", titre: "Automatismes - Poids & Forces", type: "Automatismes", desc: "P = m x g et 4 caractéristiques.", url: "ressources/seconde/poids-masse-forces/automatismes.html", date: "09/08/2026", category: "automatismes" },
            { id: "2nde_s4_act", titre: "Activités - Poids & Forces", type: "Activités", desc: "Pesée de charges et forces de levage.", url: "ressources/seconde/poids-masse-forces/activites.html", date: "09/08/2026", category: "activites" },
            { id: "2nde_s4_cours", titre: "Cours - Poids, Masse & Forces", type: "Cours", desc: "Vecteur force, masse (kg), poids (N) et g = 9,81 N/kg.", url: "ressources/seconde/poids-masse-forces/cours.html", date: "09/08/2026", category: "cours" },
            { id: "2nde_s4_td", titre: "TD - Poids, Masse & Forces", type: "Exercices", desc: "Exercices de calculs de forces.", url: "ressources/seconde/poids-masse-forces/td.html", date: "09/08/2026", category: "exercices" },
            { id: "2nde_s4_tp", titre: "TP Expérimental - Dynamomètre", type: "TP Expérimental", desc: "TP de mesure au dynamomètre.", url: "ressources/seconde/poids-masse-forces/tp.html", date: "09/08/2026", category: "tp" },
            { id: "2nde_s4_ccf", titre: "Évaluation CCF - Forces", type: "Évaluation CCF", desc: "Évaluation type CCF Sciences sur 20 pts.", url: "ressources/seconde/poids-masse-forces/ccf.html", date: "09/08/2026", category: "ccf" }
        ]
    },
    {
        id: "seq_2nde_s_5",
        title: "Séquence 5 : Équilibre d'un Solide & Moment d'une Force",
        items: [
            { id: "2nde_s5_auto", titre: "Automatismes - Statique", type: "Automatismes", desc: "M = F x d et théorème des moments.", url: "ressources/seconde/equilibre-solide-moment/automatismes.html", date: "09/08/2026", category: "automatismes" },
            { id: "2nde_s5_act", titre: "Activités - Statique", type: "Activités", desc: "Effet de levier et clé dynamométrique.", url: "ressources/seconde/equilibre-solide-moment/activites.html", date: "09/08/2026", category: "activites" },
            { id: "2nde_s5_cours", titre: "Cours - Équilibre & Moment d'une Force", type: "Cours", desc: "Conditions d'équilibre et moment N.m.", url: "ressources/seconde/equilibre-solide-moment/cours.html", date: "09/08/2026", category: "cours" },
            { id: "2nde_s5_td", titre: "TD - Équilibre & Moment d'une Force", type: "Exercices", desc: "Exercices de statique appliqués.", url: "ressources/seconde/equilibre-solide-moment/td.html", date: "09/08/2026", category: "exercices" },
            { id: "2nde_s5_tp", titre: "TP Expérimental - Moments & Levier", type: "TP Expérimental", desc: "TP expérimental sur banc de statique.", url: "ressources/seconde/equilibre-solide-moment/tp.html", date: "09/08/2026", category: "tp" },
            { id: "2nde_s5_ccf", titre: "Évaluation CCF - Statique", type: "Évaluation CCF", desc: "Évaluation type CCF Sciences sur 20 pts.", url: "ressources/seconde/equilibre-solide-moment/ccf.html", date: "09/08/2026", category: "ccf" }
        ]
    },
    {
        id: "seq_2nde_s_6",
        title: "Séquence 6 : Électricité : Circuit à Courant Continu",
        items: [
            { id: "2nde_s6_auto", titre: "Automatismes - Électricité CC", type: "Automatismes", desc: "Loi d'Ohm U = R x I et mailles/nœuds.", url: "ressources/seconde/electricite-circuit-continu/automatismes.html", date: "09/08/2026", category: "automatismes" },
            { id: "2nde_s6_act", titre: "Activités - Électricité CC", type: "Activités", desc: "Étude d'un circuit de véhicule.", url: "ressources/seconde/electricite-circuit-continu/activites.html", date: "09/08/2026", category: "activites" },
            { id: "2nde_s6_cours", titre: "Cours - Circuit à Courant Continu", type: "Cours", desc: "Tension U, intensité I, résistance R et loi d'Ohm.", url: "ressources/seconde/electricite-circuit-continu/cours.html", date: "09/08/2026", category: "cours" },
            { id: "2nde_s6_td", titre: "TD - Circuit à Courant Continu", type: "Exercices", desc: "Exercices de loi d'Ohm et mailles.", url: "ressources/seconde/electricite-circuit-continu/td.html", date: "09/08/2026", category: "exercices" },
            { id: "2nde_s6_tp", titre: "TP Expérimental - Câblage & Mesures", type: "TP Expérimental", desc: "TP de câblage et mesures au multimètre.", url: "ressources/seconde/electricite-circuit-continu/tp.html", date: "09/08/2026", category: "tp" },
            { id: "2nde_s6_ccf", titre: "Évaluation CCF - Électricité CC", type: "Évaluation CCF", desc: "Évaluation type CCF Sciences sur 20 pts.", url: "ressources/seconde/electricite-circuit-continu/ccf.html", date: "09/08/2026", category: "ccf" }
        ]
    },
    {
        id: "seq_2nde_s_7",
        title: "Séquence 7 : Puissance & Énergie Électrique",
        items: [
            { id: "2nde_s7_auto", titre: "Automatismes - Puissance & Énergie", type: "Automatismes", desc: "P = U x I, E = P x t et effet Joule.", url: "ressources/seconde/puissance-energie-electrique/automatismes.html", date: "09/08/2026", category: "automatismes" },
            { id: "2nde_s7_act", titre: "Activités - Puissance & Énergie", type: "Activités", desc: "Estimation de facture et disjoncteurs.", url: "ressources/seconde/puissance-energie-electrique/activites.html", date: "09/08/2026", category: "activites" },
            { id: "2nde_s7_cours", titre: "Cours - Puissance & Énergie Électrique", type: "Cours", desc: "Watts, kWh, Joules, effet Joule et disjoncteurs.", url: "ressources/seconde/puissance-energie-electrique/cours.html", date: "09/08/2026", category: "cours" },
            { id: "2nde_s7_td", titre: "TD - Puissance & Énergie Électrique", type: "Exercices", desc: "Exercices de bilan énergétique.", url: "ressources/seconde/puissance-energie-electrique/td.html", date: "09/08/2026", category: "exercices" },
            { id: "2nde_s7_tp", titre: "TP Expérimental - Wattmètre", type: "TP Expérimental", desc: "Mesure de puissance d'équipements pro.", url: "ressources/seconde/puissance-energie-electrique/tp.html", date: "09/08/2026", category: "tp" },
            { id: "2nde_s7_ccf", titre: "Évaluation CCF - Énergie Électrique", type: "Évaluation CCF", desc: "Évaluation type CCF Sciences sur 20 pts.", url: "ressources/seconde/puissance-energie-electrique/ccf.html", date: "09/08/2026", category: "ccf" }
        ]
    },
    {
        id: "seq_2nde_s_8",
        title: "Séquence 8 : Acoustique, Optique & Transferts Thermiques",
        items: [
            { id: "2nde_s8_auto", titre: "Automatismes - Waves & Thermique", type: "Automatismes", desc: "f = 1/T, décibels et réflexion.", url: "ressources/seconde/acoustique-optique-thermique/automatismes.html", date: "09/08/2026", category: "automatismes" },
            { id: "2nde_s8_act", titre: "Activités - Waves & Thermique", type: "Activités", desc: "Isolation thermique d'un atelier.", url: "ressources/seconde/acoustique-optique-thermique/activites.html", date: "09/08/2026", category: "activites" },
            { id: "2nde_s8_cours", titre: "Cours - Acoustique, Optique & Thermique", type: "Cours", desc: "Son (f, dB), réflexion optique et conduction/convection/rayonnement.", url: "ressources/seconde/acoustique-optique-thermique/cours.html", date: "09/08/2026", category: "cours" },
            { id: "2nde_s8_td", titre: "TD - Acoustique, Optique & Thermique", type: "Exercices", desc: "Exercices de bilan thermique et ondes.", url: "ressources/seconde/acoustique-optique-thermique/td.html", date: "09/08/2026", category: "exercices" },
            { id: "2nde_s8_tp", titre: "TP Expérimental - Sonomètre & Calo", type: "TP Expérimental", desc: "TP de mesure d'isolement thermique et sonore.", url: "ressources/seconde/acoustique-optique-thermique/tp.html", date: "09/08/2026", category: "tp" },
            { id: "2nde_s8_ccf", titre: "Évaluation CCF - Waves & Thermique", type: "Évaluation CCF", desc: "Évaluation type CCF Sciences sur 20 pts.", url: "ressources/seconde/acoustique-optique-thermique/ccf.html", date: "09/08/2026", category: "ccf" }
        ]
    }
];

// Appliquer aux formations dans formations.json
formations.forEach(f => {
    if (f.id === '3pm') {
        f.resources.sciences = sciences3PM;
    }
    if (f.id === 'cap1-rics' || f.id === 'cap2-rics') {
        f.resources.maths = mathsCAP;
        f.resources.sciences = sciencesCAP;
    }
    if (f.id.startsWith('2')) {
        f.resources.maths = mathsSeconde;
        f.resources.sciences = sciencesSeconde;
    }
    if (f.id.startsWith('1')) {
        f.resources.maths = mathsSeconde; // Base solide pour Première Pro
        f.resources.sciences = sciencesSeconde;
    }
    if (f.id.startsWith('t')) {
        f.resources.maths = mathsSeconde; // Base solide pour Terminale Pro
        f.resources.sciences = sciencesSeconde;
    }
    if (f.id.startsWith('bts')) {
        f.resources.maths = mathsSeconde;
        f.resources.sciences = sciencesSeconde;
    }
});

fs.writeFileSync(path, JSON.stringify(formations, null, 2), 'utf8');
console.log('Successfully updated data/formations.json for all classes!');
