const fs = require('fs');
const path = require('path');

const targetDir = path.join(__dirname, 'ressources', 'seconde', 'maths', 'probabilites-fluctuation');

const activitesHtml = `<!DOCTYPE html>
<html lang="fr" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Activités d'Investigation - Probabilités & Fluctuation 2nde Pro</title>
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

        .correct-bg { background-color: #dcfce7 !important; border-color: #22c55e !important; color: #15803d !important; }
        .wrong-bg { background-color: #fee2e2 !important; border-color: #ef4444 !important; color: #b91c1c !important; }

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
                <div class="w-10 h-10 bg-indigo-500/20 border border-indigo-400/30 text-indigo-400 rounded-xl flex items-center justify-center font-bold">
                    <i class="fa-solid fa-dice text-lg"></i>
                </div>
                <div>
                    <span class="text-xs font-bold tracking-widest uppercase text-indigo-400">Séquence 8 • Seconde Professionnelle Mathématiques</span>
                    <h1 class="text-xl font-bold font-heading">Probabilités & Fluctuation d'Échantillonnage</h1>
                </div>
            </div>
            <!-- Navigation de la Séquence 2nde Pro Maths -->
            <nav class="flex flex-wrap items-center gap-1.5 text-xs font-bold">
                <a href="automatismes.html" class="px-3 py-2 rounded-lg bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white transition-colors flex items-center gap-1.5"><i class="fa-solid fa-bolt text-yellow-400"></i> Automatismes</a>
                <a href="activites.html" class="px-3 py-2 rounded-lg bg-indigo-600 text-white font-extrabold shadow-sm flex items-center gap-1.5"><i class="fa-solid fa-lightbulb"></i> Activités</a>
                <a href="cours.html" class="px-3 py-2 rounded-lg bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white transition-colors flex items-center gap-1.5"><i class="fa-solid fa-book-open text-sky-400"></i> Cours</a>
                <a href="td.html" class="px-3 py-2 rounded-lg bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white transition-colors flex items-center gap-1.5"><i class="fa-solid fa-dumbbell text-indigo-400"></i> TD & Exercices</a>
                <a href="tice.html" class="px-3 py-2 rounded-lg bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white transition-colors flex items-center gap-1.5"><i class="fa-solid fa-laptop-code text-purple-400"></i> TICE Excel</a>
                <a href="eval.html" class="px-3 py-2 rounded-lg bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white transition-colors flex items-center gap-1.5"><i class="fa-solid fa-graduation-cap text-red-400"></i> Évaluation</a>
            </nav>
        </div>
    </header>

    <main class="max-w-5xl mx-auto px-4 py-8 space-y-12">

        <!-- BANNIÈRE DE PRÉSENTATION DE LA SÉQUENCE -->
        <div class="bg-slate-900 text-white p-6 md:p-8 rounded-3xl shadow-xl border border-slate-800 space-y-4">
            <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div>
                    <div class="flex items-center gap-2 mb-2">
                        <span class="bg-indigo-500 text-slate-950 text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">Investigation Métier 2nde Pro</span>
                        <span class="bg-slate-800 text-slate-300 text-xs font-semibold px-3 py-1 rounded-full border border-slate-700">Baccalauréat Professionnel</span>
                    </div>
                    <h2 class="text-3xl font-extrabold font-heading text-white">Activités : Contrôle Qualité, Équiprobabilité & Simulation</h2>
                    <p class="text-sm text-slate-300 max-w-2xl mt-1">
                        Explorez le calcul des probabilités $P(A) = \\frac{\\text{cas favorables}}{\\text{cas possibles}}$, les événements contraires $P(\\bar{A}) = 1 - P(A)$, les intersections et réunions, ainsi que la fluctuation d'échantillonnage par simulation numérique.
                    </p>
                </div>
            </div>
        </div>

        <!-- MODULE 0 : DIAGNOSTIC NUMÉRIQUE & PRÉREQUIS -->
        <section class="bg-white p-6 md:p-8 rounded-3xl border border-slate-200 card-shadow space-y-6">
            <div class="flex items-center justify-between border-b border-slate-100 pb-4">
                <div class="flex items-center gap-3">
                    <span class="w-10 h-10 bg-indigo-100 text-indigo-800 rounded-xl flex items-center justify-center font-bold text-lg">0</span>
                    <div>
                        <span class="text-xs font-bold text-indigo-600 uppercase tracking-wider">Module 0 • Test de Positionnement</span>
                        <h3 class="text-xl font-bold font-heading text-slate-900">Probabilités Simples, Fréquences & Événements</h3>
                    </div>
                </div>
                <span class="text-xs font-bold text-slate-400">Diagnostic 3 min</span>
            </div>

            <p class="text-xs text-slate-600 leading-relaxed">
                Répondez à ces questions rapides pour vérifier vos prérequis sur les fractions, les pourcentages et la notion de hasard.
            </p>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
                <!-- Q1 -->
                <div class="p-4 bg-slate-50 rounded-2xl border space-y-2">
                    <label class="font-bold text-slate-900 block">1. Un lot de pièces contient 80 pièces conformes et 20 défectueuses (total 100 pièces). Quelle est la probabilité sous forme décimale de tirer une pièce défectueuse ?</label>
                    <input type="number" step="0.01" id="diag-q1" class="border rounded-xl p-2.5 w-full font-bold bg-white" placeholder="P = ? (ex: 0.20)">
                </div>

                <!-- Q2 -->
                <div class="p-4 bg-slate-50 rounded-2xl border space-y-2">
                    <label class="font-bold text-slate-900 block">2. Si la probabilité qu'un équipement tombe en panne est $P(A) = 0{,}15$, quelle est la probabilité qu'il ne tombe PAS en panne $P(\\bar{A})$ ?</label>
                    <input type="number" step="0.01" id="diag-q2" class="border rounded-xl p-2.5 w-full font-bold bg-white" placeholder="P(Ā) = ?">
                </div>

                <!-- Q3 -->
                <div class="p-4 bg-slate-50 rounded-2xl border space-y-2">
                    <label class="font-bold text-slate-900 block">3. On lance un dé équilibré à 6 faces. Quelle est la probabilité d'obtenir un nombre pair (2, 4 ou 6) ?</label>
                    <select id="diag-q3" class="border rounded-xl p-2.5 w-full font-bold bg-white">
                        <option value="">Sélectionnez...</option>
                        <option value="1/6">1/6 (environ 0.17)</option>
                        <option value="1/2">1/2 = 0.50 (3 faces sur 6)</option>
                        <option value="1/3">1/3 (2 faces sur 6)</option>
                    </select>
                </div>

                <!-- Q4 -->
                <div class="p-4 bg-slate-50 rounded-2xl border space-y-2">
                    <label class="font-bold text-slate-900 block">4. Quand on effectue un très grand nombre de lancers (ex: 1 000 lancers), la fréquence observée $f$ se rapproche de :</label>
                    <select id="diag-q4" class="border rounded-xl p-2.5 w-full font-bold bg-white">
                        <option value="">Sélectionnez...</option>
                        <option value="PROBA">La probabilité théorique p</option>
                        <option value="ZERO">Toujours 0</option>
                        <option value="RANDOM">Une valeur totalement imprévisible</option>
                    </select>
                </div>
            </div>

            <button onclick="checkDiag()" class="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs py-3.5 rounded-2xl shadow-md transition-colors no-print">
                <i class="fa-solid fa-check-circle mr-2"></i> Valider le diagnostic
            </button>
            <div id="fb-diag" class="text-xs hidden p-4 rounded-2xl font-bold"></div>
        </section>

        <!-- ACTIVITÉ 1 : CONTRÔLE QUALITÉ USINE (TABLEAU À DOUBLE ENTRÉE & ÉQUIPROBABILITÉ) -->
        <section class="bg-white p-6 md:p-8 rounded-3xl border border-slate-200 card-shadow space-y-6">
            <div class="flex items-center gap-3 border-b border-slate-100 pb-4">
                <span class="w-10 h-10 bg-indigo-100 text-indigo-800 rounded-xl flex items-center justify-center font-bold text-lg">1</span>
                <div>
                    <span class="text-xs font-bold text-indigo-600 uppercase tracking-wider">Activité 1 • Domaine Industrie & Logistique</span>
                    <h3 class="text-xl font-bold font-heading text-slate-900">Contrôle Qualité d'un Lot de Production & Tableau de Contingence</h3>
                </div>
            </div>

            <div class="space-y-4 text-xs text-slate-700 leading-relaxed">
                <div class="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-2">
                    <p class="font-semibold text-slate-900">
                        <strong>Mise en situation :</strong> Dans une usine de fabrication de composants électroniques, un responsable qualité contrôle un lot de <strong>500 cartes mères</strong> fabriquées par deux lignes de production : Ligne A ($L_A$) et Ligne B ($L_B$).
                    </p>
                    <p>
                        Voici la répartition exacte des pièces contrôlées :
                    </p>
                </div>

                <!-- TABLEAU À DOUBLE ENTRÉE -->
                <div class="overflow-x-auto">
                    <table class="w-full text-xs text-center border-collapse">
                        <thead>
                            <tr class="bg-slate-900 text-white">
                                <th class="p-3 text-left rounded-tl-xl">Ligne de fabrication</th>
                                <th class="p-3">Conformes ($C$)</th>
                                <th class="p-3">Défectueuses ($D$)</th>
                                <th class="p-3 rounded-tr-xl bg-slate-800">TOTAL</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-slate-200 bg-slate-50">
                            <tr>
                                <td class="p-3 text-left font-bold bg-slate-100">Ligne A ($L_A$)</td>
                                <td class="p-3 font-semibold text-emerald-700">285</td>
                                <td class="p-3 font-semibold text-red-600">15</td>
                                <td class="p-3 font-bold bg-slate-200">300</td>
                            </tr>
                            <tr>
                                <td class="p-3 text-left font-bold bg-slate-100">Ligne B ($L_B$)</td>
                                <td class="p-3 font-semibold text-emerald-700">190</td>
                                <td class="p-3 font-semibold text-red-600">10</td>
                                <td class="p-3 font-bold bg-slate-200">200</td>
                            </tr>
                            <tr class="bg-indigo-50 font-bold border-t-2 border-indigo-200">
                                <td class="p-3 text-left text-indigo-900 rounded-bl-xl">TOTAL</td>
                                <td class="p-3 text-indigo-900">475</td>
                                <td class="p-3 text-indigo-900">25</td>
                                <td class="p-3 text-indigo-900 rounded-br-xl bg-indigo-100 text-sm">500</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <!-- SCHÉMA SVG REPRÉSENTATION VECTORIELLE AVEC GRILLE -->
                <div class="p-4 bg-slate-50 border rounded-2xl text-center overflow-x-auto space-y-2">
                    <span class="text-[11px] font-bold text-slate-500 block uppercase tracking-wider">Schéma vectoriel : Répartition du Lot (500 pièces)</span>
                    <svg width="460" height="150" viewBox="0 0 460 150" class="mx-auto font-sans">
                        <defs>
                            <pattern id="grid-act1" width="20" height="20" patternUnits="userSpaceOnUse">
                                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#e2e8f0" stroke-width="1"/>
                            </pattern>
                        </defs>
                        <rect width="460" height="150" fill="url(#grid-act1)" rx="10"/>

                        <!-- Rectangle global Lot = 500 -->
                        <rect x="20" y="25" width="420" height="100" fill="#ffffff" stroke="#334155" stroke-width="2" rx="8"/>
                        <text x="230" y="18" font-size="10" font-weight="extrabold" fill="#0f172a" text-anchor="middle">ENSEMBLE DU LOT (N = 500 pièces)</text>

                        <!-- Séparation Ligne A (60% width = 252px) et Ligne B (40% width = 168px) -->
                        <line x1="272" y1="25" x2="272" y2="125" stroke="#334155" stroke-width="2" stroke-dasharray="4,4"/>

                        <!-- Bloc Ligne A -->
                        <rect x="25" y="30" width="242" height="90" fill="#eff6ff" rx="6"/>
                        <text x="146" y="48" font-size="11" font-weight="bold" fill="#1e40af" text-anchor="middle">Ligne A (300 pièces)</text>
                        <rect x="35" y="58" width="200" height="52" fill="#dcfce7" stroke="#16a34a" stroke-width="1" rx="4"/>
                        <text x="135" y="88" font-size="10" font-weight="bold" fill="#15803d" text-anchor="middle">Conformes : 285</text>
                        <rect x="240" y="58" width="22" height="52" fill="#fee2e2" stroke="#dc2626" stroke-width="1" rx="4"/>
                        <text x="251" y="88" font-size="8" font-weight="bold" fill="#b91c1c" text-anchor="middle">D:15</text>

                        <!-- Bloc Ligne B -->
                        <rect x="277" y="30" width="158" height="90" fill="#f5f3ff" rx="6"/>
                        <text x="356" y="48" font-size="11" font-weight="bold" fill="#6b21a8" text-anchor="middle">Ligne B (200 pièces)</text>
                        <rect x="285" y="58" width="130" height="52" fill="#dcfce7" stroke="#16a34a" stroke-width="1" rx="4"/>
                        <text x="350" y="88" font-size="10" font-weight="bold" fill="#15803d" text-anchor="middle">Conformes : 190</text>
                        <rect x="420" y="58" width="12" height="52" fill="#fee2e2" stroke="#dc2626" stroke-width="1" rx="4"/>
                        <text x="426" y="88" font-size="7" font-weight="bold" fill="#b91c1c" text-anchor="middle">D:10</text>
                    </svg>
                </div>

                <div class="p-4 bg-indigo-50 border border-indigo-200 rounded-2xl space-y-4">
                    <span class="font-bold text-indigo-900 text-sm block">Questions d'investigation — On choisit une pièce au hasard dans ce lot.</span>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div class="p-3 bg-white border rounded-xl space-y-1">
                            <label class="font-bold text-slate-900 block">1. Probabilité $P(L_A)$ que la pièce provienne de la Ligne A :</label>
                            <p class="text-[11px] text-slate-500">$P(L_A) = \\frac{\\text{Nombre de pièces Ligne A}}{\\text{Total du lot}} = \\frac{300}{500}$</p>
                            <input type="number" step="0.01" id="act1-q1" class="w-full p-2 border rounded-xl font-bold bg-slate-50" placeholder="P(LA) = ? (ex: 0.60)">
                        </div>

                        <div class="p-3 bg-white border rounded-xl space-y-1">
                            <label class="font-bold text-slate-900 block">2. Probabilité $P(D)$ que la pièce soit défectueuse :</label>
                            <p class="text-[11px] text-slate-500">$P(D) = \\frac{\\text{Total pièces défectueuses}}{\\text{Total du lot}} = \\frac{25}{500}$</p>
                            <input type="number" step="0.001" id="act1-q2" class="w-full p-2 border rounded-xl font-bold bg-slate-50" placeholder="P(D) = ? (ex: 0.05)">
                        </div>

                        <div class="p-3 bg-white border rounded-xl space-y-1">
                            <label class="font-bold text-slate-900 block">3. Probabilité $P(L_A \\cap D)$ (pièce de la Ligne A ET défectueuse) :</label>
                            <p class="text-[11px] text-slate-500">$P(L_A \\cap D) = \\frac{15}{500}$</p>
                            <input type="number" step="0.001" id="act1-q3" class="w-full p-2 border rounded-xl font-bold bg-slate-50" placeholder="P(LA ∩ D) = ? (ex: 0.03)">
                        </div>

                        <div class="p-3 bg-white border rounded-xl space-y-1">
                            <label class="font-bold text-slate-900 block">4. Probabilité $P(C)$ que la pièce soit conforme (événement contraire $\\bar{D}$) :</label>
                            <p class="text-[11px] text-slate-500">$P(C) = 1 - P(D) = \\frac{475}{500}$</p>
                            <input type="number" step="0.01" id="act1-q4" class="w-full p-2 border rounded-xl font-bold bg-slate-50" placeholder="P(C) = ? (ex: 0.95)">
                        </div>
                    </div>
                </div>

                <button onclick="checkAct1()" class="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs py-3.5 rounded-2xl shadow-md transition-colors no-print">
                    <i class="fa-solid fa-paper-plane mr-2"></i> Valider les probabilités du lot
                </button>
                <div id="fb-act1" class="text-xs hidden p-4 rounded-2xl font-bold"></div>
            </div>
        </section>

        <!-- ACTIVITÉ 2 : ÉVÉNEMENTS CONTRAIRES, RÉUNION & INTERSECTION (DIAGRAMME DE VENN) -->
        <section class="bg-white p-6 md:p-8 rounded-3xl border border-slate-200 card-shadow space-y-6">
            <div class="flex items-center gap-3 border-b border-slate-100 pb-4">
                <span class="w-10 h-10 bg-indigo-100 text-indigo-800 rounded-xl flex items-center justify-center font-bold text-lg">2</span>
                <div>
                    <span class="text-xs font-bold text-indigo-600 uppercase tracking-wider">Activité 2 • Domaine Transport & Sécurité au Travail</span>
                    <h3 class="text-xl font-bold font-heading text-slate-900">Analyse de Sécurité : Formule de la Réunion $P(A \\cup B)$</h3>
                </div>
            </div>

            <div class="space-y-4 text-xs text-slate-700 leading-relaxed">
                <div class="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-2">
                    <p class="font-semibold text-slate-900">
                        <strong>Mise en situation :</strong> Dans une entreprise de transport de marchandises comprenant <strong>100 véhicules</strong>, le responsable de parc réalise un bilan des anomalies de sécurité constatées lors du contrôle technique :
                    </p>
                    <ul class="list-disc list-inside space-y-1 text-slate-700 ml-2">
                        <li>Événement $A$ : « Le véhicule présente un défaut de freinage » ($P(A) = 0{,}20$, soit 20 véhicules).</li>
                        <li>Événement $B$ : « Le véhicule présente un défaut d'éclairage » ($P(B) = 0{,}15$, soit 15 véhicules).</li>
                        <li>Événement $A \\cap B$ : « Le véhicule présente les DEUX défauts » ($P(A \\cap B) = 0{,}05$, soit 5 véhicules).</li>
                    </ul>
                </div>

                <!-- DIAGRAMME DE VENN SVG AVEC GRILLE VECTORIELLE -->
                <div class="p-4 bg-slate-50 border rounded-2xl text-center overflow-x-auto space-y-2">
                    <span class="text-[11px] font-bold text-slate-500 block uppercase tracking-wider">Schéma vectoriel : Diagramme de Venn des Anomalies (100 Véhicules)</span>
                    <svg width="420" height="170" viewBox="0 0 420 170" class="mx-auto font-sans">
                        <defs>
                            <pattern id="grid-act2" width="20" height="20" patternUnits="userSpaceOnUse">
                                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#e2e8f0" stroke-width="1"/>
                            </pattern>
                        </defs>
                        <rect width="420" height="170" fill="url(#grid-act2)" rx="10"/>

                        <!-- Ensemble Univers E -->
                        <rect x="20" y="20" width="380" height="135" fill="#ffffff" stroke="#475569" stroke-width="2" rx="8"/>
                        <text x="35" y="38" font-size="10" font-weight="extrabold" fill="#475569">UNIVERS (100 véhicules)</text>
                        <text x="380" y="145" font-size="9" font-weight="bold" fill="#64748b" text-anchor="end">Sans défaut (Ā ∩ B̄) : 70</text>

                        <!-- Cercle A (Freinage) -->
                        <circle cx="170" cy="90" r="50" fill="#3b82f6" fill-opacity="0.3" stroke="#2563eb" stroke-width="2"/>
                        <text x="140" y="94" font-size="11" font-weight="bold" fill="#1d4ed8">A (15)</text>
                        <text x="170" y="38" font-size="10" font-weight="bold" fill="#2563eb" text-anchor="middle">Freinage (20)</text>

                        <!-- Cercle B (Éclairage) -->
                        <circle cx="240" cy="90" r="50" fill="#f59e0b" fill-opacity="0.3" stroke="#d97706" stroke-width="2"/>
                        <text x="270" y="94" font-size="11" font-weight="bold" fill="#b45309">B (10)</text>
                        <text x="240" y="38" font-size="10" font-weight="bold" fill="#d97706" text-anchor="middle">Éclairage (15)</text>

                        <!-- Intersection A ∩ B -->
                        <text x="205" y="94" font-size="10" font-weight="extrabold" fill="#dc2626" text-anchor="middle">A ∩ B (5)</text>
                    </svg>
                </div>

                <div class="p-4 bg-indigo-50 border border-indigo-200 rounded-2xl space-y-4">
                    <span class="font-bold text-indigo-900 text-sm block">Questions & Application de la formule du cours : $P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$</span>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div class="p-3 bg-white border rounded-xl space-y-1">
                            <label class="font-bold text-slate-900 block">1. Calculez la probabilité $P(A \\cup B)$ qu'un véhicule ait au moins un défaut :</label>
                            <p class="text-[11px] text-slate-500">$P(A \\cup B) = 0{,}20 + 0{,}15 - 0{,}05$</p>
                            <input type="number" step="0.01" id="act2-q1" class="w-full p-2 border rounded-xl font-bold bg-slate-50" placeholder="P(A ∪ B) = ? (ex: 0.30)">
                        </div>

                        <div class="p-3 bg-white border rounded-xl space-y-1">
                            <label class="font-bold text-slate-900 block">2. Calculez la probabilité qu'un véhicule n'ait AUCUN défaut $P(\\overline{A \\cup B})$ :</label>
                            <p class="text-[11px] text-slate-500">$P(\\text{aucun défaut}) = 1 - P(A \\cup B)$</p>
                            <input type="number" step="0.01" id="act2-q2" class="w-full p-2 border rounded-xl font-bold bg-slate-50" placeholder="P = ? (ex: 0.70)">
                        </div>
                    </div>
                </div>

                <button onclick="checkAct2()" class="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs py-3.5 rounded-2xl shadow-md transition-colors no-print">
                    <i class="fa-solid fa-paper-plane mr-2"></i> Valider l'analyse de sécurité
                </button>
                <div id="fb-act2" class="text-xs hidden p-4 rounded-2xl font-bold"></div>
            </div>
        </section>

        <!-- ACTIVITÉ 3 : SIMULATION DYNAMIQUE & FLUCTUATION D'ÉCHANTILLONNAGE -->
        <section class="bg-white p-6 md:p-8 rounded-3xl border border-slate-200 card-shadow space-y-6">
            <div class="flex items-center gap-3 border-b border-slate-100 pb-4">
                <span class="w-10 h-10 bg-indigo-100 text-indigo-800 rounded-xl flex items-center justify-center font-bold text-lg">3</span>
                <div>
                    <span class="text-xs font-bold text-indigo-600 uppercase tracking-wider">Activité 3 • Laboratoire d'Expérimentation Numérique</span>
                    <h3 class="text-xl font-bold font-heading text-slate-900">Simulateur de Tirages & Fluctuation d'Échantillonnage</h3>
                </div>
            </div>

            <div class="space-y-4 text-xs text-slate-700 leading-relaxed">
                <div class="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-2">
                    <p class="font-semibold text-slate-900">
                        <strong>Objectif de l'investigation :</strong> Observez la différence entre la <em>fréquence observée</em> $f$ sur un échantillon de taille $N$ et la <em>probabilité théorique</em> $p = \\frac{1}{6} \\approx 0{,}167$ lors du lancer d'un dé équilibré.
                    </p>
                    <p>
                        Cliquez sur les boutons ci-dessous pour simuler $N$ lancers successifs et observer comment varie la fréquence d'apparition du numéro 6 !
                    </p>
                </div>

                <!-- SIMULATEUR DYNAMIQUE JS -->
                <div class="p-6 bg-slate-900 text-white rounded-3xl border border-slate-800 space-y-6">
                    <div class="flex flex-col sm:flex-row items-center justify-between gap-4">
                        <div>
                            <span class="text-xs font-bold uppercase tracking-wider text-indigo-400">Simulateur interactif en temps réel</span>
                            <h4 class="text-lg font-bold font-heading">Lancement d'un dé à 6 faces ($p = 1/6 \\approx 0{,}167$)</h4>
                        </div>
                        <div class="flex items-center gap-2">
                            <button onclick="runSimulation(10)" class="px-3 py-2 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl transition-colors text-xs">
                                N = 10 lancers
                            </button>
                            <button onclick="runSimulation(100)" class="px-3 py-2 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl transition-colors text-xs">
                                N = 100 lancers
                            </button>
                            <button onclick="runSimulation(1000)" class="px-3 py-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl transition-colors text-xs">
                                N = 1 000 lancers
                            </button>
                        </div>
                    </div>

                    <!-- RESULTATS DE LA SIMULATION -->
                    <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                        <div class="bg-slate-800 p-4 rounded-2xl border border-slate-700">
                            <span class="text-[10px] text-slate-400 uppercase font-bold block">Taille échantillon N</span>
                            <span id="sim-n" class="text-2xl font-extrabold text-white font-mono">0</span>
                        </div>
                        <div class="bg-slate-800 p-4 rounded-2xl border border-slate-700">
                            <span class="text-[10px] text-slate-400 uppercase font-bold block">Nombre de "6" obtenus</span>
                            <span id="sim-k" class="text-2xl font-extrabold text-indigo-400 font-mono">0</span>
                        </div>
                        <div class="bg-slate-800 p-4 rounded-2xl border border-slate-700">
                            <span class="text-[10px] text-slate-400 uppercase font-bold block">Fréquence observée f = k/N</span>
                            <span id="sim-f" class="text-2xl font-extrabold text-emerald-400 font-mono">0.000</span>
                        </div>
                    </div>

                    <!-- COMPARISON BAR -->
                    <div class="space-y-2">
                        <div class="flex justify-between text-[11px] font-bold">
                            <span class="text-indigo-300">Fréquence observée $f$ : <span id="bar-f-val" class="text-emerald-400">0.000</span></span>
                            <span class="text-slate-400">Probabilité théorique $p = 1/6 = 0,167$</span>
                        </div>
                        <div class="w-full bg-slate-800 h-6 rounded-full overflow-hidden relative border border-slate-700">
                            <!-- Target p line at 16.7% -->
                            <div class="absolute top-0 bottom-0 left-[16.7%] w-1 bg-yellow-400 z-10" title="Probabilité théorique 0,167"></div>
                            <!-- Observed f bar -->
                            <div id="bar-f" class="h-full bg-emerald-500 transition-all duration-500 rounded-full" style="width: 0%;"></div>
                        </div>
                        <p class="text-[10px] text-slate-400 text-center">
                            <i class="fa-solid fa-circle-info text-yellow-400 mr-1"></i> La barre jaune représente la valeur théorique $p = 0{,}167$. Observez l'écart quand $N$ augmente !
                        </p>
                    </div>
                </div>

                <!-- QUESTIONS D'OBSERVATION SUR LA FLUCTUATION -->
                <div class="p-4 bg-indigo-50 border border-indigo-200 rounded-2xl space-y-4">
                    <span class="font-bold text-indigo-900 text-sm block">Questions de synthèse sur la Fluctuation d'Échantillonnage :</span>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div class="p-3 bg-white border rounded-xl space-y-1">
                            <label class="font-bold text-slate-900 block">1. Pour une faible taille d'échantillon ($N = 10$), la fréquence $f$ est-elle toujours égale à $0{,}167$ ?</label>
                            <select id="act3-q1" class="w-full p-2 border rounded-xl font-bold bg-slate-50">
                                <option value="">Sélectionnez...</option>
                                <option value="NON">Non, elle fluctue fortement d'une série à l'autre</option>
                                <option value="OUI">Oui, elle est toujours exacte</option>
                            </select>
                        </div>

                        <div class="p-3 bg-white border rounded-xl space-y-1">
                            <label class="font-bold text-slate-900 block">2. Que se passe-t-il lorsque la taille de l'échantillon $N$ devient très grande ($N = 1\\,000$) ?</label>
                            <select id="act3-q2" class="w-full p-2 border rounded-xl font-bold bg-slate-50">
                                <option value="">Sélectionnez...</option>
                                <option value="CONVERGE">La fréquence f se rapproche très près de p = 0,167 (Loi des grands nombres)</option>
                                <option value="S ELOIGNE">Elle s'éloigne de p</option>
                            </select>
                        </div>
                    </div>
                </div>

                <button onclick="checkAct3()" class="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs py-3.5 rounded-2xl shadow-md transition-colors no-print">
                    <i class="fa-solid fa-paper-plane mr-2"></i> Valider les conclusions du laboratoire
                </button>
                <div id="fb-act3" class="text-xs hidden p-4 rounded-2xl font-bold"></div>
            </div>
        </section>

        <!-- SYNTHÈSE DES DÉCOUVERTES (BILAN) -->
        <section class="bg-slate-900 text-white p-6 md:p-8 rounded-3xl border border-slate-800 space-y-6">
            <div class="flex items-center gap-3 border-b border-slate-800 pb-4">
                <i class="fa-solid fa-bookmark text-indigo-400 text-2xl"></i>
                <div>
                    <span class="text-xs font-bold text-indigo-400 uppercase tracking-wider">Bilan Synthétique</span>
                    <h3 class="text-xl font-bold font-heading text-white">Ce qu'il faut retenir des Activités</h3>
                </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                <div class="bg-slate-800 p-4 rounded-2xl border border-slate-700 space-y-2">
                    <span class="font-bold text-indigo-300 block">1. Probabilité en Équiprobabilité</span>
                    <p class="text-slate-300">$P(A) = \\frac{\\text{Nombre de cas favorables}}{\\text{Nombre de cas possibles}}$</p>
                    <p class="text-[11px] text-slate-400">Toujours comprise entre 0 et 1 (soit de $0\\%$ à $100\\%$).</p>
                </div>

                <div class="bg-slate-800 p-4 rounded-2xl border border-slate-700 space-y-2">
                    <span class="font-bold text-indigo-300 block">2. Événement Contraire & Réunion</span>
                    <p class="text-slate-300">$P(\\bar{A}) = 1 - P(A)$</p>
                    <p class="text-slate-300">$P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$</p>
                </div>

                <div class="bg-slate-800 p-4 rounded-2xl border border-slate-700 space-y-2">
                    <span class="font-bold text-indigo-300 block">3. Fluctuation d'Échantillonnage</span>
                    <p class="text-slate-300">Sur un petit échantillon $N$, la fréquence $f$ varie. Quand $N$ augmente, $f$ se rapproche de $p$.</p>
                </div>
            </div>
        </section>

    </main>

    <!-- JS POUR DIAGNOSTIC & ACTIVITÉS -->
    <script>
        function checkDiag() {
            let q1 = document.getElementById('diag-q1').value.trim();
            let q2 = document.getElementById('diag-q2').value.trim();
            let q3 = document.getElementById('diag-q3').value;
            let q4 = document.getElementById('diag-q4').value;

            let fb = document.getElementById('fb-diag');
            fb.classList.remove('hidden', 'correct-bg', 'wrong-bg');

            if ((q1 === "0.2" || q1 === "0.20" || q1 === "0,2" || q1 === "0,20") &&
                (q2 === "0.85" || q2 === "0,85") &&
                q3 === "1/2" &&
                q4 === "PROBA") {
                fb.classList.add('correct-bg');
                fb.innerHTML = '<i class="fa-solid fa-circle-check mr-2"></i> Excellent ! Vos prérequis en probabilités sont parfaitement maîtrisés.';
            } else {
                fb.classList.add('wrong-bg');
                fb.innerHTML = '<i class="fa-solid fa-circle-xmark mr-2"></i> Réponses attendues : 1) 0.20 (20/100) | 2) 0.85 (1 - 0.15) | 3) 1/2 (3/6) | 4) La probabilité théorique p.';
            }
        }

        function checkAct1() {
            let q1 = document.getElementById('act1-q1').value.trim();
            let q2 = document.getElementById('act1-q2').value.trim();
            let q3 = document.getElementById('act1-q3').value.trim();
            let q4 = document.getElementById('act1-q4').value.trim();

            let fb = document.getElementById('fb-act1');
            fb.classList.remove('hidden', 'correct-bg', 'wrong-bg');

            if ((q1 === "0.6" || q1 === "0.60" || q1 === "0,6" || q1 === "0,60") &&
                (q2 === "0.05" || q2 === "0,05") &&
                (q3 === "0.03" || q3 === "0,03") &&
                (q4 === "0.95" || q4 === "0,95")) {
                fb.classList.add('correct-bg');
                fb.innerHTML = '<i class="fa-solid fa-circle-check mr-2"></i> Bravo ! P(LA) = 0.60, P(D) = 0.05, P(LA ∩ D) = 0.03 et P(C) = 0.95.';
            } else {
                fb.classList.add('wrong-bg');
                fb.innerHTML = '<i class="fa-solid fa-circle-xmark mr-2"></i> Réponses : 1) P(LA)=300/500=0.60 | 2) P(D)=25/500=0.05 | 3) P(LA ∩ D)=15/500=0.03 | 4) P(C)=475/500=0.95.';
            }
        }

        function checkAct2() {
            let q1 = document.getElementById('act2-q1').value.trim();
            let q2 = document.getElementById('act2-q2').value.trim();

            let fb = document.getElementById('fb-act2');
            fb.classList.remove('hidden', 'correct-bg', 'wrong-bg');

            if ((q1 === "0.3" || q1 === "0.30" || q1 === "0,3" || q1 === "0,30") &&
                (q2 === "0.7" || q2 === "0.70" || q2 === "0,7" || q2 === "0,70")) {
                fb.classList.add('correct-bg');
                fb.innerHTML = '<i class="fa-solid fa-circle-check mr-2"></i> Parfait ! P(A ∪ B) = 0.20 + 0.15 - 0.05 = 0.30 (30% des véhicules ont au moins un défaut) et P(aucun) = 0.70.';
            } else {
                fb.classList.add('wrong-bg');
                fb.innerHTML = '<i class="fa-solid fa-circle-xmark mr-2"></i> Réponses : 1) P(A ∪ B) = 0.20 + 0.15 - 0.05 = 0.30 | 2) P(aucun défaut) = 1 - 0.30 = 0.70.';
            }
        }

        // SIMULATEUR JS
        function runSimulation(n) {
            let count6 = 0;
            for (let i = 0; i < n; i++) {
                let roll = Math.floor(Math.random() * 6) + 1;
                if (roll === 6) count6++;
            }
            let freq = count6 / n;

            document.getElementById('sim-n').innerText = n;
            document.getElementById('sim-k').innerText = count6;
            document.getElementById('sim-f').innerText = freq.toFixed(3);
            document.getElementById('bar-f-val').innerText = freq.toFixed(3);

            // Update bar width (max 100%, 0.50 = 100%)
            let barPct = Math.min(100, (freq / 0.50) * 100);
            document.getElementById('bar-f').style.width = barPct + '%';
        }

        function checkAct3() {
            let q1 = document.getElementById('act3-q1').value;
            let q2 = document.getElementById('act3-q2').value;

            let fb = document.getElementById('fb-act3');
            fb.classList.remove('hidden', 'correct-bg', 'wrong-bg');

            if (q1 === "NON" && q2 === "CONVERGE") {
                fb.classList.add('correct-bg');
                fb.innerHTML = '<i class="fa-solid fa-circle-check mr-2"></i> Très bien ! Vous avez compris le principe fondamental de la fluctuation d\'échantillonnage et la Loi des Grands Nombres.';
            } else {
                fb.classList.add('wrong-bg');
                fb.innerHTML = '<i class="fa-solid fa-circle-xmark mr-2"></i> Réessayez : 1) Non, f varie fortement pour petit N | 2) f se rapproche de p = 0.167 quand N devient grand.';
            }
        }
    </script>
</body>
</html>
`;

fs.writeFileSync(path.join(targetDir, 'activites.html'), activitesHtml, 'utf8');
console.log('✅ activites.html pour probabilites-fluctuation généré avec succès !');
