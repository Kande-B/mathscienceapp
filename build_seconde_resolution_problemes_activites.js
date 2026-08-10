<!DOCTYPE html>
<html lang="fr" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Activités d'Investigation Pro - Résolution de Problèmes du 1er Degré (Seconde Pro)</title>
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
                <div class="w-10 h-10 bg-emerald-500/20 border border-emerald-400/30 text-emerald-400 rounded-xl flex items-center justify-center font-bold">
                    <i class="fa-solid fa-lightbulb text-lg"></i>
                </div>
                <div>
                    <span class="text-xs font-bold tracking-widest uppercase text-emerald-400">Séquence Seconde Pro • Mathématiques</span>
                    <h1 class="text-xl font-bold font-heading">Résolution de Problèmes du 1er Degré</h1>
                </div>
            </div>
            <!-- Navigation de la Séquence -->
            <nav class="flex flex-wrap items-center gap-1.5 text-xs font-bold">
                <a href="automatismes.html" class="px-3 py-2 rounded-lg bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white transition-colors flex items-center gap-1.5"><i class="fa-solid fa-bolt text-yellow-400"></i> Automatismes</a>
                <a href="activites.html" class="px-3 py-2 rounded-lg bg-emerald-600 text-white font-extrabold shadow-sm flex items-center gap-1.5"><i class="fa-solid fa-lightbulb"></i> Activités</a>
                <a href="cours.html" class="px-3 py-2 rounded-lg bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white transition-colors flex items-center gap-1.5"><i class="fa-solid fa-book-open text-sky-400"></i> Cours</a>
                <a href="td.html" class="px-3 py-2 rounded-lg bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white transition-colors flex items-center gap-1.5"><i class="fa-solid fa-dumbbell text-indigo-400"></i> TD & Exercices</a>
                <a href="tice.html" class="px-3 py-2 rounded-lg bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white transition-colors flex items-center gap-1.5"><i class="fa-solid fa-laptop-code text-purple-400"></i> TP Numérique</a>
                <a href="eval.html" class="px-3 py-2 rounded-lg bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white transition-colors flex items-center gap-1.5"><i class="fa-solid fa-graduation-cap text-red-400"></i> Évaluation</a>
            </nav>
        </div>
    </header>

    <main class="max-w-5xl mx-auto px-4 py-8 space-y-12">

        <!-- ENTÊTE DE SECTION D'ACTIVITÉS PRO -->
        <div class="bg-slate-900 text-white p-6 md:p-8 rounded-3xl shadow-xl border border-slate-800 space-y-4">
            <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div>
                    <div class="flex items-center gap-2 mb-2">
                        <span class="bg-emerald-500 text-slate-950 text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">Démarche d'Investigation</span>
                        <span class="bg-slate-800 text-slate-300 text-xs font-semibold px-3 py-1 rounded-full border border-slate-700">Seconde Pro</span>
                    </div>
                    <h2 class="text-3xl font-extrabold font-heading text-white">Scénarios Professionnels : Équations & Inéquations</h2>
                    <p class="text-sm text-slate-300 max-w-2xl">Situations réelles de chantier et d'atelier exigeant de poser une équation ou une inéquation pour modéliser des contraintes de débit, de tolérance et de seuil de rentabilité.</p>
                </div>

                <button onclick="window.print()" class="no-print bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs px-5 py-3 rounded-xl shadow-md transition-colors flex items-center gap-2">
                    <i class="fa-solid fa-print"></i> Imprimer la Fiche PDF
                </button>
            </div>
        </div>

        <!-- ACTIVITÉ 1 : MAINTENANCE VÉHICULES ET ENGINS (MVM / REMI) -->
        <section class="bg-white p-6 md:p-8 rounded-3xl border border-slate-200 card-shadow space-y-6">
            <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-4">
                <div class="flex items-center gap-3">
                    <div class="w-10 h-10 bg-emerald-100 text-emerald-700 rounded-xl flex items-center justify-center font-bold text-lg">1</div>
                    <div>
                        <span class="text-xs font-bold text-emerald-600 uppercase tracking-wider">Activité 1 • Maintenance & Diagnostic (MVM / REMI)</span>
                        <h3 class="text-xl font-bold font-heading text-slate-900">Régulation sous Contrainte Maximale de Débit</h3>
                    </div>
                </div>
                <div class="flex items-center gap-1">
                    <span class="px-2.5 py-1 bg-sky-100 text-sky-800 text-[11px] font-bold rounded-full">C1 S'approprier</span>
                    <span class="px-2.5 py-1 bg-amber-100 text-amber-800 text-[11px] font-bold rounded-full">C2 Analyser</span>
                    <span class="px-2.5 py-1 bg-emerald-100 text-emerald-800 text-[11px] font-bold rounded-full">C3 Réaliser</span>
                </div>
            </div>

            <!-- Contextualisation Pro -->
            <div class="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-3 text-xs leading-relaxed">
                <div class="flex items-start gap-3">
                    <i class="fa-solid fa-screwdriver-wrench text-2xl text-emerald-600 mt-1"></i>
                    <div>
                        <h4 class="font-bold text-slate-900 text-sm">Mise en Situation :</h4>
                        <p class="text-slate-700 mt-1">
                            Sur un banc d'essai de maintenance, le débit hydraulique maximal toléré par une conduite de sécurité ne doit pas dépasser <strong>2 250 L/h</strong>. <br>
                            Le débit total est alimenté par une pompe fixe de 450 L/h et 3 pompes modulables apportant un débit proportionnel au réglage $x$ (%) : $D(x) = 120x + 450$. <br>
                            On traduit la contrainte de sécurité par l'inéquation : $mathbf{120x + 450 \leqslant 2250}$.
                        </p>
                    </div>
                </div>
            </div>

            <!-- Questions Guidées -->
            <div class="space-y-4 text-xs">
                <h4 class="font-bold text-slate-900 text-sm">Questions d'Investigation :</h4>

                <div class="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                    <p class="font-semibold text-slate-900">1. Isoler le terme $120x$ en soustrayant 450 des deux membres de l'inéquation.</p>
                    <details class="text-slate-600 bg-white p-3 rounded-lg border border-slate-200">
                        <summary class="cursor-pointer font-bold text-emerald-700">Afficher la résolution étape 1</summary>
                        <p class="mt-2 text-slate-800 font-mono">$120x \leqslant 2250 - 450 \implies 120x \leqslant 1800$.</p>
                    </details>
                </div>

                <div class="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                    <p class="font-semibold text-slate-900">2. Résoudre l'inéquation et donner la plage de réglage maximale pour le technicien.</p>
                    <details class="text-slate-600 bg-white p-3 rounded-lg border border-slate-200">
                        <summary class="cursor-pointer font-bold text-emerald-700">Afficher la réponse complète</summary>
                        <div class="mt-2 space-y-1 text-slate-800">
                            <p class="font-mono">$x \leqslant \frac{1800}{120} \implies \mathbf{x \leqslant 15 \%}$.</p>
                            <p class="text-emerald-800 font-semibold">Conclusion : Le réglage des pompes ne doit pas dépasser <strong>15 %</strong> ($S = [0 \;;\; 15]$).</p>
                        </div>
                    </details>
                </div>
            </div>
        </section>

        <!-- ACTIVITÉ 2 : CHAUDRONNERIE ET BTP (MP3D / TCI) -->
        <section class="bg-white p-6 md:p-8 rounded-3xl border border-slate-200 card-shadow space-y-6">
            <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-4">
                <div class="flex items-center gap-3">
                    <div class="w-10 h-10 bg-amber-100 text-amber-700 rounded-xl flex items-center justify-center font-bold text-lg">2</div>
                    <div>
                        <span class="text-xs font-bold text-amber-600 uppercase tracking-wider">Activité 2 • Chaudronnerie & Conception (MP3D / TCI / BTP)</span>
                        <h3 class="text-xl font-bold font-heading text-slate-900">Découpe et Égalité de Périmètres</h3>
                    </div>
                </div>
                <div class="flex items-center gap-1">
                    <span class="px-2.5 py-1 bg-amber-100 text-amber-800 text-[11px] font-bold rounded-full">C2 Analyser</span>
                    <span class="px-2.5 py-1 bg-emerald-100 text-emerald-800 text-[11px] font-bold rounded-full">C3 Réaliser</span>
                </div>
            </div>

            <!-- Contextualisation Pro -->
            <div class="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-3 text-xs leading-relaxed">
                <div class="flex items-start gap-3">
                    <i class="fa-solid fa-ruler-combined text-2xl text-amber-600 mt-1"></i>
                    <div>
                        <h4 class="font-bold text-slate-900 text-sm">Mise en Situation :</h4>
                        <p class="text-slate-700 mt-1">
                            Un chaudronnier conçoit une structure métallique rectangulaire de périmètre total développé 320 cm. <br>
                            La longueur $L$ vaut $x + 40$ cm. L'équation du périmètre s'écrit : $4x + 80 = 320$.
                        </p>
                    </div>
                </div>
            </div>

            <!-- Questions Guidées -->
            <div class="space-y-4 text-xs">
                <h4 class="font-bold text-slate-900 text-sm">Questions d'Investigation :</h4>

                <div class="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                    <p class="font-semibold text-slate-900">1. Résoudre $4x + 80 = 320$ pour déterminer la largeur $x$ et la longueur $L$.</p>
                    <details class="text-slate-600 bg-white p-3 rounded-lg border border-slate-200">
                        <summary class="cursor-pointer font-bold text-amber-700">Afficher la résolution</summary>
                        <p class="mt-2 text-slate-800 font-mono">$4x = 240 \implies x = 60$ cm et $L = 100$ cm.</p>
                    </details>
                </div>
            </div>
        </section>

        <!-- ACTIVITÉ 3 : TERTIAIRE / ÉLECTROTECHNIQUE (MELEC / MTNE / LOGISTIQUE) -->
        <section class="bg-white p-6 md:p-8 rounded-3xl border border-slate-200 card-shadow space-y-6">
            <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-4">
                <div class="flex items-center gap-3">
                    <div class="w-10 h-10 bg-rose-100 text-rose-700 rounded-xl flex items-center justify-center font-bold text-lg">3</div>
                    <div>
                        <span class="text-xs font-bold text-rose-600 uppercase tracking-wider">Activité 3 • Seuil de Rentabilité par Inéquation (MELEC / MTNE)</span>
                        <h3 class="text-xl font-bold font-heading text-slate-900">Inéquation de Rentabilité de Location de Materiel</h3>
                    </div>
                </div>
                <div class="flex items-center gap-1">
                    <span class="px-2.5 py-1 bg-sky-100 text-sky-800 text-[11px] font-bold rounded-full">C1 S'approprier</span>
                    <span class="px-2.5 py-1 bg-rose-100 text-rose-800 text-[11px] font-bold rounded-full">C4 Valider</span>
                    <span class="px-2.5 py-1 bg-emerald-100 text-emerald-800 text-[11px] font-bold rounded-full">C5 Communiquer</span>
                </div>
            </div>

            <!-- Contextualisation Pro -->
            <div class="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-3 text-xs leading-relaxed">
                <div class="flex items-start gap-3">
                    <i class="fa-solid fa-chart-line text-2xl text-rose-600 mt-1"></i>
                    <div>
                        <h4 class="font-bold text-slate-900 text-sm">Mise en Situation :</h4>
                        <p class="text-slate-700 mt-1">
                            Une entreprise étudie la location d'une nacelle pour des chantiers. <br>
                            • <strong>Prestataire A :</strong> $C_A(x) = 40x + 180$ € ($x$ est le nombre de jours). <br>
                            • <strong>Prestataire B :</strong> $C_B(x) = 65x$ €. <br>
                            <em>Pour combien de jours $x$ la formule A est-elle strictement plus avantageuse que la formule B ($C_A(x) < C_B(x)$) ?</em>
                        </p>
                    </div>
                </div>
            </div>

            <!-- Questions Guidées -->
            <div class="space-y-4 text-xs">
                <h4 class="font-bold text-slate-900 text-sm">Questions d'Investigation :</h4>

                <div class="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                    <p class="font-semibold text-slate-900">1. Poser et résoudre l'inéquation $40x + 180 < 65x$.</p>
                    <details class="text-slate-600 bg-white p-3 rounded-lg border border-slate-200">
                        <summary class="cursor-pointer font-bold text-rose-700">Afficher la résolution complète</summary>
                        <div class="mt-2 space-y-1 text-slate-800 font-mono">
                            <p>$180 < 65x - 40x \implies 25x > 180$</p>
                            <p>$x > \frac{180}{25} \implies \mathbf{x > 7,2 \text{ jours}}$.</p>
                        </div>
                    </details>
                </div>

                <div class="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                    <p class="font-semibold text-slate-900">2. Conclure sous forme de conseil au responsable de chantier.</p>
                    <details class="text-slate-600 bg-white p-3 rounded-lg border border-slate-200">
                        <summary class="cursor-pointer font-bold text-rose-700">Afficher la conclusion</summary>
                        <p class="mt-2 text-slate-800 font-semibold text-emerald-800">Le prestataire A est plus avantageux à partir de <strong>8 jours d'utilisation</strong> ($x \geqslant 8$).</p>
                    </details>
                </div>
            </div>
        </section>

    </main>

</body>
</html>