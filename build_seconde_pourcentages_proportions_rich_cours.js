const fs = require('fs');
const path = require('path');

const targetDir = path.join(__dirname, 'ressources', 'seconde', 'maths', 'pourcentages-proportions');

const coursHtml = `<!DOCTYPE html>
<html lang="fr" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fiche de Cours - Pourcentages, Proportions & Évolutions 2nde Pro</title>
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
                    <span class="text-xs font-bold tracking-widest uppercase text-sky-400">Séquence 2 • Seconde Professionnelle Mathématiques</span>
                    <h1 class="text-xl font-bold font-heading">Pourcentages, Proportions & Taux d'Évolution</h1>
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
                        <span class="bg-sky-500 text-slate-950 text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">Référentiel Officiel 2nde Pro</span>
                        <span class="bg-slate-800 text-slate-300 text-xs font-semibold px-3 py-1 rounded-full border border-slate-700">Baccalauréat Professionnel</span>
                    </div>
                    <h2 class="text-3xl font-extrabold font-heading text-white">Je Note l'Essentiel : Pourcentages & Évolutions</h2>
                    <p class="text-sm text-slate-300 max-w-2xl">Loi des proportions $p = \\frac{n}{N}$, Coefficient Multiplicateur $CM = 1 \\pm \\frac{t}{100}$, Taux d'évolution $t = \\frac{V_1 - V_0}{V_0}$ et exemples illustrés pour chaque notion.</p>
                </div>

                <button onclick="window.print()" class="no-print bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs px-5 py-3 rounded-xl shadow-md transition-colors flex items-center gap-2">
                    <i class="fa-solid fa-print"></i> Imprimer le Cours (PDF)
                </button>
            </div>
        </div>

        <!-- PARTIE 1 : PROPORTIONS & POURCENTAGES DE RÉPARTITION -->
        <section class="bg-white p-6 md:p-8 rounded-3xl border border-slate-200 card-shadow space-y-6">
            <div class="flex items-center gap-3 border-b border-slate-100 pb-4">
                <span class="w-10 h-10 bg-sky-100 text-sky-800 rounded-xl flex items-center justify-center font-bold text-lg">1</span>
                <div>
                    <span class="text-xs font-bold text-sky-600 uppercase tracking-wider">Statistique Descriptive & Analyse</span>
                    <h3 class="text-xl font-bold font-heading text-slate-900">Proportions & Pourcentages d'Ensembles</h3>
                </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-slate-700 leading-relaxed items-start">
                <div class="md:col-span-2 space-y-4">
                    <div class="bg-sky-50 border-l-4 border-sky-500 p-4 rounded-r-2xl space-y-2">
                        <h4 class="font-bold text-sky-950 text-sm">📌 Définition Officielle (Proportion) :</h4>
                        <p>Dans une population de référence de taille totale $N$, la proportion $p$ d'une sous-population de taille $n$ s'exprime par le rapport :</p>
                        <p class="font-mono text-sky-900 font-bold text-sm">$$p = \\frac{n}{N} \\quad \\text{avec } 0 \\le p \\le 1$$</p>
                        <p>Le <strong>pourcentage</strong> associé est $p_{\\%} = p \\times 100$.</p>
                    </div>

                    <div class="bg-indigo-50 border-l-4 border-indigo-500 p-4 rounded-r-2xl space-y-2">
                        <h4 class="font-bold text-indigo-950 text-sm">🔗 Propriété : Proportions Étagées (Sous-ensemble $B \\subset A \\subset E$)</h4>
                        <p>Si la sous-population $A$ représente une proportion $p_1$ de $E$, et que la sous-population $B$ représente une proportion $p_2$ de $A$, alors la proportion globale de $B$ dans $E$ est :</p>
                        <p class="font-mono text-indigo-900 font-bold text-sm">$$p = p_1 \\times p_2$$</p>
                    </div>

                    <!-- EXEMPLES CONCRETS ET SIMPLES PARTIE 1 -->
                    <div class="bg-slate-50 border border-slate-200 rounded-2xl p-4 space-y-2">
                        <h4 class="font-bold text-slate-900 text-xs uppercase tracking-wider flex items-center gap-1.5 text-sky-700">
                            <i class="fa-solid fa-pen-to-square"></i> Exemples Simples d'Application (Notion 1) :
                        </h4>
                        <div class="space-y-2 font-mono text-[11px] text-slate-800">
                            <p class="p-2 bg-white rounded-xl border border-slate-200">
                                <strong>Ex 1 (Proportion simple) :</strong> Dans un lycée de $N = 400$ élèves, $n = 240$ sont inscrits en filière professionnelle.<br>
                                $p = \\frac{240}{400} = 0{,}60 \\implies \\mathbf{60\\%}$ de la sous-population.
                            </p>
                            <p class="p-2 bg-white rounded-xl border border-slate-200">
                                <strong>Ex 2 (Proportions étagées) :</strong> Dans une entreprise de $500$ salariés, $60\\%$ sont techniciens ($p_1 = 0{,}60$). Parmi eux, $40\\%$ travaillent de nuit ($p_2 = 0{,}40$).<br>
                                $p = 0{,}60 \\times 0{,}40 = \\mathbf{0{,}24} \\implies \\mathbf{24\\%}$ du total (soit $500 \\times 0{,}24 = 120$ salariés).
                            </p>
                        </div>
                    </div>
                </div>

                <!-- FIGURE SVG INCLUSION D'ENSEMBLES -->
                <div class="p-4 bg-slate-900 text-white rounded-2xl border border-slate-800 text-center">
                    <svg width="210" height="140" viewBox="0 0 210 140" class="mx-auto font-sans">
                        <rect x="10" y="10" width="190" height="120" fill="#1e293b" stroke="#64748b" stroke-width="2" rx="10"/>
                        <text x="20" y="26" font-size="9" fill="#94a3b8" font-weight="bold">Population Totale E (N)</text>

                        <rect x="25" y="36" width="150" height="84" fill="#0284c7" fill-opacity="0.3" stroke="#38bdf8" stroke-width="2" rx="8"/>
                        <text x="35" y="50" font-size="9" fill="#38bdf8" font-weight="bold">Sous-ensemble A (p1)</text>

                        <rect x="40" y="58" width="115" height="52" fill="#10b981" fill-opacity="0.5" stroke="#34d399" stroke-width="2" rx="6"/>
                        <text x="50" y="78" font-size="9" fill="#ffffff" font-weight="bold">Sous-ensemble B (p2)</text>
                        <text x="50" y="94" font-size="9" fill="#f59e0b" font-weight="bold">p_global = p1 × p2</text>
                    </svg>
                </div>
            </div>
        </section>

        <!-- PARTIE 2 : VARIATIONS & COEFFICIENT MULTIPLICATEUR CM -->
        <section class="bg-white p-6 md:p-8 rounded-3xl border border-slate-200 card-shadow space-y-6">
            <div class="flex items-center gap-3 border-b border-slate-100 pb-4">
                <span class="w-10 h-10 bg-emerald-100 text-emerald-800 rounded-xl flex items-center justify-center font-bold text-lg">2</span>
                <div>
                    <span class="text-xs font-bold text-emerald-600 uppercase tracking-wider">Outil Fondamental d'Évolution</span>
                    <h3 class="text-xl font-bold font-heading text-slate-900">Le Coefficient Multiplicateur ($CM$)</h3>
                </div>
            </div>

            <div class="space-y-4 text-xs text-slate-700 leading-relaxed">
                <p>Pour passer d'une valeur initiale $V_0$ à une valeur finale $V_1$ après une variation de $t\\%$, on utilise le <strong>Coefficient Multiplicateur ($CM$)</strong> :</p>

                <!-- REGLES ET SCHÉMA CM -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                    <div class="space-y-3">
                        <div class="p-4 bg-emerald-50 border-l-4 border-emerald-500 rounded-r-2xl space-y-1">
                            <h4 class="font-bold text-emerald-950 text-sm">📈 Cas d'une Augmentation (Hausse de $t\\%$) :</h4>
                            <p class="font-mono text-emerald-900 font-bold text-sm">$$CM = 1 + \\frac{t}{100}$$</p>
                        </div>
                        <div class="p-4 bg-rose-50 border-l-4 border-rose-500 rounded-r-2xl space-y-1">
                            <h4 class="font-bold text-rose-950 text-sm">📉 Cas d'une Diminution (Baisse de $t\\%$) :</h4>
                            <p class="font-mono text-rose-900 font-bold text-sm">$$CM = 1 - \\frac{t}{100}$$</p>
                        </div>
                        <div class="p-4 bg-slate-900 text-white rounded-2xl border border-slate-800 space-y-1">
                            <h4 class="font-bold text-amber-400 text-sm">⚡ Formule de Calcul Direct :</h4>
                            <p class="font-mono text-slate-200 font-bold text-sm">$$V_1 = V_0 \\times CM \\quad \\iff \\quad V_0 = \\frac{V_1}{CM}$$</p>
                        </div>
                    </div>

                    <!-- EXEMPLES CONCRETS SIMPLES PARTIE 2 -->
                    <div class="bg-slate-50 border border-slate-200 rounded-2xl p-4 space-y-3">
                        <h4 class="font-bold text-slate-900 text-xs uppercase tracking-wider flex items-center gap-1.5 text-emerald-700">
                            <i class="fa-solid fa-pen-to-square"></i> Exemples Simples d'Application (Notion 2) :
                        </h4>
                        <div class="space-y-2 font-mono text-[11px] text-slate-800">
                            <p class="p-2 bg-white rounded-xl border border-slate-200">
                                <strong>Ex 1 (Hausse de +15%) :</strong> Un produit de $V_0 = 80\\text{ €}$ augmente de $15\\%$.<br>
                                $CM = 1 + 0{,}15 = 1{,}15 \\implies V_1 = 80 \\times 1{,}15 = \\mathbf{92\\text{ €}}$.
                            </p>
                            <p class="p-2 bg-white rounded-xl border border-slate-200">
                                <strong>Ex 2 (Remise de -25%) :</strong> Un vêtement de $V_0 = 60\\text{ €}$ baisse de $25\\%$.<br>
                                $CM = 1 - 0{,}25 = 0{,}75 \\implies V_1 = 60 \\times 0{,}75 = \\mathbf{45\\text{ €}}$.
                            </p>
                            <p class="p-2 bg-white rounded-xl border border-slate-200">
                                <strong>Ex 3 (Retrouver V₀) :</strong> Après une hausse de $+20\\%$ ($CM = 1{,}20$), un matériel coûte $V_1 = 144\\text{ €}$.<br>
                                $V_0 = \\frac{144}{1{,}20} = \\mathbf{120\\text{ €}}$.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- PARTIE 3 : ÉVOLUTIONS SUCCESSIVES & TAUX RÉCIPROQUE -->
        <section class="bg-white p-6 md:p-8 rounded-3xl border border-slate-200 card-shadow space-y-6">
            <div class="flex items-center gap-3 border-b border-slate-100 pb-4">
                <span class="w-10 h-10 bg-purple-100 text-purple-800 rounded-xl flex items-center justify-center font-bold text-lg">3</span>
                <div>
                    <span class="text-xs font-bold text-purple-600 uppercase tracking-wider">Analyse d'Évolution Complexe</span>
                    <h3 class="text-xl font-bold font-heading text-slate-900">Évolutions Successives & Taux Réciproque</h3>
                </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-slate-700 leading-relaxed">
                <!-- SUCCESSIVES -->
                <div class="bg-purple-50 border-l-4 border-purple-500 p-5 rounded-r-2xl space-y-3">
                    <h4 class="font-bold text-purple-950 text-sm">🔄 1. Évolutions Successives</h4>
                    <p>Lorsqu'une grandeur subit plusieurs évolutions successives de coefficients $CM_1, CM_2, \\dots, CM_k$, le <strong>Coefficient Multiplicateur Global</strong> est le produit des coefficients :</p>
                    <p class="font-mono text-purple-900 font-bold text-sm">$$CM_{\\text{global}} = CM_1 \\times CM_2 \\times \\dots \\times CM_k$$</p>
                    <p>Le taux d'évolution global s'obtient par : $t_{\\text{global}} = (CM_{\\text{global}} - 1) \\times 100$.</p>

                    <!-- EXEMPLE DE NOTION 3 (SUCCESSIVES) -->
                    <div class="p-3 bg-white rounded-xl border border-purple-200 font-mono text-[11px] text-purple-950 space-y-1">
                        <strong>📌 Exemple d'Évolutions Successives :</strong><br>
                        Un article de $100\\text{ €}$ subit $+10\\%$ ($CM_1 = 1{,}10$) puis $-20\\%$ ($CM_2 = 0{,}80$).<br>
                        • $CM_{\\text{global}} = 1{,}10 \\times 0{,}80 = \\mathbf{0{,}88}$.<br>
                        • Prix final : $100 \\times 0{,}88 = \\mathbf{88\\text{ €}}$ (soit **$-12\\%$** au global).
                    </div>
                </div>

                <!-- RÉCIPROQUE -->
                <div class="bg-amber-50 border-l-4 border-amber-500 p-5 rounded-r-2xl space-y-3">
                    <h4 class="font-bold text-amber-950 text-sm">↩️ 2. Taux Réciproque (Retour au Prix Initial)</h4>
                    <p>Pour revenir à la valeur initiale $V_0$ après une évolution de coefficient $CM$, il faut appliquer le <strong>Coefficient Multiplicateur Réciproque $CM'$</strong> :</p>
                    <p class="font-mono text-amber-900 font-bold text-sm">$$CM' = \\frac{1}{CM}$$</p>
                    <p>Le taux d'évolution réciproque est : $t' = (CM' - 1) \\times 100$.</p>

                    <!-- EXEMPLE DE NOTION 3 (RÉCIPROQUE) -->
                    <div class="p-3 bg-white rounded-xl border border-amber-200 font-mono text-[11px] text-amber-950 space-y-1">
                        <strong>📌 Exemple de Taux Réciproque :</strong><br>
                        Après une hausse de $+25\\%$ ($CM = 1{,}25$), pour retrouver le prix initial :<br>
                        • $CM' = \\frac{1}{1{,}25} = \\mathbf{0{,}80}$.<br>
                        • Taux réciproque : $(0{,}80 - 1) \\times 100 = \\mathbf{-20\\%}$ (il faut baisse de $20\\%$).
                    </div>
                </div>
            </div>
        </section>

        <!-- PARTIE 4 : CALCULATEUR & SIMULATEUR DYNAMIQUE CM JS -->
        <section class="bg-slate-900 text-white p-6 md:p-8 rounded-3xl border border-slate-800 space-y-6 card-shadow no-print">
            <div class="flex items-center justify-between border-b border-slate-800 pb-4">
                <div class="flex items-center gap-3">
                    <div class="w-10 h-10 bg-sky-500/20 text-sky-400 rounded-xl flex items-center justify-center font-bold text-lg">
                        <i class="fa-solid fa-calculator"></i>
                    </div>
                    <div>
                        <span class="text-xs font-bold text-sky-400 uppercase tracking-wider">Outil Interactif de Classe</span>
                        <h3 class="text-xl font-bold font-heading text-white">Simulateur Dynamique de Coefficients & Taux (2nde Pro)</h3>
                    </div>
                </div>
                <span class="text-xs font-bold text-slate-400">MathJax Instantané</span>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
                <!-- INPUTS -->
                <div class="space-y-3 bg-slate-800 p-4 rounded-2xl border border-slate-700">
                    <h4 class="font-bold text-amber-400">Paramètres d'Évolution :</h4>
                    <div>
                        <label class="font-semibold block text-slate-300">Valeur Initiale V₀ (€) :</label>
                        <input type="number" id="sim-v0" value="150" oninput="runSim()" class="w-full p-2 border border-slate-600 rounded-xl font-bold text-slate-900 bg-white">
                    </div>
                    <div>
                        <label class="font-semibold block text-slate-300">Évolution 1 t₁ (%) :</label>
                        <input type="number" id="sim-t1" value="20" oninput="runSim()" class="w-full p-2 border border-slate-600 rounded-xl font-bold text-slate-900 bg-white">
                    </div>
                    <div>
                        <label class="font-semibold block text-slate-300">Évolution 2 t₂ (%) :</label>
                        <input type="number" id="sim-t2" value="-15" oninput="runSim()" class="w-full p-2 border border-slate-600 rounded-xl font-bold text-slate-900 bg-white">
                    </div>
                </div>

                <!-- OUTPUT DISPLAY -->
                <div class="md:col-span-2 bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-3 font-mono leading-relaxed">
                    <h4 class="font-bold text-emerald-400 text-sm border-b border-slate-800 pb-2">Démonstration Mathématique en Direct :</h4>
                    <p id="out-cm1" class="text-slate-300">• CM₁ = 1 + 20/100 = 1,20</p>
                    <p id="out-cm2" class="text-slate-300">• CM₂ = 1 - 15/100 = 0,85</p>
                    <p id="out-cmglob" class="text-sky-300 font-bold">• CM_global = 1,20 × 0,85 = 1,02 (Taux global = +2,00%)</p>
                    <p id="out-vfinal" class="text-emerald-400 font-bold">• Valeur Finale V₁ = 150 × 1,02 = 153,00 €</p>
                    <p id="out-recip" class="text-purple-300">• Taux Réciproque : CM' = 1/1,02 = 0,9804 (-1,96%)</p>
                </div>
            </div>
        </section>

    </main>

    <!-- JS POUR SIMULATEUR NUMÉRIQUE INTERACTIF -->
    <script>
        function runSim() {
            var v0 = parseFloat(document.getElementById('sim-v0').value);
            var t1 = parseFloat(document.getElementById('sim-t1').value);
            var t2 = parseFloat(document.getElementById('sim-t2').value);

            if (isNaN(v0) || isNaN(t1) || isNaN(t2)) return;

            var cm1 = 1 + (t1 / 100);
            var cm2 = 1 + (t2 / 100);
            var cmGlob = cm1 * cm2;
            var tGlob = (cmGlob - 1) * 100;
            var v1 = v0 * cmGlob;

            var cmRecip = 1 / cmGlob;
            var tRecip = (cmRecip - 1) * 100;

            document.getElementById('out-cm1').innerHTML = "• CM₁ = 1 " + (t1 >= 0 ? "+" : "") + " (" + t1 + "/100) = <b>" + cm1.toFixed(4) + "</b>";
            document.getElementById('out-cm2').innerHTML = "• CM₂ = 1 " + (t2 >= 0 ? "+" : "") + " (" + t2 + "/100) = <b>" + cm2.toFixed(4) + "</b>";
            document.getElementById('out-cmglob').innerHTML = "• CM_global = " + cm1.toFixed(2) + " × " + cm2.toFixed(2) + " = <b>" + cmGlob.toFixed(4) + "</b> (Taux global = <b>" + (tGlob >= 0 ? "+" : "") + tGlob.toFixed(2) + "%</b>)";
            document.getElementById('out-vfinal').innerHTML = "• Valeur Finale V₁ = " + v0 + " × " + cmGlob.toFixed(4) + " = <b>" + v1.toFixed(2) + " €</b>";
            document.getElementById('out-recip').innerHTML = "• Taux Réciproque pour revenir à V₀ : CM' = 1 / " + cmGlob.toFixed(4) + " = <b>" + cmRecip.toFixed(4) + "</b> (soit <b>" + (tRecip >= 0 ? "+" : "") + tRecip.toFixed(2) + "%</b>)";
        }
        runSim();
    </script>
</body>
</html>`;

fs.writeFileSync(path.join(targetDir, 'cours.html'), coursHtml, 'utf-8');
console.log('Successfully added simple examples for each notion in cours.html!');
