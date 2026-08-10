<!DOCTYPE html>
<html lang="fr" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Automatismes & Rituels - Résolution de Problèmes du 1er Degré (Seconde Pro)</title>
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
                    <h1 class="text-xl font-bold font-heading">Résolution de Problèmes du 1er Degré</h1>
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
                        <span class="bg-slate-800 text-slate-300 text-xs font-semibold px-3 py-1 rounded-full border border-slate-700">Calcul Mental & Réflexes Algébriques</span>
                    </div>
                    <h2 class="text-3xl font-extrabold font-heading text-white">Automatismes : Équations & Inéquations</h2>
                    <p class="text-sm text-slate-300 max-w-2xl">Mémorisez les règles de résolution et d'inversion des inégalités par un nombre négatif avec 6 Flashcards 3D et mesurez votre score au Défi Autonome sur 20 points.</p>
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
                        <h3 class="text-xl font-bold font-heading text-slate-900">Flashcards 3D Équations & Inéquations</h3>
                        <p class="text-xs text-slate-500 font-medium">Cliquez sur une carte pour faire pivoter et découvrir la réponse</p>
                    </div>
                </div>
            </div>

            <!-- Grille des Flashcards -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                <!-- FC 1 -->
                <div class="perspective-1000 h-44 cursor-pointer" onclick="this.querySelector('.transform-style-3d').classList.toggle('rotate-y-180')">
                    <div class="transform-style-3d relative w-full h-full">
                        <div class="backface-hidden absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-2xl p-5 flex flex-col justify-between border border-slate-700 shadow-md">
                            <span class="text-[10px] font-extrabold uppercase tracking-widest text-yellow-400">Flashcard 1 • Inéquation</span>
                            <div class="text-center font-bold text-base">Résoudre : <br><span class="text-rose-300">$-3x \leqslant 12$</span></div>
                            <span class="text-[10px] text-slate-400 text-center">Cliquez pour voir le verso <i class="fa-solid fa-rotate mr-1"></i></span>
                        </div>
                        <div class="backface-hidden rotate-y-180 absolute inset-0 bg-rose-600 text-white rounded-2xl p-5 flex flex-col justify-between shadow-md">
                            <span class="text-[10px] font-extrabold uppercase tracking-widest text-rose-200">Réponse 1</span>
                            <div class="text-center font-bold text-sm leading-relaxed">
                                Division par un nombre négatif (-3) : <br>
                                <span class="text-xl text-yellow-300 font-mono">$x \geqslant -4$</span>
                            </div>
                            <span class="text-[10px] text-rose-200 text-center">Le sens de l'inégalité CHANGE !</span>
                        </div>
                    </div>
                </div>

                <!-- FC 2 -->
                <div class="perspective-1000 h-44 cursor-pointer" onclick="this.querySelector('.transform-style-3d').classList.toggle('rotate-y-180')">
                    <div class="transform-style-3d relative w-full h-full">
                        <div class="backface-hidden absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-2xl p-5 flex flex-col justify-between border border-slate-700 shadow-md">
                            <span class="text-[10px] font-extrabold uppercase tracking-widest text-yellow-400">Flashcard 2 • Équation</span>
                            <div class="text-center font-bold text-base">Résoudre : <br><span class="text-sky-300">$5x - 8 = 22$</span></div>
                            <span class="text-[10px] text-slate-400 text-center">Cliquez pour voir le verso <i class="fa-solid fa-rotate mr-1"></i></span>
                        </div>
                        <div class="backface-hidden rotate-y-180 absolute inset-0 bg-emerald-600 text-white rounded-2xl p-5 flex flex-col justify-between shadow-md">
                            <span class="text-[10px] font-extrabold uppercase tracking-widest text-emerald-200">Réponse 2</span>
                            <div class="text-center font-bold text-sm leading-relaxed">
                                $5x = 22 + 8 = 30$ <br>
                                <span class="text-xl text-yellow-300 font-mono">$x = 6$</span>
                            </div>
                            <span class="text-[10px] text-emerald-200 text-center">Isolement en 2 étapes</span>
                        </div>
                    </div>
                </div>

                <!-- FC 3 -->
                <div class="perspective-1000 h-44 cursor-pointer" onclick="this.querySelector('.transform-style-3d').classList.toggle('rotate-y-180')">
                    <div class="transform-style-3d relative w-full h-full">
                        <div class="backface-hidden absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-2xl p-5 flex flex-col justify-between border border-slate-700 shadow-md">
                            <span class="text-[10px] font-extrabold uppercase tracking-widest text-yellow-400">Flashcard 3 • Intervalle</span>
                            <div class="text-center font-bold text-base">Écrire en intervalle : <br><span class="text-sky-300">$x > 7$</span></div>
                            <span class="text-[10px] text-slate-400 text-center">Cliquez pour voir le verso <i class="fa-solid fa-rotate mr-1"></i></span>
                        </div>
                        <div class="backface-hidden rotate-y-180 absolute inset-0 bg-emerald-600 text-white rounded-2xl p-5 flex flex-col justify-between shadow-md">
                            <span class="text-[10px] font-extrabold uppercase tracking-widest text-emerald-200">Réponse 3</span>
                            <div class="text-center font-bold text-sm leading-relaxed">
                                Strictement supérieur à 7 : <br>
                                <span class="text-xl text-yellow-300 font-mono">$S = ]7 \;;\; +\infty[$</span>
                            </div>
                            <span class="text-[10px] text-emerald-200 text-center">Crochet ouvert en 7</span>
                        </div>
                    </div>
                </div>

            </div>
        </section>

        <!-- SECTION 2 : CHALLENGE INTERACTIF AUTONOME -->
        <section class="bg-slate-900 text-white p-6 md:p-8 rounded-3xl border border-slate-800 shadow-xl space-y-6">
            <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-4">
                <div>
                    <span class="bg-yellow-500 text-slate-950 text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">Test Autonome</span>
                    <h3 class="text-2xl font-bold font-heading text-white mt-1"><i class="fa-solid fa-trophy text-yellow-400 mr-2"></i> Challenge Flash Équations & Inéquations (Sur 20 Points)</h3>
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
                    <p class="font-bold text-white">Q1 (4 pts) : Quelle est la solution de l'inéquation $-5x < 20$ ?</p>
                    <div class="flex flex-wrap gap-2">
                        <button onclick="checkAnswer(this, 1, true, 4)" class="px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded-xl transition-colors">A) x > -4</button>
                        <button onclick="checkAnswer(this, 1, false, 4)" class="px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded-xl transition-colors">B) x < -4</button>
                        <button onclick="checkAnswer(this, 1, false, 4)" class="px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded-xl transition-colors">C) x > 4</button>
                    </div>
                </div>

                <!-- Q2 -->
                <div class="p-4 bg-slate-800 rounded-2xl border border-slate-700 space-y-2">
                    <p class="font-bold text-white">Q2 (4 pts) : Quelle est la solution de l'inéquation $2x + 6 \leqslant 14$ ?</p>
                    <div class="flex flex-wrap gap-2">
                        <button onclick="checkAnswer(this, 2, true, 4)" class="px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded-xl transition-colors">A) x ≤ 4</button>
                        <button onclick="checkAnswer(this, 2, false, 4)" class="px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded-xl transition-colors">B) x ≥ 4</button>
                        <button onclick="checkAnswer(this, 2, false, 4)" class="px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded-xl transition-colors">C) x ≤ 10</button>
                    </div>
                </div>

                <!-- Q3 -->
                <div class="p-4 bg-slate-800 rounded-2xl border border-slate-700 space-y-2">
                    <p class="font-bold text-white">Q3 (4 pts) : Résoudre l'équation produit $(x - 6)(3x + 12) = 0$.</p>
                    <div class="flex flex-wrap gap-2">
                        <button onclick="checkAnswer(this, 3, true, 4)" class="px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded-xl transition-colors">A) S = {-4 ; 6}</button>
                        <button onclick="checkAnswer(this, 3, false, 4)" class="px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded-xl transition-colors">B) S = {4 ; 6}</button>
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
</html>