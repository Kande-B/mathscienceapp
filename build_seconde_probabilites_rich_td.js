const fs = require('fs');
const path = require('path');

const targetDir = path.join(__dirname, 'ressources', 'seconde', 'maths', 'probabilites-fluctuation');

const tdHtml = `<!DOCTYPE html>
<html lang="fr" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fiche de TD - Probabilités & Fluctuation 2nde Pro</title>
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
            body { background-color: #ffffff !important; color: #000000 !important; padding-bottom: 0 !important; }
            main { max-width: 100% !important; margin: 0 !important; padding: 0 !important; }
            .print-card { border: 1px solid #cbd5e1 !important; box-shadow: none !important; break-inside: avoid; margin-bottom: 1.5rem !important; }
            .print-correction { display: block !important; border-top: 2px dashed #94a3b8 !important; background-color: #f8fafc !important; }
        }
    </style>
</head>
<body class="text-slate-800 bg-slate-50 min-h-screen pb-20">

    <!-- Header & Nav unifiée pour la Séquence 2nde Pro Maths -->
    <header class="bg-slate-900 text-white sticky top-0 z-50 border-b border-slate-800 shadow-md no-print">
        <div class="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
            <div class="flex items-center gap-3">
                <div class="w-10 h-10 bg-indigo-500/20 border border-indigo-400/30 text-indigo-400 rounded-xl flex items-center justify-center font-bold">
                    <i class="fa-solid fa-dumbbell text-lg"></i>
                </div>
                <div>
                    <span class="text-xs font-bold tracking-widest uppercase text-indigo-400">Séquence 8 • Seconde Professionnelle Mathématiques</span>
                    <h1 class="text-xl font-bold font-heading">Probabilités & Fluctuation d'Échantillonnage</h1>
                </div>
            </div>
            <!-- Navigation de la Séquence 2nde Pro Maths -->
            <nav class="flex flex-wrap items-center gap-1.5 text-xs font-bold">
                <a href="automatismes.html" class="px-3 py-2 rounded-lg bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white transition-colors flex items-center gap-1.5"><i class="fa-solid fa-bolt text-yellow-400"></i> Automatismes</a>
                <a href="activites.html" class="px-3 py-2 rounded-lg bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white transition-colors flex items-center gap-1.5"><i class="fa-solid fa-lightbulb text-emerald-400"></i> Activités</a>
                <a href="cours.html" class="px-3 py-2 rounded-lg bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white transition-colors flex items-center gap-1.5"><i class="fa-solid fa-book-open text-sky-400"></i> Cours</a>
                <a href="td.html" class="px-3 py-2 rounded-lg bg-indigo-600 text-white font-extrabold shadow-sm flex items-center gap-1.5"><i class="fa-solid fa-dumbbell"></i> TD & Exercices</a>
                <a href="tice.html" class="px-3 py-2 rounded-lg bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white transition-colors flex items-center gap-1.5"><i class="fa-solid fa-laptop-code text-purple-400"></i> TICE Excel</a>
                <a href="eval.html" class="px-3 py-2 rounded-lg bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white transition-colors flex items-center gap-1.5"><i class="fa-solid fa-graduation-cap text-red-400"></i> Évaluation</a>
            </nav>
        </div>
    </header>

    <main class="max-w-5xl mx-auto px-4 py-8 space-y-12">

        <!-- EN-TÊTE DE LA FICHE DE TD -->
        <div class="bg-white border border-slate-200 rounded-3xl p-6 md:p-8 shadow-sm border-l-8 border-l-indigo-600 print-card">
            <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-4 mb-4">
                <div>
                    <div class="flex items-center gap-2 text-xs font-extrabold uppercase text-indigo-600 tracking-wider">
                        <span>Fiche d'Entraînement A4 Imprimable Avec Figures</span> • <span>Baccalauréat Professionnel</span>
                    </div>
                    <h2 class="text-2xl font-extrabold text-slate-900 font-heading mt-1">TD : Probabilités, Arbres, Événements & Fluctuation</h2>
                    <p class="text-xs text-slate-600 mt-1">10 exercices d'entraînement direct + 3 grands problèmes d'évaluation des compétences C1 à C5.</p>
                </div>
                <div class="flex items-center gap-2 no-print">
                    <button onclick="window.print()" class="px-3.5 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl font-bold text-xs flex items-center gap-2 border border-slate-200 transition-colors">
                        <i class="fa-solid fa-print"></i> Imprimer la fiche TD
                    </button>
                    <button onclick="toggleAllCorrections()" class="px-3.5 py-2 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 rounded-xl font-bold text-xs flex items-center gap-2 border border-indigo-200 transition-colors">
                        <i class="fa-solid fa-eye"></i> <span id="toggle-all-text">Tout afficher / masquer</span>
                    </button>
                </div>
            </div>
        </div>

        <!-- ═══════════════════════════════════════════ -->
        <!-- PARTIE A : 10 EXERCICES D'ENTRAÎNEMENT      -->
        <!-- ═══════════════════════════════════════════ -->
        <section class="space-y-6">
            <div class="border-b border-slate-200 pb-3">
                <h3 class="text-xl font-bold font-heading text-slate-900 flex items-center gap-2">
                    <span class="w-8 h-8 bg-indigo-600 text-white rounded-lg flex items-center justify-center font-bold text-sm">A</span>
                    Partie A : 10 Exercices d'Entraînement Illustrés
                </h3>
            </div>

            <!-- EXERCICE 1 -->
            <div class="bg-white rounded-3xl border border-slate-200 p-6 card-shadow print-card space-y-4">
                <div class="flex items-center justify-between border-b border-slate-100 pb-3">
                    <h4 class="font-bold text-slate-900 text-base flex items-center gap-2">
                        <span class="w-7 h-7 bg-indigo-100 text-indigo-800 rounded-lg flex items-center justify-center font-bold text-xs">Ex 1</span>
                        Restauration : Choix d'un Menu & Événement Contraire
                    </h4>
                    <span class="bg-blue-100 text-blue-800 text-xs font-extrabold px-2.5 py-1 rounded-md">Réaliser (C3)</span>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                    <div class="md:col-span-2 text-xs text-slate-700 space-y-2">
                        <p>Un restaurant gastronomique propose une carte comprenant <strong>15 plats de viande</strong>, <strong>10 plats de poisson</strong> et <strong>5 plats végétariens</strong> (total $N = 30$ plats). Un client choisit un plat au hasard.</p>
                        <ol class="list-decimal list-inside space-y-1 text-slate-800 font-medium">
                            <li>Calculez la probabilité $P(V)$ que le client choisisse un plat végétarien.</li>
                            <li>En déduire la probabilité $P(\\bar{V})$ qu'il choisisse un plat non végétarien.</li>
                        </ol>
                    </div>
                    <!-- SVG EX 1 -->
                    <div class="p-3 bg-slate-50 border rounded-2xl text-center overflow-x-auto">
                        <svg width="160" height="90" viewBox="0 0 160 90" class="mx-auto font-sans">
                            <rect width="160" height="90" fill="#f8fafc" rx="8"/>
                            <circle cx="50" cy="45" r="28" fill="#dcfce7" stroke="#16a34a" stroke-width="1.5"/>
                            <text x="50" y="48" font-size="9" font-weight="bold" fill="#15803d" text-anchor="middle">Végé : 5</text>
                            <circle cx="110" cy="45" r="32" fill="#eff6ff" stroke="#2563eb" stroke-width="1.5"/>
                            <text x="110" y="48" font-size="9" font-weight="bold" fill="#1d4ed8" text-anchor="middle">Autres : 25</text>
                        </svg>
                    </div>
                </div>

                <div class="no-print">
                    <button onclick="toggleCorrection('corr-ex1')" class="text-xs font-bold text-indigo-600 hover:text-indigo-800 flex items-center gap-1.5">
                        <i class="fa-solid fa-chevron-down"></i> Voir la correction rédigée
                    </button>
                </div>
                <div id="corr-ex1" class="hidden pt-3 border-t border-dashed border-indigo-200 bg-indigo-50/40 p-4 rounded-2xl text-xs space-y-1 text-slate-800 print-correction">
                    <p class="font-bold text-indigo-900">Corrigé rédigé :</p>
                    <p>1. Total $N = 15 + 10 + 5 = 30$. $P(V) = \\frac{5}{30} = \\mathbf{\\frac{1}{6} \\approx 0{,}167} = \\mathbf{16{,}7\\%}$.</p>
                    <p>2. $P(\\bar{V}) = 1 - P(V) = 1 - \\frac{1}{6} = \\mathbf{\\frac{5}{6} \\approx 0{,}833} = \\mathbf{83{,}3\\%}$.</p>
                </div>
            </div>

            <!-- EXERCICE 2 -->
            <div class="bg-white rounded-3xl border border-slate-200 p-6 card-shadow print-card space-y-4">
                <div class="flex items-center justify-between border-b border-slate-100 pb-3">
                    <h4 class="font-bold text-slate-900 text-base flex items-center gap-2">
                        <span class="w-7 h-7 bg-indigo-100 text-indigo-800 rounded-lg flex items-center justify-center font-bold text-xs">Ex 2</span>
                        Automobile : Contrôle de Stock de Bougies d'Allumage
                    </h4>
                    <span class="bg-blue-100 text-blue-800 text-xs font-extrabold px-2.5 py-1 rounded-md">Réaliser (C3)</span>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                    <div class="md:col-span-2 text-xs text-slate-700 space-y-2">
                        <p>Dans un garage automobile, un bac contient <strong>200 bougies d'allumage</strong> : 140 neuves, 40 d'occasion nettoyées et 20 défectueuses. On prévient une bougie au hasard.</p>
                        <ol class="list-decimal list-inside space-y-1 text-slate-800 font-medium">
                            <li>Quelle est la probabilité $P(N)$ de tirer une bougie neuve ?</li>
                            <li>Quelle est la probabilité $P(D)$ de tirer une bougie défectueuse ?</li>
                        </ol>
                    </div>
                    <!-- SVG EX 2 -->
                    <div class="p-3 bg-slate-50 border rounded-2xl text-center overflow-x-auto">
                        <svg width="160" height="90" viewBox="0 0 160 90" class="mx-auto font-sans">
                            <rect width="160" height="90" fill="#f8fafc" rx="8"/>
                            <rect x="20" y="20" width="120" height="50" fill="#ffffff" stroke="#334155" stroke-width="1.5" rx="6"/>
                            <text x="80" y="42" font-size="9" font-weight="bold" fill="#0f172a" text-anchor="middle">Stock : 200 Bougies</text>
                            <text x="80" y="58" font-size="8" fill="#16a34a" text-anchor="middle">Neuves : 140 (70%)</text>
                        </svg>
                    </div>
                </div>

                <div class="no-print">
                    <button onclick="toggleCorrection('corr-ex2')" class="text-xs font-bold text-indigo-600 hover:text-indigo-800 flex items-center gap-1.5">
                        <i class="fa-solid fa-chevron-down"></i> Voir la correction rédigée
                    </button>
                </div>
                <div id="corr-ex2" class="hidden pt-3 border-t border-dashed border-indigo-200 bg-indigo-50/40 p-4 rounded-2xl text-xs space-y-1 text-slate-800 print-correction">
                    <p class="font-bold text-indigo-900">Corrigé rédigé :</p>
                    <p>1. $P(N) = \\frac{140}{200} = \\mathbf{0{,}70} = \\mathbf{70\\%}$.</p>
                    <p>2. $P(D) = \\frac{20}{200} = \\mathbf{0{,}10} = \\mathbf{10\\%}$.</p>
                </div>
            </div>

            <!-- EXERCICE 3 -->
            <div class="bg-white rounded-3xl border border-slate-200 p-6 card-shadow print-card space-y-4">
                <div class="flex items-center justify-between border-b border-slate-100 pb-3">
                    <h4 class="font-bold text-slate-900 text-base flex items-center gap-2">
                        <span class="w-7 h-7 bg-indigo-100 text-indigo-800 rounded-lg flex items-center justify-center font-bold text-xs">Ex 3</span>
                        BTP & Maçonnerie : Solidité de Matériaux
                    </h4>
                    <span class="bg-purple-100 text-purple-800 text-xs font-extrabold px-2.5 py-1 rounded-md">Analyser (C2)</span>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                    <div class="md:col-span-2 text-xs text-slate-700 space-y-2">
                        <p>Sur un chantier de construction, une palette contient <strong>250 briques</strong>. Le chef de chantier constate que <strong>225 briques</strong> sont impeccables et 25 présentent des micro-fissures.</p>
                        <ol class="list-decimal list-inside space-y-1 text-slate-800 font-medium">
                            <li>Calculez la probabilité de tirer une brique impeccable.</li>
                            <li>En déduire le pourcentage de briques présentant des micro-fissures.</li>
                        </ol>
                    </div>
                    <!-- SVG EX 3 -->
                    <div class="p-3 bg-slate-50 border rounded-2xl text-center overflow-x-auto">
                        <svg width="160" height="90" viewBox="0 0 160 90" class="mx-auto font-sans">
                            <rect width="160" height="90" fill="#f8fafc" rx="8"/>
                            <rect x="30" y="25" width="100" height="40" fill="#f97316" fill-opacity="0.8" rx="4"/>
                            <text x="80" y="48" font-size="9" font-weight="bold" fill="white" text-anchor="middle">250 Briques</text>
                        </svg>
                    </div>
                </div>

                <div class="no-print">
                    <button onclick="toggleCorrection('corr-ex3')" class="text-xs font-bold text-indigo-600 hover:text-indigo-800 flex items-center gap-1.5">
                        <i class="fa-solid fa-chevron-down"></i> Voir la correction rédigée
                    </button>
                </div>
                <div id="corr-ex3" class="hidden pt-3 border-t border-dashed border-indigo-200 bg-indigo-50/40 p-4 rounded-2xl text-xs space-y-1 text-slate-800 print-correction">
                    <p class="font-bold text-indigo-900">Corrigé rédigé :</p>
                    <p>1. $P(\\text{Impeccable}) = \\frac{225}{250} = \\mathbf{0{,}90} = \\mathbf{90\\%}$.</p>
                    <p>2. $P(\\text{Fissures}) = 1 - 0{,}90 = \\mathbf{0{,}10} = \\mathbf{10\\%}$.</p>
                </div>
            </div>

            <!-- EXERCICE 4 -->
            <div class="bg-white rounded-3xl border border-slate-200 p-6 card-shadow print-card space-y-4">
                <div class="flex items-center justify-between border-b border-slate-100 pb-3">
                    <h4 class="font-bold text-slate-900 text-base flex items-center gap-2">
                        <span class="w-7 h-7 bg-indigo-100 text-indigo-800 rounded-lg flex items-center justify-center font-bold text-xs">Ex 4</span>
                        Électricité : Formule de la Réunion $P(A \\cup B)$
                    </h4>
                    <span class="bg-blue-100 text-blue-800 text-xs font-extrabold px-2.5 py-1 rounded-md">Réaliser (C3)</span>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                    <div class="md:col-span-2 text-xs text-slate-700 space-y-2">
                        <p>Lors d'un contrôle de disjoncteurs : $P(A) = 0{,}12$ (défaut thermique), $P(B) = 0{,}08$ (défaut magnétique) et $P(A \\cap B) = 0{,}02$ (les deux défauts).</p>
                        <ol class="list-decimal list-inside space-y-1 text-slate-800 font-medium">
                            <li>Calculez la probabilité $P(A \\cup B)$ qu'un disjoncteur présente au moins un défaut.</li>
                            <li>En déduire la probabilité qu'un disjoncteur n'ait aucun défaut.</li>
                        </ol>
                    </div>
                    <!-- SVG EX 4 -->
                    <div class="p-3 bg-slate-50 border rounded-2xl text-center overflow-x-auto">
                        <svg width="160" height="90" viewBox="0 0 160 90" class="mx-auto font-sans">
                            <rect width="160" height="90" fill="#f8fafc" rx="8"/>
                            <circle cx="65" cy="45" r="25" fill="#3b82f6" fill-opacity="0.3" stroke="#2563eb"/>
                            <circle cx="95" cy="45" r="25" fill="#f59e0b" fill-opacity="0.3" stroke="#d97706"/>
                            <text x="80" y="48" font-size="8" font-weight="bold" fill="#dc2626" text-anchor="middle">0,02</text>
                        </svg>
                    </div>
                </div>

                <div class="no-print">
                    <button onclick="toggleCorrection('corr-ex4')" class="text-xs font-bold text-indigo-600 hover:text-indigo-800 flex items-center gap-1.5">
                        <i class="fa-solid fa-chevron-down"></i> Voir la correction rédigée
                    </button>
                </div>
                <div id="corr-ex4" class="hidden pt-3 border-t border-dashed border-indigo-200 bg-indigo-50/40 p-4 rounded-2xl text-xs space-y-1 text-slate-800 print-correction">
                    <p class="font-bold text-indigo-900">Corrigé rédigé :</p>
                    <p>1. $P(A \\cup B) = P(A) + P(B) - P(A \\cap B) = 0{,}12 + 0{,}08 - 0{,}02 = \\mathbf{0{,}18} = \\mathbf{18\\%}$.</p>
                    <p>2. $P(\\text{Aucun}) = 1 - 0{,}18 = \\mathbf{0{,}82} = \\mathbf{82\\%}$.</p>
                </div>
            </div>

            <!-- EXERCICE 5 -->
            <div class="bg-white rounded-3xl border border-slate-200 p-6 card-shadow print-card space-y-4">
                <div class="flex items-center justify-between border-b border-slate-100 pb-3">
                    <h4 class="font-bold text-slate-900 text-base flex items-center gap-2">
                        <span class="w-7 h-7 bg-indigo-100 text-indigo-800 rounded-lg flex items-center justify-center font-bold text-xs">Ex 5</span>
                        Commerce & Logistique : Gestion de Stock
                    </h4>
                    <span class="bg-emerald-100 text-emerald-800 text-xs font-extrabold px-2.5 py-1 rounded-md">S'approprier (C1)</span>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                    <div class="md:col-span-2 text-xs text-slate-700 space-y-2">
                        <p>Dans un entrepôt de 400 paires de chaussures : 240 sont noires et 160 sont marron. Parmi les noires, 60 sont en taille 42.</p>
                        <ol class="list-decimal list-inside space-y-1 text-slate-800 font-medium">
                            <li>Quelle est la probabilité de prélever une paire noire ?</li>
                            <li>Quelle est la probabilité de prélever une paire noire ET en taille 42 ?</li>
                        </ol>
                    </div>
                    <!-- SVG EX 5 -->
                    <div class="p-3 bg-slate-50 border rounded-2xl text-center overflow-x-auto">
                        <svg width="160" height="90" viewBox="0 0 160 90" class="mx-auto font-sans">
                            <rect width="160" height="90" fill="#f8fafc" rx="8"/>
                            <rect x="20" y="25" width="120" height="40" fill="#334155" rx="4"/>
                            <text x="80" y="48" font-size="9" font-weight="bold" fill="white" text-anchor="middle">Stock : 400 paires</text>
                        </svg>
                    </div>
                </div>

                <div class="no-print">
                    <button onclick="toggleCorrection('corr-ex5')" class="text-xs font-bold text-indigo-600 hover:text-indigo-800 flex items-center gap-1.5">
                        <i class="fa-solid fa-chevron-down"></i> Voir la correction rédigée
                    </button>
                </div>
                <div id="corr-ex5" class="hidden pt-3 border-t border-dashed border-indigo-200 bg-indigo-50/40 p-4 rounded-2xl text-xs space-y-1 text-slate-800 print-correction">
                    <p class="font-bold text-indigo-900">Corrigé rédigé :</p>
                    <p>1. $P(\\text{Noires}) = \\frac{240}{400} = \\mathbf{0{,}60} = \\mathbf{60\\%}$.</p>
                    <p>2. $P(\\text{Noires} \\cap 42) = \\frac{60}{400} = \\mathbf{0{,}15} = \\mathbf{15\\%}$.</p>
                </div>
            </div>

            <!-- EXERCICE 6 -->
            <div class="bg-white rounded-3xl border border-slate-200 p-6 card-shadow print-card space-y-4">
                <div class="flex items-center justify-between border-b border-slate-100 pb-3">
                    <h4 class="font-bold text-slate-900 text-base flex items-center gap-2">
                        <span class="w-7 h-7 bg-indigo-100 text-indigo-800 rounded-lg flex items-center justify-center font-bold text-xs">Ex 6</span>
                        Agroalimentaire : Pesée de Barquettes
                    </h4>
                    <span class="bg-blue-100 text-blue-800 text-xs font-extrabold px-2.5 py-1 rounded-md">Réaliser (C3)</span>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                    <div class="md:col-span-2 text-xs text-slate-700 space-y-2">
                        <p>Une trieuse pondérale vérifie 500 barquettes : 450 sont de poids conforme (500g), 30 sont sous-pesées et 20 sont sur-pesées.</p>
                        <ol class="list-decimal list-inside space-y-1 text-slate-800 font-medium">
                            <li>Quelle est la probabilité de tirer une barquette de poids non conforme (sous-pesée ou sur-pesée) ?</li>
                        </ol>
                    </div>
                    <!-- SVG EX 6 -->
                    <div class="p-3 bg-slate-50 border rounded-2xl text-center overflow-x-auto">
                        <svg width="160" height="90" viewBox="0 0 160 90" class="mx-auto font-sans">
                            <rect width="160" height="90" fill="#f8fafc" rx="8"/>
                            <text x="80" y="48" font-size="10" font-weight="bold" fill="#16a34a" text-anchor="middle">Conformes : 450/500</text>
                        </svg>
                    </div>
                </div>

                <div class="no-print">
                    <button onclick="toggleCorrection('corr-ex6')" class="text-xs font-bold text-indigo-600 hover:text-indigo-800 flex items-center gap-1.5">
                        <i class="fa-solid fa-chevron-down"></i> Voir la correction rédigée
                    </button>
                </div>
                <div id="corr-ex6" class="hidden pt-3 border-t border-dashed border-indigo-200 bg-indigo-50/40 p-4 rounded-2xl text-xs space-y-1 text-slate-800 print-correction">
                    <p class="font-bold text-indigo-900">Corrigé rédigé :</p>
                    <p>Total non conformes $= 30 + 20 = 50$. $P(\\text{Non conforme}) = \\frac{50}{500} = \\mathbf{0{,}10} = \\mathbf{10\\%}$.</p>
                </div>
            </div>

            <!-- EXERCICE 7 -->
            <div class="bg-white rounded-3xl border border-slate-200 p-6 card-shadow print-card space-y-4">
                <div class="flex items-center justify-between border-b border-slate-100 pb-3">
                    <h4 class="font-bold text-slate-900 text-base flex items-center gap-2">
                        <span class="w-7 h-7 bg-indigo-100 text-indigo-800 rounded-lg flex items-center justify-center font-bold text-xs">Ex 7</span>
                        Maintenance : Diagnostic par Arbre de Choix
                    </h4>
                    <span class="bg-purple-100 text-purple-800 text-xs font-extrabold px-2.5 py-1 rounded-md">Analyser (C2)</span>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                    <div class="md:col-span-2 text-xs text-slate-700 space-y-2">
                        <p>Lors de pannes sur un automate : $40\\%$ sont d'origine électrique ($E$) et $60\\%$ d'origine mécanique ($M$). Si la panne est électrique, le changement de fusible suffit dans $80\\%$ des cas.</p>
                        <ol class="list-decimal list-inside space-y-1 text-slate-800 font-medium">
                            <li>Calculez la probabilité que la panne soit électrique ET résolue par le fusible.</li>
                        </ol>
                    </div>
                    <!-- SVG EX 7 -->
                    <div class="p-3 bg-slate-50 border rounded-2xl text-center overflow-x-auto">
                        <svg width="160" height="90" viewBox="0 0 160 90" class="mx-auto font-sans">
                            <rect width="160" height="90" fill="#f8fafc" rx="8"/>
                            <line x1="20" y1="45" x2="80" y2="25" stroke="#4f46e5" stroke-width="1.5"/>
                            <text x="50" y="30" font-size="8" fill="#4f46e5">0,40</text>
                            <line x1="80" y1="25" x2="140" y2="15" stroke="#16a34a" stroke-width="1.5"/>
                            <text x="110" y="15" font-size="8" fill="#16a34a">0,80</text>
                        </svg>
                    </div>
                </div>

                <div class="no-print">
                    <button onclick="toggleCorrection('corr-ex7')" class="text-xs font-bold text-indigo-600 hover:text-indigo-800 flex items-center gap-1.5">
                        <i class="fa-solid fa-chevron-down"></i> Voir la correction rédigée
                    </button>
                </div>
                <div id="corr-ex7" class="hidden pt-3 border-t border-dashed border-indigo-200 bg-indigo-50/40 p-4 rounded-2xl text-xs space-y-1 text-slate-800 print-correction">
                    <p class="font-bold text-indigo-900">Corrigé rédigé :</p>
                    <p>$P(E \\cap F) = 0{,}40 \\times 0{,}80 = \\mathbf{0{,}32} = \\mathbf{32\\%}$.</p>
                </div>
            </div>

            <!-- EXERCICE 8 -->
            <div class="bg-white rounded-3xl border border-slate-200 p-6 card-shadow print-card space-y-4">
                <div class="flex items-center justify-between border-b border-slate-100 pb-3">
                    <h4 class="font-bold text-slate-900 text-base flex items-center gap-2">
                        <span class="w-7 h-7 bg-indigo-100 text-indigo-800 rounded-lg flex items-center justify-center font-bold text-xs">Ex 8</span>
                        Santé & ASSP : Groupes Sanguins de Donneurs
                    </h4>
                    <span class="bg-blue-100 text-blue-800 text-xs font-extrabold px-2.5 py-1 rounded-md">Réaliser (C3)</span>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                    <div class="md:col-span-2 text-xs text-slate-700 space-y-2">
                        <p>Un centre de don du sang enregistre 400 donneurs : 180 du groupe O, 160 du groupe A, 40 du groupe B et 20 du groupe AB.</p>
                        <ol class="list-decimal list-inside space-y-1 text-slate-800 font-medium">
                            <li>Quelle est la probabilité qu'un donneur soit du groupe O (donneur universel) ?</li>
                        </ol>
                    </div>
                    <!-- SVG EX 8 -->
                    <div class="p-3 bg-slate-50 border rounded-2xl text-center overflow-x-auto">
                        <svg width="160" height="90" viewBox="0 0 160 90" class="mx-auto font-sans">
                            <rect width="160" height="90" fill="#f8fafc" rx="8"/>
                            <circle cx="80" cy="45" r="25" fill="#fee2e2" stroke="#dc2626" stroke-width="1.5"/>
                            <text x="80" y="48" font-size="11" font-weight="bold" fill="#b91c1c" text-anchor="middle">Groupe O</text>
                        </svg>
                    </div>
                </div>

                <div class="no-print">
                    <button onclick="toggleCorrection('corr-ex8')" class="text-xs font-bold text-indigo-600 hover:text-indigo-800 flex items-center gap-1.5">
                        <i class="fa-solid fa-chevron-down"></i> Voir la correction rédigée
                    </button>
                </div>
                <div id="corr-ex8" class="hidden pt-3 border-t border-dashed border-indigo-200 bg-indigo-50/40 p-4 rounded-2xl text-xs space-y-1 text-slate-800 print-correction">
                    <p class="font-bold text-indigo-900">Corrigé rédigé :</p>
                    <p>$P(O) = \\frac{180}{400} = \\mathbf{0{,}45} = \\mathbf{45\\%}$.</p>
                </div>
            </div>

            <!-- EXERCICE 9 -->
            <div class="bg-white rounded-3xl border border-slate-200 p-6 card-shadow print-card space-y-4">
                <div class="flex items-center justify-between border-b border-slate-100 pb-3">
                    <h4 class="font-bold text-slate-900 text-base flex items-center gap-2">
                        <span class="w-7 h-7 bg-indigo-100 text-indigo-800 rounded-lg flex items-center justify-center font-bold text-xs">Ex 9</span>
                        Tertiaire & Vente : Enquête de Satisfaction
                    </h4>
                    <span class="bg-emerald-100 text-emerald-800 text-xs font-extrabold px-2.5 py-1 rounded-md">S'approprier (C1)</span>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                    <div class="md:col-span-2 text-xs text-slate-700 space-y-2">
                        <p>Une enquête auprès de 200 clients indique : 150 très satisfaits, 30 neutres et 20 insatisfaits.</p>
                        <ol class="list-decimal list-inside space-y-1 text-slate-800 font-medium">
                            <li>Calculez la probabilité de tirer un client insatisfait.</li>
                        </ol>
                    </div>
                    <!-- SVG EX 9 -->
                    <div class="p-3 bg-slate-50 border rounded-2xl text-center overflow-x-auto">
                        <svg width="160" height="90" viewBox="0 0 160 90" class="mx-auto font-sans">
                            <rect width="160" height="90" fill="#f8fafc" rx="8"/>
                            <text x="80" y="48" font-size="10" font-weight="bold" fill="#0284c7" text-anchor="middle">200 Clients</text>
                        </svg>
                    </div>
                </div>

                <div class="no-print">
                    <button onclick="toggleCorrection('corr-ex9')" class="text-xs font-bold text-indigo-600 hover:text-indigo-800 flex items-center gap-1.5">
                        <i class="fa-solid fa-chevron-down"></i> Voir la correction rédigée
                    </button>
                </div>
                <div id="corr-ex9" class="hidden pt-3 border-t border-dashed border-indigo-200 bg-indigo-50/40 p-4 rounded-2xl text-xs space-y-1 text-slate-800 print-correction">
                    <p class="font-bold text-indigo-900">Corrigé rédigé :</p>
                    <p>$P(\\text{Insatisfait}) = \\frac{20}{200} = \\mathbf{0{,}10} = \\mathbf{10\\%}$.</p>
                </div>
            </div>

            <!-- EXERCICE 10 -->
            <div class="bg-white rounded-3xl border border-slate-200 p-6 card-shadow print-card space-y-4">
                <div class="flex items-center justify-between border-b border-slate-100 pb-3">
                    <h4 class="font-bold text-slate-900 text-base flex items-center gap-2">
                        <span class="w-7 h-7 bg-indigo-100 text-indigo-800 rounded-lg flex items-center justify-center font-bold text-xs">Ex 10</span>
                        Métallurgie : Fluctuation d'Échantillonnage de Roulements
                    </h4>
                    <span class="bg-emerald-100 text-emerald-800 text-xs font-extrabold px-2.5 py-1 rounded-md">Valider (C4)</span>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                    <div class="md:col-span-2 text-xs text-slate-700 space-y-2">
                        <p>La probabilité théorique de défaut de diamètre est $p = 0{,}05$. Un technicien contrôle deux échantillons : Échantillon 1 ($N_1 = 40$, 4 défectueux) et Échantillon 2 ($N_2 = 500$, 26 défectueux).</p>
                        <ol class="list-decimal list-inside space-y-1 text-slate-800 font-medium">
                            <li>Calculez les fréquences observées $f_1$ et $f_2$. Quel échantillon est le plus proche de la théorie $p = 0{,}05$ ?</li>
                        </ol>
                    </div>
                    <!-- SVG EX 10 -->
                    <div class="p-3 bg-slate-50 border rounded-2xl text-center overflow-x-auto">
                        <svg width="160" height="90" viewBox="0 0 160 90" class="mx-auto font-sans">
                            <rect width="160" height="90" fill="#f8fafc" rx="8"/>
                            <line x1="20" y1="45" x2="140" y2="45" stroke="#eab308" stroke-width="2" stroke-dasharray="3,3"/>
                            <text x="80" y="38" font-size="8" font-weight="bold" fill="#ca8a04" text-anchor="middle">p = 0,05</text>
                        </svg>
                    </div>
                </div>

                <div class="no-print">
                    <button onclick="toggleCorrection('corr-ex10')" class="text-xs font-bold text-indigo-600 hover:text-indigo-800 flex items-center gap-1.5">
                        <i class="fa-solid fa-chevron-down"></i> Voir la correction rédigée
                    </button>
                </div>
                <div id="corr-ex10" class="hidden pt-3 border-t border-dashed border-indigo-200 bg-indigo-50/40 p-4 rounded-2xl text-xs space-y-1 text-slate-800 print-correction">
                    <p class="font-bold text-indigo-900">Corrigé rédigé :</p>
                    <p>$f_1 = \\frac{4}{40} = 0{,}10$ (écart de 0,05). $f_2 = \\frac{26}{500} = 0{,}052$ (écart de 0,002). L'échantillon 2 ($N_2 = 500$) est beaucoup plus proche de $p=0{,}05$ conformément à la Loi des grands nombres.</p>
                </div>
            </div>
        </section>

        <!-- ═══════════════════════════════════════════ -->
        <!-- PARTIE B : 3 GRANDS PROBLÈMES PRO           -->
        <!-- ═══════════════════════════════════════════ -->
        <section class="space-y-6">
            <div class="border-b border-slate-200 pb-3">
                <h3 class="text-xl font-bold font-heading text-slate-900 flex items-center gap-2">
                    <span class="w-8 h-8 bg-indigo-900 text-white rounded-lg flex items-center justify-center font-bold text-sm">B</span>
                    Partie B : 3 Grands Problèmes Multi-Compétences (C1 à C5)
                </h3>
            </div>

            <!-- PROBLÈME A -->
            <div class="bg-white rounded-3xl border border-slate-200 p-6 md:p-8 card-shadow print-card space-y-6">
                <div class="flex flex-col md:flex-row md:items-center justify-between gap-2 border-b border-slate-100 pb-4">
                    <div>
                        <span class="bg-indigo-100 text-indigo-800 text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">Problème A • Industrie Aéronautique</span>
                        <h4 class="text-lg font-bold font-heading text-slate-900 mt-1">Contrôle Qualité de Rivets en Titane (Tableau & Norme Usine)</h4>
                    </div>
                    <div class="flex flex-wrap gap-1 text-[10px] font-bold">
                        <span class="bg-slate-100 text-slate-700 px-2 py-0.5 rounded">C1</span>
                        <span class="bg-slate-100 text-slate-700 px-2 py-0.5 rounded">C2</span>
                        <span class="bg-slate-100 text-slate-700 px-2 py-0.5 rounded">C3</span>
                        <span class="bg-slate-100 text-slate-700 px-2 py-0.5 rounded">C4</span>
                        <span class="bg-slate-100 text-slate-700 px-2 py-0.5 rounded">C5</span>
                    </div>
                </div>

                <div class="space-y-4 text-xs text-slate-700 leading-relaxed">
                    <p class="font-medium">
                        Un sous-traitant aéronautique fabrique des rivets en titane pour l'assemblage des ailes d'avions. Un lot de <strong>1 000 rivets</strong> est contrôlé. La Machine 1 produit 600 rivets (dont 12 défectueux) et la Machine 2 produit 400 rivets (dont 4 défectueux).
                    </p>

                    <div class="overflow-x-auto">
                        <table class="w-full text-center border-collapse">
                            <thead>
                                <tr class="bg-slate-900 text-white">
                                    <th class="p-2 text-left">Machine</th>
                                    <th class="p-2">Conformes ($C$)</th>
                                    <th class="p-2">Défectueux ($D$)</th>
                                    <th class="p-2 bg-slate-800">TOTAL</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-slate-200 bg-slate-50">
                                <tr>
                                    <td class="p-2 text-left font-bold">Machine 1 ($M_1$)</td>
                                    <td class="p-2 text-emerald-700 font-bold">588</td>
                                    <td class="p-2 text-red-600 font-bold">12</td>
                                    <td class="p-2 font-bold bg-slate-200">600</td>
                                </tr>
                                <tr>
                                    <td class="p-2 text-left font-bold">Machine 2 ($M_2$)</td>
                                    <td class="p-2 text-emerald-700 font-bold">396</td>
                                    <td class="p-2 text-red-600 font-bold">4</td>
                                    <td class="p-2 font-bold bg-slate-200">400</td>
                                </tr>
                                <tr class="bg-indigo-50 font-bold">
                                    <td class="p-2 text-left text-indigo-900">TOTAL</td>
                                    <td class="p-2 text-indigo-900">984</td>
                                    <td class="p-2 text-indigo-900">16</td>
                                    <td class="p-2 text-indigo-900 bg-indigo-100">1 000</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="space-y-2 font-medium text-slate-900">
                        <p><strong>Travail à effectuer :</strong></p>
                        <ol class="list-decimal list-inside space-y-1.5 text-slate-700">
                            <li>Calculer la probabilité $P(M_1)$ qu'un rivet vienne de la Machine 1. <span class="text-indigo-600 font-bold">(C1 - S'approprier)</span></li>
                            <li>Calculer la probabilité globale de défaut $P(D)$ sur l'ensemble du lot. <span class="text-indigo-600 font-bold">(C3 - Réaliser)</span></li>
                            <li>La norme aéronautique exige que le taux de défaut ne dépasse pas $1{,}8\%$. Le lot est-il conforme à la norme usine ? Justifier. <span class="text-indigo-600 font-bold">(C4 - Valider & C5 - Communiquer)</span></li>
                        </ol>
                    </div>
                </div>

                <div class="no-print">
                    <button onclick="toggleCorrection('corr-probA')" class="text-xs font-bold text-indigo-600 hover:text-indigo-800 flex items-center gap-1.5">
                        <i class="fa-solid fa-chevron-down"></i> Voir le corrigé détaillé du Problème A
                    </button>
                </div>
                <div id="corr-probA" class="hidden pt-4 border-t border-dashed border-indigo-200 bg-indigo-50/40 p-4 rounded-2xl text-xs space-y-2 text-slate-800 print-correction">
                    <p class="font-bold text-indigo-900">Corrigé rédigé du Problème A :</p>
                    <p>1. $P(M_1) = \\frac{600}{1000} = \\mathbf{0{,}60} = \\mathbf{60\\%}$.</p>
                    <p>2. $P(D) = \\frac{16}{1000} = \\mathbf{0{,}016} = \\mathbf{1{,}6\\%}$.</p>
                    <p>3. Comme $1{,}6\\% \\le 1{,}8\\%$, le lot respecte la norme qualité aéronautique usine et peut être validé pour l'assemblage.</p>
                </div>
            </div>

            <!-- PROBLÈME B -->
            <div class="bg-white rounded-3xl border border-slate-200 p-6 md:p-8 card-shadow print-card space-y-6">
                <div class="flex flex-col md:flex-row md:items-center justify-between gap-2 border-b border-slate-100 pb-4">
                    <div>
                        <span class="bg-indigo-100 text-indigo-800 text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">Problème B • Logistique & Transport</span>
                        <h4 class="text-lg font-bold font-heading text-slate-900 mt-1">Analyse des Pannes d'une Flotte de 200 Camions</h4>
                    </div>
                    <div class="flex flex-wrap gap-1 text-[10px] font-bold">
                        <span class="bg-slate-100 text-slate-700 px-2 py-0.5 rounded">C1</span>
                        <span class="bg-slate-100 text-slate-700 px-2 py-0.5 rounded">C2</span>
                        <span class="bg-slate-100 text-slate-700 px-2 py-0.5 rounded">C3</span>
                        <span class="bg-slate-100 text-slate-700 px-2 py-0.5 rounded">C4</span>
                        <span class="bg-slate-100 text-slate-700 px-2 py-0.5 rounded">C5</span>
                    </div>
                </div>

                <div class="space-y-4 text-xs text-slate-700 leading-relaxed">
                    <p class="font-medium">
                        Une entreprise de transport gère un parc de <strong>200 camions</strong>. Lors du bilan annuel :
                        $15\\%$ des camions ont eu une panne de freins ($A$), $10\\%$ ont eu une panne moteur ($B$) et $3\\%$ ont eu les deux pannes ($A \\cap B$).
                    </p>

                    <div class="space-y-2 font-medium text-slate-900">
                        <p><strong>Travail à effectuer :</strong></p>
                        <ol class="list-decimal list-inside space-y-1.5 text-slate-700">
                            <li>Calculer la probabilité $P(A \\cup B)$ qu'un camion ait eu au moins une panne dans l'année. <span class="text-indigo-600 font-bold">(C3 - Réaliser)</span></li>
                            <li>Calculer le nombre exact de camions de la flotte n'ayant subi AUCUNE panne. <span class="text-indigo-600 font-bold">(C3 - Réaliser)</span></li>
                            <li>Rédiger une note d'information synthétique destinée au directeur d'exploitation sur la fiabilité de la flotte. <span class="text-indigo-600 font-bold">(C5 - Communiquer)</span></li>
                        </ol>
                    </div>
                </div>

                <div class="no-print">
                    <button onclick="toggleCorrection('corr-probB')" class="text-xs font-bold text-indigo-600 hover:text-indigo-800 flex items-center gap-1.5">
                        <i class="fa-solid fa-chevron-down"></i> Voir le corrigé détaillé du Problème B
                    </button>
                </div>
                <div id="corr-probB" class="hidden pt-4 border-t border-dashed border-indigo-200 bg-indigo-50/40 p-4 rounded-2xl text-xs space-y-2 text-slate-800 print-correction">
                    <p class="font-bold text-indigo-900">Corrigé rédigé du Problème B :</p>
                    <p>1. $P(A \\cup B) = 0{,}15 + 0{,}10 - 0{,}03 = \\mathbf{0{,}22} = \\mathbf{22\\%}$.</p>
                    <p>2. $P(\\text{Aucune}) = 1 - 0{,}22 = 0{,}78$. Nombre $= 0{,}78 \\times 200 = \\mathbf{156 \\text{ camions}}$.</p>
                    <p>3. Note : $78\\%$ du parc n'a connu aucune défaillance majeure. Seuls $22\\%$ ont subi au moins une panne, démontrant un bon entretien global du parc.</p>
                </div>
            </div>

            <!-- PROBLÈME C -->
            <div class="bg-white rounded-3xl border border-slate-200 p-6 md:p-8 card-shadow print-card space-y-6">
                <div class="flex flex-col md:flex-row md:items-center justify-between gap-2 border-b border-slate-100 pb-4">
                    <div>
                        <span class="bg-indigo-100 text-indigo-800 text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">Problème C • Simulation & Qualité Usinage</span>
                        <h4 class="text-lg font-bold font-heading text-slate-900 mt-1">Étude de la Fluctuation d'Échantillonnage en Usinage CNC</h4>
                    </div>
                    <div class="flex flex-wrap gap-1 text-[10px] font-bold">
                        <span class="bg-slate-100 text-slate-700 px-2 py-0.5 rounded">C1</span>
                        <span class="bg-slate-100 text-slate-700 px-2 py-0.5 rounded">C2</span>
                        <span class="bg-slate-100 text-slate-700 px-2 py-0.5 rounded">C3</span>
                        <span class="bg-slate-100 text-slate-700 px-2 py-0.5 rounded">C4</span>
                        <span class="bg-slate-100 text-slate-700 px-2 py-0.5 rounded">C5</span>
                    </div>
                </div>

                <div class="space-y-4 text-xs text-slate-700 leading-relaxed">
                    <p class="font-medium">
                        Une tour numérique produit des axes en acier. La probabilité théorique qu'un axe soit hors tolérance de cote est $p = 0{,}04$ ($4\\%$).
                        Un régleur effectue 3 séries de contrôle d'échantillons :
                        - Échantillon 1 : $N_1 = 25$ pièces (2 hors tolérance).
                        - Échantillon 2 : $N_2 = 100$ pièces (6 hors tolérance).
                        - Échantillon 3 : $N_3 = 1\\,000$ pièces (41 hors tolérance).
                    </p>

                    <div class="space-y-2 font-medium text-slate-900">
                        <p><strong>Travail à effectuer :</strong></p>
                        <ol class="list-decimal list-inside space-y-1.5 text-slate-700">
                            <li>Calculer les fréquences observées $f_1$, $f_2$ et $f_3$. <span class="text-indigo-600 font-bold">(C3 - Réaliser)</span></li>
                            <li>Expliquer pourquoi les fréquences $f_1$ et $f_2$ diffèrent de la valeur théorique $p = 0{,}04$. <span class="text-indigo-600 font-bold">(C2 - Analyser)</span></li>
                            <li>En déduire le rôle de la taille de l'échantillon sur la fiabilité du contrôle selon la Loi des Grands Nombres. <span class="text-indigo-600 font-bold">(C4 - Valider)</span></li>
                        </ol>
                    </div>
                </div>

                <div class="no-print">
                    <button onclick="toggleCorrection('corr-probC')" class="text-xs font-bold text-indigo-600 hover:text-indigo-800 flex items-center gap-1.5">
                        <i class="fa-solid fa-chevron-down"></i> Voir le corrigé détaillé du Problème C
                    </button>
                </div>
                <div id="corr-probC" class="hidden pt-4 border-t border-dashed border-indigo-200 bg-indigo-50/40 p-4 rounded-2xl text-xs space-y-2 text-slate-800 print-correction">
                    <p class="font-bold text-indigo-900">Corrigé rédigé du Problème C :</p>
                    <p>1. $f_1 = \\frac{2}{25} = 0{,}080 = 8\\%$. $f_2 = \\frac{6}{100} = 0{,}060 = 6\\%$. $f_3 = \\frac{41}{1000} = 0{,}041 = 4{,}1\\%$.</p>
                    <p>2. L'écart est dû à la fluctuation d'échantillonnage naturelle sur de faibles effectifs.</p>
                    <p>3. Plus la taille de l'échantillon $N$ augmente, plus la fréquence observée $f$ converge vers la probabilité théorique $p = 0{,}04$. Seul un grand échantillon garantit un contrôle fiable du procédé d'usinage.</p>
                </div>
            </div>
        </section>

    </main>

    <!-- SCRIPTS JS -->
    <script>
        let allShown = false;

        function toggleCorrection(id) {
            const el = document.getElementById(id);
            if (el) el.classList.toggle('hidden');
        }

        function toggleAllCorrections() {
            allShown = !allShown;
            const ids = ['corr-ex1', 'corr-ex2', 'corr-ex3', 'corr-ex4', 'corr-ex5', 'corr-ex6', 'corr-ex7', 'corr-ex8', 'corr-ex9', 'corr-ex10', 'corr-probA', 'corr-probB', 'corr-probC'];
            ids.forEach(id => {
                const el = document.getElementById(id);
                if (el) {
                    if (allShown) el.classList.remove('hidden');
                    else el.classList.add('hidden');
                }
            });
            const btnText = document.getElementById('toggle-all-text');
            if (btnText) btnText.textContent = allShown ? "Masquer toutes les corrections" : "Afficher toutes les corrections";
        }
    </script>
</body>
</html>
`;

fs.writeFileSync(path.join(targetDir, 'td.html'), tdHtml, 'utf8');
console.log('✅ td.html pour probabilites-fluctuation généré avec succès !');
