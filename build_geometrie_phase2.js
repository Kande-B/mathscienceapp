const fs = require('fs');
const path = require('path');

const baseDir = 'ressources/seconde/maths/geometrie-espace-volumes';

// =====================================================================
// 3. AUTOMATISMES.HTML (Flashcards 3D & Challenge 20 pts)
// =====================================================================
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

// =====================================================================
// 4. TD.HTML (10 EXERCICES COMPLETS AVEC CORRIGÉS DÉTAILLÉS)
// =====================================================================
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

        <!-- LISTE DES 10 EXERCICES -->
        <div class="space-y-6 text-xs">

            <!-- EXERCICE 1 -->
            <section class="bg-white p-6 rounded-3xl border border-slate-200 card-shadow space-y-4">
                <div class="flex items-center justify-between border-b border-slate-100 pb-3">
                    <span class="font-bold text-indigo-700 uppercase tracking-wider text-xs bg-indigo-50 px-3 py-1 rounded-full">Exercice 1 • Conversions de Volumes & Litres</span>
                    <span class="text-slate-400 font-medium">Capacité C3 • 4 points</span>
                </div>
                <p class="font-bold text-slate-900">Effectuer les conversions d'unités suivantes :</p>
                <p class="text-slate-800">a) $4,2 \\text{ m}^3 = \\dots \\text{ Litres}$ <br> b) $750 \\text{ cm}^3 = \\dots \\text{ Litres}$ <br> c) $0,085 \\text{ m}^3 = \\dots \\text{ dm}^3$ <br> d) $12,5 \\text{ Litres} = \\dots \\text{ cm}^3$</p>

                <details class="bg-slate-50 border border-slate-200 rounded-xl p-4">
                    <summary class="cursor-pointer font-bold text-indigo-700 hover:text-indigo-900">Consulter les corrigés rédigés</summary>
                    <div class="mt-3 space-y-2 font-mono text-slate-700 leading-relaxed border-t border-slate-200 pt-3">
                        <p>a) $4,2 \\text{ m}^3 = 4,2 \\times 1000 = \\mathbf{4\\,200 \\text{ L}}$.</p>
                        <p>b) $750 \\text{ cm}^3 = 750 \\text{ mL} = \\mathbf{0,75 \\text{ L}}$.</p>
                        <p>c) $0,085 \\text{ m}^3 = 0,085 \\times 1000 = \\mathbf{85 \\text{ dm}^3}$.</p>
                        <p>d) $12,5 \\text{ L} = 12,5 \\text{ dm}^3 = 12,5 \\times 1000 = \\mathbf{12\\,500 \\text{ cm}^3}$.</p>
                    </div>
                </details>
            </section>

            <!-- EXERCICE 2 -->
            <section class="bg-white p-6 rounded-3xl border border-slate-200 card-shadow space-y-4">
                <div class="flex items-center justify-between border-b border-slate-100 pb-3">
                    <span class="font-bold text-indigo-700 uppercase tracking-wider text-xs bg-indigo-50 px-3 py-1 rounded-full">Exercice 2 • Pavé Droit & Surfaçage de Peinture</span>
                    <span class="text-slate-400 font-medium">Capacité C3 • 4 points</span>
                </div>
                <p class="font-bold text-slate-900">Un caisson métallique parallélépipédique a pour dimensions $L = 2,5 \\text{ m}$, $l = 1,2 \\text{ m}$ et $h = 0,8 \\text{ m}$.</p>
                <p class="text-slate-800">1. Calculer son volume en $\\text{m}^3$ puis en Litres. <br> 2. Calculer l'aire totale de sa surface extérieure à peindre.</p>

                <details class="bg-slate-50 border border-slate-200 rounded-xl p-4">
                    <summary class="cursor-pointer font-bold text-indigo-700 hover:text-indigo-900">Consulter les corrigés rédigés</summary>
                    <div class="mt-3 space-y-2 font-mono text-slate-700 leading-relaxed border-t border-slate-200 pt-3">
                        <p>1. $V = 2,5 \\times 1,2 \\times 0,8 = \\mathbf{2,4 \\text{ m}^3} = \\mathbf{2\\,400 \\text{ Litres}}$.</p>
                        <p>2. $A_{\\text{tot}} = 2(2,5 \\times 1,2 + 2,5 \\times 0,8 + 1,2 \\times 0,8) = 2(3 + 2 + 0,96) = 2 \\times 5,96 = \\mathbf{11,92 \\text{ m}^2}$.</p>
                    </div>
                </details>
            </section>

            <!-- EXERCICE 3 -->
            <section class="bg-white p-6 rounded-3xl border border-slate-200 card-shadow space-y-4">
                <div class="flex items-center justify-between border-b border-slate-100 pb-3">
                    <span class="font-bold text-indigo-700 uppercase tracking-wider text-xs bg-indigo-50 px-3 py-1 rounded-full">Exercice 3 • Volume & Capacité d'un Fût Cylindrique</span>
                    <span class="text-slate-400 font-medium">Capacité C3 • 4 points</span>
                </div>
                <p class="font-bold text-slate-900">Un fût cylindrique a un rayon $R = 40 \\text{ cm}$ et une hauteur $h = 90 \\text{ cm}$.</p>
                <p class="text-slate-800">Calculer son volume en $\\text{cm}^3$, puis sa capacité en Litres (arrondir au dixième).</p>

                <details class="bg-slate-50 border border-slate-200 rounded-xl p-4">
                    <summary class="cursor-pointer font-bold text-indigo-700 hover:text-indigo-900">Consulter les corrigés rédigés</summary>
                    <div class="mt-3 space-y-2 font-mono text-slate-700 leading-relaxed border-t border-slate-200 pt-3">
                        <p>• $V = \\pi \\times R^2 \\times h = \\pi \\times 40^2 \\times 90 = 144\\,000 \\pi \\approx \\mathbf{452\\,389,3 \\text{ cm}^3}$.</p>
                        <p>• En Litres ($1 \\text{ L} = 1000 \\text{ cm}^3$) : $V \\approx \\mathbf{452,4 \\text{ Litres}}$.</p>
                    </div>
                </details>
            </section>

            <!-- EXERCICE 4 -->
            <section class="bg-white p-6 rounded-3xl border border-slate-200 card-shadow space-y-4">
                <div class="flex items-center justify-between border-b border-slate-100 pb-3">
                    <span class="font-bold text-indigo-700 uppercase tracking-wider text-xs bg-indigo-50 px-3 py-1 rounded-full">Exercice 4 • Prisme Droit à Base Triangulaire</span>
                    <span class="text-slate-400 font-medium">Capacité C3 • 4 points</span>
                </div>
                <p class="font-bold text-slate-900">Un prisme droit de hauteur $h = 50 \\text{ cm}$ a pour base un triangle rectangle de base $b = 12 \\text{ cm}$ et hauteur $h_b = 9 \\text{ cm}$.</p>
                <p class="text-slate-800">Calculer l'aire de la base $A_{\\text{base}}$ puis le volume $V$ du prisme en $\\text{cm}^3$.</p>

                <details class="bg-slate-50 border border-slate-200 rounded-xl p-4">
                    <summary class="cursor-pointer font-bold text-indigo-700 hover:text-indigo-900">Consulter les corrigés rédigés</summary>
                    <div class="mt-3 space-y-2 font-mono text-slate-700 leading-relaxed border-t border-slate-200 pt-3">
                        <p>• $A_{\\text{base}} = \\frac{12 \\times 9}{2} = \\mathbf{54 \\text{ cm}^2}$.</p>
                        <p>• $V = A_{\\text{base}} \\times h = 54 \\times 50 = \\mathbf{2\\,700 \\text{ cm}^3} = \\mathbf{2,7 \\text{ dm}^3}$.</p>
                    </div>
                </details>
            </section>

            <!-- EXERCICE 5 -->
            <section class="bg-white p-6 rounded-3xl border border-slate-200 card-shadow space-y-4">
                <div class="flex items-center justify-between border-b border-slate-100 pb-3">
                    <span class="font-bold text-indigo-700 uppercase tracking-wider text-xs bg-indigo-50 px-3 py-1 rounded-full">Exercice 5 • Trémie Conique de Silo</span>
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

            <!-- EXERCICE 6 -->
            <section class="bg-white p-6 rounded-3xl border border-slate-200 card-shadow space-y-4">
                <div class="flex items-center justify-between border-b border-slate-100 pb-3">
                    <span class="font-bold text-indigo-700 uppercase tracking-wider text-xs bg-indigo-50 px-3 py-1 rounded-full">Exercice 6 • Reservoir Sphérique Sous Pression</span>
                    <span class="text-slate-400 font-medium">Capacité C3 • 4 points</span>
                </div>
                <p class="font-bold text-slate-900">Un réservoir sphérique de gaz a un diamètre $D = 3 \\text{ m}$ ($R = 1,5 \\text{ m}$).</p>
                <p class="text-slate-800">Calculer son aire extérieure $A$ et son volume $V$ en $\\text{m}^3$.</p>

                <details class="bg-slate-50 border border-slate-200 rounded-xl p-4">
                    <summary class="cursor-pointer font-bold text-indigo-700 hover:text-indigo-900">Consulter les corrigés rédigés</summary>
                    <div class="mt-3 space-y-2 font-mono text-slate-700 leading-relaxed border-t border-slate-200 pt-3">
                        <p>• $A = 4 \\pi R^2 = 4 \\pi (1,5)^2 = 9 \\pi \\approx \\mathbf{28,274 \\text{ m}^2}$.</p>
                        <p>• $V = \\frac{4}{3} \\pi R^3 = \\frac{4}{3} \\pi (1,5)^3 = 4,5 \\pi \\approx \\mathbf{14,137 \\text{ m}^3}$.</p>
                    </div>
                </details>
            </section>

            <!-- EXERCICE 7 -->
            <section class="bg-white p-6 rounded-3xl border border-slate-200 card-shadow space-y-4">
                <div class="flex items-center justify-between border-b border-slate-100 pb-3">
                    <span class="font-bold text-emerald-700 uppercase tracking-wider text-xs bg-emerald-50 px-3 py-1 rounded-full">Exercice 7 • Solide Composé : Citerne Cylindro-Sphérique</span>
                    <span class="text-slate-400 font-medium">Capacité C1 à C4 • 4 points</span>
                </div>
                <p class="text-slate-800 leading-relaxed">
                    Une citerne routière est formée d'un cylindre central de longueur $h = 4 \\text{ m}$ et de rayon $R = 0,8 \\text{ m}$, fermé par deux demi-sphères de même rayon $R = 0,8 \\text{ m}$. <br>
                    Calculer le volume total de la citerne en $\\text{m}^3$ puis sa capacité en Litres.
                </p>

                <details class="bg-slate-50 border border-slate-200 rounded-xl p-4">
                    <summary class="cursor-pointer font-bold text-emerald-700 hover:text-emerald-900">Consulter la correction détaillée</summary>
                    <div class="mt-3 space-y-2 text-slate-700 border-t border-slate-200 pt-3 font-mono">
                        <p>• Volume Cylindre : $V_{\\text{cyl}} = \\pi (0,8)^2 \\times 4 = 2,56 \\pi \\approx 8,0425 \\text{ m}^3$.</p>
                        <p>• Volume 2 demi-sphères (1 sphère) : $V_{\\text{sph}} = \\frac{4}{3} \\pi (0,8)^3 \\approx 2,1447 \\text{ m}^3$.</p>
                        <p>• Volume total : $V_{\\text{tot}} = 8,0425 + 2,1447 = \\mathbf{10,1872 \\text{ m}^3} = \\mathbf{10\\,187,2 \\text{ Litres}}$.</p>
                    </div>
                </details>
            </section>

            <!-- EXERCICE 8 -->
            <section class="bg-white p-6 rounded-3xl border border-slate-200 card-shadow space-y-4">
                <div class="flex items-center justify-between border-b border-slate-100 pb-3">
                    <span class="font-bold text-emerald-700 uppercase tracking-wider text-xs bg-emerald-50 px-3 py-1 rounded-full">Exercice 8 • Solide Percé : Pièce Usinée & Masse Nette</span>
                    <span class="text-slate-400 font-medium">Capacité C1 à C4 • 4 points</span>
                </div>
                <p class="text-slate-800 leading-relaxed">
                    Un bloc d'aluminium ($\\rho = 2,7 \\text{ kg/dm}^3$) de forme parallélépipédique ($20 \\text{ cm} \\times 10 \\text{ cm} \\times 8 \\text{ cm}$) est percé de part en part par un trou cylindrique de diamètre $D = 4 \\text{ cm}$ ($R = 2 \\text{ cm}$) sur la hauteur de $8 \\text{ cm}$. <br>
                    1. Calculer le volume brut du bloc et le volume du trou cylindrique. <br> 2. En déduire la masse nette de la pièce finale.
                </p>

                <details class="bg-slate-50 border border-slate-200 rounded-xl p-4">
                    <summary class="cursor-pointer font-bold text-emerald-700 hover:text-emerald-900">Consulter la correction détaillée</summary>
                    <div class="mt-3 space-y-2 text-slate-700 border-t border-slate-200 pt-3 font-mono">
                        <p>1. $V_{\\text{brut}} = 20 \\times 10 \\times 8 = 1\\,600 \\text{ cm}^3 = 1,6 \\text{ dm}^3$.</p>
                        <p>2. $V_{\\text{trou}} = \\pi \\times 2^2 \\times 8 = 32 \\pi \\approx 100,53 \\text{ cm}^3 = 0,1005 \\text{ dm}^3$.</p>
                        <p>3. $V_{\\text{net}} = 1,6 - 0,1005 = \\mathbf{1,4995 \\text{ dm}^3}$.</p>
                        <p>4. $m = \\rho \\times V_{\\text{net}} = 2,7 \\times 1,4995 = \\mathbf{4,048 \\text{ kg}}$.</p>
                    </div>
                </details>
            </section>

            <!-- EXERCICE 9 -->
            <section class="bg-white p-6 rounded-3xl border border-slate-200 card-shadow space-y-4">
                <div class="flex items-center justify-between border-b border-slate-100 pb-3">
                    <span class="font-bold text-emerald-700 uppercase tracking-wider text-xs bg-emerald-50 px-3 py-1 rounded-full">Exercice 9 • Problème Autonomie Réservoir Essence</span>
                    <span class="text-slate-400 font-medium">Capacité C1 à C4 • 4 points</span>
                </div>
                <p class="text-slate-800 leading-relaxed">
                    Un réservoir d'essence parallélépipédique sur un véhicule utilitaire mesure $L = 80 \\text{ cm}$, $l = 45 \\text{ cm}$ et $h = 25 \\text{ cm}$. <br>
                    1. Calculer la capacité du réservoir en Litres. <br> 2. Si le véhicule consomme $6,5 \\text{ Litres}$ aux $100 \\text{ km}$, quelle est son autonomie maximale en km ?
                </p>

                <details class="bg-slate-50 border border-slate-200 rounded-xl p-4">
                    <summary class="cursor-pointer font-bold text-emerald-700 hover:text-emerald-900">Consulter la correction détaillée</summary>
                    <div class="mt-3 space-y-2 text-slate-700 border-t border-slate-200 pt-3 font-mono">
                        <p>1. $V = 80 \\times 45 \\times 25 = 90\\,000 \\text{ cm}^3 = \\mathbf{90 \\text{ Litres}}$.</p>
                        <p>2. Autonomie : $\\frac{90}{6,5} \\times 100 \\approx \\mathbf{1\\,384,6 \\text{ km}}$.</p>
                    </div>
                </details>
            </section>

            <!-- EXERCICE 10 -->
            <section class="bg-white p-6 rounded-3xl border border-slate-200 card-shadow space-y-4">
                <div class="flex items-center justify-between border-b border-slate-100 pb-3">
                    <span class="font-bold text-emerald-700 uppercase tracking-wider text-xs bg-emerald-50 px-3 py-1 rounded-full">Exercice 10 • Problème BTP : Terrassement & Foisonnement</span>
                    <span class="text-slate-400 font-medium">Capacité C1 à C4 • 4 points</span>
                </div>
                <p class="text-slate-800 leading-relaxed">
                    Pour poser une canalisation, on creuse une tranchée de longueur $L = 50 \\text{ m}$, largeur $l = 1,2 \\text{ m}$ et profondeur $h = 1,8 \\text{ m}$. <br>
                    1. Calculer le volume de la tranchée $V_{\\text{tranchée}}$ en $\\text{m}^3$. <br>
                    2. La terre remuée foisonne (son volume augmente de 25 %, facteur $1,25$). Calculer le volume de terre à évacuer. <br>
                    3. Combien de camions benne de $10 \\text{ m}^3$ faut-il prévoir ?
                </p>

                <details class="bg-slate-50 border border-slate-200 rounded-xl p-4">
                    <summary class="cursor-pointer font-bold text-emerald-700 hover:text-emerald-900">Consulter la correction détaillée</summary>
                    <div class="mt-3 space-y-2 text-slate-700 border-t border-slate-200 pt-3 font-mono">
                        <p>1. $V = 50 \\times 1,2 \\times 1,8 = \\mathbf{108 \\text{ m}^3}$.</p>
                        <p>2. $V_{\\text{foisonné}} = 108 \\times 1,25 = \\mathbf{135 \\text{ m}^3}$.</p>
                        <p>3. Camions : $\\frac{135}{10} = 13,5 \\implies$ **14 camions benne**.</p>
                    </div>
                </details>
            </section>

        </div>
    </main>

</body>
</html>`;

fs.writeFileSync(path.join(baseDir, 'td.html'), tdHtml, 'utf8');
console.log('Successfully wrote ultra-rich td.html with 10 exercises');
