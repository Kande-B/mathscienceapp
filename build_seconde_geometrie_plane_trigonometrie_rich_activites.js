const fs = require('fs');
const path = require('path');

const targetDir = path.join(__dirname, 'ressources', 'seconde', 'maths', 'geometrie-plane-trigonometrie');

const activitesHtml = `<!DOCTYPE html>
<html lang="fr" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Activités d'Investigation & Découverte - Trigonométrie 2nde Pro</title>
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
    <header class="bg-slate-900 text-white sticky top-0 z-50 border-b border-slate-800 shadow-md no-print">
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
                        <span class="bg-emerald-500 text-slate-950 text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">Mises en Situation & Découverte Guidée</span>
                        <span class="bg-slate-800 text-slate-300 text-xs font-semibold px-3 py-1 rounded-full border border-slate-700">Seconde Pro</span>
                    </div>
                    <h2 class="text-3xl font-extrabold font-heading text-white">Activités : Découverte des Ratios Trigonométriques</h2>
                    <p class="text-sm text-slate-300 max-w-2xl">Découvrez pourquoi et comment les rapports de côtés dans un triangle rectangle permettent de calculer des angles et longueurs inaccessibles !</p>
                </div>
            </div>
        </div>

        <!-- MODULE 0 : TEST DIAGNOSTIC INTERACTIF (VOCABULAIRE) -->
        <section class="bg-white p-6 md:p-8 rounded-3xl border border-slate-200 card-shadow space-y-6">
            <div class="flex items-center justify-between border-b border-slate-100 pb-4">
                <div class="flex items-center gap-3">
                    <span class="w-10 h-10 bg-emerald-100 text-emerald-800 rounded-xl flex items-center justify-center font-bold text-lg">0</span>
                    <div>
                        <span class="text-xs font-bold text-emerald-600 uppercase tracking-wider">Module 0 • Test de Positionnement</span>
                        <h3 class="text-xl font-bold font-heading text-slate-900">Vocabulaire du Triangle Rectangle</h3>
                    </div>
                </div>
                <span class="text-xs font-bold text-slate-400">Diagnostic 2 min</span>
            </div>

            <p class="text-xs text-slate-700 leading-relaxed">
                Avant de démarrer l'investigation, vérifiez que vous maîtrisez le nom des 3 côtés dans un triangle rectangle par rapport à l'angle considéré $\\alpha$ :
            </p>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
                <!-- Q1 -->
                <div class="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
                    <label class="font-bold text-slate-900 block">1. Le côté situé directement en face de l'angle droit :</label>
                    <select id="diag-q1" class="border border-slate-300 rounded-xl p-2.5 w-full font-bold bg-white text-slate-900">
                        <option value="">Sélectionnez...</option>
                        <option value="HYP">L'hypoténuse</option>
                        <option value="ADJ">Le côté adjacent</option>
                        <option value="OPP">Le côté opposé</option>
                    </select>
                </div>

                <!-- Q2 -->
                <div class="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
                    <label class="font-bold text-slate-900 block">2. Le côté situé en face de l'angle considéré $\\alpha$ :</label>
                    <select id="diag-q2" class="border border-slate-300 rounded-xl p-2.5 w-full font-bold bg-white text-slate-900">
                        <option value="">Sélectionnez...</option>
                        <option value="HYP">L'hypoténuse</option>
                        <option value="ADJ">Le côté adjacent</option>
                        <option value="OPP">Le côté opposé</option>
                    </select>
                </div>

                <!-- Q3 -->
                <div class="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
                    <label class="font-bold text-slate-900 block">3. Le côté qui touche l'angle $\\alpha$ (hors hypoténuse) :</label>
                    <select id="diag-q3" class="border border-slate-300 rounded-xl p-2.5 w-full font-bold bg-white text-slate-900">
                        <option value="">Sélectionnez...</option>
                        <option value="HYP">L'hypoténuse</option>
                        <option value="ADJ">Le côté adjacent</option>
                        <option value="OPP">Le côté opposé</option>
                    </select>
                </div>
            </div>

            <div class="flex items-center justify-between pt-2">
                <button onclick="checkDiag()" class="bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs px-6 py-3 rounded-xl shadow-md transition flex items-center gap-2">
                    <i class="fa-solid fa-circle-check"></i> Vérifier mes prérequis
                </button>
                <span id="diag-res" class="text-xs font-bold font-mono"></span>
            </div>
        </section>

        <!-- ACTIVITÉ 1 : LE SECRET DE L'ARBALÉTRIER -->
        <section class="bg-white p-6 md:p-8 rounded-3xl border border-slate-200 card-shadow space-y-6">
            <div class="flex items-center gap-3 border-b border-slate-100 pb-4">
                <span class="w-10 h-10 bg-emerald-100 text-emerald-800 rounded-xl flex items-center justify-center font-bold text-lg">1</span>
                <div>
                    <span class="text-xs font-bold text-emerald-600 uppercase tracking-wider">Activité 1 • Bâtiment & Charpente (Investigation)</span>
                    <h3 class="text-xl font-bold font-heading text-slate-900">Le Secret de l'Arbalétrier : Découverte du Sinus & Cosinus</h3>
                </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-slate-700 leading-relaxed items-center">
                <div class="md:col-span-2 space-y-4">
                    <p>Un apprenti charpentier prépare plusieurs fermes de toiture inclinées avec un même angle $\\alpha = 30^\\circ$. Il construit 3 triangles rectangles de tailles différentes :</p>
                    
                    <div class="overflow-x-auto">
                        <table class="w-full text-center border-collapse border border-slate-200 font-mono text-[11px]">
                            <thead>
                                <tr class="bg-slate-800 text-white">
                                    <th class="border p-2">Triangle</th>
                                    <th class="border p-2">Base $b$ (Adj)</th>
                                    <th class="border p-2">Hauteur $h$ (Opp)</th>
                                    <th class="border p-2">Arbalétrier $R$ (Hyp)</th>
                                    <th class="border p-2 text-yellow-400">Rapport $h / R$</th>
                                    <th class="border p-2 text-sky-400">Rapport $b / R$</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="border p-2 font-bold bg-slate-50">T1 (Petit)</td>
                                    <td class="border p-2">1,73 m</td>
                                    <td class="border p-2">1,00 m</td>
                                    <td class="border p-2 font-bold text-emerald-600">2,00 m</td>
                                    <td class="border p-2 font-bold text-yellow-600">1,00 / 2,00 = 0,50</td>
                                    <td class="border p-2 font-bold text-sky-600">1,73 / 2,00 = 0,866</td>
                                </tr>
                                <tr>
                                    <td class="border p-2 font-bold bg-slate-50">T2 (Moyen)</td>
                                    <td class="border p-2">3,46 m</td>
                                    <td class="border p-2">2,00 m</td>
                                    <td class="border p-2 font-bold text-emerald-600">4,00 m</td>
                                    <td class="border p-2 font-bold text-yellow-600">2,00 / 4,00 = 0,50</td>
                                    <td class="border p-2 font-bold text-sky-600">3,46 / 4,00 = 0,866</td>
                                </tr>
                                <tr>
                                    <td class="border p-2 font-bold bg-slate-50">T3 (Grand)</td>
                                    <td class="border p-2">5,196 m</td>
                                    <td class="border p-2">3,00 m</td>
                                    <td class="border p-2 font-bold text-emerald-600">6,00 m</td>
                                    <td class="border p-2 font-bold text-yellow-600">3,00 / 6,00 = 0,50</td>
                                    <td class="border p-2 font-bold text-sky-600">5,20 / 6,00 = 0,866</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="p-4 bg-emerald-50 border-l-4 border-emerald-500 rounded-r-2xl space-y-2 text-slate-800">
                        <h4 class="font-bold text-emerald-950 text-sm">Constat Scientifique Majeur :</h4>
                        <p>Quelle que soit la dimension de la charpente, tant que l'angle reste $\\alpha = 30^\\circ$ :</p>
                        <p>• Le rapport $\\frac{\\text{Opposé}}{\\text{Hypoténuse}}$ vaut toujours <strong>$0{,}50$</strong>. On l'appelle **Sinus($30^\circ$)**.</p>
                        <p>• Le rapport $\\frac{\\text{Adjacents}}{\\text{Hypoténuse}}$ vaut toujours <strong>$0{,}866$</strong>. On l'appelle **Cosinus($30^\circ$)**.</p>
                    </div>
                </div>

                <!-- FIGURE SVG CHARPENTE -->
                <div class="p-4 bg-slate-900 text-white rounded-2xl border border-slate-800 text-center">
                    <svg width="200" height="140" viewBox="0 0 200 140" class="mx-auto">
                        <polygon points="10,120 100,40 190,120" fill="none" stroke="#10b981" stroke-width="3"/>
                        <line x1="100" y1="40" x2="100" y2="120" stroke="#38bdf8" stroke-width="2" stroke-dasharray="3,3"/>
                        <path d="M 35 120 A 20 20 0 0 0 30 110" fill="none" stroke="#f59e0b" stroke-width="2"/>
                        <text x="40" y="115" font-size="10" font-weight="bold" fill="#f59e0b">30°</text>
                        <text x="105" y="75" font-size="11" font-weight="bold" fill="#38bdf8">h (Opp)</text>
                        <text x="40" y="70" font-size="11" font-weight="bold" fill="#10b981">R (Hyp)</text>
                    </svg>
                </div>
            </div>
        </section>

        <!-- ACTIVITÉ 2 : PENTE PMR ET TANGENTE -->
        <section class="bg-white p-6 md:p-8 rounded-3xl border border-slate-200 card-shadow space-y-6">
            <div class="flex items-center gap-3 border-b border-slate-100 pb-4">
                <span class="w-10 h-10 bg-sky-100 text-sky-800 rounded-xl flex items-center justify-center font-bold text-lg">2</span>
                <div>
                    <span class="text-xs font-bold text-sky-600 uppercase tracking-wider">Activité 2 • Accessibilité PMR (Expérimentation)</span>
                    <h3 class="text-xl font-bold font-heading text-slate-900">Franchir la Marche : Lien entre Pente % et Tangente</h3>
                </div>
            </div>

            <div class="space-y-4 text-xs text-slate-700 leading-relaxed">
                <p>Un technicien d'accessibilité étudie le lien entre la pente d'une rampe au sol et l'angle d'inclinaison $\\alpha$.</p>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                    <div class="p-5 bg-sky-50 border-l-4 border-sky-500 rounded-r-2xl space-y-3">
                        <h4 class="font-bold text-sky-950 text-sm">Définition de la Tangente (TOA) :</h4>
                        <p>La pente en $\%$ est définie par : $\\text{Pente }\\% = \\frac{\\text{Hauteur } h}{\\text{Longueur } d} \\times 100$.</p>
                        <p>Or, le rapport $\\frac{\\text{Hauteur (Opp)}}{\\text{Longueur (Adj)}}$ correspond exactement à la **Tangente** de l'angle :</p>
                        <p class="font-mono text-sky-900 font-bold">$$\\tan(\\alpha) = \\frac{h}{d} = \\frac{\\text{Pente }\\%}{100}$$</p>
                    </div>

                    <div class="p-5 bg-slate-900 text-white rounded-2xl border border-slate-800 space-y-3">
                        <h4 class="font-bold text-amber-400 text-sm">Exemple Pratique PMR :</h4>
                        <p>Si la norme exige une pente maximale de <strong>$5\\%$</strong> :</p>
                        <p class="font-mono text-slate-300">• $\\tan(\\alpha) = \\frac{5}{100} = 0{,}05$.</p>
                        <p class="font-mono text-slate-300">• L'angle maximum autorisé est : $\\alpha = \\arctan(0{,}05) \\approx \\mathbf{2{,}86^\circ}$.</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- ACTIVITÉ 3 : TOPOGRAPHIE & INCLINOMÈTRE -->
        <section class="bg-white p-6 md:p-8 rounded-3xl border border-slate-200 card-shadow space-y-6">
            <div class="flex items-center gap-3 border-b border-slate-100 pb-4">
                <span class="w-10 h-10 bg-purple-100 text-purple-800 rounded-xl flex items-center justify-center font-bold text-lg">3</span>
                <div>
                    <span class="text-xs font-bold text-purple-600 uppercase tracking-wider">Activité 3 • Topographie & Mesure Indirecte</span>
                    <h3 class="text-xl font-bold font-heading text-slate-900">Calculer la Hauteur d'un Bâtiment Sans Escalader !</h3>
                </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-slate-700 leading-relaxed items-center">
                <div class="md:col-span-2 space-y-3">
                    <p>Un géomètre veut mesurer la hauteur d'un château d'eau. Il se place à $D = 40\\text{ m}$ du pied et pointe le sommet avec un viseur à une hauteur d'œil $h_{\\text{œil}} = 1{,}70\\text{ m}$. L'angle mesuré est $\\alpha = 35^\\circ$.</p>
                    
                    <div class="p-4 bg-purple-50 border-l-4 border-purple-500 rounded-r-2xl space-y-2">
                        <h4 class="font-bold text-purple-950 text-sm">Méthode de Calcul en 2 Étapes :</h4>
                        <p>1. **Calcul de la hauteur haute $h_1$ :** $h_1 = D \\times \\tan(35^\\circ) = 40 \\times 0{,}7002 = \\mathbf{28{,}01\\text{ m}}$.</p>
                        <p>2. **Hauteur totale du bâtiment :** $H = h_1 + h_{\\text{œil}} = 28{,}01 + 1{,}70 = \\mathbf{29{,}71\\text{ m}}$.</p>
                    </div>
                </div>

                <div class="p-4 bg-slate-900 text-white rounded-2xl border border-slate-800 text-center">
                    <svg width="200" height="140" viewBox="0 0 200 140" class="mx-auto">
                        <line x1="10" y1="120" x2="190" y2="120" stroke="#64748b" stroke-width="2"/>
                        <rect x="150" y="20" width="35" height="100" fill="#64748b"/>
                        <line x1="30" y1="120" x2="30" y2="90" stroke="#10b981" stroke-width="3"/>
                        <line x1="30" y1="90" x2="150" y2="20" stroke="#f59e0b" stroke-width="2" stroke-dasharray="3,3"/>
                        <line x1="30" y1="90" x2="150" y2="90" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="2,2"/>
                        <text x="155" y="55" font-size="10" font-weight="bold" fill="#38bdf8">h1</text>
                    </svg>
                </div>
            </div>
        </section>

        <!-- MODULE 4 : TRANSITION VERS LE COURS -->
        <div class="bg-slate-900 text-white p-6 md:p-8 rounded-3xl shadow-xl border border-slate-800 space-y-4 text-center">
            <h3 class="text-2xl font-bold font-heading text-amber-400">Prêt pour le Cours !</h3>
            <p class="text-xs text-slate-300 max-w-xl mx-auto">
                Vous avez découvert le sens physique et géométrique du Sinus, Cosinus et Tangente. Vous pouvez maintenant consulter la fiche de cours pour retenir le mnémonique officiel <strong>SOH CAH TOA</strong> et les démarches de calculs.
            </p>
            <a href="cours.html" class="inline-flex items-center gap-2 bg-sky-500 hover:bg-sky-400 text-slate-950 font-extrabold text-xs px-6 py-3 rounded-xl shadow-md transition">
                <i class="fa-solid fa-book-open"></i> Accéder à la Fiche de Cours
            </a>
        </div>

    </main>

    <!-- JS POUR DIAGNOSTIC -->
    <script>
        function checkDiag() {
            const q1 = document.getElementById('diag-q1').value;
            const q2 = document.getElementById('diag-q2').value;
            const q3 = document.getElementById('diag-q3').value;
            const res = document.getElementById('diag-res');

            if (q1 === 'HYP' && q2 === 'OPP' && q3 === 'ADJ') {
                res.className = 'text-xs font-bold font-mono text-emerald-400';
                res.innerText = '✔ Parfait ! 3/3 prérequis validés. Vous pouvez démarrer les activités.';
            } else {
                res.className = 'text-xs font-bold font-mono text-rose-400';
                res.innerText = '✖ Erreur : 1) Hypoténuse (face angle droit), 2) Opposé (face angle α), 3) Adjacent (touche α).';
            }
        }
    </script>
</body>
</html>`;

fs.writeFileSync(path.join(targetDir, 'activites.html'), activitesHtml, 'utf-8');
console.log('Successfully updated activites.html with engaging guided discovery & interactive diagnostic!');
