const fs = require('fs');
const path = require('path');

const targetDir = path.join(__dirname, 'ressources', 'seconde', 'maths', 'pourcentages-proportions');

const activitesHtml = `<!DOCTYPE html>
<html lang="fr" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Activités d'Investigation & Découverte - Pourcentages & Proportions 2nde Pro</title>
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
                    <i class="fa-solid fa-percent text-lg"></i>
                </div>
                <div>
                    <span class="text-xs font-bold tracking-widest uppercase text-indigo-400">Séquence 2 • Seconde Professionnelle Mathématiques</span>
                    <h1 class="text-xl font-bold font-heading">Pourcentages, Proportions & Taux d'Évolution</h1>
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

        <!-- PRESENTATION DE LA SÉQUENCE -->
        <div class="bg-slate-900 text-white p-6 md:p-8 rounded-3xl shadow-xl border border-slate-800 space-y-4">
            <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div>
                    <div class="flex items-center gap-2 mb-2">
                        <span class="bg-indigo-500 text-slate-950 text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">Mises en Situation & Découverte Guidée</span>
                        <span class="bg-slate-800 text-slate-300 text-xs font-semibold px-3 py-1 rounded-full border border-slate-700">Seconde Pro</span>
                    </div>
                    <h2 class="text-3xl font-extrabold font-heading text-white">Activités : Coefficients Multiplicateurs & Proportions</h2>
                    <p class="text-sm text-slate-300 max-w-2xl">Découvrez comment simplifier les calculs de réductions, hausses successives et proportions d'ensembles dans vos secteurs professionnels !</p>
                </div>
            </div>
        </div>

        <!-- MODULE 0 : DIAGNOSTIC NUMÉRIQUE & PRÉREQUIS (FLASH QUIZ) -->
        <section class="bg-white p-6 md:p-8 rounded-3xl border border-slate-200 card-shadow space-y-6">
            <div class="flex items-center justify-between border-b border-slate-100 pb-4">
                <div class="flex items-center gap-3">
                    <span class="w-10 h-10 bg-indigo-100 text-indigo-800 rounded-xl flex items-center justify-center font-bold text-lg">0</span>
                    <div>
                        <span class="text-xs font-bold text-indigo-600 uppercase tracking-wider">Module 0 • Test de Positionnement</span>
                        <h3 class="text-xl font-bold font-heading text-slate-900">Calculs de Base & Mental des Pourcentages</h3>
                    </div>
                </div>
                <span class="text-xs font-bold text-slate-400">Diagnostic 2 min</span>
            </div>

            <p class="text-xs text-slate-700 leading-relaxed">
                Avant de démarrer les activités d'investigation, vérifiez vos automatismes sur les pourcentages simples et coefficients :
            </p>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
                <!-- Q1 -->
                <div class="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
                    <label class="font-bold text-slate-900 block">1. Calculez 15% de 240 € :</label>
                    <input type="number" id="diag-q1" class="w-full p-2.5 border border-slate-300 rounded-xl font-bold bg-white" placeholder="Résultat en €">
                </div>

                <!-- Q2 -->
                <div class="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
                    <label class="font-bold text-slate-900 block">2. Convertir la fraction 18/25 en pourcentage :</label>
                    <input type="number" id="diag-q2" class="w-full p-2.5 border border-slate-300 rounded-xl font-bold bg-white" placeholder="Résultat en %">
                </div>

                <!-- Q3 -->
                <div class="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
                    <label class="font-bold text-slate-900 block">3. Que signifie un Coefficient Multiplicateur CM = 1,18 ?</label>
                    <select id="diag-q3" class="w-full p-2.5 border border-slate-300 rounded-xl font-bold bg-white">
                        <option value="">Sélectionnez...</option>
                        <option value="HAUSSE">Une augmentation de 18%</option>
                        <option value="BAISSE">Une baisse de 18%</option>
                        <option value="PRIX">Un prix de 1,18 €</option>
                    </select>
                </div>
            </div>

            <div class="flex items-center justify-between pt-2">
                <button onclick="checkDiag()" class="bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs px-6 py-3 rounded-xl shadow-md transition flex items-center gap-2">
                    <i class="fa-solid fa-circle-check"></i> Vérifier mes prérequis
                </button>
                <span id="diag-res" class="text-xs font-bold font-mono"></span>
            </div>
        </section>

        <!-- ACTIVITÉ 1 : COMMERCE & FACTURATION (CHAÎNE DE PRIX & CM) -->
        <section class="bg-white p-6 md:p-8 rounded-3xl border border-slate-200 card-shadow space-y-6">
            <div class="flex items-center gap-3 border-b border-slate-100 pb-4">
                <span class="w-10 h-10 bg-indigo-100 text-indigo-800 rounded-xl flex items-center justify-center font-bold text-lg">1</span>
                <div>
                    <span class="text-xs font-bold text-indigo-600 uppercase tracking-wider">Activité 1 • Domaine Commerce & Facturation (Investigation)</span>
                    <h3 class="text-xl font-bold font-heading text-slate-900">La Chaîne des Prix : Du Prix HT au Prix TTC avec Remise</h3>
                </div>
            </div>

            <div class="space-y-4 text-xs text-slate-700 leading-relaxed">
                <p>Un fournisseur d'outillage industriel propose un poste à souder au prix catalogue de 450 € HT. Il accorde une remise commerciale de 10%, puis applique la TVA réglementaire de 20%.</p>

                <!-- SCHEMA VECTORIEL SVG PROCESSUS CHAINE DE PRIX -->
                <div class="p-4 bg-slate-900 text-white rounded-2xl border border-slate-800 text-center overflow-x-auto">
                    <svg width="480" height="110" viewBox="0 0 480 110" class="mx-auto font-sans">
                        <!-- Prix HT 450€ -->
                        <rect x="20" y="35" width="100" height="40" fill="#1e293b" stroke="#38bdf8" stroke-width="2" rx="8"/>
                        <text x="70" y="58" font-size="10" font-weight="bold" fill="#38bdf8" text-anchor="middle">450 € HT</text>

                        <!-- Flèche 1 (-10% / CM1 = 0,90) -->
                        <line x1="125" y1="55" x2="175" y2="55" stroke="#f59e0b" stroke-width="2"/>
                        <polygon points="175,50 185,55 175,60" fill="#f59e0b"/>
                        <text x="155" y="42" font-size="9" font-weight="bold" fill="#f59e0b" text-anchor="middle">-10%</text>
                        <text x="155" y="72" font-size="8" fill="#94a3b8" text-anchor="middle">CM1 = 0,90</text>

                        <!-- Prix Remisé 405€ -->
                        <rect x="190" y="35" width="100" height="40" fill="#1e293b" stroke="#f59e0b" stroke-width="2" rx="8"/>
                        <text x="240" y="58" font-size="10" font-weight="bold" fill="#f59e0b" text-anchor="middle">405 € Remisé</text>

                        <!-- Flèche 2 (+20% TVA / CM2 = 1,20) -->
                        <line x1="295" y1="55" x2="345" y2="55" stroke="#10b981" stroke-width="2"/>
                        <polygon points="345,50 355,55 345,60" fill="#10b981"/>
                        <text x="325" y="42" font-size="9" font-weight="bold" fill="#10b981" text-anchor="middle">+20% TVA</text>
                        <text x="325" y="72" font-size="8" fill="#94a3b8" text-anchor="middle">CM2 = 1,20</text>

                        <!-- Prix TTC Final -->
                        <rect x="360" y="35" width="100" height="40" fill="#1e293b" stroke="#10b981" stroke-width="2" rx="8"/>
                        <text x="410" y="58" font-size="10" font-weight="bold" fill="#10b981" text-anchor="middle">486 € TTC</text>
                    </svg>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                    <div class="p-4 bg-indigo-50 border-l-4 border-indigo-500 rounded-r-2xl space-y-2">
                        <h4 class="font-bold text-indigo-950 text-sm">Méthode 1 : Calculs Étape par Étape</h4>
                        <p>1. Montant de la remise : $450 \\times \\frac{10}{100} = 45\\text{ €}$.</p>
                        <p>2. Prix après remise : $450 - 45 = \\mathbf{405\\text{ €}}$.</p>
                        <p>3. Montant de la TVA (20%) : $405 \\times 0{,}20 = 81\\text{ €}$.</p>
                        <p>4. Prix final TTC : $405 + 81 = \\mathbf{486\\text{ €}}$.</p>
                    </div>

                    <div class="p-4 bg-emerald-50 border-l-4 border-emerald-500 rounded-r-2xl space-y-2">
                        <h4 class="font-bold text-emerald-950 text-sm">Méthode 2 : Découverte du CM Global !</h4>
                        <p>Au lieu de faire 4 calculs, on multiplie directement par les coefficients :</p>
                        <p>• $CM_1 = 1 - 0{,}10 = \\mathbf{0{,}90}$.</p>
                        <p>• $CM_2 = 1 + 0{,}20 = \\mathbf{1{,}20}$.</p>
                        <p>• **$CM_{\\text{global}} = 0{,}90 \\times 1{,}20 = \\mathbf{1{,}08}$** (soit +8% global !).</p>
                        <p class="font-bold text-emerald-900">• Prix TTC direct : $450 \\times 1{,}08 = \\mathbf{486\\text{ €}}$ !</p>
                    </div>
                </div>

                <!-- TEST INTERACTIF DE VALIDATION -->
                <div class="p-4 bg-slate-50 border border-slate-200 rounded-2xl space-y-3">
                    <span class="font-bold text-slate-900 block">Application immédiate (À vous de jouer) :</span>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label class="font-semibold block mb-1">Pour un article de 200 € avec une hausse de 30% puis une remise de 30% :</label>
                            <input type="number" id="act1-q1" class="w-full p-2.5 border rounded-xl font-bold bg-white" placeholder="Quel est le CM global ? (ex: 0.91)">
                        </div>
                        <div>
                            <label class="font-semibold block mb-1">Quel est le prix final obtenu ? (€)</label>
                            <input type="number" id="act1-q2" class="w-full p-2.5 border rounded-xl font-bold bg-white" placeholder="Prix final en €">
                        </div>
                    </div>
                    <button onclick="checkAct1()" class="bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs px-5 py-2.5 rounded-xl shadow transition">
                        Valider mon calcul
                    </button>
                    <span id="act1-res" class="text-xs font-bold font-mono ml-3"></span>
                </div>
            </div>
        </section>

        <!-- ACTIVITÉ 2 : QUALITÉ & AGRONOMIE (PROPORTIONS DE PROPORTIONS) -->
        <section class="bg-white p-6 md:p-8 rounded-3xl border border-slate-200 card-shadow space-y-6">
            <div class="flex items-center gap-3 border-b border-slate-100 pb-4">
                <span class="w-10 h-10 bg-sky-100 text-sky-800 rounded-xl flex items-center justify-center font-bold text-lg">2</span>
                <div>
                    <span class="text-xs font-bold text-sky-600 uppercase tracking-wider">Activité 2 • Qualité & Agronomie (Proportions Étagées)</span>
                    <h3 class="text-xl font-bold font-heading text-slate-900">Proportions d'Ensembles & Sous-Populations ($p = p_1 \\times p_2$)</h3>
                </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-slate-700 leading-relaxed items-center">
                <div class="md:col-span-2 space-y-3">
                    <p>Un laboratoire d'analyse contrôle $N = 1\\,200$ lots de semences agricoles :</p>
                    <ul class="list-disc list-inside space-y-1 font-semibold text-slate-900">
                        <li>$40\%$ des lots sont issus de l'agriculture Biologique (Ensemble A).</li>
                        <li>Parmi ces lots Bio, $75\%$ sont certifiés Label Qualité Supérieure (Ensemble B).</li>
                    </ul>

                    <div class="p-4 bg-sky-50 border-l-4 border-sky-500 rounded-r-2xl space-y-2">
                        <h4 class="font-bold text-sky-950 text-sm">Formule de la Proportion Étagée :</h4>
                        <p>La proportion globale $p$ de lots Bio Qualité Supérieure par rapport à l'ENSEMBLE TOTAL est le produit des deux proportions :</p>
                        <p class="font-mono text-sky-900 font-bold">$$p = p_1 \\times p_2 = 0{,}40 \\times 0{,}75 = \\mathbf{0{,}30} \\quad (\\text{soit } 30\\%)$$</p>
                        <p>Nombre effectif de lots : $1\\,200 \\times 0{,}30 = \\mathbf{360\\text{ lots}}$.</p>
                    </div>
                </div>

                <!-- FIGURE SVG SCHÉMA D'INCLUSION DES ENSEMBLES -->
                <div class="p-4 bg-slate-900 text-white rounded-2xl border border-slate-800 text-center">
                    <svg width="200" height="140" viewBox="0 0 200 140" class="mx-auto">
                        <!-- Total E = 1200 -->
                        <rect x="10" y="10" width="180" height="120" fill="#1e293b" stroke="#64748b" stroke-width="2" rx="10"/>
                        <text x="20" y="28" font-size="9" fill="#94a3b8" font-weight="bold">Total E = 1 200</text>

                        <!-- Ensemble A (Bio 40%) -->
                        <rect x="25" y="38" width="140" height="82" fill="#0284c7" fill-opacity="0.3" stroke="#38bdf8" stroke-width="2" rx="8"/>
                        <text x="35" y="52" font-size="9" fill="#38bdf8" font-weight="bold">Bio A (40%)</text>

                        <!-- Ensemble B (Qualité 75% de A) -->
                        <rect x="40" y="60" width="110" height="50" fill="#10b981" fill-opacity="0.5" stroke="#34d399" stroke-width="2" rx="6"/>
                        <text x="50" y="80" font-size="9" fill="#ffffff" font-weight="bold">Qualité B (30% total)</text>
                        <text x="50" y="96" font-size="10" fill="#f59e0b" font-weight="bold">360 lots</text>
                    </svg>
                </div>
            </div>
        </section>

        <!-- ACTIVITÉ 3 : ÉCONOMIE & SOLDES (LE PIÈGE DES EVOLUTIONS RECIPIROQUES) -->
        <section class="bg-white p-6 md:p-8 rounded-3xl border border-slate-200 card-shadow space-y-6">
            <div class="flex items-center gap-3 border-b border-slate-100 pb-4">
                <span class="w-10 h-10 bg-purple-100 text-purple-800 rounded-xl flex items-center justify-center font-bold text-lg">3</span>
                <div>
                    <span class="text-xs font-bold text-purple-600 uppercase tracking-wider">Activité 3 • Analyse Économique & Ventes</span>
                    <h3 class="text-xl font-bold font-heading text-slate-900">Le Piège des Évolutions : Taux Réciproque et Hausse/Baisse</h3>
                </div>
            </div>

            <div class="space-y-4 text-xs text-slate-700 leading-relaxed">
                <p>Un commerçant pense qu'après avoir augmenté ses prix de 20%, il suffit d'accorder une remise de 20% pour revenir au prix d'origine. **A-t-il raison ?**</p>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div class="p-5 bg-rose-50 border-l-4 border-rose-500 rounded-r-2xl space-y-2">
                        <h4 class="font-bold text-rose-950 text-sm">❌ Idée Reçue Démasquée !</h4>
                        <p>Prenons un article valant 100 € :</p>
                        <p>1. Hausse de $+20\\%$ : $100 \\times 1{,}20 = \\mathbf{120\\text{ €}}$.</p>
                        <p>2. Baisse de $-20\\%$ : $120 \\times 0{,}80 = \\mathbf{96\\text{ €}}$ ! (Perte de 4 €).</p>
                        <p class="font-bold text-rose-900">• $CM_{\\text{global}} = 1{,}20 \\times 0{,}80 = \\mathbf{0{,}96} \\implies$ Baisse globale de **$-4\\%$**.</p>
                    </div>

                    <div class="p-5 bg-purple-50 border-l-4 border-purple-500 rounded-r-2xl space-y-2">
                        <h4 class="font-bold text-purple-950 text-sm">✔ Calcul du Vrai Taux Réciproque !</h4>
                        <p>Pour annuler une hausse de $+20\\%$ ($CM = 1{,}20$), le coefficient réciproque vaut :</p>
                        <p class="font-mono text-purple-900 font-bold">$$CM' = \\frac{1}{CM} = \\frac{1}{1{,}20} \\approx \\mathbf{0{,}8333}$$</p>
                        <p>Le taux de baisse nécessaire est donc :</p>
                        <p class="font-bold text-purple-950">• $t' = (0{,}8333 - 1) \\times 100 = \\mathbf{-16{,}67\\%}$ !</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- MODULE 4 : TRANSITION VERS LE COURS -->
        <div class="bg-slate-900 text-white p-6 md:p-8 rounded-3xl shadow-xl border border-slate-800 space-y-4 text-center">
            <h3 class="text-2xl font-bold font-heading text-indigo-400">Prêt pour le Cours !</h3>
            <p class="text-xs text-slate-300 max-w-xl mx-auto">
                Vous avez compris comment manipuler les Coefficients Multiplicateurs, les évolutions successives et les proportions d'ensembles. Retrouvez les formules synthétiques dans le cours.
            </p>
            <a href="cours.html" class="inline-flex items-center gap-2 bg-indigo-500 hover:bg-indigo-400 text-white font-extrabold text-xs px-6 py-3 rounded-xl shadow-md transition">
                <i class="fa-solid fa-book-open"></i> Accéder à la Fiche de Cours
            </a>
        </div>

    </main>

    <!-- JS POUR DIAGNOSTIC ET INTERACTION -->
    <script>
        function checkDiag() {
            const q1 = document.getElementById('diag-q1').value.trim();
            const q2 = document.getElementById('diag-q2').value.trim();
            const q3 = document.getElementById('diag-q3').value;
            const res = document.getElementById('diag-res');

            if (q1 === '36' && q2 === '72' && q3 === 'HAUSSE') {
                res.className = 'text-xs font-bold font-mono text-emerald-400';
                res.innerText = '✔ Excellent ! 3/3 prérequis validés.';
            } else {
                res.className = 'text-xs font-bold font-mono text-rose-400';
                res.innerText = '✖ Erreur : 1) 15% de 240 = 36 €, 2) 18/25 = 72%, 3) CM = 1,18 = +18% de hausse.';
            }
        }

        function checkAct1() {
            const q1 = document.getElementById('act1-q1').value.trim();
            const q2 = document.getElementById('act1-q2').value.trim();
            const res = document.getElementById('act1-res');

            if ((q1 === '0.91' || q1 === '0,91') && (q2 === '182' || q2 === '182.0')) {
                res.className = 'text-xs font-bold font-mono text-emerald-400';
                res.innerText = '✔ Bravo ! CM = 1,30 x 0,70 = 0,91 et Prix = 200 x 0,91 = 182 € !';
            } else {
                res.className = 'text-xs font-bold font-mono text-rose-400';
                res.innerText = '✖ Remarque : CM = 1,30 x 0,70 = 0,91 (soit 182 €).';
            }
        }
    </script>
</body>
</html>`;

fs.writeFileSync(path.join(targetDir, 'activites.html'), activitesHtml, 'utf-8');
console.log('Successfully updated activites.html for pourcentages-proportions with clean LaTeX!');
