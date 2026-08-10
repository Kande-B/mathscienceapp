<!DOCTYPE html>
<html lang="fr" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Évaluation Bilan - Résolution de Problèmes du 1er Degré (Seconde Pro)</title>
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
        }
    </style>
</head>
<body class="text-slate-800 bg-slate-50 min-h-screen pb-20">

    <!-- Header & Nav unifiée pour la Séquence Seconde -->
    <header class="bg-slate-900 text-white sticky top-0 z-50 border-b border-slate-800 shadow-md">
        <div class="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
            <div class="flex items-center gap-3">
                <div class="w-10 h-10 bg-red-500/20 border border-red-400/30 text-red-400 rounded-xl flex items-center justify-center font-bold">
                    <i class="fa-solid fa-graduation-cap text-lg"></i>
                </div>
                <div>
                    <span class="text-xs font-bold tracking-widest uppercase text-red-400">Séquence Seconde Pro • Mathématiques</span>
                    <h1 class="text-xl font-bold font-heading">Résolution de Problèmes du 1er Degré</h1>
                </div>
            </div>
            <!-- Navigation de la Séquence -->
            <nav class="flex flex-wrap items-center gap-1.5 text-xs font-bold">
                <a href="automatismes.html" class="px-3 py-2 rounded-lg bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white transition-colors flex items-center gap-1.5"><i class="fa-solid fa-bolt text-yellow-400"></i> Automatismes</a>
                <a href="activites.html" class="px-3 py-2 rounded-lg bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white transition-colors flex items-center gap-1.5"><i class="fa-solid fa-lightbulb text-emerald-400"></i> Activités</a>
                <a href="cours.html" class="px-3 py-2 rounded-lg bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white transition-colors flex items-center gap-1.5"><i class="fa-solid fa-book-open text-sky-400"></i> Cours</a>
                <a href="td.html" class="px-3 py-2 rounded-lg bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white transition-colors flex items-center gap-1.5"><i class="fa-solid fa-dumbbell text-indigo-400"></i> TD & Exercices</a>
                <a href="tice.html" class="px-3 py-2 rounded-lg bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white transition-colors flex items-center gap-1.5"><i class="fa-solid fa-laptop-code text-purple-400"></i> TP Numérique</a>
                <a href="eval.html" class="px-3 py-2 rounded-lg bg-red-600 text-white font-extrabold shadow-sm flex items-center gap-1.5"><i class="fa-solid fa-graduation-cap"></i> Évaluation</a>
            </nav>
        </div>
    </header>

    <main class="max-w-5xl mx-auto px-4 py-8 space-y-12">

        <!-- ENTÊTE ÉVALUATION OFFICIELLE -->
        <div class="bg-slate-900 text-white p-6 md:p-8 rounded-3xl shadow-xl border border-slate-800 space-y-4">
            <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div>
                    <div class="flex items-center gap-2 mb-2">
                        <span class="bg-red-600 text-white text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">Évaluation Sommative CCF</span>
                        <span class="bg-slate-800 text-slate-300 text-xs font-semibold px-3 py-1 rounded-full border border-slate-700">Seconde Pro • Durée : 45 min</span>
                    </div>
                    <h2 class="text-3xl font-extrabold font-heading text-white">Évaluation : Équations & Inéquations du 1er Degré</h2>
                    <p class="text-sm text-slate-300 max-w-2xl">Sujet officiel sur 20 points évaluant la résolution d'équations, d'inéquations avec changement de sens, et la modélisation d'un problème professionnel avec seuil de rentabilité.</p>
                </div>

                <button onclick="window.print()" class="no-print bg-red-600 hover:bg-red-500 text-white font-bold text-xs px-5 py-3 rounded-xl shadow-md transition-colors flex items-center gap-2">
                    <i class="fa-solid fa-print"></i> Imprimer le Sujet A4
                </button>
            </div>

            <!-- Cartouche Identité Élève -->
            <div class="pt-4 border-t border-slate-800 grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-mono">
                <div class="bg-slate-800 p-3 rounded-xl border border-slate-700">NOM : ....................................</div>
                <div class="bg-slate-800 p-3 rounded-xl border border-slate-700">PRÉNOM : ................................</div>
                <div class="bg-slate-800 p-3 rounded-xl border border-slate-700 text-center font-bold text-yellow-400">NOTE : ......... / 20</div>
            </div>
        </div>

        <!-- SUJET DE L'ÉVALUATION -->
        <div class="space-y-6 text-xs">

            <!-- PARTIE 1 -->
            <section class="bg-white p-6 rounded-3xl border border-slate-200 card-shadow space-y-4">
                <div class="flex items-center justify-between border-b border-slate-100 pb-3">
                    <h3 class="font-bold text-slate-900 text-sm">Partie 1 • Automatismes Équations & Inéquations (4 Points)</h3>
                    <span class="bg-slate-100 text-slate-700 font-bold px-2.5 py-1 rounded-full text-[11px]">4 Pts</span>
                </div>

                <div class="space-y-3">
                    <p class="font-semibold text-slate-800">1.1 Résoudre l'équation $x + 16 = -4$ (1 pt) et l'inéquation $-6x leqslant 42$ (1 pt) :</p>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 font-mono text-slate-700">
                        <div class="p-3 bg-slate-50 rounded-xl border border-slate-200">a) $x + 16 = -4$</div>
                        <div class="p-3 bg-slate-50 rounded-xl border border-slate-200">b) $-6x leqslant 42$</div>
                    </div>

                    <p class="font-semibold text-slate-800 pt-2">1.2 Inversion de formule (2 pts) :</p>
                    <div class="p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-1 text-slate-700">
                        <p>La formule de la puissance électrique est $P = U 	imes I$.</p>
                        <p>Exprimer l'intensité $I$ en fonction de $P$ et $U$, puis calculer $I$ pour $P = 3450$ W et $U = 230$ V.</p>
                    </div>
                </div>
            </section>

            <!-- PARTIE 2 -->
            <section class="bg-white p-6 rounded-3xl border border-slate-200 card-shadow space-y-4">
                <div class="flex items-center justify-between border-b border-slate-100 pb-3">
                    <h3 class="font-bold text-slate-900 text-sm">Partie 2 • Résolution d'Équations & Inéquations Générales (6 Points)</h3>
                    <span class="bg-slate-100 text-slate-700 font-bold px-2.5 py-1 rounded-full text-[11px]">6 Pts</span>
                </div>

                <div class="space-y-3">
                    <p class="font-semibold text-slate-800">Résoudre dans $mathbb{R}$ en détaillant les étapes :</p>
                    <div class="space-y-2 font-mono text-slate-700">
                        <div class="p-3 bg-slate-50 rounded-xl border border-slate-200">2.1 Équation : $7x - 15 = 2x + 20$ (2 pts)</div>
                        <div class="p-3 bg-slate-50 rounded-xl border border-slate-200">2.2 Inéquation : $5x - 18 leqslant 2x + 12$ (2 pts)</div>
                        <div class="p-3 bg-slate-50 rounded-xl border border-slate-200">2.3 Équation produit nul : $(3x - 21)(4x + 16) = 0$ (2 pts)</div>
                    </div>
                </div>
            </section>

            <!-- PARTIE 3 -->
            <section class="bg-white p-6 rounded-3xl border border-slate-200 card-shadow space-y-4">
                <div class="flex items-center justify-between border-b border-slate-100 pb-3">
                    <h3 class="font-bold text-slate-900 text-sm">Partie 3 • Problème Pro : Seuil de Rentabilité par Inéquation (8 Points)</h3>
                    <span class="bg-slate-100 text-slate-700 font-bold px-2.5 py-1 rounded-full text-[11px]">8 Pts</span>
                </div>

                <div class="space-y-3 text-slate-700 leading-relaxed">
                    <div class="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                        <h4 class="font-bold text-slate-900 text-xs">Mise en situation :</h4>
                        <p>
                            Un atelier de fabrication étudie deux offres de location de matériel pour $x$ jours d'intervention : <br>
                            • <strong>Tarif A :</strong> $C_A(x) = 35x + 240$ €. <br>
                            • <strong>Tarif B :</strong> $C_B(x) = 55x$ €.
                        </p>
                    </div>

                    <div class="space-y-2 font-medium">
                        <p><strong>3.1 (2 pts) :</strong> Écrire l'inéquation permettant de déterminer pour quelle durée $x$ le Tarif A est plus avantageux ou égal au Tarif B ($C_A(x) leqslant C_B(x)$).</p>
                        <p><strong>3.2 (3 pts) :</strong> Résoudre cette inéquation et donner l'ensemble solution sous forme d'intervalle.</p>
                        <p><strong>3.3 (3 pts) :</strong> Conclure sous forme de conseil rédigé pour le chef d'atelier (pour un chantier prévu de 15 jours).</p>
                    </div>
                </div>
            </section>

            <!-- PARTIE 4 -->
            <section class="bg-white p-6 rounded-3xl border border-slate-200 card-shadow space-y-4">
                <div class="flex items-center justify-between border-b border-slate-100 pb-3">
                    <h3 class="font-bold text-slate-900 text-sm">Partie 4 • Esprit Critique & Analyse d'Erreur (2 Points)</h3>
                    <span class="bg-slate-100 text-slate-700 font-bold px-2.5 py-1 rounded-full text-[11px]">2 Pts</span>
                </div>

                <div class="space-y-2 text-slate-700">
                    <p class="font-semibold text-slate-900">Un élève a rédigé la résolution d'inéquation suivante :</p>
                    <div class="p-3 bg-rose-50 border border-rose-200 rounded-xl font-mono text-rose-950">
                        $-3x leqslant 15 implies x leqslant rac{15}{-3} implies x leqslant -5$.
                    </div>
                    <p class="text-slate-800">Expliquer l'erreur commise par l'élève et donner la vraie solution.</p>
                </div>
            </section>

            <!-- SECTION CORRIGÉ DÉTAILLÉ -->
            <section class="bg-slate-900 text-white p-6 rounded-3xl space-y-4 border border-slate-800 shadow-xl">
                <details class="group">
                    <summary class="cursor-pointer font-bold text-red-400 text-sm flex items-center justify-between select-none">
                        <span><i class="fa-solid fa-key mr-2"></i> Consulter le Barème & Corrigé Officiel Complet</span>
                        <i class="fa-solid fa-chevron-down group-open:rotate-180 transition-transform"></i>
                    </summary>

                    <div class="mt-4 pt-4 border-t border-slate-800 space-y-4 text-xs font-mono text-slate-300 leading-relaxed">
                        <div class="p-3 bg-slate-800 rounded-xl border border-slate-700">
                            <h5 class="font-bold text-yellow-400 mb-1 font-sans">Corrigé Partie 1 (4 pts) :</h5>
                            <p>1.1 a) $x = -4 - 16 implies mathbf{x = -20}$ (1 pt)</p>
                            <p>1.1 b) $-6x leqslant 42 implies x geqslant rac{42}{-6}$ (Changement de sens !) $implies mathbf{x geqslant -7}$ (1 pt)</p>
                            <p>1.2 $I = rac{P}{U} = rac{3450}{230} implies mathbf{I = 15 	ext{ A}}$ (2 pts)</p>
                        </div>

                        <div class="p-3 bg-slate-800 rounded-xl border border-slate-700">
                            <h5 class="font-bold text-yellow-400 mb-1 font-sans">Corrigé Partie 2 (6 pts) :</h5>
                            <p>2.1 $7x - 2x = 20 + 15 implies 5x = 35 implies mathbf{x = 7}$ (2 pts)</p>
                            <p>2.2 $5x - 2x leqslant 12 + 18 implies 3x leqslant 30 implies x leqslant 10$. $mathbf{S = ]-infty ;;; 10]}$ (2 pts)</p>
                            <p>2.3 $3x - 21 = 0 implies x = 7$ ou $4x + 16 = 0 implies x = -4$. $mathbf{S = {-4 ;;; 7}}$ (2 pts)</p>
                        </div>

                        <div class="p-3 bg-slate-800 rounded-xl border border-slate-700">
                            <h5 class="font-bold text-yellow-400 mb-1 font-sans">Corrigé Partie 3 (8 pts) :</h5>
                            <p>3.1 Inéquation : $35x + 240 leqslant 55x$ (2 pts)</p>
                            <p>3.2 $240 leqslant 55x - 35x implies 20x geqslant 240 implies x geqslant 12$. $mathbf{S = [12 ;;; +infty[}$ (3 pts)</p>
                            <p>3.3 Pour 15 jours ($15 geqslant 12$), le <strong>Tarif A est plus avantageux</strong> ($C_A(15) = 765$ € vs $C_B(15) = 825$ €). (3 pts)</p>
                        </div>

                        <div class="p-3 bg-slate-800 rounded-xl border border-slate-700">
                            <h5 class="font-bold text-yellow-400 mb-1 font-sans">Corrigé Partie 4 (2 pts) :</h5>
                            <p>L'élève a oublié d'inverser le sens de l'inégalité en divisant par un nombre négatif (-3). La bonne solution est $x geqslant -5$. (2 pts)</p>
                        </div>
                    </div>
                </details>
            </section>

        </div>
    </main>

</body>
</html>