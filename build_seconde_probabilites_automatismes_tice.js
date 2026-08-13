const fs = require('fs');
const path = require('path');

const targetDir = path.join(__dirname, 'ressources', 'seconde', 'maths', 'probabilites-fluctuation');

// 1. GENERATE AUTOMATISMES.HTML
function createAutomatismesHtml() {
    const flashcardsData = [
        { q: "Probabilité d'un événement impossible ?", a: "Exactement 0 !" },
        { q: "Probabilité d'un événement certain ?", a: "Exactement 1 (100%) !" },
        { q: "Formule de $P(\\bar{A})$ si $P(A) = 0{,}30$ ?", a: "$P(\\bar{A}) = 1 - 0{,}30 = \\mathbf{0{,}70}$" },
        { q: "Signification de $A \\cap B$ ?", a: "Événement $A$ **ET** $B$ simultanés" },
        { q: "Signification de $A \\cup B$ ?", a: "Événement $A$ **OU** $B$ (ou les deux)" },
        { q: "Valeur de $P(A \\cap B)$ si incompatibles ?", a: "$P(A \\cap B) = \\mathbf{0}$" },
        { q: "$P(\\text{Pile})$ avec une pièce équilibrée ?", a: "$\\frac{1}{2} = \\mathbf{0{,}50}$ (50%)" },
        { q: "Formule de $P(A \\cup B)$ ?", a: "$P(A) + P(B) - P(A \\cap B)$" },
        { q: "Loi des Grands Nombres ?", a: "Quand $N \\to \\infty$, $f \\to \\mathbf{p}$" },
        { q: "Somme des probabilités de l'univers ?", a: "Somme $= \\mathbf{1}$ (100%)" }
    ];

    const fcHtml = flashcardsData.map((c, i) => `
                <!-- FC ${i+1} -->
                <div class="h-48 perspective-1000 cursor-pointer" onclick="flipCard(this)">
                    <div class="relative w-full h-full transform-style-3d card-inner">
                        <div class="absolute w-full h-full bg-slate-900 text-white p-4 rounded-2xl flex flex-col justify-between backface-hidden border border-slate-800">
                            <span class="text-[10px] font-bold uppercase text-yellow-400">Flashcard ${i+1}</span>
                            <p class="text-xs font-bold text-center leading-relaxed">${c.q}</p>
                            <span class="text-[9px] text-slate-400 text-center">🔄 Cliquez pour voir la réponse</span>
                        </div>
                        <div class="absolute w-full h-full bg-yellow-500 text-slate-950 p-4 rounded-2xl flex flex-col justify-between backface-hidden rotate-y-180 border border-yellow-400">
                            <span class="text-[10px] font-bold uppercase">Réponse</span>
                            <p class="text-xs font-extrabold text-center leading-relaxed">${c.a}</p>
                            <button onclick="event.stopPropagation(); markFC(${i+1})" class="w-full bg-slate-950 text-white text-[10px] py-1.5 rounded-lg font-bold hover:bg-slate-800 transition-colors">✅ Maîtrisé !</button>
                        </div>
                    </div>
                </div>`).join('\n');

    const qcmData = [
        {
            q: "1. Si $P(A) = 0{,}40$, la probabilité de l'événement contraire $P(\\bar{A})$ est :",
            opts: [{ v: 'A', t: '$0{,}40$' }, { v: 'B', t: '$0{,}60$' }, { v: 'C', t: '$1{,}40$' }]
        },
        {
            q: "2. Une probabilité est toujours un nombre compris entre :",
            opts: [{ v: 'A', t: '$0$ et $1$' }, { v: 'B', t: '$-1$ et $+1$' }, { v: 'C', t: '$0$ et $100$' }]
        },
        {
            q: "3. On tire une boule dans un sac contenant 3 rouges, 5 bleues et 2 vertes. $P(\\text{Rouge}) = $",
            opts: [{ v: 'A', t: '$3/7$' }, { v: 'B', t: '$3/5$' }, { v: 'C', t: '$3/10 = 0{,}30$' }]
        },
        {
            q: "4. Deux événements $A$ et $B$ sont dits incompatibles si :",
            opts: [{ v: 'A', t: '$P(A \\cup B) = 0$' }, { v: 'B', t: '$P(A \\cap B) = 0$' }, { v: 'C', t: '$P(A) = P(B)$' }]
        },
        {
            q: "5. La formule $P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$ s'applique :",
            opts: [{ v: 'A', t: 'Pour tous les événements' }, { v: 'B', t: 'Uniquement si $P(A) = 0$' }, { v: 'C', t: 'Uniquement si $P(B) = 1$' }]
        },
        {
            q: "6. Lors d'un tirage de dé équilibré, la probabilité d'avoir un 6 est :",
            opts: [{ v: 'A', t: '$1/2$' }, { v: 'B', t: '$1/6 \\approx 0{,}167$' }, { v: 'C', t: '$6/6 = 1$' }]
        },
        {
            q: "7. Si la taille d'échantillon $N$ passe de 10 à 1 000 lancers, la fréquence observée $f$ :",
            opts: [{ v: 'A', t: 'Devient totalement imprévisible' }, { v: 'B', t: 'Se rapproche de la probabilité $p$' }, { v: 'C', t: 'Diminue vers 0' }]
        },
        {
            q: "8. Si $P(A) = 0{,}25$ et $P(B) = 0{,}35$ avec $A$ et $B$ incompatibles, alors $P(A \\cup B) = $",
            opts: [{ v: 'A', t: '$0{,}60$' }, { v: 'B', t: '$0{,}10$' }, { v: 'C', t: '$0{,}0875$' }]
        },
        {
            q: "9. L'ensemble de toutes les issues possibles d'une expérience s'appelle :",
            opts: [{ v: 'A', t: 'L\'échantillon' }, { v: 'B', t: 'La fréquence' }, { v: 'C', t: 'L\'Univers $\\Omega$' }]
        },
        {
            q: "10. Dans un lot de 500 cartes, 25 sont défectueuses. La probabilité de défaut est :",
            opts: [{ v: 'A', t: '$0{,}025$' }, { v: 'B', t: '$25/500 = 0{,}05 = 5\\%$' }, { v: 'C', t: '$0{,}50$' }]
        }
    ];

    const qcmHtml = qcmData.map((q, i) => {
        const name = 'qcm' + (i + 1);
        const optHtml = q.opts.map(o => `
                        <label class="flex items-center gap-2 cursor-pointer hover:text-slate-900 transition-colors">
                            <input type="radio" name="${name}" value="${o.v}" class="accent-emerald-600">
                            <span>${o.t}</span>
                        </label>`).join('');

        return `
                <div class="p-4 bg-slate-50 rounded-2xl border space-y-3" id="${name}-card">
                    <p class="font-bold text-slate-900">${q.q}</p>
                    <div class="space-y-1.5 text-slate-700">
${optHtml}
                    </div>
                </div>`;
    }).join('\n');

    return `<!DOCTYPE html>
<html lang="fr" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Automatismes & Ritualisation - Probabilités & Fluctuation 2nde Pro</title>
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
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Outfit:wght@400;500;600;700;800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
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

        @keyframes pulse-glow { 0%, 100% { box-shadow: 0 0 8px rgba(234, 179, 8, 0.3); } 50% { box-shadow: 0 0 20px rgba(234, 179, 8, 0.6); } }
        .pulse-glow { animation: pulse-glow 2s ease-in-out infinite; }

        @keyframes shake { 0%, 100% { transform: translateX(0); } 25% { transform: translateX(-4px); } 75% { transform: translateX(4px); } }
        .shake { animation: shake 0.4s ease-in-out; }

        @media print {
            header, nav, .no-print, button { display: none !important; }
            body { background-color: white; color: black; padding-bottom: 0 !important; }
            .card-shadow { box-shadow: none; border: 1px solid #ccc; }
        }
    </style>
</head>
<body class="text-slate-800 bg-slate-50 min-h-screen pb-20">

    <!-- Header & Nav -->
    <header class="bg-slate-900 text-white sticky top-0 z-50 border-b border-slate-800 shadow-md">
        <div class="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
            <div class="flex items-center gap-3">
                <div class="w-10 h-10 bg-yellow-500/20 border border-yellow-400/30 text-yellow-400 rounded-xl flex items-center justify-center font-bold">
                    <i class="fa-solid fa-bolt text-lg"></i>
                </div>
                <div>
                    <span class="text-xs font-bold tracking-widest uppercase text-yellow-400">Séquence 8 • Seconde Professionnelle Mathématiques</span>
                    <h1 class="text-xl font-bold font-heading">Probabilités & Fluctuation d'Échantillonnage</h1>
                </div>
            </div>
            <nav class="flex flex-wrap items-center gap-1.5 text-xs font-bold">
                <a href="automatismes.html" class="px-3 py-2 rounded-lg bg-yellow-500 text-slate-950 font-extrabold shadow-sm flex items-center gap-1.5"><i class="fa-solid fa-bolt"></i> Automatismes</a>
                <a href="activites.html" class="px-3 py-2 rounded-lg bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white transition-colors flex items-center gap-1.5"><i class="fa-solid fa-lightbulb text-emerald-400"></i> Activités</a>
                <a href="cours.html" class="px-3 py-2 rounded-lg bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white transition-colors flex items-center gap-1.5"><i class="fa-solid fa-book-open text-sky-400"></i> Cours</a>
                <a href="td.html" class="px-3 py-2 rounded-lg bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white transition-colors flex items-center gap-1.5"><i class="fa-solid fa-dumbbell text-indigo-400"></i> TD & Exercices</a>
                <a href="tice.html" class="px-3 py-2 rounded-lg bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white transition-colors flex items-center gap-1.5"><i class="fa-solid fa-laptop-code text-purple-400"></i> TICE Excel</a>
                <a href="eval.html" class="px-3 py-2 rounded-lg bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white transition-colors flex items-center gap-1.5"><i class="fa-solid fa-graduation-cap text-red-400"></i> Évaluation</a>
            </nav>
        </div>
    </header>

    <main class="max-w-5xl mx-auto px-4 py-8 space-y-12">

        <!-- SCOREBOARD EN DIRECT -->
        <div class="bg-slate-900 text-white p-6 rounded-3xl shadow-xl border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
                <span class="bg-yellow-500 text-slate-950 text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">Entraînement Rituel 10 min</span>
                <h2 class="text-2xl font-extrabold font-heading text-white mt-1">Ritualisation : Probabilités Flash</h2>
                <p class="text-xs text-slate-400 mt-1">3 Modules — Flashcards, QCM Chrono, Exercices Rapides</p>
            </div>
            <div class="flex items-center gap-4 bg-slate-800 px-5 py-3 rounded-2xl border border-slate-700 pulse-glow">
                <i class="fa-solid fa-trophy text-yellow-400 text-2xl"></i>
                <div>
                    <span class="text-[10px] uppercase font-bold text-slate-400 block">Score Global</span>
                    <span id="global-score" class="text-xl font-extrabold text-yellow-400 font-mono">0 / 26</span>
                </div>
            </div>
        </div>

        <!-- MODULE 1 : 10 FLASHCARDS INTERACTIVES 3D -->
        <section class="bg-white p-6 md:p-8 rounded-3xl border border-slate-200 card-shadow space-y-6">
            <div class="flex items-center justify-between border-b border-slate-100 pb-4">
                <h3 class="text-xl font-bold font-heading text-slate-900 flex items-center gap-2">
                    <i class="fa-solid fa-clone text-yellow-500"></i> Module 1 : 10 Flashcards Mémoire
                </h3>
                <span class="text-xs font-bold text-slate-500">Cliquez pour retourner • <span id="fc-count" class="text-yellow-600">0/10</span></span>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4" id="fc-grid">
${fcHtml}
            </div>
        </section>

        <!-- MODULE 2 : QCM CHRONO (10 QUESTIONS) -->
        <section class="bg-white p-6 md:p-8 rounded-3xl border border-slate-200 card-shadow space-y-6">
            <div class="flex items-center justify-between border-b border-slate-100 pb-4">
                <h3 class="text-xl font-bold font-heading text-slate-900 flex items-center gap-2">
                    <i class="fa-solid fa-stopwatch text-emerald-500"></i> Module 2 : QCM Chrono (10 Questions)
                </h3>
                <div class="flex items-center gap-3">
                    <span class="text-xs font-bold text-slate-500">Temps : <span id="chrono" class="text-emerald-600 font-mono">0:00</span></span>
                    <button onclick="startChrono()" id="btn-chrono" class="bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold px-4 py-2 rounded-xl transition-colors no-print">
                        <i class="fa-solid fa-play mr-1"></i> Démarrer
                    </button>
                </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs" id="qcm-grid">
${qcmHtml}
            </div>

            <button onclick="checkQCM()" class="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs py-3.5 rounded-2xl shadow-md transition-colors no-print">
                <i class="fa-solid fa-check-circle mr-2"></i> Valider mes réponses QCM
            </button>
            <div id="fb-qcm" class="text-xs hidden p-4 rounded-2xl font-bold"></div>
        </section>

        <!-- MODULE 3 : 6 EXERCICES RAPIDES À SAISIR -->
        <section class="bg-white p-6 md:p-8 rounded-3xl border border-slate-200 card-shadow space-y-6">
            <div class="flex items-center justify-between border-b border-slate-100 pb-4">
                <h3 class="text-xl font-bold font-heading text-slate-900 flex items-center gap-2">
                    <i class="fa-solid fa-calculator text-indigo-500"></i> Module 3 : Calculs Rapides (6 Défis)
                </h3>
                <span class="text-xs font-bold text-slate-500"><span id="m3-count" class="text-indigo-600">0/6</span></span>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                <!-- Défi 1 -->
                <div class="p-4 bg-slate-50 rounded-2xl border space-y-2" id="m3-d1-card">
                    <label class="font-bold text-slate-900 block">1. Probabilité $P(A)$ si $n = 15$ et $N = 60$ :</label>
                    <p class="text-slate-500">Rappel : $P(A) = \\frac{n}{N}$</p>
                    <input type="text" id="m3-q1" class="border rounded-xl p-2.5 w-full font-bold bg-white" placeholder="P(A) = ?">
                </div>
                <!-- Défi 2 -->
                <div class="p-4 bg-slate-50 rounded-2xl border space-y-2" id="m3-d2-card">
                    <label class="font-bold text-slate-900 block">2. Probabilité $P(\\bar{A})$ si $P(A) = 0{,}35$ :</label>
                    <p class="text-slate-500">Rappel : $P(\\bar{A}) = 1 - P(A)$</p>
                    <input type="text" id="m3-q2" class="border rounded-xl p-2.5 w-full font-bold bg-white" placeholder="P(Ā) = ?">
                </div>
                <!-- Défi 3 -->
                <div class="p-4 bg-slate-50 rounded-2xl border space-y-2" id="m3-d3-card">
                    <label class="font-bold text-slate-900 block">3. $P(A \\cup B)$ si $P(A)=0{,}40$, $P(B)=0{,}30$ et $P(A \\cap B)=0{,}10$ :</label>
                    <p class="text-slate-500">$P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$</p>
                    <input type="text" id="m3-q3" class="border rounded-xl p-2.5 w-full font-bold bg-white" placeholder="P(A ∪ B) = ?">
                </div>
                <!-- Défi 4 -->
                <div class="p-4 bg-slate-50 rounded-2xl border space-y-2" id="m3-d4-card">
                    <label class="font-bold text-slate-900 block">4. Nombre de pièces défectueuses si $N = 200$ et $P(D) = 0{,}05$ :</label>
                    <p class="text-slate-500">Effectif $= N \\times P(D)$</p>
                    <input type="text" id="m3-q4" class="border rounded-xl p-2.5 w-full font-bold bg-white" placeholder="Nombre = ?">
                </div>
                <!-- Défi 5 -->
                <div class="p-4 bg-slate-50 rounded-2xl border space-y-2" id="m3-d5-card">
                    <label class="font-bold text-slate-900 block">5. Probabilité d'avoir un nombre impair sur un dé à 6 faces :</label>
                    <p class="text-slate-500">Issues : 1, 3, 5 sur 6</p>
                    <input type="text" id="m3-q5" class="border rounded-xl p-2.5 w-full font-bold bg-white" placeholder="P = ?">
                </div>
                <!-- Défi 6 -->
                <div class="p-4 bg-slate-50 rounded-2xl border space-y-2" id="m3-d6-card">
                    <label class="font-bold text-slate-900 block">6. Fréquence observée $f$ si 12 "Pile" sur $N = 50$ lancers :</label>
                    <p class="text-slate-500">$f = \\frac{k}{N}$</p>
                    <input type="text" id="m3-q6" class="border rounded-xl p-2.5 w-full font-bold bg-white" placeholder="f = ?">
                </div>
            </div>

            <button onclick="checkM3()" class="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs py-3.5 rounded-2xl shadow-md transition-colors no-print">
                <i class="fa-solid fa-check-circle mr-2"></i> Valider mes calculs
            </button>
            <div id="fb-m3" class="text-xs hidden p-4 rounded-2xl font-bold"></div>
        </section>

    </main>

    <script>
        let fcScores = new Set();
        let qcmScore = 0;
        let m3Score = 0;

        function updateGlobal() {
            let total = fcScores.size + qcmScore + m3Score;
            document.getElementById('global-score').innerText = total + ' / 26';
            document.getElementById('fc-count').innerText = fcScores.size + '/10';
        }

        function flipCard(el) {
            el.querySelector('.card-inner').classList.toggle('rotate-y-180');
        }
        function markFC(num) {
            if (!fcScores.has(num)) {
                fcScores.add(num);
                updateGlobal();
            }
        }

        let chronoInterval = null;
        let chronoSec = 0;
        function startChrono() {
            if (chronoInterval) return;
            let btn = document.getElementById('btn-chrono');
            btn.innerHTML = '<i class="fa-solid fa-clock mr-1"></i> En cours...';
            btn.classList.replace('bg-emerald-600', 'bg-amber-600');
            chronoInterval = setInterval(function() {
                chronoSec++;
                let m = Math.floor(chronoSec / 60);
                let s = chronoSec % 60;
                document.getElementById('chrono').innerText = m + ':' + (s < 10 ? '0' : '') + s;
            }, 1000);
        }
        function stopChrono() {
            clearInterval(chronoInterval);
            chronoInterval = null;
        }

        const qcmAnswers = {
            'qcm1': 'B', 'qcm2': 'A', 'qcm3': 'C', 'qcm4': 'B', 'qcm5': 'A',
            'qcm6': 'B', 'qcm7': 'B', 'qcm8': 'A', 'qcm9': 'C', 'qcm10': 'B'
        };
        function checkQCM() {
            stopChrono();
            let score = 0;
            for (let qid in qcmAnswers) {
                let correct = qcmAnswers[qid];
                let selected = document.querySelector('input[name="' + qid + '"]:checked');
                let card = document.getElementById(qid + '-card');
                if (selected && selected.value === correct) {
                    score++;
                    card.classList.add('correct-bg');
                    card.classList.remove('wrong-bg');
                } else {
                    card.classList.add('wrong-bg');
                    card.classList.remove('correct-bg');
                }
            }
            qcmScore = score;
            updateGlobal();

            let fb = document.getElementById('fb-qcm');
            fb.classList.remove('hidden', 'correct-bg', 'wrong-bg');
            if (score === 10) {
                fb.classList.add('correct-bg');
                fb.innerHTML = '<i class="fa-solid fa-circle-check mr-2"></i> Parfait ! 10/10 au QCM en ' + document.getElementById('chrono').innerText + ' !';
            } else {
                fb.classList.add('wrong-bg');
                fb.innerHTML = '<i class="fa-solid fa-circle-xmark mr-2"></i> Score : ' + score + '/10. Temps : ' + document.getElementById('chrono').innerText + '. Révisez les flashcards et réessayez !';
            }
        }

        const m3Answers = {
            'm3-q1': ['0.25', '0,25'],
            'm3-q2': ['0.65', '0,65'],
            'm3-q3': ['0.6', '0,6', '0.60', '0,60'],
            'm3-q4': ['10'],
            'm3-q5': ['0.5', '0,5', '0.50', '0,50', '1/2'],
            'm3-q6': ['0.24', '0,24']
        };
        function checkM3() {
            let score = 0;
            for (let qid in m3Answers) {
                let acceptedVals = m3Answers[qid];
                let val = document.getElementById(qid).value.trim();
                let num = qid.replace('m3-q', '');
                let card = document.getElementById('m3-d' + num + '-card');
                if (acceptedVals.indexOf(val) !== -1) {
                    score++;
                    card.classList.add('correct-bg');
                    card.classList.remove('wrong-bg');
                } else {
                    card.classList.add('wrong-bg');
                    card.classList.remove('correct-bg');
                    card.classList.add('shake');
                    setTimeout(function() { card.classList.remove('shake'); }, 500);
                }
            }
            m3Score = score;
            updateGlobal();
            document.getElementById('m3-count').innerText = score + '/6';

            let fb = document.getElementById('fb-m3');
            fb.classList.remove('hidden', 'correct-bg', 'wrong-bg');
            if (score === 6) {
                fb.classList.add('correct-bg');
                fb.innerHTML = '<i class="fa-solid fa-circle-check mr-2"></i> Excellent ! 6/6 aux calculs rapides !';
            } else {
                fb.classList.add('wrong-bg');
                fb.innerHTML = '<i class="fa-solid fa-circle-xmark mr-2"></i> Score : ' + score + '/6. Corrigés : P(A)=0,25 | P(Ā)=0,65 | P(A∪B)=0,60 | Nombre=10 | P=0,50 | f=0,24';
            }
        }
    </script>
</body>
</html>`;
}

// 2. GENERATE TICE.HTML
function createTiceHtml() {
    return `<!DOCTYPE html>
<html lang="fr" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TP TICE Excel - Probabilités & Fluctuation 2nde Pro</title>
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
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Outfit:wght@400;500;600;700;800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <script>MathJax = { tex: { inlineMath: [['$', '$'], ['\\\\(', '\\\\)']] } };</script>
    <script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js"></script>

    <style>
        body { font-family: 'Inter', sans-serif; background-color: #f8fafc; color: #1e293b; }
        h1, h2, h3, h4, .font-heading { font-family: 'Outfit', sans-serif; }
        .card-shadow { box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.05); }
        .correct-bg { background-color: #dcfce7 !important; border-color: #22c55e !important; color: #15803d !important; }
        .wrong-bg { background-color: #fee2e2 !important; border-color: #ef4444 !important; color: #b91c1c !important; }
        .excel-cell { font-family: 'Courier New', monospace; background: #f1f5f9; border: 1px solid #94a3b8; padding: 6px 10px; font-size: 12px; font-weight: 600; }
        .excel-header { background: #334155; color: white; font-weight: 700; text-align: center; }
        table.excel-table { border-collapse: collapse; width: 100%; }
        table.excel-table td, table.excel-table th { border: 1px solid #94a3b8; padding: 8px 12px; text-align: center; font-size: 12px; }
        table.excel-table th { background: #334155; color: white; font-weight: 700; }

        @media print {
            header, nav, .no-print, button { display: none !important; }
            body { background-color: white; color: black; padding-bottom: 0 !important; }
            .card-shadow { box-shadow: none; border: 1px solid #ccc; }
        }
    </style>
</head>
<body class="text-slate-800 bg-slate-50 min-h-screen pb-20">

    <!-- Header & Nav -->
    <header class="bg-slate-900 text-white sticky top-0 z-50 border-b border-slate-800 shadow-md">
        <div class="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
            <div class="flex items-center gap-3">
                <div class="w-10 h-10 bg-purple-500/20 border border-purple-400/30 text-purple-400 rounded-xl flex items-center justify-center font-bold">
                    <i class="fa-solid fa-laptop-code text-lg"></i>
                </div>
                <div>
                    <span class="text-xs font-bold tracking-widest uppercase text-purple-400">Séquence 8 • Seconde Professionnelle Mathématiques</span>
                    <h1 class="text-xl font-bold font-heading">Probabilités & Fluctuation d'Échantillonnage</h1>
                </div>
            </div>
            <nav class="flex flex-wrap items-center gap-1.5 text-xs font-bold">
                <a href="automatismes.html" class="px-3 py-2 rounded-lg bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white transition-colors flex items-center gap-1.5"><i class="fa-solid fa-bolt text-yellow-400"></i> Automatismes</a>
                <a href="activites.html" class="px-3 py-2 rounded-lg bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white transition-colors flex items-center gap-1.5"><i class="fa-solid fa-lightbulb text-emerald-400"></i> Activités</a>
                <a href="cours.html" class="px-3 py-2 rounded-lg bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white transition-colors flex items-center gap-1.5"><i class="fa-solid fa-book-open text-sky-400"></i> Cours</a>
                <a href="td.html" class="px-3 py-2 rounded-lg bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white transition-colors flex items-center gap-1.5"><i class="fa-solid fa-dumbbell text-indigo-400"></i> TD & Exercices</a>
                <a href="tice.html" class="px-3 py-2 rounded-lg bg-purple-600 text-white font-extrabold shadow-sm flex items-center gap-1.5"><i class="fa-solid fa-laptop-code"></i> TICE Excel</a>
                <a href="eval.html" class="px-3 py-2 rounded-lg bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white transition-colors flex items-center gap-1.5"><i class="fa-solid fa-graduation-cap text-red-400"></i> Évaluation</a>
            </nav>
        </div>
    </header>

    <main class="max-w-5xl mx-auto px-4 py-8 space-y-10">

        <!-- EN-TÊTE DU MODULE TICE -->
        <div class="bg-white border border-slate-200 rounded-3xl p-6 md:p-8 shadow-sm border-l-8 border-l-purple-600">
            <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-4 mb-4">
                <div>
                    <div class="flex items-center gap-2 text-xs font-extrabold uppercase text-purple-600 tracking-wider">
                        <i class="fa-solid fa-laptop-code"></i>
                        <span>Module TICE • Tableur Excel & Simulation</span>
                    </div>
                    <h2 class="text-2xl font-extrabold text-slate-900 font-heading mt-1">TP TICE : Simulation de Tirages & Fluctuation sous Excel</h2>
                </div>
                <div class="flex flex-col gap-1 text-xs text-slate-500">
                    <span><i class="fa-solid fa-clock mr-1"></i> Durée : 1h30</span>
                    <span><i class="fa-solid fa-bullseye mr-1"></i> Compétences : C1, C2, C3, C4</span>
                </div>
            </div>
            <p class="text-xs text-slate-600 leading-relaxed">
                Ce TP guidé vous apprend à <strong>simuler des tirages aléatoires sous Excel</strong> avec `=ALEA.ENTRE.BORNES(1; 6)` et `=SI(ALEA()<0.05; ...)`, puis à compter les fréquences avec `=NB.SI()` pour observer la <strong>Loi des Grands Nombres</strong>.
            </p>
        </div>

        <!-- PARTIE 1 -->
        <section class="bg-white rounded-3xl border border-slate-200 p-6 md:p-8 card-shadow space-y-6">
            <div class="flex items-center gap-3 border-b border-slate-100 pb-3">
                <div class="w-8 h-8 bg-purple-100 text-purple-800 rounded-lg flex items-center justify-center font-bold text-sm">1</div>
                <h3 class="font-bold text-slate-900 text-lg font-heading">Partie 1 : Simulation de 1 000 Lanchers d'un Dé à 6 Faces</h3>
            </div>

            <div class="bg-slate-50 rounded-2xl p-5 border border-slate-200 space-y-4">
                <p class="text-xs text-slate-700"><strong>Contexte :</strong> On souhaite simuler 1 000 lancers d'un dé non truqué à 6 faces et vérifier que la fréquence d'apparition du numéro 6 tend vers $p = \\frac{1}{6} \\approx 0{,}167$.</p>

                <div class="overflow-x-auto">
                    <table class="excel-table">
                        <thead>
                            <tr>
                                <th class="w-8"></th>
                                <th>A</th><th>B</th><th>C</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="excel-header">1</td>
                                <td class="font-bold bg-slate-100">N° Langer</td>
                                <td class="font-bold bg-slate-100">Résultat du dé</td>
                                <td class="font-bold bg-slate-100">Statistiques du 6</td>
                            </tr>
                            <tr>
                                <td class="excel-header">2</td>
                                <td>1</td>
                                <td class="text-purple-700 font-bold">=ALEA.ENTRE.BORNES(1; 6)</td>
                                <td class="font-bold bg-yellow-50">Nombre de '6' :</td>
                            </tr>
                            <tr>
                                <td class="excel-header">3</td>
                                <td>2</td>
                                <td class="text-purple-700 font-bold">=ALEA.ENTRE.BORNES(1; 6)</td>
                                <td class="text-purple-700 font-bold bg-yellow-50">=NB.SI(B2:B1001; 6)</td>
                            </tr>
                            <tr>
                                <td class="excel-header">4</td>
                                <td>...</td><td>...</td>
                                <td class="font-bold bg-emerald-50">Fréquence observée f :</td>
                            </tr>
                            <tr>
                                <td class="excel-header">5</td>
                                <td>1000</td>
                                <td class="text-purple-700 font-bold">=ALEA.ENTRE.BORNES(1; 6)</td>
                                <td class="text-purple-700 font-bold bg-emerald-50">=C3/1000</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div class="bg-purple-50 border border-purple-200 rounded-xl p-4 text-xs space-y-2">
                    <p class="font-bold text-purple-800"><i class="fa-solid fa-lightbulb mr-1"></i> Instructions Excel :</p>
                    <ol class="list-decimal list-inside text-purple-700 space-y-1">
                        <li>En <strong>A2</strong>, taper <code class="bg-white px-1 rounded">1</code> puis étirer jusqu'à <strong>A1001</strong> (1 000 lancers).</li>
                        <li>En <strong>B2</strong>, saisir <code class="bg-white px-1 rounded">=ALEA.ENTRE.BORNES(1; 6)</code> puis double-cliquer pour étirer sur toute la colonne B.</li>
                        <li>En <strong>C3</strong>, saisir la formule <code class="bg-white px-1 rounded">=NB.SI(B2:B1001; 6)</code> pour compter le nombre de 6.</li>
                        <li>En <strong>C5</strong>, calculer la fréquence avec <code class="bg-white px-1 rounded">=C3/1000</code>.</li>
                        <li>Appuyer sur la touche <strong>F9</strong> d'Excel pour recalculer la feuille et observer la fluctuation de $f$ !</li>
                    </ol>
                </div>
            </div>

            <div class="bg-slate-50 rounded-2xl p-5 border space-y-3 text-xs">
                <p class="font-bold text-slate-900"><i class="fa-solid fa-question-circle text-purple-600 mr-1"></i> Question : Quelle formule Excel permet de compter le nombre de fois où le chiffre 6 apparaît dans la plage B2:B1001 ?</p>
                <input type="text" id="tice-p1" class="border rounded-xl p-2.5 w-full font-bold bg-white" placeholder="=NB.SI(...)">
            </div>
        </section>

        <!-- PARTIE 2 -->
        <section class="bg-white rounded-3xl border border-slate-200 p-6 md:p-8 card-shadow space-y-6">
            <div class="flex items-center gap-3 border-b border-slate-100 pb-3">
                <div class="w-8 h-8 bg-purple-100 text-purple-800 rounded-lg flex items-center justify-center font-bold text-sm">2</div>
                <h3 class="font-bold text-slate-900 text-lg font-heading">Partie 2 : Simulation d'un Contrôle Qualité de 500 Capteurs</h3>
            </div>

            <div class="bg-slate-50 rounded-2xl p-5 border border-slate-200 space-y-4">
                <p class="text-xs text-slate-700"><strong>Contexte :</strong> La probabilité théorique de défaut d'un capteur est $p = 0{,}05$ ($5\\%$). On veut simuler le contrôle de 500 capteurs sous Excel.</p>

                <div class="overflow-x-auto">
                    <table class="excel-table">
                        <thead>
                            <tr>
                                <th class="w-8"></th>
                                <th>A</th><th>B</th><th>C</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="excel-header">1</td>
                                <td class="font-bold bg-slate-100">N° Capteur</td>
                                <td class="font-bold bg-slate-100">Valeur Aléatoire [0,1[</td>
                                <td class="font-bold bg-slate-100">Statut du capteur</td>
                            </tr>
                            <tr>
                                <td class="excel-header">2</td>
                                <td>1</td>
                                <td class="text-purple-700 font-bold">=ALEA()</td>
                                <td class="text-purple-700 font-bold">=SI(B2 &lt; 0,05; "Défectueux"; "Conforme")</td>
                            </tr>
                            <tr>
                                <td class="excel-header">3</td>
                                <td>2</td>
                                <td class="text-purple-700 font-bold">=ALEA()</td>
                                <td class="text-purple-700 font-bold">=SI(B3 &lt; 0,05; "Défectueux"; "Conforme")</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div class="bg-purple-50 border border-purple-200 rounded-xl p-4 text-xs space-y-2">
                    <p class="font-bold text-purple-800"><i class="fa-solid fa-lightbulb mr-1"></i> Instructions :</p>
                    <ol class="list-decimal list-inside text-purple-700 space-y-1">
                        <li>La fonction <code class="bg-white px-1 rounded">=ALEA()</code> génère un nombre décimal aléatoire entre 0 et 1.</li>
                        <li>En <strong>C2</strong>, utiliser <code class="bg-white px-1 rounded">=SI(B2 &lt; 0.05; "Défectueux"; "Conforme")</code>.</li>
                        <li>Compter les défectueux avec <code class="bg-white px-1 rounded">=NB.SI(C2:C501; "Défectueux")</code>.</li>
                    </ol>
                </div>
            </div>

            <div class="bg-slate-50 rounded-2xl p-5 border space-y-3 text-xs">
                <p class="font-bold text-slate-900"><i class="fa-solid fa-question-circle text-purple-600 mr-1"></i> Question : Quelle condition dans la formule =SI(...) permet d'obtenir un événement de probabilité p = 0,05 ?</p>
                <input type="text" id="tice-p2" class="border rounded-xl p-2.5 w-full font-bold bg-white" placeholder="B2 < 0.05 (ou 0,05)">
            </div>
        </section>

        <!-- PARTIE 3 -->
        <section class="bg-white rounded-3xl border border-slate-200 p-6 md:p-8 card-shadow space-y-6">
            <div class="flex items-center gap-3 border-b border-slate-100 pb-3">
                <div class="w-8 h-8 bg-purple-100 text-purple-800 rounded-lg flex items-center justify-center font-bold text-sm">3</div>
                <h3 class="font-bold text-slate-900 text-lg font-heading">Partie 3 : Graphique de Fluctuation de la Fréquence f</h3>
            </div>

            <div class="bg-slate-50 rounded-2xl p-5 border border-slate-200 space-y-4">
                <p class="text-xs text-slate-700">Vous allez tracer la courbe d'évolution de la <strong>fréquence cumulée $f_N$</strong> en fonction du nombre de tirages $N$ de 1 à 1 000 sous Excel.</p>

                <div class="flex justify-center">
                    <svg viewBox="0 0 500 200" class="w-full max-w-lg" xmlns="http://www.w3.org/2000/svg">
                        <rect width="500" height="200" fill="#f8fafc" rx="12"/>
                        <text x="250" y="22" text-anchor="middle" font-size="11" font-weight="700" fill="#334155">Graphique Excel attendu : Fluctuation de f vs N</text>
                        <line x1="50" y1="110" x2="460" y2="110" stroke="#eab308" stroke-width="2" stroke-dasharray="4,4"/>
                        <text x="465" y="113" font-size="9" font-weight="700" fill="#ca8a04">p = 0,167</text>

                        <line x1="50" y1="30" x2="50" y2="160" stroke="#475569" stroke-width="1.5"/>
                        <line x1="50" y1="160" x2="460" y2="160" stroke="#475569" stroke-width="1.5"/>

                        <path d="M 50 40 Q 90 150, 150 70 T 250 120 T 350 108 T 450 110" fill="none" stroke="#7c3aed" stroke-width="2.5"/>
                        <text x="250" y="180" font-size="9" fill="#475569" text-anchor="middle">Nombre de tirages N (1 à 1 000)</text>
                    </svg>
                </div>
            </div>

            <div class="bg-slate-50 rounded-2xl p-5 border space-y-3 text-xs">
                <p class="font-bold text-slate-900"><i class="fa-solid fa-question-circle text-purple-600 mr-1"></i> Question : Quel type de graphique sous Excel est recommandé pour tracer l'évolution de la fréquence en fonction de N ?</p>
                <select id="tice-p3" class="border rounded-xl p-2.5 w-full font-bold bg-white">
                    <option value="">Sélectionnez...</option>
                    <option value="COURBE">Graphique en Courbe (ou Nuage de points)</option>
                    <option value="SECTEUR">Diagramme circulaire (camembert)</option>
                </select>
            </div>
        </section>

        <!-- VALIDATION GLOBAL -->
        <div class="space-y-4">
            <button onclick="checkAllTICE()" class="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm py-4 rounded-2xl shadow-md transition-colors no-print">
                <i class="fa-solid fa-check-double mr-2"></i> Valider toutes mes réponses TICE Excel
            </button>
            <div id="fb-tice-global" class="text-sm hidden p-5 rounded-2xl font-bold"></div>
        </div>

    </main>

    <script>
        function checkAllTICE() {
            let score = 0;
            let total = 3;

            let p1 = document.getElementById('tice-p1').value.trim().toUpperCase();
            if (p1.indexOf('NB.SI') !== -1) score++;

            let p2 = document.getElementById('tice-p2').value.trim().toUpperCase();
            if (p2.indexOf('0.05') !== -1 || p2.indexOf('0,05') !== -1 || p2.indexOf('<') !== -1) score++;

            let p3 = document.getElementById('tice-p3').value;
            if (p3 === 'COURBE') score++;

            let fb = document.getElementById('fb-tice-global');
            fb.classList.remove('hidden', 'correct-bg', 'wrong-bg');

            if (score === total) {
                fb.classList.add('correct-bg');
                fb.innerHTML = '<i class="fa-solid fa-circle-check mr-2"></i> TP TICE Excel validé ! ' + score + '/' + total + ' — Parfaite maîtrise d\'ALEA.ENTRE.BORNES, NB.SI et de la fluctuation !';
            } else {
                fb.classList.add('wrong-bg');
                fb.innerHTML = '<i class="fa-solid fa-circle-xmark mr-2"></i> Score : ' + score + '/' + total + ' — Corrigés : Formule =NB.SI(B2:B1001; 6) | Condition B2 < 0,05 | Graphique en Courbe.';
            }
        }
    </script>
</body>
</html>`;
}

// EXECUTE AND WRITE
fs.writeFileSync(path.join(targetDir, 'automatismes.html'), createAutomatismesHtml(), 'utf8');
console.log('✅ automatismes.html généré avec succès !');

fs.writeFileSync(path.join(targetDir, 'tice.html'), createTiceHtml(), 'utf8');
console.log('✅ tice.html généré avec succès !');
