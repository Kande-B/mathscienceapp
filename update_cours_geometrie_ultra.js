const fs = require('fs');
const path = require('path');

const targetFile = 'ressources/seconde/maths/geometrie-espace-volumes/cours.html';

const htmlContent = `<!DOCTYPE html>
<html lang="fr" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Je note l'essentiel (Cours) - Géométrie de l'Espace & Volumes (Seconde Pro)</title>
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
                <div class="w-10 h-10 bg-sky-500/20 border border-sky-400/30 text-sky-400 rounded-xl flex items-center justify-center font-bold">
                    <i class="fa-solid fa-cube text-lg"></i>
                </div>
                <div>
                    <span class="text-xs font-bold tracking-widest uppercase text-sky-400">Séquence Seconde Pro • Mathématiques</span>
                    <h1 class="text-xl font-bold font-heading">Géométrie de l'Espace & Volumes</h1>
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

        <!-- ENTÊTE DE SÉQUENCE DE COURS CONFORME ÉDUCATION NATIONALE -->
        <div class="bg-slate-900 text-white p-6 md:p-8 rounded-3xl shadow-xl border border-slate-800 space-y-4">
            <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div>
                    <div class="flex items-center gap-2 mb-2">
                        <span class="bg-sky-500 text-slate-950 text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">Programme Officiel Seconde Pro</span>
                        <span class="bg-slate-800 text-slate-300 text-xs font-semibold px-3 py-1 rounded-full border border-slate-700">Module G1 : Géométrie de l'Espace & Volumes</span>
                    </div>
                    <h2 class="text-3xl font-extrabold font-heading text-white">Fiche de Cours : Solides 3D, Surfaçage & Volumes</h2>
                    <p class="text-sm text-slate-300 max-w-2xl">Représentation en perspective cavalière, formules universelles des aires et volumes (prisme, cylindre, pyramide, cône, sphère), conversions d'unités ($m^3$, litres) et masse volumique.</p>
                </div>

                <button onclick="window.print()" class="no-print bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs px-5 py-3 rounded-xl shadow-md transition-colors flex items-center gap-2">
                    <i class="fa-solid fa-print"></i> Imprimer le Cours PDF
                </button>
            </div>

            <!-- SOMMAIRE COURS INTERACTIF -->
            <div class="pt-4 border-t border-slate-800 grid grid-cols-2 md:grid-cols-5 gap-2 text-xs font-semibold">
                <a href="#partie1" class="p-2 bg-slate-800 hover:bg-slate-700 text-sky-300 rounded-lg text-center transition-colors">1. Perspective Cavalière</a>
                <a href="#partie2" class="p-2 bg-slate-800 hover:bg-slate-700 text-amber-300 rounded-lg text-center transition-colors">2. Formules d'Aires 3D</a>
                <a href="#partie3" class="p-2 bg-slate-800 hover:bg-slate-700 text-purple-300 rounded-lg text-center transition-colors">3. Formules des Volumes</a>
                <a href="#partie4" class="p-2 bg-slate-800 hover:bg-slate-700 text-emerald-300 rounded-lg text-center transition-colors">4. Conversions & Masse</a>
                <a href="#partie5" class="p-2 bg-slate-800 hover:bg-slate-700 text-rose-300 rounded-lg text-center transition-colors">5. Solides Composés Pro</a>
            </div>
        </div>

        <!-- PARTIE 1 : PERSPECTIVE CAVALIÈRE ET SOLIDES -->
        <section id="partie1" class="bg-white p-6 md:p-8 rounded-3xl border border-slate-200 card-shadow space-y-6">
            <div class="flex items-center gap-3 border-b border-slate-100 pb-4">
                <span class="w-10 h-10 bg-sky-100 text-sky-800 rounded-xl flex items-center justify-center font-bold text-lg">1</span>
                <div>
                    <span class="text-xs font-bold text-sky-600 uppercase tracking-wider">Partie 1 • Représentation dans le Plan</span>
                    <h3 class="text-xl font-bold font-heading text-slate-900">Règles de la Perspective Cavalière</h3>
                </div>
            </div>

            <div class="space-y-4 text-xs text-slate-700 leading-relaxed">
                <!-- ENCADRÉ DÉFINITION 1 -->
                <div class="bg-sky-50 border-l-4 border-sky-500 p-5 rounded-r-2xl space-y-2">
                    <h4 class="font-bold text-sky-900 text-sm flex items-center gap-2">
                        <i class="fa-solid fa-cube"></i> Définition de la Perspective Cavalière
                    </h4>
                    <p class="text-slate-800">
                        La <strong>perspective cavalière</strong> est une technique de dessin permettant de représenter un solide tridimensionnel sur une feuille de papier en 2D. <br>
                        • <strong>La face avant :</strong> Dessinée en vraie grandeur sans aucune déformation. <br>
                        • <strong>Les arêtes fuyantes :</strong> Obliques (angle $\\alpha \\approx 30^\\circ$ à $45^\\circ$), réduites d'un rapport $k \\approx 0,5$, et <strong>parallèles entre elles</strong>. <br>
                        • <strong>Arêtes cachées :</strong> Tracées obligatoirement en <strong>traits pointillés</strong>.
                    </p>
                </div>

                <!-- SCHÉMA SVG : PAVÉ DROIT EN PERSPECTIVE CAVALIÈRE -->
                <div class="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-3">
                    <h4 class="font-bold text-slate-900 text-sm flex items-center gap-2">
                        <i class="fa-solid fa-vector-square text-sky-600"></i> Représentation d'un Pavé Droit (Parallélépipède)
                    </h4>
                    <div class="py-4 bg-white rounded-xl border border-slate-200 text-center">
                        <svg width="420" height="180" viewBox="0 0 420 180" class="mx-auto font-sans">
                            <!-- Face avant visible -->
                            <rect x="80" y="60" width="180" height="100" fill="none" stroke="#0284c7" stroke-width="3"/>
                            
                            <!-- Arêtes fuyantes visibles -->
                            <line x1="260" y1="60" x2="330" y2="20" stroke="#0284c7" stroke-width="3"/>
                            <line x1="260" y1="160" x2="330" y2="120" stroke="#0284c7" stroke-width="3"/>
                            <line x1="80" y1="60" x2="150" y2="20" stroke="#0284c7" stroke-width="3"/>
                            <line x1="150" y1="20" x2="330" y2="20" stroke="#0284c7" stroke-width="3"/>
                            <line x1="330" y1="20" x2="330" y2="120" stroke="#0284c7" stroke-width="3"/>

                            <!-- Arêtes cachées en pointillés -->
                            <line x1="80" y1="160" x2="150" y2="120" stroke="#ef4444" stroke-width="2" stroke-dasharray="4"/>
                            <line x1="150" y1="20" x2="150" y2="120" stroke="#ef4444" stroke-width="2" stroke-dasharray="4"/>
                            <line x1="150" y1="120" x2="330" y2="120" stroke="#ef4444" stroke-width="2" stroke-dasharray="4"/>

                            <!-- Annotations -->
                            <text x="170" y="175" font-size="11" font-weight="bold" fill="#0284c7" text-anchor="middle">Longueur L</text>
                            <text x="70" y="110" font-size="11" font-weight="bold" fill="#0284c7" text-anchor="end">Hauteur h</text>
                            <text x="305" y="150" font-size="11" font-weight="bold" fill="#ef4444" text-anchor="middle">Profondeur l (Fuyante)</text>
                        </svg>
                    </div>
                </div>
            </div>
        </section>

        <!-- PARTIE 2 : FORMULES D'AIRES LATÉRALES ET TOTALES -->
        <section id="partie2" class="bg-white p-6 md:p-8 rounded-3xl border border-slate-200 card-shadow space-y-6">
            <div class="flex items-center gap-3 border-b border-slate-100 pb-4">
                <span class="w-10 h-10 bg-amber-100 text-amber-800 rounded-xl flex items-center justify-center font-bold text-lg">2</span>
                <div>
                    <span class="text-xs font-bold text-amber-600 uppercase tracking-wider">Partie 2 • Surfaçage & Développements</span>
                    <h3 class="text-xl font-bold font-heading text-slate-900">Formules des Aires Latérales et Totales</h3>
                </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">

                <!-- 1. CUBE ET PAVÉ -->
                <div class="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-3">
                    <span class="bg-sky-600 text-white font-extrabold text-[10px] uppercase px-2 py-0.5 rounded">1. Pavé & Cube</span>
                    <h4 class="font-bold text-slate-900 text-sm">Surfaces Rectangulaires</h4>
                    <ul class="space-y-1.5 text-slate-700 text-[11px]">
                        <li>• <strong>Cube :</strong> $A_{\\text{totale}} = 6 \\cdot a^2$</li>
                        <li>• <strong>Pavé droit :</strong> $A_{\\text{totale}} = 2(L \\cdot l + L \\cdot h + l \\cdot h)$</li>
                    </ul>
                </div>

                <!-- 2. CYLINDRE ET PRISME -->
                <div class="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-3">
                    <span class="bg-amber-600 text-white font-extrabold text-[10px] uppercase px-2 py-0.5 rounded">2. Cylindre & Prisme</span>
                    <h4 class="font-bold text-slate-900 text-sm">Solides à Bases Égales</h4>
                    <ul class="space-y-1.5 text-slate-700 text-[11px]">
                        <li>• <strong>Aire latérale Cylindre :</strong> $A_{\\text{lat}} = 2 \\pi R \\cdot h$</li>
                        <li>• <strong>Aire totale Cylindre :</strong> $A_{\\text{tot}} = 2 \\pi R h + 2 \\pi R^2$</li>
                        <li>• <strong>Aire latérale Prisme :</strong> $A_{\\text{lat}} = P_{\\text{base}} \\cdot h$</li>
                    </ul>
                </div>

                <!-- 3. CÔNE ET SPHÈRE -->
                <div class="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-3">
                    <span class="bg-purple-600 text-white font-extrabold text-[10px] uppercase px-2 py-0.5 rounded">3. Cône & Sphère</span>
                    <h4 class="font-bold text-slate-900 text-sm">Solides Ronds</h4>
                    <ul class="space-y-1.5 text-slate-700 text-[11px]">
                        <li>• <strong>Aire latérale Cône :</strong> $A_{\\text{lat}} = \\pi R a$ <br> (où génératrice $a = \\sqrt{R^2 + h^2}$)</li>
                        <li>• <strong>Aire Sphère :</strong> $A = 4 \\pi R^2$</li>
                    </ul>
                </div>

            </div>
        </section>

        <!-- PARTIE 3 : FORMULES UNIVERSELLES DES VOLUMES -->
        <section id="partie3" class="bg-white p-6 md:p-8 rounded-3xl border border-slate-200 card-shadow space-y-6">
            <div class="flex items-center gap-3 border-b border-slate-100 pb-4">
                <span class="w-10 h-10 bg-purple-100 text-purple-800 rounded-xl flex items-center justify-center font-bold text-lg">3</span>
                <div>
                    <span class="text-xs font-bold text-purple-600 uppercase tracking-wider">Partie 3 • Calculs d'Espace</span>
                    <h3 class="text-xl font-bold font-heading text-slate-900">Formules Universelles des Volumes $V$</h3>
                </div>
            </div>

            <div class="space-y-4 text-xs text-slate-700 leading-relaxed">
                <!-- REGLE UNIVERSELLE DES VOLUMES -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div class="p-5 bg-emerald-50 border-l-4 border-emerald-500 rounded-r-2xl space-y-2">
                        <h4 class="font-bold text-emerald-900 text-sm flex items-center gap-2">
                            <i class="fa-solid fa-shapes"></i> 1. Solides Dégagés (Bases Parallèles Égales)
                        </h4>
                        <p class="text-slate-800 font-mono text-sm">$\\mathbf{V = B \\times h}$</p>
                        <p class="text-slate-700 text-[11px]">
                            • <strong>Cube :</strong> $V = a^3$ <br>
                            • <strong>Pavé droit :</strong> $V = L \\times l \\times h$ <br>
                            • <strong>Cylindre de révolution :</strong> $V = \\pi R^2 h$ <br>
                            • <strong>Prisme droit :</strong> $V = A_{\\text{base}} \\times h$
                        </p>
                    </div>

                    <div class="p-5 bg-rose-50 border-l-4 border-rose-500 rounded-r-2xl space-y-2">
                        <h4 class="font-bold text-rose-900 text-sm flex items-center gap-2">
                            <i class="fa-solid fa-caret-up"></i> 2. Solides à Pointe (Apex)
                        </h4>
                        <p class="text-slate-800 font-mono text-sm">$\\mathbf{V = \\frac{1}{3} \\times B \\times h}$</p>
                        <p class="text-slate-700 text-[11px]">
                            • <strong>Pyramide :</strong> $V = \\frac{1}{3} A_{\\text{base}} \\times h$ <br>
                            • <strong>Cône de révolution :</strong> $V = \\frac{1}{3} \\pi R^2 h$
                        </p>
                    </div>
                </div>

                <!-- BOULE / SPHERE -->
                <div class="p-5 bg-indigo-50 border border-indigo-200 rounded-2xl space-y-2">
                    <h4 class="font-bold text-indigo-950 text-sm flex items-center gap-2">
                        <i class="fa-solid fa-globe"></i> 3. Boule / Sphère
                    </h4>
                    <p class="text-indigo-900 font-mono text-sm">$\\mathbf{V = \\frac{4}{3} \\pi R^3}$</p>
                    <p class="text-slate-700 text-[11px]">Remarque : La moitié d'une boule (demi-sphère) a un volume $V = \\frac{2}{3} \\pi R^3$.</p>
                </div>
            </div>
        </section>

        <!-- PARTIE 4 : CONVERSIONS ET MASSE VOLUMIQUE -->
        <section id="partie4" class="bg-white p-6 md:p-8 rounded-3xl border border-slate-200 card-shadow space-y-6">
            <div class="flex items-center gap-3 border-b border-slate-100 pb-4">
                <span class="w-10 h-10 bg-emerald-100 text-emerald-800 rounded-xl flex items-center justify-center font-bold text-lg">4</span>
                <div>
                    <span class="text-xs font-bold text-emerald-600 uppercase tracking-wider">Partie 4 • Unités & Masse Volumique</span>
                    <h3 class="text-xl font-bold font-heading text-slate-900">Conversions Volume - Litres & Calcul de Masse</h3>
                </div>
            </div>

            <div class="space-y-4 text-xs text-slate-700 leading-relaxed">
                <!-- EQUIVALENCES FONDAMENTALES -->
                <div class="bg-emerald-50 border-2 border-emerald-300 p-5 rounded-2xl space-y-3">
                    <h4 class="font-bold text-emerald-950 text-sm flex items-center gap-2">
                        <i class="fa-solid fa-droplet text-emerald-600"></i> Équivalences Fondamentales à Mémoriser Absolument !
                    </h4>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-3 text-center font-mono font-bold text-slate-900">
                        <div class="p-3 bg-white rounded-xl border border-emerald-200">
                            $1 \\text{ dm}^3 = 1 \\text{ Litre (L)}$
                        </div>
                        <div class="p-3 bg-white rounded-xl border border-emerald-200">
                            $1 \\text{ m}^3 = 1\\,000 \\text{ L} = 1 \\text{ kL}$
                        </div>
                        <div class="p-3 bg-white rounded-xl border border-emerald-200">
                            $1 \\text{ cm}^3 = 1 \\text{ mL}$
                        </div>
                    </div>
                </div>

                <!-- MASSE VOLUMIQUE -->
                <div class="p-5 bg-slate-50 border border-slate-200 rounded-2xl space-y-2">
                    <h4 class="font-bold text-slate-900 text-sm flex items-center gap-2">
                        <i class="fa-solid fa-weight-hanging text-sky-600"></i> Relation entre Volume et Masse : $m = \\rho \\times V$
                    </h4>
                    <p class="text-slate-700">
                        La <strong>masse volumique</strong> $\\rho$ (en $\\text{kg/dm}^3$ ou $\\text{g/cm}^3$) permet de calculer la masse $m$ d'un corps à partir de son volume $V$ : <br>
                        $\\mathbf{m = \\rho \\times V} \\qquad \\text{et} \\qquad \\mathbf{V = \\frac{m}{\\rho}}$ <br>
                        <em>Exemple : L'acier a une masse volumique $\\rho = 7,85 \\text{ kg/dm}^3$. Un volume de $10 \\text{ dm}^3$ d'acier a donc une masse $m = 7,85 \\times 10 = \\mathbf{78,5 \\text{ kg}}$.</em>
                    </p>
                </div>
            </div>
        </section>

        <!-- PARTIE 5 : SOLIDES COMPOSÉS PRO -->
        <section id="partie5" class="bg-white p-6 md:p-8 rounded-3xl border border-slate-200 card-shadow space-y-6">
            <div class="flex items-center gap-3 border-b border-slate-100 pb-4">
                <span class="w-10 h-10 bg-rose-100 text-rose-800 rounded-xl flex items-center justify-center font-bold text-lg">5</span>
                <div>
                    <span class="text-xs font-bold text-rose-600 uppercase tracking-wider">Partie 5 • Application Industrielle</span>
                    <h3 class="text-xl font-bold font-heading text-slate-900">Méthode de Calcul des Solides Composés & Percés</h3>
                </div>
            </div>

            <div class="bg-slate-900 text-white p-6 rounded-2xl space-y-4 text-xs shadow-lg border border-slate-800">
                <div class="flex items-center justify-between">
                    <span class="bg-emerald-500 text-slate-950 font-extrabold text-[10px] uppercase px-3 py-1 rounded-full">Cas Concret Chaudronnerie & Cuves</span>
                    <span class="text-slate-400 text-xs font-medium">MP3D / TCI / REMI</span>
                </div>

                <h4 class="text-base font-bold font-heading text-emerald-400">Calcul du Volume d'un Réservoir Sous Pression (Cylindre + 2 Demi-Sphères)</h4>
                <p class="text-slate-300 leading-relaxed">
                    Un réservoir industriel est composé d'une partie centrale cylindrique de rayon $R = 0,5 \\text{ m}$ et de longueur $h = 2 \\text{ m}$, fermée à chaque extrémité par une demi-sphère de rayon $R = 0,5 \\text{ m}$. <br>
                    <em>1. Déterminer le volume total du réservoir. <br>
                    2. Exprimer sa capacité en Litres.</em>
                </p>

                <div class="bg-slate-800 p-4 rounded-xl border border-slate-700 space-y-2 font-mono text-slate-200">
                    <p><strong class="text-sky-400">Étape 1 : Volume du Cylindre :</strong> $V_{\\text{cyl}} = \\pi \\times 0,5^2 \\times 2 = 0,5 \\pi \\approx \\mathbf{1,5708 \\text{ m}^3}$.</p>
                    <p><strong class="text-sky-400">Étape 2 : Volume des 2 Demi-sphères (= 1 Sphère entière) :</strong> $V_{\\text{sph}} = \\frac{4}{3} \\pi \\times 0,5^3 \\approx \\mathbf{0,5236 \\text{ m}^3}$.</p>
                    <p><strong class="text-emerald-400">Étape 3 : Volume Total & Capacité :</strong> $V_{\\text{tot}} = 1,5708 + 0,5236 = \\mathbf{2,0944 \\text{ m}^3} = \\mathbf{2\\,094,4 \\text{ Litres}}$.</p>
                </div>
            </div>
        </section>

        <!-- AUTO-ÉVALUATION INTERACTIVE EN FIN DE COURS -->
        <section class="bg-white p-6 md:p-8 rounded-3xl border border-slate-200 card-shadow space-y-6">
            <div class="flex items-center gap-3 border-b border-slate-100 pb-4">
                <div class="w-10 h-10 bg-sky-100 text-sky-600 rounded-xl flex items-center justify-center font-bold">
                    <i class="fa-solid fa-check-double text-lg"></i>
                </div>
                <div>
                    <h3 class="text-xl font-bold text-slate-900">Auto-Évaluation Express (Testez vos réflexes)</h3>
                    <p class="text-xs text-slate-500 font-medium">Vérification immédiate des connaissances sur les volumes</p>
                </div>
            </div>

            <div class="space-y-4 text-xs">
                <!-- Q1 -->
                <div class="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                    <p class="font-bold text-slate-900">Question 1 : Combien de Litres contient un volume de $2,5 \\text{ m}^3$ ?</p>
                    <div class="flex flex-wrap gap-2">
                        <button onclick="alert('✅ Bravo ! 1 m^3 = 1000 L donc 2.5 m^3 = 2500 L.')" class="px-3 py-1.5 bg-white border border-slate-300 rounded-lg hover:bg-slate-100">A) 2 500 Litres</button>
                        <button onclick="alert('❌ Faux. 1 m^3 vaut 1000 dm^3 (Litres).')" class="px-3 py-1.5 bg-white border border-slate-300 rounded-lg hover:bg-slate-100">B) 250 Litres</button>
                    </div>
                </div>

                <!-- Q2 -->
                <div class="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                    <p class="font-bold text-slate-900">Question 2 : Quelle est la formule du volume d'un cône de révolution ?</p>
                    <div class="flex flex-wrap gap-2">
                        <button onclick="alert('✅ Bravo ! V = (1/3) * pi * R^2 * h.')" class="px-3 py-1.5 bg-white border border-slate-300 rounded-lg hover:bg-slate-100">A) V = (1/3) * π * R² * h</button>
                        <button onclick="alert('❌ Faux. Ça c\'est le volume du cylindre !')" class="px-3 py-1.5 bg-white border border-slate-300 rounded-lg hover:bg-slate-100">B) V = π * R² * h</button>
                    </div>
                </div>
            </div>
        </section>

    </main>

</body>
</html>`;

fs.writeFileSync(targetFile, htmlContent, 'utf8');
console.log('Successfully updated cours.html in geometrie-espace-volumes with ultra-rich content!');
