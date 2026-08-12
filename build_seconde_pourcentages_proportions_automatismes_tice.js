const fs = require('fs');
const path = require('path');

const targetDir = path.join(__dirname, 'ressources', 'seconde', 'maths', 'pourcentages-proportions');

// ──────────────────────────────────────────
// 1. AUTOMATISMES.HTML
// ──────────────────────────────────────────
const automatismesHtml = `<!DOCTYPE html>
<html lang="fr" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Automatismes & Ritualisation - Pourcentages & Proportions 2nde Pro</title>
    <script src="https://cdn.tailwindcss.com"><\/script>
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
    <\/script>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Outfit:wght@400;500;600;700;800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <script>MathJax = { tex: { inlineMath: [['$', '$'], ['\\\\(', '\\\\)']] } };<\/script>
    <script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js"><\/script>

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
                    <span class="text-xs font-bold tracking-widest uppercase text-yellow-400">Séquence 2 • Seconde Professionnelle Mathématiques</span>
                    <h1 class="text-xl font-bold font-heading">Pourcentages, Proportions & Taux d'Évolution</h1>
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
                <h2 class="text-2xl font-extrabold font-heading text-white mt-1">Ritualisation : Pourcentages & CM Flash</h2>
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

        <!-- ═══════════════════════════════════════════ -->
        <!-- MODULE 1 : 10 FLASHCARDS INTERACTIVES 3D   -->
        <!-- ═══════════════════════════════════════════ -->
        <section class="bg-white p-6 md:p-8 rounded-3xl border border-slate-200 card-shadow space-y-6">
            <div class="flex items-center justify-between border-b border-slate-100 pb-4">
                <h3 class="text-xl font-bold font-heading text-slate-900 flex items-center gap-2">
                    <i class="fa-solid fa-clone text-yellow-500"></i> Module 1 : 10 Flashcards Mémoire
                </h3>
                <span class="text-xs font-bold text-slate-500">Cliquez pour retourner • <span id="fc-count" class="text-yellow-600">0/10</span></span>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4" id="fc-grid">
${generateFlashcards()}
            </div>
        </section>

        <!-- ═══════════════════════════════════════════ -->
        <!-- MODULE 2 : QCM CHRONO (10 QUESTIONS)       -->
        <!-- ═══════════════════════════════════════════ -->
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
${generateQCM()}
            </div>

            <button onclick="checkQCM()" class="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs py-3.5 rounded-2xl shadow-md transition-colors no-print">
                <i class="fa-solid fa-check-circle mr-2"></i> Valider mes réponses QCM
            </button>
            <div id="fb-qcm" class="text-xs hidden p-4 rounded-2xl font-bold"></div>
        </section>

        <!-- ═══════════════════════════════════════════ -->
        <!-- MODULE 3 : 6 EXERCICES RAPIDES À SAISIR    -->
        <!-- ═══════════════════════════════════════════ -->
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
                    <label class="font-bold text-slate-900 block">1. Calculez le CM pour une hausse de $+15\\%$ :</label>
                    <p class="text-slate-500">Rappel : $CM = 1 + \\frac{t}{100}$</p>
                    <input type="text" id="m3-q1" class="border rounded-xl p-2.5 w-full font-bold bg-white" placeholder="CM = ?">
                </div>
                <!-- Défi 2 -->
                <div class="p-4 bg-slate-50 rounded-2xl border space-y-2" id="m3-d2-card">
                    <label class="font-bold text-slate-900 block">2. Prix final après une baisse de $-25\\%$ sur $V_0 = 200$ € :</label>
                    <p class="text-slate-500">$V_1 = V_0 \\times CM$</p>
                    <input type="text" id="m3-q2" class="border rounded-xl p-2.5 w-full font-bold bg-white" placeholder="V₁ = ? €">
                </div>
                <!-- Défi 3 -->
                <div class="p-4 bg-slate-50 rounded-2xl border space-y-2" id="m3-d3-card">
                    <label class="font-bold text-slate-900 block">3. Taux $t$ si $V_0 = 80$ € et $V_1 = 100$ € :</label>
                    <p class="text-slate-500">$t = \\frac{V_1 - V_0}{V_0} \\times 100$</p>
                    <input type="text" id="m3-q3" class="border rounded-xl p-2.5 w-full font-bold bg-white" placeholder="t = ? %">
                </div>
                <!-- Défi 4 -->
                <div class="p-4 bg-slate-50 rounded-2xl border space-y-2" id="m3-d4-card">
                    <label class="font-bold text-slate-900 block">4. CM global : hausse de $+20\\%$ puis baisse de $-10\\%$ :</label>
                    <p class="text-slate-500">$CM_{global} = CM_1 \\times CM_2$</p>
                    <input type="text" id="m3-q4" class="border rounded-xl p-2.5 w-full font-bold bg-white" placeholder="CM global = ?">
                </div>
                <!-- Défi 5 -->
                <div class="p-4 bg-slate-50 rounded-2xl border space-y-2" id="m3-d5-card">
                    <label class="font-bold text-slate-900 block">5. Proportion : 120 filles sur 400 élèves = ? %</label>
                    <p class="text-slate-500">$p = \\frac{n}{N} \\times 100$</p>
                    <input type="text" id="m3-q5" class="border rounded-xl p-2.5 w-full font-bold bg-white" placeholder="p = ? %">
                </div>
                <!-- Défi 6 -->
                <div class="p-4 bg-slate-50 rounded-2xl border space-y-2" id="m3-d6-card">
                    <label class="font-bold text-slate-900 block">6. CM réciproque après une hausse de $+25\\%$ ($CM = 1{,}25$) :</label>
                    <p class="text-slate-500">$CM' = \\frac{1}{CM}$</p>
                    <input type="text" id="m3-q6" class="border rounded-xl p-2.5 w-full font-bold bg-white" placeholder="CM' = ?">
                </div>
            </div>

            <button onclick="checkM3()" class="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs py-3.5 rounded-2xl shadow-md transition-colors no-print">
                <i class="fa-solid fa-check-circle mr-2"></i> Valider mes calculs
            </button>
            <div id="fb-m3" class="text-xs hidden p-4 rounded-2xl font-bold"></div>
        </section>

    </main>

    <!-- ════════════════════════ JS ════════════════════════ -->
    <script>
        // ── Scores ──
        let fcScores = new Set();
        let qcmScore = 0;
        let m3Score = 0;

        function updateGlobal() {
            let total = fcScores.size + qcmScore + m3Score;
            document.getElementById('global-score').innerText = total + ' / 26';
            document.getElementById('fc-count').innerText = fcScores.size + '/10';
        }

        // ── Module 1 : Flashcards ──
        function flipCard(el) {
            el.querySelector('.card-inner').classList.toggle('rotate-y-180');
        }
        function markFC(num) {
            if (!fcScores.has(num)) {
                fcScores.add(num);
                updateGlobal();
            }
        }

        // ── Module 2 : Chrono ──
        let chronoInterval = null;
        let chronoSec = 0;
        function startChrono() {
            if (chronoInterval) return;
            let btn = document.getElementById('btn-chrono');
            btn.innerHTML = '<i class="fa-solid fa-clock mr-1"></i> En cours...';
            btn.classList.replace('bg-emerald-600', 'bg-amber-600');
            chronoInterval = setInterval(() => {
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

        // ── Module 2 : QCM check ──
        const qcmAnswers = {
            'qcm1': 'B', 'qcm2': 'A', 'qcm3': 'C', 'qcm4': 'B', 'qcm5': 'A',
            'qcm6': 'C', 'qcm7': 'B', 'qcm8': 'A', 'qcm9': 'C', 'qcm10': 'B'
        };
        function checkQCM() {
            stopChrono();
            let score = 0;
            for (let [qid, correct] of Object.entries(qcmAnswers)) {
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

        // ── Module 3 : Calculs rapides ──
        const m3Answers = {
            'm3-q1': ['1.15', '1,15'],
            'm3-q2': ['150'],
            'm3-q3': ['25'],
            'm3-q4': ['1.08', '1,08'],
            'm3-q5': ['30'],
            'm3-q6': ['0.8', '0,8', '0.80', '0,80']
        };
        function checkM3() {
            let score = 0;
            for (let [qid, acceptedVals] of Object.entries(m3Answers)) {
                let val = document.getElementById(qid).value.trim();
                let cardId = qid.replace('q', 'd').replace('-d', '-d') ;
                // build card id like m3-d1-card
                let num = qid.replace('m3-q', '');
                let card = document.getElementById('m3-d' + num + '-card');
                if (acceptedVals.includes(val)) {
                    score++;
                    card.classList.add('correct-bg');
                    card.classList.remove('wrong-bg');
                } else {
                    card.classList.add('wrong-bg');
                    card.classList.remove('correct-bg');
                    card.classList.add('shake');
                    setTimeout(() => card.classList.remove('shake'), 500);
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
                fb.innerHTML = '<i class="fa-solid fa-circle-xmark mr-2"></i> Score : ' + score + '/6. Corrigés : CM(+15%)=1,15 | V₁=150€ | t=25% | CMglobal=1,08 | p=30% | CM\\'=0,80';
            }
        }
    <\/script>
</body>
</html>`;

function generateFlashcards() {
    const cards = [
        { q: "CM d'une hausse de $+20\\%$ ?", a: "$CM = 1 + 0{,}20 = \\\\mathbf{1{,}20}$" },
        { q: "CM d'une baisse de $-30\\%$ ?", a: "$CM = 1 - 0{,}30 = \\\\mathbf{0{,}70}$" },
        { q: "Calculer $50\\%$ de $80$ € ?", a: "$80 \\\\div 2 = \\\\mathbf{40}$ €" },
        { q: "Calculer $10\\%$ de $250$ € ?", a: "$250 \\\\div 10 = \\\\mathbf{25}$ €" },
        { q: "Taux $t$ si $CM = 1{,}05$ ?", a: "Hausse de $\\\\mathbf{+5\\%}$" },
        { q: "Taux $t$ si $CM = 0{,}85$ ?", a: "Baisse de $\\\\mathbf{-15\\%}$" },
        { q: "TVA standard en France ?", a: "$\\\\mathbf{20\\%}$ $(CM = 1{,}20)$" },
        { q: "De $100$ € à $150$ € = hausse de ?", a: "$t = \\\\frac{50}{100} = \\\\mathbf{+50\\%}$" },
        { q: "Doublement = hausse de ?", a: "$\\\\mathbf{+100\\%}$ $(CM = 2)$" },
        { q: "Formule du taux $t$ ?", a: "$t = \\\\frac{V_1 - V_0}{V_0}$" }
    ];

    return cards.map((c, i) => `
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
}

function generateQCM() {
    const questions = [
        {
            q: "1. Quel est le CM d'une hausse de $+8\\%$ ?",
            opts: [{ v: 'A', t: '$0{,}92$' }, { v: 'B', t: '$1{,}08$' }, { v: 'C', t: '$1{,}80$' }]
        },
        {
            q: '2. $25\\%$ de $160$ € = ?',
            opts: [{ v: 'A', t: '$40$ €' }, { v: 'B', t: '$45$ €' }, { v: 'C', t: '$35$ €' }]
        },
        {
            q: '3. Un article passe de $80$ € à $60$ €. Le taux est :',
            opts: [{ v: 'A', t: '$-20\\%$' }, { v: 'B', t: '$+25\\%$' }, { v: 'C', t: '$-25\\%$' }]
        },
        {
            q: "4. Hausse de $+10\\%$ puis baisse de $-10\\%$. Prix initial retrouvé ?",
            opts: [{ v: 'A', t: 'Oui' }, { v: 'B', t: 'Non ($CM = 0{,}99$)' }, { v: 'C', t: "Cela dépend du prix" }]
        },
        {
            q: '5. Proportion : $72$ filles sur $240$ élèves = ?',
            opts: [{ v: 'A', t: '$30\\%$' }, { v: 'B', t: '$25\\%$' }, { v: 'C', t: '$35\\%$' }]
        },
        {
            q: "6. Après une baisse de $-20\\%$ ($CM = 0{,}80$), la hausse pour revenir au prix initial :",
            opts: [{ v: 'A', t: '$+20\\%$' }, { v: 'B', t: '$+30\\%$' }, { v: 'C', t: '$+25\\%$' }]
        },
        {
            q: '7. $V_0 = 500$ €, hausse de $+12\\%$. $V_1 = $ ?',
            opts: [{ v: 'A', t: '$600$ €' }, { v: 'B', t: '$560$ €' }, { v: 'C', t: '$512$ €' }]
        },
        {
            q: '8. $CM = 0{,}65$ correspond à une baisse de :',
            opts: [{ v: 'A', t: '$-35\\%$' }, { v: 'B', t: '$-65\\%$' }, { v: 'C', t: '$+35\\%$' }]
        },
        {
            q: '9. Proportions étagées : $40\\%$ des $60\\%$ de bacheliers = ?',
            opts: [{ v: 'A', t: '$100\\%$' }, { v: 'B', t: '$20\\%$' }, { v: 'C', t: '$24\\%$' }]
        },
        {
            q: '10. CM global de deux hausses successives $+10\\%$ et $+20\\%$ :',
            opts: [{ v: 'A', t: '$1{,}30$' }, { v: 'B', t: '$1{,}32$' }, { v: 'C', t: '$1{,}02$' }]
        }
    ];

    return questions.map((q, i) => {
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
}

// ──────────────────────────────────────────
// 2. TICE.HTML
// ──────────────────────────────────────────
const ticeHtml = `<!DOCTYPE html>
<html lang="fr" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TP TICE Excel - Pourcentages & Proportions 2nde Pro</title>
    <script src="https://cdn.tailwindcss.com"><\/script>
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
    <\/script>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Outfit:wght@400;500;600;700;800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <script>MathJax = { tex: { inlineMath: [['$', '$'], ['\\\\(', '\\\\)']] } };<\/script>
    <script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js"><\/script>

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
                    <span class="text-xs font-bold tracking-widest uppercase text-purple-400">Séquence 2 • Seconde Professionnelle Mathématiques</span>
                    <h1 class="text-xl font-bold font-heading">Pourcentages, Proportions & Taux d'Évolution</h1>
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
                        <span>Module TICE • Tableur Excel & Formules</span>
                    </div>
                    <h2 class="text-2xl font-extrabold text-slate-900 font-heading mt-1">TP TICE : Évolutions, Proportions & Diagrammes sous Excel</h2>
                </div>
                <div class="flex flex-col gap-1 text-xs text-slate-500">
                    <span><i class="fa-solid fa-clock mr-1"></i> Durée : 1h30</span>
                    <span><i class="fa-solid fa-bullseye mr-1"></i> Compétences : C1, C2, C4, C5</span>
                </div>
            </div>
            <p class="text-xs text-slate-600 leading-relaxed">
                Ce TP guidé vous apprend à <strong>utiliser le tableur Excel</strong> pour calculer des pourcentages, des taux d'évolution, des coefficients multiplicateurs, et à représenter les données sous forme de diagrammes. Chaque partie comporte des <strong>captures d'écran de référence</strong> et des <strong>formules à saisir</strong>.
            </p>
        </div>

        <!-- ═══════════════════════════════════════════ -->
        <!-- PARTIE 1 : TABLEAU DE PROPORTIONS          -->
        <!-- ═══════════════════════════════════════════ -->
        <section class="bg-white rounded-3xl border border-slate-200 p-6 md:p-8 card-shadow space-y-6">
            <div class="flex items-center gap-3 border-b border-slate-100 pb-3">
                <div class="w-8 h-8 bg-purple-100 text-purple-800 rounded-lg flex items-center justify-center font-bold text-sm">1</div>
                <h3 class="font-bold text-slate-900 text-lg font-heading">Partie 1 : Tableau de Proportions d'un Lycée</h3>
            </div>

            <div class="bg-slate-50 rounded-2xl p-5 border border-slate-200 space-y-4">
                <p class="text-xs text-slate-700"><strong>Contexte :</strong> Un lycée professionnel compte <strong>$N = 480$ élèves</strong> répartis en 4 filières. Vous allez calculer la proportion et le pourcentage de chaque filière.</p>

                <!-- Tableau Excel simulé -->
                <div class="overflow-x-auto">
                    <table class="excel-table">
                        <thead>
                            <tr>
                                <th class="w-8"></th>
                                <th>A</th><th>B</th><th>C</th><th>D</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="excel-header">1</td>
                                <td class="font-bold bg-slate-100">Filière</td>
                                <td class="font-bold bg-slate-100">Effectif $n$</td>
                                <td class="font-bold bg-slate-100">Proportion $p$</td>
                                <td class="font-bold bg-slate-100">Pourcentage $p_{\\%}$</td>
                            </tr>
                            <tr>
                                <td class="excel-header">2</td>
                                <td>Commerce</td><td>144</td>
                                <td class="text-purple-700 font-bold">=B2/480</td>
                                <td class="text-purple-700 font-bold">=C2*100</td>
                            </tr>
                            <tr>
                                <td class="excel-header">3</td>
                                <td>Industrie</td><td>120</td>
                                <td class="text-purple-700 font-bold">=B3/480</td>
                                <td class="text-purple-700 font-bold">=C3*100</td>
                            </tr>
                            <tr>
                                <td class="excel-header">4</td>
                                <td>Services</td><td>96</td>
                                <td class="text-purple-700 font-bold">=B4/480</td>
                                <td class="text-purple-700 font-bold">=C4*100</td>
                            </tr>
                            <tr>
                                <td class="excel-header">5</td>
                                <td>Bâtiment</td><td>120</td>
                                <td class="text-purple-700 font-bold">=B5/480</td>
                                <td class="text-purple-700 font-bold">=C5*100</td>
                            </tr>
                            <tr class="bg-yellow-50 border-t-2 border-yellow-400">
                                <td class="excel-header">6</td>
                                <td class="font-bold">TOTAL</td>
                                <td class="font-bold text-purple-700">=SOMME(B2:B5)</td>
                                <td class="font-bold text-purple-700">=SOMME(C2:C5)</td>
                                <td class="font-bold text-purple-700">=SOMME(D2:D5)</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div class="bg-purple-50 border border-purple-200 rounded-xl p-4 text-xs space-y-2">
                    <p class="font-bold text-purple-800"><i class="fa-solid fa-lightbulb mr-1"></i> Instructions :</p>
                    <ol class="list-decimal list-inside text-purple-700 space-y-1">
                        <li>Ouvrir Excel et saisir les données du tableau ci-dessus.</li>
                        <li>En <strong>C2</strong>, saisir la formule <code class="bg-white px-1 rounded">=B2/480</code> puis étirer vers C5.</li>
                        <li>En <strong>D2</strong>, saisir <code class="bg-white px-1 rounded">=C2*100</code> puis étirer vers D5.</li>
                        <li>En <strong>B6</strong>, saisir <code class="bg-white px-1 rounded">=SOMME(B2:B5)</code> pour vérifier que le total est bien 480.</li>
                        <li><strong>Formater</strong> les cellules C2:C5 en « Nombre » (2 décimales) et D2:D5 en « Pourcentage ».</li>
                    </ol>
                </div>
            </div>

            <!-- Question de validation Partie 1 -->
            <div class="bg-slate-50 rounded-2xl p-5 border space-y-3 text-xs">
                <p class="font-bold text-slate-900"><i class="fa-solid fa-question-circle text-purple-600 mr-1"></i> Question : Quel pourcentage d'élèves sont en filière Commerce ?</p>
                <input type="text" id="tice-p1" class="border rounded-xl p-2.5 w-full font-bold bg-white" placeholder="? %">
            </div>
        </section>

        <!-- ═══════════════════════════════════════════ -->
        <!-- PARTIE 2 : TAUX D'ÉVOLUTION & CM           -->
        <!-- ═══════════════════════════════════════════ -->
        <section class="bg-white rounded-3xl border border-slate-200 p-6 md:p-8 card-shadow space-y-6">
            <div class="flex items-center gap-3 border-b border-slate-100 pb-3">
                <div class="w-8 h-8 bg-purple-100 text-purple-800 rounded-lg flex items-center justify-center font-bold text-sm">2</div>
                <h3 class="font-bold text-slate-900 text-lg font-heading">Partie 2 : Taux d'Évolution & Coefficient Multiplicateur</h3>
            </div>

            <div class="bg-slate-50 rounded-2xl p-5 border border-slate-200 space-y-4">
                <p class="text-xs text-slate-700"><strong>Contexte :</strong> Un magasin de vêtements suit les prix de 5 articles sur 2 saisons. Vous allez calculer le <strong>taux d'évolution $t$</strong> et le <strong>coefficient multiplicateur $CM$</strong>.</p>

                <div class="overflow-x-auto">
                    <table class="excel-table">
                        <thead>
                            <tr>
                                <th class="w-8"></th>
                                <th>A</th><th>B</th><th>C</th><th>D</th><th>E</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="excel-header">1</td>
                                <td class="font-bold bg-slate-100">Article</td>
                                <td class="font-bold bg-slate-100">$V_0$ (€)</td>
                                <td class="font-bold bg-slate-100">$V_1$ (€)</td>
                                <td class="font-bold bg-slate-100">Taux $t$ (%)</td>
                                <td class="font-bold bg-slate-100">$CM$</td>
                            </tr>
                            <tr>
                                <td class="excel-header">2</td>
                                <td>Jean slim</td><td>45</td><td>36</td>
                                <td class="text-purple-700 font-bold">=(C2-B2)/B2*100</td>
                                <td class="text-purple-700 font-bold">=C2/B2</td>
                            </tr>
                            <tr>
                                <td class="excel-header">3</td>
                                <td>T-shirt</td><td>20</td><td>24</td>
                                <td class="text-purple-700 font-bold">=(C3-B3)/B3*100</td>
                                <td class="text-purple-700 font-bold">=C3/B3</td>
                            </tr>
                            <tr>
                                <td class="excel-header">4</td>
                                <td>Veste</td><td>80</td><td>60</td>
                                <td class="text-purple-700 font-bold">=(C4-B4)/B4*100</td>
                                <td class="text-purple-700 font-bold">=C4/B4</td>
                            </tr>
                            <tr>
                                <td class="excel-header">5</td>
                                <td>Baskets</td><td>90</td><td>99</td>
                                <td class="text-purple-700 font-bold">=(C5-B5)/B5*100</td>
                                <td class="text-purple-700 font-bold">=C5/B5</td>
                            </tr>
                            <tr>
                                <td class="excel-header">6</td>
                                <td>Pull</td><td>50</td><td>50</td>
                                <td class="text-purple-700 font-bold">=(C6-B6)/B6*100</td>
                                <td class="text-purple-700 font-bold">=C6/B6</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div class="bg-purple-50 border border-purple-200 rounded-xl p-4 text-xs space-y-2">
                    <p class="font-bold text-purple-800"><i class="fa-solid fa-lightbulb mr-1"></i> Instructions :</p>
                    <ol class="list-decimal list-inside text-purple-700 space-y-1">
                        <li>Saisir les données dans un nouveau classeur Excel.</li>
                        <li>En <strong>D2</strong>, saisir <code class="bg-white px-1 rounded">=(C2-B2)/B2*100</code> puis étirer vers D6.</li>
                        <li>En <strong>E2</strong>, saisir <code class="bg-white px-1 rounded">=C2/B2</code> puis étirer vers E6.</li>
                        <li><strong>Observer</strong> : si $t < 0$ → baisse, si $t > 0$ → hausse, si $t = 0$ → stable.</li>
                        <li><strong>Mise en forme conditionnelle</strong> : colorer en <span class="text-red-600 font-bold">rouge</span> les baisses et en <span class="text-green-600 font-bold">vert</span> les hausses.</li>
                    </ol>
                </div>
            </div>

            <!-- Questions de validation Partie 2 -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                <div class="bg-slate-50 rounded-2xl p-5 border space-y-3">
                    <p class="font-bold text-slate-900"><i class="fa-solid fa-question-circle text-purple-600 mr-1"></i> Quel est le taux d'évolution du Jean slim ?</p>
                    <input type="text" id="tice-p2a" class="border rounded-xl p-2.5 w-full font-bold bg-white" placeholder="t = ? %">
                </div>
                <div class="bg-slate-50 rounded-2xl p-5 border space-y-3">
                    <p class="font-bold text-slate-900"><i class="fa-solid fa-question-circle text-purple-600 mr-1"></i> Quel est le CM des Baskets ?</p>
                    <input type="text" id="tice-p2b" class="border rounded-xl p-2.5 w-full font-bold bg-white" placeholder="CM = ?">
                </div>
            </div>
        </section>

        <!-- ═══════════════════════════════════════════ -->
        <!-- PARTIE 3 : ÉVOLUTIONS SUCCESSIVES          -->
        <!-- ═══════════════════════════════════════════ -->
        <section class="bg-white rounded-3xl border border-slate-200 p-6 md:p-8 card-shadow space-y-6">
            <div class="flex items-center gap-3 border-b border-slate-100 pb-3">
                <div class="w-8 h-8 bg-purple-100 text-purple-800 rounded-lg flex items-center justify-center font-bold text-sm">3</div>
                <h3 class="font-bold text-slate-900 text-lg font-heading">Partie 3 : Évolutions Successives & Diagramme</h3>
            </div>

            <div class="bg-slate-50 rounded-2xl p-5 border border-slate-200 space-y-4">
                <p class="text-xs text-slate-700"><strong>Contexte :</strong> Le prix d'un abonnement internet est de <strong>$V_0 = 30$ €/mois</strong>. Il subit les évolutions suivantes sur 4 ans :</p>

                <div class="overflow-x-auto">
                    <table class="excel-table">
                        <thead>
                            <tr>
                                <th class="w-8"></th>
                                <th>A</th><th>B</th><th>C</th><th>D</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="excel-header">1</td>
                                <td class="font-bold bg-slate-100">Année</td>
                                <td class="font-bold bg-slate-100">Taux $t$ (%)</td>
                                <td class="font-bold bg-slate-100">$CM$</td>
                                <td class="font-bold bg-slate-100">Prix (€)</td>
                            </tr>
                            <tr>
                                <td class="excel-header">2</td>
                                <td>Année 0</td><td>—</td><td>—</td>
                                <td class="font-bold">30,00</td>
                            </tr>
                            <tr>
                                <td class="excel-header">3</td>
                                <td>Année 1</td><td>+5</td>
                                <td class="text-purple-700 font-bold">=1+B3/100</td>
                                <td class="text-purple-700 font-bold">=D2*C3</td>
                            </tr>
                            <tr>
                                <td class="excel-header">4</td>
                                <td>Année 2</td><td>+8</td>
                                <td class="text-purple-700 font-bold">=1+B4/100</td>
                                <td class="text-purple-700 font-bold">=D3*C4</td>
                            </tr>
                            <tr>
                                <td class="excel-header">5</td>
                                <td>Année 3</td><td>-3</td>
                                <td class="text-purple-700 font-bold">=1+B5/100</td>
                                <td class="text-purple-700 font-bold">=D4*C5</td>
                            </tr>
                            <tr>
                                <td class="excel-header">6</td>
                                <td>Année 4</td><td>+10</td>
                                <td class="text-purple-700 font-bold">=1+B6/100</td>
                                <td class="text-purple-700 font-bold">=D5*C6</td>
                            </tr>
                            <tr class="bg-yellow-50 border-t-2 border-yellow-400">
                                <td class="excel-header">7</td>
                                <td class="font-bold">CM Global</td><td></td>
                                <td class="text-purple-700 font-bold">=PRODUIT(C3:C6)</td>
                                <td class="text-purple-700 font-bold">=D6</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div class="bg-purple-50 border border-purple-200 rounded-xl p-4 text-xs space-y-2">
                    <p class="font-bold text-purple-800"><i class="fa-solid fa-chart-bar mr-1"></i> Instructions Diagramme :</p>
                    <ol class="list-decimal list-inside text-purple-700 space-y-1">
                        <li>Sélectionner les cellules <strong>A2:A6</strong> et <strong>D2:D6</strong> (Ctrl+clic).</li>
                        <li>Aller dans <strong>Insertion → Graphique → Histogramme groupé</strong>.</li>
                        <li>Ajouter un <strong>titre</strong> : « Évolution du prix d'abonnement sur 4 ans ».</li>
                        <li>Ajouter les <strong>étiquettes de données</strong> sur chaque barre.</li>
                        <li><strong>Bonus</strong> : Ajouter une courbe de tendance linéaire.</li>
                    </ol>
                </div>

                <!-- Schéma SVG du diagramme attendu -->
                <div class="flex justify-center">
                    <svg viewBox="0 0 500 240" class="w-full max-w-lg" xmlns="http://www.w3.org/2000/svg">
                        <rect width="500" height="240" fill="#f8fafc" rx="12"/>
                        <text x="250" y="22" text-anchor="middle" font-size="11" font-weight="700" fill="#334155">Diagramme attendu : Prix de l'abonnement</text>
                        <!-- Axes -->
                        <line x1="60" y1="30" x2="60" y2="200" stroke="#94a3b8" stroke-width="1.5"/>
                        <line x1="60" y1="200" x2="470" y2="200" stroke="#94a3b8" stroke-width="1.5"/>
                        <!-- Graduations Y -->
                        <text x="50" y="200" text-anchor="end" font-size="9" fill="#64748b">0</text>
                        <text x="50" y="158" text-anchor="end" font-size="9" fill="#64748b">10</text>
                        <text x="50" y="115" text-anchor="end" font-size="9" fill="#64748b">20</text>
                        <text x="50" y="72" text-anchor="end" font-size="9" fill="#64748b">30</text>
                        <text x="50" y="30" text-anchor="end" font-size="9" fill="#64748b">40</text>
                        <!-- Barres (30, 31.5, 34.02, 33, 36.3) -->
                        <rect x="90" y="72" width="55" height="128" fill="#7c3aed" rx="4" opacity="0.85"/>
                        <text x="117" y="66" text-anchor="middle" font-size="9" font-weight="700" fill="#7c3aed">30,00</text>
                        <rect x="170" y="65" width="55" height="135" fill="#8b5cf6" rx="4" opacity="0.85"/>
                        <text x="197" y="59" text-anchor="middle" font-size="9" font-weight="700" fill="#8b5cf6">31,50</text>
                        <rect x="250" y="55" width="55" height="145" fill="#a78bfa" rx="4" opacity="0.85"/>
                        <text x="277" y="49" text-anchor="middle" font-size="9" font-weight="700" fill="#7c3aed">34,02</text>
                        <rect x="330" y="59" width="55" height="141" fill="#c4b5fd" rx="4" opacity="0.85"/>
                        <text x="357" y="53" text-anchor="middle" font-size="9" font-weight="700" fill="#7c3aed">33,00</text>
                        <rect x="410" y="46" width="55" height="154" fill="#7c3aed" rx="4" opacity="0.9"/>
                        <text x="437" y="40" text-anchor="middle" font-size="9" font-weight="700" fill="#7c3aed">36,30</text>
                        <!-- Labels X -->
                        <text x="117" y="215" text-anchor="middle" font-size="9" fill="#475569">An 0</text>
                        <text x="197" y="215" text-anchor="middle" font-size="9" fill="#475569">An 1</text>
                        <text x="277" y="215" text-anchor="middle" font-size="9" fill="#475569">An 2</text>
                        <text x="357" y="215" text-anchor="middle" font-size="9" fill="#475569">An 3</text>
                        <text x="437" y="215" text-anchor="middle" font-size="9" fill="#475569">An 4</text>
                        <!-- Axe Y label -->
                        <text x="15" y="115" text-anchor="middle" font-size="9" fill="#64748b" transform="rotate(-90, 15, 115)">Prix (€)</text>
                    </svg>
                </div>
            </div>

            <!-- Questions de validation Partie 3 -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                <div class="bg-slate-50 rounded-2xl p-5 border space-y-3">
                    <p class="font-bold text-slate-900"><i class="fa-solid fa-question-circle text-purple-600 mr-1"></i> Quel est le prix en Année 2 (arrondi au centime) ?</p>
                    <input type="text" id="tice-p3a" class="border rounded-xl p-2.5 w-full font-bold bg-white" placeholder="? €">
                </div>
                <div class="bg-slate-50 rounded-2xl p-5 border space-y-3">
                    <p class="font-bold text-slate-900"><i class="fa-solid fa-question-circle text-purple-600 mr-1"></i> Quel est le CM global sur 4 ans (arrondi à 0,01) ?</p>
                    <input type="text" id="tice-p3b" class="border rounded-xl p-2.5 w-full font-bold bg-white" placeholder="CM global = ?">
                </div>
            </div>
        </section>

        <!-- ═══════════════════════════════════════════ -->
        <!-- PARTIE 4 : DIAGRAMME CIRCULAIRE            -->
        <!-- ═══════════════════════════════════════════ -->
        <section class="bg-white rounded-3xl border border-slate-200 p-6 md:p-8 card-shadow space-y-6">
            <div class="flex items-center gap-3 border-b border-slate-100 pb-3">
                <div class="w-8 h-8 bg-purple-100 text-purple-800 rounded-lg flex items-center justify-center font-bold text-sm">4</div>
                <h3 class="font-bold text-slate-900 text-lg font-heading">Partie 4 : Diagramme Circulaire des Proportions</h3>
            </div>

            <div class="bg-slate-50 rounded-2xl p-5 border border-slate-200 space-y-4">
                <p class="text-xs text-slate-700">À partir du tableau de la <strong>Partie 1</strong>, créez un <strong>diagramme circulaire (camembert)</strong> représentant la répartition des élèves par filière.</p>

                <div class="bg-purple-50 border border-purple-200 rounded-xl p-4 text-xs space-y-2">
                    <p class="font-bold text-purple-800"><i class="fa-solid fa-chart-pie mr-1"></i> Instructions :</p>
                    <ol class="list-decimal list-inside text-purple-700 space-y-1">
                        <li>Sélectionner <strong>A2:A5</strong> et <strong>B2:B5</strong>.</li>
                        <li><strong>Insertion → Graphique → Secteurs</strong> (camembert 2D).</li>
                        <li>Ajouter les <strong>étiquettes de données</strong> avec pourcentages.</li>
                        <li>Titre : « Répartition des élèves par filière ».</li>
                        <li>Utiliser des <strong>couleurs contrastées</strong> pour chaque secteur.</li>
                    </ol>
                </div>

                <!-- SVG du camembert attendu -->
                <div class="flex justify-center">
                    <svg viewBox="0 0 300 250" class="w-full max-w-xs" xmlns="http://www.w3.org/2000/svg">
                        <rect width="300" height="250" fill="#f8fafc" rx="12"/>
                        <text x="150" y="20" text-anchor="middle" font-size="10" font-weight="700" fill="#334155">Diagramme circulaire attendu</text>
                        <!-- Commerce 30% = 108° -->
                        <path d="M150,130 L150,50 A80,80 0 0,1 219,90 Z" fill="#7c3aed" opacity="0.9"/>
                        <text x="190" y="75" font-size="8" font-weight="700" fill="white">30%</text>
                        <!-- Industrie 25% = 90° -->
                        <path d="M150,130 L219,90 A80,80 0 0,1 230,130 L230,147 A80,80 0 0,1 210,175 Z" fill="#a78bfa" opacity="0.85"/>
                        <text x="220" y="135" font-size="8" font-weight="700" fill="white">25%</text>
                        <!-- Services 20% = 72° -->
                        <path d="M150,130 L210,175 A80,80 0 0,1 110,195 Z" fill="#c4b5fd" opacity="0.8"/>
                        <text x="158" y="190" font-size="8" font-weight="700" fill="#5b21b6">20%</text>
                        <!-- Bâtiment 25% = 90° -->
                        <path d="M150,130 L110,195 A80,80 0 0,1 150,50 Z" fill="#ede9fe" opacity="0.9" stroke="#7c3aed" stroke-width="0.5"/>
                        <text x="110" y="110" font-size="8" font-weight="700" fill="#5b21b6">25%</text>
                        <!-- Légende -->
                        <rect x="30" y="225" width="10" height="10" fill="#7c3aed" rx="2"/>
                        <text x="44" y="234" font-size="8" fill="#475569">Commerce</text>
                        <rect x="100" y="225" width="10" height="10" fill="#a78bfa" rx="2"/>
                        <text x="114" y="234" font-size="8" fill="#475569">Industrie</text>
                        <rect x="170" y="225" width="10" height="10" fill="#c4b5fd" rx="2"/>
                        <text x="184" y="234" font-size="8" fill="#475569">Services</text>
                        <rect x="240" y="225" width="10" height="10" fill="#ede9fe" rx="2" stroke="#7c3aed" stroke-width="0.5"/>
                        <text x="254" y="234" font-size="8" fill="#475569">Bât.</text>
                    </svg>
                </div>
            </div>

            <div class="bg-slate-50 rounded-2xl p-5 border space-y-3 text-xs">
                <p class="font-bold text-slate-900"><i class="fa-solid fa-question-circle text-purple-600 mr-1"></i> Quel type de graphique est le plus adapté pour représenter des proportions d'un ensemble ?</p>
                <select id="tice-p4" class="border rounded-xl p-2.5 w-full font-bold bg-white">
                    <option value="">Sélectionnez...</option>
                    <option value="CIRC">Diagramme circulaire (camembert)</option>
                    <option value="HIST">Histogramme</option>
                    <option value="COURBE">Courbe</option>
                </select>
            </div>
        </section>

        <!-- ═══════════════════════════════════════════ -->
        <!-- BOUTON DE VALIDATION GLOBAL                -->
        <!-- ═══════════════════════════════════════════ -->
        <div class="space-y-4">
            <button onclick="checkAllTICE()" class="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm py-4 rounded-2xl shadow-md transition-colors no-print">
                <i class="fa-solid fa-check-double mr-2"></i> Valider toutes mes réponses TICE
            </button>
            <div id="fb-tice-global" class="text-sm hidden p-5 rounded-2xl font-bold"></div>
        </div>

    </main>

    <!-- JS TICE -->
    <script>
        function checkAllTICE() {
            let score = 0;
            let total = 5;

            // P1 : Commerce = 30%
            let p1 = document.getElementById('tice-p1').value.trim().replace(',', '.');
            if (p1 === '30' || p1 === '30.0' || p1 === '30.00') score++;

            // P2a : Jean slim taux = -20%
            let p2a = document.getElementById('tice-p2a').value.trim().replace(',', '.');
            if (p2a === '-20' || p2a === '-20.0') score++;

            // P2b : Baskets CM = 1.1
            let p2b = document.getElementById('tice-p2b').value.trim().replace(',', '.');
            if (p2b === '1.1' || p2b === '1.10') score++;

            // P3a : Prix année 2 = 34.02
            let p3a = document.getElementById('tice-p3a').value.trim().replace(',', '.');
            if (p3a === '34.02') score++;

            // P3b : CM global = 1.21
            let p3b = document.getElementById('tice-p3b').value.trim().replace(',', '.');
            if (p3b === '1.21') score++;

            // P4 : Diagramme circulaire
            let p4 = document.getElementById('tice-p4').value;
            if (p4 === 'CIRC') { score++; total++; }
            else { total++; }

            let fb = document.getElementById('fb-tice-global');
            fb.classList.remove('hidden', 'correct-bg', 'wrong-bg');

            if (score >= total) {
                fb.classList.add('correct-bg');
                fb.innerHTML = '<i class="fa-solid fa-circle-check mr-2"></i> TP TICE validé ! ' + score + '/' + total + ' — Excellent travail avec Excel !';
            } else if (score >= total / 2) {
                fb.classList.add('correct-bg');
                fb.innerHTML = '<i class="fa-solid fa-circle-check mr-2"></i> Bien ! ' + score + '/' + total + ' — Corrigés : Commerce=30% | Jean=-20% | Baskets CM=1,10 | An2=34,02€ | CMglobal=1,21 | Camembert.';
            } else {
                fb.classList.add('wrong-bg');
                fb.innerHTML = '<i class="fa-solid fa-circle-xmark mr-2"></i> Score : ' + score + '/' + total + ' — Corrigés : Commerce=30% | Jean=-20% | Baskets CM=1,10 | An2=34,02€ | CMglobal=1,21 | Camembert.';
            }
        }
    <\/script>
</body>
</html>`;

// ──────────────────────────────────────────
// WRITE FILES
// ──────────────────────────────────────────
fs.writeFileSync(path.join(targetDir, 'automatismes.html'), automatismesHtml, 'utf8');
console.log('✅ automatismes.html écrit avec succès');

fs.writeFileSync(path.join(targetDir, 'tice.html'), ticeHtml, 'utf8');
console.log('✅ tice.html écrit avec succès');

console.log('🎉 Les deux fichiers ont été générés !');
