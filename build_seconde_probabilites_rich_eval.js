const fs = require('fs');
const path = require('path');

const targetDir = path.join(__dirname, 'ressources', 'seconde', 'maths', 'probabilites-fluctuation');

const evalHtml = `<!DOCTYPE html>
<html lang="fr" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Évaluation Sommative - Probabilités & Fluctuation 2nde Pro</title>
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
    <script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js"><\/script>

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

    <!-- Header & Navigation unifiée pour la Séquence 2nde Pro Maths -->
    <header class="bg-slate-900 text-white sticky top-0 z-50 border-b border-slate-800 shadow-md no-print">
        <div class="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
            <div class="flex items-center gap-3">
                <div class="w-10 h-10 bg-red-500/20 border border-red-400/30 text-red-400 rounded-xl flex items-center justify-center font-bold">
                    <i class="fa-solid fa-graduation-cap text-lg"></i>
                </div>
                <div>
                    <span class="text-xs font-bold tracking-widest uppercase text-red-400">Séquence 8 • Évaluation Officielle CCF</span>
                    <h1 class="text-xl font-bold font-heading">Probabilités & Fluctuation d'Échantillonnage</h1>
                </div>
            </div>
            <!-- Navigation de la Séquence 2nde Pro Maths -->
            <nav class="flex flex-wrap items-center gap-1.5 text-xs font-bold">
                <a href="automatismes.html" class="px-3 py-2 rounded-lg bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white transition-colors flex items-center gap-1.5"><i class="fa-solid fa-bolt text-yellow-400"></i> Automatismes</a>
                <a href="activites.html" class="px-3 py-2 rounded-lg bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white transition-colors flex items-center gap-1.5"><i class="fa-solid fa-lightbulb text-emerald-400"></i> Activités</a>
                <a href="cours.html" class="px-3 py-2 rounded-lg bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white transition-colors flex items-center gap-1.5"><i class="fa-solid fa-book-open text-sky-400"></i> Cours</a>
                <a href="td.html" class="px-3 py-2 rounded-lg bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white transition-colors flex items-center gap-1.5"><i class="fa-solid fa-dumbbell text-indigo-400"></i> TD & Exercices</a>
                <a href="tice.html" class="px-3 py-2 rounded-lg bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white transition-colors flex items-center gap-1.5"><i class="fa-solid fa-laptop-code text-purple-400"></i> TICE Excel</a>
                <a href="eval.html" class="px-3 py-2 rounded-lg bg-red-600 text-white font-extrabold shadow-sm flex items-center gap-1.5"><i class="fa-solid fa-graduation-cap"></i> Évaluation</a>
            </nav>
        </div>
    </header>

    <main class="max-w-5xl mx-auto px-4 py-8 space-y-8">

        <!-- CARTOUCHE ÉLÈVE OFFICIEL BAC PRO (20 POINTS) -->
        <div class="bg-white border border-slate-200 rounded-3xl p-6 md:p-8 shadow-sm border-l-8 border-l-red-600 print-card space-y-6">
            <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-4">
                <div>
                    <div class="flex items-center gap-2 text-xs font-extrabold uppercase text-red-600 tracking-wider">
                        <span>Éducation Nationale</span> • <span>Baccalauréat Professionnel (CCF)</span>
                    </div>
                    <h2 class="text-2xl font-extrabold text-slate-900 font-heading mt-1">Évaluation Sommative : Probabilités & Fluctuation (20 Pts)</h2>
                </div>
                <div class="flex items-center gap-2 no-print">
                    <button onclick="window.print()" class="px-3.5 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl font-bold text-xs flex items-center gap-2 border border-slate-200 transition-colors">
                        <i class="fa-solid fa-print"></i> Imprimer le sujet (PDF)
                    </button>
                    <button onclick="toggleAllCorrections()" class="px-3.5 py-2 bg-red-50 hover:bg-red-100 text-red-700 rounded-xl font-bold text-xs flex items-center gap-2 border border-red-200 transition-colors">
                        <i class="fa-solid fa-key"></i> <span id="toggle-all-text">Voir le Barème & Corrigé</span>
                    </button>
                </div>
            </div>

            <!-- CARTOUCHE NOM / CLASSE / NOTE -->
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-bold bg-slate-50 p-4 rounded-2xl border border-slate-200">
                <div><span class="text-slate-500 uppercase">Nom & Prénom :</span> <span class="text-slate-900 block text-sm mt-0.5">...................................................</span></div>
                <div><span class="text-slate-500 uppercase">Classe :</span> <span class="text-slate-900 block text-sm mt-0.5">Seconde Pro ..........</span></div>
                <div class="sm:text-right"><span class="text-slate-500 uppercase">Note Finale :</span> <span class="text-red-600 block text-lg font-extrabold font-mono">......... / 20</span></div>
            </div>

            <!-- GRILLE DES COMPÉTENCES BARÈME -->
            <div class="overflow-x-auto">
                <table class="w-full text-[11px] text-center border-collapse">
                    <thead>
                        <tr class="bg-slate-900 text-white">
                            <th class="p-2 text-left">Compétence Évaluée</th>
                            <th class="p-2">S'approprier (C1)</th>
                            <th class="p-2">Analyser (C2)</th>
                            <th class="p-2">Réaliser (C3)</th>
                            <th class="p-2">Valider (C4)</th>
                            <th class="p-2">Communiquer (C5)</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-slate-200 bg-slate-50">
                        <tr>
                            <td class="p-2 text-left font-bold">Barème par compétence</td>
                            <td class="p-2 font-bold text-indigo-700">4 Pts</td>
                            <td class="p-2 font-bold text-indigo-700">4 Pts</td>
                            <td class="p-2 font-bold text-indigo-700">6 Pts</td>
                            <td class="p-2 font-bold text-indigo-700">4 Pts</td>
                            <td class="p-2 font-bold text-indigo-700">2 Pts</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <!-- ═══════════════════════════════════════════ -->
        <!-- EXERCICE 1 : AUTOMATISMES & QCM (4 PTS)     -->
        <!-- ═══════════════════════════════════════════ -->
        <div class="bg-white rounded-3xl border border-slate-200 p-6 md:p-8 card-shadow print-card space-y-4">
            <div class="flex items-center justify-between border-b border-slate-100 pb-3">
                <h3 class="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span class="w-7 h-7 bg-red-600 text-white rounded-lg flex items-center justify-center font-bold text-xs">Ex 1</span>
                    Automatismes & Connaissances (4 Points)
                </h3>
                <span class="bg-red-100 text-red-800 text-xs font-extrabold px-2.5 py-1 rounded-md">C1, C2 • 4 Points</span>
            </div>

            <p class="text-xs text-slate-600">Cochez la bonne réponse pour chaque question (1 pt par réponse exacte).</p>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                <!-- Q1 -->
                <div class="p-3 bg-slate-50 rounded-2xl border space-y-1.5">
                    <p class="font-bold text-slate-900">1. Un lot contient 80 pièces conformes et 20 défectueuses. $P(\\text{défectueuse}) = $ ?</p>
                    <div class="space-y-1 text-slate-700">
                        <label class="flex items-center gap-2"><input type="radio" name="eval-q1" class="accent-red-600"> <span>A) $0{,}80$</span></label>
                        <label class="flex items-center gap-2"><input type="radio" name="eval-q1" class="accent-red-600"> <span>B) $0{,}20$ (car $20/100$)</span></label>
                        <label class="flex items-center gap-2"><input type="radio" name="eval-q1" class="accent-red-600"> <span>C) $0{,}25$</span></label>
                    </div>
                </div>

                <!-- Q2 -->
                <div class="p-3 bg-slate-50 rounded-2xl border space-y-1.5">
                    <p class="font-bold text-slate-900">2. Si $P(A) = 0{,}15$, que vaut la probabilité de l'événement contraire $P(\\bar{A})$ ?</p>
                    <div class="space-y-1 text-slate-700">
                        <label class="flex items-center gap-2"><input type="radio" name="eval-q2" class="accent-red-600"> <span>A) $0{,}85$ (car $1 - 0{,}15$)</span></label>
                        <label class="flex items-center gap-2"><input type="radio" name="eval-q2" class="accent-red-600"> <span>B) $-0{,}15$</span></label>
                        <label class="flex items-center gap-2"><input type="radio" name="eval-q2" class="accent-red-600"> <span>C) $1{,}15$</span></label>
                    </div>
                </div>

                <!-- Q3 -->
                <div class="p-3 bg-slate-50 rounded-2xl border space-y-1.5">
                    <p class="font-bold text-slate-900">3. Si deux événements $A$ et $B$ sont incompatibles ($A \\cap B = \\emptyset$), alors $P(A \\cup B) = $ ?</p>
                    <div class="space-y-1 text-slate-700">
                        <label class="flex items-center gap-2"><input type="radio" name="eval-q3" class="accent-red-600"> <span>A) $P(A) \\times P(B)$</span></label>
                        <label class="flex items-center gap-2"><input type="radio" name="eval-q3" class="accent-red-600"> <span>B) $P(A) + P(B)$</span></label>
                        <label class="flex items-center gap-2"><input type="radio" name="eval-q3" class="accent-red-600"> <span>C) $1$</span></label>
                    </div>
                </div>

                <!-- Q4 -->
                <div class="p-3 bg-slate-50 rounded-2xl border space-y-1.5">
                    <p class="font-bold text-slate-900">4. Selon la Loi des Grands Nombres, quand la taille de l'échantillon $N$ devient très grande :</p>
                    <div class="space-y-1 text-slate-700">
                        <label class="flex items-center gap-2"><input type="radio" name="eval-q4" class="accent-red-600"> <span>A) La fréquence observée $f$ varie de plus en plus</span></label>
                        <label class="flex items-center gap-2"><input type="radio" name="eval-q4" class="accent-red-600"> <span>B) La fréquence observée $f$ se rapproche de $p$</span></label>
                        <label class="flex items-center gap-2"><input type="radio" name="eval-q4" class="accent-red-600"> <span>C) La probabilité théorique change</span></label>
                    </div>
                </div>
            </div>

            <!-- CORRIGÉ EX 1 -->
            <div class="no-print pt-2">
                <button onclick="toggleCorrection('corr-ex1')" class="text-xs font-bold text-red-600 hover:text-red-800 flex items-center gap-1.5">
                    <i class="fa-solid fa-chevron-down"></i> Corrigé Exercice 1
                </button>
            </div>
            <div id="corr-ex1" class="hidden pt-3 border-t border-dashed border-red-200 bg-red-50/40 p-4 rounded-2xl text-xs space-y-1 text-slate-800 print-correction">
                <p class="font-bold text-red-900">Corrigé Ex 1 :</p>
                <p>1. B) $0{,}20$ (1 pt) | 2. A) $0{,}85$ (1 pt) | 3. B) $P(A) + P(B)$ (1 pt) | 4. B) $f$ se rapproche de $p$ (1 pt).</p>
            </div>
        </div>

        <!-- ═══════════════════════════════════════════ -->
        <!-- EXERCICE 2 : CONTRÔLE QUALITÉ USINE (5 PTS) -->
        <!-- ═══════════════════════════════════════════ -->
        <div class="bg-white rounded-3xl border border-slate-200 p-6 md:p-8 card-shadow print-card space-y-4">
            <div class="flex items-center justify-between border-b border-slate-100 pb-3">
                <h3 class="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span class="w-7 h-7 bg-red-600 text-white rounded-lg flex items-center justify-center font-bold text-xs">Ex 2</span>
                    Contrôle Qualité Automobile & Tableau à Double Entrée (5 Points)
                </h3>
                <span class="bg-red-100 text-red-800 text-xs font-extrabold px-2.5 py-1 rounded-md">C1, C2, C3 • 5 Points</span>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                <div class="md:col-span-2 text-xs text-slate-700 space-y-3">
                    <p>Dans un centre de contrôle de pièces mécaniques, un lot de <strong>400 capteurs</strong> produits par deux lignes ($L_1$ et $L_2$) donne les résultats suivants :</p>

                    <!-- TABLEAU -->
                    <div class="overflow-x-auto">
                        <table class="w-full text-center border-collapse border border-slate-200 text-xs">
                            <thead>
                                <tr class="bg-slate-900 text-white">
                                    <th class="p-2 text-left">Ligne</th>
                                    <th class="p-2">Conformes ($C$)</th>
                                    <th class="p-2">Défectueux ($D$)</th>
                                    <th class="p-2 bg-slate-800">TOTAL</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-slate-200 bg-slate-50">
                                <tr>
                                    <td class="p-2 text-left font-bold">Ligne 1 ($L_1$)</td>
                                    <td class="p-2 text-emerald-700 font-bold">235</td>
                                    <td class="p-2 text-red-600 font-bold">15</td>
                                    <td class="p-2 font-bold bg-slate-200">250</td>
                                </tr>
                                <tr>
                                    <td class="p-2 text-left font-bold">Ligne 2 ($L_2$)</td>
                                    <td class="p-2 text-emerald-700 font-bold">141</td>
                                    <td class="p-2 text-red-600 font-bold">9</td>
                                    <td class="p-2 font-bold bg-slate-200">150</td>
                                </tr>
                                <tr class="bg-indigo-50 font-bold">
                                    <td class="p-2 text-left text-indigo-900">TOTAL</td>
                                    <td class="p-2 text-indigo-900">376</td>
                                    <td class="p-2 text-indigo-900">24</td>
                                    <td class="p-2 text-indigo-900 bg-indigo-100">400</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <ol class="list-decimal list-inside space-y-1.5 text-slate-800 font-medium">
                        <li><strong>(1 pt)</strong> Calculez la probabilité $P(L_1)$ qu'un capteur vienne de la Ligne 1.</li>
                        <li><strong>(1,5 pt)</strong> Calculez la probabilité $P(L_1 \\cap D)$ que le capteur soit issu de la Ligne 1 ET défectueux.</li>
                        <li><strong>(1,5 pt)</strong> Calculez la probabilité globale de défaut $P(D)$ sur le lot.</li>
                        <li><strong>(1 pt)</strong> En déduire la probabilité $P(C)$ que le capteur soit conforme.</li>
                    </ol>
                </div>
                <!-- SVG EX 2 -->
                <div class="p-3 bg-slate-50 border rounded-2xl text-center overflow-x-auto">
                    <svg width="160" height="110" viewBox="0 0 160 110" class="mx-auto font-sans">
                        <rect width="160" height="110" fill="#f8fafc" rx="8"/>
                        <rect x="20" y="20" width="120" height="70" fill="#ffffff" stroke="#334155" stroke-width="1.5" rx="6"/>
                        <text x="80" y="42" font-size="9" font-weight="bold" fill="#0f172a" text-anchor="middle">Total : 400 pièces</text>
                        <text x="80" y="60" font-size="8" fill="#16a34a" text-anchor="middle">Conformes : 376</text>
                        <text x="80" y="76" font-size="8" fill="#dc2626" text-anchor="middle">Défectueux : 24</text>
                    </svg>
                </div>
            </div>

            <!-- CORRIGÉ EX 2 -->
            <div class="no-print pt-2">
                <button onclick="toggleCorrection('corr-ex2')" class="text-xs font-bold text-red-600 hover:text-red-800 flex items-center gap-1.5">
                    <i class="fa-solid fa-chevron-down"></i> Corrigé Exercice 2
                </button>
            </div>
            <div id="corr-ex2" class="hidden pt-3 border-t border-dashed border-red-200 bg-red-50/40 p-4 rounded-2xl text-xs space-y-1 text-slate-800 print-correction">
                <p class="font-bold text-red-900">Corrigé Ex 2 :</p>
                <p>1. $P(L_1) = \\frac{250}{400} = \\mathbf{0{,}625} = \\mathbf{62{,}5\\%}$. <em>(1 pt)</em></p>
                <p>2. $P(L_1 \\cap D) = \\frac{15}{400} = \\mathbf{0{,}0375} = \\mathbf{3{,}75\\%}$. <em>(1,5 pt)</em></p>
                <p>3. $P(D) = \\frac{24}{400} = \\mathbf{0{,}06} = \\mathbf{6\\%}$. <em>(1,5 pt)</em></p>
                <p>4. $P(C) = 1 - 0{,}06 = \\mathbf{0{,}94} = \\mathbf{94\\%}$. <em>(1 pt)</em></p>
            </div>
        </div>

        <!-- ═══════════════════════════════════════════ -->
        <!-- EXERCICE 3 : ANOMALIES PARC PAR CÂBLES (5 PTS)-->
        <!-- ═══════════════════════════════════════════ -->
        <div class="bg-white rounded-3xl border border-slate-200 p-6 md:p-8 card-shadow print-card space-y-4">
            <div class="flex items-center justify-between border-b border-slate-100 pb-3">
                <h3 class="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span class="w-7 h-7 bg-red-600 text-white rounded-lg flex items-center justify-center font-bold text-xs">Ex 3</span>
                    Sécurité & Parc Logistique : Formule de la Réunion (5 Points)
                </h3>
                <span class="bg-red-100 text-red-800 text-xs font-extrabold px-2.5 py-1 rounded-md">C2, C3, C4 • 5 Points</span>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                <div class="md:col-span-2 text-xs text-slate-700 space-y-3">
                    <p>Un responsable de flotte analyse <strong>500 véhicules utilitaires</strong> :</p>
                    <ul class="list-disc list-inside space-y-1 text-slate-800">
                        <li>Événement $A$ : « Défaut de freinage » ($P(A) = 0{,}12$).</li>
                        <li>Événement $B$ : « Défaut de signalisation » ($P(B) = 0{,}08$).</li>
                        <li>Événement $A \\cap B$ : « Présente les deux défauts » ($P(A \\cap B) = 0{,}02$).</li>
                    </ul>

                    <ol class="list-decimal list-inside space-y-1.5 text-slate-800 font-medium">
                        <li><strong>(2 pts)</strong> Calculez la probabilité $P(A \\cup B)$ qu'un véhicule présente au moins un défaut.</li>
                        <li><strong>(1,5 pt)</strong> Calculez la probabilité qu'un véhicule ne présente AUCUN défaut.</li>
                        <li><strong>(1,5 pt)</strong> Déterminez le nombre exact de véhicules en parfait état dans la flotte.</li>
                    </ol>
                </div>
                <!-- SVG EX 3 -->
                <div class="p-3 bg-slate-50 border rounded-2xl text-center overflow-x-auto">
                    <svg width="160" height="110" viewBox="0 0 160 110" class="mx-auto font-sans">
                        <rect width="160" height="110" fill="#f8fafc" rx="8"/>
                        <circle cx="65" cy="55" r="30" fill="#3b82f6" fill-opacity="0.3" stroke="#2563eb" stroke-width="1.5"/>
                        <circle cx="95" cy="55" r="30" fill="#f59e0b" fill-opacity="0.3" stroke="#d97706" stroke-width="1.5"/>
                        <text x="80" y="58" font-size="8" font-weight="bold" fill="#dc2626" text-anchor="middle">A ∩ B (0,02)</text>
                    </svg>
                </div>
            </div>

            <!-- CORRIGÉ EX 3 -->
            <div class="no-print pt-2">
                <button onclick="toggleCorrection('corr-ex3')" class="text-xs font-bold text-red-600 hover:text-red-800 flex items-center gap-1.5">
                    <i class="fa-solid fa-chevron-down"></i> Corrigé Exercice 3
                </button>
            </div>
            <div id="corr-ex3" class="hidden pt-3 border-t border-dashed border-red-200 bg-red-50/40 p-4 rounded-2xl text-xs space-y-1 text-slate-800 print-correction">
                <p class="font-bold text-red-900">Corrigé Ex 3 :</p>
                <p>1. $P(A \\cup B) = 0{,}12 + 0{,}08 - 0{,}02 = \\mathbf{0{,}18} = \\mathbf{18\\%}$. <em>(2 pts)</em></p>
                <p>2. $P(\\text{Aucun}) = 1 - 0{,}18 = \\mathbf{0{,}82} = \\mathbf{82\\%}$. <em>(1,5 pt)</em></p>
                <p>3. Nombre de véhicules $= 0{,}82 \\times 500 = \\mathbf{410 \\text{ véhicules}}$. <em>(1,5 pt)</em></p>
            </div>
        </div>

        <!-- ═══════════════════════════════════════════ -->
        <!-- EXERCICE 4 : PROBLÈME SITUÉ FLUCTUATION (6 PTS)-->
        <!-- ═══════════════════════════════════════════ -->
        <div class="bg-white rounded-3xl border border-slate-200 p-6 md:p-8 card-shadow print-card space-y-4">
            <div class="flex items-center justify-between border-b border-slate-100 pb-3">
                <h3 class="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span class="w-7 h-7 bg-red-600 text-white rounded-lg flex items-center justify-center font-bold text-xs">Ex 4</span>
                    Problème Situé : Fluctuation d'Échantillonnage en Usinage CNC (6 Points)
                </h3>
                <span class="bg-red-100 text-red-800 text-xs font-extrabold px-2.5 py-1 rounded-md">C1 à C5 • 6 Points</span>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                <div class="md:col-span-2 text-xs text-slate-700 space-y-3">
                    <p>Un atelier d'usinage fabrique des axes de précision en alliage d'aluminium. La probabilité théorique de défaut de cote est $p = 0{,}05$ ($5\\%$). Le technicien qualité teste 3 séries :</p>
                    <ul class="list-disc list-inside space-y-1 text-slate-800">
                        <li>Échantillon 1 : $N_1 = 50$ pièces, 5 défectueuses.</li>
                        <li>Échantillon 2 : $N_2 = 200$ pièces, 14 défectueuses.</li>
                        <li>Échantillon 3 : $N_3 = 1\\,000$ pièces, 51 défectueuses.</li>
                    </ul>

                    <ol class="list-decimal list-inside space-y-1.5 text-slate-800 font-medium">
                        <li><strong>(2 pts)</strong> Calculez les fréquences observées $f_1, f_2, f_3$.</li>
                        <li><strong>(1,5 pt)</strong> Expliquez pourquoi $f_1 = 0{,}10$ s'éloigne de $p = 0{,}05$. <span class="text-indigo-600 font-bold">(C2 - Analyser)</span></li>
                        <li><strong>(1,5 pt)</strong> Justifier pourquoi $f_3 = 0{,}051$ se rapproche très près de $p = 0{,}05$ en citant la loi mathématique correspondante. <span class="text-indigo-600 font-bold">(C4 - Valider)</span></li>
                        <li><strong>(1 pt)</strong> Conclure sur le choix de la taille d'échantillon pour un contrôle qualité fiable. <span class="text-indigo-600 font-bold">(C5 - Communiquer)</span></li>
                    </ol>
                </div>
                <!-- SVG EX 4 -->
                <div class="p-3 bg-slate-50 border rounded-2xl text-center overflow-x-auto">
                    <svg width="160" height="110" viewBox="0 0 160 110" class="mx-auto font-sans">
                        <rect width="160" height="110" fill="#f8fafc" rx="8"/>
                        <line x1="20" y1="55" x2="140" y2="55" stroke="#eab308" stroke-width="2" stroke-dasharray="3,3"/>
                        <text x="80" y="45" font-size="8" font-weight="bold" fill="#ca8a04" text-anchor="middle">p = 0,05</text>
                        <path d="M 20 25 L 60 75 L 140 56" fill="none" stroke="#dc2626" stroke-width="2"/>
                    </svg>
                </div>
            </div>

            <!-- CORRIGÉ EX 4 -->
            <div class="no-print pt-2">
                <button onclick="toggleCorrection('corr-ex4')" class="text-xs font-bold text-red-600 hover:text-red-800 flex items-center gap-1.5">
                    <i class="fa-solid fa-chevron-down"></i> Corrigé Exercice 4
                </button>
            </div>
            <div id="corr-ex4" class="hidden pt-3 border-t border-dashed border-red-200 bg-red-50/40 p-4 rounded-2xl text-xs space-y-1 text-slate-800 print-correction">
                <p class="font-bold text-red-900">Corrigé Ex 4 :</p>
                <p>1. $f_1 = \\frac{5}{50} = \\mathbf{0{,}10} = \\mathbf{10\\%}$. $f_2 = \\frac{14}{200} = \\mathbf{0{,}07} = \\mathbf{7\\%}$. $f_3 = \\frac{51}{1000} = \\mathbf{0{,}051} = \\mathbf{5{,}1\\%}$. <em>(2 pts)</em></p>
                <p>2. L'écart est dû à la <strong>fluctuation d'échantillonnage</strong> sur un faible effectif ($N_1 = 50$). <em>(1,5 pt)</em></p>
                <p>3. Conformément à la <strong>Loi des Grands Nombres</strong>, la fréquence observée $f$ se rapproche de la probabilité théorique $p = 0{,}05$ lorsque la taille $N$ augmente. <em>(1,5 pt)</em></p>
                <p>4. Pour un contrôle qualité fiable, il est nécessaire de choisir des échantillons de grande taille ($N \\ge 500$) afin d'éviter les faux signaux dus aux petites séries. <em>(1 pt)</em></p>
            </div>
        </div>

    </main>

    <!-- SCRIPTS JS POUR L'AFFICHAGE DES CORRECTIONS -->
    <script>
        let allShown = false;

        function toggleCorrection(id) {
            const el = document.getElementById(id);
            if (el) el.classList.toggle('hidden');
        }

        function toggleAllCorrections() {
            allShown = !allShown;
            const ids = ['corr-ex1', 'corr-ex2', 'corr-ex3', 'corr-ex4'];
            ids.forEach(id => {
                const el = document.getElementById(id);
                if (el) {
                    if (allShown) el.classList.remove('hidden');
                    else el.classList.add('hidden');
                }
            });
            const btnText = document.getElementById('toggle-all-text');
            if (btnText) btnText.textContent = allShown ? "Masquer le Barème & Corrigé" : "Voir le Barème & Corrigé";
        }
    </script>
</body>
</html>
`;

fs.writeFileSync(path.join(targetDir, 'eval.html'), evalHtml, 'utf8');
console.log('✅ eval.html pour probabilites-fluctuation généré avec succès !');
