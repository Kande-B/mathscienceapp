const fs = require('fs');
const path = require('path');

const targetDir = path.join(__dirname, 'ressources', 'seconde', 'maths', 'pourcentages-proportions');

const tdHtml = `<!DOCTYPE html>
<html lang="fr" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fiche de TD - Pourcentages, Proportions & Évolutions (2nde Pro)</title>
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
                    <span class="text-xs font-bold tracking-widest uppercase text-indigo-400">Séquence 2 • Seconde Professionnelle Mathématiques</span>
                    <h1 class="text-xl font-bold font-heading">Pourcentages, Proportions & Taux d'Évolution</h1>
                </div>
            </div>
            <!-- Navigation de la Séquence 2nde Pro Maths -->
            <nav class="flex flex-wrap items-center gap-1.5 text-xs font-bold">
                <a href="automatismes.html" class="px-3 py-2 rounded-lg bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white transition-colors flex items-center gap-1.5"><i class="fa-solid fa-bolt text-yellow-400"></i> Automatismes</a>
                <a href="activites.html" class="px-3 py-2 rounded-lg bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white transition-colors flex items-center gap-1.5"><i class="fa-solid fa-lightbulb text-emerald-400"></i> Activités</a>
                <a href="cours.html" class="px-3 py-2 rounded-lg bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white transition-colors flex items-center gap-1.5"><i class="fa-solid fa-book-open text-sky-400"></i> Cours</a>
                <a href="td.html" class="px-3 py-2 rounded-lg bg-indigo-600 text-white font-extrabold shadow-sm flex items-center gap-1.5"><i class="fa-solid fa-dumbbell"></i> TD & Exercices</a>
                <a href="tice.html" class="px-3 py-2 rounded-lg bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white transition-colors flex items-center gap-1.5"><i class="fa-solid fa-laptop-code text-purple-400"></i> TICE Excel</a>
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
                <div class="p-2.5 bg-amber-50 border border-amber-200 rounded-xl text-center"><span class="text-amber-700 block font-extrabold">C1 - S'approprier</span> Extraire les données & taux</div>
                <div class="p-2.5 bg-blue-50 border border-blue-200 rounded-xl text-center"><span class="text-blue-700 block font-extrabold">C2 - Analyser / Modéliser</span> Exprimer en CM ou proportion</div>
                <div class="p-2.5 bg-emerald-50 border border-emerald-200 rounded-xl text-center"><span class="text-emerald-700 block font-extrabold">C3 - Réaliser</span> Calculer V1, V0 ou t%</div>
                <div class="p-2.5 bg-purple-50 border border-purple-200 rounded-xl text-center"><span class="text-purple-700 block font-extrabold">C4 - Valider</span> Contrôler la cohérence du CM</div>
                <div class="p-2.5 bg-rose-50 border border-rose-200 rounded-xl text-center"><span class="text-rose-700 block font-extrabold">C5 - Communiquer</span> Rédiger la note technico-commerciale</div>
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
                        Commerce : Remise Commerciale de 20% & TVA à 20%
                    </h3>
                    <span class="bg-emerald-100 text-emerald-800 text-xs font-extrabold px-3 py-1 rounded-full">Réaliser (C3)</span>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                    <div class="md:col-span-2 text-xs text-slate-700 space-y-3 leading-relaxed">
                        <p>Un outillage professionnel est affiché à $150{,}00\\text{ € HT}$. Le magasin accorde une remise exceptionnelle de $20\\%$. Ensuite, la TVA de $20\\%$ s'applique sur le prix remisé.</p>
                        <p class="font-bold text-slate-900">1. Calculer le prix après remise $V_{\\text{remise}}$.<br>2. Calculer le prix final $V_{\\text{TTC}}$ et le coefficient multiplicateur global $CM_{\\text{global}}$.</p>
                    </div>
                    <div class="p-3 bg-slate-50 border border-slate-200 rounded-2xl text-center overflow-x-auto">
                        <svg width="220" height="110" viewBox="0 0 220 110" class="mx-auto font-sans">
                            <rect x="10" y="35" width="55" height="40" fill="#ffffff" stroke="#0284c7" stroke-width="2" rx="6"/>
                            <text x="37" y="58" font-size="9" font-weight="bold" fill="#0f172a" text-anchor="middle">150 € HT</text>
                            <line x1="70" y1="55" x2="95" y2="55" stroke="#f59e0b" stroke-width="2"/>
                            <text x="82" y="45" font-size="8" font-weight="bold" fill="#f59e0b" text-anchor="middle">-20%</text>
                            <rect x="100" y="35" width="55" height="40" fill="#ffffff" stroke="#f59e0b" stroke-width="2" rx="6"/>
                            <text x="127" y="58" font-size="9" font-weight="bold" fill="#0f172a" text-anchor="middle">120 €</text>
                            <line x1="160" y1="55" x2="185" y2="55" stroke="#10b981" stroke-width="2"/>
                            <text x="172" y="45" font-size="8" font-weight="bold" fill="#10b981" text-anchor="middle">+20%</text>
                            <rect x="190" y="35" width="25" height="40" fill="#10b981" rx="4"/>
                            <text x="202" y="58" font-size="10" font-weight="bold" fill="#ffffff" text-anchor="middle">?</text>
                        </svg>
                    </div>
                </div>

                <details class="bg-slate-50 border border-slate-200 rounded-2xl p-4 text-xs print-correction">
                    <summary class="font-bold text-slate-900 cursor-pointer hover:text-indigo-600 transition flex items-center gap-2">
                        <i class="fa-solid fa-circle-check text-emerald-500"></i> Voir la démonstration détaillée de l'Exercice 1
                    </summary>
                    <div class="mt-3 pt-3 border-t border-slate-200 space-y-1 font-mono text-slate-700">
                        <p>1. <strong>Prix remisé :</strong> $CM_1 = 1 - 0{,}20 = 0{,}80 \\implies V_{\\text{remise}} = 150 \\times 0{,}80 = \\mathbf{120{,}00\\text{ €}}$.</p>
                        <p>2. <strong>Prix final TTC :</strong> $CM_2 = 1 + 0{,}20 = 1{,}20 \\implies V_{\\text{TTC}} = 120 \\times 1{,}20 = \\mathbf{144{,}00\\text{ €}}$.</p>
                        <p>3. <strong>$CM_{\\text{global}}$ :</strong> $0{,}80 \\times 1{,}20 = \\mathbf{0{,}96}$ (soit une baisse globale de $-4\\%$ par rapport au prix HT initial !).</p>
                    </div>
                </details>
            </div>

            <!-- EXERCICE 2 -->
            <div class="bg-white rounded-3xl border border-slate-200 p-6 md:p-8 card-shadow print-card space-y-4">
                <div class="flex items-center justify-between border-b border-slate-100 pb-3">
                    <h3 class="font-bold text-slate-900 text-base flex items-center gap-2">
                        <span class="w-8 h-8 bg-indigo-100 text-indigo-800 rounded-xl flex items-center justify-center font-bold text-xs">Ex 2</span>
                        Industrie : Perte de Matière & Chute d'Usinage (Métallurgie)
                    </h3>
                    <span class="bg-blue-100 text-blue-800 text-xs font-extrabold px-3 py-1 rounded-full">Modéliser (C2)</span>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                    <div class="md:col-span-2 text-xs text-slate-700 space-y-3 leading-relaxed">
                        <p>Un bloc brut d'acier pèse $M_0 = 45{,}00\\text{ kg}$. Lors du tournage et du fraisage, la pièce subit une perte de matière (chutes d'usinage et copeaux) de $12\\%$.</p>
                        <p class="font-bold text-slate-900">1. Calculer la masse de la pièce finie usinée $M_1$.<br>2. Calculer la masse exacte des copeaux récupérés pour le recyclage.</p>
                    </div>
                    <div class="p-3 bg-slate-50 border border-slate-200 rounded-2xl text-center overflow-x-auto">
                        <svg width="220" height="110" viewBox="0 0 220 110" class="mx-auto font-sans">
                            <rect x="20" y="30" width="180" height="50" fill="#94a3b8" rx="6"/>
                            <rect x="50" y="40" width="120" height="30" fill="#0284c7" rx="4"/>
                            <text x="110" y="60" font-size="10" font-weight="bold" fill="#ffffff" text-anchor="middle">Pièce usinée M1 = ?</text>
                            <text x="110" y="22" font-size="9" font-weight="bold" fill="#ef4444" text-anchor="middle">Perte copeaux = 12%</text>
                        </svg>
                    </div>
                </div>

                <details class="bg-slate-50 border border-slate-200 rounded-2xl p-4 text-xs print-correction">
                    <summary class="font-bold text-slate-900 cursor-pointer hover:text-indigo-600 transition flex items-center gap-2">
                        <i class="fa-solid fa-circle-check text-emerald-500"></i> Voir la démonstration détaillée de l'Exercice 2
                    </summary>
                    <div class="mt-3 pt-3 border-t border-slate-200 space-y-1 font-mono text-slate-700">
                        <p>1. <strong>Masse finie :</strong> $CM = 1 - 0{,}12 = 0{,}88 \\implies M_1 = 45 \\times 0{,}88 = \\mathbf{39{,}60\\text{ kg}}$.</p>
                        <p>2. <strong>Masse des copeaux :</strong> $45 - 39{,}60 = \\mathbf{5{,}40\\text{ kg}}$ (ou $45 \\times 0{,}12 = 5{,}40\\text{ kg}$).</p>
                    </div>
                </details>
            </div>

            <!-- EXERCICE 3 -->
            <div class="bg-white rounded-3xl border border-slate-200 p-6 md:p-8 card-shadow print-card space-y-4">
                <div class="flex items-center justify-between border-b border-slate-100 pb-3">
                    <h3 class="font-bold text-slate-900 text-base flex items-center gap-2">
                        <span class="w-8 h-8 bg-indigo-100 text-indigo-800 rounded-xl flex items-center justify-center font-bold text-xs">Ex 3</span>
                        Agronomie : Proportions Étagées dans un Élevage Laitier
                    </h3>
                    <span class="bg-amber-100 text-amber-800 text-xs font-extrabold px-3 py-1 rounded-full">S'approprier (C1)</span>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                    <div class="md:col-span-2 text-xs text-slate-700 space-y-3 leading-relaxed">
                        <p>Dans un élevage bovin de $N = 250$ têtes, $60\\%$ des animaux sont des vaches laitières Prim'Holstein ($p_1 = 0{,}60$). Parmi ces laitières, $45\\%$ sont certifiées Agriculture Biologique ($p_2 = 0{,}45$).</p>
                        <p class="font-bold text-slate-900">1. Calculer la proportion globale $p$ de vaches laitières bio dans tout l'élevage.<br>2. Calculer le nombre effectif de vaches laitières bio.</p>
                    </div>
                    <div class="p-3 bg-slate-50 border border-slate-200 rounded-2xl text-center overflow-x-auto">
                        <svg width="220" height="110" viewBox="0 0 220 110" class="mx-auto font-sans">
                            <rect x="10" y="10" width="200" height="90" fill="#1e293b" rx="8"/>
                            <rect x="25" y="25" width="150" height="60" fill="#0284c7" fill-opacity="0.4" stroke="#38bdf8" rx="6"/>
                            <rect x="40" y="40" width="100" height="35" fill="#10b981" rx="4"/>
                            <text x="90" y="62" font-size="9" font-weight="bold" fill="#ffffff" text-anchor="middle">Laitières Bio (p = ?)</text>
                        </svg>
                    </div>
                </div>

                <details class="bg-slate-50 border border-slate-200 rounded-2xl p-4 text-xs print-correction">
                    <summary class="font-bold text-slate-900 cursor-pointer hover:text-indigo-600 transition flex items-center gap-2">
                        <i class="fa-solid fa-circle-check text-emerald-500"></i> Voir la démonstration détaillée de l'Exercice 3
                    </summary>
                    <div class="mt-3 pt-3 border-t border-slate-200 space-y-1 font-mono text-slate-700">
                        <p>1. <strong>Proportion globale :</strong> $p = p_1 \\times p_2 = 0{,}60 \\times 0{,}45 = \\mathbf{0{,}27}$ (soit **$27\\%$** de l'élevage).</p>
                        <p>2. <strong>Nombre effectif :</strong> $250 \\times 0{,}27 = \\mathbf{67{,}5} \\implies \\mathbf{67\\text{ ou } 68\\text{ vaches}}$.</p>
                    </div>
                </details>
            </div>

            <!-- EXERCICE 4 -->
            <div class="bg-white rounded-3xl border border-slate-200 p-6 md:p-8 card-shadow print-card space-y-4">
                <div class="flex items-center justify-between border-b border-slate-100 pb-3">
                    <h3 class="font-bold text-slate-900 text-base flex items-center gap-2">
                        <span class="w-8 h-8 bg-indigo-100 text-indigo-800 rounded-xl flex items-center justify-center font-bold text-xs">Ex 4</span>
                        BTP : Variation du Prix des Matériaux (Haussse & Remise)
                    </h3>
                    <span class="bg-purple-100 text-purple-800 text-xs font-extrabold px-3 py-1 rounded-full">Analyser (C2)</span>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                    <div class="md:col-span-2 text-xs text-slate-700 space-y-3 leading-relaxed">
                        <p>Le prix du m³ de béton subit une hausse de $+15\\%$ en raison du coût des matières premières. L'entreprise de maçonnerie négocie ensuite une remise pro de $-8\\%$ sur la facture globale.</p>
                        <p class="font-bold text-slate-900">Calculer le $CM_{\\text{global}}$ et le pourcentage de variation net final.</p>
                    </div>
                    <div class="p-3 bg-slate-50 border border-slate-200 rounded-2xl text-center overflow-x-auto">
                        <svg width="220" height="110" viewBox="0 0 220 110" class="mx-auto font-sans">
                            <line x1="20" y1="80" x2="110" y2="30" stroke="#ef4444" stroke-width="3"/>
                            <line x1="110" y1="30" x2="200" y2="60" stroke="#10b981" stroke-width="3"/>
                            <text x="60" y="45" font-size="9" font-weight="bold" fill="#ef4444">+15%</text>
                            <text x="165" y="40" font-size="9" font-weight="bold" fill="#10b981">-8%</text>
                        </svg>
                    </div>
                </div>

                <details class="bg-slate-50 border border-slate-200 rounded-2xl p-4 text-xs print-correction">
                    <summary class="font-bold text-slate-900 cursor-pointer hover:text-indigo-600 transition flex items-center gap-2">
                        <i class="fa-solid fa-circle-check text-emerald-500"></i> Voir la démonstration détaillée de l'Exercice 4
                    </summary>
                    <div class="mt-3 pt-3 border-t border-slate-200 space-y-1 font-mono text-slate-700">
                        <p>• $CM_1 = 1{,}15$ et $CM_2 = 0{,}92$.</p>
                        <p>• $CM_{\\text{global}} = 1{,}15 \\times 0{,}92 = \\mathbf{1{,}058}$.</p>
                        <p>• Taux net : $(1{,}058 - 1) \\times 100 = \\mathbf{+5{,}8\\%}$ de hausse réelle.</p>
                    </div>
                </details>
            </div>

            <!-- EXERCICE 5 -->
            <div class="bg-white rounded-3xl border border-slate-200 p-6 md:p-8 card-shadow print-card space-y-4">
                <div class="flex items-center justify-between border-b border-slate-100 pb-3">
                    <h3 class="font-bold text-slate-900 text-base flex items-center gap-2">
                        <span class="w-8 h-8 bg-indigo-100 text-indigo-800 rounded-xl flex items-center justify-center font-bold text-xs">Ex 5</span>
                        Automobile : Décote Annuelle d'un Véhicule Utilitaire
                    </h3>
                    <span class="bg-rose-100 text-rose-800 text-xs font-extrabold px-3 py-1 rounded-full">Valider (C4)</span>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                    <div class="md:col-span-2 text-xs text-slate-700 space-y-3 leading-relaxed">
                        <p>Un fourgon de société acheté neuf $28\\,000\\text{ €}$ perd $18\\%$ de sa valeur chaque année pendant 2 ans consécutifs.</p>
                        <p class="font-bold text-slate-900">Calculer la valeur résiduelle du véhicule au bout de 2 ans.</p>
                    </div>
                    <div class="p-3 bg-slate-50 border border-slate-200 rounded-2xl text-center overflow-x-auto">
                        <svg width="220" height="110" viewBox="0 0 220 110" class="mx-auto font-sans">
                            <rect x="20" y="30" width="50" height="50" fill="#0284c7" rx="4"/>
                            <rect x="85" y="40" width="50" height="40" fill="#0284c7" fill-opacity="0.7" rx="4"/>
                            <rect x="150" y="50" width="50" height="30" fill="#0284c7" fill-opacity="0.4" rx="4"/>
                            <text x="45" y="95" font-size="8" font-weight="bold" fill="#64748b">Neuf</text>
                            <text x="110" y="95" font-size="8" font-weight="bold" fill="#64748b">An 1</text>
                            <text x="175" y="95" font-size="8" font-weight="bold" fill="#64748b">An 2 (?)</text>
                        </svg>
                    </div>
                </div>

                <details class="bg-slate-50 border border-slate-200 rounded-2xl p-4 text-xs print-correction">
                    <summary class="font-bold text-slate-900 cursor-pointer hover:text-indigo-600 transition flex items-center gap-2">
                        <i class="fa-solid fa-circle-check text-emerald-500"></i> Voir la démonstration détaillée de l'Exercice 5
                    </summary>
                    <div class="mt-3 pt-3 border-t border-slate-200 space-y-1 font-mono text-slate-700">
                        <p>• $CM = 1 - 0{,}18 = 0{,}82$.</p>
                        <p>• Valeur an 2 : $V_2 = 28\\,000 \\times (0{,}82)^2 = 28\\,000 \\times 0{,}6724 = \\mathbf{18\\,827{,}20\\text{ €}}$.</p>
                    </div>
                </details>
            </div>

            <!-- EXERCICE 6 -->
            <div class="bg-white rounded-3xl border border-slate-200 p-6 md:p-8 card-shadow print-card space-y-4">
                <div class="flex items-center justify-between border-b border-slate-100 pb-3">
                    <h3 class="font-bold text-slate-900 text-base flex items-center gap-2">
                        <span class="w-8 h-8 bg-indigo-100 text-indigo-800 rounded-xl flex items-center justify-center font-bold text-xs">Ex 6</span>
                        Facturation : Retrouver le Prix HT à partir du Prix TTC
                    </h3>
                    <span class="bg-emerald-100 text-emerald-800 text-xs font-extrabold px-3 py-1 rounded-full">Réaliser (C3)</span>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                    <div class="md:col-span-2 text-xs text-slate-700 space-y-3 leading-relaxed">
                        <p>Une facture TTC s'élève à $V_1 = 288{,}00\\text{ €}$ incluant une TVA de $20\\%$ ($CM = 1{,}20$).</p>
                        <p class="font-bold text-slate-900">Calculer le montant du prix hors taxe $V_0 = \\frac{V_1}{CM}$ ainsi que le montant exact de la TVA.</p>
                    </div>
                    <div class="p-3 bg-slate-50 border border-slate-200 rounded-2xl text-center overflow-x-auto">
                        <svg width="220" height="110" viewBox="0 0 220 110" class="mx-auto font-sans">
                            <rect x="20" y="35" width="80" height="40" fill="#10b981" rx="6"/>
                            <text x="60" y="58" font-size="9" font-weight="bold" fill="#ffffff" text-anchor="middle">288 € TTC</text>
                            <line x1="110" y1="55" x2="140" y2="55" stroke="#64748b" stroke-width="2"/>
                            <rect x="150" y="35" width="55" height="40" fill="#ffffff" stroke="#0284c7" stroke-width="2" rx="6"/>
                            <text x="177" y="58" font-size="9" font-weight="bold" fill="#0284c7" text-anchor="middle">? € HT</text>
                        </svg>
                    </div>
                </div>

                <details class="bg-slate-50 border border-slate-200 rounded-2xl p-4 text-xs print-correction">
                    <summary class="font-bold text-slate-900 cursor-pointer hover:text-indigo-600 transition flex items-center gap-2">
                        <i class="fa-solid fa-circle-check text-emerald-500"></i> Voir la démonstration détaillée de l'Exercice 6
                    </summary>
                    <div class="mt-3 pt-3 border-t border-slate-200 space-y-1 font-mono text-slate-700">
                        <p>• Prix HT : $V_0 = \\frac{288}{1{,}20} = \\mathbf{240{,}00\\text{ € HT}}$.</p>
                        <p>• Montant TVA : $288 - 240 = \\mathbf{48{,}00\\text{ €}}$.</p>
                    </div>
                </details>
            </div>

            <!-- EXERCICES 7 A 10 (COMPACTS ET RICHES) -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <!-- EXERCICE 7 -->
                <div class="bg-white rounded-3xl border border-slate-200 p-6 card-shadow space-y-3">
                    <div class="flex items-center justify-between border-b border-slate-100 pb-2">
                        <span class="font-bold text-slate-900 text-xs">Ex 7 • Énergie : Rendement Solaire Étagé</span>
                        <span class="bg-cyan-100 text-cyan-800 text-[10px] font-bold px-2 py-0.5 rounded-full">Analyser (C2)</span>
                    </div>
                    <p class="text-xs text-slate-700">Toit de $200\\text{ m}^2$, $40\\%$ de panneaux solaires, rendement des cellules de $18\\%$.</p>
                    <p class="text-xs font-bold text-slate-900">$p = 0{,}40 \\times 0{,}18 = 0{,}072 \\implies$ Surface utile efficace $= 200 \\times 0{,}072 = \\mathbf{14{,}40\\text{ m}^2}$.</p>
                </div>

                <!-- EXERCICE 8 -->
                <div class="bg-white rounded-3xl border border-slate-200 p-6 card-shadow space-y-3">
                    <div class="flex items-center justify-between border-b border-slate-100 pb-2">
                        <span class="font-bold text-slate-900 text-xs">Ex 8 • Restauration : Ratio Food Cost</span>
                        <span class="bg-amber-100 text-amber-800 text-[10px] font-bold px-2 py-0.5 rounded-full">S'approprier (C1)</span>
                    </div>
                    <p class="text-xs text-slate-700">CA mensuel $= 35\\,000\\text{ €}$, coût matières imposé $= 28\\%$.</p>
                    <p class="text-xs font-bold text-slate-900">Budget achats ingrédients max $= 35\\,000 \\times 0{,}28 = \\mathbf{9\\,800{,}00\\text{ €}}$.</p>
                </div>

                <!-- EXERCICE 9 -->
                <div class="bg-white rounded-3xl border border-slate-200 p-6 card-shadow space-y-3">
                    <div class="flex items-center justify-between border-b border-slate-100 pb-2">
                        <span class="font-bold text-slate-900 text-xs">Ex 9 • Ventes : Vrai Taux après +25% puis -25%</span>
                        <span class="bg-rose-100 text-rose-800 text-[10px] font-bold px-2 py-0.5 rounded-full">Valider (C4)</span>
                    </div>
                    <p class="text-xs text-slate-700">Un produit valant $100\\text{ €}$ subit $+25\\%$ puis $-25\\%$.</p>
                    <p class="text-xs font-bold text-slate-900">$CM_{\\text{global}} = 1{,}25 \\times 0{,}75 = 0{,}9375 \\implies$ Prix final $= \\mathbf{93{,}75\\text{ €}}$ (Baisse de $-6{,}25\\%$).</p>
                </div>

                <!-- EXERCICE 10 -->
                <div class="bg-white rounded-3xl border border-slate-200 p-6 card-shadow space-y-3">
                    <div class="flex items-center justify-between border-b border-slate-100 pb-2">
                        <span class="font-bold text-slate-900 text-xs">Ex 10 • Finance : Taux Réciproque d'une Inflation</span>
                        <span class="bg-purple-100 text-purple-800 text-[10px] font-bold px-2 py-0.5 rounded-full">Communiquer (C5)</span>
                    </div>
                    <p class="text-xs text-slate-700">L'inflation augmente les prix de $+12\\%$ ($CM = 1{,}12$).</p>
                    <p class="text-xs font-bold text-slate-900">$CM' = \\frac{1}{1{,}12} \\approx 0{,}8929 \\implies$ Remise nécessaire pour annuler $= \\mathbf{-10{,}71\\%}$.</p>
                </div>
            </div>
        </section>

        <!-- PARTIE B : 3 GRAND PROBLÈMES MULTI-COMPÉTENCES (C1 À C5) PLACÉS EN BAS -->
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
                        <span class="bg-amber-500 text-slate-950 font-extrabold text-[10px] px-3 py-1 rounded-full uppercase tracking-wider">Problème A • Commerce & Analyse de Gestion</span>
                        <h4 class="text-2xl font-bold font-heading text-white mt-1">Bilan Annuel du Chiffre d'Affaires d'un Magasin</h4>
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
                        <p>Un gérant de magasin d'équipement analyse les variations trimestrielles de son chiffre d'affaires sur une année :</p>
                        
                        <div class="bg-slate-800 p-4 rounded-2xl border border-slate-700 space-y-2 text-slate-200">
                            <h5 class="font-bold text-amber-400">📋 Données d'Évolution Trimestrielle (C1) :</h5>
                            <ul class="list-disc list-inside space-y-1">
                                <li>Chiffre d'affaires initial en début d'année : $CA_0 = 180\\,000\\text{ €}$.</li>
                                <li>Trimestre 1 (T1) : $+8\\%$ (Campagne de printemps).</li>
                                <li>Trimestre 2 (T2) : $+12\\%$ (Période estivale).</li>
                                <li>Trimestre 3 (T3) : $-15\\%$ (Ralentissement d'automne).</li>
                                <li>Trimestre 4 (T4) : $-5\\%$ (Fermeture pour travaux).</li>
                                <li>Objectif annuel fixé par la direction : Attendre au moins $185\\,000\\text{ €}$.</li>
                            </ul>
                        </div>

                        <div class="space-y-2 text-slate-200">
                            <h5 class="font-bold text-amber-300">Travail à Réaliser par l'Élève :</h5>
                            <p><strong>1. (C1/C2) Modélisation :</strong> Écrire les 4 coefficients multiplicateurs $CM_1, CM_2, CM_3, CM_4$.</p>
                            <p><strong>2. (C3) Calculs :</strong> Calculer le $CM_{\\text{global}}$, le chiffre d'affaires final $CA_4$ et le taux d'évolution net annuel $t_{\\text{global}}$.</p>
                            <p><strong>3. (C4) Validation :</strong> Vérifier si l'objectif annuel de $185\\,000\\text{ €}$ est atteint.</p>
                            <p><strong>4. (C5) Communication :</strong> Rédiger la synthèse commerciale pour le bilan de fin d'année.</p>
                        </div>
                    </div>

                    <!-- SCHEMA FIGURE SVG PROBLEME A -->
                    <div class="bg-slate-950 p-4 rounded-2xl border border-slate-800 flex flex-col justify-center items-center text-center">
                        <svg width="220" height="150" viewBox="0 0 220 150" class="mx-auto font-sans">
                            <polyline points="20,100 60,60 110,30 160,80 200,90" fill="none" stroke="#f59e0b" stroke-width="3"/>
                            <circle cx="20" cy="100" r="4" fill="#38bdf8"/>
                            <circle cx="200" cy="90" r="4" fill="#10b981"/>
                            <text x="20" y="118" font-size="9" fill="#94a3b8">CA0=180k€</text>
                            <text x="160" y="110" font-size="9" fill="#10b981" font-weight="bold">CA4 = ?</text>
                        </svg>
                    </div>
                </div>

                <details class="bg-slate-800 border border-slate-700 rounded-2xl p-5 text-xs text-slate-200">
                    <summary class="font-bold text-amber-400 cursor-pointer hover:text-amber-300 transition flex items-center gap-2">
                        <i class="fa-solid fa-graduation-cap text-amber-400"></i> Corrigé Intégral & Barème par Compétences (Problème A)
                    </summary>
                    <div class="mt-4 pt-4 border-t border-slate-700 space-y-3 font-mono">
                        <p><strong class="text-amber-300">C1 (S'approprier) :</strong> $CA_0 = 180\\,000\\text{ €}$. Taux : $+8\\%$, $+12\\%$, $-15\\%$, $-5\\%$.</p>
                        <p><strong class="text-blue-300">C2 (Analyser/Modéliser) :</strong><br>
                        • $CM_1 = 1{,}08$, $CM_2 = 1{,}12$, $CM_3 = 0{,}85$, $CM_4 = 0{,}95$.<br>
                        • $CM_{\\text{global}} = 1{,}08 \\times 1{,}12 \\times 0{,}85 \\times 0{,}95 = \\mathbf{0{,}9767}$.</p>
                        <p><strong class="text-emerald-300">C3 (Réaliser) :</strong><br>
                        • Chiffre d'affaires final : $CA_4 = 180\\,000 \\times 0{,}9767 = \\mathbf{175\\,806{,}00\\text{ €}}$.<br>
                        • Taux d'évolution net : $t_{\\text{global}} = (0{,}9767 - 1) \\times 100 = \\mathbf{-2{,}33\\%}$.</p>
                        <p><strong class="text-purple-300">C4 (Valider) :</strong> Comme $175\\,806\\text{ €} < 185\\,000\\text{ €}$, l'objectif de la direction **n'est pas atteint** (-9 194 € d'écart).</p>
                        <p><strong class="text-rose-300">C5 (Communiquer) :</strong> "Le chiffre d'affaires clôture à 175 806 €, soit une baisse nette annuelle de -2,33%. L'objectif de 185 000 € n'est pas atteint en raison de la baisse prolongée des T3 et T4."</p>
                    </div>
                </details>
            </div>

            <!-- PROBLÈME B -->
            <div class="bg-slate-900 text-white rounded-3xl p-6 md:p-8 card-shadow space-y-6 border border-slate-800">
                <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-4">
                    <div>
                        <span class="bg-purple-500 text-white font-extrabold text-[10px] px-3 py-1 rounded-full uppercase tracking-wider">Problème B • Qualité Industrielle & Agroalimentaire</span>
                        <h4 class="text-2xl font-bold font-heading text-white mt-1">Rendement de Ligne de Conditionnement & Gaspillage Zero</h4>
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
                        <p>Une usine agroalimentaire produit $M_0 = 8\\,500\\text{ kg}$ de matière brute par jour. Les pertes sur la chaîne de conditionnement sont les suivantes :</p>
                        
                        <div class="bg-slate-800 p-4 rounded-2xl border border-slate-700 space-y-2 text-slate-200">
                            <h5 class="font-bold text-purple-400">📋 Pertes aux Étapes de Production (C1) :</h5>
                            <ul class="list-disc list-inside space-y-1">
                                <li>Étape 1 (Tri & Épluchage) : $-8\\%$ de perte.</li>
                                <li>Étape 2 (Cuisson & Évaporation) : $-6\\%$ de perte.</li>
                                <li>Étape 3 (Mise en barquettes & Pesée) : $-3\\%$ de perte.</li>
                                <li>Norme de rendement global usine : Le rendement net final doit dépasser $83\\%$.</li>
                            </ul>
                        </div>

                        <div class="space-y-2 text-slate-200">
                            <h5 class="font-bold text-purple-300">Travail à Réaliser par l'Élève :</h5>
                            <p><strong>1. (C1/C2) :</strong> Exprimer les 3 coefficients de perte $CM_1, CM_2, CM_3$.</p>
                            <p><strong>2. (C3) :</strong> Calculer la masse nette consommable emballée $M_3$ et la masse totale de déchets.</p>
                            <p><strong>3. (C4) :</strong> Calculer le rendement global et valider la norme usine ($>83\%$).</p>
                            <p><strong>4. (C5) :</strong> Rédiger la synthèse de contrôle qualité industrielle.</p>
                        </div>
                    </div>

                    <!-- SCHEMA FIGURE SVG PROBLEME B -->
                    <div class="bg-slate-950 p-4 rounded-2xl border border-slate-800 flex flex-col justify-center items-center text-center">
                        <svg width="220" height="150" viewBox="0 0 220 150" class="mx-auto font-sans">
                            <rect x="20" y="30" width="180" height="30" fill="#0284c7" rx="4"/>
                            <rect x="20" y="70" width="150" height="30" fill="#38bdf8" rx="4"/>
                            <rect x="20" y="110" width="130" height="30" fill="#10b981" rx="4"/>
                            <text x="110" y="50" font-size="9" fill="#ffffff" font-weight="bold" text-anchor="middle">Brut = 8 500 kg</text>
                            <text x="85" y="130" font-size="9" fill="#ffffff" font-weight="bold" text-anchor="middle">Net M3 = ? kg</text>
                        </svg>
                    </div>
                </div>

                <details class="bg-slate-800 border border-slate-700 rounded-2xl p-5 text-xs text-slate-200">
                    <summary class="font-bold text-purple-400 cursor-pointer hover:text-purple-300 transition flex items-center gap-2">
                        <i class="fa-solid fa-graduation-cap text-purple-400"></i> Corrigé Intégral & Barème par Compétences (Problème B)
                    </summary>
                    <div class="mt-4 pt-4 border-t border-slate-700 space-y-3 font-mono">
                        <p><strong class="text-amber-300">C1 (S'approprier) :</strong> $M_0 = 8\\,500\\text{ kg}$. Pertes : $-8\\%$, $-6\\%$, $-3\\%$.</p>
                        <p><strong class="text-blue-300">C2 (Analyser) :</strong> $CM_1 = 0{,}92$, $CM_2 = 0{,}94$, $CM_3 = 0{,}97 \\implies CM_{\\text{global}} = 0{,}92 \\times 0{,}94 \\times 0{,}97 = \\mathbf{0{,}8389}$.</p>
                        <p><strong class="text-emerald-300">C3 (Réaliser) :</strong><br>
                        • Masse nette finale : $M_3 = 8\\,500 \\times 0{,}8389 = \\mathbf{7\\,130{,}65\\text{ kg}}$.<br>
                        • Perte totale : $8\\,500 - 7\\,130{,}65 = \\mathbf{1\\,369{,}35\\text{ kg}}$ de déchets.</p>
                        <p><strong class="text-purple-300">C4 (Valider) :</strong> Rendement global $= 83{,}89\\% > 83{,}0\\% \\implies$ Production **conforme aux exigences de qualité**.</p>
                        <p><strong class="text-rose-300">C5 (Communiquer) :</strong> "La ligne d'emballage livre 7 130,65 kg de produit fini avec un rendement net de 83,89%, respectant l'objectif industriel fixé."</p>
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
console.log('Successfully updated td.html for pourcentages-proportions with 10 exercises + 3 Multi-Competency Problems!');
