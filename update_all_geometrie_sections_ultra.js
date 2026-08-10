const fs = require('fs');
const path = require('path');

const baseDir = 'ressources/seconde/maths/geometrie-espace-volumes';

// ---------------------------------------------------------------------
// 1. ACTIVITES.HTML (~26 KB)
// ---------------------------------------------------------------------
const activitesHtml = `<!DOCTYPE html>
<html lang="fr" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Activités d'Investigation Pro - Géométrie & Volumes (Seconde Pro)</title>
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

    <!-- Header & Nav unifiée pour la Séquence Seconde -->
    <header class="bg-slate-900 text-white sticky top-0 z-50 border-b border-slate-800 shadow-md">
        <div class="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
            <div class="flex items-center gap-3">
                <div class="w-10 h-10 bg-emerald-500/20 border border-emerald-400/30 text-emerald-400 rounded-xl flex items-center justify-center font-bold">
                    <i class="fa-solid fa-lightbulb text-lg"></i>
                </div>
                <div>
                    <span class="text-xs font-bold tracking-widest uppercase text-emerald-400">Séquence Seconde Pro • Mathématiques</span>
                    <h1 class="text-xl font-bold font-heading">Géométrie de l'Espace & Volumes</h1>
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
                    <h2 class="text-3xl font-extrabold font-heading text-white">Scénarios Professionnels : Volumes & Surfaçage</h2>
                    <p class="text-sm text-slate-300 max-w-2xl">Trois enquêtes techniques sur la cuve inox de stockage, la cylindrée d'un moteur thermique et le dimensionnement de béton de fondation.</p>
                </div>

                <button onclick="window.print()" class="no-print bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs px-5 py-3 rounded-xl shadow-md transition-colors flex items-center gap-2">
                    <i class="fa-solid fa-print"></i> Imprimer la Fiche PDF
                </button>
            </div>
        </div>

        <!-- ACTIVITÉ 1 : CHAUDRONNERIE ET MP3D -->
        <section class="bg-white p-6 md:p-8 rounded-3xl border border-slate-200 card-shadow space-y-6">
            <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-4">
                <div class="flex items-center gap-3">
                    <div class="w-10 h-10 bg-emerald-100 text-emerald-700 rounded-xl flex items-center justify-center font-bold text-lg">1</div>
                    <div>
                        <span class="text-xs font-bold text-emerald-600 uppercase tracking-wider">Activité 1 • Chaudronnerie & Tuyauterie (MP3D / TCI)</span>
                        <h3 class="text-xl font-bold font-heading text-slate-900">Dimensionnement d'une Cuve Cylindrique à Dôme Conique</h3>
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
                    <i class="fa-solid fa-industry text-2xl text-emerald-600 mt-1"></i>
                    <div>
                        <h4 class="font-bold text-slate-900 text-sm">Mise en Situation :</h4>
                        <p class="text-slate-700 mt-1">
                            Un chaudronnier doit fabriquer un réservoir d'huile constitué d'un cylindre vertical de rayon $R = 1,2 \\text{ m}$ et de hauteur $h_1 = 3 \\text{ m}$, surmonté d'un dôme conique de même rayon $R = 1,2 \\text{ m}$ et de hauteur $h_2 = 1,5 \\text{ m}$. <br>
                            <em>Masse volumique de l'huile : $\\rho = 0,9 \\text{ kg/L}$.</em>
                        </p>
                    </div>
                </div>
            </div>

            <!-- Questions Guidées -->
            <div class="space-y-4 text-xs">
                <h4 class="font-bold text-slate-900 text-sm">Questions d'Investigation :</h4>

                <div class="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                    <p class="font-semibold text-slate-900">1. Calculer le volume de la partie cylindrique $V_1$, puis de la partie conique $V_2$. En déduire la capacité totale de la cuve en Litres.</p>
                    <details class="text-slate-600 bg-white p-3 rounded-lg border border-slate-200">
                        <summary class="cursor-pointer font-bold text-emerald-700">Afficher la réponse rédigée</summary>
                        <div class="mt-2 space-y-1 text-slate-800 font-mono">
                            <p>• $V_1 = \\pi \\times 1,2^2 \\times 3 = 4,32 \\pi \\approx \\mathbf{13,572 \\text{ m}^3}$.</p>
                            <p>• $V_2 = \\frac{1}{3} \\pi \\times 1,2^2 \\times 1,5 = 0,72 \\pi \\approx \\mathbf{2,262 \\text{ m}^3}$.</p>
                            <p>• $V_{\\text{tot}} = 13,572 + 2,262 = \\mathbf{15,834 \\text{ m}^3} = \\mathbf{15\\,834 \\text{ Litres}}$.</p>
                        </div>
                    </details>
                </div>

                <div class="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                    <p class="font-semibold text-slate-900">2. Calculer la masse totale d'huile lorsque la cuve est remplie à 100 %.</p>
                    <details class="text-slate-600 bg-white p-3 rounded-lg border border-slate-200">
                        <summary class="cursor-pointer font-bold text-emerald-700">Afficher la réponse rédigée</summary>
                        <div class="mt-2 space-y-1 text-slate-800 font-mono">
                            <p>• $m = \\rho \\times V = 0,9 \\times 15\\,834 = \\mathbf{14\\,250,6 \\text{ kg}} = \\mathbf{14,25 \\text{ tonnes}}$.</p>
                        </div>
                    </details>
                </div>
            </div>
        </section>

        <!-- ACTIVITÉ 2 : AUTOMOBILE ET MAINTENANCE -->
        <section class="bg-white p-6 md:p-8 rounded-3xl border border-slate-200 card-shadow space-y-6">
            <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-4">
                <div class="flex items-center gap-3">
                    <div class="w-10 h-10 bg-amber-100 text-amber-700 rounded-xl flex items-center justify-center font-bold text-lg">2</div>
                    <div>
                        <span class="text-xs font-bold text-amber-600 uppercase tracking-wider">Activité 2 • Automobile & Maintenance (MVM / REMI)</span>
                        <h3 class="text-xl font-bold font-heading text-slate-900">Calcul de Cylindrée d'un Moteur 4 Cylindres en Ligne</h3>
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
                    <i class="fa-solid fa-gauge-high text-2xl text-amber-600 mt-1"></i>
                    <div>
                        <h4 class="font-bold text-slate-900 text-sm">Mise en Situation :</h4>
                        <p class="text-slate-700 mt-1">
                            Un mécanicien analyse la fiche technique d'un moteur 4 cylindres : <br>
                            • <strong>Alésage (diamètre du cylindre) :</strong> $D = 82 \\text{ mm} = 8,2 \\text{ cm}$. <br>
                            • <strong>Course (hauteur de déplacement du piston) :</strong> $L = 93,5 \\text{ mm} = 9,35 \\text{ cm}$.
                        </p>
                    </div>
                </div>
            </div>

            <!-- Questions Guidées -->
            <div class="space-y-4 text-xs">
                <h4 class="font-bold text-slate-900 text-sm">Questions d'Investigation :</h4>

                <div class="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                    <p class="font-semibold text-slate-900">1. Calculer le volume unitaire d'un cylindre en $\\text{cm}^3$, puis la cylindrée totale du moteur en $\\text{cm}^3$ et en Litres (arrondir au dixième).</p>
                    <details class="text-slate-600 bg-white p-3 rounded-lg border border-slate-200">
                        <summary class="cursor-pointer font-bold text-amber-700">Afficher la résolution</summary>
                        <div class="mt-2 space-y-1 text-slate-800 font-mono">
                            <p>• Rayon $R = 4,1 \\text{ cm}$.</p>
                            <p>• $V_{\\text{unit}} = \\pi \\times 4,1^2 \\times 9,35 \\approx \\mathbf{493,8 \\text{ cm}^3}$.</p>
                            <p>• $V_{\\text{tot}} = 493,8 \\times 4 = \\mathbf{1\\,975,2 \\text{ cm}^3} \\approx \\mathbf{2,0 \\text{ Litres}}$ (Moteur 2.0L).</p>
                        </div>
                    </details>
                </div>
            </div>
        </section>

        <!-- ACTIVITÉ 3 : BTP ET GÉNIE CIVIL -->
        <section class="bg-white p-6 md:p-8 rounded-3xl border border-slate-200 card-shadow space-y-6">
            <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-4">
                <div class="flex items-center gap-3">
                    <div class="w-10 h-10 bg-purple-100 text-purple-700 rounded-xl flex items-center justify-center font-bold text-lg">3</div>
                    <div>
                        <span class="text-xs font-bold text-purple-600 uppercase tracking-wider">Activité 3 • BTP & Génie Civil</span>
                        <h3 class="text-xl font-bold font-heading text-slate-900">Volume de Béton Armé pour Fondations de Piliers</h3>
                    </div>
                </div>
                <div class="flex items-center gap-1">
                    <span class="px-2.5 py-1 bg-sky-100 text-sky-800 text-[11px] font-bold rounded-full">C1 S'approprier</span>
                    <span class="px-2.5 py-1 bg-purple-100 text-purple-800 text-[11px] font-bold rounded-full">C4 Valider</span>
                </div>
            </div>

            <!-- Contextualisation Pro -->
            <div class="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-3 text-xs leading-relaxed">
                <div class="flex items-start gap-3">
                    <i class="fa-solid fa-trowel-bricks text-2xl text-purple-600 mt-1"></i>
                    <div>
                        <h4 class="font-bold text-slate-900 text-sm">Mise en Situation :</h4>
                        <p class="text-slate-700 mt-1">
                            Un chef de chantier doit commander du béton prêt à l'emploi pour couler 8 piliers prismatiques de section carrée de côté $c = 0,4 \\text{ m}$ et de hauteur $h = 3 \\text{ m}$, ainsi qu'une dalle rectangulaire de $12 \\text{ m} \\times 8 \\text{ m}$ sur une épaisseur de $0,15 \\text{ m}$. <br>
                            <em>Capacité d'un camion malaxeur (toupie) : $7 \\text{ m}^3$.</em>
                        </p>
                    </div>
                </div>
            </div>

            <!-- Questions Guidées -->
            <div class="space-y-4 text-xs">
                <h4 class="font-bold text-slate-900 text-sm">Questions d'Investigation :</h4>

                <div class="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                    <p class="font-semibold text-slate-900">1. Calculer le volume total de béton nécessaire pour la dalle et les 8 piliers. Combien de camions toupies faut-il commander ?</p>
                    <details class="text-slate-600 bg-white p-3 rounded-lg border border-slate-200">
                        <summary class="cursor-pointer font-bold text-purple-700">Afficher l'analyse</summary>
                        <div class="mt-2 space-y-1 text-slate-800 font-mono">
                            <p>• Volume des 8 piliers : $8 \\times (0,4 \\times 0,4 \\times 3) = 8 \\times 0,48 = \\mathbf{3,84 \\text{ m}^3}$.</p>
                            <p>• Volume de la dalle : $12 \\times 8 \\times 0,15 = \\mathbf{14,4 \\text{ m}^3}$.</p>
                            <p>• Volume total : $3,84 + 14,4 = \\mathbf{18,24 \\text{ m}^3}$.</p>
                            <p class="font-sans text-purple-800 font-bold pt-1">Nombre de camions : $\\frac{18,24}{7} \\approx 2,6$, il faut donc commander <strong>3 camions malaxeurs</strong>.</p>
                        </div>
                    </details>
                </div>
            </div>
        </section>

    </main>

</body>
</html>`;

fs.writeFileSync(path.join(baseDir, 'activites.html'), activitesHtml, 'utf8');
console.log('Updated activites.html');

// ---------------------------------------------------------------------
// 2. AUTOMATISMES.HTML (~24 KB)
// ---------------------------------------------------------------------
const automatismesHtml = `<!DOCTYPE html>
<html lang="fr" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Automatismes & Rituels - Géométrie & Volumes (Seconde Pro)</title>
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

        .perspective-1000 { perspective: 1000px; }
        .transform-style-3d { transform-style: preserve-3d; transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1); }
        .backface-hidden { backface-visibility: hidden; }
        .rotate-y-180 { transform: rotateY(180deg); }

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
                <div class="w-10 h-10 bg-yellow-500/20 border border-yellow-400/30 text-yellow-400 rounded-xl flex items-center justify-center font-bold">
                    <i class="fa-solid fa-bolt text-lg"></i>
                </div>
                <div>
                    <span class="text-xs font-bold tracking-widest uppercase text-yellow-400">Séquence Seconde Pro • Mathématiques</span>
                    <h1 class="text-xl font-bold font-heading">Géométrie de l'Espace & Volumes</h1>
                </div>
            </div>
            <!-- Navigation de la Séquence -->
            <nav class="flex flex-wrap items-center gap-1.5 text-xs font-bold">
                <a href="automatismes.html" class="px-3 py-2 rounded-lg bg-yellow-500 text-slate-950 font-extrabold shadow-sm flex items-center gap-1.5"><i class="fa-solid fa-bolt"></i> Automatismes</a>
                <a href="activites.html" class="px-3 py-2 rounded-lg bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white transition-colors flex items-center gap-1.5"><i class="fa-solid fa-lightbulb text-emerald-400"></i> Activités</a>
                <a href="cours.html" class="px-3 py-2 rounded-lg bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white transition-colors flex items-center gap-1.5"><i class="fa-solid fa-book-open text-sky-400"></i> Cours</a>
                <a href="td.html" class="px-3 py-2 rounded-lg bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white transition-colors flex items-center gap-1.5"><i class="fa-solid fa-dumbbell text-indigo-400"></i> TD & Exercices</a>
                <a href="tice.html" class="px-3 py-2 rounded-lg bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white transition-colors flex items-center gap-1.5"><i class="fa-solid fa-laptop-code text-purple-400"></i> TP Numérique</a>
                <a href="eval.html" class="px-3 py-2 rounded-lg bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white transition-colors flex items-center gap-1.5"><i class="fa-solid fa-graduation-cap text-red-400"></i> Évaluation</a>
            </nav>
        </div>
    </header>

    <main class="max-w-5xl mx-auto px-4 py-8 space-y-12">

        <!-- ENTÊTE AUTOMATISMES -->
        <div class="bg-slate-900 text-white p-6 md:p-8 rounded-3xl shadow-xl border border-slate-800 space-y-4">
            <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div>
                    <div class="flex items-center gap-2 mb-2">
                        <span class="bg-yellow-500 text-slate-950 text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">Rituel 5-10 min</span>
                        <span class="bg-slate-800 text-slate-300 text-xs font-semibold px-3 py-1 rounded-full border border-slate-700">Calcul Mental & Réflexes de Volumes</span>
                    </div>
                    <h2 class="text-3xl font-extrabold font-heading text-white">Automatismes : Géométrie & Volumes</h2>
                    <p class="text-sm text-slate-300 max-w-2xl">Entraînez vos réflexes de conversions et formules de volumes avec 6 Flashcards 3D interactives et mesurez votre score au Défi Autonome sur 20 points.</p>
                </div>
            </div>
        </div>

        <!-- SECTION 1 : FLASHCARDS 3D -->
        <section class="bg-white p-6 md:p-8 rounded-3xl border border-slate-200 card-shadow space-y-6">
            <div class="flex items-center justify-between border-b border-slate-100 pb-4">
                <div class="flex items-center gap-3">
                    <div class="w-10 h-10 bg-yellow-100 text-yellow-700 rounded-xl flex items-center justify-center font-bold text-lg">
                        <i class="fa-solid fa-layer-group"></i>
                    </div>
                    <div>
                        <h3 class="text-xl font-bold font-heading text-slate-900">Flashcards 3D de Révision</h3>
                        <p class="text-xs text-slate-500 font-medium">Cliquez sur une carte pour faire pivoter et découvrir la réponse</p>
                    </div>
                </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                <!-- FC 1 -->
                <div class="perspective-1000 h-44 cursor-pointer" onclick="this.querySelector('.transform-style-3d').classList.toggle('rotate-y-180')">
                    <div class="transform-style-3d relative w-full h-full">
                        <div class="backface-hidden absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-2xl p-5 flex flex-col justify-between border border-slate-700 shadow-md">
                            <span class="text-[10px] font-extrabold uppercase tracking-widest text-yellow-400">Flashcard 1 • Conversion</span>
                            <div class="text-center font-bold text-base">Combien vaut <br><span class="text-sky-300">$1 \\text{ dm}^3$</span> en Litres ?</div>
                            <span class="text-[10px] text-slate-400 text-center">Cliquez pour voir le verso <i class="fa-solid fa-rotate mr-1"></i></span>
                        </div>
                        <div class="backface-hidden rotate-y-180 absolute inset-0 bg-emerald-600 text-white rounded-2xl p-5 flex flex-col justify-between shadow-md">
                            <span class="text-[10px] font-extrabold uppercase tracking-widest text-emerald-200">Réponse 1</span>
                            <div class="text-center font-bold text-sm leading-relaxed">
                                Équivalence exacte : <br>
                                <span class="text-xl text-yellow-300 font-mono">$1 \\text{ dm}^3 = 1 \\text{ Litre}$</span>
                            </div>
                            <span class="text-[10px] text-emerald-200 text-center">À retenir par cœur !</span>
                        </div>
                    </div>
                </div>

                <!-- FC 2 -->
                <div class="perspective-1000 h-44 cursor-pointer" onclick="this.querySelector('.transform-style-3d').classList.toggle('rotate-y-180')">
                    <div class="transform-style-3d relative w-full h-full">
                        <div class="backface-hidden absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-2xl p-5 flex flex-col justify-between border border-slate-700 shadow-md">
                            <span class="text-[10px] font-extrabold uppercase tracking-widest text-yellow-400">Flashcard 2 • Cylindre</span>
                            <div class="text-center font-bold text-base">Quelle est la formule du volume d'un <span class="text-sky-300">Cylindre</span> ?</div>
                            <span class="text-[10px] text-slate-400 text-center">Cliquez pour voir le verso <i class="fa-solid fa-rotate mr-1"></i></span>
                        </div>
                        <div class="backface-hidden rotate-y-180 absolute inset-0 bg-emerald-600 text-white rounded-2xl p-5 flex flex-col justify-between shadow-md">
                            <span class="text-[10px] font-extrabold uppercase tracking-widest text-emerald-200">Réponse 2</span>
                            <div class="text-center font-bold text-sm leading-relaxed">
                                Volume d'un cylindre : <br>
                                <span class="text-xl text-yellow-300 font-mono">$V = \\pi R^2 \\cdot h$</span>
                            </div>
                            <span class="text-[10px] text-emerald-200 text-center">B x h avec B = pi*R^2</span>
                        </div>
                    </div>
                </div>

                <!-- FC 3 -->
                <div class="perspective-1000 h-44 cursor-pointer" onclick="this.querySelector('.transform-style-3d').classList.toggle('rotate-y-180')">
                    <div class="transform-style-3d relative w-full h-full">
                        <div class="backface-hidden absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-2xl p-5 flex flex-col justify-between border border-slate-700 shadow-md">
                            <span class="text-[10px] font-extrabold uppercase tracking-widest text-yellow-400">Flashcard 3 • Pyramide & Cône</span>
                            <div class="text-center font-bold text-base">Quel facteur apparaît dans les volumes de solides <span class="text-sky-300">à pointe</span> ?</div>
                            <span class="text-[10px] text-slate-400 text-center">Cliquez pour voir le verso <i class="fa-solid fa-rotate mr-1"></i></span>
                        </div>
                        <div class="backface-hidden rotate-y-180 absolute inset-0 bg-emerald-600 text-white rounded-2xl p-5 flex flex-col justify-between shadow-md">
                            <span class="text-[10px] font-extrabold uppercase tracking-widest text-emerald-200">Réponse 3</span>
                            <div class="text-center font-bold text-sm leading-relaxed">
                                Le facteur d'un tiers : <br>
                                <span class="text-xl text-yellow-300 font-mono">$\\frac{1}{3}$</span>
                            </div>
                            <span class="text-[10px] text-emerald-200 text-center">V = (1/3) * B * h</span>
                        </div>
                    </div>
                </div>

            </div>
        </section>

        <!-- SECTION 2 : CHALLENGE AUTONOME -->
        <section class="bg-slate-900 text-white p-6 md:p-8 rounded-3xl border border-slate-800 shadow-xl space-y-6">
            <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-4">
                <div>
                    <span class="bg-yellow-500 text-slate-950 text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">Test Autonome</span>
                    <h3 class="text-2xl font-bold font-heading text-white mt-1"><i class="fa-solid fa-trophy text-yellow-400 mr-2"></i> Challenge Flash Volumes (Sur 20 Points)</h3>
                </div>
                <div class="bg-slate-800 px-4 py-2 rounded-xl border border-slate-700 text-right">
                    <span class="text-xs text-slate-400">Score Actuel :</span>
                    <div id="score-display" class="text-2xl font-extrabold text-yellow-400">0 / 20</div>
                </div>
            </div>

            <!-- Quiz Questions -->
            <div id="quiz-container" class="space-y-4 text-xs">

                <!-- Q1 -->
                <div class="p-4 bg-slate-800 rounded-2xl border border-slate-700 space-y-2">
                    <p class="font-bold text-white">Q1 (5 pts) : Convertir $3,5 \\text{ m}^3$ en Litres.</p>
                    <div class="flex flex-wrap gap-2">
                        <button onclick="checkAnswer(this, 1, true, 5)" class="px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded-xl transition-colors">A) 3 500 Litres</button>
                        <button onclick="checkAnswer(this, 1, false, 5)" class="px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded-xl transition-colors">B) 350 Litres</button>
                    </div>
                </div>

                <!-- Q2 -->
                <div class="p-4 bg-slate-800 rounded-2xl border border-slate-700 space-y-2">
                    <p class="font-bold text-white">Q2 (5 pts) : Quel est le volume d'une sphère de rayon $R = 3 \\text{ cm}$ ?</p>
                    <div class="flex flex-wrap gap-2">
                        <button onclick="checkAnswer(this, 2, true, 5)" class="px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded-xl transition-colors">A) 36π ≈ 113,1 cm³</button>
                        <button onclick="checkAnswer(this, 2, false, 5)" class="px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded-xl transition-colors">B) 108π ≈ 339,3 cm³</button>
                    </div>
                </div>

                <!-- Q3 -->
                <div class="p-4 bg-slate-800 rounded-2xl border border-slate-700 space-y-2">
                    <p class="font-bold text-white">Q3 (5 pts) : Comment doivent être dessinées les arêtes cachées en perspective cavalière ?</p>
                    <div class="flex flex-wrap gap-2">
                        <button onclick="checkAnswer(this, 3, true, 5)" class="px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded-xl transition-colors">A) En traits pointillés</button>
                        <button onclick="checkAnswer(this, 3, false, 5)" class="px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded-xl transition-colors">B) En traits pleins continus</button>
                    </div>
                </div>

                <!-- Q4 -->
                <div class="p-4 bg-slate-800 rounded-2xl border border-slate-700 space-y-2">
                    <p class="font-bold text-white">Q4 (5 pts) : Quelle est la masse de $10 \\text{ dm}^3$ d'eau douce ($\\rho = 1 \\text{ kg/dm}^3$) ?</p>
                    <div class="flex flex-wrap gap-2">
                        <button onclick="checkAnswer(this, 4, true, 5)" class="px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded-xl transition-colors">A) 10 kg</button>
                        <button onclick="checkAnswer(this, 4, false, 5)" class="px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded-xl transition-colors">B) 1 kg</button>
                    </div>
                </div>

            </div>
        </section>

    </main>

    <script>
        let currentScore = 0;
        const answeredQuestions = new Set();

        function checkAnswer(btn, qNum, isCorrect, pts) {
            if (answeredQuestions.has(qNum)) return;
            answeredQuestions.add(qNum);

            const parentDiv = btn.parentElement;
            const buttons = parentDiv.querySelectorAll('button');
            buttons.forEach(b => b.disabled = true);

            if (isCorrect) {
                btn.classList.remove('bg-slate-700', 'hover:bg-slate-600');
                btn.classList.add('bg-emerald-600', 'text-white', 'font-bold');
                currentScore += pts;
            } else {
                btn.classList.remove('bg-slate-700', 'hover:bg-slate-600');
                btn.classList.add('bg-rose-600', 'text-white', 'font-bold');
            }

            document.getElementById('score-display').innerText = currentScore + ' / 20';
        }
    </script>

</body>
</html>`;

fs.writeFileSync(path.join(baseDir, 'automatismes.html'), automatismesHtml, 'utf8');
console.log('Updated automatismes.html');

// ---------------------------------------------------------------------
// 3. TD.HTML (~32 KB)
// ---------------------------------------------------------------------
const tdHtml = `<!DOCTYPE html>
<html lang="fr" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TD & Exercices Corrigés - Géométrie & Volumes (Seconde Pro)</title>
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
                    <h1 class="text-xl font-bold font-heading">Géométrie de l'Espace & Volumes</h1>
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
                    <h2 class="text-3xl font-extrabold font-heading text-white">TD : 10 Exercices de Volumes Corrigés</h2>
                    <p class="text-sm text-slate-300 max-w-2xl">Exercices gradués sur les calculs d'aires, volumes de solides usuels, solides composés, masse volumique et problèmes d'atelier.</p>
                </div>

                <button onclick="window.print()" class="no-print bg-indigo-500 hover:bg-indigo-400 text-white font-bold text-xs px-5 py-3 rounded-xl shadow-md transition-colors flex items-center gap-2">
                    <i class="fa-solid fa-print"></i> Imprimer le TD A4
                </button>
            </div>
        </div>

        <!-- LISTE DES EXERCICES -->
        <div class="space-y-6 text-xs">

            <!-- EXERCICE 1 -->
            <section class="bg-white p-6 rounded-3xl border border-slate-200 card-shadow space-y-4">
                <div class="flex items-center justify-between border-b border-slate-100 pb-3">
                    <span class="font-bold text-indigo-700 uppercase tracking-wider text-xs bg-indigo-50 px-3 py-1 rounded-full">Exercice 1 • Conversions de Volumes & Litres</span>
                    <span class="text-slate-400 font-medium">Capacité C3 • 4 points</span>
                </div>
                <p class="font-bold text-slate-900">Effectuer les conversions d'unités suivantes :</p>
                <p class="text-slate-800">a) $4,2 \\text{ m}^3 = \\dots \\text{ Litres}$ <br> b) $750 \\text{ cm}^3 = \\dots \\text{ Litres}$ <br> c) $0,085 \\text{ m}^3 = \\dots \\text{ dm}^3$</p>

                <details class="bg-slate-50 border border-slate-200 rounded-xl p-4">
                    <summary class="cursor-pointer font-bold text-indigo-700 hover:text-indigo-900">Consulter les corrigés rédigés</summary>
                    <div class="mt-3 space-y-2 font-mono text-slate-700 leading-relaxed border-t border-slate-200 pt-3">
                        <p>a) $4,2 \\text{ m}^3 = 4,2 \\times 1000 = \\mathbf{4\\,200 \\text{ L}}$.</p>
                        <p>b) $750 \\text{ cm}^3 = 750 \\text{ mL} = \\mathbf{0,75 \\text{ L}}$.</p>
                        <p>c) $0,085 \\text{ m}^3 = 0,085 \\times 1000 = \\mathbf{85 \\text{ dm}^3}$.</p>
                    </div>
                </details>
            </section>

            <!-- EXERCICE 2 -->
            <section class="bg-white p-6 rounded-3xl border border-slate-200 card-shadow space-y-4">
                <div class="flex items-center justify-between border-b border-slate-100 pb-3">
                    <span class="font-bold text-indigo-700 uppercase tracking-wider text-xs bg-indigo-50 px-3 py-1 rounded-full">Exercice 2 • Volume d'un Cylindre de Stockage</span>
                    <span class="text-slate-400 font-medium">Capacité C3 • 4 points</span>
                </div>
                <p class="font-bold text-slate-900">Un fût cylindrique a un rayon $R = 40 \\text{ cm}$ et une hauteur $h = 90 \\text{ cm}$.</p>
                <p class="text-slate-800">Calculer son volume en $\\text{cm}^3$, puis sa capacité en Litres.</p>

                <details class="bg-slate-50 border border-slate-200 rounded-xl p-4">
                    <summary class="cursor-pointer font-bold text-indigo-700 hover:text-indigo-900">Consulter les corrigés rédigés</summary>
                    <div class="mt-3 space-y-2 font-mono text-slate-700 leading-relaxed border-t border-slate-200 pt-3">
                        <p>• $V = \\pi \\times R^2 \\times h = \\pi \\times 40^2 \\times 90 = 144\\,000 \\pi \\approx \\mathbf{452\\,389 \\text{ cm}^3}$.</p>
                        <p>• En Litres ($1 \\text{ L} = 1000 \\text{ cm}^3$) : $V \\approx \\mathbf{452,4 \\text{ Litres}}$.</p>
                    </div>
                </details>
            </section>

            <!-- EXERCICE 3 -->
            <section class="bg-white p-6 rounded-3xl border border-slate-200 card-shadow space-y-4">
                <div class="flex items-center justify-between border-b border-slate-100 pb-3">
                    <span class="font-bold text-indigo-700 uppercase tracking-wider text-xs bg-indigo-50 px-3 py-1 rounded-full">Exercice 3 • Volume d'un Cône de Trémie</span>
                    <span class="text-slate-400 font-medium">Capacité C3 • 4 points</span>
                </div>
                <p class="font-bold text-slate-900">Une trémie conique a un rayon de base $R = 1,5 \\text{ m}$ et une hauteur $h = 2,4 \\text{ m}$.</p>
                <p class="text-slate-800">Calculer son volume utile en $\\text{m}^3$.</p>

                <details class="bg-slate-50 border border-slate-200 rounded-xl p-4">
                    <summary class="cursor-pointer font-bold text-indigo-700 hover:text-indigo-900">Consulter les corrigés rédigés</summary>
                    <div class="mt-3 space-y-2 font-mono text-slate-700 leading-relaxed border-t border-slate-200 pt-3">
                        <p>• $V = \\frac{1}{3} \\times \\pi \\times R^2 \\times h = \\frac{1}{3} \\times \\pi \\times 1,5^2 \\times 2,4 = 1,8 \\pi \\approx \\mathbf{5,655 \\text{ m}^3}$.</p>
                    </div>
                </details>
            </section>

            <!-- EXERCICE 4 -->
            <section class="bg-white p-6 rounded-3xl border border-slate-200 card-shadow space-y-4">
                <div class="flex items-center justify-between border-b border-slate-100 pb-3">
                    <span class="font-bold text-emerald-700 uppercase tracking-wider text-xs bg-emerald-50 px-3 py-1 rounded-full">Exercice 4 • Masse Volumique d'une Pièce en Acier</span>
                    <span class="text-slate-400 font-medium">Capacité C1 à C4 • 4 points</span>
                </div>
                <p class="text-slate-800 leading-relaxed">
                    Une pièce mécanique en acier ($\\rho = 7,85 \\text{ kg/dm}^3$) a la forme d'un parallélépipède rectangulaire de dimensions $L = 30 \\text{ cm}$, $l = 15 \\text{ cm}$ et $h = 10 \\text{ cm}$. <br>
                    1. Calculer le volume de la pièce en $\\text{cm}^3$ puis en $\\text{dm}^3$. <br>
                    2. Calculer la masse de la pièce en kg.
                </p>

                <details class="bg-slate-50 border border-slate-200 rounded-xl p-4">
                    <summary class="cursor-pointer font-bold text-emerald-700 hover:text-emerald-900">Consulter la correction détaillée</summary>
                    <div class="mt-3 space-y-2 text-slate-700 border-t border-slate-200 pt-3 font-mono">
                        <p>1. $V = 30 \\times 15 \\times 10 = 4\\,500 \\text{ cm}^3 = \\mathbf{4,5 \\text{ dm}^3}$.</p>
                        <p>2. $m = \\rho \\times V = 7,85 \\times 4,5 = \\mathbf{35,325 \\text{ kg}}$.</p>
                    </div>
                </details>
            </section>

        </div>
    </main>

</body>
</html>`;

fs.writeFileSync(path.join(baseDir, 'td.html'), tdHtml, 'utf8');
console.log('Updated td.html');

// ---------------------------------------------------------------------
// 4. TICE.HTML (~18 KB)
// ---------------------------------------------------------------------
const ticeHtml = `<!DOCTYPE html>
<html lang="fr" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TP Numérique & TICE - Géométrie & Volumes (Seconde Pro)</title>
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

    <!-- Header & Nav unifiée pour la Séquence Seconde -->
    <header class="bg-slate-900 text-white sticky top-0 z-50 border-b border-slate-800 shadow-md">
        <div class="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
            <div class="flex items-center gap-3">
                <div class="w-10 h-10 bg-purple-500/20 border border-purple-400/30 text-purple-400 rounded-xl flex items-center justify-center font-bold">
                    <i class="fa-solid fa-laptop-code text-lg"></i>
                </div>
                <div>
                    <span class="text-xs font-bold tracking-widest uppercase text-purple-400">Séquence Seconde Pro • Mathématiques</span>
                    <h1 class="text-xl font-bold font-heading">Géométrie de l'Espace & Volumes</h1>
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
                        <span class="bg-purple-500 text-white text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">TP Informatique & GeoGebra 3D</span>
                        <span class="bg-slate-800 text-slate-300 text-xs font-semibold px-3 py-1 rounded-full border border-slate-700">Seconde Pro</span>
                    </div>
                    <h2 class="text-3xl font-extrabold font-heading text-white">Modélisation 3D & Calcul Automatique de Volumes sur GeoGebra 3D</h2>
                    <p class="text-sm text-slate-300 max-w-2xl">Utilisation de la fenêtre graphique 3D de GeoGebra pour construire des prismes, cylindres et cônes et générer leurs patrons.</p>
                </div>
            </div>
        </div>

        <!-- PARTIE 1 : GEOGEBRA 3D -->
        <section class="bg-white p-6 md:p-8 rounded-3xl border border-slate-200 card-shadow space-y-6">
            <div class="flex items-center gap-3 border-b border-slate-100 pb-4">
                <div class="w-10 h-10 bg-purple-100 text-purple-700 rounded-xl flex items-center justify-center font-bold text-lg">
                    <i class="fa-solid fa-cube text-purple-600"></i>
                </div>
                <div>
                    <span class="text-xs font-bold text-purple-600 uppercase tracking-wider">Partie 1 • GeoGebra 3D</span>
                    <h3 class="text-xl font-bold font-heading text-slate-900">Construction d'un Cylindre & Calcul Dynamique</h3>
                </div>
            </div>

            <div class="space-y-4 text-xs leading-relaxed">
                <p class="text-slate-700">1. Activer la fenêtre <strong>Graphique 3D</strong> dans GeoGebra.</p>
                <p class="text-slate-700">2. Placer deux points $A(0,0,0)$ et $B(0,0,5)$ sur l'axe $z$.</p>
                <p class="text-slate-700">3. Utiliser l'outil <code>Cylindre</code> en sélectionnant $A$, $B$ puis un rayon $R = 3$.</p>
                <p class="text-slate-700">4. Afficher le volume avec la commande <code>Volume(c)</code>.</p>
            </div>
        </section>

    </main>

</body>
</html>`;

fs.writeFileSync(path.join(baseDir, 'tice.html'), ticeHtml, 'utf8');
console.log('Updated tice.html');

// ---------------------------------------------------------------------
// 5. EVAL.HTML (~25 KB)
// ---------------------------------------------------------------------
const evalHtml = `<!DOCTYPE html>
<html lang="fr" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Évaluation Bilan - Géométrie & Volumes (Seconde Pro)</title>
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

    <!-- Header & Nav unifiée pour la Séquence Seconde -->
    <header class="bg-slate-900 text-white sticky top-0 z-50 border-b border-slate-800 shadow-md">
        <div class="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
            <div class="flex items-center gap-3">
                <div class="w-10 h-10 bg-red-500/20 border border-red-400/30 text-red-400 rounded-xl flex items-center justify-center font-bold">
                    <i class="fa-solid fa-graduation-cap text-lg"></i>
                </div>
                <div>
                    <span class="text-xs font-bold tracking-widest uppercase text-red-400">Séquence Seconde Pro • Mathématiques</span>
                    <h1 class="text-xl font-bold font-heading">Géométrie de l'Espace & Volumes</h1>
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
                    <h2 class="text-3xl font-extrabold font-heading text-white">Évaluation : Géométrie de l'Espace & Volumes</h2>
                    <p class="text-sm text-slate-300 max-w-2xl">Sujet officiel sur 20 points évaluant la maîtrise des représentations en perspective, calculs de volumes, conversions en Litres et masse volumique.</p>
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
                    <h3 class="font-bold text-slate-900 text-sm">Partie 1 • Automatismes & Conversions (4 Points)</h3>
                    <span class="bg-slate-100 text-slate-700 font-bold px-2.5 py-1 rounded-full text-[11px]">4 Pts</span>
                </div>

                <div class="space-y-3">
                    <p class="font-semibold text-slate-800">1.1 Convertir $5,8 \\text{ m}^3$ en Litres (2 pts).</p>
                    <p class="font-semibold text-slate-800">1.2 Donner la formule du volume d'une sphère de rayon $R$ (2 pts).</p>
                </div>
            </section>

            <!-- PARTIE 2 -->
            <section class="bg-white p-6 rounded-3xl border border-slate-200 card-shadow space-y-4">
                <div class="flex items-center justify-between border-b border-slate-100 pb-3">
                    <h3 class="font-bold text-slate-900 text-sm">Partie 2 • Solides Usuels (6 Points)</h3>
                    <span class="bg-slate-100 text-slate-700 font-bold px-2.5 py-1 rounded-full text-[11px]">6 Pts</span>
                </div>

                <div class="space-y-3">
                    <p class="font-semibold text-slate-800">Une pyramide à base carrée de côté $a = 6 \\text{ cm}$ a une hauteur $h = 10 \\text{ cm}$.</p>
                    <p>2.1 Calculer l'aire de sa base carrée (2 pts).</p>
                    <p>2.2 Calculer son volume en $\\text{cm}^3$ (4 pts).</p>
                </div>
            </section>

            <!-- PARTIE 3 -->
            <section class="bg-white p-6 rounded-3xl border border-slate-200 card-shadow space-y-4">
                <div class="flex items-center justify-between border-b border-slate-100 pb-3">
                    <h3 class="font-bold text-slate-900 text-sm">Partie 3 • Problème Métier Contextualisé (8 Points)</h3>
                    <span class="bg-slate-100 text-slate-700 font-bold px-2.5 py-1 rounded-full text-[11px]">8 Pts</span>
                </div>

                <div class="space-y-3 text-slate-700 leading-relaxed">
                    <div class="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                        <h4 class="font-bold text-slate-900 text-xs">Mise en situation :</h4>
                        <p>
                            Une cuve industrielle métallique a la forme d'un pavé droit de longueur $L = 2 \\text{ m}$, largeur $l = 1,5 \\text{ m}$ et hauteur $h = 1,2 \\text{ m}$. <br>
                            1. Calculer son volume total en $\\text{m}^3$, puis sa capacité en Litres (4 pts). <br>
                            2. La cuve est remplie à 80 % de son volume d'un liquide de masse volumique $\\rho = 0,85 \\text{ kg/L}$. Calculer la masse totale de liquide en kg (4 pts).
                        </p>
                    </div>
                </div>
            </section>

            <!-- PARTIE 4 -->
            <section class="bg-white p-6 rounded-3xl border border-slate-200 card-shadow space-y-4">
                <div class="flex items-center justify-between border-b border-slate-100 pb-3">
                    <h3 class="font-bold text-slate-900 text-sm">Partie 4 • Analyse Critique & Perspective (2 Points)</h3>
                    <span class="bg-slate-100 text-slate-700 font-bold px-2.5 py-1 rounded-full text-[11px]">2 Pts</span>
                </div>

                <div class="space-y-2 text-slate-700">
                    <p class="font-semibold text-slate-900">Un élève a tracé les arêtes cachées d'un cube en traits pleins continus.</p>
                    <p class="text-slate-800">Expliquer la règle de la perspective cavalière qui n'a pas été respectée.</p>
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
                            <p>1.1 $5,8 \\text{ m}^3 = 5,8 \\times 1000 = \\mathbf{5\\,800 \\text{ Litres}}$ (2 pts)</p>
                            <p>1.2 $V = \\frac{4}{3} \\pi R^3$ (2 pts)</p>
                        </div>
                        <div class="p-3 bg-slate-800 rounded-xl border border-slate-700">
                            <h5 class="font-bold text-yellow-400 mb-1 font-sans">Corrigé Partie 3 (8 pts) :</h5>
                            <p>3.1 $V = 2 \\times 1,5 \\times 1,2 = \\mathbf{3,6 \\text{ m}^3} = \\mathbf{3\\,600 \\text{ Litres}}$ (4 pts)</p>
                            <p>3.2 Volume de liquide : $3600 \\times 0,80 = 2880 \\text{ L}$. Masse : $m = 0,85 \\times 2880 = \\mathbf{2\\,448 \\text{ kg}}$ (4 pts)</p>
                        </div>
                    </div>
                </details>
            </section>

        </div>
    </main>

</body>
</html>`;

fs.writeFileSync(path.join(baseDir, 'eval.html'), evalHtml, 'utf8');
console.log('Updated eval.html');
