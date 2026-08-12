const fs = require('fs');
const path = require('path');

const targetDir = path.join(__dirname, 'ressources', 'seconde', 'maths', 'geometrie-plane-trigonometrie');

if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
}

// ---------------------------------------------------------------------
// 1. AUTOMATISMES.HTML
// ---------------------------------------------------------------------
const automatismesHtml = `<!DOCTYPE html>
<html lang="fr" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Automatismes & Ritualisation - Géométrie Plane & Trigonométrie (2nde Pro)</title>
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
    <header class="bg-slate-900 text-white sticky top-0 z-50 border-b border-slate-800 shadow-md">
        <div class="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
            <div class="flex items-center gap-3">
                <div class="w-10 h-10 bg-yellow-500/20 border border-yellow-400/30 text-yellow-400 rounded-xl flex items-center justify-center font-bold">
                    <i class="fa-solid fa-bolt text-lg"></i>
                </div>
                <div>
                    <span class="text-xs font-bold tracking-widest uppercase text-yellow-400">Séquence 5 • Seconde Professionnelle Mathématiques</span>
                    <h1 class="text-xl font-bold font-heading">Géométrie Plane & Trigonométrie</h1>
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

        <!-- SCOREBOARD EN DIRECT -->
        <div class="bg-slate-900 text-white p-6 rounded-3xl shadow-xl border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
                <span class="bg-yellow-500 text-slate-950 text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">Entraînement Rituel 10 min</span>
                <h2 class="text-2xl font-extrabold font-heading text-white mt-1">Ritualisation : Trigonométrie & Géométrie Plane</h2>
            </div>
            <div class="flex items-center gap-4 bg-slate-800 px-5 py-3 rounded-2xl border border-slate-700">
                <i class="fa-solid fa-trophy text-yellow-400 text-2xl"></i>
                <div>
                    <span class="text-[10px] uppercase font-bold text-slate-400 block">Score Global</span>
                    <span id="global-score" class="text-xl font-extrabold text-yellow-400 font-mono">0 / 16</span>
                </div>
            </div>
        </div>

        <!-- MODULE 1 : 10 FLASHCARDS INTERACTIVES 3D -->
        <section class="bg-white p-6 md:p-8 rounded-3xl border border-slate-200 card-shadow space-y-6">
            <div class="flex items-center justify-between border-b border-slate-100 pb-4">
                <h3 class="text-xl font-bold font-heading text-slate-900 flex items-center gap-2">
                    <i class="fa-solid fa-clone text-yellow-500"></i> Module 1 : 10 Flashcards Mémoire (Trigonométrie & Théorèmes)
                </h3>
                <span class="text-xs font-bold text-slate-500">Cliquez sur une carte pour la retourner</span>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                <!-- FC 1 -->
                <div class="h-44 perspective-1000 cursor-pointer" onclick="flipCard(this)">
                    <div class="relative w-full h-full duration-500 transform-style-3d card-inner">
                        <div class="absolute inset-0 bg-slate-900 text-white rounded-2xl p-4 flex flex-col justify-between items-center text-center backface-hidden border border-slate-800 shadow">
                            <span class="text-[10px] font-bold text-yellow-400 uppercase tracking-widest">Flashcard 1</span>
                            <p class="text-xs font-bold font-heading">Que signifie le mnémonique SOH ?</p>
                            <span class="text-[10px] text-slate-400"><i class="fa-solid fa-rotate mr-1"></i> Recto</span>
                        </div>
                        <div class="absolute inset-0 bg-yellow-500 text-slate-950 rounded-2xl p-4 flex flex-col justify-between items-center text-center backface-hidden rotate-y-180 shadow">
                            <span class="text-[10px] font-extrabold uppercase tracking-widest">Réponse</span>
                            <p class="text-xs font-extrabold font-mono">$$\\sin(\\alpha) = \\frac{\\text{Opposé}}{\\text{Hypoténuse}}$$</p>
                            <span class="text-[10px] font-bold">Sinus = Opposé / Hyp</span>
                        </div>
                    </div>
                </div>

                <!-- FC 2 -->
                <div class="h-44 perspective-1000 cursor-pointer" onclick="flipCard(this)">
                    <div class="relative w-full h-full duration-500 transform-style-3d card-inner">
                        <div class="absolute inset-0 bg-slate-900 text-white rounded-2xl p-4 flex flex-col justify-between items-center text-center backface-hidden border border-slate-800 shadow">
                            <span class="text-[10px] font-bold text-yellow-400 uppercase tracking-widest">Flashcard 2</span>
                            <p class="text-xs font-bold font-heading">Que signifie le mnémonique CAH ?</p>
                            <span class="text-[10px] text-slate-400"><i class="fa-solid fa-rotate mr-1"></i> Recto</span>
                        </div>
                        <div class="absolute inset-0 bg-sky-500 text-slate-950 rounded-2xl p-4 flex flex-col justify-between items-center text-center backface-hidden rotate-y-180 shadow">
                            <span class="text-[10px] font-extrabold uppercase tracking-widest">Réponse</span>
                            <p class="text-xs font-extrabold font-mono">$$\\cos(\\alpha) = \\frac{\\text{Adjacente}}{\\text{Hypoténuse}}$$</p>
                            <span class="text-[10px] font-bold">Cosinus = Adjacente / Hyp</span>
                        </div>
                    </div>
                </div>

                <!-- FC 3 -->
                <div class="h-44 perspective-1000 cursor-pointer" onclick="flipCard(this)">
                    <div class="relative w-full h-full duration-500 transform-style-3d card-inner">
                        <div class="absolute inset-0 bg-slate-900 text-white rounded-2xl p-4 flex flex-col justify-between items-center text-center backface-hidden border border-slate-800 shadow">
                            <span class="text-[10px] font-bold text-yellow-400 uppercase tracking-widest">Flashcard 3</span>
                            <p class="text-xs font-bold font-heading">Que signifie le mnémonique TOA ?</p>
                            <span class="text-[10px] text-slate-400"><i class="fa-solid fa-rotate mr-1"></i> Recto</span>
                        </div>
                        <div class="absolute inset-0 bg-emerald-500 text-slate-950 rounded-2xl p-4 flex flex-col justify-between items-center text-center backface-hidden rotate-y-180 shadow">
                            <span class="text-[10px] font-extrabold uppercase tracking-widest">Réponse</span>
                            <p class="text-xs font-extrabold font-mono">$$\\tan(\\alpha) = \\frac{\\text{Opposé}}{\\text{Adjacente}}$$</p>
                            <span class="text-[10px] font-bold">Tangente = Opposé / Adj</span>
                        </div>
                    </div>
                </div>

                <!-- FC 4 -->
                <div class="h-44 perspective-1000 cursor-pointer" onclick="flipCard(this)">
                    <div class="relative w-full h-full duration-500 transform-style-3d card-inner">
                        <div class="absolute inset-0 bg-slate-900 text-white rounded-2xl p-4 flex flex-col justify-between items-center text-center backface-hidden border border-slate-800 shadow">
                            <span class="text-[10px] font-bold text-yellow-400 uppercase tracking-widest">Flashcard 4</span>
                            <p class="text-xs font-bold font-heading">Égalité du Théorème de Pythagore</p>
                            <span class="text-[10px] text-slate-400"><i class="fa-solid fa-rotate mr-1"></i> Recto</span>
                        </div>
                        <div class="absolute inset-0 bg-amber-500 text-slate-950 rounded-2xl p-4 flex flex-col justify-between items-center text-center backface-hidden rotate-y-180 shadow">
                            <span class="text-[10px] font-extrabold uppercase tracking-widest">Réponse</span>
                            <p class="text-xs font-extrabold font-mono">$$\\text{Hyp}^2 = a^2 + b^2$$</p>
                            <span class="text-[10px] font-bold">Triangle rectangle uniquement</span>
                        </div>
                    </div>
                </div>

                <!-- FC 5 -->
                <div class="h-44 perspective-1000 cursor-pointer" onclick="flipCard(this)">
                    <div class="relative w-full h-full duration-500 transform-style-3d card-inner">
                        <div class="absolute inset-0 bg-slate-900 text-white rounded-2xl p-4 flex flex-col justify-between items-center text-center backface-hidden border border-slate-800 shadow">
                            <span class="text-[10px] font-bold text-yellow-400 uppercase tracking-widest">Flashcard 5</span>
                            <p class="text-xs font-bold font-heading">Comment calculer un angle $\\alpha$ ?</p>
                            <span class="text-[10px] text-slate-400"><i class="fa-solid fa-rotate mr-1"></i> Recto</span>
                        </div>
                        <div class="absolute inset-0 bg-purple-500 text-white rounded-2xl p-4 flex flex-col justify-between items-center text-center backface-hidden rotate-y-180 shadow">
                            <span class="text-[10px] font-extrabold uppercase tracking-widest">Réponse</span>
                            <p class="text-[11px] font-bold font-mono">$\\alpha = \\arccos(\\text{Adj}/\\text{Hyp})$<br>$\\alpha = \\arctan(\\text{Opp}/\\text{Adj})$</p>
                            <span class="text-[10px] font-bold">Calculatrice en DEG</span>
                        </div>
                    </div>
                </div>

                <!-- FC 6 -->
                <div class="h-44 perspective-1000 cursor-pointer" onclick="flipCard(this)">
                    <div class="relative w-full h-full duration-500 transform-style-3d card-inner">
                        <div class="absolute inset-0 bg-slate-900 text-white rounded-2xl p-4 flex flex-col justify-between items-center text-center backface-hidden border border-slate-800 shadow">
                            <span class="text-[10px] font-bold text-yellow-400 uppercase tracking-widest">Flashcard 6</span>
                            <p class="text-xs font-bold font-heading">Formule de la pente en %</p>
                            <span class="text-[10px] text-slate-400"><i class="fa-solid fa-rotate mr-1"></i> Recto</span>
                        </div>
                        <div class="absolute inset-0 bg-indigo-500 text-white rounded-2xl p-4 flex flex-col justify-between items-center text-center backface-hidden rotate-y-180 shadow">
                            <span class="text-[10px] font-extrabold uppercase tracking-widest">Réponse</span>
                            <p class="text-xs font-extrabold font-mono">$$\\text{Pente }\\% = \\tan(\\alpha) \\times 100$$</p>
                            <span class="text-[10px] font-bold">Hauteur / Longueur $\\times 100$</span>
                        </div>
                    </div>
                </div>

                <!-- FC 7 -->
                <div class="h-44 perspective-1000 cursor-pointer" onclick="flipCard(this)">
                    <div class="relative w-full h-full duration-500 transform-style-3d card-inner">
                        <div class="absolute inset-0 bg-slate-900 text-white rounded-2xl p-4 flex flex-col justify-between items-center text-center backface-hidden border border-slate-800 shadow">
                            <span class="text-[10px] font-bold text-yellow-400 uppercase tracking-widest">Flashcard 7</span>
                            <p class="text-xs font-bold font-heading">Égalité de Thalès</p>
                            <span class="text-[10px] text-slate-400"><i class="fa-solid fa-rotate mr-1"></i> Recto</span>
                        </div>
                        <div class="absolute inset-0 bg-rose-500 text-white rounded-2xl p-4 flex flex-col justify-between items-center text-center backface-hidden rotate-y-180 shadow">
                            <span class="text-[10px] font-extrabold uppercase tracking-widest">Réponse</span>
                            <p class="text-[11px] font-bold font-mono">$$\\frac{AM}{AB} = \\frac{AN}{AC} = \\frac{MN}{BC}$$</p>
                            <span class="text-[10px] font-bold">Si $(MN) \\parallel (BC)$</span>
                        </div>
                    </div>
                </div>

                <!-- FC 8 -->
                <div class="h-44 perspective-1000 cursor-pointer" onclick="flipCard(this)">
                    <div class="relative w-full h-full duration-500 transform-style-3d card-inner">
                        <div class="absolute inset-0 bg-slate-900 text-white rounded-2xl p-4 flex flex-col justify-between items-center text-center backface-hidden border border-slate-800 shadow">
                            <span class="text-[10px] font-bold text-yellow-400 uppercase tracking-widest">Flashcard 8</span>
                            <p class="text-xs font-bold font-heading">Somme des angles d'un triangle ?</p>
                            <span class="text-[10px] text-slate-400"><i class="fa-solid fa-rotate mr-1"></i> Recto</span>
                        </div>
                        <div class="absolute inset-0 bg-teal-500 text-slate-950 rounded-2xl p-4 flex flex-col justify-between items-center text-center backface-hidden rotate-y-180 shadow">
                            <span class="text-[10px] font-extrabold uppercase tracking-widest">Réponse</span>
                            <p class="text-sm font-extrabold font-mono">$$180^\\circ$$</p>
                            <span class="text-[10px] font-bold">Dans tout triangle</span>
                        </div>
                    </div>
                </div>

                <!-- FC 9 -->
                <div class="h-44 perspective-1000 cursor-pointer" onclick="flipCard(this)">
                    <div class="relative w-full h-full duration-500 transform-style-3d card-inner">
                        <div class="absolute inset-0 bg-slate-900 text-white rounded-2xl p-4 flex flex-col justify-between items-center text-center backface-hidden border border-slate-800 shadow">
                            <span class="text-[10px] font-bold text-yellow-400 uppercase tracking-widest">Flashcard 9</span>
                            <p class="text-xs font-bold font-heading">Triangle rectangle isocèle ?</p>
                            <span class="text-[10px] text-slate-400"><i class="fa-solid fa-rotate mr-1"></i> Recto</span>
                        </div>
                        <div class="absolute inset-0 bg-orange-500 text-slate-950 rounded-2xl p-4 flex flex-col justify-between items-center text-center backface-hidden rotate-y-180 shadow">
                            <span class="text-[10px] font-extrabold uppercase tracking-widest">Réponse</span>
                            <p class="text-xs font-extrabold font-mono">Angles : $90^\circ, 45^\circ, 45^\circ$<br>Côtés : $a = b$</p>
                            <span class="text-[10px] font-bold">$\\tan(45^\circ) = 1$</span>
                        </div>
                    </div>
                </div>

                <!-- FC 10 -->
                <div class="h-44 perspective-1000 cursor-pointer" onclick="flipCard(this)">
                    <div class="relative w-full h-full duration-500 transform-style-3d card-inner">
                        <div class="absolute inset-0 bg-slate-900 text-white rounded-2xl p-4 flex flex-col justify-between items-center text-center backface-hidden border border-slate-800 shadow">
                            <span class="text-[10px] font-bold text-yellow-400 uppercase tracking-widest">Flashcard 10</span>
                            <p class="text-xs font-bold font-heading">Valeur exacte de $\\cos(60^\circ)$ ?</p>
                            <span class="text-[10px] text-slate-400"><i class="fa-solid fa-rotate mr-1"></i> Recto</span>
                        </div>
                        <div class="absolute inset-0 bg-pink-500 text-white rounded-2xl p-4 flex flex-col justify-between items-center text-center backface-hidden rotate-y-180 shadow">
                            <span class="text-[10px] font-extrabold uppercase tracking-widest">Réponse</span>
                            <p class="text-sm font-extrabold font-mono">$$\\cos(60^\circ) = 0{,}5 = \\sin(30^\circ)$$</p>
                            <span class="text-[10px] font-bold">Remarquable</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- MODULE 2 : 6 QCM FLASH AVEC FEEDBACK EN DIRECT -->
        <section class="bg-white p-6 md:p-8 rounded-3xl border border-slate-200 card-shadow space-y-6">
            <div class="flex items-center justify-between border-b border-slate-100 pb-4">
                <h3 class="text-xl font-bold font-heading text-slate-900 flex items-center gap-2">
                    <i class="fa-solid fa-list-check text-yellow-500"></i> Module 2 : 6 QCM de Calcul Rapide
                </h3>
                <span class="text-xs font-bold text-slate-500">Sélectionnez la bonne réponse</span>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <!-- Q1 -->
                <div class="p-5 bg-slate-50 rounded-2xl border border-slate-200 space-y-3">
                    <span class="text-[10px] font-extrabold bg-slate-200 text-slate-700 px-2.5 py-1 rounded-full uppercase">Question 1</span>
                    <p class="text-xs font-bold text-slate-800">Un triangle ABC est rectangle en B. Si $AB = 3\\text{ cm}$ et $BC = 4\\text{ cm}$, combien vaut $AC$ ?</p>
                    <div class="grid grid-cols-3 gap-2 text-xs font-bold">
                        <button onclick="checkQCM(this, false, 1)" class="p-2.5 bg-white border border-slate-300 rounded-xl hover:bg-slate-100 transition">A) $6\\text{ cm}$</button>
                        <button onclick="checkQCM(this, true, 1)" class="p-2.5 bg-white border border-slate-300 rounded-xl hover:bg-slate-100 transition">B) $5\\text{ cm}$</button>
                        <button onclick="checkQCM(this, false, 1)" class="p-2.5 bg-white border border-slate-300 rounded-xl hover:bg-slate-100 transition">C) $7\\text{ cm}$</button>
                    </div>
                </div>

                <!-- Q2 -->
                <div class="p-5 bg-slate-50 rounded-2xl border border-slate-200 space-y-3">
                    <span class="text-[10px] font-extrabold bg-slate-200 text-slate-700 px-2.5 py-1 rounded-full uppercase">Question 2</span>
                    <p class="text-xs font-bold text-slate-800">Dans un triangle rectangle, quel est le côté opposé à l'angle droit ?</p>
                    <div class="grid grid-cols-3 gap-2 text-xs font-bold">
                        <button onclick="checkQCM(this, false, 2)" class="p-2.5 bg-white border border-slate-300 rounded-xl hover:bg-slate-100 transition">A) L'adjacent</button>
                        <button onclick="checkQCM(this, true, 2)" class="p-2.5 bg-white border border-slate-300 rounded-xl hover:bg-slate-100 transition">B) L'hypoténuse</button>
                        <button onclick="checkQCM(this, false, 2)" class="p-2.5 bg-white border border-slate-300 rounded-xl hover:bg-slate-100 transition">C) La hauteur</button>
                    </div>
                </div>

                <!-- Q3 -->
                <div class="p-5 bg-slate-50 rounded-2xl border border-slate-200 space-y-3">
                    <span class="text-[10px] font-extrabold bg-slate-200 text-slate-700 px-2.5 py-1 rounded-full uppercase">Question 3</span>
                    <p class="text-xs font-bold text-slate-800">Si un toit monte de $1,20\\text{ m}$ sur une longueur horizontale de $12\\text{ m}$, quelle est sa pente ?</p>
                    <div class="grid grid-cols-3 gap-2 text-xs font-bold">
                        <button onclick="checkQCM(this, true, 3)" class="p-2.5 bg-white border border-slate-300 rounded-xl hover:bg-slate-100 transition">A) $10\\%$</button>
                        <button onclick="checkQCM(this, false, 3)" class="p-2.5 bg-white border border-slate-300 rounded-xl hover:bg-slate-100 transition">B) $12\\%$</button>
                        <button onclick="checkQCM(this, false, 3)" class="p-2.5 bg-white border border-slate-300 rounded-xl hover:bg-slate-100 transition">C) $15\\%$</button>
                    </div>
                </div>

                <!-- Q4 -->
                <div class="p-5 bg-slate-50 rounded-2xl border border-slate-200 space-y-3">
                    <span class="text-[10px] font-extrabold bg-slate-200 text-slate-700 px-2.5 py-1 rounded-full uppercase">Question 4</span>
                    <p class="text-xs font-bold text-slate-800">Quelle formule permet de calculer le côté opposé connaissant l'adjacente et l'angle ?</p>
                    <div class="grid grid-cols-3 gap-2 text-xs font-bold">
                        <button onclick="checkQCM(this, false, 4)" class="p-2.5 bg-white border border-slate-300 rounded-xl hover:bg-slate-100 transition">A) $\\text{Adj} \\times \\cos(\\alpha)$</button>
                        <button onclick="checkQCM(this, true, 4)" class="p-2.5 bg-white border border-slate-300 rounded-xl hover:bg-slate-100 transition">B) $\\text{Adj} \\times \\tan(\\alpha)$</button>
                        <button onclick="checkQCM(this, false, 4)" class="p-2.5 bg-white border border-slate-300 rounded-xl hover:bg-slate-100 transition">C) $\\text{Adj} / \\sin(\\alpha)$</button>
                    </div>
                </div>

                <!-- Q5 -->
                <div class="p-5 bg-slate-50 rounded-2xl border border-slate-200 space-y-3">
                    <span class="text-[10px] font-extrabold bg-slate-200 text-slate-700 px-2.5 py-1 rounded-full uppercase">Question 5</span>
                    <p class="text-xs font-bold text-slate-800">Thalès : Si $AM/AB = 1/3$ et $BC = 15\\text{ m}$, combien vaut $MN$ ?</p>
                    <div class="grid grid-cols-3 gap-2 text-xs font-bold">
                        <button onclick="checkQCM(this, false, 5)" class="p-2.5 bg-white border border-slate-300 rounded-xl hover:bg-slate-100 transition">A) $3\\text{ m}$</button>
                        <button onclick="checkQCM(this, true, 5)" class="p-2.5 bg-white border border-slate-300 rounded-xl hover:bg-slate-100 transition">B) $5\\text{ m}$</button>
                        <button onclick="checkQCM(this, false, 5)" class="p-2.5 bg-white border border-slate-300 rounded-xl hover:bg-slate-100 transition">C) $10\\text{ m}$</button>
                    </div>
                </div>

                <!-- Q6 -->
                <div class="p-5 bg-slate-50 rounded-2xl border border-slate-200 space-y-3">
                    <span class="text-[10px] font-extrabold bg-slate-200 text-slate-700 px-2.5 py-1 rounded-full uppercase">Question 6</span>
                    <p class="text-xs font-bold text-slate-800">Si $\\cos(\\alpha) = 0{,}5$, quel est l'angle $\\alpha$ ?</p>
                    <div class="grid grid-cols-3 gap-2 text-xs font-bold">
                        <button onclick="checkQCM(this, false, 6)" class="p-2.5 bg-white border border-slate-300 rounded-xl hover:bg-slate-100 transition">A) $30^\\circ$</button>
                        <button onclick="checkQCM(this, false, 6)" class="p-2.5 bg-white border border-slate-300 rounded-xl hover:bg-slate-100 transition">B) $45^\\circ$</button>
                        <button onclick="checkQCM(this, true, 6)" class="p-2.5 bg-white border border-slate-300 rounded-xl hover:bg-slate-100 transition">C) $60^\\circ$</button>
                    </div>
                </div>
            </div>
        </section>

    </main>

    <script>
        let score = 0;
        let answeredQuestions = new Set();

        function flipCard(el) {
            const inner = el.querySelector('.card-inner');
            inner.classList.toggle('rotate-y-180');
        }

        function checkQCM(btn, isCorrect, qId) {
            if (answeredQuestions.has(qId)) return;
            answeredQuestions.add(qId);

            const parent = btn.parentElement;
            const buttons = parent.querySelectorAll('button');

            buttons.forEach(b => {
                b.disabled = true;
                b.classList.add('opacity-60', 'cursor-not-allowed');
            });

            if (isCorrect) {
                btn.classList.remove('opacity-60', 'bg-white');
                btn.classList.add('correct-bg');
                score += 1;
            } else {
                btn.classList.remove('opacity-60', 'bg-white');
                btn.classList.add('wrong-bg');
                buttons.forEach(b => {
                    if (b !== btn && (b.innerText.includes('5') || b.innerText.includes('Hypoténuse') || b.innerText.includes('10%') || b.innerText.includes('tan') || b.innerText.includes('60°'))) {
                        b.classList.remove('opacity-60');
                        b.classList.add('correct-bg');
                    }
                });
            }

            document.getElementById('global-score').innerText = score + ' / 16';
        }
    </script>
</body>
</html>`;

fs.writeFileSync(path.join(targetDir, 'automatismes.html'), automatismesHtml, 'utf-8');
console.log('Built automatismes.html');

// ---------------------------------------------------------------------
// 2. ACTIVITES.HTML
// ---------------------------------------------------------------------
const activitesHtml = `<!DOCTYPE html>
<html lang="fr" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Activités & Mises en Situation - Trigonométrie 2nde Pro</title>
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
    <header class="bg-slate-900 text-white sticky top-0 z-50 border-b border-slate-800 shadow-md">
        <div class="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
            <div class="flex items-center gap-3">
                <div class="w-10 h-10 bg-emerald-500/20 border border-emerald-400/30 text-emerald-400 rounded-xl flex items-center justify-center font-bold">
                    <i class="fa-solid fa-lightbulb text-lg"></i>
                </div>
                <div>
                    <span class="text-xs font-bold tracking-widest uppercase text-emerald-400">Séquence 5 • Seconde Professionnelle Mathématiques</span>
                    <h1 class="text-xl font-bold font-heading">Géométrie Plane & Trigonométrie</h1>
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

        <!-- ENTÊTE DES ACTIVITÉS -->
        <div class="bg-slate-900 text-white p-6 md:p-8 rounded-3xl shadow-xl border border-slate-800 space-y-4">
            <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div>
                    <div class="flex items-center gap-2 mb-2">
                        <span class="bg-emerald-500 text-slate-950 text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">Découverte & Situations Professionnelles</span>
                        <span class="bg-slate-800 text-slate-300 text-xs font-semibold px-3 py-1 rounded-full border border-slate-700">Seconde Pro</span>
                    </div>
                    <h2 class="text-3xl font-extrabold font-heading text-white">Activités : Triangles, Pentes & Mesures D'Angles</h2>
                    <p class="text-sm text-slate-300 max-w-2xl">Problèmes issus du Bâtiment, de la Charpente, de l'Accessibilité PMR, de la Topographie et de la Mécanique Industrielle.</p>
                </div>
            </div>
        </div>

        <!-- ACTIVITÉ 1 : CHARPENTE ET PENTE DE TOITURE -->
        <section class="bg-white p-6 md:p-8 rounded-3xl border border-slate-200 card-shadow space-y-6">
            <div class="flex items-center gap-3 border-b border-slate-100 pb-4">
                <div class="w-10 h-10 bg-emerald-100 text-emerald-800 rounded-xl flex items-center justify-center font-bold text-lg">1</div>
                <div>
                    <span class="text-xs font-bold text-emerald-600 uppercase tracking-wider">Activité 1 • Bâtiment & Charpente</span>
                    <h3 class="text-xl font-bold font-heading text-slate-900">Conception d'une Charpente Bois à Deux Pans</h3>
                </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-slate-700 leading-relaxed">
                <div class="md:col-span-2 space-y-3">
                    <p>Un charpentier doit construire la ferme de toit d'un bâtiment industriel de largeur totale $L = 12\\text{ m}$. La ferme est symétrique et forme deux triangles rectangles de largeur au sol $b = 6\\text{ m}$ et de hauteur au faîtage $h = 2{,}50\\text{ m}$.</p>
                    
                    <div class="p-4 bg-emerald-50 border-l-4 border-emerald-500 rounded-r-2xl space-y-2">
                        <h4 class="font-bold text-emerald-950 text-sm">Objectifs du Charpentier :</h4>
                        <ol class="list-decimal list-inside space-y-1 font-semibold text-slate-800">
                            <li>Calculer la longueur totale $L_{arb}$ de l'arbalétrier (l'hypoténuse du triangle).</li>
                            <li>Déterminer l'angle d'inclinaison du toit $\\alpha$ en degrés ($^\\circ$).</li>
                            <li>Vérifier si la pente du toit respecte la norme minimale de $30\\%$ pour la pose de tuiles.</li>
                        </ol>
                    </div>
                </div>

                <div class="bg-slate-900 text-white p-5 rounded-2xl border border-slate-800 flex flex-col justify-center space-y-3 font-mono">
                    <div class="text-center pb-2 border-b border-slate-800">
                        <i class="fa-solid fa-house-chimney text-3xl text-emerald-400"></i>
                        <span class="block text-[11px] text-slate-400 mt-1">Schéma de la Ferme</span>
                    </div>
                    <div class="text-[11px] space-y-1 text-slate-300">
                        <p>• Base $b = 6{,}00\\text{ m}$</p>
                        <p>• Hauteur $h = 2{,}50\\text{ m}$</p>
                        <p>• Angle $\\alpha = \\arctan(h/b)$</p>
                    </div>
                </div>
            </div>

            <details class="bg-slate-50 border border-slate-200 rounded-2xl p-4 text-xs">
                <summary class="font-bold text-slate-900 cursor-pointer hover:text-emerald-600 transition flex items-center gap-2">
                    <i class="fa-solid fa-circle-check text-emerald-500"></i> Voir la résolution détaillée de l'Activité 1
                </summary>
                <div class="mt-4 pt-4 border-t border-slate-200 space-y-2 text-slate-700 font-mono">
                    <p>1. <strong>Longueur de l'arbalétrier (Pythagore) :</strong> $L_{arb} = \\sqrt{6^2 + 2{,}5^2} = \\sqrt{36 + 6{,}25} = \\sqrt{42{,}25} = \\mathbf{6{,}50\\text{ m}}$.</p>
                    <p>2. <strong>Angle d'inclinaison (Trigonométrie $\\tan$) :</strong> $\\tan(\\alpha) = \\frac{\\text{Opp}}{\\text{Adj}} = \\frac{2{,}5}{6} \\approx 0{,}4167 \\implies \\alpha = \\arctan(0{,}4167) \\approx \\mathbf{22{,}62^\\circ}$.</p>
                    <p>3. <strong>Pente en % :</strong> $\\text{Pente} = \\frac{2{,}5}{6} \\times 100 \\approx \\mathbf{41{,}67\\%}$. Comme $41{,}67\\% \\ge 30\\%$, la pose des tuiles est conforme.</p>
                </div>
            </details>
        </section>

        <!-- ACTIVITÉ 2 : RAMPE D'ACCÈS PMR -->
        <section class="bg-white p-6 md:p-8 rounded-3xl border border-slate-200 card-shadow space-y-6">
            <div class="flex items-center gap-3 border-b border-slate-100 pb-4">
                <div class="w-10 h-10 bg-sky-100 text-sky-800 rounded-xl flex items-center justify-center font-bold text-lg">2</div>
                <div>
                    <span class="text-xs font-bold text-sky-600 uppercase tracking-wider">Activité 2 • Accessibilité PMR & Voirie</span>
                    <h3 class="text-xl font-bold font-heading text-slate-900">Normes d'Inclinaison d'une Rampe pour Fauteuil Roulant</h3>
                </div>
            </div>

            <div class="space-y-4 text-xs text-slate-700 leading-relaxed">
                <p>Pour franchir une marche d'entrée de magasin de hauteur $h = 45\\text{ cm} = 0{,}45\\text{ m}$, un technicien doit installer une rampe PMR. La réglementation fixe une pente maximale de $5\\%$ (soit un angle d'environ $2{,}86^\\circ$).</p>
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div class="p-5 bg-sky-50 border-l-4 border-sky-500 rounded-r-2xl space-y-2">
                        <h4 class="font-bold text-sky-950 text-sm">Question A : Longueur au Sol</h4>
                        <p>Calculer la longueur minimale $L_{sol}$ au sol nécessaire pour respecter la pente de $5\\%$ ($\text{Pente} = \frac{h}{L_{sol}} = 0{,}05$).</p>
                    </div>
                    <div class="p-5 bg-indigo-50 border-l-4 border-indigo-500 rounded-r-2xl space-y-2">
                        <h4 class="font-bold text-indigo-950 text-sm">Question B : Longueur de la Rampe</h4>
                        <p>Calculer la longueur réelle de la rampe aluminium $L_{rampe}$ à commander (hypoténuse).</p>
                    </div>
                </div>
            </div>

            <details class="bg-slate-50 border border-slate-200 rounded-2xl p-4 text-xs">
                <summary class="font-bold text-slate-900 cursor-pointer hover:text-sky-600 transition flex items-center gap-2">
                    <i class="fa-solid fa-circle-check text-sky-500"></i> Voir la résolution détaillée de l'Activité 2
                </summary>
                <div class="mt-4 pt-4 border-t border-slate-200 space-y-2 text-slate-700 font-mono">
                    <p>• <strong>Longueur au sol :</strong> $L_{sol} = \\frac{h}{0{,}05} = \\frac{0{,}45}{0{,}05} = \\mathbf{9{,}00\\text{ m}}$.</p>
                    <p>• <strong>Longueur de la rampe :</strong> $L_{rampe} = \\sqrt{9^2 + 0{,}45^2} = \\sqrt{81 + 0{,}2025} \\approx \\mathbf{9{,}01\\text{ m}}$.</p>
                </div>
            </details>
        </section>

        <!-- ACTIVITÉ 3 : TOPOGRAPHIE ET HAUTEUR DE CHÂTEAU D'EAU -->
        <section class="bg-white p-6 md:p-8 rounded-3xl border border-slate-200 card-shadow space-y-6">
            <div class="flex items-center gap-3 border-b border-slate-100 pb-4">
                <div class="w-10 h-10 bg-purple-100 text-purple-800 rounded-xl flex items-center justify-center font-bold text-lg">3</div>
                <div>
                    <span class="text-xs font-bold text-purple-600 uppercase tracking-wider">Activité 3 • Topographie & Mesures Indirectes</span>
                    <h3 class="text-xl font-bold font-heading text-slate-900">Mesure de la Hauteur d'un Château d'Eau au Théodolite</h3>
                </div>
            </div>

            <div class="space-y-4 text-xs text-slate-700 leading-relaxed">
                <p>Un géomètre s'installe à une distance $D = 40\\text{ m}$ du pied d'un château d'eau. À l'aide d'un théodolite placé à une hauteur de visée $h_{oeil} = 1{,}60\\text{ m}$ du sol, il mesure un angle d'élévation $\\alpha = 34^\\circ$ par rapport à l'horizontale.</p>
                
                <div class="p-5 bg-purple-50 border-l-4 border-purple-500 rounded-r-2xl space-y-2">
                    <h4 class="font-bold text-purple-950 text-sm">Calcul de la Hauteur Totale $H$ :</h4>
                    <p>1. Exprimer la hauteur partielle $h_{haut}$ au-dessus du théodolite en fonction de $D$ et $\\tan(\\alpha)$.</p>
                    <p>2. En déduire la hauteur totale $H = h_{haut} + h_{oeil}$ du château d'eau.</p>
                </div>
            </div>

            <details class="bg-slate-50 border border-slate-200 rounded-2xl p-4 text-xs">
                <summary class="font-bold text-slate-900 cursor-pointer hover:text-purple-600 transition flex items-center gap-2">
                    <i class="fa-solid fa-circle-check text-purple-500"></i> Voir la résolution détaillée de l'Activité 3
                </summary>
                <div class="mt-4 pt-4 border-t border-slate-200 space-y-2 text-slate-700 font-mono">
                    <p>• <strong>Hauteur partielle :</strong> $h_{haut} = D \\times \\tan(34^\\circ) = 40 \\times 0{,}6745 = \\mathbf{26{,}98\\text{ m}}$.</p>
                    <p>• <strong>Hauteur totale :</strong> $H = 26{,}98 + 1{,}60 = \\mathbf{28{,}58\\text{ m}}$.</p>
                </div>
            </details>
        </section>

    </main>
</body>
</html>`;

fs.writeFileSync(path.join(targetDir, 'activites.html'), activitesHtml, 'utf-8');
console.log('Built activites.html');

// ---------------------------------------------------------------------
// 3. COURS.HTML
// ---------------------------------------------------------------------
const coursHtml = `<!DOCTYPE html>
<html lang="fr" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Je note l'essentiel (Cours) - Trigonométrie 2nde Pro</title>
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
    <header class="bg-slate-900 text-white sticky top-0 z-50 border-b border-slate-800 shadow-md">
        <div class="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
            <div class="flex items-center gap-3">
                <div class="w-10 h-10 bg-sky-500/20 border border-sky-400/30 text-sky-400 rounded-xl flex items-center justify-center font-bold">
                    <i class="fa-solid fa-book-open text-lg"></i>
                </div>
                <div>
                    <span class="text-xs font-bold tracking-widest uppercase text-sky-400">Séquence 5 • Seconde Professionnelle Mathématiques</span>
                    <h1 class="text-xl font-bold font-heading">Géométrie Plane & Trigonométrie</h1>
                </div>
            </div>
            <!-- Navigation de la Séquence -->
            <nav class="flex flex-wrap items-center gap-1.5 text-xs font-bold">
                <a href="automatismes.html" class="px-3 py-2 rounded-lg bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white transition-colors flex items-center gap-1.5"><i class="fa-solid fa-bolt text-yellow-400"></i> Automatismes</a>
                <a href="activites.html" class="px-3 py-2 rounded-lg bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white transition-colors flex items-center gap-1.5"><i class="fa-solid fa-lightbulb text-emerald-400"></i> Activités</a>
                <a href="cours.html" class="px-3 py-2 rounded-lg bg-sky-600 text-white font-extrabold shadow-sm flex items-center gap-1.5"><i class="fa-solid fa-book-open"></i> Cours</a>
                <a href="td.html" class="px-3 py-2 rounded-lg bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white transition-colors flex items-center gap-1.5"><i class="fa-solid fa-dumbbell text-indigo-400"></i> TD & Exercices</a>
                <a href="tice.html" class="px-3 py-2 rounded-lg bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white transition-colors flex items-center gap-1.5"><i class="fa-solid fa-laptop-code text-purple-400"></i> TP Numérique</a>
                <a href="eval.html" class="px-3 py-2 rounded-lg bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white transition-colors flex items-center gap-1.5"><i class="fa-solid fa-graduation-cap text-red-400"></i> Évaluation</a>
            </nav>
        </div>
    </header>

    <main class="max-w-5xl mx-auto px-4 py-8 space-y-12">

        <!-- ENTÊTE DE COURS -->
        <div class="bg-slate-900 text-white p-6 md:p-8 rounded-3xl shadow-xl border border-slate-800 space-y-4">
            <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div>
                    <div class="flex items-center gap-2 mb-2">
                        <span class="bg-sky-500 text-slate-950 text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">Référentiel National 2nde Pro</span>
                        <span class="bg-slate-800 text-slate-300 text-xs font-semibold px-3 py-1 rounded-full border border-slate-700">Baccalauréat Professionnel</span>
                    </div>
                    <h2 class="text-3xl font-extrabold font-heading text-white">Je Note L'Essentiel : Trigonométrie & Géométrie Plane</h2>
                    <p class="text-sm text-slate-300 max-w-2xl">Triangle rectangle, mnémonique SOH CAH TOA, Théorèmes de Pythagore et Thalès.</p>
                </div>

                <button onclick="window.print()" class="no-print bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs px-5 py-3 rounded-xl shadow-md transition-colors flex items-center gap-2">
                    <i class="fa-solid fa-print"></i> Imprimer le Cours PDF
                </button>
            </div>
        </div>

        <!-- PARTIE 1 : VOCABULAIRE DU TRIANGLE RECTANGLE -->
        <section class="bg-white p-6 md:p-8 rounded-3xl border border-slate-200 card-shadow space-y-6">
            <div class="flex items-center gap-3 border-b border-slate-100 pb-4">
                <span class="w-10 h-10 bg-sky-100 text-sky-800 rounded-xl flex items-center justify-center font-bold text-lg">1</span>
                <div>
                    <span class="text-xs font-bold text-sky-600 uppercase tracking-wider">Partie 1 • Vocabulaire Fondamental</span>
                    <h3 class="text-xl font-bold font-heading text-slate-900">Le Triangle Rectangle & ses Côtés</h3>
                </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs leading-relaxed">
                <div class="p-4 bg-sky-50 border-l-4 border-sky-500 rounded-r-2xl space-y-1">
                    <h4 class="font-bold text-sky-950 text-sm">1. L'Hypoténuse</h4>
                    <p class="text-slate-700">C'est le côté le plus long du triangle rectangle. Il est toujours situé <strong>en face de l'angle droit</strong>.</p>
                </div>

                <div class="p-4 bg-amber-50 border-l-4 border-amber-500 rounded-r-2xl space-y-1">
                    <h4 class="font-bold text-amber-950 text-sm">2. Le Côté Adjacents</h4>
                    <p class="text-slate-700">C'est le côté qui touche l'angle considéré $\\alpha$ (sans être l'hypoténuse).</p>
                </div>

                <div class="p-4 bg-emerald-50 border-l-4 border-emerald-500 rounded-r-2xl space-y-1">
                    <h4 class="font-bold text-emerald-950 text-sm">3. Le Côté Opposé</h4>
                    <p class="text-slate-700">C'est le côté situé directement <strong>en face de l'angle considéré</strong> $\\alpha$.</p>
                </div>
            </div>
        </section>

        <!-- PARTIE 2 : RAPPORTS TRIGONOMÉTRIQUES SOH CAH TOA -->
        <section class="bg-white p-6 md:p-8 rounded-3xl border border-slate-200 card-shadow space-y-6">
            <div class="flex items-center gap-3 border-b border-slate-100 pb-4">
                <span class="w-10 h-10 bg-emerald-100 text-emerald-800 rounded-xl flex items-center justify-center font-bold text-lg">2</span>
                <div>
                    <span class="text-xs font-bold text-emerald-600 uppercase tracking-wider">Partie 2 • Formules Officielles</span>
                    <h3 class="text-xl font-bold font-heading text-slate-900">Les 3 Formules Trigonométriques (SOH CAH TOA)</h3>
                </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div class="p-6 bg-slate-900 text-white rounded-2xl space-y-3 text-center border border-slate-800 shadow-md">
                    <span class="bg-amber-500 text-slate-950 text-[10px] font-extrabold px-3 py-1 rounded-full uppercase">SOH</span>
                    <h4 class="text-lg font-extrabold text-amber-400 font-heading">SINUS</h4>
                    <p class="text-xs font-mono">$$\\sin(\\alpha) = \\frac{\\text{Côté Opposé}}{\\text{Hypoténuse}}$$</p>
                </div>

                <div class="p-6 bg-slate-900 text-white rounded-2xl space-y-3 text-center border border-slate-800 shadow-md">
                    <span class="bg-sky-500 text-slate-950 text-[10px] font-extrabold px-3 py-1 rounded-full uppercase">CAH</span>
                    <h4 class="text-lg font-extrabold text-sky-400 font-heading">COSINUS</h4>
                    <p class="text-xs font-mono">$$\\cos(\\alpha) = \\frac{\\text{Côté Adjacents}}{\\text{Hypoténuse}}$$</p>
                </div>

                <div class="p-6 bg-slate-900 text-white rounded-2xl space-y-3 text-center border border-slate-800 shadow-md">
                    <span class="bg-emerald-500 text-slate-950 text-[10px] font-extrabold px-3 py-1 rounded-full uppercase">TOA</span>
                    <h4 class="text-lg font-extrabold text-emerald-400 font-heading">TANGENTE</h4>
                    <p class="text-xs font-mono">$$\\tan(\\alpha) = \\frac{\\text{Côté Opposé}}{\\text{Côté Adjacents}}$$</p>
                </div>
            </div>
        </section>

        <!-- SIMULATEUR DYNAMIQUE INTERACTIF HTML5 CANVAS -->
        <section class="bg-slate-900 text-white p-6 md:p-8 rounded-3xl border border-slate-800 space-y-6 card-shadow">
            <div class="flex items-center justify-between border-b border-slate-800 pb-4">
                <div class="flex items-center gap-3">
                    <div class="w-10 h-10 bg-amber-500/20 text-amber-400 rounded-xl flex items-center justify-center font-bold text-lg">
                        <i class="fa-solid fa-calculator"></i>
                    </div>
                    <div>
                        <span class="text-xs font-bold text-amber-400 uppercase tracking-widest">Outil Pédagogique Interactif</span>
                        <h3 class="text-xl font-bold font-heading text-white">Résolveur Dynamique de Triangle Rectangle 2D</h3>
                    </div>
                </div>
                <span class="bg-amber-500 text-slate-950 font-extrabold text-xs px-3.5 py-1.5 rounded-full uppercase tracking-wider">Trigonométrie 2D</span>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                <!-- Canvas 2D Triangle -->
                <div class="md:col-span-2 bg-slate-950 rounded-2xl border border-slate-800 p-4 flex flex-col items-center justify-center min-h-[300px]">
                    <canvas id="tri-canvas" width="460" height="260" class="max-w-full rounded-xl bg-slate-900 border border-slate-800"></canvas>
                </div>

                <!-- Réglages en Direct -->
                <div class="bg-slate-800/90 p-5 rounded-2xl border border-slate-700 space-y-4 text-xs">
                    <div>
                        <label class="font-bold text-amber-400 block mb-1 flex justify-between">
                            <span>Angle $\\alpha$ :</span>
                            <span id="slider-angle-val" class="font-mono text-white">35 °</span>
                        </label>
                        <input type="range" id="slider-angle" min="10" max="75" value="35" oninput="updateInteractiveTri()" class="w-full accent-amber-400 cursor-pointer">
                    </div>

                    <div>
                        <label class="font-bold text-sky-400 block mb-1 flex justify-between">
                            <span>Côté Adjacents $b$ :</span>
                            <span id="slider-base-val" class="font-mono text-white">6,0 m</span>
                        </label>
                        <input type="range" id="slider-base" min="2" max="10" value="6" step="0.5" oninput="updateInteractiveTri()" class="w-full accent-sky-400 cursor-pointer">
                    </div>

                    <div class="space-y-2 border-t border-slate-700 pt-3 font-mono text-[11px]">
                        <div class="flex justify-between text-slate-300">
                            <span>Opposé $a = b \\cdot \\tan(\\alpha)$ :</span>
                            <span id="calc-opp" class="font-bold text-emerald-400">4,20 m</span>
                        </div>
                        <div class="flex justify-between text-slate-300">
                            <span>Hypoténuse $c = \\sqrt{a^2+b^2}$ :</span>
                            <span id="calc-hyp" class="font-bold text-amber-300">7,32 m</span>
                        </div>
                        <div class="flex justify-between text-slate-300">
                            <span>Pente $\\% = \\tan(\\alpha) \\times 100$ :</span>
                            <span id="calc-pente" class="font-bold text-purple-400">70,0 %</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- PARTIE 3 : THÉORÈME DE PYTHAGORE & THALÈS -->
        <section class="bg-white p-6 md:p-8 rounded-3xl border border-slate-200 card-shadow space-y-6">
            <div class="flex items-center gap-3 border-b border-slate-100 pb-4">
                <span class="w-10 h-10 bg-indigo-100 text-indigo-800 rounded-xl flex items-center justify-center font-bold text-lg">3</span>
                <div>
                    <span class="text-xs font-bold text-indigo-600 uppercase tracking-wider">Partie 3 • Théorèmes Géométriques Clefs</span>
                    <h3 class="text-xl font-bold font-heading text-slate-900">Pythagore & Thalès dans le Plan</h3>
                </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-slate-700 leading-relaxed">
                <div class="p-5 bg-indigo-50 border-l-4 border-indigo-500 rounded-r-2xl space-y-2">
                    <h4 class="font-bold text-indigo-950 text-sm flex items-center gap-2">
                        <i class="fa-solid fa-shapes"></i> Théorème de Pythagore
                    </h4>
                    <p class="font-mono text-indigo-900 text-sm">$$\\mathbf{BC^2 = AB^2 + AC^2}$$</p>
                    <p>• Utilisé pour calculer un côté manquant dans un triangle rectangle.<br>• <strong>Réciproque :</strong> Si $BC^2 = AB^2 + AC^2$, alors le triangle est rectangle en A (Règle d'équerre 3-4-5 des maçons).</p>
                </div>

                <div class="p-5 bg-rose-50 border-l-4 border-rose-500 rounded-r-2xl space-y-2">
                    <h4 class="font-bold text-rose-950 text-sm flex items-center gap-2">
                        <i class="fa-solid fa-lines-leaning"></i> Théorème de Thalès
                    </h4>
                    <p class="font-mono text-rose-900 text-sm">$$\\mathbf{\\frac{AM}{AB} = \\frac{AN}{AC} = \\frac{MN}{BC}}$$</p>
                    <p>• Utilisé pour calculer des longueurs réduites ou agrandies lorsque deux droites sont parallèles $(MN) \\parallel (BC)$.</p>
                </div>
            </div>
        </section>

    </main>

    <!-- JS SIMULATEUR CANVAS 2D -->
    <script>
        function updateInteractiveTri() {
            const angleDeg = parseFloat(document.getElementById('slider-angle').value);
            const base = parseFloat(document.getElementById('slider-base').value);

            document.getElementById('slider-angle-val').innerText = angleDeg + ' °';
            document.getElementById('slider-base-val').innerText = base.toFixed(1).replace('.', ',') + ' m';

            const angleRad = angleDeg * (Math.PI / 180);
            const opp = base * Math.tan(angleRad);
            const hyp = Math.sqrt(base * base + opp * opp);
            const pente = Math.tan(angleRad) * 100;

            document.getElementById('calc-opp').innerText = opp.toFixed(2).replace('.', ',') + ' m';
            document.getElementById('calc-hyp').innerText = hyp.toFixed(2).replace('.', ',') + ' m';
            document.getElementById('calc-pente').innerText = pente.toFixed(1).replace('.', ',') + ' %';

            drawCanvasTriangle(base, opp, angleDeg);
        }

        function drawCanvasTriangle(base, opp, angle) {
            const canvas = document.getElementById('tri-canvas');
            if (!canvas) return;
            const ctx = canvas.getContext('2d');
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            const startX = 60;
            const startY = 220;
            const scale = Math.min(320 / base, 170 / opp);

            const drawW = base * scale;
            const drawH = opp * scale;

            // Remplissage léger
            ctx.beginPath();
            ctx.moveTo(startX, startY);
            ctx.lineTo(startX + drawW, startY);
            ctx.lineTo(startX + drawW, startY - drawH);
            ctx.closePath();
            ctx.fillStyle = 'rgba(14, 165, 233, 0.15)';
            ctx.fill();

            // Côté Adjacents (Bleu)
            ctx.beginPath();
            ctx.moveTo(startX, startY);
            ctx.lineTo(startX + drawW, startY);
            ctx.strokeStyle = '#0284c7';
            ctx.lineWidth = 3;
            ctx.stroke();

            // Côté Opposé (Vert)
            ctx.beginPath();
            ctx.moveTo(startX + drawW, startY);
            ctx.lineTo(startX + drawW, startY - drawH);
            ctx.strokeStyle = '#10b981';
            ctx.lineWidth = 3;
            ctx.stroke();

            // Hypoténuse (Amber)
            ctx.beginPath();
            ctx.moveTo(startX, startY);
            ctx.lineTo(startX + drawW, startY - drawH);
            ctx.strokeStyle = '#f59e0b';
            ctx.lineWidth = 3;
            ctx.stroke();

            // Carré Angle Droit
            ctx.beginPath();
            ctx.rect(startX + drawW - 14, startY - 14, 14, 14);
            ctx.strokeStyle = '#94a3b8';
            ctx.lineWidth = 1.5;
            ctx.stroke();

            // Étiquettes
            ctx.font = 'bold 11px sans-serif';
            ctx.fillStyle = '#38bdf8';
            ctx.fillText('Adjacents b = ' + base.toFixed(1) + ' m', startX + drawW/2 - 40, startY + 20);

            ctx.fillStyle = '#34d399';
            ctx.fillText('Opposé a = ' + opp.toFixed(2) + ' m', startX + drawW + 10, startY - drawH/2);

            ctx.fillStyle = '#fbbf24';
            ctx.fillText('Hyp c', startX + drawW/2 - 20, startY - drawH/2 - 10);

            ctx.fillStyle = '#f59e0b';
            ctx.fillText('α = ' + angle + '°', startX + 25, startY - 8);
        }

        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', updateInteractiveTri);
        } else {
            updateInteractiveTri();
        }
    </script>
</body>
</html>`;

fs.writeFileSync(path.join(targetDir, 'cours.html'), coursHtml, 'utf-8');
console.log('Built cours.html');

// ---------------------------------------------------------------------
// 4. TD.HTML
// ---------------------------------------------------------------------
const tdHtml = `<!DOCTYPE html>
<html lang="fr" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TD & Exercices Corrigés - Trigonométrie 2nde Pro</title>
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
    <header class="bg-slate-900 text-white sticky top-0 z-50 border-b border-slate-800 shadow-md">
        <div class="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
            <div class="flex items-center gap-3">
                <div class="w-10 h-10 bg-indigo-500/20 border border-indigo-400/30 text-indigo-400 rounded-xl flex items-center justify-center font-bold">
                    <i class="fa-solid fa-dumbbell text-lg"></i>
                </div>
                <div>
                    <span class="text-xs font-bold tracking-widest uppercase text-indigo-400">Séquence 5 • Seconde Professionnelle Mathématiques</span>
                    <h1 class="text-xl font-bold font-heading">Géométrie Plane & Trigonométrie</h1>
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

    <main class="max-w-5xl mx-auto px-4 py-8 space-y-8">

        <!-- ENTÊTE DE TD -->
        <div class="bg-slate-900 text-white p-6 md:p-8 rounded-3xl shadow-xl border border-slate-800 space-y-4">
            <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div>
                    <div class="flex items-center gap-2 mb-2">
                        <span class="bg-indigo-500 text-white text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">Fiche de Travaux Dirigés</span>
                        <span class="bg-slate-800 text-slate-300 text-xs font-semibold px-3 py-1 rounded-full border border-slate-700">8 Exercices Progressifs</span>
                    </div>
                    <h2 class="text-3xl font-extrabold font-heading text-white">TD : Calculs de Longueurs, Angles & Pentes</h2>
                    <p class="text-sm text-slate-300 max-w-2xl">Exercices d'application professionnelle avec solutions détaillées dépliables.</p>
                </div>

                <button onclick="window.print()" class="no-print bg-indigo-500 hover:bg-indigo-400 text-white font-bold text-xs px-5 py-3 rounded-xl shadow-md transition-colors flex items-center gap-2">
                    <i class="fa-solid fa-print"></i> Imprimer le TD
                </button>
            </div>
        </div>

        <!-- EXERCICE 1 -->
        <section class="bg-white p-6 rounded-3xl border border-slate-200 card-shadow space-y-4">
            <div class="flex items-center justify-between border-b border-slate-100 pb-3">
                <span class="bg-indigo-100 text-indigo-800 text-xs font-extrabold px-3 py-1 rounded-full uppercase">Exercice 1 • Application Directe</span>
                <span class="text-xs font-bold text-slate-400">★★☆</span>
            </div>
            <p class="text-xs text-slate-700">Un triangle ABC est rectangle en A. On donne $AB = 5\\text{ cm}$ et l'angle $\\hat{B} = 35^\\circ$.</p>
            <p class="text-xs font-semibold text-slate-800">1. Calculer la longueur du côté opposé $AC$.<br>2. Calculer la longueur de l'hypoténuse $BC$.</p>

            <details class="bg-slate-50 border border-slate-200 rounded-2xl p-4 text-xs">
                <summary class="font-bold text-slate-900 cursor-pointer hover:text-indigo-600 transition flex items-center gap-2">
                    <i class="fa-solid fa-circle-check text-emerald-500"></i> Voir la solution de l'Exercice 1
                </summary>
                <div class="mt-3 pt-3 border-t border-slate-200 space-y-1 font-mono text-slate-700">
                    <p>1. $\\tan(35^\\circ) = \\frac{AC}{AB} \\implies AC = 5 \\times \\tan(35^\\circ) = 5 \\times 0{,}7002 = \\mathbf{3{,}50\\text{ cm}}$.</p>
                    <p>2. $\\cos(35^\\circ) = \\frac{AB}{BC} \\implies BC = \\frac{5}{\\cos(35^\\circ)} = \\frac{5}{0{,}8192} = \\mathbf{6{,}10\\text{ cm}}$.</p>
                </div>
            </details>
        </section>

        <!-- EXERCICE 2 -->
        <section class="bg-white p-6 rounded-3xl border border-slate-200 card-shadow space-y-4">
            <div class="flex items-center justify-between border-b border-slate-100 pb-3">
                <span class="bg-indigo-100 text-indigo-800 text-xs font-extrabold px-3 py-1 rounded-full uppercase">Exercice 2 • Charpente & Toiture</span>
                <span class="text-xs font-bold text-slate-400">★★☆</span>
            </div>
            <p class="text-xs text-slate-700">Un couvreur rénove une toiture monopente d'angle $\\alpha = 28^\\circ$. La largeur du bâtiment au sol est $L_{sol} = 7{,}50\\text{ m}$.</p>
            <p class="text-xs font-semibold text-slate-800">1. Calculer la longueur exacte du rampant de toiture (hypoténuse).<br>2. Calculer le dénivelé vertical $h$.</p>

            <details class="bg-slate-50 border border-slate-200 rounded-2xl p-4 text-xs">
                <summary class="font-bold text-slate-900 cursor-pointer hover:text-indigo-600 transition flex items-center gap-2">
                    <i class="fa-solid fa-circle-check text-emerald-500"></i> Voir la solution de l'Exercice 2
                </summary>
                <div class="mt-3 pt-3 border-t border-slate-200 space-y-1 font-mono text-slate-700">
                    <p>1. $\\cos(28^\\circ) = \\frac{7{,}50}{L_{ramp}} \\implies L_{ramp} = \\frac{7{,}50}{\\cos(28^\\circ)} = \\mathbf{8{,}49\\text{ m}}$.</p>
                    <p>2. $h = 7{,}50 \\times \\tan(28^\\circ) = 7{,}50 \\times 0{,}5317 = \\mathbf{3{,}99\\text{ m}}$.</p>
                </div>
            </details>
        </section>

        <!-- EXERCICE 3 -->
        <section class="bg-white p-6 rounded-3xl border border-slate-200 card-shadow space-y-4">
            <div class="flex items-center justify-between border-b border-slate-100 pb-3">
                <span class="bg-indigo-100 text-indigo-800 text-xs font-extrabold px-3 py-1 rounded-full uppercase">Exercice 3 • Voirie PMR</span>
                <span class="text-xs font-bold text-slate-400">★★★</span>
            </div>
            <p class="text-xs text-slate-700">Une rampe d'accès monte de $0{,}60\\text{ m}$ sur une longueur au sol de $10\\text{ m}$.</p>
            <p class="text-xs font-semibold text-slate-800">1. Calculer la pente en % de la rampe.<br>2. Déterminer l'angle d'inclinaison $\\alpha$ en degrés.</p>

            <details class="bg-slate-50 border border-slate-200 rounded-2xl p-4 text-xs">
                <summary class="font-bold text-slate-900 cursor-pointer hover:text-indigo-600 transition flex items-center gap-2">
                    <i class="fa-solid fa-circle-check text-emerald-500"></i> Voir la solution de l'Exercice 3
                </summary>
                <div class="mt-3 pt-3 border-t border-slate-200 space-y-1 font-mono text-slate-700">
                    <p>1. $\\text{Pente }\\% = \\frac{0{,}60}{10} \\times 100 = \\mathbf{6{,}0\\%}$.</p>
                    <p>2. $\\alpha = \\arctan(0{,}06) = \\mathbf{3{,}43^\\circ}$.</p>
                </div>
            </details>
        </section>

        <!-- EXERCICE 4 -->
        <section class="bg-white p-6 rounded-3xl border border-slate-200 card-shadow space-y-4">
            <div class="flex items-center justify-between border-b border-slate-100 pb-3">
                <span class="bg-indigo-100 text-indigo-800 text-xs font-extrabold px-3 py-1 rounded-full uppercase">Exercice 4 • Photovoltaïque & Énergie</span>
                <span class="text-xs font-bold text-slate-400">★★★</span>
            </div>
            <p class="text-xs text-slate-700">Un panneau solaire rigide de longueur $L = 2{,}00\\text{ m}$ est incliné à $35^\\circ$ sur un châssis en terrasse.</p>
            <p class="text-xs font-semibold text-slate-800">Calculer la hauteur maximale $h$ atteinte par le haut du panneau.</p>

            <details class="bg-slate-50 border border-slate-200 rounded-2xl p-4 text-xs">
                <summary class="font-bold text-slate-900 cursor-pointer hover:text-indigo-600 transition flex items-center gap-2">
                    <i class="fa-solid fa-circle-check text-emerald-500"></i> Voir la solution de l'Exercice 4
                </summary>
                <div class="mt-3 pt-3 border-t border-slate-200 space-y-1 font-mono text-slate-700">
                    <p>• $\\sin(35^\\circ) = \\frac{h}{2{,}00} \\implies h = 2{,}00 \\times \\sin(35^\\circ) = 2{,}00 \\times 0{,}5736 = \\mathbf{1{,}15\\text{ m}}$.</p>
                </div>
            </details>
        </section>

    </main>
</body>
</html>`;

fs.writeFileSync(path.join(targetDir, 'td.html'), tdHtml, 'utf-8');
console.log('Built td.html');

// ---------------------------------------------------------------------
// 5. TICE.HTML
// ---------------------------------------------------------------------
const ticeHtml = `<!DOCTYPE html>
<html lang="fr" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TP Numérique & TICE - Trigonométrie 2nde Pro</title>
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
    <header class="bg-slate-900 text-white sticky top-0 z-50 border-b border-slate-800 shadow-md">
        <div class="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
            <div class="flex items-center gap-3">
                <div class="w-10 h-10 bg-purple-500/20 border border-purple-400/30 text-purple-400 rounded-xl flex items-center justify-center font-bold">
                    <i class="fa-solid fa-laptop-code text-lg"></i>
                </div>
                <div>
                    <span class="text-xs font-bold tracking-widest uppercase text-purple-400">Séquence 5 • Seconde Professionnelle Mathématiques</span>
                    <h1 class="text-xl font-bold font-heading">Géométrie Plane & Trigonométrie</h1>
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
                        <span class="bg-purple-500 text-white text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">TP Informatique Tableur & GeoGebra</span>
                        <span class="bg-slate-800 text-slate-300 text-xs font-semibold px-3 py-1 rounded-full border border-slate-700">Seconde Pro</span>
                    </div>
                    <h2 class="text-3xl font-extrabold font-heading text-white">Automatisation des Calculs de Pente sur Tableur</h2>
                    <p class="text-sm text-slate-300 max-w-2xl">Conception d'une feuille Excel / Calc pour la vérification automatique de conformité PMR et de rampants de toitures.</p>
                </div>
            </div>
        </div>

        <!-- PARTIE 1 : TABLEUR EXCEL / CALC -->
        <section class="bg-white p-6 md:p-8 rounded-3xl border border-slate-200 card-shadow space-y-6">
            <div class="flex items-center gap-3 border-b border-slate-100 pb-4">
                <div class="w-10 h-10 bg-purple-100 text-purple-800 rounded-xl flex items-center justify-center font-bold text-lg">
                    <i class="fa-solid fa-file-excel text-emerald-600"></i>
                </div>
                <div>
                    <span class="text-xs font-bold text-purple-600 uppercase tracking-wider">Partie 1 • Tableur Excel / LibreOffice Calc</span>
                    <h3 class="text-xl font-bold font-heading text-slate-900">Formules d'Automatisation Trigonométrique</h3>
                </div>
            </div>

            <div class="space-y-4 text-xs leading-relaxed">
                <p class="text-slate-700">Créer la feuille de calcul suivante dans votre tableur :</p>
                
                <div class="overflow-x-auto">
                    <table class="w-full text-center border-collapse border border-slate-300 font-mono text-[11px]">
                        <thead>
                            <tr class="bg-slate-800 text-white">
                                <th class="border border-slate-700 p-2"></th>
                                <th class="border border-slate-700 p-2">A</th>
                                <th class="border border-slate-700 p-2">B</th>
                                <th class="border border-slate-700 p-2">C</th>
                                <th class="border border-slate-700 p-2">D</th>
                                <th class="border border-slate-700 p-2">E</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="bg-slate-100 font-bold">
                                <td class="border border-slate-300 p-2">1</td>
                                <td class="border border-slate-300 p-2">Projet</td>
                                <td class="border border-slate-300 p-2">Base b (m)</td>
                                <td class="border border-slate-300 p-2">Hauteur h (m)</td>
                                <td class="border border-slate-300 p-2">Pente (%)</td>
                                <td class="border border-slate-300 p-2">Angle (deg)</td>
                            </tr>
                            <tr>
                                <td class="border border-slate-300 p-2 font-bold">2</td>
                                <td class="border border-slate-300 p-2">Rampe PMR 1</td>
                                <td class="border border-slate-300 p-2 bg-yellow-50">10,00</td>
                                <td class="border border-slate-300 p-2 bg-yellow-50">0,50</td>
                                <td class="border border-slate-300 p-2 font-bold text-purple-600">=C2/B2*100</td>
                                <td class="border border-slate-300 p-2 font-bold text-indigo-600">=DEGRES(ATAN(C2/B2))</td>
                            </tr>
                            <tr>
                                <td class="border border-slate-300 p-2 font-bold">3</td>
                                <td class="border border-slate-300 p-2">Toit Garage</td>
                                <td class="border border-slate-300 p-2 bg-yellow-50">6,00</td>
                                <td class="border border-slate-300 p-2 bg-yellow-50">2,50</td>
                                <td class="border border-slate-300 p-2 font-bold text-purple-600">=C3/B3*100</td>
                                <td class="border border-slate-300 p-2 font-bold text-indigo-600">=DEGRES(ATAN(C3/B3))</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div class="p-4 bg-purple-50 border-l-4 border-purple-500 rounded-r-2xl space-y-1">
                    <h4 class="font-bold text-purple-950 text-sm">Formules Clés Excel/Calc à Retenir :</h4>
                    <p class="font-mono text-purple-900">• <strong>Calcul de l'angle en degrés :</strong> <code>=DEGRES(ATAN(Oppose/Adjacent))</code></p>
                    <p class="font-mono text-purple-900">• <strong>Calcul de l'hypoténuse :</strong> <code>=RACINE(B2^2 + C2^2)</code></p>
                </div>
            </div>
        </section>

    </main>
</body>
</html>`;

fs.writeFileSync(path.join(targetDir, 'tice.html'), ticeHtml, 'utf-8');
console.log('Built tice.html');

// ---------------------------------------------------------------------
// 6. EVAL.HTML
// ---------------------------------------------------------------------
const evalHtml = `<!DOCTYPE html>
<html lang="fr" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Évaluation Bilan - Trigonométrie 2nde Pro</title>
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
    <header class="bg-slate-900 text-white sticky top-0 z-50 border-b border-slate-800 shadow-md">
        <div class="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
            <div class="flex items-center gap-3">
                <div class="w-10 h-10 bg-red-500/20 border border-red-400/30 text-red-400 rounded-xl flex items-center justify-center font-bold">
                    <i class="fa-solid fa-graduation-cap text-lg"></i>
                </div>
                <div>
                    <span class="text-xs font-bold tracking-widest uppercase text-red-400">Séquence 5 • Seconde Professionnelle Mathématiques</span>
                    <h1 class="text-xl font-bold font-heading">Géométrie Plane & Trigonométrie</h1>
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

        <!-- ENTÊTE ÉVALUATION -->
        <div class="bg-slate-900 text-white p-6 md:p-8 rounded-3xl shadow-xl border border-slate-800 space-y-4">
            <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div>
                    <div class="flex items-center gap-2 mb-2">
                        <span class="bg-red-500 text-white text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">Évaluation Sommative</span>
                        <span class="bg-slate-800 text-slate-300 text-xs font-semibold px-3 py-1 rounded-full border border-slate-700">Durée : 45 min • Barème sur 20 pts</span>
                    </div>
                    <h2 class="text-3xl font-extrabold font-heading text-white">Évaluation : Géométrie Plane & Trigonométrie</h2>
                    <p class="text-sm text-slate-300 max-w-2xl">Vérification des compétences S'informer, Chercher, Modéliser, Calculer et Communiquer.</p>
                </div>

                <div class="flex items-center gap-2 no-print">
                    <button onclick="toggleCorrection()" id="btn-corr" class="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs px-5 py-3 rounded-xl shadow-md transition-colors flex items-center gap-2">
                        <i class="fa-solid fa-check-double"></i> Afficher le Corrigé Détaillé
                    </button>
                    <button onclick="window.print()" class="bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs px-4 py-3 rounded-xl border border-slate-700 shadow-md transition-colors">
                        <i class="fa-solid fa-print"></i>
                    </button>
                </div>
            </div>
        </div>

        <!-- EXERCICE 1 : CONNAISSANCES DE BASE (4 PTS) -->
        <section class="bg-white p-6 md:p-8 rounded-3xl border border-slate-200 card-shadow space-y-4">
            <div class="flex items-center justify-between border-b border-slate-100 pb-3">
                <h3 class="text-lg font-bold font-heading text-slate-900">Exercice 1 : Restitution de Connaissances & Formules (4 points)</h3>
                <span class="bg-slate-100 text-slate-800 font-bold text-xs px-3 py-1 rounded-full">/ 4 pts</span>
            </div>
            <div class="space-y-3 text-xs text-slate-700">
                <p>1. Écrire la formule donnant $\\sin(\\alpha)$ dans un triangle rectangle. (1 pt)</p>
                <p>2. Écrire la formule donnant $\\tan(\\alpha)$ en fonction des côtés. (1 pt)</p>
                <p>3. Si $\\tan(\\alpha) = 0{,}15$, quelle est la pente en pourcentage $\\%$ ? (1 pt)</p>
                <p>4. Énoncer la propriété sur la somme des 3 angles d'un triangle. (1 pt)</p>
            </div>

            <div class="eval-correction hidden p-4 bg-emerald-50 border-l-4 border-emerald-500 rounded-r-2xl font-mono text-xs text-slate-800 space-y-1">
                <h4 class="font-bold text-emerald-950">Corrigé Exercice 1 :</h4>
                <p>1. $\\sin(\\alpha) = \\frac{\\text{Opposé}}{\\text{Hypoténuse}}$ (1 pt)</p>
                <p>2. $\\tan(\\alpha) = \\frac{\\text{Opposé}}{\\text{Adjacents}}$ (1 pt)</p>
                <p>3. $\\text{Pente} = 0{,}15 \\times 100 = \\mathbf{15\\%}$ (1 pt)</p>
                <p>4. La somme des 3 angles d'un triangle est égale à $180^\\circ$. (1 pt)</p>
            </div>
        </section>

        <!-- EXERCICE 2 : CHARPENTE MÉTALLIQUE (6 PTS) -->
        <section class="bg-white p-6 md:p-8 rounded-3xl border border-slate-200 card-shadow space-y-4">
            <div class="flex items-center justify-between border-b border-slate-100 pb-3">
                <h3 class="text-lg font-bold font-heading text-slate-900">Exercice 2 : Charpente d'un Hangar Agricole (6 points)</h3>
                <span class="bg-slate-100 text-slate-800 font-bold text-xs px-3 py-1 rounded-full">/ 6 pts</span>
            </div>
            <div class="space-y-3 text-xs text-slate-700">
                <p>Un constructeur métallique conçoit un portique de hangar. Le demi-portique forme un triangle rectangle ABC avec :</p>
                <p class="font-semibold">• Base $AB = 8{,}00\\text{ m}$ (côté adjacents)<br>• Angle du toit $\\alpha = 22^\\circ$</p>
                <p>1. Calculer la hauteur au sommet $AC$ (côté opposé). (3 pts)<br>2. Calculer la longueur de la poutre inclinée $BC$ (hypoténuse). (3 pts)</p>
            </div>

            <div class="eval-correction hidden p-4 bg-emerald-50 border-l-4 border-emerald-500 rounded-r-2xl font-mono text-xs text-slate-800 space-y-1">
                <h4 class="font-bold text-emerald-950">Corrigé Exercice 2 :</h4>
                <p>1. $\\tan(22^\\circ) = \\frac{AC}{8} \\implies AC = 8 \\times \\tan(22^\\circ) = 8 \\times 0{,}4040 = \\mathbf{3{,}23\\text{ m}}$. (3 pts)</p>
                <p>2. $\\cos(22^\\circ) = \\frac{8}{BC} \\implies BC = \\frac{8}{\\cos(22^\\circ)} = \\frac{8}{0{,}9272} = \\mathbf{8{,}63\\text{ m}}$. (3 pts)</p>
            </div>
        </section>

        <!-- EXERCICE 3 : CONFORMITÉ RAMPE PMR (5 PTS) -->
        <section class="bg-white p-6 md:p-8 rounded-3xl border border-slate-200 card-shadow space-y-4">
            <div class="flex items-center justify-between border-b border-slate-100 pb-3">
                <h3 class="text-lg font-bold font-heading text-slate-900">Exercice 3 : Contrôle de Conformité PMR (5 points)</h3>
                <span class="bg-slate-100 text-slate-800 font-bold text-xs px-3 py-1 rounded-full">/ 5 pts</span>
            </div>
            <div class="space-y-3 text-xs text-slate-700">
                <p>Une rampe d'accès inclinée a une longueur au sol $L = 6{,}00\\text{ m}$ et monte une marche de hauteur $h = 0{,}36\\text{ m}$.</p>
                <p>1. Calculer la pente en $\%$ de cette rampe. (2.5 pts)<br>2. La norme exige une pente maximale de $5\\%$. La rampe est-elle conforme ? Justifier. (2.5 pts)</p>
            </div>

            <div class="eval-correction hidden p-4 bg-emerald-50 border-l-4 border-emerald-500 rounded-r-2xl font-mono text-xs text-slate-800 space-y-1">
                <h4 class="font-bold text-emerald-950">Corrigé Exercice 3 :</h4>
                <p>1. $\\text{Pente} = \\frac{0{,}36}{6{,}00} \\times 100 = \\mathbf{6{,}0\\%}$. (2.5 pts)</p>
                <p>2. Comme $6{,}0\\% > 5\\%$, la rampe **n'est pas conforme** aux normes d'accessibilité PMR. (2.5 pts)</p>
            </div>
        </section>

        <!-- EXERCICE 4 : TOPOGRAPHIE (5 PTS) -->
        <section class="bg-white p-6 md:p-8 rounded-3xl border border-slate-200 card-shadow space-y-4">
            <div class="flex items-center justify-between border-b border-slate-100 pb-3">
                <h3 class="text-lg font-bold font-heading text-slate-900">Exercice 4 : Hauteur d'une Grue de Chantier (5 points)</h3>
                <span class="bg-slate-100 text-slate-800 font-bold text-xs px-3 py-1 rounded-full">/ 5 pts</span>
            </div>
            <div class="space-y-3 text-xs text-slate-700">
                <p>Un technicien situé à une distance $D = 35\\text{ m}$ d'une grue mesure un angle de visée $\\alpha = 40^\\circ$ depuis une hauteur d'œil de $1{,}70\\text{ m}$.</p>
                <p>Calculer la hauteur totale $H$ de la grue. (5 pts)</p>
            </div>

            <div class="eval-correction hidden p-4 bg-emerald-50 border-l-4 border-emerald-500 rounded-r-2xl font-mono text-xs text-slate-800 space-y-1">
                <h4 class="font-bold text-emerald-950">Corrigé Exercice 4 :</h4>
                <p>• Hauteur partielle $h_{haut} = 35 \\times \\tan(40^\\circ) = 35 \\times 0{,}8391 = \\mathbf{29{,}37\\text{ m}}$.</p>
                <p>• Hauteur totale $H = 29{,}37 + 1{,}70 = \\mathbf{31{,}07\\text{ m}}$. (5 pts)</p>
            </div>
        </section>

    </main>

    <script>
        function toggleCorrection() {
            const list = document.querySelectorAll('.eval-correction');
            const btn = document.getElementById('btn-corr');
            let isHidden = list[0].classList.contains('hidden');

            list.forEach(el => {
                if (isHidden) el.classList.remove('hidden');
                else el.classList.add('hidden');
            });

            if (isHidden) {
                btn.innerHTML = '<i class="fa-solid fa-eye-slash"></i> Masquer le Corrigé';
                btn.className = 'bg-slate-700 hover:bg-slate-600 text-white font-bold text-xs px-5 py-3 rounded-xl shadow-md transition-colors flex items-center gap-2';
            } else {
                btn.innerHTML = '<i class="fa-solid fa-check-double"></i> Afficher le Corrigé Détaillé';
                btn.className = 'bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs px-5 py-3 rounded-xl shadow-md transition-colors flex items-center gap-2';
            }
        }
    </script>
</body>
</html>`;

fs.writeFileSync(path.join(targetDir, 'eval.html'), evalHtml, 'utf-8');
console.log('Built eval.html');

console.log('Successfully created all 6 files for geometrie-plane-trigonometrie sequence!');
