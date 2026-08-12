const fs = require('fs');
const path = require('path');

const targetDir = path.join(__dirname, 'ressources', 'seconde', 'maths', 'geometrie-plane-trigonometrie');

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

    <main class="max-w-5xl mx-auto px-4 py-8 space-y-12">

        <!-- EN-TÊTE DE LA FICHE DE TD -->
        <div class="bg-white border border-slate-200 rounded-3xl p-6 md:p-8 shadow-sm border-l-8 border-l-indigo-600 print-card space-y-4">
            <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-4">
                <div>
                    <div class="flex items-center gap-2 text-xs font-extrabold uppercase text-indigo-600 tracking-wider">
                        <span>Fiche d'Entraînement A4 Imprimable Avec Figures & Problèmes</span> • <span>Bac Pro 2nde Pro</span>
                    </div>
                    <h2 class="text-3xl font-extrabold text-slate-900 font-heading mt-1">TD : 10 Exercices Illustrés + 3 Problèmes Multi-Compétences (C1 à C5)</h2>
                    <p class="text-xs text-slate-500 mt-1">Exercices d'entraînement progressifs avec figures SVG + Problèmes complexes de synthèse évalués par compétences en bas de fiche.</p>
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
            <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 text-[11px] font-bold">
                <div class="p-2.5 bg-amber-50 border border-amber-200 rounded-xl text-center"><span class="text-amber-700 block font-extrabold">C1 - S'approprier</span> Extraire & organiser les données</div>
                <div class="p-2.5 bg-blue-50 border border-blue-200 rounded-xl text-center"><span class="text-blue-700 block font-extrabold">C2 - Analyser / Modéliser</span> Schématiser en triangle rectangle</div>
                <div class="p-2.5 bg-emerald-50 border border-emerald-200 rounded-xl text-center"><span class="text-emerald-700 block font-extrabold">C3 - Réaliser</span> Calculer avec SOH CAH TOA</div>
                <div class="p-2.5 bg-purple-50 border border-purple-200 rounded-xl text-center"><span class="text-purple-700 block font-extrabold">C4 - Valider</span> Vérifier les normes & la cohérence</div>
                <div class="p-2.5 bg-rose-50 border border-rose-200 rounded-xl text-center"><span class="text-rose-700 block font-extrabold">C5 - Communiquer</span> Rédiger la synthèse technico-pro</div>
            </div>
        </div>

        <!-- PARTIE A : LES 10 EXERCICES COMPLETS ET ILLUSTRÉS -->
        <section class="space-y-8">
            <div class="flex items-center gap-3 border-b border-slate-200 pb-3">
                <span class="w-8 h-8 bg-indigo-600 text-white rounded-xl flex items-center justify-center font-bold text-sm">A</span>
                <h3 class="text-xl font-extrabold font-heading text-slate-900">Partie A : 10 Exercices d'Entraînement avec Figures Vectorielles</h3>
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
                    <div class="p-3 bg-slate-50 border border-slate-200 rounded-2xl text-center overflow-x-auto">
                        <svg width="220" height="130" viewBox="0 0 220 130" class="mx-auto">
                            <line x1="10" y1="110" x2="210" y2="110" stroke="#64748b" stroke-width="2" stroke-dasharray="4,4"/>
                            <rect x="150" y="40" width="55" height="70" fill="#94a3b8" rx="4"/>
                            <line x1="30" y1="110" x2="150" y2="50" stroke="#0284c7" stroke-width="4"/>
                            <line x1="150" y1="110" x2="150" y2="50" stroke="#ef4444" stroke-width="2" stroke-dasharray="2,2"/>
                            <path d="M 50 110 A 20 20 0 0 0 45 102" fill="none" stroke="#f59e0b" stroke-width="2"/>
                            <text x="55" y="104" font-size="11" font-weight="bold" fill="#f59e0b">25°</text>
                            <text x="80" y="70" font-size="11" font-weight="bold" fill="#0284c7">L = 3,50 m</text>
                            <text x="160" y="85" font-size="11" font-weight="bold" fill="#ef4444">h = ?</text>
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
                    <div class="p-3 bg-slate-50 border border-slate-200 rounded-2xl text-center overflow-x-auto">
                        <svg width="220" height="130" viewBox="0 0 220 130" class="mx-auto">
                            <polygon points="20,110 110,30 200,110" fill="none" stroke="#0284c7" stroke-width="3"/>
                            <line x1="110" y1="30" x2="110" y2="110" stroke="#94a3b8" stroke-width="2" stroke-dasharray="3,3"/>
                            <line x1="20" y1="110" x2="110" y2="110" stroke="#10b981" stroke-width="3"/>
                            <path d="M 40 110 A 20 20 0 0 0 35 100" fill="none" stroke="#f59e0b" stroke-width="2"/>
                            <text x="45" y="105" font-size="10" font-weight="bold" fill="#f59e0b">32°</text>
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
                    <div class="p-3 bg-slate-50 border border-slate-200 rounded-2xl text-center overflow-x-auto">
                        <svg width="220" height="130" viewBox="0 0 220 130" class="mx-auto">
                            <line x1="20" y1="100" x2="200" y2="100" stroke="#64748b" stroke-width="2"/>
                            <line x1="20" y1="100" x2="200" y2="60" stroke="#8b5cf6" stroke-width="4"/>
                            <line x1="200" y1="100" x2="200" y2="60" stroke="#ef4444" stroke-width="2"/>
                            <path d="M 40 100 A 20 20 0 0 0 38 95" fill="none" stroke="#f59e0b" stroke-width="2"/>
                            <text x="45" y="94" font-size="10" font-weight="bold" fill="#f59e0b">α = ?</text>
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
                        Mesure de Hauteur d'un Pylône Télécom (Théodolite)
                    </h3>
                    <span class="bg-purple-100 text-purple-800 text-xs font-extrabold px-3 py-1 rounded-full">Analyser (C2)</span>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                    <div class="md:col-span-2 text-xs text-slate-700 space-y-3 leading-relaxed">
                        <p>Un technicien s'éloigne de $D = 45{,}00\\text{ m}$ du pied d'un pylône télécom. À l'aide d'un viseur laser placé à une hauteur d'œil $h_{\\text{œil}} = 1{,}75\\text{ m}$, il mesure un angle d'élévation $\\alpha = 38^\\circ$.</p>
                        <p class="font-bold text-slate-900">Calculer la hauteur totale $H = h_1 + h_{\\text{œil}}$ du pylône au cm près.</p>
                    </div>
                    <div class="p-3 bg-slate-50 border border-slate-200 rounded-2xl text-center overflow-x-auto">
                        <svg width="220" height="130" viewBox="0 0 220 130" class="mx-auto">
                            <line x1="10" y1="110" x2="210" y2="110" stroke="#64748b" stroke-width="2"/>
                            <line x1="180" y1="110" x2="180" y2="10" stroke="#0284c7" stroke-width="3"/>
                            <line x1="30" y1="110" x2="30" y2="80" stroke="#475569" stroke-width="3"/>
                            <line x1="30" y1="80" x2="180" y2="10" stroke="#f59e0b" stroke-width="2" stroke-dasharray="3,3"/>
                            <line x1="30" y1="80" x2="180" y2="80" stroke="#64748b" stroke-width="1.5" stroke-dasharray="2,2"/>
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
                    <div class="p-3 bg-slate-50 border border-slate-200 rounded-2xl text-center overflow-x-auto">
                        <svg width="220" height="130" viewBox="0 0 220 130" class="mx-auto">
                            <line x1="160" y1="10" x2="160" y2="110" stroke="#475569" stroke-width="4"/>
                            <line x1="20" y1="110" x2="200" y2="110" stroke="#64748b" stroke-width="2"/>
                            <line x1="60" y1="110" x2="160" y2="20" stroke="#0284c7" stroke-width="3"/>
                            <line x1="80" y1="92" x2="88" y2="98" stroke="#0284c7" stroke-width="2"/>
                            <line x1="100" y1="74" x2="108" y2="80" stroke="#0284c7" stroke-width="2"/>
                            <line x1="120" y1="56" x2="128" y2="62" stroke="#0284c7" stroke-width="2"/>
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
                        <p class="font-bold text-slate-900">Calculer le demi-angle de cône $\\alpha = \\arctan\\left(\\frac{D-d}{2L}\\right)$ en degrés au centième près.</p>
                    </div>
                    <div class="p-3 bg-slate-50 border border-slate-200 rounded-2xl text-center overflow-x-auto">
                        <svg width="220" height="130" viewBox="0 0 220 130" class="mx-auto">
                            <line x1="10" y1="65" x2="210" y2="65" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4,4"/>
                            <polygon points="30,20 150,40 150,90 30,110" fill="none" stroke="#0284c7" stroke-width="3"/>
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
                    <div class="p-3 bg-slate-50 border border-slate-200 rounded-2xl text-center overflow-x-auto">
                        <svg width="220" height="130" viewBox="0 0 220 130" class="mx-auto">
                            <line x1="20" y1="100" x2="180" y2="100" stroke="#64748b" stroke-width="2"/>
                            <line x1="20" y1="100" x2="160" y2="30" stroke="#0284c7" stroke-width="5"/>
                            <line x1="160" y1="100" x2="160" y2="30" stroke="#ef4444" stroke-width="2" stroke-dasharray="2,2"/>
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
                    <div class="p-3 bg-slate-50 border border-slate-200 rounded-2xl text-center overflow-x-auto">
                        <svg width="220" height="130" viewBox="0 0 220 130" class="mx-auto">
                            <line x1="10" y1="110" x2="210" y2="110" stroke="#64748b" stroke-width="2"/>
                            <rect x="150" y="20" width="35" height="90" fill="#94a3b8"/>
                            <line x1="40" y1="110" x2="40" y2="90" stroke="#10b981" stroke-width="3"/>
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
                        <p>Une grue mobile possède une flèche télescopique $F = 24{,}00\\text{ m}$ dressée à $\\alpha = 55^\\circ$ par rapport au sol.</p>
                        <p class="font-bold text-slate-900">1. Calculer la hauteur sous crochet $H = F \\cdot \\sin(55^\\circ)$.<br>2. Calculer la portée horizontale $P = F \\cdot \\cos(55^\\circ)$.</p>
                    </div>
                    <div class="p-3 bg-slate-50 border border-slate-200 rounded-2xl text-center overflow-x-auto">
                        <svg width="220" height="130" viewBox="0 0 220 130" class="mx-auto">
                            <rect x="20" y="90" width="40" height="20" fill="#64748b"/>
                            <line x1="40" y1="90" x2="180" y2="20" stroke="#eab308" stroke-width="5"/>
                            <line x1="180" y1="20" x2="180" y2="60" stroke="#1e293b" stroke-width="2"/>
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
        </section>

        <!-- PARTIE B : 3 PROBLÈMES MULTI-COMPÉTENCES (C1 À C5) PLACÉS EN BAS -->
        <section class="space-y-8 pt-6 border-t-2 border-slate-200">
            <div class="flex items-center justify-between border-b border-slate-200 pb-3">
                <div class="flex items-center gap-3">
                    <span class="w-8 h-8 bg-amber-500 text-slate-950 rounded-xl flex items-center justify-center font-bold text-sm">B</span>
                    <div>
                        <span class="text-xs font-bold text-amber-600 uppercase tracking-wider">Évaluation des Compétences Référentiel</span>
                        <h3 class="text-2xl font-extrabold font-heading text-slate-900">Partie B : 3 Grands Problèmes Récapitulatifs (C1 → C5)</h3>
                    </div>
                </div>
                <span class="bg-amber-500 text-slate-950 font-extrabold text-xs px-3.5 py-1.5 rounded-full uppercase tracking-wider">Évaluation Grille C1-C5</span>
            </div>

            <!-- PROBLÈME A -->
            <div class="bg-slate-900 text-white rounded-3xl p-6 md:p-8 card-shadow space-y-6 border border-slate-800">
                <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-4">
                    <div>
                        <span class="bg-amber-500 text-slate-950 font-extrabold text-[10px] px-3 py-1 rounded-full uppercase tracking-wider">Problème A • Bâtiment & Charpente Industrielle</span>
                        <h4 class="text-2xl font-bold font-heading text-white mt-1">Conception Technico-Financière d'un Hangar Agricole</h4>
                    </div>
                    <div class="flex flex-wrap items-center gap-1.5 text-[10px] font-extrabold">
                        <span class="bg-amber-500/20 text-amber-300 px-2.5 py-1 rounded-md border border-amber-500/30">C1</span>
                        <span class="bg-blue-500/20 text-blue-300 px-2.5 py-1 rounded-md border border-blue-500/30">C2</span>
                        <span class="bg-emerald-500/20 text-emerald-300 px-2.5 py-1 rounded-md border border-emerald-500/30">C3</span>
                        <span class="bg-purple-500/20 text-purple-300 px-2.5 py-1 rounded-md border border-purple-500/30">C4</span>
                        <span class="bg-rose-500/20 text-rose-300 px-2.5 py-1 rounded-md border border-rose-500/30">C5</span>
                    </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-slate-300 leading-relaxed">
                    <div class="md:col-span-2 space-y-4">
                        <p>Un charpentier doit concevoir la structure d'un hangar de stockage agricole. Le cahier des charges impose les contraintes suivantes :</p>
                        
                        <div class="bg-slate-800 p-4 rounded-2xl border border-slate-700 space-y-2">
                            <h5 class="font-bold text-amber-400">📋 Données du Cahier des Charges (C1) :</h5>
                            <ul class="list-disc list-inside space-y-1 text-slate-200">
                                <li>Largeur totale au sol du bâtiment : $B = 14{,}00\\text{ m}$ (ferme symétrique à 2 pans).</li>
                                <li>Pente d'inclinaison minimale pour tuiles acier : $\\alpha = 28^\\circ$.</li>
                                <li>Longueur totale du hangar : $L = 20{,}00\\text{ m}$.</li>
                                <li>Hauteur maximale autorisée au faîtage par le PLU local : $H_{\\text{max}} = 5{,}50\\text{ m}$.</li>
                                <li>Prix de fourniture de la couverture acier : $42{,}00\\text{ € / m}^2$.</li>
                            </ul>
                        </div>

                        <div class="space-y-2 text-slate-200">
                            <h5 class="font-bold text-amber-300">Travail à Réaliser par l'Élève :</h5>
                            <p><strong>1. (C1/C2) Modélisation :</strong> Réaliser le schéma géométrique annoté d'un pan de ferme (triangle rectangle).</p>
                            <p><strong>2. (C3) Calculs :</strong> Calculer la hauteur au faîtage $h$, la longueur du rampant d'arbalétrier $R$, la surface totale des 2 pans et le coût HT de la couverture.</p>
                            <p><strong>3. (C4) Validation :</strong> Vérifier la conformité de la hauteur totale $h$ par rapport à la règle PLU $H_{\\text{max}} = 5{,}50\\text{ m}$.</p>
                            <p><strong>4. (C5) Communication :</strong> Rédiger la conclusion technique et le devis estimatif pour le client.</p>
                        </div>
                    </div>

                    <!-- SCHEMA FIGURE SVG PROBLEME A -->
                    <div class="bg-slate-950 p-4 rounded-2xl border border-slate-800 flex flex-col justify-center items-center text-center">
                        <svg width="220" height="150" viewBox="0 0 220 150" class="mx-auto">
                            <polygon points="20,120 110,30 200,120" fill="none" stroke="#f59e0b" stroke-width="3"/>
                            <line x1="110" y1="30" x2="110" y2="120" stroke="#38bdf8" stroke-width="2" stroke-dasharray="3,3"/>
                            <line x1="20" y1="120" x2="110" y2="120" stroke="#34d399" stroke-width="3"/>
                            <path d="M 45 120 A 25 25 0 0 0 40 108" fill="none" stroke="#f59e0b" stroke-width="2"/>
                            <text x="50" y="115" font-size="10" font-weight="bold" fill="#f59e0b">28°</text>
                            <text x="115" y="75" font-size="11" font-weight="bold" fill="#38bdf8">h = ?</text>
                            <text x="45" y="65" font-size="11" font-weight="bold" fill="#f59e0b">R = ?</text>
                            <text x="45" y="138" font-size="11" font-weight="bold" fill="#34d399">b = 7,00 m</text>
                        </svg>
                    </div>
                </div>

                <details class="bg-slate-800 border border-slate-700 rounded-2xl p-5 text-xs text-slate-200">
                    <summary class="font-bold text-amber-400 cursor-pointer hover:text-amber-300 transition flex items-center gap-2">
                        <i class="fa-solid fa-graduation-cap text-amber-400"></i> Corrigé Intégral & Barème par Compétences (Problème A)
                    </summary>
                    <div class="mt-4 pt-4 border-t border-slate-700 space-y-3 font-mono">
                        <p><strong class="text-amber-300">C1 (S'approprier) :</strong> Demi-largeur $b = 14 / 2 = 7{,}00\\text{ m}$. Angle $\\alpha = 28^\\circ$. Longueur $L = 20{,}00\\text{ m}$.</p>
                        <p><strong class="text-blue-300">C2 (Analyser/Modéliser) :</strong> Le pan de toit forme un triangle rectangle de base $b=7\\text{ m}$, d'angle $\\alpha=28^\circ$, de hauteur $h$ (opposé) et d'arbalétrier $R$ (hypoténuse).</p>
                        <p><strong class="text-emerald-300">C3 (Réaliser) :</strong><br>
                        • Hauteur $h = 7{,}00 \\times \\tan(28^\\circ) = 7{,}00 \\times 0{,}5317 = \\mathbf{3{,}72\\text{ m}}$.<br>
                        • Rampant $R = \\frac{7{,}00}{\\cos(28^\\circ)} = \\frac{7{,}00}{0{,}8829} = \\mathbf{7{,}93\\text{ m}}$.<br>
                        • Surface totale (2 pans) : $S = 2 \\times (7{,}93 \\times 20{,}00) = 2 \\times 158{,}60 = \\mathbf{317{,}20\\text{ m}^2}$.<br>
                        • Coût fourniture : $C = 317{,}20 \\times 42{,}00 = \\mathbf{13\\,322{,}40\\text{ € HT}}$.</p>
                        <p><strong class="text-purple-300">C4 (Valider) :</strong> Comme $h = 3{,}72\\text{ m} < 5{,}50\\text{ m}$, le bâtiment est conforme à la réglementation PLU.</p>
                        <p><strong class="text-rose-300">C5 (Communiquer) :</strong> "Le hangar présente une hauteur sous faîtage de 3,72 m, parfaitement conforme aux contraintes PLU. La surface de toiture est de 317,20 m² pour un budget de couverture de 13 322,40 € HT."</p>
                    </div>
                </details>
            </div>

            <!-- PROBLÈME B -->
            <div class="bg-slate-900 text-white rounded-3xl p-6 md:p-8 card-shadow space-y-6 border border-slate-800">
                <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-4">
                    <div>
                        <span class="bg-purple-500 text-white font-extrabold text-[10px] px-3 py-1 rounded-full uppercase tracking-wider">Problème B • Accessibilité PMR & Aménagement Urbain</span>
                        <h4 class="text-2xl font-bold font-heading text-white mt-1">Conformité & Dimensionnement d'une Rampe Multi-Paliers</h4>
                    </div>
                    <div class="flex flex-wrap items-center gap-1.5 text-[10px] font-extrabold">
                        <span class="bg-amber-500/20 text-amber-300 px-2.5 py-1 rounded-md border border-amber-500/30">C1</span>
                        <span class="bg-blue-500/20 text-blue-300 px-2.5 py-1 rounded-md border border-blue-500/30">C2</span>
                        <span class="bg-emerald-500/20 text-emerald-300 px-2.5 py-1 rounded-md border border-emerald-500/30">C3</span>
                        <span class="bg-purple-500/20 text-purple-300 px-2.5 py-1 rounded-md border border-purple-500/30">C4</span>
                        <span class="bg-rose-500/20 text-rose-300 px-2.5 py-1 rounded-md border border-rose-500/30">C5</span>
                    </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-slate-300 leading-relaxed">
                    <div class="md:col-span-2 space-y-4">
                        <p>La mairie d'une commune souhaite aménager une rampe d'accès PMR pour un gymnase municipal. La marche à franchir est de hauteur $H = 0{,}80\\text{ m}$. La réglementation impose :</p>
                        
                        <div class="bg-slate-800 p-4 rounded-2xl border border-slate-700 space-y-2 text-slate-200">
                            <h5 class="font-bold text-purple-400">📋 Normes PMR Réglementaires (C1) :</h5>
                            <ul class="list-disc list-inside space-y-1">
                                <li>Pente maximale autorisée : $5{,}0\\%$.</li>
                                <li>Si la longueur inclinée dépasse $10{,}00\\text{ m}$, un palier de repos horizontal de $1{,}40\\text{ m}$ est obligatoire.</li>
                            </ul>
                        </div>

                        <div class="space-y-2 text-slate-200">
                            <h5 class="font-bold text-purple-300">Travail à Réaliser par l'Élève :</h5>
                            <p><strong>1. (C1/C2) :</strong> Calculer la longueur minimale au sol $d$ d'une rampe continue à $5\%$.</p>
                            <p><strong>2. (C3) :</strong> Calculer la longueur réelle de la rampe aluminium $L_{\text{rampe}} = \\sqrt{d^2 + H^2}$.</p>
                            <p><strong>3. (C4) :</strong> Vérifier si la présence d'un palier de repos est obligatoire ($L_{\text{rampe}} > 10\\text{ m}$).</p>
                            <p><strong>4. (C5) :</strong> Rédiger la note de contrôle de conformité pour le maître d'ouvrage.</p>
                        </div>
                    </div>

                    <!-- SCHEMA FIGURE SVG PROBLEME B -->
                    <div class="bg-slate-950 p-4 rounded-2xl border border-slate-800 flex flex-col justify-center items-center text-center">
                        <svg width="220" height="150" viewBox="0 0 220 150" class="mx-auto">
                            <line x1="10" y1="120" x2="210" y2="120" stroke="#64748b" stroke-width="2"/>
                            <line x1="10" y1="120" x2="200" y2="40" stroke="#8b5cf6" stroke-width="4"/>
                            <line x1="200" y1="120" x2="200" y2="40" stroke="#ef4444" stroke-width="2"/>
                            <text x="90" y="135" font-size="11" font-weight="bold" fill="#64748b">d = 16,00 m</text>
                            <text x="145" y="30" font-size="11" font-weight="bold" fill="#ef4444">H = 0,80 m</text>
                        </svg>
                    </div>
                </div>

                <details class="bg-slate-800 border border-slate-700 rounded-2xl p-5 text-xs text-slate-200">
                    <summary class="font-bold text-purple-400 cursor-pointer hover:text-purple-300 transition flex items-center gap-2">
                        <i class="fa-solid fa-graduation-cap text-purple-400"></i> Corrigé Intégral & Barème par Compétences (Problème B)
                    </summary>
                    <div class="mt-4 pt-4 border-t border-slate-700 space-y-3 font-mono">
                        <p><strong class="text-amber-300">C1 (S'approprier) :</strong> Hauteur $H = 0{,}80\\text{ m}$. Pente $p = 5\\% = 0{,}05$.</p>
                        <p><strong class="text-blue-300">C2 (Analyser) :</strong> $\\text{Pente} = \\frac{H}{d} \\implies d = \\frac{H}{0{,}05}$.</p>
                        <p><strong class="text-emerald-300">C3 (Réaliser) :</strong><br>
                        • Longueur au sol $d = \\frac{0{,}80}{0{,}05} = \\mathbf{16{,}00\\text{ m}}$.<br>
                        • Longueur rampe $L_{\\text{rampe}} = \\sqrt{16^2 + 0{,}8^2} = \\sqrt{256 + 0{,}64} = \\mathbf{16{,}02\\text{ m}}$.</p>
                        <p><strong class="text-purple-300">C4 (Valider) :</strong> Comme $L_{\\text{rampe}} = 16{,}02\\text{ m} > 10{,}00\\text{ m}$, un palier horizontal de repos de $1{,}40\\text{ m}$ est **obligatoire** à mi-parcours.</p>
                        <p><strong class="text-rose-300">C5 (Communiquer) :</strong> "La rampe nécessite une emprise au sol de 16,00 m. Sa longueur de 16,02 m exige l'insertion d'un palier de repos de 1,40 m à 8,00 m pour garantir la conformité aux normes PMR."</p>
                    </div>
                </details>
            </div>

            <!-- PROBLÈME C -->
            <div class="bg-slate-900 text-white rounded-3xl p-6 md:p-8 card-shadow space-y-6 border border-slate-800">
                <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-4">
                    <div>
                        <span class="bg-emerald-500 text-slate-950 font-extrabold text-[10px] px-3 py-1 rounded-full uppercase tracking-wider">Problème C • Transition Énergétique & Solaire</span>
                        <h4 class="text-2xl font-bold font-heading text-white mt-1">Implantation d'une Centrale Photovoltaïque & Masque d'Ombre</h4>
                    </div>
                    <div class="flex flex-wrap items-center gap-1.5 text-[10px] font-extrabold">
                        <span class="bg-amber-500/20 text-amber-300 px-2.5 py-1 rounded-md border border-amber-500/30">C1</span>
                        <span class="bg-blue-500/20 text-blue-300 px-2.5 py-1 rounded-md border border-blue-500/30">C2</span>
                        <span class="bg-emerald-500/20 text-emerald-300 px-2.5 py-1 rounded-md border border-emerald-500/30">C3</span>
                        <span class="bg-purple-500/20 text-purple-300 px-2.5 py-1 rounded-md border border-purple-500/30">C4</span>
                        <span class="bg-rose-500/20 text-rose-300 px-2.5 py-1 rounded-md border border-rose-500/30">C5</span>
                    </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-slate-300 leading-relaxed">
                    <div class="md:col-span-2 space-y-4">
                        <p>Sur le toit terrasse d'un bâtiment industriel, un ingénieur installe des rangées de panneaux solaires de longueur $P = 2{,}00\\text{ m}$ inclinés à $\\alpha = 35^\\circ$. Au solstice d'hiver, l'angle d'élévation du soleil le plus bas est $\\beta = 20^\\circ$.</p>
                        
                        <div class="bg-slate-800 p-4 rounded-2xl border border-slate-700 space-y-2 text-slate-200">
                            <h5 class="font-bold text-emerald-400">📋 Contraintes Énergétiques (C1) :</h5>
                            <ul class="list-disc list-inside space-y-1">
                                <li>Surélévation du panneau : $h = P \\cdot \\sin(35^\\circ)$.</li>
                                <li>Ombre portée au sol par la rangée : $S = \\frac{h}{\\tan(20^\\circ)}$.</li>
                                <li>Espacement minimal entre rangées : $E = P \\cdot \\cos(35^\\circ) + S$.</li>
                            </ul>
                        </div>

                        <div class="space-y-2 text-slate-200">
                            <h5 class="font-bold text-emerald-300">Travail à Réaliser par l'Élève :</h5>
                            <p><strong>1. (C1/C2) :</strong> Calculer la hauteur $h$ au sommet du panneau.</p>
                            <p><strong>2. (C3) :</strong> Calculer la longueur de l'ombre au sol $S$ et l'écartement total nécessaire $E$.</p>
                            <p><strong>3. (C4/C5) :</strong> Sur une terrasse de $30{,}00\\text{ m}$ de long, déterminer le nombre maximal de rangées implantables sans ombrage.</p>
                        </div>
                    </div>

                    <!-- SCHEMA FIGURE SVG PROBLEME C -->
                    <div class="bg-slate-950 p-4 rounded-2xl border border-slate-800 flex flex-col justify-center items-center text-center">
                        <svg width="220" height="150" viewBox="0 0 220 150" class="mx-auto">
                            <line x1="10" y1="120" x2="210" y2="120" stroke="#64748b" stroke-width="2"/>
                            <line x1="20" y1="120" x2="140" y2="40" stroke="#0284c7" stroke-width="5"/>
                            <line x1="140" y1="120" x2="140" y2="40" stroke="#ef4444" stroke-width="2" stroke-dasharray="2,2"/>
                            <line x1="140" y1="40" x2="210" y2="120" stroke="#f59e0b" stroke-width="2" stroke-dasharray="3,3"/>
                            <text x="50" y="70" font-size="10" font-weight="bold" fill="#0284c7">P = 2,00 m</text>
                            <text x="145" y="75" font-size="10" font-weight="bold" fill="#ef4444">h</text>
                        </svg>
                    </div>
                </div>

                <details class="bg-slate-800 border border-slate-700 rounded-2xl p-5 text-xs text-slate-200">
                    <summary class="font-bold text-emerald-400 cursor-pointer hover:text-emerald-300 transition flex items-center gap-2">
                        <i class="fa-solid fa-graduation-cap text-emerald-400"></i> Corrigé Intégral & Barème par Compétences (Problème C)
                    </summary>
                    <div class="mt-4 pt-4 border-t border-slate-700 space-y-3 font-mono">
                        <p><strong class="text-amber-300">C1 (S'approprier) :</strong> $P = 2{,}00\\text{ m}$, $\\alpha = 35^\\circ$, $\\beta = 20^\\circ$.</p>
                        <p><strong class="text-emerald-300">C3 (Réaliser) :</strong><br>
                        • Hauteur $h = 2{,}00 \\times \\sin(35^\\circ) = 2{,}00 \\times 0{,}5736 = \\mathbf{1{,}15\\text{ m}}$.<br>
                        • Ombre $S = \\frac{1{,}15}{\\tan(20^\\circ)} = \\frac{1{,}15}{0{,}3640} = \\mathbf{3{,}16\\text{ m}}$.<br>
                        • Emprise au sol $e = 2{,}00 \\times \\cos(35^\\circ) = \\mathbf{1{,}64\\text{ m}}$.<br>
                        • Espacement total par rangée $E = 1{,}64 + 3{,}16 = \\mathbf{4{,}80\\text{ m}}$.</p>
                        <p><strong class="text-purple-300">C4 (Valider) :</strong> Nombre de rangées : $\\frac{30{,}00}{4{,}80} = 6{,}25 \\implies \\mathbf{6\\text{ rangées complets}}$.</p>
                        <p><strong class="text-rose-300">C5 (Communiquer) :</strong> "L'implantation optimale sur la toiture terrasse de 30 m permet d'installer 6 rangées de panneaux solaires avec un espacement de 4,80 m, garantissant 0% d'ombrage même au solstice d'hiver."</p>
                    </div>
                </details>
            </div>
        </section>

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
console.log('Successfully restored ALL 10 FULL EXERCISES with SVG diagrams + appended Partie B (3 Multi-Competency Problems)!');
