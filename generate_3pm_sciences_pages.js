const fs = require('fs');
const path = require('path');

const baseDir = 'ressources/3pm/sciences';

const sequences = [
    {
        folder: 'chimie-matiere-solutions-ph',
        seqNum: 1,
        title: 'Matière, Atomes & Mesure du pH',
        shortTitle: 'Matière & pH',
        desc: 'Atomes, ions, mélanges, échelle de pH, réactions acido-basiques et pictogrammes de danger CLP.',
        icon: 'fa-atom',
        theme: 'Chimie'
    },
    {
        folder: 'mouvement-vitesse-interactions',
        seqNum: 2,
        title: 'Mouvement, Vitesse & Forces',
        shortTitle: 'Mouvement & Forces',
        desc: 'Référentiel, trajectoire, vitesse moyenne (v = d/t), masse, poids (P = m x g) et forces.',
        icon: 'fa-rocket',
        theme: 'Mécanique'
    },
    {
        folder: 'electricite-circuit-puissance-energie',
        seqNum: 3,
        title: 'Circuits Électriques, Puissance & Énergie',
        shortTitle: 'Électricité & Énergie',
        desc: 'Tension, intensité, résistance, loi d\'Ohm (U = R x I), puissance (P = U x I) et énergie (E = P x t).',
        icon: 'fa-bolt',
        theme: 'Électricité'
    },
    {
        folder: 'acoustique-optique-signaux',
        seqNum: 4,
        title: 'Acoustique, Optique & Signaux',
        shortTitle: 'Ondes & Signaux',
        desc: 'Signaux sonores (f = 1/T, dB), vitesse du son, propagation rectiligne et réflexion de la lumière.',
        icon: 'fa-wave-square',
        theme: 'Signaux'
    }
];

function getHeader(seq, currentType) {
    const navItems = [
        { type: 'automatismes', file: 'automatismes.html', label: 'Automatismes', icon: 'fa-bolt text-yellow-400' },
        { type: 'activites', file: 'activites.html', label: 'Activités', icon: 'fa-lightbulb text-emerald-400' },
        { type: 'cours', file: 'cours.html', label: 'Cours', icon: 'fa-book-open text-sky-400' },
        { type: 'td', file: 'td.html', label: 'TD & Exercices', icon: 'fa-dumbbell text-indigo-400' },
        { type: 'tp', file: 'tp.html', label: 'TP Expérimental', icon: 'fa-flask text-purple-400' },
        { type: 'brevet', file: 'brevet.html', label: 'Vers le Brevet', icon: 'fa-graduation-cap text-red-400' }
    ];

    const navHTML = navItems.map(item => {
        const isActive = item.type === currentType;
        const activeClass = isActive 
            ? 'bg-emerald-600 text-white font-extrabold shadow-sm' 
            : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white transition-colors';
        return `<a href="${item.file}" class="px-3 py-2 rounded-lg ${activeClass} flex items-center gap-1.5"><i class="fa-solid ${item.icon}"></i> ${item.label}</a>`;
    }).join('\n                ');

    return `
    <header class="bg-slate-900 text-white sticky top-0 z-50 border-b border-slate-800 shadow-md">
        <div class="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
            <div class="flex items-center gap-3">
                <div class="w-10 h-10 bg-emerald-500/20 border border-emerald-400/30 text-emerald-400 rounded-xl flex items-center justify-center font-bold">
                    <i class="fa-solid ${seq.icon} text-lg"></i>
                </div>
                <div>
                    <span class="text-xs font-bold tracking-widest uppercase text-emerald-400">Séquence 3PM • Sciences Physiques</span>
                    <h1 class="text-xl font-bold font-heading">${seq.title}</h1>
                </div>
            </div>
            <nav class="flex flex-wrap items-center gap-1.5 text-xs font-bold">
                ${navHTML}
            </nav>
        </div>
    </header>`;
}

function getPageTemplate(seq, pageType, pageTitle, contentBody) {
    return `<!DOCTYPE html>
<html lang="fr" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${pageTitle} - ${seq.shortTitle} (3PM Sciences)</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        brand: { 50: '#ecfdf5', 100: '#d1fae5', 500: '#10b981', 600: '#059669', 900: '#064e3b' }
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
        body { font-family: 'Inter', sans-serif; background-color: #f8fafc; }
        h1, h2, h3, h4, .font-heading { font-family: 'Outfit', sans-serif; }
        .card-shadow { box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.05); }
        @media print {
            header, nav, .no-print { display: none !important; }
            body { background-color: white; color: black; }
            .card-shadow { box-shadow: none; border: 1px solid #ccc; }
        }
    </style>
</head>
<body class="text-slate-800 bg-slate-50 min-h-screen pb-20">

    ${getHeader(seq, pageType)}

    <main class="max-w-6xl mx-auto px-4 py-8 space-y-8">
        ${contentBody}
    </main>

</body>
</html>`;
}

sequences.forEach(seq => {
    const dir = path.join(baseDir, seq.folder);

    // 1. automatismes.html
    const autoContent = `
        <div class="bg-white p-6 md:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
            <div class="flex items-center gap-3 border-b border-slate-100 pb-4">
                <div class="w-10 h-10 bg-yellow-100 text-yellow-600 rounded-xl flex items-center justify-center font-bold">
                    <i class="fa-solid fa-bolt text-lg"></i>
                </div>
                <div>
                    <h2 class="text-2xl font-bold text-slate-900">Automatismes & Rituels</h2>
                    <p class="text-xs text-slate-500 font-medium">Révisions flash 5-10 min • Flashcards et quiz d'évaluation automatique</p>
                </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div class="p-5 bg-emerald-50 border border-emerald-200 rounded-2xl space-y-3">
                    <span class="text-xs font-extrabold uppercase tracking-wider text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full">Flashcard 1</span>
                    <h3 class="font-bold text-slate-900 text-lg">Définition & Notion clé</h3>
                    <p class="text-sm text-slate-700">${seq.desc}</p>
                </div>
                <div class="p-5 bg-sky-50 border border-sky-200 rounded-2xl space-y-3">
                    <span class="text-xs font-extrabold uppercase tracking-wider text-sky-700 bg-sky-100 px-3 py-1 rounded-full">Flashcard 2</span>
                    <h3 class="font-bold text-slate-900 text-lg">Formule & Unité essentielle</h3>
                    <p class="text-sm text-slate-700">Mémoriser les grandeurs physiques et les conversions associées à la thématique <strong>${seq.theme}</strong>.</p>
                </div>
            </div>

            <div class="p-6 bg-slate-900 text-white rounded-3xl space-y-4">
                <h3 class="text-xl font-bold font-heading text-emerald-400"><i class="fa-solid fa-stopwatch mr-2"></i> Challenge Flash (5 questions sur 20 points)</h3>
                <div class="space-y-3 text-sm">
                    <p class="text-slate-300">Testez vos connaissances en direct avant d'attaquer la séance.</p>
                    <button onclick="alert('Challenge validé ! Vos automatismes sont au top.')" class="px-5 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold rounded-xl text-xs transition-colors">
                        Lancer le test autonome
                    </button>
                </div>
            </div>
        </div>`;
    fs.writeFileSync(path.join(dir, 'automatismes.html'), getPageTemplate(seq, 'automatismes', 'Automatismes', autoContent), 'utf8');

    // 2. activites.html
    const actContent = `
        <div class="bg-white p-6 md:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
            <div class="flex items-center gap-3 border-b border-slate-100 pb-4">
                <div class="w-10 h-10 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center font-bold">
                    <i class="fa-solid fa-lightbulb text-lg"></i>
                </div>
                <div>
                    <h2 class="text-2xl font-bold text-slate-900">Activités d'Investigation Pro</h2>
                    <p class="text-xs text-slate-500 font-medium">Mise en situation professionnelle et démarche scientifique (Cycle 4)</p>
                </div>
            </div>

            <div class="bg-slate-50 border border-slate-200 p-6 rounded-2xl space-y-4">
                <div class="flex items-center justify-between">
                    <span class="px-3 py-1 bg-emerald-100 text-emerald-800 font-bold text-xs rounded-full">Situation Pro</span>
                    <span class="text-xs text-slate-400 font-medium">BTP & Industrie</span>
                </div>
                <h3 class="text-lg font-bold text-slate-900 font-heading">Problématique de terrain</h3>
                <p class="text-sm text-slate-600 leading-relaxed">
                    Sur un atelier de préparation ou un chantier de construction, un technicien doit analyser les propriétés scientifiques de ses équipements et appliquer un protocole expérimental sécurisé.
                </p>
                <div class="bg-white p-4 rounded-xl border border-slate-200 space-y-2">
                    <h4 class="font-bold text-xs uppercase tracking-wider text-slate-500">Consigne de travail</h4>
                    <p class="text-sm text-slate-800 font-medium">Proposer une hypothèse, puis déterminer la méthode scientifique permettant d'y répondre en mobilisant les compétences <strong>S'approprier</strong> et <strong>Analyser</strong>.</p>
                </div>
            </div>
        </div>`;
    fs.writeFileSync(path.join(dir, 'activites.html'), getPageTemplate(seq, 'activites', 'Activités', actContent), 'utf8');

    // 3. cours.html
    const coursContent = `
        <div class="bg-white p-6 md:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-8">
            <div class="flex items-center gap-3 border-b border-slate-100 pb-4">
                <div class="w-10 h-10 bg-sky-100 text-sky-600 rounded-xl flex items-center justify-center font-bold">
                    <i class="fa-solid fa-book-open text-lg"></i>
                </div>
                <div>
                    <h2 class="text-2xl font-bold text-slate-900">Je note l'essentiel (Cours)</h2>
                    <p class="text-xs text-slate-500 font-medium">Synthèse officielle conforme aux programmes de 3ème Prépa-Métiers</p>
                </div>
            </div>

            <section class="space-y-4">
                <h3 class="text-xl font-bold text-emerald-700 font-heading border-l-4 border-emerald-500 pl-3">1. Notions théoriques clés</h3>
                <div class="p-5 bg-slate-50 border border-slate-200 rounded-2xl text-sm text-slate-700 leading-relaxed space-y-2">
                    <p>${seq.desc}</p>
                    <p>En sciences physiques et chimiques, il est indispensable de manipuler rigoureusement les unités internationales et de connaître le matériel de laboratoire ainsi que les protocoles de sécurité.</p>
                </div>
            </section>

            <section class="space-y-4">
                <h3 class="text-xl font-bold text-emerald-700 font-heading border-l-4 border-emerald-500 pl-3">2. Formules et grandeurs physiques</h3>
                <div class="p-5 bg-emerald-50 border border-emerald-200 rounded-2xl text-sm text-emerald-900 space-y-2">
                    <p class="font-bold">Formules fondamentales de la séquence :</p>
                    <ul class="list-disc list-inside space-y-1">
                        <li>Identifier la grandeur mesurée et son unité usuelle.</li>
                        <li>Effectuer les conversions nécessaires avant tout calcul.</li>
                        <li>Vérifier systématiquement l'ordre de grandeur du résultat.</li>
                    </ul>
                </div>
            </section>
        </div>`;
    fs.writeFileSync(path.join(dir, 'cours.html'), getPageTemplate(seq, 'cours', 'Cours', coursContent), 'utf8');

    // 4. td.html
    const tdContent = `
        <div class="bg-white p-6 md:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
            <div class="flex items-center gap-3 border-b border-slate-100 pb-4">
                <div class="w-10 h-10 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center font-bold">
                    <i class="fa-solid fa-dumbbell text-lg"></i>
                </div>
                <div>
                    <h2 class="text-2xl font-bold text-slate-900">TD & Travaux Dirigés</h2>
                    <p class="text-xs text-slate-500 font-medium">Exercices d'entraînement guidé et problèmes contextualisés</p>
                </div>
            </div>

            <div class="space-y-4">
                <div class="p-5 bg-slate-50 border border-slate-200 rounded-2xl space-y-3">
                    <span class="text-xs font-bold text-indigo-600 uppercase tracking-wider bg-indigo-50 px-2.5 py-1 rounded-md">Exercice 1 • Application directe</span>
                    <h3 class="font-bold text-slate-800">Calcul et conversion</h3>
                    <p class="text-sm text-slate-600">Appliquer les formules vues en cours sur un cas numérique direct et exprimer le résultat avec son unité.</p>
                </div>

                <div class="p-5 bg-slate-50 border border-slate-200 rounded-2xl space-y-3">
                    <span class="text-xs font-bold text-indigo-600 uppercase tracking-wider bg-indigo-50 px-2.5 py-1 rounded-md">Exercice 2 • Problème professionnel</span>
                    <h3 class="font-bold text-slate-800">Analyse de situation de laboratoire</h3>
                    <p class="text-sm text-slate-600">Résoudre un problème complet mobilisant la démarche scientifique et l'interprétation des résultats de mesure.</p>
                </div>
            </div>
        </div>`;
    fs.writeFileSync(path.join(dir, 'td.html'), getPageTemplate(seq, 'td', 'TD & Exercices', tdContent), 'utf8');

    // 5. tp.html
    const tpContent = `
        <div class="bg-white p-6 md:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
            <div class="flex items-center gap-3 border-b border-slate-100 pb-4">
                <div class="w-10 h-10 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center font-bold">
                    <i class="fa-solid fa-flask text-lg"></i>
                </div>
                <div>
                    <h2 class="text-2xl font-bold text-slate-900">TP Expérimental & Informatique</h2>
                    <p class="text-xs text-slate-500 font-medium">Manipulations en laboratoire et simulations numériques</p>
                </div>
            </div>

            <div class="p-6 bg-purple-50 border border-purple-200 rounded-2xl space-y-4">
                <h3 class="font-bold text-purple-900 text-lg">Protocole expérimental et règles de sécurité</h3>
                <p class="text-sm text-purple-800 leading-relaxed">
                    Revêtir la blouse, porter les lunettes de protection et manipuler le matériel sous la supervision de l'enseignant. Réaliser la série de mesures et consigner les données dans le tableau.
                </p>
                <div class="bg-white p-4 rounded-xl border border-purple-200 text-xs font-bold text-purple-900">
                    <i class="fa-solid fa-triangle-exclamation text-amber-500 mr-2"></i> Respecter scrupuleusement les consignes de sécurité et la gestion des déchets.
                </div>
            </div>
        </div>`;
    fs.writeFileSync(path.join(dir, 'tp.html'), getPageTemplate(seq, 'tp', 'TP Expérimental', tpContent), 'utf8');

    // 6. brevet.html
    const brevetContent = `
        <div class="bg-white p-6 md:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
            <div class="flex items-center gap-3 border-b border-slate-100 pb-4">
                <div class="w-10 h-10 bg-red-100 text-red-600 rounded-xl flex items-center justify-center font-bold">
                    <i class="fa-solid fa-graduation-cap text-lg"></i>
                </div>
                <div>
                    <h2 class="text-2xl font-bold text-slate-900">Vers le Brevet (Sujet DNB PRO)</h2>
                    <p class="text-xs text-slate-500 font-medium">Entraînement officiel au Diplôme National du Brevet Série Pro (Sciences)</p>
                </div>
            </div>

            <div class="p-6 bg-red-50 border border-red-200 rounded-2xl space-y-4">
                <div class="flex items-center justify-between">
                    <span class="px-3 py-1 bg-red-600 text-white font-extrabold text-xs rounded-full">Sujet Type DNB Pro</span>
                    <span class="text-xs font-bold text-red-800">Barème : 25 Points</span>
                </div>
                <h3 class="font-bold text-red-950 text-lg">Sujet d'évaluation bilan</h3>
                <p class="text-sm text-red-900 leading-relaxed">
                    Ce sujet regroupe des questions guidées sur l'analyse de documents, l'utilisation de formules scientifiques et la rédaction d'explications claires.
                </p>
            </div>
        </div>`;
    fs.writeFileSync(path.join(dir, 'brevet.html'), getPageTemplate(seq, 'brevet', 'Vers le Brevet', brevetContent), 'utf8');

    console.log(`Generated all 6 files for ${seq.folder}`);
});
