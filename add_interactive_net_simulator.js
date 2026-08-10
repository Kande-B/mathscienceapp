const fs = require('fs');
const path = require('path');

const targetFile = 'ressources/seconde/maths/geometrie-espace-volumes/cours.html';
let content = fs.readFileSync(targetFile, 'utf8');

// Simulator HTML & JS component
const simulatorHtml = `
        <!-- SIMULATEUR INTERACTIF DE PATRONS DE SOLIDES (DÉPLIAGE / PLIAGE) -->
        <div class="bg-slate-900 text-white p-6 md:p-8 rounded-3xl space-y-6 shadow-xl border border-slate-800 my-8">
            <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-4">
                <div class="flex items-center gap-3">
                    <div class="w-10 h-10 bg-amber-500/20 border border-amber-400/30 text-amber-400 rounded-xl flex items-center justify-center font-bold text-lg">
                        <i class="fa-solid fa-shapes"></i>
                    </div>
                    <div>
                        <span class="text-xs font-bold text-amber-400 uppercase tracking-widest">Outil Pédagogique Interactif</span>
                        <h3 class="text-xl font-bold font-heading text-white">Simulateur Interactif de Patrons & Développements 2D / 3D</h3>
                    </div>
                </div>
                <div class="flex items-center gap-2 text-xs">
                    <span class="bg-amber-500 text-slate-950 font-extrabold px-3 py-1 rounded-full uppercase">Pliage / Dépliage dynamique</span>
                </div>
            </div>

            <!-- Choix du Solide -->
            <div class="grid grid-cols-2 sm:grid-cols-5 gap-2 text-xs font-bold">
                <button onclick="selectSolid('cube')" id="btn-cube" class="p-3 bg-amber-500 text-slate-950 rounded-xl transition-all shadow flex flex-col items-center gap-1">
                    <i class="fa-solid fa-cube text-lg"></i>
                    <span>Cube / Pavé</span>
                </button>
                <button onclick="selectSolid('cylindre')" id="btn-cylindre" class="p-3 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl transition-all flex flex-col items-center gap-1">
                    <i class="fa-solid fa-bottle-water text-lg"></i>
                    <span>Cylindre</span>
                </button>
                <button onclick="selectSolid('pyramide')" id="btn-pyramide" class="p-3 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl transition-all flex flex-col items-center gap-1">
                    <i class="fa-solid fa-mountain text-lg"></i>
                    <span>Pyramide</span>
                </button>
                <button onclick="selectSolid('cone')" id="btn-cone" class="p-3 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl transition-all flex flex-col items-center gap-1">
                    <i class="fa-solid fa-traffic-cone text-lg"></i>
                    <span>Cône</span>
                </button>
                <button onclick="selectSolid('prisme')" id="btn-prisme" class="p-3 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl transition-all flex flex-col items-center gap-1">
                    <i class="fa-solid fa-shapes text-lg"></i>
                    <span>Prisme Droit</span>
                </button>
            </div>

            <!-- Zone de Simulation SVG + Contrôles -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 items-center pt-2">
                
                <!-- SVG Canvas pour le Patron -->
                <div class="md:col-span-2 bg-slate-950 p-6 rounded-2xl border border-slate-800 text-center relative overflow-hidden min-h-[260px] flex flex-col justify-center items-center">
                    <div id="patron-svg-container" class="w-full flex justify-center items-center">
                        <!-- SVG injecté dynamiquement par JS -->
                    </div>
                    <div id="patron-legend" class="mt-3 text-[11px] text-slate-400 font-mono">
                        Patron du Cube : 6 faces carrées identiques ($A = 6 \\cdot a^2$).
                    </div>
                </div>

                <!-- Panneau de Réglage & Formules en Temps Réel -->
                <div class="bg-slate-800/80 p-5 rounded-2xl border border-slate-700 space-y-4 text-xs">
                    <div>
                        <label class="font-bold text-amber-400 block mb-1 flex items-center justify-between">
                            <span>Niveau de Pliage / Dépliage :</span>
                            <span id="fold-val" class="font-mono text-white">0 % (À plat)</span>
                        </label>
                        <input type="range" id="fold-range" min="0" max="100" value="0" oninput="updatePatronSim()" class="w-full accent-amber-400 cursor-pointer">
                    </div>

                    <div class="space-y-2 border-t border-slate-700 pt-3">
                        <div class="flex justify-between items-center text-slate-300 font-mono">
                            <span>Aire Latérale $A_{\\text{lat}}$ :</span>
                            <span id="calc-alat" class="font-bold text-amber-300">--</span>
                        </div>
                        <div class="flex justify-between items-center text-slate-300 font-mono">
                            <span>Aire Totale $A_{\\text{tot}}$ :</span>
                            <span id="calc-atot" class="font-bold text-emerald-400">--</span>
                        </div>
                        <div class="flex justify-between items-center text-slate-300 font-mono">
                            <span>Volume $V$ :</span>
                            <span id="calc-vol" class="font-bold text-sky-400">--</span>
                        </div>
                    </div>

                    <div id="patron-formula-box" class="p-3 bg-slate-900 rounded-xl border border-slate-700 text-[11px] text-slate-300 font-mono leading-relaxed">
                        Formule patron : $A_{\\text{tot}} = 6 \\times a^2$
                    </div>
                </div>

            </div>
        </div>

        <script>
            let currentSolid = 'cube';

            function selectSolid(solid) {
                currentSolid = solid;
                ['cube', 'cylindre', 'pyramide', 'cone', 'prisme'].forEach(s => {
                    const btn = document.getElementById('btn-' + s);
                    if (s === solid) {
                        btn.className = 'p-3 bg-amber-500 text-slate-950 rounded-xl transition-all shadow flex flex-col items-center gap-1 font-bold';
                    } else {
                        btn.className = 'p-3 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl transition-all flex flex-col items-center gap-1 font-bold';
                    }
                });
                updatePatronSim();
            }

            function updatePatronSim() {
                const fold = parseInt(document.getElementById('fold-range').value);
                const foldValLabel = document.getElementById('fold-val');
                foldValLabel.innerText = fold === 0 ? '0 % (Patron 2D à plat)' : (fold === 100 ? '100 % (Solide 3D fermé)' : fold + ' % (Pliage)');

                const container = document.getElementById('patron-svg-container');
                const legend = document.getElementById('patron-legend');
                const alatEl = document.getElementById('calc-alat');
                const atotEl = document.getElementById('calc-atot');
                const volEl = document.getElementById('calc-vol');
                const formulaBox = document.getElementById('patron-formula-box');

                const scale = 1 - (fold / 100) * 0.35;
                const offset = (fold / 100) * 15;

                if (currentSolid === 'cube') {
                    const a = 4; // cm
                    const alat = 4 * a * a;
                    const atot = 6 * a * a;
                    const vol = a * a * a;

                    alatEl.innerText = alat + ' cm²';
                    atotEl.innerText = atot + ' cm²';
                    volEl.innerText = vol + ' cm³';
                    formulaBox.innerHTML = 'Cube (a = 4 cm) :<br>• $A_{\\\\text{lat}} = 4 a^2 = 64 \\\\text{ cm}^2$<br>• $A_{\\\\text{tot}} = 6 a^2 = 96 \\\\text{ cm}^2$<br>• $V = a^3 = 64 \\\\text{ cm}^3$';

                    legend.innerHTML = 'Patron du Cube : 6 carrés égaux organisés en croix. Les tirets représentent les lignes de pliage.';

                    // SVG Patron Cube animé
                    const w = 40;
                    container.innerHTML = \`
                        <svg width="240" height="200" viewBox="0 0 240 200" class="mx-auto font-sans transition-all duration-300">
                            <!-- Carré central (Base inférieure) -->
                            <rect x="\${100}" y="\${80}" width="\${w}" height="\${w}" fill="#0284c7" stroke="#38bdf8" stroke-width="2"/>
                            
                            <!-- Face Haut (pliante) -->
                            <rect x="\${100}" y="\${40 + offset}" width="\${w}" height="\${w}" fill="#f59e0b" stroke="#fbbf24" stroke-width="2" stroke-dasharray="\${fold > 0 ? '3' : '0'}"/>
                            
                            <!-- Face Bas -->
                            <rect x="\${100}" y="\${120 - offset}" width="\${w}" height="\${w}" fill="#f59e0b" stroke="#fbbf24" stroke-width="2" stroke-dasharray="\${fold > 0 ? '3' : '0'}"/>

                            <!-- Face Gauche -->
                            <rect x="\${60 + offset}" y="\${80}" width="\${w}" height="\${w}" fill="#f59e0b" stroke="#fbbf24" stroke-width="2" stroke-dasharray="\${fold > 0 ? '3' : '0'}"/>

                            <!-- Face Droite -->
                            <rect x="\${140 - offset}" y="\${80}" width="\${w}" height="\${w}" fill="#f59e0b" stroke="#fbbf24" stroke-width="2" stroke-dasharray="\${fold > 0 ? '3' : '0'}"/>

                            <!-- Face Couvercle -->
                            <rect x="\${180 - offset*2}" y="\${80}" width="\${w}" height="\${w}" fill="#10b981" stroke="#34d399" stroke-width="2"/>

                            <!-- Annotations -->
                            <text x="120" y="104" font-size="10" font-weight="bold" fill="#ffffff" text-anchor="middle">Base</text>
                            <text x="120" y="64" font-size="9" fill="#ffffff" text-anchor="middle">Face 1</text>
                            <text x="120" y="144" font-size="9" fill="#ffffff" text-anchor="middle">Face 2</text>
                            <text x="80" y="104" font-size="9" fill="#ffffff" text-anchor="middle">Face 3</text>
                            <text x="160" y="104" font-size="9" fill="#ffffff" text-anchor="middle">Face 4</text>
                            <text x="200" y="104" font-size="9" fill="#ffffff" text-anchor="middle">Haut</text>
                        </svg>
                    \`;
                } else if (currentSolid === 'cylindre') {
                    const R = 3; const h = 6;
                    const alat = (2 * Math.PI * R * h).toFixed(1);
                    const atot = (parseFloat(alat) + 2 * Math.PI * R * R).toFixed(1);
                    const vol = (Math.PI * R * R * h).toFixed(1);

                    alatEl.innerText = alat + ' cm²';
                    atotEl.innerText = atot + ' cm²';
                    volEl.innerText = vol + ' cm³';
                    formulaBox.innerHTML = 'Cylindre (R = 3 cm, h = 6 cm) :<br>• $A_{\\\\text{lat}} = 2\\\\pi R h \\\\approx ' + alat + ' \\\\text{ cm}^2$<br>• $A_{\\\\text{tot}} = A_{\\\\text{lat}} + 2\\\\pi R^2 \\\\approx ' + atot + ' \\\\text{ cm}^2$<br>• $V = \\\\pi R^2 h \\\\approx ' + vol + ' \\\\text{ cm}^3$';

                    legend.innerHTML = 'Patron du Cylindre : Un rectangle de surface latérale (longueur $2\\pi R$) et 2 disques de base (rayon $R$).';

                    const rectWidth = 140 * (1 - (fold/100)*0.7);
                    const circleOffset = (fold / 100) * 20;

                    container.innerHTML = \`
                        <svg width="260" height="190" viewBox="0 0 260 190" class="mx-auto font-sans transition-all duration-300">
                            <!-- Disque de base supérieur -->
                            <circle cx="130" cy="\${35 + circleOffset}" r="22" fill="#0284c7" stroke="#38bdf8" stroke-width="2"/>
                            
                            <!-- Rectangle latéral déplié -->
                            <rect x="\${130 - rectWidth/2}" y="60" width="\${rectWidth}" height="70" fill="#f59e0b" stroke="#fbbf24" stroke-width="2"/>

                            <!-- Disque de base inférieur -->
                            <circle cx="130" cy="\${155 - circleOffset}" r="22" fill="#0284c7" stroke="#38bdf8" stroke-width="2"/>

                            <!-- Annotations -->
                            <text x="130" y="39" font-size="9" font-weight="bold" fill="#ffffff" text-anchor="middle">Base (πR²)</text>
                            <text x="130" y="100" font-size="10" font-weight="bold" fill="#ffffff" text-anchor="middle">Surface Latérale (2πR × h)</text>
                            <text x="130" y="159" font-size="9" font-weight="bold" fill="#ffffff" text-anchor="middle">Base (πR²)</text>
                        </svg>
                    \`;
                } else if (currentSolid === 'pyramide') {
                    const a = 5; const h = 6;
                    const H_tri = 6.5; // hauteur triangle
                    const alat = (4 * (a * H_tri / 2)).toFixed(1);
                    const atot = (parseFloat(alat) + a * a).toFixed(1);
                    const vol = ((1/3) * a * a * h).toFixed(1);

                    alatEl.innerText = alat + ' cm²';
                    atotEl.innerText = atot + ' cm²';
                    volEl.innerText = vol + ' cm³';
                    formulaBox.innerHTML = 'Pyramide (Base a = 5 cm, h = 6 cm) :<br>• $A_{\\\\text{lat}} = 4 \\\\times \\\\frac{a \\\\cdot h_t}{2} = ' + alat + ' \\\\text{ cm}^2$<br>• $A_{\\\\text{tot}} = a^2 + A_{\\\\text{lat}} = ' + atot + ' \\\\text{ cm}^2$<br>• $V = \\\\frac{1}{3} a^2 h = ' + vol + ' \\\\text{ cm}^3$';

                    legend.innerHTML = 'Patron de la Pyramide : Un carré central et 4 triangles isocèles articulés sur chaque côté.';

                    const tOffset = (fold / 100) * 25;
                    container.innerHTML = \`
                        <svg width="240" height="200" viewBox="0 0 240 200" class="mx-auto font-sans transition-all duration-300">
                            <!-- Carré central -->
                            <rect x="95" y="75" width="50" height="50" fill="#0284c7" stroke="#38bdf8" stroke-width="2"/>
                            
                            <!-- Triangle Haut -->
                            <polygon points="120,\${25 + tOffset} 95,75 145,75" fill="#f59e0b" stroke="#fbbf24" stroke-width="2"/>

                            <!-- Triangle Bas -->
                            <polygon points="120,\${175 - tOffset} 95,125 145,125" fill="#f59e0b" stroke="#fbbf24" stroke-width="2"/>

                            <!-- Triangle Gauche -->
                            <polygon points="\${45 + tOffset},100 95,75 95,125" fill="#f59e0b" stroke="#fbbf24" stroke-width="2"/>

                            <!-- Triangle Droit -->
                            <polygon points="\${195 - tOffset},100 145,75 145,125" fill="#f59e0b" stroke="#fbbf24" stroke-width="2"/>

                            <text x="120" y="104" font-size="10" font-weight="bold" fill="#ffffff" text-anchor="middle">Base</text>
                        </svg>
                    \`;
                } else if (currentSolid === 'cone') {
                    const R = 3; const a = 7;
                    const alat = (Math.PI * R * a).toFixed(1);
                    const atot = (parseFloat(alat) + Math.PI * R * R).toFixed(1);
                    const vol = ((1/3) * Math.PI * R * R * Math.sqrt(a*a - R*R)).toFixed(1);

                    alatEl.innerText = alat + ' cm²';
                    atotEl.innerText = atot + ' cm²';
                    volEl.innerText = vol + ' cm³';
                    formulaBox.innerHTML = 'Cône (R = 3 cm, génératrice a = 7 cm) :<br>• $A_{\\\\text{lat}} = \\\\pi R a = ' + alat + ' \\\\text{ cm}^2$<br>• $A_{\\\\text{tot}} = \\\\pi R a + \\\\pi R^2 = ' + atot + ' \\\\text{ cm}^2$<br>• $V = \\\\frac{1}{3} \\\\pi R^2 h = ' + vol + ' \\\\text{ cm}^3$';

                    legend.innerHTML = 'Patron du Cône : Un secteur circulaire de rayon $a$ (angle $\\\\theta = 360^\\\\circ \\\\times \\\\frac{R}{a}$) et un disque de base de rayon $R$.';

                    const cOffset = (fold / 100) * 15;
                    container.innerHTML = \`
                        <svg width="240" height="190" viewBox="0 0 240 190" class="mx-auto font-sans transition-all duration-300">
                            <!-- Secteur circulaire -->
                            <path d="M 120 30 L 60 120 A 70 70 0 0 0 180 120 Z" fill="#7c3aed" stroke="#a78bfa" stroke-width="2"/>
                            
                            <!-- Disque de base -->
                            <circle cx="120" cy="\${150 - cOffset}" r="22" fill="#0284c7" stroke="#38bdf8" stroke-width="2"/>

                            <text x="120" y="85" font-size="10" font-weight="bold" fill="#ffffff" text-anchor="middle">Secteur Latéral (πRa)</text>
                            <text x="120" y="154" font-size="9" font-weight="bold" fill="#ffffff" text-anchor="middle">Base (πR²)</text>
                        </svg>
                    \`;
                } else if (currentSolid === 'prisme') {
                    const b = 4; const hb = 3; const h = 8;
                    const alat = ((4 + 3 + 5) * h).toFixed(1);
                    const atot = (parseFloat(alat) + 2 * (b * hb / 2)).toFixed(1);
                    const vol = ((b * hb / 2) * h).toFixed(1);

                    alatEl.innerText = alat + ' cm²';
                    atotEl.innerText = atot + ' cm²';
                    volEl.innerText = vol + ' cm³';
                    formulaBox.innerHTML = 'Prisme Triangulaire (b = 4 cm, h = 8 cm) :<br>• $A_{\\\\text{lat}} = P_{\\\\text{base}} \\\\times h = ' + alat + ' \\\\text{ cm}^2$<br>• $A_{\\\\text{tot}} = A_{\\\\text{lat}} + 2 A_{\\\\text{base}} = ' + atot + ' \\\\text{ cm}^2$<br>• $V = A_{\\\\text{base}} \\\\times h = ' + vol + ' \\\\text{ cm}^3$';

                    legend.innerHTML = 'Patron du Prisme Droit : 3 faces rectangulaires formant la hauteur et 2 bases triangulaires opposées.';

                    const pOffset = (fold / 100) * 15;
                    container.innerHTML = \`
                        <svg width="250" height="190" viewBox="0 0 250 190" class="mx-auto font-sans transition-all duration-300">
                            <!-- 3 Rectangles -->
                            <rect x="40" y="60" width="50" height="70" fill="#f59e0b" stroke="#fbbf24" stroke-width="2"/>
                            <rect x="90" y="60" width="70" height="70" fill="#0284c7" stroke="#38bdf8" stroke-width="2"/>
                            <rect x="160" y="60" width="50" height="70" fill="#f59e0b" stroke="#fbbf24" stroke-width="2"/>

                            <!-- Triangle Haut -->
                            <polygon points="90,60 160,60 125,\${20 + pOffset}" fill="#10b981" stroke="#34d399" stroke-width="2"/>

                            <!-- Triangle Bas -->
                            <polygon points="90,130 160,130 125,\${170 - pOffset}" fill="#10b981" stroke="#34d399" stroke-width="2"/>

                            <text x="125" y="100" font-size="10" font-weight="bold" fill="#ffffff" text-anchor="middle">Face Principale</text>
                            <text x="125" y="52" font-size="9" font-weight="bold" fill="#ffffff" text-anchor="middle">Base 1</text>
                            <text x="125" y="148" font-size="9" font-weight="bold" fill="#ffffff" text-anchor="middle">Base 2</text>
                        </svg>
                    \`;
                }

                if (window.MathJax && window.MathJax.typeset) {
                    window.MathJax.typeset();
                }
            }

            // Initialiser au chargement
            document.addEventListener('DOMContentLoaded', () => {
                updatePatronSim();
            });
        </script>
`;

// Insert simulator Html right after section partie2 opening in cours.html
const partie2Marker = '<section id="partie2" class="bg-white p-6 md:p-8 rounded-3xl border border-slate-200 card-shadow space-y-6">';
if (content.includes(partie2Marker)) {
    content = content.replace(partie2Marker, partie2Marker + '\n' + simulatorHtml);
    fs.writeFileSync(targetFile, content, 'utf8');
    console.log('Successfully inserted Interactive Net Simulator into cours.html!');
} else {
    console.error('Marker partie2 not found in cours.html');
}
