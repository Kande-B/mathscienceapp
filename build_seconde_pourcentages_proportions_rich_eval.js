const fs = require('fs');
const path = require('path');

const targetDir = path.join(__dirname, 'ressources', 'seconde', 'maths', 'pourcentages-proportions');

const evalHtml = `<!DOCTYPE html>
<html lang="fr" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Évaluation Sommative - Pourcentages, Proportions & Évolutions 2nde Pro</title>
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

    <!-- Header & Navigation unifiée pour la Séquence 2nde Pro Maths -->
    <header class="bg-slate-900 text-white sticky top-0 z-50 border-b border-slate-800 shadow-md no-print">
        <div class="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
            <div class="flex items-center gap-3">
                <div class="w-10 h-10 bg-red-500/20 border border-red-400/30 text-red-400 rounded-xl flex items-center justify-center font-bold">
                    <i class="fa-solid fa-graduation-cap text-lg"></i>
                </div>
                <div>
                    <span class="text-xs font-bold tracking-widest uppercase text-red-400">Séquence 2 • Évaluation Officielle</span>
                    <h1 class="text-xl font-bold font-heading">Pourcentages, Proportions & Taux d'Évolution</h1>
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

    <main class="max-w-5xl mx-auto px-4 py-8 space-y-10">

        <!-- EN-TÊTE OFFICIEL EVALUATION BAC PRO AVEC CARTOUCHE ÉLÈVE -->
        <div class="bg-white border border-slate-200 rounded-3xl p-6 md:p-8 shadow-sm border-l-8 border-l-red-600 print-card space-y-4">
            <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-4">
                <div>
                    <div class="flex items-center gap-2 text-xs font-extrabold uppercase text-red-600 tracking-wider">
                        <span>Éducation Nationale</span> • <span>Contrôle en Cours de Formation (CCF)</span>
                    </div>
                    <h2 class="text-3xl font-extrabold text-slate-900 font-heading mt-1">Évaluation Sommative : Pourcentages & Évolutions (20 Points)</h2>
                    <p class="text-xs text-slate-500 mt-1">Calculatrice autorisée • Durée conseillée : 45 min • Compétences évaluées : C1 à C5.</p>
                </div>
                <div class="flex items-center gap-2 no-print">
                    <button onclick="window.print()" class="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl font-bold text-xs flex items-center gap-2 border border-slate-200 transition-colors">
                        <i class="fa-solid fa-print"></i> Imprimer le sujet (PDF)
                    </button>
                    <button onclick="toggleAllCorrections()" class="px-4 py-2.5 bg-red-50 hover:bg-red-100 text-red-700 rounded-xl font-bold text-xs flex items-center gap-2 border border-red-200 transition-colors">
                        <i class="fa-solid fa-key"></i> <span id="toggle-all-text">Voir le Barème & Corrigé</span>
                    </button>
                </div>
            </div>

            <!-- CARTOUCHE NOM / PRENOM / NOTE -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2 font-mono text-xs">
                <div class="p-3 bg-slate-50 border border-slate-200 rounded-2xl">
                    <span class="font-bold text-slate-500 block text-[10px] uppercase">Nom & Prénom de l'Élève :</span>
                    <span class="font-bold text-slate-900">...................................................</span>
                </div>
                <div class="p-3 bg-slate-50 border border-slate-200 rounded-2xl">
                    <span class="font-bold text-slate-500 block text-[10px] uppercase">Classe & Specialité :</span>
                    <span class="font-bold text-slate-900">Seconde Professionnelle ........</span>
                </div>
                <div class="p-3 bg-red-50 border border-red-200 rounded-2xl flex items-center justify-between">
                    <div>
                        <span class="font-bold text-red-600 block text-[10px] uppercase">Note Globale :</span>
                        <span class="text-xl font-extrabold text-red-900">... / 20</span>
                    </div>
                    <i class="fa-solid fa-award text-red-400 text-2xl"></i>
                </div>
            </div>

            <!-- GRILLE ÉVALUATION DES COMPÉTENCES -->
            <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 text-[11px] font-bold pt-2">
                <div class="p-2 bg-amber-50 border border-amber-200 rounded-xl text-center"><span class="text-amber-800 block">C1 - S'approprier</span> / 4 pts</div>
                <div class="p-2 bg-blue-50 border border-blue-200 rounded-xl text-center"><span class="text-blue-800 block">C2 - Analyser</span> / 4 pts</div>
                <div class="p-2 bg-emerald-50 border border-emerald-200 rounded-xl text-center"><span class="text-emerald-800 block">C3 - Réaliser</span> / 5 pts</div>
                <div class="p-2 bg-purple-50 border border-purple-200 rounded-xl text-center"><span class="text-purple-800 block">C4 - Valider</span> / 4 pts</div>
                <div class="p-2 bg-rose-50 border border-rose-200 rounded-xl text-center"><span class="text-rose-800 block">C5 - Communiquer</span> / 3 pts</div>
            </div>
        </div>

        <!-- EXERCICE 1 : AUTOMATISMES & CONVERSIONS RAPIDES (4 POINTS) -->
        <div class="bg-white rounded-3xl border border-slate-200 p-6 md:p-8 card-shadow print-card space-y-4">
            <div class="flex items-center justify-between border-b border-slate-100 pb-3">
                <h3 class="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span class="w-8 h-8 bg-red-100 text-red-800 rounded-xl flex items-center justify-center font-bold text-xs">Ex 1</span>
                    Automatismes & Direct-Calcul (4 Points)
                </h3>
                <span class="bg-slate-100 text-slate-800 text-xs font-extrabold px-3 py-1 rounded-full">4 Points</span>
            </div>

            <div class="text-xs text-slate-700 space-y-3 leading-relaxed">
                <p class="font-bold text-slate-900">Répondre aux questions suivantes ou cocher la bonne réponse :</p>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div class="p-3 bg-slate-50 border rounded-2xl space-y-1">
                        <p><strong>1. (1 pt)</strong> Quel est le $CM$ associé à une remise de $15\\%$ ?</p>
                        <p class="font-mono text-slate-600">A. 0,15 | B. 0,85 | C. 1,15 | D. -15</p>
                    </div>
                    <div class="p-3 bg-slate-50 border rounded-2xl space-y-1">
                        <p><strong>2. (1 pt)</strong> Si $48$ élèves sur $120$ ont un diplôme, quelle est la proportion $p$ ?</p>
                        <p class="font-mono text-slate-600">A. 0,40 (40%) | B. 2,5 | C. 48% | D. 0,25</p>
                    </div>
                    <div class="p-3 bg-slate-50 border rounded-2xl space-y-1">
                        <p><strong>3. (1 pt)</strong> Une hausse de $+20\\%$ suivie d'une baisse de $-20\\%$ donne un $CM_{\\text{global}}$ de :</p>
                        <p class="font-mono text-slate-600">A. 1,00 | B. 0,96 | C. 0,80 | D. 1,04</p>
                    </div>
                    <div class="p-3 bg-slate-50 border rounded-2xl space-y-1">
                        <p><strong>4. (1 pt)</strong> Un $CM$ égal à $1{,}35$ correspond à :</p>
                        <p class="font-mono text-slate-600">A. Baisse de 35% | B. Hausse de 35% | C. Hausse de 135%</p>
                    </div>
                </div>
            </div>

            <details class="bg-slate-50 border border-slate-200 rounded-2xl p-4 text-xs print-correction">
                <summary class="font-bold text-slate-900 cursor-pointer hover:text-red-600 transition flex items-center gap-2">
                    <i class="fa-solid fa-circle-check text-emerald-500"></i> Correction de l'Exercice 1
                </summary>
                <div class="mt-3 pt-3 border-t border-slate-200 space-y-1 font-mono text-slate-700">
                    <p>1. B. $CM = 1 - 0{,}15 = \\mathbf{0{,}85}$. (1 pt)</p>
                    <p>2. A. $p = \\frac{48}{120} = \\mathbf{0{,}40 = 40\\%}$. (1 pt)</p>
                    <p>3. B. $1{,}20 \\times 0{,}80 = \\mathbf{0{,}96}$ (baisse de $-4\\%$). (1 pt)</p>
                    <p>4. B. **Hausse de 35%** ($1 + 0{,}35 = 1{,}35$). (1 pt)</p>
                </div>
            </details>
        </div>

        <!-- EXERCICE 2 : PROPORTIONS ÉTAGÉES EN ENTREPRISE (5 POINTS) -->
        <div class="bg-white rounded-3xl border border-slate-200 p-6 md:p-8 card-shadow print-card space-y-4">
            <div class="flex items-center justify-between border-b border-slate-100 pb-3">
                <h3 class="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span class="w-8 h-8 bg-red-100 text-red-800 rounded-xl flex items-center justify-center font-bold text-xs">Ex 2</span>
                    Gestion : Proportions Étagées dans une Entreprise (5 Points)
                </h3>
                <span class="bg-slate-100 text-slate-800 text-xs font-extrabold px-3 py-1 rounded-full">5 Points</span>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                <div class="md:col-span-2 text-xs text-slate-700 space-y-3 leading-relaxed">
                    <p>Une entreprise de services numériques emploie une population totale de $N = 350$ salariés. $60\\%$ des salariés travaillent dans le pôle maintenance informatique ($p_1 = 0{,}60$). Parmi ces techniciens de maintenance, $35\\%$ sont des femmes ($p_2 = 0{,}35$).</p>

                    <div class="space-y-1.5 font-bold text-slate-900">
                        <p>1. (C1 - 1 pt) Donner la taille $N$ de l'entreprise et les proportions $p_1$ et $p_2$.</p>
                        <p>2. (C2 - 2 pts) Calculer la proportion globale $p$ de femmes techniciennes de maintenance dans l'entreprise.</p>
                        <p>3. (C3 - 2 pts) Calculer le nombre effectif de femmes techniciennes de maintenance dans l'entreprise.</p>
                    </div>
                </div>

                <!-- FIGURE SVG EX 2 -->
                <div class="p-3 bg-slate-50 border border-slate-200 rounded-2xl text-center overflow-x-auto">
                    <svg width="220" height="110" viewBox="0 0 220 110" class="mx-auto font-sans">
                        <rect x="10" y="10" width="200" height="90" fill="#1e293b" rx="8"/>
                        <rect x="25" y="25" width="140" height="60" fill="#0284c7" fill-opacity="0.4" stroke="#38bdf8" rx="6"/>
                        <rect x="40" y="40" width="90" height="35" fill="#ec4899" rx="4"/>
                        <text x="85" y="62" font-size="9" font-weight="bold" fill="#ffffff" text-anchor="middle">Femmes Tech = ?</text>
                    </svg>
                </div>
            </div>

            <details class="bg-slate-50 border border-slate-200 rounded-2xl p-4 text-xs print-correction">
                <summary class="font-bold text-slate-900 cursor-pointer hover:text-red-600 transition flex items-center gap-2">
                    <i class="fa-solid fa-circle-check text-emerald-500"></i> Correction de l'Exercice 2
                </summary>
                <div class="mt-3 pt-3 border-t border-slate-200 space-y-1 font-mono text-slate-700">
                    <p>1. <strong>(C1) :</strong> $N = 350$ salariés, $p_1 = 0{,}60$ (techniciens), $p_2 = 0{,}35$ (femmes). (1 pt)</p>
                    <p>2. <strong>(C2) :</strong> $p = p_1 \\times p_2 = 0{,}60 \\times 0{,}35 = \\mathbf{0{,}21}$ (soit **21%** de l'entreprise). (2 pts)</p>
                    <p>3. <strong>(C3) :</strong> Effectif $= 350 \\times 0{,}21 = \\mathbf{73{,}5} \\implies \\mathbf{73\\text{ ou } 74\\text{ femmes}}$. (2 pts)</p>
                </div>
            </details>
        </div>

        <!-- EXERCICE 3 : REMISE & TAXE SUR ÉQUIPEMENT (5 POINTS) -->
        <div class="bg-white rounded-3xl border border-slate-200 p-6 md:p-8 card-shadow print-card space-y-4">
            <div class="flex items-center justify-between border-b border-slate-100 pb-3">
                <h3 class="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span class="w-8 h-8 bg-red-100 text-red-800 rounded-xl flex items-center justify-center font-bold text-xs">Ex 3</span>
                    Commerce & Industrie : Remise & Éco-Taxe (5 Points)
                </h3>
                <span class="bg-slate-100 text-slate-800 text-xs font-extrabold px-3 py-1 rounded-full">5 Points</span>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                <div class="md:col-span-2 text-xs text-slate-700 space-y-3 leading-relaxed">
                    <p>Un outillage industriel est affiché au tarif catalogue HT de $V_0 = 1\\,250{,}00\\text{ €}$. Le fournisseur accorde une remise pro de $-12\\%$. Ensuite, une taxe de recyclage de $+5\\%$ s'applique sur le tarif remisé.</p>

                    <div class="space-y-1.5 font-bold text-slate-900">
                        <p>1. (C2 - 2 pts) Calculer le prix après remise $V_1$ et donner le $CM_1$ de la remise.</p>
                        <p>2. (C3 - 2 pts) Calculer le prix final après éco-taxe $V_2$ et déduire le $CM_{\\text{global}}$.</p>
                        <p>3. (C4 - 1 pt) Déterminer le pourcentage de variation net net par rapport aux $1\\,250\\text{ €}$ initiaux.</p>
                    </div>
                </div>

                <!-- FIGURE SVG EX 3 -->
                <div class="p-3 bg-slate-50 border border-slate-200 rounded-2xl text-center overflow-x-auto">
                    <svg width="220" height="110" viewBox="0 0 220 110" class="mx-auto font-sans">
                        <rect x="10" y="35" width="60" height="40" fill="#ffffff" stroke="#0284c7" stroke-width="2" rx="6"/>
                        <text x="40" y="58" font-size="8" font-weight="bold" fill="#0f172a" text-anchor="middle">1 250 €</text>
                        <line x1="75" y1="55" x2="95" y2="55" stroke="#f59e0b" stroke-width="2"/>
                        <text x="85" y="45" font-size="8" font-weight="bold" fill="#f59e0b" text-anchor="middle">-12%</text>
                        <rect x="100" y="35" width="55" height="40" fill="#ffffff" stroke="#f59e0b" stroke-width="2" rx="6"/>
                        <text x="127" y="58" font-size="8" font-weight="bold" fill="#0f172a" text-anchor="middle">1 100 €</text>
                        <line x1="160" y1="55" x2="180" y2="55" stroke="#10b981" stroke-width="2"/>
                        <text x="170" y="45" font-size="8" font-weight="bold" fill="#10b981" text-anchor="middle">+5%</text>
                        <rect x="185" y="35" width="30" height="40" fill="#10b981" rx="4"/>
                        <text x="200" y="58" font-size="9" font-weight="bold" fill="#ffffff" text-anchor="middle">V2=?</text>
                    </svg>
                </div>
            </div>

            <details class="bg-slate-50 border border-slate-200 rounded-2xl p-4 text-xs print-correction">
                <summary class="font-bold text-slate-900 cursor-pointer hover:text-red-600 transition flex items-center gap-2">
                    <i class="fa-solid fa-circle-check text-emerald-500"></i> Correction de l'Exercice 3
                </summary>
                <div class="mt-3 pt-3 border-t border-slate-200 space-y-1 font-mono text-slate-700">
                    <p>1. <strong>(C2) :</strong> $CM_1 = 1 - 0{,}12 = 0{,}88 \\implies V_1 = 1\\,250 \\times 0{,}88 = \\mathbf{1\\,100{,}00\\text{ €}}$. (2 pts)</p>
                    <p>2. <strong>(C3) :</strong> $CM_2 = 1 + 0{,}05 = 1{,}05 \\implies V_2 = 1\\,100 \\times 1{,}05 = \\mathbf{1\\,155{,}00\\text{ €}}$.<br>
                    • $CM_{\\text{global}} = 0{,}88 \\times 1{,}05 = \\mathbf{0{,}924}$. (2 pts)</p>
                    <p>3. <strong>(C4) :</strong> Taux net : $(0{,}924 - 1) \\times 100 = \\mathbf{-7{,}6\\%}$ de baisse globale. (1 pt)</p>
                </div>
            </details>
        </div>

        <!-- EXERCICE 4 : PROBLÈME SITUÉ - ÉNERGIE & TAUX RÉCIPROQUE (6 POINTS) -->
        <div class="bg-slate-900 text-white rounded-3xl p-6 md:p-8 card-shadow space-y-6 border border-slate-800">
            <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-4">
                <div>
                    <span class="bg-red-500 text-white font-extrabold text-[10px] px-3 py-1 rounded-full uppercase tracking-wider">Problème Situé • Énergie & Taux Réciproque</span>
                    <h4 class="text-2xl font-bold font-heading text-white mt-1">Audit Énergétique d'un Atelier PME (6 Points)</h4>
                </div>
                <span class="bg-red-500 text-white font-extrabold text-xs px-3.5 py-1.5 rounded-full uppercase tracking-wider">6 Points</span>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-slate-300 leading-relaxed">
                <div class="md:col-span-2 space-y-4">
                    <p>La consommation électrique d'un atelier s'élevait à $F_0 = 24\\,000\\text{ kWh}$ l'an dernier.</p>

                    <div class="bg-slate-800 p-4 rounded-2xl border border-slate-700 space-y-2 text-slate-200">
                        <h5 class="font-bold text-amber-400">📋 Évolutions de Consommation :</h5>
                        <ul class="list-disc list-inside space-y-1">
                            <li>Année 1 : Augmentation de la consommation de $+15\\%$ ($CM_1 = 1{,}15$) suite à l'extension du parc machines.</li>
                            <li>Année 2 : Installation d'équipements basse consommation et relampage LED réduisant la consommation de $-20\\%$ ($CM_2 = 0{,}80$).</li>
                        </ul>
                    </div>

                    <div class="space-y-2 text-slate-200">
                        <h5 class="font-bold text-amber-300">Travail à Réaliser par l'Élève :</h5>
                        <p><strong>1. (C1/C2 - 2 pts) :</strong> Calculer le $CM_{\\text{global}}$ et la consommation finale $F_2$ à la fin de l'Année 2.</p>
                        <p><strong>2. (C3/C4 - 2 pts) :</strong> Déterminer le pourcentage de variation net sur les 2 ans. L'objectif d'économie par rapport aux $24\\,000\\text{ kWh}$ initiaux est-il atteint ?</p>
                        <p><strong>3. (C5 - 2 pts) :</strong> Calculer le coefficient multiplicateur réciproque $CM'$ nécessaire pour revenir exactement à la consommation initiale $F_0$. Rédiger la conclusion pour le gérant.</p>
                    </div>
                </div>

                <!-- FIGURE SVG EX 4 -->
                <div class="bg-slate-950 p-4 rounded-2xl border border-slate-800 flex flex-col justify-center items-center text-center">
                    <svg width="220" height="150" viewBox="0 0 220 150" class="mx-auto font-sans">
                        <polyline points="20,90 100,30 200,100" fill="none" stroke="#f59e0b" stroke-width="3"/>
                        <circle cx="20" cy="90" r="4" fill="#38bdf8"/>
                        <circle cx="200" cy="100" r="4" fill="#10b981"/>
                        <text x="30" y="115" font-size="9" fill="#94a3b8">24k kWh</text>
                        <text x="170" y="120" font-size="9" fill="#10b981" font-weight="bold">F2 = ?</text>
                    </svg>
                </div>
            </div>

            <details class="bg-slate-800 border border-slate-700 rounded-2xl p-5 text-xs text-slate-200">
                <summary class="font-bold text-amber-400 cursor-pointer hover:text-amber-300 transition flex items-center gap-2">
                    <i class="fa-solid fa-graduation-cap text-amber-400"></i> Corrigé Détaillé du Problème Situé (6 Points)
                </summary>
                <div class="mt-4 pt-4 border-t border-slate-700 space-y-3 font-mono">
                    <p><strong class="text-amber-300">1. (C1/C2) :</strong><br>
                    • $CM_{\\text{global}} = 1{,}15 \\times 0{,}80 = \\mathbf{0{,}92}$.<br>
                    • Consommation finale $F_2 = 24\\,000 \\times 0{,}92 = \\mathbf{22\\,080\\text{ kWh}}$. (2 pts)</p>
                    <p><strong class="text-emerald-300">2. (C3/C4) :</strong><br>
                    • Taux net : $(0{,}92 - 1) \\times 100 = \\mathbf{-8\\%}$ de consommation en moins.<br>
                    • Validation : La PME a diminué sa consommation de $1\\,920\\text{ kWh}$ par rapport au départ. **Objectif atteint**. (2 pts)</p>
                    <p><strong class="text-rose-300">3. (C5) :</strong><br>
                    • $CM' = \\frac{1}{0{,}92} \\approx \\mathbf{1{,}086956}$.<br>
                    • Taux réciproque : $+8{,}70\\%$.<br>
                    • *Rapport* : "Grâce au relampage LED, la consommation baisse à 22 080 kWh (-8% net sur 2 ans). Pour réaugmenter la consommation jusqu'au seuil initial de 24 000 kWh, il faudrait une hausse de +8,70%." (2 pts)</p>
                </div>
            </details>
        </div>

    </main>

    <!-- JS POUR BASCULER LES CORRECTIONS -->
    <script>
        function toggleAllCorrections() {
            const list = document.querySelectorAll('.print-correction');
            const btnText = document.getElementById('toggle-all-text');
            let isHidden = list[0].hasAttribute('open');

            list.forEach(el => {
                if (isHidden) el.removeAttribute('open');
                else el.setAttribute('open', 'true');
            });

            if (isHidden) {
                btnText.innerText = "Voir le Barème & Corrigé";
            } else {
                btnText.innerText = "Masquer le Barème & Corrigé";
            }
        }
    </script>
</body>
</html>`;

fs.writeFileSync(path.join(targetDir, 'eval.html'), evalHtml, 'utf-8');
console.log('Successfully updated eval.html for pourcentages-proportions with official 20-point CCF subject and solution accordions!');
