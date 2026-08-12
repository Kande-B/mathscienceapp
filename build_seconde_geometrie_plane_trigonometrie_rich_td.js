const fs = require('fs');
const path = require('path');

const targetDir = path.join(__dirname, 'ressources', 'seconde', 'maths', 'geometrie-plane-trigonometrie');

// ---------------------------------------------------------------------
// RICH TD.HTML (10 EXERCISES WITH SVG VISUALIZATIONS & STEP-BY-STEP ACCORDIONS)
// ---------------------------------------------------------------------
const tdHtml = `<!DOCTYPE html>
<html lang="fr" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fiche de TD - Géométrie Plane & Trigonométrie (2nde Pro)</title>
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
            body { background-color: #ffffff !important; color: #000000 !important; padding-bottom: 0 !important; }
            main { max-width: 100% !important; margin: 0 !important; padding: 0 !important; }
            .print-card { border: 1px solid #cbd5e1 !important; box-shadow: none !important; break-inside: avoid; margin-bottom: 1.5rem !important; }
            .print-correction { display: block !important; border-top: 2px dashed #94a3b8 !important; background-color: #f8fafc !important; }
        }
    </style>
</head>
<body class="text-slate-800 bg-slate-50 min-h-screen pb-20">

    <!-- Header & Nav unifiée pour la Séquence 2nde Pro Maths -->
    <header class="bg-slate-900 text-white sticky top-0 z-50 border-b border-slate-800 shadow-md no-print">
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

        <!-- EN-TÊTE DE LA FICHE DE TD -->
        <div class="bg-white border border-slate-200 rounded-3xl p-6 md:p-8 shadow-sm border-l-8 border-l-indigo-600 print-card space-y-4">
            <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-4">
                <div>
                    <div class="flex items-center gap-2 text-xs font-extrabold uppercase text-indigo-600 tracking-wider">
                        <span>Fiche d'Entraînement A4 Imprimable Avec Figures Vectorielles</span> • <span>Bac Pro 2nde Pro</span>
                    </div>
                    <h2 class="text-3xl font-extrabold text-slate-900 font-heading mt-1">TD : 10 Exercices Illustrés de Géométrie & Trigonométrie</h2>
                    <p class="text-xs text-slate-500 mt-1">Situations professionnelles : Charpente, PMR, Sécurité BTP, Topographie, Usinage CNC, Solaire & Levage.</p>
                </div>
                <div class="flex items-center gap-2 no-print">
                    <button onclick="window.print()" class="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl font-bold text-xs flex items-center gap-2 border border-slate-200 transition-colors">
                        <i class="fa-solid fa-print"></i> Imprimer la fiche TD (PDF)
                    </button>
                    <button onclick="toggleAllCorrections()" class="px-4 py-2.5 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 rounded-xl font-bold text-xs flex items-center gap-2 border border-indigo-200 transition-colors">
                        <i class="fa-solid fa-eye"></i> <span id="toggle-all-text">Tout afficher / masquer les corrigés</span>
                    </button>
                </div>
            </div>

            <!-- GRILLE DES COMPÉTENCES RÉFÉRENTIEL -->
            <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2 text-[11px] font-bold">
                <div class="p-2 bg-slate-50 border border-slate-200 rounded-xl text-center"><span class="text-amber-600 block font-extrabold">C1 - S'approprier</span> Extraire & organiser</div>
                <div class="p-2 bg-slate-50 border border-slate-200 rounded-xl text-center"><span class="text-blue-600 block font-extrabold">C2 - Analyser</span> Schématiser & modéliser</div>
                <div class="p-2 bg-slate-50 border border-slate-200 rounded-xl text-center"><span class="text-purple-600 block font-extrabold">C3 - Réaliser</span> Calculs & trigo</div>
                <div class="p-2 bg-slate-50 border border-slate-200 rounded-xl text-center"><span class="text-emerald-600 block font-extrabold">C4 - Valider</span> Vérifier & comparer</div>
                <div class="p-2 bg-slate-50 border border-slate-200 rounded-xl text-center"><span class="text-rose-600 block font-extrabold">C5 - Communiquer</span> Rédiger & argumenter</div>
                <div class="p-2 bg-slate-50 border border-slate-200 rounded-xl text-center"><span class="text-cyan-600 block font-extrabold">Auto - Rituels</span> SOH CAH TOA</div>
            </div>
        </div>

        <!-- EXERCICE 1 -->
        <div class="bg-white rounded-3xl border border-slate-200 p-6 md:p-8 card-shadow print-card space-y-4">
            <div class="flex items-center justify-between border-b border-slate-100 pb-3">
                <h3 class="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span class="w-8 h-8 bg-indigo-100 text-indigo-800 rounded-xl flex items-center justify-center font-bold text-xs">Ex 1</span>
                    Rampe de Chargement d'un Camion (Sinus)
                </h3>
                <span class="bg-emerald-100 text-emerald-800 text-xs font-extrabold px-3 py-1 rounded-full">Réaliser (C3)</span>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                <div class="md:col-span-2 text-xs text-slate-700 space-y-3 leading-relaxed">
                    <p>Un camion de livraison possède une rampe arrière inclinée d'un angle $\\alpha = 25^\\circ$ par rapport au sol. La longueur de la rampe aluminium est $L = 3{,}50\\text{ m}$ (hypoténuse).</p>
                    <p class="font-bold text-slate-900">1. Calculer la hauteur $h$ du plateau de chargement au centimètre près.<br>2. Écrire la formule trigonométrique utilisée (SOH).</p>
                </div>
                <!-- FIGURE SVG EXERCICE 1 -->
                <div class="p-3 bg-slate-50 border border-slate-200 rounded-2xl text-center overflow-x-auto">
                    <svg width="220" height="130" viewBox="0 0 220 130" class="mx-auto">
                        <!-- Sol -->
                        <line x1="10" y1="110" x2="210" y2="110" stroke="#64748b" stroke-width="2" stroke-dasharray="4,4"/>
                        <!-- Camion -->
                        <rect x="150" y="40" width="55" height="70" fill="#94a3b8" rx="4"/>
                        <!-- Rampe -->
                        <line x1="30" y1="110" x2="150" y2="50" stroke="#0284c7" stroke-width="4"/>
                        <!-- Hauteur h -->
                        <line x1="150" y1="110" x2="150" y2="50" stroke="#ef4444" stroke-width="2" stroke-dasharray="2,2"/>
                        <!-- Angle -->
                        <path d="M 50 110 A 20 20 0 0 0 45 102" fill="none" stroke="#f59e0b" stroke-width="2"/>
                        <text x="55" y="104" font-size="11" font-weight="bold" fill="#f59e0b">25°</text>
                        <!-- Étiquettes -->
                        <text x="80" y="70" font-size="11" font-weight="bold" fill="#0284c7">L = 3,50 m</text>
                        <text x="160" y="85" font-size="11" font-weight="bold" fill="#ef4444">h = ?</text>
                        <!-- Rectangle angle droit -->
                        <rect x="140" y="100" width="10" height="10" fill="none" stroke="#64748b" stroke-width="1"/>
                    </svg>
                </div>
            </div>

            <details class="bg-slate-50 border border-slate-200 rounded-2xl p-4 text-xs print-correction">
                <summary class="font-bold text-slate-900 cursor-pointer hover:text-indigo-600 transition flex items-center gap-2">
                    <i class="fa-solid fa-circle-check text-emerald-500"></i> Voir la démonstration détaillée de l'Exercice 1
                </summary>
                <div class="mt-3 pt-3 border-t border-slate-200 space-y-1 font-mono text-slate-700">
                    <p>• <strong>Formule du Sinus (SOH) :</strong> $\\sin(\\alpha) = \\frac{\\text{Côté Opposé}}{\\text{Hypoténuse}} = \\frac{h}{L}$.</p>
                    <p>• <strong>Application numérique :</strong> $\\sin(25^\\circ) = \\frac{h}{3{,}50} \\implies h = 3{,}50 \\times \\sin(25^\\circ)$.</p>
                    <p>• <strong>Calcul calculatrice (DEG) :</strong> $h = 3{,}50 \\times 0{,}4226 \\approx \\mathbf{1{,}48\\text{ m}}$ (soit $148\\text{ cm}$).</p>
                </div>
            </details>
        </div>

        <!-- EXERCICE 2 -->
        <div class="bg-white rounded-3xl border border-slate-200 p-6 md:p-8 card-shadow print-card space-y-4">
            <div class="flex items-center justify-between border-b border-slate-100 pb-3">
                <h3 class="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span class="w-8 h-8 bg-indigo-100 text-indigo-800 rounded-xl flex items-center justify-center font-bold text-xs">Ex 2</span>
                    Calcul de Rampant & Surface de Tuiles (Cosinus)
                </h3>
                <span class="bg-blue-100 text-blue-800 text-xs font-extrabold px-3 py-1 rounded-full">Modéliser (C2)</span>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                <div class="md:col-span-2 text-xs text-slate-700 space-y-3 leading-relaxed">
                    <p>Une ferme de charpente symétrique comporte deux pans inclinés à $\\alpha = 32^\\circ$. La largeur au sol du bâtiment est $B = 10{,}00\\text{ m}$, soit une demi-largeur $b = 5{,}00\\text{ m}$ (côté adjacents).</p>
                    <p class="font-bold text-slate-900">1. Calculer la longueur exacte de l'arbalétrier $R$ (hypoténuse).<br>2. Le bâtiment mesure $12{,}00\\text{ m}$ de long. Calculer la surface totale de toiture des 2 pans.</p>
                </div>
                <!-- FIGURE SVG EXERCICE 2 -->
                <div class="p-3 bg-slate-50 border border-slate-200 rounded-2xl text-center overflow-x-auto">
                    <svg width="220" height="130" viewBox="0 0 220 130" class="mx-auto">
                        <!-- Triangle ferme -->
                        <polygon points="20,110 110,30 200,110" fill="none" stroke="#0284c7" stroke-width="3"/>
                        <line x1="110" y1="30" x2="110" y2="110" stroke="#94a3b8" stroke-width="2" stroke-dasharray="3,3"/>
                        <!-- Côté b -->
                        <line x1="20" y1="110" x2="110" y2="110" stroke="#10b981" stroke-width="3"/>
                        <!-- Angle -->
                        <path d="M 40 110 A 20 20 0 0 0 35 100" fill="none" stroke="#f59e0b" stroke-width="2"/>
                        <text x="45" y="105" font-size="10" font-weight="bold" fill="#f59e0b">32°</text>
                        <!-- Étiquettes -->
                        <text x="50" y="65" font-size="11" font-weight="bold" fill="#0284c7">R = ?</text>
                        <text x="50" y="125" font-size="11" font-weight="bold" fill="#10b981">b = 5,00 m</text>
                    </svg>
                </div>
            </div>

            <details class="bg-slate-50 border border-slate-200 rounded-2xl p-4 text-xs print-correction">
                <summary class="font-bold text-slate-900 cursor-pointer hover:text-indigo-600 transition flex items-center gap-2">
                    <i class="fa-solid fa-circle-check text-emerald-500"></i> Voir la démonstration détaillée de l'Exercice 2
                </summary>
                <div class="mt-3 pt-3 border-t border-slate-200 space-y-1 font-mono text-slate-700">
                    <p>1. <strong>Formule du Cosinus (CAH) :</strong> $\\cos(32^\\circ) = \\frac{b}{R} \\implies R = \\frac{5{,}00}{\\cos(32^\\circ)} = \\frac{5{,}00}{0{,}8480} = \\mathbf{5{,}90\\text{ m}}$.</p>
                    <p>2. <strong>Surface de 1 pan :</strong> $S_1 = 5{,}90 \\times 12{,}00 = 70{,}80\\text{ m}^2$.</p>
                    <p>3. <strong>Surface totale (2 pans) :</strong> $S_{\\text{tot}} = 2 \\times 70{,}80 = \\mathbf{141{,}60\\text{ m}^2}$.</p>
                </div>
            </details>
        </div>

        <!-- EXERCICE 3 -->
        <div class="bg-white rounded-3xl border border-slate-200 p-6 md:p-8 card-shadow print-card space-y-4">
            <div class="flex items-center justify-between border-b border-slate-100 pb-3">
                <h3 class="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span class="w-8 h-8 bg-indigo-100 text-indigo-800 rounded-xl flex items-center justify-center font-bold text-xs">Ex 3</span>
                    Pente & Angle d'une Rampe PMR (Tangente)
                </h3>
                <span class="bg-amber-100 text-amber-800 text-xs font-extrabold px-3 py-1 rounded-full">S'approprier (C1)</span>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                <div class="md:col-span-2 text-xs text-slate-700 space-y-3 leading-relaxed">
                    <p>Une rampe d'accès handicapé franchit une hauteur $h = 0{,}48\\text{ m}$ sur une longueur horizontale $d = 8{,}00\\text{ m}$.</p>
                    <p class="font-bold text-slate-900">1. Calculer la pente en percentage ($\\text{Pente} = \\frac{h}{d} \\times 100$).<br>2. Calculer l'angle d'inclinaison $\\alpha$ au dixième de degré près.<br>3. La norme exige $\\text{Pente} \\le 5\\%$. La rampe est-elle conforme ?</p>
                </div>
                <!-- FIGURE SVG EXERCICE 3 -->
                <div class="p-3 bg-slate-50 border border-slate-200 rounded-2xl text-center overflow-x-auto">
                    <svg width="220" height="130" viewBox="0 0 220 130" class="mx-auto">
                        <!-- Sol -->
                        <line x1="20" y1="100" x2="200" y2="100" stroke="#64748b" stroke-width="2"/>
                        <!-- Rampe -->
                        <line x1="20" y1="100" x2="200" y2="60" stroke="#8b5cf6" stroke-width="4"/>
                        <line x1="200" y1="100" x2="200" y2="60" stroke="#ef4444" stroke-width="2"/>
                        <!-- Angle -->
                        <path d="M 40 100 A 20 20 0 0 0 38 95" fill="none" stroke="#f59e0b" stroke-width="2"/>
                        <text x="45" y="94" font-size="10" font-weight="bold" fill="#f59e0b">α = ?</text>
                        <!-- Étiquettes -->
                        <text x="90" y="118" font-size="11" font-weight="bold" fill="#64748b">d = 8,00 m</text>
                        <text x="145" y="50" font-size="11" font-weight="bold" fill="#ef4444">h = 0,48 m</text>
                    </svg>
                </div>
            </div>

            <details class="bg-slate-50 border border-slate-200 rounded-2xl p-4 text-xs print-correction">
                <summary class="font-bold text-slate-900 cursor-pointer hover:text-indigo-600 transition flex items-center gap-2">
                    <i class="fa-solid fa-circle-check text-emerald-500"></i> Voir la démonstration détaillée de l'Exercice 3
                </summary>
                <div class="mt-3 pt-3 border-t border-slate-200 space-y-1 font-mono text-slate-700">
                    <p>1. <strong>Pente en % :</strong> $\\text{Pente} = \\frac{0{,}48}{8{,}00} \\times 100 = \\mathbf{6{,}0\\%}$.</p>
                    <p>2. <strong>Calcul de l'angle (TOA) :</strong> $\\tan(\\alpha) = \\frac{0{,}48}{8{,}00} = 0{,}06 \\implies \\alpha = \\arctan(0{,}06) \\approx \\mathbf{3{,}4^\\circ}$.</p>
                    <p>3. <strong>Conformité :</strong> Comme $6{,}0\\% > 5\\%$, la rampe est **non conforme** sans palier intermédiaire.</p>
                </div>
            </details>
        </div>

        <!-- EXERCICE 4 -->
        <div class="bg-white rounded-3xl border border-slate-200 p-6 md:p-8 card-shadow print-card space-y-4">
            <div class="flex items-center justify-between border-b border-slate-100 pb-3">
                <h3 class="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span class="w-8 h-8 bg-indigo-100 text-indigo-800 rounded-xl flex items-center justify-center font-bold text-xs">Ex 4</span>
                    Mesure de Hauteur au Théodolite (Topographie)
                </h3>
                <span class="bg-purple-100 text-purple-800 text-xs font-extrabold px-3 py-1 rounded-full">Analyser (C2)</span>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                <div class="md:col-span-2 text-xs text-slate-700 space-y-3 leading-relaxed">
                    <p>Un technicien s'éloigne de $D = 45{,}00\\text{ m}$ du pied d'un pylône télécom. À l'aide d'un viseur laser placé à une hauteur d'œil $h_{\\text{œil}} = 1{,}75\\text{ m}$, il mesure un angle d'élévation $\\alpha = 38^\\circ$.</p>
                    <p class="font-bold text-slate-900">Calculer la hauteur totale $H = h_1 + h_{\\text{œil}}$ du pylône.</p>
                </div>
                <!-- FIGURE SVG EXERCICE 4 -->
                <div class="p-3 bg-slate-50 border border-slate-200 rounded-2xl text-center overflow-x-auto">
                    <svg width="220" height="130" viewBox="0 0 220 130" class="mx-auto">
                        <!-- Sol -->
                        <line x1="10" y1="110" x2="210" y2="110" stroke="#64748b" stroke-width="2"/>
                        <!-- Pylône -->
                        <line x1="180" y1="110" x2="180" y2="10" stroke="#0284c7" stroke-width="3"/>
                        <!-- Technicien -->
                        <line x1="30" y1="110" x2="30" y2="80" stroke="#475569" stroke-width="3"/>
                        <!-- Visee -->
                        <line x1="30" y1="80" x2="180" y2="10" stroke="#f59e0b" stroke-width="2" stroke-dasharray="3,3"/>
                        <line x1="30" y1="80" x2="180" y2="80" stroke="#64748b" stroke-width="1.5" stroke-dasharray="2,2"/>
                        <!-- Angle -->
                        <path d="M 50 80 A 20 20 0 0 0 45 74" fill="none" stroke="#f59e0b" stroke-width="2"/>
                        <text x="52" y="76" font-size="10" font-weight="bold" fill="#f59e0b">38°</text>
                        <text x="185" y="50" font-size="11" font-weight="bold" fill="#0284c7">h1</text>
                    </svg>
                </div>
            </div>

            <details class="bg-slate-50 border border-slate-200 rounded-2xl p-4 text-xs print-correction">
                <summary class="font-bold text-slate-900 cursor-pointer hover:text-indigo-600 transition flex items-center gap-2">
                    <i class="fa-solid fa-circle-check text-emerald-500"></i> Voir la démonstration détaillée de l'Exercice 4
                </summary>
                <div class="mt-3 pt-3 border-t border-slate-200 space-y-1 font-mono text-slate-700">
                    <p>• <strong>Hauteur supérieure $h_1$ (TOA) :</strong> $\\tan(38^\\circ) = \\frac{h_1}{45} \\implies h_1 = 45 \\times \\tan(38^\\circ) = 45 \\times 0{,}7813 = \\mathbf{35{,}16\\text{ m}}$.</p>
                    <p>• <strong>Hauteur totale $H$ :</strong> $H = 35{,}16 + 1{,}75 = \\mathbf{36{,}91\\text{ m}}$.</p>
                </div>
            </details>
        </div>

        <!-- EXERCICE 5 -->
        <div class="bg-white rounded-3xl border border-slate-200 p-6 md:p-8 card-shadow print-card space-y-4">
            <div class="flex items-center justify-between border-b border-slate-100 pb-3">
                <h3 class="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span class="w-8 h-8 bg-indigo-100 text-indigo-800 rounded-xl flex items-center justify-center font-bold text-xs">Ex 5</span>
                    Contrôle d'Équerrage par la Règle 3-4-5 (Pythagore)
                </h3>
                <span class="bg-rose-100 text-rose-800 text-xs font-extrabold px-3 py-1 rounded-full">Valider (C4)</span>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                <div class="md:col-span-2 text-xs text-slate-700 space-y-3 leading-relaxed">
                    <p>Un maçon vérifie l'angle droit d'une dalle de terrasse $ABC$. Il mesure $AB = 3{,}60\\text{ m}$, $BC = 4{,}80\\text{ m}$ et la diagonale $AC = 6{,}00\\text{ m}$.</p>
                    <p class="font-bold text-slate-900">Utiliser la réciproque du théorème de Pythagore pour démontrer si le coin $B$ est parfaitement d'équerre.</p>
                </div>
                <!-- FIGURE SVG EXERCICE 5 -->
                <div class="p-3 bg-slate-50 border border-slate-200 rounded-2xl text-center overflow-x-auto">
                    <svg width="220" height="130" viewBox="0 0 220 130" class="mx-auto">
                        <polygon points="30,100 180,100 30,20" fill="none" stroke="#10b981" stroke-width="3"/>
                        <rect x="30" y="90" width="10" height="10" fill="none" stroke="#ef4444" stroke-width="1.5"/>
                        <text x="15" y="105" font-size="11" font-weight="bold" fill="#1e293b">B</text>
                        <text x="15" y="20" font-size="11" font-weight="bold" fill="#1e293b">A</text>
                        <text x="185" y="105" font-size="11" font-weight="bold" fill="#1e293b">C</text>
                        <text x="90" y="115" font-size="10" font-weight="bold" fill="#10b981">4,80 m</text>
                        <text x="100" y="55" font-size="10" font-weight="bold" fill="#0284c7">6,00 m</text>
                    </svg>
                </div>
            </div>

            <details class="bg-slate-50 border border-slate-200 rounded-2xl p-4 text-xs print-correction">
                <summary class="font-bold text-slate-900 cursor-pointer hover:text-indigo-600 transition flex items-center gap-2">
                    <i class="fa-solid fa-circle-check text-emerald-500"></i> Voir la démonstration détaillée de l'Exercice 5
                </summary>
                <div class="mt-3 pt-3 border-t border-slate-200 space-y-1 font-mono text-slate-700">
                    <p>• <strong>Calcul de $AC^2$ :</strong> $6{,}00^2 = \\mathbf{36{,}00}$.</p>
                    <p>• <strong>Calcul de $AB^2 + BC^2$ :</strong> $3{,}60^2 + 4{,}80^2 = 12{,}96 + 23{,}04 = \\mathbf{36{,}00}$.</p>
                    <p>• <strong>Conclusion :</strong> Comme $AC^2 = AB^2 + BC^2$, d'après la réciproque de Pythagore, l'angle $\\hat{B}$ est **parfaitement droit ($90^\\circ$)**.</p>
                </div>
            </details>
        </div>

        <!-- EXERCICE 6 -->
        <div class="bg-white rounded-3xl border border-slate-200 p-6 md:p-8 card-shadow print-card space-y-4">
            <div class="flex items-center justify-between border-b border-slate-100 pb-3">
                <h3 class="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span class="w-8 h-8 bg-indigo-100 text-indigo-800 rounded-xl flex items-center justify-center font-bold text-xs">Ex 6</span>
                    Inclinaison de Sécurité d'une Échelle (Réglementation BTP)
                </h3>
                <span class="bg-emerald-100 text-emerald-800 text-xs font-extrabold px-3 py-1 rounded-full">Réaliser (C3)</span>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                <div class="md:col-span-2 text-xs text-slate-700 space-y-3 leading-relaxed">
                    <p>Une échelle de chantier de $L = 5{,}20\\text{ m}$ est posée contre un mur avec l'angle de sécurité réglementaire $\\alpha = 75^\\circ$ par rapport au sol.</p>
                    <p class="font-bold text-slate-900">1. Calculer la hauteur $H$ atteinte sur le mur.<br>2. Calculer la distance d'écartement au sol $d$.</p>
                </div>
                <!-- FIGURE SVG EXERCICE 6 -->
                <div class="p-3 bg-slate-50 border border-slate-200 rounded-2xl text-center overflow-x-auto">
                    <svg width="220" height="130" viewBox="0 0 220 130" class="mx-auto">
                        <!-- Mur -->
                        <line x1="160" y1="10" x2="160" y2="110" stroke="#475569" stroke-width="4"/>
                        <!-- Sol -->
                        <line x1="20" y1="110" x2="200" y2="110" stroke="#64748b" stroke-width="2"/>
                        <!-- Echelle -->
                        <line x1="60" y1="110" x2="160" y2="20" stroke="#0284c7" stroke-width="3"/>
                        <!-- Barreaux -->
                        <line x1="80" y1="92" x2="88" y2="98" stroke="#0284c7" stroke-width="2"/>
                        <line x1="100" y1="74" x2="108" y2="80" stroke="#0284c7" stroke-width="2"/>
                        <line x1="120" y1="56" x2="128" y2="62" stroke="#0284c7" stroke-width="2"/>
                        <!-- Angle -->
                        <path d="M 80 110 A 20 20 0 0 0 74 100" fill="none" stroke="#f59e0b" stroke-width="2"/>
                        <text x="85" y="105" font-size="10" font-weight="bold" fill="#f59e0b">75°</text>
                    </svg>
                </div>
            </div>

            <details class="bg-slate-50 border border-slate-200 rounded-2xl p-4 text-xs print-correction">
                <summary class="font-bold text-slate-900 cursor-pointer hover:text-indigo-600 transition flex items-center gap-2">
                    <i class="fa-solid fa-circle-check text-emerald-500"></i> Voir la démonstration détaillée de l'Exercice 6
                </summary>
                <div class="mt-3 pt-3 border-t border-slate-200 space-y-1 font-mono text-slate-700">
                    <p>1. <strong>Hauteur $H$ (Sinus) :</strong> $H = 5{,}20 \\times \\sin(75^\\circ) = 5{,}20 \\times 0{,}9659 = \\mathbf{5{,}02\\text{ m}}$.</p>
                    <p>2. <strong>Distance $d$ (Cosinus) :</strong> $d = 5{,}20 \\times \\cos(75^\\circ) = 5{,}20 \\times 0{,}2588 = \\mathbf{1{,}35\\text{ m}}$.</p>
                </div>
            </details>
        </div>

        <!-- EXERCICE 7 -->
        <div class="bg-white rounded-3xl border border-slate-200 p-6 md:p-8 card-shadow print-card space-y-4">
            <div class="flex items-center justify-between border-b border-slate-100 pb-3">
                <h3 class="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span class="w-8 h-8 bg-indigo-100 text-indigo-800 rounded-xl flex items-center justify-center font-bold text-xs">Ex 7</span>
                    Usinage Conique sur Tour Numérique (Mécanique)
                </h3>
                <span class="bg-cyan-100 text-cyan-800 text-xs font-extrabold px-3 py-1 rounded-full">Analyser (C2)</span>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                <div class="md:col-span-2 text-xs text-slate-700 space-y-3 leading-relaxed">
                    <p>Un régleur réalise une portée tronconique sur un arbre de transmission. Le grand diamètre est $D = 40\\text{ mm}$, le petit diamètre $d = 28\\text{ mm}$ et la longueur usinée $L = 12\\text{ mm}$.</p>
                    <p class="font-bold text-slate-900">Calculer le demi-angle de cône $\\alpha = \\arctan\\left(\\frac{D-d}{2L}\\right)$ en degrés.</p>
                </div>
                <!-- FIGURE SVG EXERCICE 7 -->
                <div class="p-3 bg-slate-50 border border-slate-200 rounded-2xl text-center overflow-x-auto">
                    <svg width="220" height="130" viewBox="0 0 220 130" class="mx-auto">
                        <!-- Axe symetrie -->
                        <line x1="10" y1="65" x2="210" y2="65" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4,4"/>
                        <!-- Piece tronconique -->
                        <polygon points="30,20 150,40 150,90 30,110" fill="none" stroke="#0284c7" stroke-width="3"/>
                        <!-- Diametres -->
                        <line x1="30" y1="20" x2="30" y2="110" stroke="#ef4444" stroke-width="1.5"/>
                        <line x1="150" y1="40" x2="150" y2="90" stroke="#ef4444" stroke-width="1.5"/>
                        <text x="35" y="35" font-size="10" font-weight="bold" fill="#ef4444">D=40</text>
                        <text x="155" y="55" font-size="10" font-weight="bold" fill="#ef4444">d=28</text>
                    </svg>
                </div>
            </div>

            <details class="bg-slate-50 border border-slate-200 rounded-2xl p-4 text-xs print-correction">
                <summary class="font-bold text-slate-900 cursor-pointer hover:text-indigo-600 transition flex items-center gap-2">
                    <i class="fa-solid fa-circle-check text-emerald-500"></i> Voir la démonstration détaillée de l'Exercice 7
                </summary>
                <div class="mt-3 pt-3 border-t border-slate-200 space-y-1 font-mono text-slate-700">
                    <p>• <strong>Demi-différence des diamètres :</strong> $\\Delta r = \\frac{40 - 28}{2} = \\frac{12}{2} = 6\\text{ mm}$.</p>
                    <p>• <strong>Calcul de $\\tan(\\alpha)$ :</strong> $\\tan(\\alpha) = \\frac{6}{12} = 0{,}5000$.</p>
                    <p>• <strong>Demi-angle $\\alpha$ :</strong> $\\alpha = \\arctan(0{,}5000) = \\mathbf{26{,}57^\\circ}$ (soit $26^\\circ 34'$).</p>
                </div>
            </details>
        </div>

        <!-- EXERCICE 8 -->
        <div class="bg-white rounded-3xl border border-slate-200 p-6 md:p-8 card-shadow print-card space-y-4">
            <div class="flex items-center justify-between border-b border-slate-100 pb-3">
                <h3 class="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span class="w-8 h-8 bg-indigo-100 text-indigo-800 rounded-xl flex items-center justify-center font-bold text-xs">Ex 8</span>
                    Emprise au Sol de Panneaux Solaires (Énergie Solaire)
                </h3>
                <span class="bg-emerald-100 text-emerald-800 text-xs font-extrabold px-3 py-1 rounded-full">Réaliser (C3)</span>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                <div class="md:col-span-2 text-xs text-slate-700 space-y-3 leading-relaxed">
                    <p>Un installateur photovoltaïque pose des panneaux de longueur $P = 1{,}80\\text{ m}$ inclinés à $\\alpha = 35^\\circ$ sur un toit terrasse.</p>
                    <p class="font-bold text-slate-900">1. Calculer la surélévation verticale $h = P \\cdot \\sin(35^\\circ)$.<br>2. Calculer l'emprise horizontale au sol $e = P \\cdot \\cos(35^\\circ)$.</p>
                </div>
                <!-- FIGURE SVG EXERCICE 8 -->
                <div class="p-3 bg-slate-50 border border-slate-200 rounded-2xl text-center overflow-x-auto">
                    <svg width="220" height="130" viewBox="0 0 220 130" class="mx-auto">
                        <!-- Support -->
                        <line x1="20" y1="100" x2="180" y2="100" stroke="#64748b" stroke-width="2"/>
                        <!-- Panneau solaire -->
                        <line x1="20" y1="100" x2="160" y2="30" stroke="#0284c7" stroke-width="5"/>
                        <line x1="160" y1="100" x2="160" y2="30" stroke="#ef4444" stroke-width="2" stroke-dasharray="2,2"/>
                        <!-- Angle -->
                        <path d="M 40 100 A 20 20 0 0 0 36 90" fill="none" stroke="#f59e0b" stroke-width="2"/>
                        <text x="42" y="95" font-size="10" font-weight="bold" fill="#f59e0b">35°</text>
                        <text x="70" y="55" font-size="11" font-weight="bold" fill="#0284c7">P = 1,80 m</text>
                    </svg>
                </div>
            </div>

            <details class="bg-slate-50 border border-slate-200 rounded-2xl p-4 text-xs print-correction">
                <summary class="font-bold text-slate-900 cursor-pointer hover:text-indigo-600 transition flex items-center gap-2">
                    <i class="fa-solid fa-circle-check text-emerald-500"></i> Voir la démonstration détaillée de l'Exercice 8
                </summary>
                <div class="mt-3 pt-3 border-t border-slate-200 space-y-1 font-mono text-slate-700">
                    <p>1. <strong>Hauteur $h$ :</strong> $h = 1{,}80 \\times \\sin(35^\\circ) = 1{,}80 \\times 0{,}5736 = \\mathbf{1{,}03\\text{ m}}$.</p>
                    <p>2. <strong>Emprise au sol $e$ :</strong> $e = 1{,}80 \\times \\cos(35^\\circ) = 1{,}80 \\times 0{,}8192 = \\mathbf{1{,}47\\text{ m}}$.</p>
                </div>
            </details>
        </div>

        <!-- EXERCICE 9 -->
        <div class="bg-white rounded-3xl border border-slate-200 p-6 md:p-8 card-shadow print-card space-y-4">
            <div class="flex items-center justify-between border-b border-slate-100 pb-3">
                <h3 class="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span class="w-8 h-8 bg-indigo-100 text-indigo-800 rounded-xl flex items-center justify-center font-bold text-xs">Ex 9</span>
                    Hauteur d'Immeuble par les Ombres (Théorème de Thalès)
                </h3>
                <span class="bg-indigo-100 text-indigo-800 text-xs font-extrabold px-3 py-1 rounded-full">Réaliser (C3)</span>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                <div class="md:col-span-2 text-xs text-slate-700 space-y-3 leading-relaxed">
                    <p>Un piquet vertical de $h = 2{,}00\\text{ m}$ projette une ombre au sol de $s = 1{,}50\\text{ m}$. Au même instant, les rayons du soleil étant parallèles, un immeuble projette une ombre de $S = 18{,}00\\text{ m}$.</p>
                    <p class="font-bold text-slate-900">Appliquer l'égalité de Thalès $\\frac{H}{h} = \\frac{S}{s}$ pour calculer la hauteur $H$ de l'immeuble.</p>
                </div>
                <!-- FIGURE SVG EXERCICE 9 -->
                <div class="p-3 bg-slate-50 border border-slate-200 rounded-2xl text-center overflow-x-auto">
                    <svg width="220" height="130" viewBox="0 0 220 130" class="mx-auto">
                        <!-- Sol -->
                        <line x1="10" y1="110" x2="210" y2="110" stroke="#64748b" stroke-width="2"/>
                        <!-- Immeuble -->
                        <rect x="150" y="20" width="35" height="90" fill="#94a3b8"/>
                        <!-- Piquet -->
                        <line x1="40" y1="110" x2="40" y2="90" stroke="#10b981" stroke-width="3"/>
                        <!-- Rayons soleil -->
                        <line x1="10" y1="70" x2="70" y2="110" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="2,2"/>
                        <line x1="120" y1="0" x2="200" y2="110" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="2,2"/>
                    </svg>
                </div>
            </div>

            <details class="bg-slate-50 border border-slate-200 rounded-2xl p-4 text-xs print-correction">
                <summary class="font-bold text-slate-900 cursor-pointer hover:text-indigo-600 transition flex items-center gap-2">
                    <i class="fa-solid fa-circle-check text-emerald-500"></i> Voir la démonstration détaillée de l'Exercice 9
                </summary>
                <div class="mt-3 pt-3 border-t border-slate-200 space-y-1 font-mono text-slate-700">
                    <p>• <strong>Égalité de Thalès :</strong> $\\frac{H}{2{,}00} = \\frac{18{,}00}{1{,}50}$.</p>
                    <p>• <strong>Produit en croix :</strong> $H = \\frac{2{,}00 \\times 18{,}00}{1{,}50} = \\frac{36{,}00}{1{,}50} = \\mathbf{24{,}00\\text{ m}}$.</p>
                </div>
            </details>
        </div>

        <!-- EXERCICE 10 -->
        <div class="bg-white rounded-3xl border border-slate-200 p-6 md:p-8 card-shadow print-card space-y-4">
            <div class="flex items-center justify-between border-b border-slate-100 pb-3">
                <h3 class="font-bold text-slate-900 text-base flex items-center gap-2">
                    <span class="w-8 h-8 bg-indigo-100 text-indigo-800 rounded-xl flex items-center justify-center font-bold text-xs">Ex 10</span>
                    Portée & Hauteur d'une Grue Mobile (Levage)
                </h3>
                <span class="bg-rose-100 text-rose-800 text-xs font-extrabold px-3 py-1 rounded-full">Communiquer (C5)</span>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                <div class="md:col-span-2 text-xs text-slate-700 space-y-3 leading-relaxed">
                    <p>Une grue mobile possède une flèche de télescopique $F = 24{,}00\\text{ m}$ dressée à $\\alpha = 55^\\circ$ par rapport au sol.</p>
                    <p class="font-bold text-slate-900">1. Calculer la hauteur sous crochet $H = F \\cdot \\sin(55^\\circ)$.<br>2. Calculer la portée horizontale $P = F \\cdot \\cos(55^\\circ)$.</p>
                </div>
                <!-- FIGURE SVG EXERCICE 10 -->
                <div class="p-3 bg-slate-50 border border-slate-200 rounded-2xl text-center overflow-x-auto">
                    <svg width="220" height="130" viewBox="0 0 220 130" class="mx-auto">
                        <!-- Camion grue -->
                        <rect x="20" y="90" width="40" height="20" fill="#64748b"/>
                        <!-- Fleche -->
                        <line x1="40" y1="90" x2="180" y2="20" stroke="#eab308" stroke-width="5"/>
                        <!-- Cable crochet -->
                        <line x1="180" y1="20" x2="180" y2="60" stroke="#1e293b" stroke-width="2"/>
                        <!-- Angle -->
                        <path d="M 60 90 A 20 20 0 0 0 54 80" fill="none" stroke="#f59e0b" stroke-width="2"/>
                        <text x="65" y="85" font-size="10" font-weight="bold" fill="#f59e0b">55°</text>
                    </svg>
                </div>
            </div>

            <details class="bg-slate-50 border border-slate-200 rounded-2xl p-4 text-xs print-correction">
                <summary class="font-bold text-slate-900 cursor-pointer hover:text-indigo-600 transition flex items-center gap-2">
                    <i class="fa-solid fa-circle-check text-emerald-500"></i> Voir la démonstration détaillée de l'Exercice 10
                </summary>
                <div class="mt-3 pt-3 border-t border-slate-200 space-y-1 font-mono text-slate-700">
                    <p>1. <strong>Hauteur sous crochet $H$ :</strong> $H = 24{,}00 \\times \\sin(55^\\circ) = 24{,}00 \\times 0{,}8192 = \\mathbf{19{,}66\\text{ m}}$.</p>
                    <p>2. <strong>Portée horizontale $P$ :</strong> $P = 24{,}00 \\times \\cos(55^\\circ) = 24{,}00 \\times 0{,}5736 = \\mathbf{13{,}77\\text{ m}}$.</p>
                </div>
            </details>
        </div>

    </main>

    <script>
        function toggleAllCorrections() {
            const list = document.querySelectorAll('.print-correction');
            const btnText = document.getElementById('toggle-all-text');
            let isHidden = list[0].hasAttribute('open');

            list.forEach(el => {
                if (isHidden) el.removeAttribute('open');
                else el.setAttribute('open', 'true');
            });

            if (isHidden) {
                btnText.innerText = "Tout afficher / masquer les corrigés";
            } else {
                btnText.innerText = "Masquer tous les corrigés";
            }
        }
    </script>
</body>
</html>`;

fs.writeFileSync(path.join(targetDir, 'td.html'), tdHtml, 'utf-8');
console.log('Successfully updated td.html with 10 rich exercises & SVG visualizations!');
