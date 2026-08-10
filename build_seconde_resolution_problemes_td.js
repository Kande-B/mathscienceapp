<!DOCTYPE html>
<html lang="fr" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TD & Exercices Corrigés - Résolution de Problèmes du 1er Degré (Seconde Pro)</title>
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
    <script>MathJax = { tex: { inlineMath: [['$', '$'], ['\\(', '\\)']] } };</script>
    <script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js"></script>

    <style>
        body { font-family: 'Inter', sans-serif; background-color: #f8fafc; color: #1e293b; }
        h1, h2, h3, h4, .font-heading { font-family: 'Outfit', sans-serif; }
        .card-shadow { box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.05); }

        @media print {
            header, nav, .no-print { display: none !important; }
            body { background-color: white; color: black; padding-bottom: 0 !important; }
            .card-shadow { box-shadow: none; border: 1px solid #ccc; }
            details { display: block !important; }
            details summary { display: none !important; }
        }
    </style>
</head>
<body class="text-slate-800 bg-slate-50 min-h-screen pb-20">

    <!-- Header & Nav unifiée pour la Séquence Seconde -->
    <header class="bg-slate-900 text-white sticky top-0 z-50 border-b border-slate-800 shadow-md">
        <div class="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
            <div class="flex items-center gap-3">
                <div class="w-10 h-10 bg-indigo-500/20 border border-indigo-400/30 text-indigo-400 rounded-xl flex items-center justify-center font-bold">
                    <i class="fa-solid fa-dumbbell text-lg"></i>
                </div>
                <div>
                    <span class="text-xs font-bold tracking-widest uppercase text-indigo-400">Séquence Seconde Pro • Mathématiques</span>
                    <h1 class="text-xl font-bold font-heading">Résolution de Problèmes du 1er Degré</h1>
                </div>
            </div>
            <!-- Navigation de la Séquence -->
            <nav class="flex flex-wrap items-center gap-1.5 text-xs font-bold">
                <a href="automatismes.html" class="px-3 py-2 rounded-lg bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white transition-colors flex items-center gap-1.5"><i class="fa-solid fa-bolt text-yellow-400"></i> Automatismes</a>
                <a href="activites.html" class="px-3 py-2 rounded-lg bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white transition-colors flex items-center gap-1.5"><i class="fa-solid fa-lightbulb text-emerald-400"></i> Activités</a>
                <a href="cours.html" class="px-3 py-2 rounded-lg bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white transition-colors flex items-center gap-1.5"><i class="fa-solid fa-book-open text-sky-400"></i> Cours</a>
                <a href="td.html" class="px-3 py-2 rounded-lg bg-indigo-600 text-white font-extrabold shadow-sm flex items-center gap-1.5"><i class="fa-solid fa-dumbbell"></i> TD & Exercices</a>
                <a href="tice.html" class="px-3 py-2 rounded-lg bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white transition-colors flex items-center gap-1.5"><i class="fa-solid fa-laptop-code text-purple-400"></i> TP Numérique</a>
                <a href="eval.html" class="px-3 py-2 rounded-lg bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white transition-colors flex items-center gap-1.5"><i class="fa-solid fa-graduation-cap text-red-400"></i> Évaluation</a>
            </nav>
        </div>
    </header>

    <main class="max-w-5xl mx-auto px-4 py-8 space-y-12">

        <!-- ENTÊTE DE TD -->
        <div class="bg-slate-900 text-white p-6 md:p-8 rounded-3xl shadow-xl border border-slate-800 space-y-4">
            <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div>
                    <div class="flex items-center gap-2 mb-2">
                        <span class="bg-indigo-500 text-white text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">Fiche Travaux Dirigés A4</span>
                        <span class="bg-slate-800 text-slate-300 text-xs font-semibold px-3 py-1 rounded-full border border-slate-700">Seconde Pro</span>
                    </div>
                    <h2 class="text-3xl font-extrabold font-heading text-white">TD : Équations & Inéquations du 1er Degré</h2>
                    <p class="text-sm text-slate-300 max-w-2xl">Entraînement complet couvrant la résolution d'équations, d'inéquations avec changement de sens, d'inversions de formules et de problèmes de rentabilité sous contraintes.</p>
                </div>

                <button onclick="window.print()" class="no-print bg-indigo-500 hover:bg-indigo-400 text-white font-bold text-xs px-5 py-3 rounded-xl shadow-md transition-colors flex items-center gap-2">
                    <i class="fa-solid fa-print"></i> Imprimer le TD A4
                </button>
            </div>
        </div>

        <!-- LISTE DES EXERCICES -->
        <div class="space-y-6 text-xs">

            <!-- EXERCICE 1 : EQUATIONS GENERALES -->
            <section class="bg-white p-6 rounded-3xl border border-slate-200 card-shadow space-y-4">
                <div class="flex items-center justify-between border-b border-slate-100 pb-3">
                    <span class="font-bold text-indigo-700 uppercase tracking-wider text-xs bg-indigo-50 px-3 py-1 rounded-full">Exercice 1 • Résolution d'Équations</span>
                    <span class="text-slate-400 font-medium">Capacité C3 • 4 points</span>
                </div>
                <p class="font-bold text-slate-900">Résoudre dans $mathbb{R}$ les équations suivantes :</p>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-3 font-mono text-slate-800">
                    <p>a) $8x - 14 = 34$</p>
                    <p>b) $7x + 19 = 2x - 11$</p>
                </div>

                <details class="bg-slate-50 border border-slate-200 rounded-xl p-4">
                    <summary class="cursor-pointer font-bold text-indigo-700 hover:text-indigo-900">Consulter les corrigés rédigés</summary>
                    <div class="mt-3 space-y-2 font-mono text-slate-700 leading-relaxed border-t border-slate-200 pt-3">
                        <p>a) $8x = 34 + 14 = 48 implies x = rac{48}{8} implies mathbf{x = 6}$</p>
                        <p>b) $7x - 2x = -11 - 19 implies 5x = -30 implies mathbf{x = -6}$</p>
                    </div>
                </details>
            </section>

            <!-- EXERCICE 2 : INÉQUATIONS DU 1ER DEGRÉ (NÉGATIF & POSITIF) -->
            <section class="bg-white p-6 rounded-3xl border border-slate-200 card-shadow space-y-4">
                <div class="flex items-center justify-between border-b border-slate-100 pb-3">
                    <span class="font-bold text-rose-700 uppercase tracking-wider text-xs bg-rose-50 px-3 py-1 rounded-full">Exercice 2 • Résolution d'Inéquations (Attention au signe !)</span>
                    <span class="text-slate-400 font-medium">Capacité C3 • 4 points</span>
                </div>
                <p class="font-bold text-slate-900">Résoudre dans $mathbb{R}$ les inéquations suivantes et donner les solutions sous forme d'intervalle :</p>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-3 font-mono text-slate-800">
                    <p>a) $5x - 12 leqslant 18$</p>
                    <p>b) $-4x + 9 < 25$</p>
                </div>

                <details class="bg-slate-50 border border-slate-200 rounded-xl p-4">
                    <summary class="cursor-pointer font-bold text-rose-700 hover:text-rose-900">Consulter les corrigés rédigés</summary>
                    <div class="mt-3 space-y-2 font-mono text-slate-700 leading-relaxed border-t border-slate-200 pt-3">
                        <p>a) $5x leqslant 18 + 12 = 30 implies x leqslant rac{30}{5} implies x leqslant 6$. $quad mathbf{S = ]-infty ;;; 6]}$</p>
                        <p>b) $-4x < 25 - 9 = 16 implies x > rac{16}{-4}$ (Changement de sens !) $implies x > -4$. $quad mathbf{S = ]-4 ;;; +infty[}$</p>
                    </div>
                </details>
            </section>

            <!-- EXERCICE 3 : INÉQUATIONS AVEC REGROUPEMENT DES X -->
            <section class="bg-white p-6 rounded-3xl border border-slate-200 card-shadow space-y-4">
                <div class="flex items-center justify-between border-b border-slate-100 pb-3">
                    <span class="font-bold text-rose-700 uppercase tracking-wider text-xs bg-rose-50 px-3 py-1 rounded-full">Exercice 3 • Inéquations Générales $ax + b leqslant cx + d$</span>
                    <span class="text-slate-400 font-medium">Capacité C3 • 4 points</span>
                </div>
                <p class="font-bold text-slate-900">Résoudre l'inéquation : $9x - 15 geqslant 3x + 21$.</p>

                <details class="bg-slate-50 border border-slate-200 rounded-xl p-4">
                    <summary class="cursor-pointer font-bold text-rose-700 hover:text-rose-900">Consulter le corrigé rédigé</summary>
                    <div class="mt-3 space-y-2 font-mono text-slate-700 leading-relaxed border-t border-slate-200 pt-3">
                        <p>$9x - 3x geqslant 21 + 15 implies 6x geqslant 36 implies x geqslant rac{36}{6} implies x geqslant 6$.</p>
                        <p class="font-bold text-emerald-800">Ensemble de solutions : $mathbf{S = [6 ;;; +infty[}$.</p>
                    </div>
                </details>
            </section>

            <!-- EXERCICE 4 : PROBLÈME DE SEUIL DE RENTABILITÉ PAR INÉQUATION -->
            <section class="bg-white p-6 rounded-3xl border border-slate-200 card-shadow space-y-4">
                <div class="flex items-center justify-between border-b border-slate-100 pb-3">
                    <span class="font-bold text-emerald-700 uppercase tracking-wider text-xs bg-emerald-50 px-3 py-1 rounded-full">Exercice 4 • Problème Métier : Seuil de Rentabilité</span>
                    <span class="text-slate-400 font-medium">Capacité C1 à C4 • 4 points</span>
                </div>
                <p class="text-slate-800 leading-relaxed">
                    Un fabricant de mobilier industriel produit des étagères. Le coût fixe d'atelier est de 900 € par mois, plus 30 € par étagère. Chaque étagère est vendue 75 €. <br>
                    1. Exprimer le coût $C(x)$ et la recette $R(x)$ pour $x$ étagères produites et vendues. <br>
                    2. Écrire l'inéquation permettant d'avoir une recette supérieure au coût ($R(x) geqslant C(x)$). <br>
                    3. Résoudre l'inéquation et déterminer le nombre minimal d'étagères à vendre par mois pour réaliser un bénéfice.
                </p>

                <details class="bg-slate-50 border border-slate-200 rounded-xl p-4">
                    <summary class="cursor-pointer font-bold text-emerald-700 hover:text-emerald-900">Consulter la correction détaillée</summary>
                    <div class="mt-3 space-y-2 text-slate-700 border-t border-slate-200 pt-3">
                        <p class="font-mono">1. $C(x) = 30x + 900$ et $R(x) = 75x$.</p>
                        <p class="font-mono">2. Inéquation : $75x geqslant 30x + 900$.</p>
                        <p class="font-mono">3. $75x - 30x geqslant 900 implies 45x geqslant 900 implies x geqslant rac{900}{45} = 20$.</p>
                        <p class="font-bold text-emerald-800">Conclusion : L'entreprise est rentable à partir de <strong>20 étagères vendues</strong> ($x geqslant 20$).</p>
                    </div>
                </details>
            </section>

        </div>
    </main>

</body>
</html>