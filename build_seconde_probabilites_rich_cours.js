const fs = require('fs');
const path = require('path');

const targetDir = path.join(__dirname, 'ressources', 'seconde', 'maths', 'probabilites-fluctuation');

const coursHtml = `<!DOCTYPE html>
<html lang="fr" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Je note l'essentiel (Cours) - Probabilités & Fluctuation 2nde Pro</title>
    <!-- Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        brand: { 50: '#f0f9ff', 100: '#e0f2fe', 500: '#0ea5e9', 600: '#0284c7', 900: '#0c4a6e' }
                    },
                    fontFamily: {
                        sans: ['Inter', 'sans-serif'],
                        heading: ['Outfit', 'sans-serif'],
                    }
                }
            }
        }
    </script>
    <!-- Fonts & Icons -->
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Outfit:wght@400;500;600;700;800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <!-- MathJax pour les formules LaTeX -->
    <script>MathJax = { tex: { inlineMath: [['$', '$'], ['\\\\(', '\\\\)']] } };</script>
    <script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js"></script>

    <style>
        body { font-family: 'Inter', sans-serif; background-color: #f8fafc; color: #1e293b; }
        h1, h2, h3, h4, .font-heading { font-family: 'Outfit', sans-serif; }
        .card-shadow { box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.05); }

        @media print {
            header, nav, .no-print { display: none !important; }
            body { background-color: white; color: black; padding-bottom: 0 !important; }
            .card-shadow { box-shadow: none; border: 1px solid #ccc; }
        }
    </style>
</head>
<body class="text-slate-800 bg-slate-50 min-h-screen pb-20">

    <!-- Header & Nav unifiée pour la Séquence 2nde Pro Maths -->
    <header class="bg-slate-900 text-white sticky top-0 z-50 border-b border-slate-800 shadow-md no-print">
        <div class="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
            <div class="flex items-center gap-3">
                <div class="w-10 h-10 bg-sky-500/20 border border-sky-400/30 text-sky-400 rounded-xl flex items-center justify-center font-bold">
                    <i class="fa-solid fa-book-open text-lg"></i>
                </div>
                <div>
                    <span class="text-xs font-bold tracking-widest uppercase text-sky-400">Séquence 8 • Seconde Professionnelle Mathématiques</span>
                    <h1 class="text-xl font-bold font-heading">Probabilités & Fluctuation d'Échantillonnage</h1>
                </div>
            </div>
            <!-- Navigation de la Séquence 2nde Pro Maths -->
            <nav class="flex flex-wrap items-center gap-1.5 text-xs font-bold">
                <a href="automatismes.html" class="px-3 py-2 rounded-lg bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white transition-colors flex items-center gap-1.5"><i class="fa-solid fa-bolt text-yellow-400"></i> Automatismes</a>
                <a href="activites.html" class="px-3 py-2 rounded-lg bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white transition-colors flex items-center gap-1.5"><i class="fa-solid fa-lightbulb text-emerald-400"></i> Activités</a>
                <a href="cours.html" class="px-3 py-2 rounded-lg bg-sky-600 text-white font-extrabold shadow-sm flex items-center gap-1.5"><i class="fa-solid fa-book-open"></i> Cours</a>
                <a href="td.html" class="px-3 py-2 rounded-lg bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white transition-colors flex items-center gap-1.5"><i class="fa-solid fa-dumbbell text-indigo-400"></i> TD & Exercices</a>
                <a href="tice.html" class="px-3 py-2 rounded-lg bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white transition-colors flex items-center gap-1.5"><i class="fa-solid fa-laptop-code text-purple-400"></i> TICE Excel</a>
                <a href="eval.html" class="px-3 py-2 rounded-lg bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white transition-colors flex items-center gap-1.5"><i class="fa-solid fa-graduation-cap text-red-400"></i> Évaluation</a>
            </nav>
        </div>
    </header>

    <main class="max-w-5xl mx-auto px-4 py-8 space-y-12">

        <!-- ENTÊTE DE SÉQUENCE DE COURS CONFORME ÉDUCATION NATIONALE -->
        <div class="bg-slate-900 text-white p-6 md:p-8 rounded-3xl shadow-xl border border-slate-800 space-y-4">
            <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div>
                    <div class="flex items-center gap-2 mb-2">
                        <span class="bg-sky-500 text-slate-950 text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">Programme Officiel Seconde Pro</span>
                        <span class="bg-slate-800 text-slate-300 text-xs font-semibold px-3 py-1 rounded-full border border-slate-700">Baccalauréat Professionnel</span>
                    </div>
                    <h2 class="text-3xl font-extrabold font-heading text-white">Fiche de Cours : Probabilités & Fluctuation</h2>
                    <p class="text-sm text-slate-300 max-w-2xl">
                        Vocabulaire du hasard, équiprobabilité $P(A) = \\frac{\\text{cas favorables}}{\\text{cas possibles}}$, événement contraire $P(\\bar{A}) = 1 - P(A)$, réunion $P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$, dénombrement par arbre/tableau et fluctuation d'échantillonnage.
                    </p>
                </div>

                <button onclick="window.print()" class="no-print bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs px-5 py-3 rounded-xl shadow-md transition-colors flex items-center gap-2">
                    <i class="fa-solid fa-print"></i> Imprimer le Cours PDF
                </button>
            </div>

            <!-- SOMMAIRE COURS INTERACTIF -->
            <div class="pt-4 border-t border-slate-800 grid grid-cols-2 md:grid-cols-5 gap-2 text-xs font-semibold">
                <a href="#partie1" class="p-2 bg-slate-800 hover:bg-slate-700 text-sky-300 rounded-lg text-center transition-colors">1. Équiprobabilité</a>
                <a href="#partie2" class="p-2 bg-slate-800 hover:bg-slate-700 text-amber-300 rounded-lg text-center transition-colors">2. Contraire & Réunion</a>
                <a href="#partie3" class="p-2 bg-slate-800 hover:bg-slate-700 text-indigo-300 rounded-lg text-center transition-colors">3. Arbres & Tableaux</a>
                <a href="#partie4" class="p-2 bg-slate-800 hover:bg-slate-700 text-purple-300 rounded-lg text-center transition-colors">4. Fluctuation</a>
                <a href="#partie5" class="p-2 bg-slate-800 hover:bg-slate-700 text-emerald-300 rounded-lg text-center transition-colors">5. Simulateur</a>
            </div>
        </div>

        <!-- PARTIE 1 : VOCABULAIRE & ÉQUIPROBABILITÉ -->
        <section id="partie1" class="bg-white p-6 md:p-8 rounded-3xl border border-slate-200 card-shadow space-y-6">
            <div class="flex items-center gap-3 border-b border-slate-100 pb-4">
                <span class="w-10 h-10 bg-sky-100 text-sky-800 rounded-xl flex items-center justify-center font-bold text-lg">1</span>
                <div>
                    <span class="text-xs font-bold text-sky-600 uppercase tracking-wider">Notion 1 • Fondements</span>
                    <h3 class="text-xl font-bold font-heading text-slate-900">Vocabulaire du Hasard & Calcul en Équiprobabilité</h3>
                </div>
            </div>

            <div class="space-y-4 text-xs text-slate-700 leading-relaxed">
                <!-- Définitions clés -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div class="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-2">
                        <span class="font-bold text-slate-900 text-sm block">1. Définitions de base</span>
                        <ul class="space-y-1.5 text-slate-700">
                            <li>• <strong>Expérience aléatoire</strong> : Expérience dont on connaît tous les résultats possibles sans pouvoir prédire lequel se produira.</li>
                            <li>• <strong>Univers $\\Omega$</strong> : Ensemble de tous les résultats (issues) possibles.</li>
                            <li>• <strong>Événement $A$</strong> : Sous-ensemble de l'univers formé par une ou plusieurs issues.</li>
                            <li>• <strong>Événement élémentaire</strong> : Événement contenant une seule issue.</li>
                        </ul>
                    </div>

                    <div class="bg-sky-50 border-l-4 border-sky-500 p-4 rounded-r-2xl space-y-2">
                        <span class="font-bold text-sky-900 text-sm block">2. Formule de l'Équiprobabilité</span>
                        <p class="text-slate-800">
                            Lorsque toutes les issues ont la <strong>même chance</strong> de se produire (dés équilibrés, tirage au sort non truqué), on dit qu'on est en situation d'<strong>équiprobabilité</strong> :
                        </p>
                        <div class="p-3 bg-white rounded-xl border border-sky-200 text-center font-bold text-sky-900 text-sm">
                            $P(A) = \\frac{\\text{Nombre d'issues favorables à } A}{\\text{Nombre total d'issues possibles dans } \\Omega}$
                        </div>
                    </div>
                </div>

                <!-- Propriétés fondamentales -->
                <div class="p-4 bg-slate-100 rounded-2xl border border-slate-200 text-slate-800 space-y-1">
                    <span class="font-bold block text-slate-900">Propriétés fondamentales d'une probabilité :</span>
                    <p>• La probabilité d'un événement est toujours un nombre compris entre $0$ et $1$ (soit entre $0\\%$ et $100\\%$) : $\\mathbf{0 \\le P(A) \\le 1}$.</p>
                    <p>• Probabilité d'un événement impossible : $\\mathbf{P(\\emptyset) = 0}$. Probabilité d'un événement certain : $\\mathbf{P(\\Omega) = 1}$.</p>
                </div>

                <!-- SCHÉMA SVG UNIVERSET ÉVÉNEMENT -->
                <div class="p-4 bg-slate-50 border rounded-2xl text-center overflow-x-auto space-y-2">
                    <span class="text-[11px] font-bold text-slate-500 block uppercase tracking-wider">Schéma vectoriel : Représentation de l'Univers $\\Omega$ et de l'Événement $A$</span>
                    <svg width="400" height="140" viewBox="0 0 400 140" class="mx-auto font-sans">
                        <defs>
                            <pattern id="grid-cours1" width="20" height="20" patternUnits="userSpaceOnUse">
                                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#e2e8f0" stroke-width="1"/>
                            </pattern>
                        </defs>
                        <rect width="400" height="140" fill="url(#grid-cours1)" rx="10"/>

                        <!-- Univers Omega -->
                        <rect x="30" y="20" width="340" height="100" fill="#ffffff" stroke="#334155" stroke-width="2" rx="8"/>
                        <text x="45" y="38" font-size="11" font-weight="extrabold" fill="#0f172a">Univers Ω (Total issues N)</text>

                        <!-- Événement A -->
                        <circle cx="200" cy="70" r="38" fill="#38bdf8" fill-opacity="0.3" stroke="#0284c7" stroke-width="2"/>
                        <text x="200" y="74" font-size="12" font-weight="extrabold" fill="#0369a1" text-anchor="middle">Événement A (n)</text>
                    </svg>
                </div>

                <!-- EXEMPLES CONCRETS ET SIMPLE N1 -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                    <!-- EX 1 -->
                    <div class="bg-slate-50 border border-slate-200 rounded-2xl p-4 space-y-2">
                        <div class="flex items-center gap-2">
                            <span class="bg-sky-500 text-white font-bold px-2 py-0.5 rounded-md text-[10px]">EXEMPLE 1</span>
                            <span class="font-bold text-slate-900">Tirage d'un composant conforme</span>
                        </div>
                        <p class="text-slate-600">
                            <strong>Énoncé :</strong> Un lot contient $N = 50$ composants dont $n = 42$ sont conformes. On tire un composant au hasard.
                        </p>
                        <div class="p-3 bg-white rounded-xl border space-y-1 font-mono text-[11px]">
                            <p class="text-sky-700 font-bold">Calcul pas à pas :</p>
                            <p>$P(\\text{Conforme}) = \\frac{42}{50} = \\mathbf{0{,}84} = \\mathbf{84\\%}$.</p>
                        </div>
                    </div>

                    <!-- EX 2 -->
                    <div class="bg-slate-50 border border-slate-200 rounded-2xl p-4 space-y-2">
                        <div class="flex items-center gap-2">
                            <span class="bg-sky-500 text-white font-bold px-2 py-0.5 rounded-md text-[10px]">EXEMPLE 2</span>
                            <span class="font-bold text-slate-900">Lancement d'un dé à 6 faces</span>
                        </div>
                        <p class="text-slate-600">
                            <strong>Énoncé :</strong> On lance un dé à 6 faces non truqué. Quelle est la probabilité d'obtenir un multiple de 3 (issues 3 ou 6) ?
                        </p>
                        <div class="p-3 bg-white rounded-xl border space-y-1 font-mono text-[11px]">
                            <p class="text-sky-700 font-bold">Calcul pas à pas :</p>
                            <p>Issues favorables : $2$ ($3$ et $6$). Total : $6$.</p>
                            <p>$P(A) = \\frac{2}{6} = \\frac{1}{3} \\approx \\mathbf{0{,}333} = \\mathbf{33{,}3\\%}$.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- PARTIE 2 : ÉVÉNEMENT CONTRAIRE, INTERSECTION & RÉUNION -->
        <section id="partie2" class="bg-white p-6 md:p-8 rounded-3xl border border-slate-200 card-shadow space-y-6">
            <div class="flex items-center gap-3 border-b border-slate-100 pb-4">
                <span class="w-10 h-10 bg-amber-100 text-amber-800 rounded-xl flex items-center justify-center font-bold text-lg">2</span>
                <div>
                    <span class="text-xs font-bold text-amber-600 uppercase tracking-wider">Notion 2 • Opérations sur les Événements</span>
                    <h3 class="text-xl font-bold font-heading text-slate-900">Événement Contraire $\\bar{A}$, Intersection $A \\cap B$ & Réunion $A \\cup B$</h3>
                </div>
            </div>

            <div class="space-y-4 text-xs text-slate-700 leading-relaxed">
                <!-- 3 Blocs règles -->
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <!-- Contraire -->
                    <div class="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-2xl space-y-2">
                        <span class="font-bold text-amber-900 text-sm block">1. Événement Contraire $\\bar{A}$</span>
                        <p class="text-slate-800">
                            L'événement contraire de $A$, noté $\\bar{A}$ (ou non A), est composé de toutes les issues qui n'appartiennent pas à $A$.
                        </p>
                        <div class="p-2 bg-white rounded-xl border border-amber-200 text-center font-bold text-amber-900">
                            $\\mathbf{P(\\bar{A}) = 1 - P(A)}$
                        </div>
                    </div>

                    <!-- Intersection -->
                    <div class="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-2xl space-y-2">
                        <span class="font-bold text-blue-900 text-sm block">2. Intersection $A \\cap B$ (ET)</span>
                        <p class="text-slate-800">
                            L'événement "$A$ inter $B$", noté $A \\cap B$, est réalisé lorsque les deux événements $A$ <strong>ET</strong> $B$ se réalisent en même temps.
                        </p>
                    </div>

                    <!-- Réunion -->
                    <div class="bg-emerald-50 border-l-4 border-emerald-500 p-4 rounded-r-2xl space-y-2">
                        <span class="font-bold text-emerald-900 text-sm block">3. Réunion $A \\cup B$ (OU)</span>
                        <p class="text-slate-800">
                            L'événement "$A$ union $B$", noté $A \\cup B$, est réalisé lorsqu'au moins l'un des deux événements $A$ <strong>OU</strong> $B$ se réalise.
                        </p>
                    </div>
                </div>

                <!-- Formule de la réunion -->
                <div class="p-4 bg-slate-900 text-white rounded-2xl border border-slate-800 space-y-2">
                    <span class="font-bold text-amber-400 text-sm block"><i class="fa-solid fa-star mr-1"></i> Formule Générale de la Réunion :</span>
                    <div class="p-3 bg-slate-800 rounded-xl text-center font-bold text-base text-emerald-400 font-mono">
                        $P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$
                    </div>
                    <p class="text-[11px] text-slate-300">
                        *Remarque : Si $A$ et $B$ sont <strong>incompatibles</strong> (ne peuvent pas se produire ensemble, $A \\cap B = \\emptyset$), alors $P(A \\cap B) = 0$ et $P(A \\cup B) = P(A) + P(B)$.
                    </p>
                </div>

                <!-- SCHÉMA SVG DIAGRAMME DE VENN -->
                <div class="p-4 bg-slate-50 border rounded-2xl text-center overflow-x-auto space-y-2">
                    <span class="text-[11px] font-bold text-slate-500 block uppercase tracking-wider">Schéma vectoriel : Diagramme de Venn des Opérations d'Ensembles</span>
                    <svg width="440" height="150" viewBox="0 0 440 150" class="mx-auto font-sans">
                        <defs>
                            <pattern id="grid-cours2" width="20" height="20" patternUnits="userSpaceOnUse">
                                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#e2e8f0" stroke-width="1"/>
                            </pattern>
                        </defs>
                        <rect width="440" height="150" fill="url(#grid-cours2)" rx="10"/>

                        <!-- Univers -->
                        <rect x="20" y="20" width="400" height="115" fill="#ffffff" stroke="#475569" stroke-width="2" rx="8"/>
                        <text x="35" y="38" font-size="10" font-weight="bold" fill="#475569">UNIVERS Ω</text>

                        <!-- Ensemble A -->
                        <circle cx="180" cy="80" r="42" fill="#3b82f6" fill-opacity="0.3" stroke="#2563eb" stroke-width="2"/>
                        <text x="155" y="84" font-size="11" font-weight="bold" fill="#1d4ed8">A</text>

                        <!-- Ensemble B -->
                        <circle cx="250" cy="80" r="42" fill="#f59e0b" fill-opacity="0.3" stroke="#d97706" stroke-width="2"/>
                        <text x="275" y="84" font-size="11" font-weight="bold" fill="#b45309">B</text>

                        <!-- Zone Intersection A ∩ B -->
                        <text x="215" y="84" font-size="9" font-weight="extrabold" fill="#dc2626" text-anchor="middle">A ∩ B</text>
                    </svg>
                </div>

                <!-- EXEMPLES CONCRETS ET SIMPLES -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                    <!-- EX 1 -->
                    <div class="bg-amber-50/50 border border-amber-200 rounded-2xl p-4 space-y-2">
                        <div class="flex items-center gap-2">
                            <span class="bg-amber-600 text-white font-bold px-2 py-0.5 rounded-md text-[10px]">EXEMPLE 1</span>
                            <span class="font-bold text-slate-900">Calcul d'Événement Contraire</span>
                        </div>
                        <p class="text-slate-600">
                            <strong>Énoncé :</strong> La probabilité qu'un colis soit livré en retard est $P(R) = 0{,}06$. Quelle est la probabilité $P(\\bar{R})$ qu'il soit livré à temps ?
                        </p>
                        <div class="p-3 bg-white rounded-xl border space-y-1 font-mono text-[11px]">
                            <p class="text-amber-800 font-bold">Calcul pas à pas :</p>
                            <p>$P(\\bar{R}) = 1 - P(R) = 1 - 0{,}06 = \\mathbf{0{,}94} = \\mathbf{94\\%}$.</p>
                        </div>
                    </div>

                    <!-- EX 2 -->
                    <div class="bg-amber-50/50 border border-amber-200 rounded-2xl p-4 space-y-2">
                        <div class="flex items-center gap-2">
                            <span class="bg-amber-600 text-white font-bold px-2 py-0.5 rounded-md text-[10px]">EXEMPLE 2</span>
                            <span class="font-bold text-slate-900">Calcul de la Réunion $P(A \\cup B)$</span>
                        </div>
                        <p class="text-slate-600">
                            <strong>Énoncé :</strong> Dans un atelier, $P(A) = 0{,}15$ (défaut peinture), $P(B) = 0{,}10$ (défaut taille) et $P(A \\cap B) = 0{,}03$ (les deux).
                        </p>
                        <div class="p-3 bg-white rounded-xl border space-y-1 font-mono text-[11px]">
                            <p class="text-amber-800 font-bold">Calcul pas à pas :</p>
                            <p>$P(A \\cup B) = 0{,}15 + 0{,}10 - 0{,}03 = \\mathbf{0{,}22} = \\mathbf{22\\%}$.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- PARTIE 3 : ARBRES DE CHOIX ET TABLEAUX À DOUBLE ENTRÉE -->
        <section id="partie3" class="bg-white p-6 md:p-8 rounded-3xl border border-slate-200 card-shadow space-y-6">
            <div class="flex items-center gap-3 border-b border-slate-100 pb-4">
                <span class="w-10 h-10 bg-indigo-100 text-indigo-800 rounded-xl flex items-center justify-center font-bold text-lg">3</span>
                <div>
                    <span class="text-xs font-bold text-indigo-600 uppercase tracking-wider">Notion 3 • Représentations & Dénombrement</span>
                    <h3 class="text-xl font-bold font-heading text-slate-900">Arbres de Choix & Tableaux à Double Entrée</h3>
                </div>
            </div>

            <div class="space-y-4 text-xs text-slate-700 leading-relaxed">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <!-- Méthode Tableau -->
                    <div class="bg-slate-50 p-4 rounded-2xl border space-y-2">
                        <span class="font-bold text-slate-900 text-sm block">1. Le Tableau à Double Entrée</span>
                        <p class="text-slate-600">
                            Pratique lorsque les éléments croisent <strong>deux caractères d'étude</strong> (ex: conforme/non conforme x machine A/machine B). Il suffit de lire l'intersection ligne-colonne pour obtenir l'effectif favorable.
                        </p>
                    </div>

                    <!-- Méthode Arbre -->
                    <div class="bg-indigo-50 border-l-4 border-indigo-500 p-4 rounded-r-2xl space-y-2">
                        <span class="font-bold text-indigo-900 text-sm block">2. L'Arbre de Choix (Pondéré)</span>
                        <p class="text-slate-800">
                            • La somme des probabilités des branches issues d'un même nœud est égale à $1$.<br>
                            • La probabilité d'un chemin entier s'obtient en <strong>multipliant les probabilités</strong> le long de ce chemin.
                        </p>
                    </div>
                </div>

                <!-- SCHÉMA SVG ARBRE DE CHOIX -->
                <div class="p-4 bg-slate-50 border rounded-2xl text-center overflow-x-auto space-y-2">
                    <span class="text-[11px] font-bold text-slate-500 block uppercase tracking-wider">Schéma vectoriel : Structure d'un Arbre de Choix à Deux Niveaux</span>
                    <svg width="420" height="150" viewBox="0 0 420 150" class="mx-auto font-sans">
                        <defs>
                            <pattern id="grid-cours3" width="20" height="20" patternUnits="userSpaceOnUse">
                                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#e2e8f0" stroke-width="1"/>
                            </pattern>
                        </defs>
                        <rect width="420" height="150" fill="url(#grid-cours3)" rx="10"/>

                        <!-- Racine -->
                        <circle cx="40" cy="75" r="6" fill="#334155"/>
                        <text x="30" y="95" font-size="9" font-weight="bold" fill="#334155">Racine</text>

                        <!-- NIVEAU 1 -->
                        <line x1="40" y1="75" x2="160" y2="40" stroke="#4f46e5" stroke-width="2"/>
                        <line x1="40" y1="75" x2="160" y2="110" stroke="#4f46e5" stroke-width="2"/>

                        <text x="95" y="48" font-size="9" font-weight="bold" fill="#4f46e5">P(A)</text>
                        <text x="95" y="105" font-size="9" font-weight="bold" fill="#4f46e5">P(Ā)</text>

                        <circle cx="160" cy="40" r="5" fill="#4f46e5"/>
                        <text x="160" y="28" font-size="10" font-weight="bold" fill="#0f172a" text-anchor="middle">A</text>

                        <circle cx="160" cy="110" r="5" fill="#4f46e5"/>
                        <text x="160" y="128" font-size="10" font-weight="bold" fill="#0f172a" text-anchor="middle">Ā</text>

                        <!-- NIVEAU 2 -->
                        <line x1="160" y1="40" x2="280" y2="25" stroke="#10b981" stroke-width="1.5"/>
                        <line x1="160" y1="40" x2="280" y2="55" stroke="#ef4444" stroke-width="1.5"/>

                        <text x="300" y="28" font-size="9" font-weight="bold" fill="#10b981">B  [Chemin A ∩ B]</text>
                        <text x="300" y="58" font-size="9" font-weight="bold" fill="#ef4444">B̄ [Chemin A ∩ B̄]</text>
                    </svg>
                </div>

                <!-- EXEMPLES CONCRETS SIMPLES -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                    <!-- EX 1 -->
                    <div class="bg-indigo-50/50 border border-indigo-200 rounded-2xl p-4 space-y-2">
                        <div class="flex items-center gap-2">
                            <span class="bg-indigo-600 text-white font-bold px-2 py-0.5 rounded-md text-[10px]">EXEMPLE 1</span>
                            <span class="font-bold text-slate-900">Lecture d'un tableau à double entrée</span>
                        </div>
                        <p class="text-slate-600">
                            Sur 100 vêtements contrôlés : 70 T-shirts (65 conformes, 5 défectueux) et 30 Jeanes (25 conformes, 5 défectueux). Total défectueux = 10.
                        </p>
                        <div class="p-3 bg-white rounded-xl border space-y-1 font-mono text-[11px]">
                            <p class="text-indigo-800 font-bold">Calcul pas à pas :</p>
                            <p>$P(\\text{Défectueux}) = \\frac{10}{100} = \\mathbf{0{,}10} = \\mathbf{10\\%}$.</p>
                        </div>
                    </div>

                    <!-- EX 2 -->
                    <div class="bg-indigo-50/50 border border-indigo-200 rounded-2xl p-4 space-y-2">
                        <div class="flex items-center gap-2">
                            <span class="bg-indigo-600 text-white font-bold px-2 py-0.5 rounded-md text-[10px]">EXEMPLE 2</span>
                            <span class="font-bold text-slate-900">Calcul sur les branches d'un arbre</span>
                        </div>
                        <p class="text-slate-600">
                            Une machine A fabrique $60\\%$ des pièces ($P(A) = 0{,}60$). Sur A, $5\\%$ sont défectueuses ($P(D) = 0{,}05$).
                        </p>
                        <div class="p-3 bg-white rounded-xl border space-y-1 font-mono text-[11px]">
                            <p class="text-indigo-800 font-bold">Calcul du chemin :</p>
                            <p>$P(A \\cap D) = 0{,}60 \\times 0{,}05 = \\mathbf{0{,}03} = \\mathbf{3\\%}$.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- PARTIE 4 : FLUCTUATION D'ÉCHANTILLONNAGE & LOI DES GRANDS NOMBRES -->
        <section id="partie4" class="bg-white p-6 md:p-8 rounded-3xl border border-slate-200 card-shadow space-y-6">
            <div class="flex items-center gap-3 border-b border-slate-100 pb-4">
                <span class="w-10 h-10 bg-purple-100 text-purple-800 rounded-xl flex items-center justify-center font-bold text-lg">4</span>
                <div>
                    <span class="text-xs font-bold text-purple-600 uppercase tracking-wider">Notion 4 • Statistique Inductive & Fluctuation</span>
                    <h3 class="text-xl font-bold font-heading text-slate-900">Fluctuation d'Échantillonnage & Loi des Grands Nombres</h3>
                </div>
            </div>

            <div class="space-y-4 text-xs text-slate-700 leading-relaxed">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <!-- Fluctuation -->
                    <div class="bg-slate-50 p-4 rounded-2xl border space-y-2">
                        <span class="font-bold text-slate-900 text-sm block">1. Fluctuation d'Échantillonnage</span>
                        <p class="text-slate-600">
                            Lorsqu'on extrait plusieurs échantillons de même taille $N$ d'une même population, la <strong>fréquence observée $f$</strong> du caractère varie d'un échantillon à un autre : c'est la <strong>fluctuation d'échantillonnage</strong>.
                        </p>
                    </div>

                    <!-- Loi des Grands Nombres -->
                    <div class="bg-purple-50 border-l-4 border-purple-500 p-4 rounded-r-2xl space-y-2">
                        <span class="font-bold text-purple-900 text-sm block">2. Loi des Grands Nombres</span>
                        <p class="text-slate-800">
                            Lorsque la taille $N$ de l'échantillon devient <strong>très grande</strong>, la fréquence observée $f$ <strong>se stabilise</strong> et se rapproche de la probabilité théorique $p$ :
                        </p>
                        <div class="p-2 bg-white rounded-xl border border-purple-200 text-center font-bold text-purple-900">
                            $\\mathbf{f \\xrightarrow[N \\to \\infty]{} p}$
                        </div>
                    </div>
                </div>

                <!-- SCHÉMA SVG CONVERGENCE DES FRÉQUENCES -->
                <div class="p-4 bg-slate-50 border rounded-2xl text-center overflow-x-auto space-y-2">
                    <span class="text-[11px] font-bold text-slate-500 block uppercase tracking-wider">Schéma vectoriel : Stabilisation de la Fréquence f vers la Probabilité p = 0,5</span>
                    <svg width="440" height="150" viewBox="0 0 440 150" class="mx-auto font-sans">
                        <defs>
                            <pattern id="grid-cours4" width="20" height="20" patternUnits="userSpaceOnUse">
                                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#e2e8f0" stroke-width="1"/>
                            </pattern>
                        </defs>
                        <rect width="440" height="150" fill="url(#grid-cours4)" rx="10"/>

                        <!-- Ligne théorique p = 0.5 -->
                        <line x1="40" y1="75" x2="410" y2="75" stroke="#eab308" stroke-width="2" stroke-dasharray="4,4"/>
                        <text x="415" y="78" font-size="9" font-weight="bold" fill="#ca8a04">p = 0,50</text>

                        <!-- Axes -->
                        <line x1="40" y1="20" x2="40" y2="130" stroke="#475569" stroke-width="1.5"/>
                        <line x1="40" y1="130" x2="410" y2="130" stroke="#475569" stroke-width="1.5"/>
                        <text x="410" y="142" font-size="9" fill="#475569" text-anchor="end">Taille N (10 ➔ 1 000)</text>

                        <!-- Courbe oscillante convergeant vers p -->
                        <path d="M 40 30 Q 70 120, 110 50 T 180 90 T 260 70 T 340 76 T 400 75" fill="none" stroke="#7c3aed" stroke-width="2.5"/>
                    </svg>
                </div>

                <!-- EXEMPLE CONCRET SIMPLE -->
                <div class="bg-purple-50/50 border border-purple-200 rounded-2xl p-4 space-y-2">
                    <div class="flex items-center gap-2">
                        <span class="bg-purple-600 text-white font-bold px-2 py-0.5 rounded-md text-[10px]">EXEMPLE D'APPLICATION</span>
                        <span class="font-bold text-slate-900">Lancement d'une pièce équilibrée ($p = 0{,}50$)</span>
                    </div>
                    <p class="text-slate-600">
                        • Pour $N = 10$ lancers : on obtient 3 "Pile" $\\implies f = \\frac{3}{10} = \\mathbf{0{,}30}$ (écart fort de $0{,}20$).<br>
                        • Pour $N = 100$ lancers : on obtient 47 "Pile" $\\implies f = \\frac{47}{100} = \\mathbf{0{,}47}$ (écart faible de $0{,}03$).<br>
                        • Pour $N = 1\\,000$ lancers : on obtient 502 "Pile" $\\implies f = \\frac{502}{1000} = \\mathbf{0{,}502}$ (très proche de $p = 0{,}50$).
                    </p>
                </div>
            </div>
        </section>

        <!-- PARTIE 5 : SIMULATEUR DYNAMIQUE INTERACTIF DE PROBABILITÉS -->
        <section id="partie5" class="bg-slate-900 text-white p-6 md:p-8 rounded-3xl border border-slate-800 space-y-6 card-shadow">
            <div class="flex items-center gap-3 border-b border-slate-800 pb-4">
                <div class="w-10 h-10 bg-sky-500/20 text-sky-400 rounded-xl flex items-center justify-center font-bold text-lg">
                    <i class="fa-solid fa-calculator"></i>
                </div>
                <div>
                    <span class="text-xs font-bold text-sky-400 uppercase tracking-wider">Outil Numérique de Classe</span>
                    <h3 class="text-xl font-bold font-heading text-white">Calculateur Dynamique de Probabilités & Contraire</h3>
                </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
                <div class="space-y-4 text-slate-800">
                    <div class="grid grid-cols-2 gap-3 text-slate-200">
                        <div>
                            <label class="font-bold block text-xs mb-1">Issues favorables $n$ :</label>
                            <input type="number" id="prob-n" value="15" oninput="calcProb()" class="border rounded-xl p-2.5 w-full font-bold text-slate-900 bg-white">
                        </div>
                        <div>
                            <label class="font-bold block text-xs mb-1">Nombre total d'issues $N$ :</label>
                            <input type="number" id="prob-N" value="60" oninput="calcProb()" class="border rounded-xl p-2.5 w-full font-bold text-slate-900 bg-white">
                        </div>
                    </div>

                    <div class="bg-slate-800 p-4 rounded-2xl border border-slate-700 space-y-2 text-slate-200">
                        <span class="text-xs font-bold text-sky-400 block uppercase">Test d'événement contraire :</span>
                        <p class="text-[11px] text-slate-300">Si $P(A)$ est la probabilité ci-contre, alors la probabilité contraire $P(\\bar{A})$ s'affiche instantanément ci-contre.</p>
                    </div>
                </div>

                <div class="p-5 bg-slate-800 border border-slate-700 rounded-2xl space-y-3 text-slate-200 font-mono flex flex-col justify-center">
                    <span class="text-xs font-bold uppercase text-sky-400 block">Démonstration & Rendu LaTeX en Direct :</span>
                    <div id="prob-res-p" class="text-sm font-bold text-sky-300">• Probabilité $P(A) = 15 / 60 = \\mathbf{0{,}25}$ ($25\\%$)</div>
                    <div id="prob-res-bar" class="text-sm font-bold text-amber-400">• Contraire $P(\\bar{A}) = 1 - 0{,}25 = \\mathbf{0{,}75}$ ($75\\%$)</div>
                </div>
            </div>
        </section>

    </main>

    <!-- JS POUR CALCULATEUR -->
    <script>
        function calcProb() {
            let n = parseFloat(document.getElementById('prob-n').value);
            let N = parseFloat(document.getElementById('prob-N').value);

            if (isNaN(n) || isNaN(N) || N <= 0 || n < 0 || n > N) return;

            let p = n / N;
            let pBar = 1 - p;

            document.getElementById('prob-res-p').innerHTML = '• Probabilité $P(A) = \\\\frac{' + n + '}{' + N + '} = \\\\mathbf{' + p.toFixed(3) + '} = \\\\mathbf{' + (p*100).toFixed(1) + '\\\\%}$';
            document.getElementById('prob-res-bar').innerHTML = '• Contraire $P(\\\\bar{A}) = 1 - ' + p.toFixed(3) + ' = \\\\mathbf{' + pBar.toFixed(3) + '} = \\\\mathbf{' + (pBar*100).toFixed(1) + '\\\\%}$';
            if (window.MathJax) MathJax.typeset();
        }
        calcProb();
    </script>
</body>
</html>
`;

fs.writeFileSync(path.join(targetDir, 'cours.html'), coursHtml, 'utf8');
console.log('✅ cours.html pour probabilites-fluctuation généré avec succès !');
