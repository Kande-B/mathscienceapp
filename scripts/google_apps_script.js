
/**
 * Script Google Apps Script pour synchroniser Maths-Sciences-App
 * 
 * 1. Exécutez creerArborescence() UNE SEULE FOIS depuis cet éditeur.
 * 2. Déployez en tant qu'application Web (Exécuter en tant que : Vous, Accès : Tous).
 */

const ROOT_FOLDER_NAME = 'Maths-Sciences-App';

const FORMATIONS = [
  {
    "id": "3pm",
    "folderName": "3pm",
    "maths": [
      "Séquence : Proportionnalité et pourcentages",
      "Séquence : Géométrie plane et aires",
      "Séquence : Opérations sur les nombres rationnels",
      "Séquence : Puissances",
      "Séquence : Fraction irréductible, PGCD",
      "Séquence : Calcul littéral, identités remarquables",
      "Séquence : Équation du premier degré à une inconnue",
      "Séquence : Agrandissement et réduction",
      "Séquence : Gestion d’unités",
      "Séquence : types brevet",
      "Séquence : Statistiques",
      "Séquence : Notion de fonction",
      "Séquence : Probabilités",
      "Séquence : Théorème de Thalès",
      "Séquence : Trigonométrie",
      "Séquence : Introduction à la programmation",
      "Séquence : Variables, fonctions dans le codage",
      "Séquence : Création d’algorithmes",
      "Séquence : Usage d’outils comme Scratch",
      "Séquence : révision - Calculs numériques"
    ],
    "sciences": [
      "Séquence : Organisation et transformations de la matière",
      "Séquence : Constitution de la matière (atomes, ions, molécules)",
      "Séquence : États de la matière et changements d’état",
      "Séquence : Mélanges, solutions et corps purs",
      "Séquence : Transformations chimiques et conservation de la matière",
      "Séquence : Organisation de la matière dans l’Univers",
      "Séquence : Mouvements et interactions",
      "Séquence : Caractérisation d’un mouvement (trajectoire, vitesse)",
      "Séquence : Forces et interactions (contact, à distance)",
      "Séquence : Lois du mouvement et principe d’inertie",
      "Séquence : Actions mutuelles et effets sur le mouvement",
      "Séquence : Énergie et ses conversions",
      "Séquence : Formes d’énergie (mécanique, chimique, thermique…)",
      "Séquence : Transferts et conversions d’énergie",
      "Séquence : Travail mécanique et puissance",
      "Séquence : Chaînes et bilans énergétiques",
      "Séquence : Énergie électrique simple (tension, courant)",
      "Séquence : Des signaux pour observer et communiquer",
      "Séquence : Signaux lumineux et signaux sonores",
      "Séquence : Caractéristiques : amplitude, fréquence, longueur d’onde",
      "Séquence : Propagation des signaux (milieux, vitesse)",
      "Séquence : Conversion d’un signal en information",
      "Séquence : Analyse et traitement des signaux"
    ]
  },
  {
    "id": "cap1-rics",
    "folderName": "cap1-rics",
    "maths": [
      "Séquence : Développés de surfaces - Cylindre et cône",
      "Séquence : Trigonométrie pour le chaudronnier",
      "Séquence : Statistique à une variable",
      "Séquence : Résolution d’un problème relevant de la proportionnalité",
      "Séquence : Résolution d’un problème du premier degré",
      "Séquence : Calculs commerciaux et financiers",
      "Séquence : Calculs numériques",
      "Séquence : Automatismes",
      "Séquence : Calculs de masse et volume des métaux",
      "Séquence : Probabilités",
      "Séquence : Fonctions",
      "Séquence : Géométrie",
      "Séquence : Algorithmique et programmation",
      "Séquence : Formulaire Chaudronnerie"
    ],
    "sciences": [
      "Séquence : Sécurité : travailler en toute sécurité",
      "Séquence : Risques électriques et mesures de prévention",
      "Séquence : Manipulation sécurisée des produits chimiques",
      "Séquence : Protection contre les rayonnements lumineux et sonores",
      "Séquence : Électricité : caractériser et exploiter un signal électrique",
      "Séquence : Circuits électriques simples",
      "Séquence : Grandeurs électriques : tension, courant, résistance",
      "Séquence : Lois de l’électricité : loi d’Ohm, lois des mailles et des nœuds",
      "Séquence : Mécanique : décrire le mouvement",
      "Séquence : Notion de mouvement et de repos",
      "Séquence : Forces et interactions",
      "Séquence : Lois de Newton",
      "Séquence : Chimie : caractériser une solution",
      "Séquence : Concentration massique d’une solution",
      "Séquence : Techniques de dilution",
      "Séquence : Préparation de solutions de concentration donnée",
      "Séquence : Acoustique : exploiter un signal sonore",
      "Séquence : Propagation du son dans différents milieux",
      "Séquence : Caractéristiques du son : fréquence, amplitude, timbre",
      "Séquence : Applications de l’acoustique dans le domaine professionnel",
      "Séquence : Thermique : caractériser les échanges d’énergie",
      "Séquence : Mesure de la température",
      "Séquence : Transfert thermique : conduction, convection, rayonnement",
      "Séquence : Changements d’état et chaleur latente",
      "Séquence : Optique : caractériser un signal lumineux",
      "Séquence : Propagation de la lumière",
      "Séquence : Réflexion et réfraction",
      "Séquence : Instruments optiques : lentilles et miroirs"
    ]
  },
  {
    "id": "cap2-rics",
    "folderName": "cap2-rics",
    "maths": [
      "Séquence : Notions de résistance des matériaux",
      "Séquence : Statistique à une variable",
      "Séquence : Résolution d’un problème relevant de la proportionnalité",
      "Séquence : Résolution d’un problème du premier degré",
      "Séquence : Calculs commerciaux et financiers",
      "Séquence : Calculs numériques",
      "Séquence : Automatismes",
      "Séquence : RDM - Dimensionnement simple",
      "Séquence : Probabilités",
      "Séquence : Fonctions",
      "Séquence : Géométrie",
      "Séquence : Algorithmique et programmation",
      "Séquence : Tableau des sections courantes"
    ],
    "sciences": [
      "Séquence : Sécurité : travailler en toute sécurité",
      "Séquence : Risques électriques et mesures de prévention",
      "Séquence : Manipulation sécurisée des produits chimiques",
      "Séquence : Protection contre les rayonnements lumineux et sonores",
      "Séquence : Électricité : caractériser et exploiter un signal électrique",
      "Séquence : Circuits électriques simples",
      "Séquence : Grandeurs électriques : tension, courant, résistance",
      "Séquence : Lois de l’électricité : loi d’Ohm, lois des mailles et des nœuds",
      "Séquence : Mécanique : décrire le mouvement",
      "Séquence : Notion de mouvement et de repos",
      "Séquence : Forces et interactions",
      "Séquence : Lois de Newton",
      "Séquence : Chimie : caractériser une solution",
      "Séquence : Concentration massique d’une solution",
      "Séquence : Techniques de dilution",
      "Séquence : Préparation de solutions de concentration donnée",
      "Séquence : Acoustique : exploiter un signal sonore",
      "Séquence : Propagation du son dans différents milieux",
      "Séquence : Caractéristiques du son : fréquence, amplitude, timbre",
      "Séquence : Applications de l’acoustique dans le domaine professionnel",
      "Séquence : Thermique : caractériser les échanges d’énergie",
      "Séquence : Mesure de la température",
      "Séquence : Transfert thermique : conduction, convection, rayonnement",
      "Séquence : Changements d’état et chaleur latente",
      "Séquence : Optique : caractériser un signal lumineux",
      "Séquence : Propagation de la lumière",
      "Séquence : Réflexion et réfraction",
      "Séquence : Instruments optiques : lentilles et miroirs"
    ]
  },
  {
    "id": "2mmv",
    "folderName": "2mmv",
    "maths": [
      "Séquence : Fonctions et vitesses de rotation",
      "Séquence : Électricité automobile - Bases",
      "Séquence : Statistique et probabilités",
      "Séquence : Automatismes",
      "Séquence : Vocabulaire ensembliste et logique",
      "Séquence : Mécanique - Rapport de transmission",
      "Séquence : Algèbre – Analyse",
      "Séquence : Géométrie",
      "Séquence : Algorithmique et programmation",
      "Séquence : Unités et conversions"
    ],
    "sciences": [
      "Séquence : Rayonnement Thermique et Effet de Serre",
      "Séquence : Sécurité : travailler en toute sécurité",
      "Séquence : Risques électriques et mesures de prévention",
      "Séquence : Manipulation sécurisée des produits chimiques",
      "Séquence : Protection contre les rayonnements lumineux et sonores",
      "Séquence : Électricité : caractériser et exploiter un signal électrique",
      "Séquence : Circuits électriques simples",
      "Séquence : Grandeurs électriques : tension, courant, résistance",
      "Séquence : Lois de l’électricité : loi d’Ohm, lois des mailles et des nœuds",
      "Séquence : Mécanique : décrire le mouvement",
      "Séquence : Notion de mouvement et de repos",
      "Séquence : Forces et interactions",
      "Séquence : Lois de Newton",
      "Séquence : Chimie : caractériser une solution",
      "Séquence : Concentration massique d’une solution",
      "Séquence : Techniques de dilution",
      "Séquence : Préparation de solutions de concentration donnée",
      "Séquence : Acoustique : exploiter un signal sonore",
      "Séquence : Propagation du son dans différents milieux",
      "Séquence : Caractéristiques du son : fréquence, amplitude, timbre",
      "Séquence : Applications de l’acoustique dans le domaine professionnel",
      "Séquence : Thermique : caractériser les échanges d’énergie",
      "Séquence : Mesure de la température",
      "Séquence : Transfert thermique : conduction, convection, rayonnement",
      "Séquence : Changements d’état et chaleur latente",
      "Séquence : Optique : caractériser un signal lumineux",
      "Séquence : Propagation de la lumière",
      "Séquence : Réflexion et réfraction",
      "Séquence : Instruments optiques : lentilles et miroirs"
    ]
  },
  {
    "id": "1mvm",
    "folderName": "1mvm",
    "maths": [
      "Séquence : Angles et géométrie du châssis moto",
      "Séquence : Calculs commerciaux et financiers",
      "Séquence : Automatismes",
      "Séquence : Vocabulaire ensembliste et logique",
      "Séquence : Calculs de puissance moteur",
      "Séquence : Statistique à deux variables quantitatives",
      "Séquence : Probabilités",
      "Séquence : Suites numériques",
      "Séquence : Résolution graphique d’équations et d’inéquations",
      "Séquence : Fonctions polynômes de degré 2",
      "Séquence : Fonction dérivée et étude des variations d’une fonction",
      "Séquence : Vecteurs du plan",
      "Séquence : Trigonométrie",
      "Séquence : Algorithmique et programmation"
    ],
    "sciences": [
      "Séquence : Prévoir une réaction d'oxydoréduction et protéger les métaux contre la corrosion",
      "Séquence : Stocker l'énergie à l'aide d'un système électrochimique",
      "Séquence : Conversion Courant Alternatif/Continu",
      "Séquence : Mesures et incertitudes",
      "Séquence : Sources d’erreur et dispersion",
      "Séquence : Chiffres significatifs et incertitude",
      "Séquence : Organisation et transformations de la matière",
      "Séquence : Structure atomique, liaison chimique",
      "Séquence : Transformations chimiques et bilan",
      "Séquence : Dosages et réactivité",
      "Séquence : Mouvement, interactions et champs",
      "Séquence : Champ de gravitation et électrostatique",
      "Séquence : Fluide au repos : pression et loi de Mariotte",
      "Séquence : Variations de vitesse / forces",
      "Séquence : Énergie : conversions et transferts",
      "Séquence : Énergie électrique et mécanique",
      "Séquence : Bilans et chaînes énergétiques",
      "Séquence : Ondes et signaux",
      "Séquence : Ondes mécaniques et acoustiques",
      "Séquence : Lumière : propagation, spectre",
      "Séquence : Signal et information"
    ]
  },
  {
    "id": "tmvm",
    "folderName": "tmvm",
    "maths": [
      "Séquence : Diagnostic électronique et OBD",
      "Séquence : Animation Fractale de Sierpinski",
      "Séquence : Suites Géométriques Mémo",
      "Séquence : sur les suites géométrique",
      "Séquence : Calculs commerciaux et financiers",
      "Séquence : Automatismes",
      "Séquence : Vocabulaire ensembliste et logique",
      "Séquence : Statistique à deux variables quantitatives",
      "Séquence : Probabilités conditionnelles et indépendance",
      "Séquence : Suites numériques",
      "Séquence : Limite d’une fonction en un point et en l’infini",
      "Séquence : Fonction exponentielle",
      "Séquence : Fonction dérivée et étude des variations d’une fonction",
      "Séquence : Produit scalaire et applications",
      "Séquence : Trigonométrie",
      "Séquence : Algorithmique et programmation",
      "Séquence : révision - Épreuve E3",
      "Séquence : Annales corrigées - Bac Pro MVM"
    ],
    "sciences": [
      "Séquence : Signaux : Comment transmettre l'information ?",
      "Séquence : Comment obtenir de l'énergie électrique par induction électromagnétique ?",
      "Séquence : Caractériser le réseau triphasé",
      "Séquence : Comment obtenir de l'énergie mécanique à l'aide d'un moteur électrique synchrone ou asynchrone ?",
      "Séquence : Transporter l’énergie sous forme électrique",
      "Séquence : Stocker l’énergie à l’aide d’un système électrochimique",
      "Séquence : Obtenir un courant continu à partir d’un courant alternatif et inversement",
      "Séquence : Obtenir de l’énergie mécanique à l’aide d’un moteur électrique",
      "Séquence : Évaluer la puissance consommée par un appareil électrique",
      "Séquence : Distinguer les trois modes de transfert thermique",
      "Séquence : Comparer les propriétés de matériaux vis-à-vis de la conduction thermique",
      "Séquence : Déterminer la conductance thermique d’une paroi plane",
      "Séquence : Exploiter la relation de Pascal (hydraulique)",
      "Séquence : Mettre en évidence la force de traînée et la force de portance",
      "Séquence : Mettre en évidence l’effet Venturi",
      "Séquence : Exploiter la relation de Bernoulli",
      "Séquence : Réaliser une transformation d’oxydoréduction",
      "Séquence : Établir un tableau d’avancement d’une réaction chimique",
      "Séquence : Identifier un réactif limitant",
      "Séquence : Étudier l’influence de paramètres sur la vitesse d’une réaction chimique",
      "Séquence : Utiliser la nomenclature IUPAC",
      "Séquence : Synthétiser expérimentalement un polymère / bioplastique",
      "Séquence : Transmission par propagation libre ou guidée",
      "Séquence : Fonctionnement de la fibre optique (réflexion totale)",
      "Séquence : Étudier la diffraction des ondes lumineuses",
      "Séquence : Étudier la chaîne de transmission d’informations",
      "Séquence : Étudier le principe du haut-parleur et du microphone",
      "Séquence : Exploiter des représentations graphiques",
      "Séquence : Résolution d’équations et identification de proportionnalité",
      "Séquence : Caractériser la propagation d'un signal sonore"
    ]
  },
  {
    "id": "1mmev",
    "folderName": "1mmev",
    "maths": [
      "Séquence : Hydraulique - Notions de base",
      "Séquence : Calculs commerciaux et financiers",
      "Séquence : Automatismes",
      "Séquence : Vocabulaire ensembliste et logique",
      "Séquence : Statistique à deux variables quantitatives",
      "Séquence : Probabilités",
      "Séquence : Suites numériques",
      "Séquence : Résolution graphique d’équations et d’inéquations",
      "Séquence : Fonctions polynômes de degré 2",
      "Séquence : Fonction dérivée et étude des variations d’une fonction",
      "Séquence : Géométrie dans l’espace",
      "Séquence : Vecteurs du plan",
      "Séquence : Trigonométrie",
      "Séquence : Algorithmique et programmation"
    ],
    "sciences": [
      "Séquence : Prévoir une réaction d'oxydoréduction et protéger les métaux contre la corrosion",
      "Séquence : Stocker l'énergie à l'aide d'un système électrochimique",
      "Séquence : Conversion Courant Alternatif/Continu",
      "Séquence : Mesures et incertitudes",
      "Séquence : Sources d’erreur et dispersion",
      "Séquence : Chiffres significatifs et incertitude",
      "Séquence : Organisation et transformations de la matière",
      "Séquence : Structure atomique, liaison chimique",
      "Séquence : Transformations chimiques et bilan",
      "Séquence : Dosages et réactivité",
      "Séquence : Mouvement, interactions et champs",
      "Séquence : Champ de gravitation et électrostatique",
      "Séquence : Fluide au repos : pression et loi de Mariotte",
      "Séquence : Variations de vitesse / forces",
      "Séquence : Énergie : conversions et transferts",
      "Séquence : Énergie électrique et mécanique",
      "Séquence : Bilans et chaînes énergétiques",
      "Séquence : Ondes et signaux",
      "Séquence : Ondes mécaniques et acoustiques",
      "Séquence : Lumière : propagation, spectre",
      "Séquence : Signal et information"
    ]
  },
  {
    "id": "tmmev",
    "folderName": "tmmev",
    "maths": [
      "Séquence : Animation Fractale de Sierpinski",
      "Séquence : Suites Géométriques Mémo",
      "Séquence : sur les suites géométrique",
      "Séquence : Calculs commerciaux et financiers",
      "Séquence : Automatismes",
      "Séquence : Vocabulaire ensembliste et logique",
      "Séquence : Statistique à deux variables quantitatives",
      "Séquence : Probabilités conditionnelles et indépendance",
      "Séquence : Suites numériques",
      "Séquence : Limite d’une fonction en un point et en l’infini",
      "Séquence : Fonction exponentielle",
      "Séquence : Fonction dérivée et étude des variations d’une fonction",
      "Séquence : Produit scalaire et applications",
      "Séquence : Trigonométrie",
      "Séquence : Algorithmique et programmation",
      "Séquence : révision Bac Pro - MMEV"
    ],
    "sciences": [
      "Séquence : Signaux : Comment transmettre l'information ?",
      "Séquence : Comment obtenir de l'énergie électrique par induction électromagnétique ?",
      "Séquence : Caractériser le réseau triphasé",
      "Séquence : Comment obtenir de l'énergie mécanique à l'aide d'un moteur électrique synchrone ou asynchrone ?",
      "Séquence : Transporter l’énergie sous forme électrique",
      "Séquence : Stocker l’énergie à l’aide d’un système électrochimique",
      "Séquence : Obtenir un courant continu à partir d’un courant alternatif et inversement",
      "Séquence : Obtenir de l’énergie mécanique à l’aide d’un moteur électrique",
      "Séquence : Évaluer la puissance consommée par un appareil électrique",
      "Séquence : Distinguer les trois modes de transfert thermique",
      "Séquence : Comparer les propriétés de matériaux vis-à-vis de la conduction thermique",
      "Séquence : Déterminer la conductance thermique d’une paroi plane",
      "Séquence : Exploiter la relation de Pascal (hydraulique)",
      "Séquence : Mettre en évidence la force de traînée et la force de portance",
      "Séquence : Mettre en évidence l’effet Venturi",
      "Séquence : Exploiter la relation de Bernoulli",
      "Séquence : Réaliser une transformation d’oxydoréduction",
      "Séquence : Établir un tableau d’avancement d’une réaction chimique",
      "Séquence : Identifier un réactif limitant",
      "Séquence : Étudier l’influence de paramètres sur la vitesse d’une réaction chimique",
      "Séquence : Utiliser la nomenclature IUPAC",
      "Séquence : Synthétiser expérimentalement un polymère / bioplastique",
      "Séquence : Transmission par propagation libre ou guidée",
      "Séquence : Fonctionnement de la fibre optique (réflexion totale)",
      "Séquence : Étudier la diffraction des ondes lumineuses",
      "Séquence : Étudier la chaîne de transmission d’informations",
      "Séquence : Étudier le principe du haut-parleur et du microphone",
      "Séquence : Exploiter des représentations graphiques",
      "Séquence : Résolution d’équations et identification de proportionnalité",
      "Séquence : Caractériser la propagation d'un signal sonore"
    ]
  },
  {
    "id": "2mp3d",
    "folderName": "2mp3d",
    "maths": [
      "Séquence : Géométrie dans l'espace et projections",
      "Séquence : Fonctions et courbes paramétriques",
      "Séquence : Statistique et probabilités",
      "Séquence : Automatismes",
      "Séquence : Vocabulaire ensembliste et logique",
      "Séquence : Modélisation 3D - Volumes",
      "Séquence : Algèbre – Analyse",
      "Séquence : Algorithmique et programmation",
      "Séquence : Raccourcis et astuces Fusion 360",
      "Séquence : Projet : Modélisation d'une pièce mécanique"
    ],
    "sciences": [
      "Séquence : Rayonnement Thermique et Effet de Serre",
      "Séquence : Sécurité : travailler en toute sécurité",
      "Séquence : Risques électriques et mesures de prévention",
      "Séquence : Manipulation sécurisée des produits chimiques",
      "Séquence : Protection contre les rayonnements lumineux et sonores",
      "Séquence : Électricité : caractériser et exploiter un signal électrique",
      "Séquence : Circuits électriques simples",
      "Séquence : Grandeurs électriques : tension, courant, résistance",
      "Séquence : Lois de l’électricité : loi d’Ohm, lois des mailles et des nœuds",
      "Séquence : Mécanique : décrire le mouvement",
      "Séquence : Notion de mouvement et de repos",
      "Séquence : Forces et interactions",
      "Séquence : Lois de Newton",
      "Séquence : Chimie : caractériser une solution",
      "Séquence : Concentration massique d’une solution",
      "Séquence : Techniques de dilution",
      "Séquence : Préparation de solutions de concentration donnée",
      "Séquence : Acoustique : exploiter un signal sonore",
      "Séquence : Propagation du son dans différents milieux",
      "Séquence : Caractéristiques du son : fréquence, amplitude, timbre",
      "Séquence : Applications de l’acoustique dans le domaine professionnel",
      "Séquence : Thermique : caractériser les échanges d’énergie",
      "Séquence : Mesure de la température",
      "Séquence : Transfert thermique : conduction, convection, rayonnement",
      "Séquence : Changements d’état et chaleur latente",
      "Séquence : Optique : caractériser un signal lumineux",
      "Séquence : Propagation de la lumière",
      "Séquence : Réflexion et réfraction",
      "Séquence : Instruments optiques : lentilles et miroirs"
    ]
  },
  {
    "id": "1mp3d",
    "folderName": "1mp3d",
    "maths": [
      "Séquence : Nombres complexes et rotation 3D",
      "Séquence : Calculs commerciaux et financiers",
      "Séquence : Automatismes",
      "Séquence : Vocabulaire ensembliste et logique",
      "Séquence : Maillage et optimisation",
      "Séquence : Statistique à deux variables quantitatives",
      "Séquence : Probabilités",
      "Séquence : Suites numériques",
      "Séquence : Résolution graphique d’équations et d’inéquations",
      "Séquence : Fonctions polynômes de degré 2",
      "Séquence : Fonction dérivée et étude des variations d’une fonction",
      "Séquence : Géométrie dans l’espace",
      "Séquence : Vecteurs du plan",
      "Séquence : Trigonométrie",
      "Séquence : Algorithmique et programmation"
    ],
    "sciences": [
      "Séquence : Prévoir une réaction d'oxydoréduction et protéger les métaux contre la corrosion",
      "Séquence : Stocker l'énergie à l'aide d'un système électrochimique",
      "Séquence : Conversion Courant Alternatif/Continu",
      "Séquence : Mesures et incertitudes",
      "Séquence : Sources d’erreur et dispersion",
      "Séquence : Chiffres significatifs et incertitude",
      "Séquence : Organisation et transformations de la matière",
      "Séquence : Structure atomique, liaison chimique",
      "Séquence : Transformations chimiques et bilan",
      "Séquence : Dosages et réactivité",
      "Séquence : Mouvement, interactions et champs",
      "Séquence : Champ de gravitation et électrostatique",
      "Séquence : Fluide au repos : pression et loi de Mariotte",
      "Séquence : Variations de vitesse / forces",
      "Séquence : Énergie : conversions et transferts",
      "Séquence : Énergie électrique et mécanique",
      "Séquence : Bilans et chaînes énergétiques",
      "Séquence : Ondes et signaux",
      "Séquence : Ondes mécaniques et acoustiques",
      "Séquence : Lumière : propagation, spectre",
      "Séquence : Signal et information"
    ]
  },
  {
    "id": "tmp3d",
    "folderName": "tmp3d",
    "maths": [
      "Séquence : Animation Fractale de Sierpinski",
      "Séquence : Suites Géométriques Mémo",
      "Séquence : sur les suites géométrique",
      "Séquence : Calculs commerciaux et financiers",
      "Séquence : Automatismes",
      "Séquence : Vocabulaire ensembliste et logique",
      "Séquence : Statistique à deux variables quantitatives",
      "Séquence : Probabilités conditionnelles et indépendance",
      "Séquence : Suites numériques",
      "Séquence : Limite d’une fonction en un point et en l’infini",
      "Séquence : Fonction exponentielle",
      "Séquence : Fonction dérivée et étude des variations d’une fonction",
      "Séquence : Produit scalaire et applications",
      "Séquence : Trigonométrie",
      "Séquence : Algorithmique et programmation",
      "Séquence : révision - Épreuve maths/sciences"
    ],
    "sciences": [
      "Séquence : Signaux : Comment transmettre l'information ?",
      "Séquence : Comment obtenir de l'énergie électrique par induction électromagnétique ?",
      "Séquence : Caractériser le réseau triphasé",
      "Séquence : Comment obtenir de l'énergie mécanique à l'aide d'un moteur électrique synchrone ou asynchrone ?",
      "Séquence : Transporter l’énergie sous forme électrique",
      "Séquence : Stocker l’énergie à l’aide d’un système électrochimique",
      "Séquence : Obtenir un courant continu à partir d’un courant alternatif et inversement",
      "Séquence : Obtenir de l’énergie mécanique à l’aide d’un moteur électrique",
      "Séquence : Évaluer la puissance consommée par un appareil électrique",
      "Séquence : Distinguer les trois modes de transfert thermique",
      "Séquence : Comparer les propriétés de matériaux vis-à-vis de la conduction thermique",
      "Séquence : Déterminer la conductance thermique d’une paroi plane",
      "Séquence : Exploiter la relation de Pascal (hydraulique)",
      "Séquence : Mettre en évidence la force de traînée et la force de portance",
      "Séquence : Mettre en évidence l’effet Venturi",
      "Séquence : Exploiter la relation de Bernoulli",
      "Séquence : Réaliser une transformation d’oxydoréduction",
      "Séquence : Établir un tableau d’avancement d’une réaction chimique",
      "Séquence : Identifier un réactif limitant",
      "Séquence : Étudier l’influence de paramètres sur la vitesse d’une réaction chimique",
      "Séquence : Utiliser la nomenclature IUPAC",
      "Séquence : Synthétiser expérimentalement un polymère / bioplastique",
      "Séquence : Transmission par propagation libre ou guidée",
      "Séquence : Fonctionnement de la fibre optique (réflexion totale)",
      "Séquence : Étudier la diffraction des ondes lumineuses",
      "Séquence : Étudier la chaîne de transmission d’informations",
      "Séquence : Étudier le principe du haut-parleur et du microphone",
      "Séquence : Exploiter des représentations graphiques",
      "Séquence : Résolution d’équations et identification de proportionnalité",
      "Séquence : Caractériser la propagation d'un signal sonore"
    ]
  },
  {
    "id": "2mtne",
    "folderName": "2mtne",
    "maths": [
      "Séquence : Énergie et puissance électrique",
      "Séquence : Fonctions et modélisation de phénomènes",
      "Séquence : Statistique et probabilités",
      "Séquence : Automatismes",
      "Séquence : Vocabulaire ensembliste et logique",
      "Séquence : Algèbre – Analyse",
      "Séquence : Géométrie",
      "Séquence : Algorithmique et programmation"
    ],
    "sciences": [
      "Séquence : Rayonnement Thermique et Effet de Serre",
      "Séquence : Sécurité : travailler en toute sécurité",
      "Séquence : Risques électriques et mesures de prévention",
      "Séquence : Manipulation sécurisée des produits chimiques",
      "Séquence : Protection contre les rayonnements lumineux et sonores",
      "Séquence : Électricité : caractériser et exploiter un signal électrique",
      "Séquence : Circuits électriques simples",
      "Séquence : Grandeurs électriques : tension, courant, résistance",
      "Séquence : Lois de l’électricité : loi d’Ohm, lois des mailles et des nœuds",
      "Séquence : Mécanique : décrire le mouvement",
      "Séquence : Notion de mouvement et de repos",
      "Séquence : Forces et interactions",
      "Séquence : Lois de Newton",
      "Séquence : Chimie : caractériser une solution",
      "Séquence : Concentration massique d’une solution",
      "Séquence : Techniques de dilution",
      "Séquence : Préparation de solutions de concentration donnée",
      "Séquence : Acoustique : exploiter un signal sonore",
      "Séquence : Propagation du son dans différents milieux",
      "Séquence : Caractéristiques du son : fréquence, amplitude, timbre",
      "Séquence : Applications de l’acoustique dans le domaine professionnel",
      "Séquence : Thermique : caractériser les échanges d’énergie",
      "Séquence : Mesure de la température",
      "Séquence : Transfert thermique : conduction, convection, rayonnement",
      "Séquence : Changements d’état et chaleur latente",
      "Séquence : Optique : caractériser un signal lumineux",
      "Séquence : Propagation de la lumière",
      "Séquence : Réflexion et réfraction",
      "Séquence : Instruments optiques : lentilles et miroirs"
    ]
  },
  {
    "id": "1melec",
    "folderName": "1melec",
    "maths": [
      "Séquence : Nombres complexes en électrotechnique",
      "Séquence : Calculs commerciaux et financiers",
      "Séquence : Automatismes",
      "Séquence : Vocabulaire ensembliste et logique",
      "Séquence : Circuits RL - RC - RLC",
      "Séquence : Statistique à deux variables quantitatives",
      "Séquence : Probabilités",
      "Séquence : Suites numériques",
      "Séquence : Résolution graphique d’équations et d’inéquations",
      "Séquence : Fonctions polynômes de degré 2",
      "Séquence : Fonction dérivée et étude des variations d’une fonction",
      "Séquence : Géométrie dans l’espace",
      "Séquence : Vecteurs du plan",
      "Séquence : Trigonométrie",
      "Séquence : Algorithmique et programmation"
    ],
    "sciences": [
      "Séquence : Courant alternatif et déphasage",
      "Séquence : Prévoir une réaction d'oxydoréduction et protéger les métaux contre la corrosion",
      "Séquence : Stocker l'énergie à l'aide d'un système électrochimique",
      "Séquence : Mesures et incertitudes",
      "Séquence : Sources d’erreur et dispersion",
      "Séquence : Chiffres significatifs et incertitude",
      "Séquence : Organisation et transformations de la matière",
      "Séquence : Structure atomique, liaison chimique",
      "Séquence : Transformations chimiques et bilan",
      "Séquence : Dosages et réactivité",
      "Séquence : Mouvement, interactions et champs",
      "Séquence : Champ de gravitation et électrostatique",
      "Séquence : Fluide au repos : pression et loi de Mariotte",
      "Séquence : Variations de vitesse / forces",
      "Séquence : Énergie : conversions et transferts",
      "Séquence : Énergie électrique et mécanique",
      "Séquence : Bilans et chaînes énergétiques",
      "Séquence : Ondes et signaux",
      "Séquence : Ondes mécaniques et acoustiques",
      "Séquence : Lumière : propagation, spectre",
      "Séquence : Signal et information",
      "Séquence : Formulaire Électrotechnique"
    ]
  },
  {
    "id": "tmelec",
    "folderName": "tmelec",
    "maths": [
      "Séquence : Nombres complexes et circuits AC",
      "Séquence : Animation Fractale de Sierpinski",
      "Séquence : Suites Géométriques Mémo",
      "Séquence : sur les suites géométrique",
      "Séquence : Calculs commerciaux et financiers",
      "Séquence : Automatismes",
      "Séquence : Vocabulaire ensembliste et logique",
      "Séquence : Calculs d'impédance et puissance",
      "Séquence : Statistique à deux variables quantitatives",
      "Séquence : Probabilités conditionnelles et indépendance",
      "Séquence : Suites numériques",
      "Séquence : Limite d’une fonction en un point et en l’infini",
      "Séquence : Fonction exponentielle",
      "Séquence : Fonction dérivée et étude des variations d’une fonction",
      "Séquence : Produit scalaire et applications",
      "Séquence : Trigonométrie",
      "Séquence : Algorithmique et programmation"
    ],
    "sciences": [
      "Séquence : Automatismes et langage ladder",
      "Séquence : Signaux : Comment transmettre l'information ?",
      "Séquence : Comment obtenir de l'énergie électrique par induction électromagnétique ?",
      "Séquence : Caractériser le réseau triphasé",
      "Séquence : Comment obtenir de l'énergie mécanique à l'aide d'un moteur électrique synchrone ou asynchrone ?",
      "Séquence : Transporter l’énergie sous forme électrique",
      "Séquence : Stocker l’énergie à l’aide d’un système électrochimique",
      "Séquence : Obtenir un courant continu à partir d’un courant alternatif et inversement",
      "Séquence : Obtenir de l’énergie mécanique à l’aide d’un moteur électrique",
      "Séquence : Évaluer la puissance consommée par un appareil électrique",
      "Séquence : Distinguer les trois modes de transfert thermique",
      "Séquence : Comparer les propriétés de matériaux vis-à-vis de la conduction thermique",
      "Séquence : Déterminer la conductance thermique d’une paroi plane",
      "Séquence : Exploiter la relation de Pascal (hydraulique)",
      "Séquence : Mettre en évidence la force de traînée et la force de portance",
      "Séquence : Mettre en évidence l’effet Venturi",
      "Séquence : Exploiter la relation de Bernoulli",
      "Séquence : Réaliser une transformation d’oxydoréduction",
      "Séquence : Établir un tableau d’avancement d’une réaction chimique",
      "Séquence : Identifier un réactif limitant",
      "Séquence : Étudier l’influence de paramètres sur la vitesse d’une réaction chimique",
      "Séquence : Utiliser la nomenclature IUPAC",
      "Séquence : Synthétiser expérimentalement un polymère / bioplastique",
      "Séquence : Transmission par propagation libre ou guidée",
      "Séquence : Fonctionnement de la fibre optique (réflexion totale)",
      "Séquence : Étudier la diffraction des ondes lumineuses",
      "Séquence : Étudier la chaîne de transmission d’informations",
      "Séquence : Étudier le principe du haut-parleur et du microphone",
      "Séquence : Exploiter des représentations graphiques",
      "Séquence : Résolution d’équations et identification de proportionnalité",
      "Séquence : Caractériser la propagation d'un signal sonore",
      "Séquence : révision Bac Pro MELEC",
      "Séquence : Électrotechnique avancée",
      "Séquence : Site Interactif Complet : Induction Électromagnétique",
      "Séquence : Induction Électromagnétique - Version en ligne (GitHub Pages)"
    ]
  },
  {
    "id": "2remi",
    "folderName": "2remi",
    "maths": [
      "Séquence : Lecture de plans et cotation",
      "Séquence : Trigonométrie et géométrie dans l'atelier",
      "Séquence : Statistique et probabilités",
      "Séquence : Automatismes",
      "Séquence : Vocabulaire ensembliste et logique",
      "Séquence : Calculs d'usinage et vitesses",
      "Séquence : Algèbre – Analyse",
      "Séquence : Algorithmique et programmation"
    ],
    "sciences": [
      "Séquence : Rayonnement Thermique et Effet de Serre",
      "Séquence : Sécurité : travailler en toute sécurité",
      "Séquence : Risques électriques et mesures de prévention",
      "Séquence : Manipulation sécurisée des produits chimiques",
      "Séquence : Protection contre les rayonnements lumineux et sonores",
      "Séquence : Électricité : caractériser et exploiter un signal électrique",
      "Séquence : Circuits électriques simples",
      "Séquence : Grandeurs électriques : tension, courant, résistance",
      "Séquence : Lois de l’électricité : loi d’Ohm, lois des mailles et des nœuds",
      "Séquence : Mécanique : décrire le mouvement",
      "Séquence : Notion de mouvement et de repos",
      "Séquence : Forces et interactions",
      "Séquence : Lois de Newton",
      "Séquence : Chimie : caractériser une solution",
      "Séquence : Concentration massique d’une solution",
      "Séquence : Techniques de dilution",
      "Séquence : Préparation de solutions de concentration donnée",
      "Séquence : Acoustique : exploiter un signal sonore",
      "Séquence : Propagation du son dans différents milieux",
      "Séquence : Caractéristiques du son : fréquence, amplitude, timbre",
      "Séquence : Applications de l’acoustique dans le domaine professionnel",
      "Séquence : Thermique : caractériser les échanges d’énergie",
      "Séquence : Mesure de la température",
      "Séquence : Transfert thermique : conduction, convection, rayonnement",
      "Séquence : Changements d’état et chaleur latente",
      "Séquence : Optique : caractériser un signal lumineux",
      "Séquence : Propagation de la lumière",
      "Séquence : Réflexion et réfraction",
      "Séquence : Instruments optiques : lentilles et miroirs"
    ]
  },
  {
    "id": "1tci",
    "folderName": "1tci",
    "maths": [
      "Séquence : Calcul des développés complexes",
      "Séquence : RDM - Notions avancées",
      "Séquence : Automatismes",
      "Séquence : Vocabulaire ensembliste et logique",
      "Séquence : Chaudronnerie - Projets réels",
      "Séquence : Statistique à deux variables quantitatives",
      "Séquence : Probabilités",
      "Séquence : Suites numériques",
      "Séquence : Résolution graphique d’équations et d’inéquations",
      "Séquence : Fonctions polynômes de degré 2",
      "Séquence : Fonction dérivée et étude des variations d’une fonction",
      "Séquence : Géométrie dans l’espace",
      "Séquence : Vecteurs du plan",
      "Séquence : Trigonométrie",
      "Séquence : Algorithmique et programmation",
      "Séquence : Formulaire Chaudronnerie Industrielle"
    ],
    "sciences": [
      "Séquence : Prévoir une réaction d'oxydoréduction et protéger les métaux contre la corrosion",
      "Séquence : Stocker l'énergie à l'aide d'un système électrochimique",
      "Séquence : Conversion Courant Alternatif/Continu",
      "Séquence : Mesures et incertitudes",
      "Séquence : Sources d’erreur et dispersion",
      "Séquence : Chiffres significatifs et incertitude",
      "Séquence : Organisation et transformations de la matière",
      "Séquence : Structure atomique, liaison chimique",
      "Séquence : Transformations chimiques et bilan",
      "Séquence : Dosages et réactivité",
      "Séquence : Mouvement, interactions et champs",
      "Séquence : Champ de gravitation et électrostatique",
      "Séquence : Fluide au repos : pression et loi de Mariotte",
      "Séquence : Variations de vitesse / forces",
      "Séquence : Énergie : conversions et transferts",
      "Séquence : Énergie électrique et mécanique",
      "Séquence : Bilans et chaînes énergétiques",
      "Séquence : Ondes et signaux",
      "Séquence : Ondes mécaniques et acoustiques",
      "Séquence : Lumière : propagation, spectre",
      "Séquence : Signal et information"
    ]
  },
  {
    "id": "ttci",
    "folderName": "ttci",
    "maths": [
      "Séquence : Animation Fractale de Sierpinski",
      "Séquence : Suites Géométriques Mémo",
      "Séquence : sur les suites géométrique",
      "Séquence : Calculs commerciaux et financiers",
      "Séquence : Automatismes",
      "Séquence : Vocabulaire ensembliste et logique",
      "Séquence : Statistique à deux variables quantitatives",
      "Séquence : Probabilités conditionnelles et indépendance",
      "Séquence : Suites numériques",
      "Séquence : Limite d’une fonction en un point et en l’infini",
      "Séquence : Fonction exponentielle",
      "Séquence : Fonction dérivée et étude des variations d’une fonction",
      "Séquence : Produit scalaire et applications",
      "Séquence : Trigonométrie",
      "Séquence : Algorithmique et programmation",
      "Séquence : révision - Bac Pro TCI",
      "Séquence : Dossier technique - Exemple complet"
    ],
    "sciences": [
      "Séquence : Signaux : Comment transmettre l'information ?",
      "Séquence : Comment obtenir de l'énergie électrique par induction électromagnétique ?",
      "Séquence : Caractériser le réseau triphasé",
      "Séquence : Comment obtenir de l'énergie mécanique à l'aide d'un moteur électrique synchrone ou asynchrone ?",
      "Séquence : Transporter l’énergie sous forme électrique",
      "Séquence : Stocker l’énergie à l’aide d’un système électrochimique",
      "Séquence : Obtenir un courant continu à partir d’un courant alternatif et inversement",
      "Séquence : Obtenir de l’énergie mécanique à l’aide d’un moteur électrique",
      "Séquence : Évaluer la puissance consommée par un appareil électrique",
      "Séquence : Distinguer les trois modes de transfert thermique",
      "Séquence : Comparer les propriétés de matériaux vis-à-vis de la conduction thermique",
      "Séquence : Déterminer la conductance thermique d’une paroi plane",
      "Séquence : Exploiter la relation de Pascal (hydraulique)",
      "Séquence : Mettre en évidence la force de traînée et la force de portance",
      "Séquence : Mettre en évidence l’effet Venturi",
      "Séquence : Exploiter la relation de Bernoulli",
      "Séquence : Réaliser une transformation d’oxydoréduction",
      "Séquence : Établir un tableau d’avancement d’une réaction chimique",
      "Séquence : Identifier un réactif limitant",
      "Séquence : Étudier l’influence de paramètres sur la vitesse d’une réaction chimique",
      "Séquence : Utiliser la nomenclature IUPAC",
      "Séquence : Synthétiser expérimentalement un polymère / bioplastique",
      "Séquence : Transmission par propagation libre ou guidée",
      "Séquence : Fonctionnement de la fibre optique (réflexion totale)",
      "Séquence : Étudier la diffraction des ondes lumineuses",
      "Séquence : Étudier la chaîne de transmission d’informations",
      "Séquence : Étudier le principe du haut-parleur et du microphone",
      "Séquence : Exploiter des représentations graphiques",
      "Séquence : Résolution d’équations et identification de proportionnalité",
      "Séquence : Caractériser la propagation d'un signal sonore"
    ]
  },
  {
    "id": "csta",
    "folderName": "csta",
    "maths": [
      "Séquence : Maths appliquées aux ascenseurs"
    ],
    "sciences": []
  },
  {
    "id": "cstt",
    "folderName": "cstt",
    "maths": [
      "Séquence : Calculs de tuyauterie"
    ],
    "sciences": []
  },
  {
    "id": "csmiop",
    "folderName": "csmiop",
    "maths": [
      "Séquence : Hydraulique proportionnelle"
    ],
    "sciences": []
  },
  {
    "id": "fcil-mb",
    "folderName": "fcil-mb",
    "maths": [],
    "sciences": []
  },
  {
    "id": "bts-cri1",
    "folderName": "bts-cri1",
    "maths": [
      "Séquence : Résistance des matériaux - Niveau BTS",
      "Séquence : Calculs de structures soudées",
      "Séquence : Automatismes",
      "Séquence : Vocabulaire ensembliste et logique",
      "Séquence : Statistique à deux variables quantitatives",
      "Séquence : Probabilités",
      "Séquence : Suites numériques",
      "Séquence : Résolution graphique d’équations et d’inéquations",
      "Séquence : Fonctions polynômes de degré 2",
      "Séquence : Fonction dérivée et étude des variations d’une fonction",
      "Séquence : Géométrie dans l’espace",
      "Séquence : Vecteurs du plan",
      "Séquence : Trigonométrie",
      "Séquence : Algorithmique et programmation"
    ],
    "sciences": [
      "Séquence : Prévoir une réaction d'oxydoréduction et protéger les métaux contre la corrosion",
      "Séquence : Stocker l'énergie à l'aide d'un système électrochimique",
      "Séquence : Conversion Courant Alternatif/Continu",
      "Séquence : Mesures et incertitudes",
      "Séquence : Sources d’erreur et dispersion",
      "Séquence : Chiffres significatifs et incertitude",
      "Séquence : Organisation et transformations de la matière",
      "Séquence : Structure atomique, liaison chimique",
      "Séquence : Transformations chimiques et bilan",
      "Séquence : Dosages et réactivité",
      "Séquence : Mouvement, interactions et champs",
      "Séquence : Champ de gravitation et électrostatique",
      "Séquence : Fluide au repos : pression et loi de Mariotte",
      "Séquence : Variations de vitesse / forces",
      "Séquence : Énergie : conversions et transferts",
      "Séquence : Énergie électrique et mécanique",
      "Séquence : Bilans et chaînes énergétiques",
      "Séquence : Ondes et signaux",
      "Séquence : Ondes mécaniques et acoustiques",
      "Séquence : Lumière : propagation, spectre",
      "Séquence : Signal et information"
    ]
  },
  {
    "id": "bts-cri2",
    "folderName": "bts-cri2",
    "maths": [
      "Séquence : Animation Fractale de Sierpinski",
      "Séquence : Suites Géométriques Mémo",
      "Séquence : sur les suites géométrique",
      "Séquence : Calculs commerciaux et financiers",
      "Séquence : Automatismes",
      "Séquence : Vocabulaire ensembliste et logique",
      "Séquence : Statistique à deux variables quantitatives",
      "Séquence : Probabilités conditionnelles et indépendance",
      "Séquence : Suites numériques",
      "Séquence : Limite d’une fonction en un point et en l’infini",
      "Séquence : Fonction exponentielle",
      "Séquence : Fonction dérivée et étude des variations d’une fonction",
      "Séquence : Produit scalaire et applications",
      "Séquence : Trigonométrie",
      "Séquence : Algorithmique et programmation",
      "Séquence : révision - BTS CRI"
    ],
    "sciences": [
      "Séquence : Signaux : Comment transmettre l'information ?",
      "Séquence : Comment obtenir de l'énergie électrique par induction électromagnétique ?",
      "Séquence : Caractériser le réseau triphasé",
      "Séquence : Comment obtenir de l'énergie mécanique à l'aide d'un moteur électrique synchrone ou asynchrone ?",
      "Séquence : Transporter l’énergie sous forme électrique",
      "Séquence : Stocker l’énergie à l’aide d’un système électrochimique",
      "Séquence : Obtenir un courant continu à partir d’un courant alternatif et inversement",
      "Séquence : Obtenir de l’énergie mécanique à l’aide d’un moteur électrique",
      "Séquence : Évaluer la puissance consommée par un appareil électrique",
      "Séquence : Distinguer les trois modes de transfert thermique",
      "Séquence : Comparer les propriétés de matériaux vis-à-vis de la conduction thermique",
      "Séquence : Déterminer la conductance thermique d’une paroi plane",
      "Séquence : Exploiter la relation de Pascal (hydraulique)",
      "Séquence : Mettre en évidence la force de traînée et la force de portance",
      "Séquence : Mettre en évidence l’effet Venturi",
      "Séquence : Exploiter la relation de Bernoulli",
      "Séquence : Réaliser une transformation d’oxydoréduction",
      "Séquence : Établir un tableau d’avancement d’une réaction chimique",
      "Séquence : Identifier un réactif limitant",
      "Séquence : Étudier l’influence de paramètres sur la vitesse d’une réaction chimique",
      "Séquence : Utiliser la nomenclature IUPAC",
      "Séquence : Synthétiser expérimentalement un polymère / bioplastique",
      "Séquence : Transmission par propagation libre ou guidée",
      "Séquence : Fonctionnement de la fibre optique (réflexion totale)",
      "Séquence : Étudier la diffraction des ondes lumineuses",
      "Séquence : Étudier la chaîne de transmission d’informations",
      "Séquence : Étudier le principe du haut-parleur et du microphone",
      "Séquence : Exploiter des représentations graphiques",
      "Séquence : Résolution d’équations et identification de proportionnalité",
      "Séquence : Caractériser la propagation d'un signal sonore"
    ]
  },
  {
    "id": "bts-elt1",
    "folderName": "bts-elt1",
    "maths": [
      "Séquence : Électrotechnique - Machines tournantes",
      "Séquence : Calculs commerciaux et financiers",
      "Séquence : Automatismes",
      "Séquence : Vocabulaire ensembliste et logique",
      "Séquence : Bilans de puissance et rendement",
      "Séquence : Statistique à deux variables quantitatives",
      "Séquence : Probabilités",
      "Séquence : Suites numériques",
      "Séquence : Résolution graphique d’équations et d’inéquations",
      "Séquence : Fonctions polynômes de degré 2",
      "Séquence : Fonction dérivée et étude des variations d’une fonction",
      "Séquence : Géométrie dans l’espace",
      "Séquence : Vecteurs du plan",
      "Séquence : Trigonométrie",
      "Séquence : Algorithmique et programmation"
    ],
    "sciences": [
      "Séquence : Prévoir une réaction d'oxydoréduction et protéger les métaux contre la corrosion",
      "Séquence : Stocker l'énergie à l'aide d'un système électrochimique",
      "Séquence : Conversion Courant Alternatif/Continu",
      "Séquence : Mesures et incertitudes",
      "Séquence : Sources d’erreur et dispersion",
      "Séquence : Chiffres significatifs et incertitude",
      "Séquence : Organisation et transformations de la matière",
      "Séquence : Structure atomique, liaison chimique",
      "Séquence : Transformations chimiques et bilan",
      "Séquence : Dosages et réactivité",
      "Séquence : Mouvement, interactions et champs",
      "Séquence : Champ de gravitation et électrostatique",
      "Séquence : Fluide au repos : pression et loi de Mariotte",
      "Séquence : Variations de vitesse / forces",
      "Séquence : Énergie : conversions et transferts",
      "Séquence : Énergie électrique et mécanique",
      "Séquence : Bilans et chaînes énergétiques",
      "Séquence : Ondes et signaux",
      "Séquence : Ondes mécaniques et acoustiques",
      "Séquence : Lumière : propagation, spectre",
      "Séquence : Signal et information"
    ]
  },
  {
    "id": "bts-elt2",
    "folderName": "bts-elt2",
    "maths": [
      "Séquence : Animation Fractale de Sierpinski",
      "Séquence : Suites Géométriques Mémo",
      "Séquence : sur les suites géométrique",
      "Séquence : Calculs commerciaux et financiers",
      "Séquence : Automatismes",
      "Séquence : Vocabulaire ensembliste et logique",
      "Séquence : Statistique à deux variables quantitatives",
      "Séquence : Probabilités conditionnelles et indépendance",
      "Séquence : Suites numériques",
      "Séquence : Limite d’une fonction en un point et en l’infini",
      "Séquence : Fonction exponentielle",
      "Séquence : Fonction dérivée et étude des variations d’une fonction",
      "Séquence : Produit scalaire et applications",
      "Séquence : Trigonométrie",
      "Séquence : Algorithmique et programmation",
      "Séquence : révision finale - BTS Electrotechnique"
    ],
    "sciences": [
      "Séquence : Signaux : Comment transmettre l'information ?",
      "Séquence : Comment obtenir de l'énergie électrique par induction électromagnétique ?",
      "Séquence : Caractériser le réseau triphasé",
      "Séquence : Comment obtenir de l'énergie mécanique à l'aide d'un moteur électrique synchrone ou asynchrone ?",
      "Séquence : Transporter l’énergie sous forme électrique",
      "Séquence : Stocker l’énergie à l’aide d’un système électrochimique",
      "Séquence : Obtenir un courant continu à partir d’un courant alternatif et inversement",
      "Séquence : Obtenir de l’énergie mécanique à l’aide d’un moteur électrique",
      "Séquence : Évaluer la puissance consommée par un appareil électrique",
      "Séquence : Distinguer les trois modes de transfert thermique",
      "Séquence : Comparer les propriétés de matériaux vis-à-vis de la conduction thermique",
      "Séquence : Déterminer la conductance thermique d’une paroi plane",
      "Séquence : Exploiter la relation de Pascal (hydraulique)",
      "Séquence : Mettre en évidence la force de traînée et la force de portance",
      "Séquence : Mettre en évidence l’effet Venturi",
      "Séquence : Exploiter la relation de Bernoulli",
      "Séquence : Réaliser une transformation d’oxydoréduction",
      "Séquence : Établir un tableau d’avancement d’une réaction chimique",
      "Séquence : Identifier un réactif limitant",
      "Séquence : Étudier l’influence de paramètres sur la vitesse d’une réaction chimique",
      "Séquence : Utiliser la nomenclature IUPAC",
      "Séquence : Synthétiser expérimentalement un polymère / bioplastique",
      "Séquence : Transmission par propagation libre ou guidée",
      "Séquence : Fonctionnement de la fibre optique (réflexion totale)",
      "Séquence : Étudier la diffraction des ondes lumineuses",
      "Séquence : Étudier la chaîne de transmission d’informations",
      "Séquence : Étudier le principe du haut-parleur et du microphone",
      "Séquence : Exploiter des représentations graphiques",
      "Séquence : Résolution d’équations et identification de proportionnalité",
      "Séquence : Caractériser la propagation d'un signal sonore"
    ]
  }
];

// Fonction à exécuter manuellement pour créer les dossiers
function creerArborescence() {
  let rootFolder;
  const folders = DriveApp.getFoldersByName(ROOT_FOLDER_NAME);
  if (folders.hasNext()) {
    rootFolder = folders.next();
    Logger.log('Le dossier racine existe déjà : ' + ROOT_FOLDER_NAME);
  } else {
    rootFolder = DriveApp.createFolder(ROOT_FOLDER_NAME);
    Logger.log('Dossier racine créé : ' + ROOT_FOLDER_NAME);
  }
  
  FORMATIONS.forEach(function(formation) {
    let classFolder;
    const classFolders = rootFolder.getFoldersByName(formation.folderName);
    if (classFolders.hasNext()) {
      classFolder = classFolders.next();
    } else {
      classFolder = rootFolder.createFolder(formation.folderName);
      Logger.log('  Dossier classe créé : ' + formation.folderName);
    }
    
    ['maths', 'sciences'].forEach(function(matiere) {
      if (!formation[matiere] || formation[matiere].length === 0) return;
      
      let matiereFolderName = matiere === 'maths' ? 'Maths' : 'Sciences';
      let matiereFolder;
      const matiereFolders = classFolder.getFoldersByName(matiereFolderName);
      if (matiereFolders.hasNext()) {
        matiereFolder = matiereFolders.next();
      } else {
        matiereFolder = classFolder.createFolder(matiereFolderName);
        Logger.log('    Dossier matière créé : ' + matiereFolderName);
      }
      
      formation[matiere].forEach(function(seqName) {
        // Nettoyer le nom de séquence pour le dossier (enlever "Séquence : ")
        let cleanSeqName = seqName.replace('Séquence : ', '').trim();
        const seqFolders = matiereFolder.getFoldersByName(cleanSeqName);
        if (!seqFolders.hasNext()) {
           matiereFolder.createFolder(cleanSeqName);
           Logger.log('      Dossier séquence créé : ' + cleanSeqName);
        }
      });
    });
  });
  
  Logger.log('Terminé ! Vous pouvez maintenant ajouter vos documents dans Google Drive.');
}

// Fonction API appelée par votre application web
function doGet(e) {
  const classId = e.parameter && e.parameter.classId ? e.parameter.classId.toLowerCase() : null;
  const folders = DriveApp.getFoldersByName(ROOT_FOLDER_NAME);
  if (!folders.hasNext()) {
    return ContentService.createTextOutput(JSON.stringify({error: 'Dossier racine non trouvé'})).setMimeType(ContentService.MimeType.JSON);
  }
  
  let results = {}; // Map of className -> matiere -> sequenceName -> list of files
  
  while (folders.hasNext()) {
    const rootFolder = folders.next();
    const classFolders = rootFolder.getFolders();
    
    while (classFolders.hasNext()) {
      const classFolder = classFolders.next();
      const className = classFolder.getName();
      
      // OPTIMIZATION: Only process requested class if classId is provided
      if (classId && className.toLowerCase() !== classId) continue;
      
      if (!results[className]) results[className] = { maths: {}, sciences: {} };
      
      const matiereFolders = classFolder.getFolders();
      while (matiereFolders.hasNext()) {
        const matiereFolder = matiereFolders.next();
        const matiereName = matiereFolder.getName().toLowerCase(); // 'maths' or 'sciences'
        if (matiereName !== 'maths' && matiereName !== 'sciences') continue;
        
        const seqFolders = matiereFolder.getFolders();
        while (seqFolders.hasNext()) {
          const seqFolder = seqFolders.next();
          const seqName = seqFolder.getName();
          if (!results[className][matiereName][seqName]) {
             results[className][matiereName][seqName] = [];
          }
          
          const files = seqFolder.getFiles();
          while (files.hasNext()) {
            const file = files.next();
            results[className][matiereName][seqName].push({
              id: file.getId(),
              name: file.getName(),
              url: file.getUrl(),
              date: file.getDateCreated(),
              type: file.getMimeType()
            });
          }
        }
      }
    }
  }
  
  return ContentService.createTextOutput(JSON.stringify(results))
    .setMimeType(ContentService.MimeType.JSON);
}
