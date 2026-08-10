const fs = require('fs');
const path = require('path');

const baseDir = 'ressources/seconde/maths/geometrie-espace-volumes';

// =====================================================================
// 1. COURS.HTML (Ultra-détaillé, 5 schémas SVG, formules complètes)
// =====================================================================
const coursHtml = `<!DOCTYPE html>
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
                    <h3 class="text-xl font-bold font-heading text-slate-900">Règles de la Perspective Cavalière & Solides Usuels</h3>
                </div>
            </div>

            <div class="space-y-4 text-xs text-slate-700 leading-relaxed">
                <!-- ENCADRÉ DÉFINITION 1 -->
                <div class="bg-sky-50 border-l-4 border-sky-500 p-5 rounded-r-2xl space-y-2">
                    <h4 class="font-bold text-sky-900 text-sm flex items-center gap-2">
                        <i class="fa-solid fa-cube"></i> Définition & Règles Canoniques de la Perspective Cavalière
                    </h4>
                    <p class="text-slate-800">
                        La <strong>perspective cavalière</strong> est une technique de dessin permettant de représenter un solide tridimensionnel sur une surface plane en 2D. <br>
                        • <strong>La face avant :</strong> Dessinée en <strong>vraie grandeur</strong> (angles droits et longueurs conservés). <br>
                        • <strong>Les arêtes fuyantes :</strong> Dessinées obliques (angle $\\alpha \\approx 30^\\circ$ à $45^\\circ$), réduites d'un rapport $k \\approx 0,5$, et <strong>strictement parallèles entre elles</strong>. <br>
                        • <strong>Arêtes cachées :</strong> Représentées obligatoirement en <strong>traits pointillés rouges ou noirs</strong>.
                    </p>
                </div>

                <!-- GALERIE DES 4 SCHÉMAS SVG DES SOLIDES DE RÉFÉRENCE -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                    <!-- SVG 1 : PAVÉ DROIT -->
                    <div class="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-center space-y-2">
                        <span class="font-bold text-sky-800 text-xs uppercase">Figure 1. Pavé Droit (Parallélépipède)</span>
                        <div class="py-2 bg-white rounded-xl border border-slate-200">
                            <svg width="280" height="150" viewBox="0 0 280 150" class="mx-auto font-sans">
                                <rect x="50" y="50" width="120" height="70" fill="none" stroke="#0284c7" stroke-width="2.5"/>
                                <line x1="170" y1="50" x2="220" y2="20" stroke="#0284c7" stroke-width="2.5"/>
                                <line x1="170" y1="120" x2="220" y2="90" stroke="#0284c7" stroke-width="2.5"/>
                                <line x1="50" y1="50" x2="100" y2="20" stroke="#0284c7" stroke-width="2.5"/>
                                <line x1="100" y1="20" x2="220" y2="20" stroke="#0284c7" stroke-width="2.5"/>
                                <line x1="220" y1="20" x2="220" y2="90" stroke="#0284c7" stroke-width="2.5"/>
                                <line x1="50" y1="120" x2="100" y2="90" stroke="#ef4444" stroke-width="2" stroke-dasharray="4"/>
                                <line x1="100" y1="20" x2="100" y2="90" stroke="#ef4444" stroke-width="2" stroke-dasharray="4"/>
                                <line x1="100" y1="90" x2="220" y2="90" stroke="#ef4444" stroke-width="2" stroke-dasharray="4"/>
                                <text x="110" y="138" font-size="10" font-weight="bold" fill="#0284c7" text-anchor="middle">L</text>
                                <text x="40" y="85" font-size="10" font-weight="bold" fill="#0284c7" text-anchor="end">h</text>
                                <text x="200" y="112" font-size="10" font-weight="bold" fill="#ef4444" text-anchor="middle">l (fuyante)</text>
                            </svg>
                        </div>
                    </div>

                    <!-- SVG 2 : CYLINDRE DE RÉVOLUTION -->
                    <div class="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-center space-y-2">
                        <span class="font-bold text-emerald-800 text-xs uppercase">Figure 2. Cylindre de Révolution</span>
                        <div class="py-2 bg-white rounded-xl border border-slate-200">
                            <svg width="280" height="150" viewBox="0 0 280 150" class="mx-auto font-sans">
                                <ellipse cx="140" cy="30" rx="70" ry="18" fill="none" stroke="#059669" stroke-width="2.5"/>
                                <line x1="70" y1="30" x2="70" y2="120" stroke="#059669" stroke-width="2.5"/>
                                <line x1="210" y1="30" x2="210" y2="120" stroke="#059669" stroke-width="2.5"/>
                                <path d="M 70 120 A 70 18 0 0 0 210 120" fill="none" stroke="#059669" stroke-width="2.5"/>
                                <path d="M 70 120 A 70 18 0 0 1 210 120" fill="none" stroke="#ef4444" stroke-width="2" stroke-dasharray="4"/>
                                <line x1="140" y1="30" x2="210" y2="30" stroke="#059669" stroke-width="1.5" stroke-dasharray="2"/>
                                <text x="175" y="24" font-size="10" font-weight="bold" fill="#059669" text-anchor="middle">R</text>
                                <text x="60" y="75" font-size="10" font-weight="bold" fill="#059669" text-anchor="end">h</text>
                            </svg>
                        </div>
                    </div>

                    <!-- SVG 3 : PYRAMIDE À BASE CARRÉE -->
                    <div class="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-center space-y-2">
                        <span class="font-bold text-amber-800 text-xs uppercase">Figure 3. Pyramide à Base Carrée</span>
                        <div class="py-2 bg-white rounded-xl border border-slate-200">
                            <svg width="280" height="150" viewBox="0 0 280 150" class="mx-auto font-sans">
                                <polygon points="60,110 160,130 220,110 120,90" fill="none" stroke="#d97706" stroke-width="1.5" stroke-dasharray="3"/>
                                <line x1="60" y1="110" x2="160" y2="130" stroke="#d97706" stroke-width="2.5"/>
                                <line x1="160" y1="130" x2="220" y2="110" stroke="#d97706" stroke-width="2.5"/>
                                <line x1="60" y1="110" x2="140" y2="20" stroke="#d97706" stroke-width="2.5"/>
                                <line x1="160" y1="130" x2="140" y2="20" stroke="#d97706" stroke-width="2.5"/>
                                <line x1="220" y1="110" x2="140" y2="20" stroke="#d97706" stroke-width="2.5"/>
                                <line x1="120" y1="90" x2="140" y2="20" stroke="#ef4444" stroke-width="2" stroke-dasharray="4"/>
                                <line x1="140" y1="20" x2="140" y2="110" stroke="#7c3aed" stroke-width="1.5" stroke-dasharray="3"/>
                                <text x="148" y="65" font-size="10" font-weight="bold" fill="#7c3aed">h</text>
                            </svg>
                        </div>
                    </div>

                    <!-- SVG 4 : CÔNE DE RÉVOLUTION -->
                    <div class="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-center space-y-2">
                        <span class="font-bold text-purple-800 text-xs uppercase">Figure 4. Cône de Révolution</span>
                        <div class="py-2 bg-white rounded-xl border border-slate-200">
                            <svg width="280" height="150" viewBox="0 0 280 150" class="mx-auto font-sans">
                                <line x1="70" y1="110" x2="140" y2="20" stroke="#7c3aed" stroke-width="2.5"/>
                                <line x1="210" y1="110" x2="140" y2="20" stroke="#7c3aed" stroke-width="2.5"/>
                                <path d="M 70 110 A 70 18 0 0 0 210 110" fill="none" stroke="#7c3aed" stroke-width="2.5"/>
                                <path d="M 70 110 A 70 18 0 0 1 210 110" fill="none" stroke="#ef4444" stroke-width="2" stroke-dasharray="4"/>
                                <line x1="140" y1="20" x2="140" y2="110" stroke="#7c3aed" stroke-width="1.5" stroke-dasharray="3"/>
                                <line x1="140" y1="110" x2="210" y2="110" stroke="#7c3aed" stroke-width="1.5" stroke-dasharray="3"/>
                                <text x="180" y="60" font-size="10" font-weight="bold" fill="#7c3aed">Génératrice a</text>
                                <text x="175" y="123" font-size="10" font-weight="bold" fill="#7c3aed">R</text>
                            </svg>
                        </div>
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

fs.writeFileSync(path.join(baseDir, 'cours.html'), coursHtml, 'utf8');
console.log('Successfully wrote ultra-rich cours.html');

// =====================================================================
// 2. ACTIVITES.HTML (3 Scénarios Industriels avec 5 questions guidées chacun)
// =====================================================================
const activitesHtml = `<!DOCTYPE html>
<html lang="fr" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Activités d'Investigation Pro - Géométrie & Volumes (Seconde Pro)</title>
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
                <div class="w-10 h-10 bg-emerald-500/20 border border-emerald-400/30 text-emerald-400 rounded-xl flex items-center justify-center font-bold">
                    <i class="fa-solid fa-lightbulb text-lg"></i>
                </div>
                <div>
                    <span class="text-xs font-bold tracking-widest uppercase text-emerald-400">Séquence Seconde Pro • Mathématiques</span>
                    <h1 class="text-xl font-bold font-heading">Géométrie de l'Espace & Volumes</h1>
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

        <!-- ENTÊTE DE SECTION D'ACTIVITÉS PRO -->
        <div class="bg-slate-900 text-white p-6 md:p-8 rounded-3xl shadow-xl border border-slate-800 space-y-4">
            <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div>
                    <div class="flex items-center gap-2 mb-2">
                        <span class="bg-emerald-500 text-slate-950 text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">Démarche d'Investigation</span>
                        <span class="bg-slate-800 text-slate-300 text-xs font-semibold px-3 py-1 rounded-full border border-slate-700">Seconde Pro</span>
                    </div>
                    <h2 class="text-3xl font-extrabold font-heading text-white">Scénarios Professionnels : Volumes & Surfaçage</h2>
                    <p class="text-sm text-slate-300 max-w-2xl">Trois enquêtes techniques sur la cuve inox de stockage, la cylindrée d'un moteur thermique et le dimensionnement de béton de fondation.</p>
                </div>

                <button onclick="window.print()" class="no-print bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs px-5 py-3 rounded-xl shadow-md transition-colors flex items-center gap-2">
                    <i class="fa-solid fa-print"></i> Imprimer la Fiche PDF
                </button>
            </div>
        </div>

        <!-- ACTIVITÉ 1 : CHAUDRONNERIE ET MP3D -->
        <section class="bg-white p-6 md:p-8 rounded-3xl border border-slate-200 card-shadow space-y-6">
            <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-4">
                <div class="flex items-center gap-3">
                    <div class="w-10 h-10 bg-emerald-100 text-emerald-700 rounded-xl flex items-center justify-center font-bold text-lg">1</div>
                    <div>
                        <span class="text-xs font-bold text-emerald-600 uppercase tracking-wider">Activité 1 • Chaudronnerie & Tuyauterie (MP3D / TCI)</span>
                        <h3 class="text-xl font-bold font-heading text-slate-900">Dimensionnement d'une Cuve Cylindrique à Dôme Conique</h3>
                    </div>
                </div>
                <div class="flex items-center gap-1">
                    <span class="px-2.5 py-1 bg-sky-100 text-sky-800 text-[11px] font-bold rounded-full">C1 S'approprier</span>
                    <span class="px-2.5 py-1 bg-amber-100 text-amber-800 text-[11px] font-bold rounded-full">C2 Analyser</span>
                    <span class="px-2.5 py-1 bg-emerald-100 text-emerald-800 text-[11px] font-bold rounded-full">C3 Réaliser</span>
                </div>
            </div>

            <!-- Contextualisation Pro & Schéma SVG -->
            <div class="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-4 text-xs leading-relaxed">
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                    <div class="md:col-span-2 space-y-2">
                        <h4 class="font-bold text-slate-900 text-sm">Mise en Situation :</h4>
                        <p class="text-slate-700">
                            Un technicien chaudronnier doit fabriquer un réservoir d'huile constitué d'un cylindre vertical de rayon $R = 1,2 \\text{ m}$ et de hauteur $h_1 = 3 \\text{ m}$, surmonté d'un dôme conique de même rayon $R = 1,2 \\text{ m}$ et de hauteur $h_2 = 1,5 \\text{ m}$. <br>
                            • Masse volumique de l'huile : $\\rho = 0,9 \\text{ kg/L}$. <br>
                            • Prix de la tôle inox : $45 \\text{ €/m}^2$.
                        </p>
                    </div>
                    <!-- SVG DE LA CUVE -->
                    <div class="bg-white p-3 rounded-xl border border-slate-200 text-center">
                        <svg width="160" height="140" viewBox="0 0 160 140" class="mx-auto font-sans">
                            <!-- Dôme conique -->
                            <polygon points="80,10 30,50 130,50" fill="none" stroke="#059669" stroke-width="2"/>
                            <!-- Cylindre -->
                            <rect x="30" y="50" width="100" height="70" fill="none" stroke="#059669" stroke-width="2"/>
                            <ellipse cx="80" cy="120" rx="50" ry="10" fill="none" stroke="#059669" stroke-width="2"/>
                            <!-- Annotations -->
                            <text x="80" y="38" font-size="9" font-weight="bold" fill="#059669" text-anchor="middle">h2 = 1,5m</text>
                            <text x="138" y="85" font-size="9" font-weight="bold" fill="#059669">h1 = 3m</text>
                            <text x="80" y="112" font-size="9" font-weight="bold" fill="#059669" text-anchor="middle">R = 1,2m</text>
                        </svg>
                    </div>
                </div>
            </div>

            <!-- Questions Guidées -->
            <div class="space-y-4 text-xs">
                <h4 class="font-bold text-slate-900 text-sm">Questions d'Investigation :</h4>

                <div class="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                    <p class="font-semibold text-slate-900">1. Calculer le volume de la partie cylindrique $V_1$ en $\\text{m}^3$.</p>
                    <details class="text-slate-600 bg-white p-3 rounded-lg border border-slate-200">
                        <summary class="cursor-pointer font-bold text-emerald-700">Consulter le corrigé</summary>
                        <p class="mt-2 text-slate-800 font-mono">$V_1 = \\pi \\times 1,2^2 \\times 3 = 4,32 \\pi \\approx \\mathbf{13,572 \\text{ m}^3}$.</p>
                    </details>
                </div>

                <div class="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                    <p class="font-semibold text-slate-900">2. Calculer le volume de la partie conique $V_2$ en $\\text{m}^3$.</p>
                    <details class="text-slate-600 bg-white p-3 rounded-lg border border-slate-200">
                        <summary class="cursor-pointer font-bold text-emerald-700">Consulter le corrigé</summary>
                        <p class="mt-2 text-slate-800 font-mono">$V_2 = \\frac{1}{3} \\pi \\times 1,2^2 \\times 1,5 = 0,72 \\pi \\approx \\mathbf{2,262 \\text{ m}^3}$.</p>
                    </details>
                </div>

                <div class="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                    <p class="font-semibold text-slate-900">3. En déduire la capacité totale de la cuve en Litres.</p>
                    <details class="text-slate-600 bg-white p-3 rounded-lg border border-slate-200">
                        <summary class="cursor-pointer font-bold text-emerald-700">Consulter le corrigé</summary>
                        <p class="mt-2 text-slate-800 font-mono">$V_{\\text{tot}} = 13,572 + 2,262 = \\mathbf{15,834 \\text{ m}^3} = \\mathbf{15\\,834 \\text{ Litres}}$.</p>
                    </details>
                </div>

                <div class="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                    <p class="font-semibold text-slate-900">4. Calculer la masse totale d'huile lorsque la cuve est totalement remplie.</p>
                    <details class="text-slate-600 bg-white p-3 rounded-lg border border-slate-200">
                        <summary class="cursor-pointer font-bold text-emerald-700">Consulter le corrigé</summary>
                        <p class="mt-2 text-slate-800 font-mono">$m = \\rho \\times V = 0,9 \\times 15\\,834 = \\mathbf{14\\,250,6 \\text{ kg}} = \\mathbf{14,25 \\text{ tonnes}}$.</p>
                    </details>
                </div>

                <div class="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                    <p class="font-semibold text-slate-900">5. Calculer la génératrice $a$ du cône ($a = \\sqrt{R^2 + h_2^2}$), puis l'aire latérale totale de tôle inox à découper.</p>
                    <details class="text-slate-600 bg-white p-3 rounded-lg border border-slate-200">
                        <summary class="cursor-pointer font-bold text-emerald-700">Consulter le corrigé</summary>
                        <div class="mt-2 space-y-1 text-slate-800 font-mono">
                            <p>• Génératrice : $a = \\sqrt{1,2^2 + 1,5^2} = \\sqrt{1,44 + 2,25} = \\sqrt{3,69} \\approx \\mathbf{1,921 \\text{ m}}$.</p>
                            <p>• Aire latérale Cylindre : $A_1 = 2\\pi \\times 1,2 \\times 3 = 7,2\\pi \\approx \\mathbf{22,619 \\text{ m}^2}$.</p>
                            <p>• Aire latérale Cône : $A_2 = \\pi \\times 1,2 \\times 1,921 \\approx \\mathbf{7,242 \\text{ m}^2}$.</p>
                            <p>• Aire totale : $A_{\\text{tot}} = 22,619 + 7,242 = \\mathbf{29,861 \\text{ m}^2}$.</p>
                        </div>
                    </details>
                </div>
            </div>
        </section>

        <!-- ACTIVITÉ 2 : AUTOMOBILE ET MAINTENANCE -->
        <section class="bg-white p-6 md:p-8 rounded-3xl border border-slate-200 card-shadow space-y-6">
            <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-4">
                <div class="flex items-center gap-3">
                    <div class="w-10 h-10 bg-amber-100 text-amber-700 rounded-xl flex items-center justify-center font-bold text-lg">2</div>
                    <div>
                        <span class="text-xs font-bold text-amber-600 uppercase tracking-wider">Activité 2 • Automobile & Maintenance (MVM / REMI)</span>
                        <h3 class="text-xl font-bold font-heading text-slate-900">Calcul de Cylindrée d'un Moteur 4 Cylindres en Ligne</h3>
                    </div>
                </div>
                <div class="flex items-center gap-1">
                    <span class="px-2.5 py-1 bg-amber-100 text-amber-800 text-[11px] font-bold rounded-full">C2 Analyser</span>
                    <span class="px-2.5 py-1 bg-emerald-100 text-emerald-800 text-[11px] font-bold rounded-full">C3 Réaliser</span>
                </div>
            </div>

            <!-- Contextualisation Pro -->
            <div class="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-3 text-xs leading-relaxed">
                <div class="flex items-start gap-3">
                    <i class="fa-solid fa-gauge-high text-2xl text-amber-600 mt-1"></i>
                    <div>
                        <h4 class="font-bold text-slate-900 text-sm">Mise en Situation :</h4>
                        <p class="text-slate-700 mt-1">
                            Un mécanicien analyse la fiche technique d'un moteur 4 cylindres : <br>
                            • <strong>Alésage (diamètre du cylindre) :</strong> $D = 82 \\text{ mm} = 8,2 \\text{ cm}$. <br>
                            • <strong>Course (hauteur de déplacement du piston) :</strong> $L = 93,5 \\text{ mm} = 9,35 \\text{ cm}$.
                        </p>
                    </div>
                </div>
            </div>

            <!-- Questions Guidées -->
            <div class="space-y-4 text-xs">
                <h4 class="font-bold text-slate-900 text-sm">Questions d'Investigation :</h4>

                <div class="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                    <p class="font-semibold text-slate-900">1. Calculer le rayon $R$ du piston en cm.</p>
                    <details class="text-slate-600 bg-white p-3 rounded-lg border border-slate-200">
                        <summary class="cursor-pointer font-bold text-amber-700">Afficher la réponse</summary>
                        <p class="mt-2 text-slate-800 font-mono">$R = \\frac{D}{2} = \\frac{8,2}{2} = \\mathbf{4,1 \\text{ cm}}$.</p>
                    </details>
                </div>

                <div class="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                    <p class="font-semibold text-slate-900">2. Calculer le volume unitaire d'un cylindre $V_{\\text{unit}}$ en $\\text{cm}^3$.</p>
                    <details class="text-slate-600 bg-white p-3 rounded-lg border border-slate-200">
                        <summary class="cursor-pointer font-bold text-amber-700">Afficher la réponse</summary>
                        <p class="mt-2 text-slate-800 font-mono">$V_{\\text{unit}} = \\pi \\times 4,1^2 \\times 9,35 \\approx \\mathbf{493,8 \\text{ cm}^3}$.</p>
                    </details>
                </div>

                <div class="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                    <p class="font-semibold text-slate-900">3. Calculer la cylindrée totale du moteur en $\\text{cm}^3$ puis la convertir en Litres.</p>
                    <details class="text-slate-600 bg-white p-3 rounded-lg border border-slate-200">
                        <summary class="cursor-pointer font-bold text-amber-700">Afficher la réponse</summary>
                        <p class="mt-2 text-slate-800 font-mono">$V_{\\text{tot}} = 493,8 \\times 4 = \\mathbf{1\\,975,2 \\text{ cm}^3} \\approx \\mathbf{2,0 \\text{ Litres}}$ (Appellation commerciale Moteur 2.0L).</p>
                    </details>
                </div>
            </div>
        </section>

        <!-- ACTIVITÉ 3 : BTP ET GÉNIE CIVIL -->
        <section class="bg-white p-6 md:p-8 rounded-3xl border border-slate-200 card-shadow space-y-6">
            <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-4">
                <div class="flex items-center gap-3">
                    <div class="w-10 h-10 bg-purple-100 text-purple-700 rounded-xl flex items-center justify-center font-bold text-lg">3</div>
                    <div>
                        <span class="text-xs font-bold text-purple-600 uppercase tracking-wider">Activité 3 • BTP & Génie Civil</span>
                        <h3 class="text-xl font-bold font-heading text-slate-900">Volume de Béton Armé pour Fondations de Piliers & Dalle</h3>
                    </div>
                </div>
                <div class="flex items-center gap-1">
                    <span class="px-2.5 py-1 bg-sky-100 text-sky-800 text-[11px] font-bold rounded-full">C1 S'approprier</span>
                    <span class="px-2.5 py-1 bg-purple-100 text-purple-800 text-[11px] font-bold rounded-full">C4 Valider</span>
                </div>
            </div>

            <!-- Contextualisation Pro -->
            <div class="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-3 text-xs leading-relaxed">
                <div class="flex items-start gap-3">
                    <i class="fa-solid fa-trowel-bricks text-2xl text-purple-600 mt-1"></i>
                    <div>
                        <h4 class="font-bold text-slate-900 text-sm">Mise en Situation :</h4>
                        <p class="text-slate-700 mt-1">
                            Un chef de chantier doit commander du béton prêt à l'emploi pour couler 8 piliers prismatiques de section carrée de côté $c = 0,4 \\text{ m}$ et de hauteur $h = 3 \\text{ m}$, ainsi qu'une dalle rectangulaire de $12 \\text{ m} \\times 8 \\text{ m}$ sur une épaisseur de $0,15 \\text{ m}$. <br>
                            • Capacité d'un camion malaxeur (toupie) : $7 \\text{ m}^3$. <br>
                            • Prix du béton prêt à l'emploi : $110 \\text{ €/m}^3$.
                        </p>
                    </div>
                </div>
            </div>

            <!-- Questions Guidées -->
            <div class="space-y-4 text-xs">
                <h4 class="font-bold text-slate-900 text-sm">Questions d'Investigation :</h4>

                <div class="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                    <p class="font-semibold text-slate-900">1. Calculer le volume de béton nécessaire pour les 8 piliers.</p>
                    <details class="text-slate-600 bg-white p-3 rounded-lg border border-slate-200">
                        <summary class="cursor-pointer font-bold text-purple-700">Afficher l'analyse</summary>
                        <p class="mt-2 text-slate-800 font-mono">$V_{\\text{piliers}} = 8 \\times (0,4 \\times 0,4 \\times 3) = 8 \\times 0,48 = \\mathbf{3,84 \\text{ m}^3}$.</p>
                    </details>
                </div>

                <div class="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                    <p class="font-semibold text-slate-900">2. Calculer le volume de béton nécessaire pour la dalle rectangulaire.</p>
                    <details class="text-slate-600 bg-white p-3 rounded-lg border border-slate-200">
                        <summary class="cursor-pointer font-bold text-purple-700">Afficher l'analyse</summary>
                        <p class="mt-2 text-slate-800 font-mono">$V_{\\text{dalle}} = 12 \\times 8 \\times 0,15 = \\mathbf{14,4 \\text{ m}^3}$.</p>
                    </details>
                </div>

                <div class="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                    <p class="font-semibold text-slate-900">3. Calculer le volume total de béton et le nombre de camions malaxeurs à commander.</p>
                    <details class="text-slate-600 bg-white p-3 rounded-lg border border-slate-200">
                        <summary class="cursor-pointer font-bold text-purple-700">Afficher l'analyse</summary>
                        <div class="mt-2 space-y-1 text-slate-800 font-mono">
                            <p>• Volume total : $3,84 + 14,4 = \\mathbf{18,24 \\text{ m}^3}$.</p>
                            <p>• Nombre de camions : $\\frac{18,24}{7} \\approx 2,6 \\implies$ **3 camions malaxeurs**.</p>
                        </div>
                    </details>
                </div>

                <div class="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                    <p class="font-semibold text-slate-900">4. Calculer le coût total de la commande de béton.</p>
                    <details class="text-slate-600 bg-white p-3 rounded-lg border border-slate-200">
                        <summary class="cursor-pointer font-bold text-purple-700">Afficher l'analyse</summary>
                        <p class="mt-2 text-slate-800 font-mono">Coût : $18,24 \\times 110 = \\mathbf{2\\,006,40 \\text{ €}}$.</p>
                    </details>
                </div>
            </div>
        </section>

    </main>

</body>
</html>`;

fs.writeFileSync(path.join(baseDir, 'activites.html'), activitesHtml, 'utf8');
console.log('Successfully wrote ultra-rich activites.html');
