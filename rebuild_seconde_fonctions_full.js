const fs = require('fs');
const path = require('path');

const targetDir = 'ressources/seconde/maths/fonctions-reference';

// ---------------------------------------------------------------------
// 3. AUTOMATISMES.HTML
// ---------------------------------------------------------------------
const automatismesHtml = `<!DOCTYPE html>
<html lang="fr" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Automatismes & Rituels - Fonctions de Référence (Seconde Pro)</title>
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
                    <h1 class="text-xl font-bold font-heading">Fonctions de Référence</h1>
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
                        <span class="bg-slate-800 text-slate-300 text-xs font-semibold px-3 py-1 rounded-full border border-slate-700">Calcul Mental & Réflexes de Fonctions</span>
                    </div>
                    <h2 class="text-3xl font-extrabold font-heading text-white">Automatismes : Fonctions de Référence</h2>
                    <p class="text-sm text-slate-300 max-w-2xl">Entraînez vos réflexes graphiques et algébriques avec 6 Flashcards 3D interactives et mesurez votre score au Défi Autonome sur 20 points.</p>
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
                            <span class="text-[10px] font-extrabold uppercase tracking-widest text-yellow-400">Flashcard 1 • Image</span>
                            <div class="text-center font-bold text-base">Si $f(x) = 3x^2 - 7$, <br>calculer <span class="text-sky-300">$f(-2)$</span></div>
                            <span class="text-[10px] text-slate-400 text-center">Cliquez pour voir le verso <i class="fa-solid fa-rotate mr-1"></i></span>
                        </div>
                        <div class="backface-hidden rotate-y-180 absolute inset-0 bg-emerald-600 text-white rounded-2xl p-5 flex flex-col justify-between shadow-md">
                            <span class="text-[10px] font-extrabold uppercase tracking-widest text-emerald-200">Réponse 1</span>
                            <div class="text-center font-bold text-sm leading-relaxed">
                                $f(-2) = 3(-2)^2 - 7 = 12 - 7$ <br>
                                <span class="text-xl text-yellow-300 font-mono">$f(-2) = 5$</span>
                            </div>
                            <span class="text-[10px] text-emerald-200 text-center">Attention au carré de (-2) !</span>
                        </div>
                    </div>
                </div>

                <!-- FC 2 -->
                <div class="perspective-1000 h-44 cursor-pointer" onclick="this.querySelector('.transform-style-3d').classList.toggle('rotate-y-180')">
                    <div class="transform-style-3d relative w-full h-full">
                        <div class="backface-hidden absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-2xl p-5 flex flex-col justify-between border border-slate-700 shadow-md">
                            <span class="text-[10px] font-extrabold uppercase tracking-widest text-yellow-400">Flashcard 2 • Nom de Courbe</span>
                            <div class="text-center font-bold text-base">Comment s'appelle la courbe d'équation <br><span class="text-sky-300">$y = x^2$</span> ?</div>
                            <span class="text-[10px] text-slate-400 text-center">Cliquez pour voir le verso <i class="fa-solid fa-rotate mr-1"></i></span>
                        </div>
                        <div class="backface-hidden rotate-y-180 absolute inset-0 bg-emerald-600 text-white rounded-2xl p-5 flex flex-col justify-between shadow-md">
                            <span class="text-[10px] font-extrabold uppercase tracking-widest text-emerald-200">Réponse 2</span>
                            <div class="text-center font-bold text-sm leading-relaxed">
                                C'est une <br>
                                <span class="text-xl text-yellow-300 font-mono">PARABOLE</span>
                            </div>
                            <span class="text-[10px] text-emerald-200 text-center">Symétrique / axe Oy</span>
                        </div>
                    </div>
                </div>

                <!-- FC 3 -->
                <div class="perspective-1000 h-44 cursor-pointer" onclick="this.querySelector('.transform-style-3d').classList.toggle('rotate-y-180')">
                    <div class="transform-style-3d relative w-full h-full">
                        <div class="backface-hidden absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-2xl p-5 flex flex-col justify-between border border-slate-700 shadow-md">
                            <span class="text-[10px] font-extrabold uppercase tracking-widest text-yellow-400">Flashcard 3 • Inverse</span>
                            <div class="text-center font-bold text-base">Quelle est la valeur interdite pour <br><span class="text-sky-300">$f(x) = \frac{1}{x}$</span> ?</div>
                            <span class="text-[10px] text-slate-400 text-center">Cliquez pour voir le verso <i class="fa-solid fa-rotate mr-1"></i></span>
                        </div>
                        <div class="backface-hidden rotate-y-180 absolute inset-0 bg-emerald-600 text-white rounded-2xl p-5 flex flex-col justify-between shadow-md">
                            <span class="text-[10px] font-extrabold uppercase tracking-widest text-emerald-200">Réponse 3</span>
                            <div class="text-center font-bold text-sm leading-relaxed">
                                La valeur interdite est <br>
                                <span class="text-xl text-yellow-300 font-mono">$x = 0$</span>
                            </div>
                            <span class="text-[10px] text-emerald-200 text-center">Division par 0 impossible</span>
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
                    <h3 class="text-2xl font-bold font-heading text-white mt-1"><i class="fa-solid fa-trophy text-yellow-400 mr-2"></i> Challenge Flash Fonctions (Sur 20 Points)</h3>
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
                    <p class="font-bold text-white">Q1 (5 pts) : Si $f(x) = -4x + 9$, quelle est l'image de 3 ?</p>
                    <div class="flex flex-wrap gap-2">
                        <button onclick="checkAnswer(this, 1, true, 5)" class="px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded-xl transition-colors">A) f(3) = -3</button>
                        <button onclick="checkAnswer(this, 1, false, 5)" class="px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded-xl transition-colors">B) f(3) = 21</button>
                    </div>
                </div>

                <!-- Q2 -->
                <div class="p-4 bg-slate-800 rounded-2xl border border-slate-700 space-y-2">
                    <p class="font-bold text-white">Q2 (5 pts) : Quels sont les antécédents de 25 par la fonction carré $f(x) = x^2$ ?</p>
                    <div class="flex flex-wrap gap-2">
                        <button onclick="checkAnswer(this, 2, true, 5)" class="px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded-xl transition-colors">A) -5 et 5</button>
                        <button onclick="checkAnswer(this, 2, false, 5)" class="px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded-xl transition-colors">B) Seulement 5</button>
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

fs.writeFileSync(path.join(targetDir, 'automatismes.html'), automatismesHtml, 'utf8');
console.log('Rebuilt automatismes.html for fonctions-reference');

// ---------------------------------------------------------------------
// 4. TD.HTML
// ---------------------------------------------------------------------
const tdHtml = `<!DOCTYPE html>
<html lang="fr" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TD & Exercices Corrigés - Fonctions de Référence (Seconde Pro)</title>
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
                    <h1 class="text-xl font-bold font-heading">Fonctions de Référence</h1>
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
                    <h2 class="text-3xl font-extrabold font-heading text-white">TD : 10 Exercices de Fonctions Corrigés</h2>
                    <p class="text-sm text-slate-300 max-w-2xl">Exercices sur les calculs d'images, antécédents, étude de variations et applications aux 3 fonctions usuelles (Affine, Carré, Inverse).</p>
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
                    <span class="font-bold text-indigo-700 uppercase tracking-wider text-xs bg-indigo-50 px-3 py-1 rounded-full">Exercice 1 • Calculs d'Images Algébriques</span>
                    <span class="text-slate-400 font-medium">Capacité C3 • 4 points</span>
                </div>
                <p class="font-bold text-slate-900">Soit la fonction $f(x) = -2x^2 + 5x + 3$ définie sur $\mathbb{R}$.</p>
                <p class="text-slate-800">1. Calculer l'image de 0, puis l'image de 4 par la fonction $f$.</p>

                <details class="bg-slate-50 border border-slate-200 rounded-xl p-4">
                    <summary class="cursor-pointer font-bold text-indigo-700 hover:text-indigo-900">Consulter les corrigés rédigés</summary>
                    <div class="mt-3 space-y-2 font-mono text-slate-700 leading-relaxed border-t border-slate-200 pt-3">
                        <p>• $f(0) = -2(0)^2 + 5(0) + 3 = \mathbf{3}$.</p>
                        <p>• $f(4) = -2(4)^2 + 5(4) + 3 = -32 + 20 + 3 = \mathbf{-9}$.</p>
                    </div>
                </details>
            </section>

            <!-- EXERCICE 2 -->
            <section class="bg-white p-6 rounded-3xl border border-slate-200 card-shadow space-y-4">
                <div class="flex items-center justify-between border-b border-slate-100 pb-3">
                    <span class="font-bold text-indigo-700 uppercase tracking-wider text-xs bg-indigo-50 px-3 py-1 rounded-full">Exercice 2 • Antécédents de la Fonction Carré</span>
                    <span class="text-slate-400 font-medium">Capacité C3 • 4 points</span>
                </div>
                <p class="font-bold text-slate-900">Soit la fonction $g(x) = x^2$ définie sur $\mathbb{R}$.</p>
                <p class="text-slate-800">Trouver les antécédents éventuels de 49, puis de $-16$.</p>

                <details class="bg-slate-50 border border-slate-200 rounded-xl p-4">
                    <summary class="cursor-pointer font-bold text-indigo-700 hover:text-indigo-900">Consulter les corrigés rédigés</summary>
                    <div class="mt-3 space-y-2 font-mono text-slate-700 leading-relaxed border-t border-slate-200 pt-3">
                        <p>• Antécédents de 49 : On cherche $x$ tel que $x^2 = 49 \implies \mathbf{x = 7 \text{ et } x = -7}$.</p>
                        <p>• Antécédents de $-16$ : Un carré est toujours positif ou nul en réels, donc $-16$ n'a **aucun antécédent**.</p>
                    </div>
                </details>
            </section>

        </div>
    </main>

</body>
</html>`;

fs.writeFileSync(path.join(targetDir, 'td.html'), tdHtml, 'utf8');
console.log('Rebuilt td.html for fonctions-reference');

// ---------------------------------------------------------------------
// 5. TICE.HTML
// ---------------------------------------------------------------------
const ticeHtml = `<!DOCTYPE html>
<html lang="fr" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TP Numérique & TICE - Fonctions de Référence (Seconde Pro)</title>
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
                    <h1 class="text-xl font-bold font-heading">Fonctions de Référence</h1>
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
                    <h2 class="text-3xl font-extrabold font-heading text-white">Tracé de Courbes & Analyse Numérique sur GeoGebra et Tableur</h2>
                    <p class="text-sm text-slate-300 max-w-2xl">Utilisation de la feuille de calcul et de la fenêtre graphique GeoGebra pour faire varier les coefficients d'une parabole et d'une hyperbole.</p>
                </div>
            </div>
        </div>

        <!-- PARTIE 1 : GEOGEBRA -->
        <section class="bg-white p-6 md:p-8 rounded-3xl border border-slate-200 card-shadow space-y-6">
            <div class="flex items-center gap-3 border-b border-slate-100 pb-4">
                <div class="w-10 h-10 bg-purple-100 text-purple-700 rounded-xl flex items-center justify-center font-bold text-lg">
                    <i class="fa-solid fa-shapes text-purple-600"></i>
                </div>
                <div>
                    <span class="text-xs font-bold text-purple-600 uppercase tracking-wider">Partie 1 • GeoGebra Géométrie Dynamique</span>
                    <h3 class="text-xl font-bold font-heading text-slate-900">Influence du Coefficient $a$ sur la Parabole $y = a \cdot x^2$</h3>
                </div>
            </div>

            <div class="space-y-4 text-xs leading-relaxed">
                <p class="text-slate-700">1. Créer un curseur $a$ allant de $-5$ à $5$ avec un pas de $0.5$.</p>
                <p class="text-slate-700">2. Saisir la fonction : <code>f(x) = a * x^2</code>.</p>
                <p class="text-slate-700">3. Observer l'orientation des branches selon le signe de $a$.</p>
            </div>
        </section>

    </main>

</body>
</html>`;

fs.writeFileSync(path.join(targetDir, 'tice.html'), ticeHtml, 'utf8');
console.log('Rebuilt tice.html for fonctions-reference');

// ---------------------------------------------------------------------
// 6. EVAL.HTML
// ---------------------------------------------------------------------
const evalHtml = `<!DOCTYPE html>
<html lang="fr" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Évaluation Bilan - Fonctions de Référence (Seconde Pro)</title>
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
                    <h1 class="text-xl font-bold font-heading">Fonctions de Référence</h1>
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
                    <h2 class="text-3xl font-extrabold font-heading text-white">Évaluation : Fonctions de Référence</h2>
                    <p class="text-sm text-slate-300 max-w-2xl">Sujet officiel sur 20 points évaluant la maîtrise des calculs d'images, antécédents, tableaux de variations et modélisation de trajectoire/coûts.</p>
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
                    <h3 class="font-bold text-slate-900 text-sm">Partie 1 • Automatismes & Vocabulaire (4 Points)</h3>
                    <span class="bg-slate-100 text-slate-700 font-bold px-2.5 py-1 rounded-full text-[11px]">4 Pts</span>
                </div>

                <div class="space-y-3">
                    <p class="font-semibold text-slate-800">1.1 Calculer l'image de $-4$ par la fonction $f(x) = x^2 + 6$ (2 pts).</p>
                    <p class="font-semibold text-slate-800">1.2 Donner les antécédents éventuels de $36$ par la fonction carré (2 pts).</p>
                </div>
            </section>

            <!-- PARTIE 2 -->
            <section class="bg-white p-6 rounded-3xl border border-slate-200 card-shadow space-y-4">
                <div class="flex items-center justify-between border-b border-slate-100 pb-3">
                    <h3 class="font-bold text-slate-900 text-sm">Partie 2 • Tableau de Variations (6 Points)</h3>
                    <span class="bg-slate-100 text-slate-700 font-bold px-2.5 py-1 rounded-full text-[11px]">6 Pts</span>
                </div>

                <div class="space-y-3">
                    <p class="font-semibold text-slate-800">Soit la fonction $g(x) = -x^2 + 8x$ définie sur $[0 \;;\; 8]$.</p>
                    <p>2.1 Compléter le tableau de valeurs pour $x = 0 ; 2 ; 4 ; 6 ; 8$ (3 pts).</p>
                    <p>2.2 Dresser le tableau de variations et indiquer le maximum (3 pts).</p>
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
                            <p>1.1 $f(-4) = (-4)^2 + 6 = 16 + 6 = \mathbf{22}$ (2 pts)</p>
                            <p>1.2 Antécédents de 36 : $x = \mathbf{-6}$ et $x = \mathbf{6}$ (2 pts)</p>
                        </div>
                    </div>
                </details>
            </section>

        </div>
    </main>

</body>
</html>`;

fs.writeFileSync(path.join(targetDir, 'eval.html'), evalHtml, 'utf8');
console.log('Rebuilt eval.html for fonctions-reference');
