<!DOCTYPE html>
<html lang="fr" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TP Numérique & TICE - Résolution de Problèmes du 1er Degré (Seconde Pro)</title>
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
                <div class="w-10 h-10 bg-purple-500/20 border border-purple-400/30 text-purple-400 rounded-xl flex items-center justify-center font-bold">
                    <i class="fa-solid fa-laptop-code text-lg"></i>
                </div>
                <div>
                    <span class="text-xs font-bold tracking-widest uppercase text-purple-400">Séquence Seconde Pro • Mathématiques</span>
                    <h1 class="text-xl font-bold font-heading">Résolution de Problèmes du 1er Degré</h1>
                </div>
            </div>
            <!-- Navigation de la Séquence -->
            <nav class="flex flex-wrap items-center gap-1.5 text-xs font-bold">
                <a href="automatismes.html" class="px-3 py-2 rounded-lg bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white transition-colors flex items-center gap-1.5"><i class="fa-solid fa-bolt text-yellow-400"></i> Automatismes</a>
                <a href="activites.html" class="px-3 py-2 rounded-lg bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white transition-colors flex items-center gap-1.5"><i class="fa-solid fa-lightbulb text-emerald-400"></i> Activités</a>
                <a href="cours.html" class="px-3 py-2 rounded-lg bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white transition-colors flex items-center gap-1.5"><i class="fa-solid fa-book-open text-sky-400"></i> Cours</a>
                <a href="td.html" class="px-3 py-2 rounded-lg bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white transition-colors flex items-center gap-1.5"><i class="fa-solid fa-dumbbell text-indigo-400"></i> TD & Exercices</a>
                <a href="tice.html" class="px-3 py-2 rounded-lg bg-purple-600 text-white font-extrabold shadow-sm flex items-center gap-1.5"><i class="fa-solid fa-laptop-code"></i> TP Numérique</a>
                <a href="eval.html" class="px-3 py-2 rounded-lg bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white transition-colors flex items-center gap-1.5"><i class="fa-solid fa-graduation-cap text-red-400"></i> Évaluation</a>
            </nav>
        </div>
    </header>

    <main class="max-w-5xl mx-auto px-4 py-8 space-y-12">

        <!-- ENTÊTE DE TP NUMÉRIQUE -->
        <div class="bg-slate-900 text-white p-6 md:p-8 rounded-3xl shadow-xl border border-slate-800 space-y-4">
            <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div>
                    <div class="flex items-center gap-2 mb-2">
                        <span class="bg-purple-500 text-white text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">TP Informatique & Outils Numériques</span>
                        <span class="bg-slate-800 text-slate-300 text-xs font-semibold px-3 py-1 rounded-full border border-slate-700">Seconde Pro</span>
                    </div>
                    <h2 class="text-3xl font-extrabold font-heading text-white">Résolution Numérique d'Équations & Inéquations</h2>
                    <p class="text-sm text-slate-300 max-w-2xl">Utilisation du Tableur (Excel / Calc) et de GeoGebra pour trouver graphiquement les solutions d'inéquations $f(x) \geqslant g(x)$ et déterminer des zones de rentabilité.</p>
                </div>
            </div>
        </div>

        <!-- PARTIE 1 : TABLEUR -->
        <section class="bg-white p-6 md:p-8 rounded-3xl border border-slate-200 card-shadow space-y-6">
            <div class="flex items-center gap-3 border-b border-slate-100 pb-4">
                <div class="w-10 h-10 bg-emerald-100 text-emerald-700 rounded-xl flex items-center justify-center font-bold text-lg">
                    <i class="fa-file-excel fa-regular text-emerald-600"></i>
                </div>
                <div>
                    <span class="text-xs font-bold text-emerald-600 uppercase tracking-wider">Partie 1 • Tableur LibreOffice Calc / Excel</span>
                    <h3 class="text-xl font-bold font-heading text-slate-900">Test d'Inéquations et Zones de Rentabilité</h3>
                </div>
            </div>

            <div class="space-y-4 text-xs leading-relaxed">
                <p class="text-slate-700">On veut déterminer la zone d'inéquation $75x \geqslant 30x + 900$ dans un tableau de balayage.</p>

                <!-- Tableau Tableur -->
                <div class="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-3">
                    <div class="overflow-x-auto">
                        <table class="w-full text-center border-collapse border border-slate-300 text-xs font-mono">
                            <thead>
                                <tr class="bg-slate-200 text-slate-700 font-bold">
                                    <th class="border border-slate-300 px-3 py-1.5">A (x)</th>
                                    <th class="border border-slate-300 px-4 py-1.5">B (Recette = 75*A2)</th>
                                    <th class="border border-slate-300 px-4 py-1.5">C (Coût = 30*A2 + 900)</th>
                                    <th class="border border-slate-300 px-4 py-1.5">D (Test Inéquation : =SI(B2>=C2;"RENTABLE";"PERTE"))</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="bg-white">
                                    <td class="border border-slate-300 px-2 py-1">10</td>
                                    <td class="border border-slate-300 px-2 py-1">750 €</td>
                                    <td class="border border-slate-300 px-2 py-1">1200 €</td>
                                    <td class="border border-slate-300 px-2 py-1 text-rose-600 font-bold">PERTE</td>
                                </tr>
                                <tr class="bg-emerald-50 font-bold">
                                    <td class="border border-slate-300 px-2 py-1 text-emerald-800">20</td>
                                    <td class="border border-slate-300 px-2 py-1 text-emerald-800">1500 €</td>
                                    <td class="border border-slate-300 px-2 py-1 text-emerald-800">1500 €</td>
                                    <td class="border border-slate-300 px-2 py-1 text-emerald-700">RENTABLE (Seuil)</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>

        <!-- PARTIE 2 : GEOGEBRA -->
        <section class="bg-white p-6 md:p-8 rounded-3xl border border-slate-200 card-shadow space-y-6">
            <div class="flex items-center gap-3 border-b border-slate-100 pb-4">
                <div class="w-10 h-10 bg-purple-100 text-purple-700 rounded-xl flex items-center justify-center font-bold text-lg">
                    <i class="fa-solid fa-shapes text-purple-600"></i>
                </div>
                <div>
                    <span class="text-xs font-bold text-purple-600 uppercase tracking-wider">Partie 2 • GeoGebra</span>
                    <h3 class="text-xl font-bold font-heading text-slate-900">Résolution Graphique d'Inéquations $f(x) \geqslant g(x)$</h3>
                </div>
            </div>

            <div class="space-y-4 text-xs leading-relaxed">
                <p class="text-slate-700">Sur GeoGebra, l'inéquation $f(x) \geqslant g(x)$ correspond à la zone d'abscisses où la courbe ou droite de $f$ est située **au-dessus** de celle de $g$.</p>
            </div>
        </section>

    </main>

</body>
</html>