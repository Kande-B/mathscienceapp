const fs = require('fs');
const path = require('path');

const targetFile = path.join(__dirname, 'ressources', 'seconde', 'maths', 'geometrie-espace-volumes', 'cours.html');

let html = fs.readFileSync(targetFile, 'utf-8');

// 1. Add Three.js and OrbitControls to head if not present
if (!html.includes('three.min.js')) {
    const headScripts = `
    <!-- Three.js et OrbitControls pour la Simulation 3D Vraie -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/three@0.128.0/examples/js/controls/OrbitControls.js"></script>
`;
    html = html.replace('</head>', `${headScripts}\n</head>`);
}

// 2. Replace simulator HTML block
const oldSimBlockRegex = /<!-- SIMULATEUR INTERACTIF DE PATRONS DE SOLIDES INSIDE PARTIE 2 -->[\s\S]*?<!-- PARTIE 3 : FORMULES UNIVERSELLES DES VOLUMES -->/;

const newSimBlock = `<!-- SIMULATEUR INTERACTIF DE PATRONS DE SOLIDES INSIDE PARTIE 2 -->
            <div class="bg-slate-900 text-white p-6 md:p-8 rounded-3xl space-y-6 shadow-xl border border-slate-800 mt-6">
                <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-4">
                    <div class="flex items-center gap-3">
                        <div class="w-10 h-10 bg-amber-500/20 border border-amber-400/30 text-amber-400 rounded-xl flex items-center justify-center font-bold text-lg shadow-inner">
                            <i class="fa-solid fa-cube text-amber-400"></i>
                        </div>
                        <div>
                            <span class="text-xs font-bold text-amber-400 uppercase tracking-widest flex items-center gap-1.5">
                                <span class="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
                                Outil Pédagogique Interactif 3D WebGL
                            </span>
                            <h4 class="text-xl font-bold font-heading text-white">Simulateur de Pliage & Dépliage des Patrons (2D ↔ 3D)</h4>
                        </div>
                    </div>
                    <div class="flex items-center gap-2">
                        <span class="bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-extrabold text-xs px-3.5 py-1.5 rounded-full uppercase tracking-wider shadow">
                            <i class="fa-solid fa-vr-cardboard mr-1"></i> Mode 3D Temps Réel
                        </span>
                    </div>
                </div>

                <!-- Choix du Solide -->
                <div class="grid grid-cols-2 sm:grid-cols-5 gap-2.5 text-xs font-bold">
                    <button onclick="selectSolid('cube')" id="btn-cube" class="p-3 bg-amber-500 text-slate-950 rounded-xl transition-all shadow-md flex flex-col items-center gap-1.5 hover:scale-[1.02]">
                        <i class="fa-solid fa-cube text-xl"></i>
                        <span>Cube / Pavé</span>
                    </button>
                    <button onclick="selectSolid('cylindre')" id="btn-cylindre" class="p-3 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl transition-all flex flex-col items-center gap-1.5 hover:scale-[1.02]">
                        <i class="fa-solid fa-bottle-water text-xl"></i>
                        <span>Cylindre</span>
                    </button>
                    <button onclick="selectSolid('pyramide')" id="btn-pyramide" class="p-3 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl transition-all flex flex-col items-center gap-1.5 hover:scale-[1.02]">
                        <i class="fa-solid fa-mountain text-xl"></i>
                        <span>Pyramide</span>
                    </button>
                    <button onclick="selectSolid('cone')" id="btn-cone" class="p-3 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl transition-all flex flex-col items-center gap-1.5 hover:scale-[1.02]">
                        <i class="fa-solid fa-traffic-cone text-xl"></i>
                        <span>Cône</span>
                    </button>
                    <button onclick="selectSolid('prisme')" id="btn-prisme" class="p-3 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl transition-all flex flex-col items-center gap-1.5 hover:scale-[1.02]">
                        <i class="fa-solid fa-shapes text-xl"></i>
                        <span>Prisme Droit</span>
                    </button>
                </div>

                <!-- Zone de Simulation 3D Canvas + Contrôles -->
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch pt-2">
                    
                    <!-- Canvas 3D WebGL (Three.js) -->
                    <div class="md:col-span-2 bg-slate-950 rounded-2xl border border-slate-800 relative overflow-hidden flex flex-col justify-between shadow-2xl min-h-[340px]">
                        
                        <!-- Overlay Controls (Top Bar inside Canvas) -->
                        <div class="absolute top-3 left-3 right-3 z-10 flex items-center justify-between pointer-events-none">
                            <span class="bg-slate-900/80 backdrop-blur-md text-amber-400 text-[10px] font-mono px-3 py-1.5 rounded-lg border border-slate-700/80 shadow flex items-center gap-1.5 pointer-events-auto">
                                <i class="fa-solid fa-arrows-spin text-amber-400 animate-spin-slow"></i> 
                                <span>Glisser pour faire pivoter en 3D</span>
                            </span>
                            <div class="flex items-center gap-1.5 pointer-events-auto">
                                <button onclick="toggleViewMode()" id="btn-view-mode" class="px-2.5 py-1 bg-slate-800/90 hover:bg-slate-700 backdrop-blur text-slate-300 hover:text-white rounded-lg text-[11px] font-semibold border border-slate-700 transition flex items-center gap-1 shadow">
                                    <i class="fa-solid fa-eye text-sky-400"></i>
                                    <span id="view-mode-label">Translucide</span>
                                </button>
                                <button onclick="reset3DCamera()" class="px-2.5 py-1 bg-slate-800/90 hover:bg-slate-700 backdrop-blur text-slate-300 hover:text-white rounded-lg text-[11px] font-semibold border border-slate-700 transition shadow" title="Réinitialiser la vue 3D">
                                    <i class="fa-solid fa-rotate-left"></i>
                                </button>
                            </div>
                        </div>

                        <!-- WebGL 3D Container -->
                        <div id="patron-3d-canvas-container" class="w-full h-[340px] cursor-grab active:cursor-grabbing">
                            <!-- Three.js Canvas Injecté ici -->
                        </div>

                        <!-- Legend & Status Footer inside Canvas -->
                        <div class="bg-slate-900/90 backdrop-blur-md px-4 py-2 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
                            <div id="patron-legend" class="truncate pr-2">
                                Patron du Cube : 6 faces carrées égales.
                            </div>
                            <button onclick="togglePlayAnimation()" id="btn-play-anim" class="px-3 py-1 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-md transition flex items-center gap-1.5 shadow text-[10px]">
                                <i class="fa-solid fa-play" id="play-icon"></i>
                                <span id="play-text">Animer</span>
                            </button>
                        </div>
                    </div>

                    <!-- Panneau de Réglage & Formules en Temps Réel -->
                    <div class="bg-slate-800/90 backdrop-blur p-5 rounded-2xl border border-slate-700 space-y-4 text-xs flex flex-col justify-between shadow-xl">
                        <div class="space-y-3">
                            <div>
                                <div class="flex items-center justify-between mb-1.5">
                                    <label class="font-bold text-amber-400 flex items-center gap-1.5">
                                        <i class="fa-solid fa-sliders"></i>
                                        <span>Niveau de Pliage :</span>
                                    </label>
                                    <span id="fold-val" class="font-mono font-bold text-white bg-slate-900 px-2 py-0.5 rounded border border-slate-700 text-[11px]">0 % (À plat 2D)</span>
                                </div>
                                <input type="range" id="fold-range" min="0" max="100" value="0" step="0.5" oninput="updatePatronSim()" class="w-full accent-amber-400 cursor-pointer h-2 bg-slate-900 rounded-lg appearance-none">
                                <div class="flex justify-between text-[10px] font-mono text-slate-400 mt-1">
                                    <span>Patron 2D (0%)</span>
                                    <span>Pliage (50%)</span>
                                    <span>Solide 3D (100%)</span>
                                </div>
                            </div>

                            <div class="space-y-2 border-t border-slate-700/80 pt-3">
                                <div class="flex justify-between items-center text-slate-300 font-mono bg-slate-900/60 px-3 py-2 rounded-xl border border-slate-700/50">
                                    <span class="text-slate-400">Aire Latérale $A_{\\text{lat}}$ :</span>
                                    <span id="calc-alat" class="font-bold text-amber-300 text-sm">--</span>
                                </div>
                                <div class="flex justify-between items-center text-slate-300 font-mono bg-slate-900/60 px-3 py-2 rounded-xl border border-slate-700/50">
                                    <span class="text-slate-400">Aire Totale $A_{\\text{tot}}$ :</span>
                                    <span id="calc-atot" class="font-bold text-emerald-400 text-sm">--</span>
                                </div>
                                <div class="flex justify-between items-center text-slate-300 font-mono bg-slate-900/60 px-3 py-2 rounded-xl border border-slate-700/50">
                                    <span class="text-slate-400">Volume $V$ :</span>
                                    <span id="calc-vol" class="font-bold text-sky-400 text-sm">--</span>
                                </div>
                            </div>
                        </div>

                        <div id="patron-formula-box" class="p-3.5 bg-slate-900/90 rounded-xl border border-slate-700 text-[11px] text-slate-300 font-mono leading-relaxed shadow-inner">
                            Formule patron : $A_{\\text{tot}} = 6 \\times a^2$
                        </div>
                    </div>

                </div>
            </div>
        </section>

        <!-- PARTIE 3 : FORMULES UNIVERSELLES DES VOLUMES -->`;

html = html.replace(oldSimBlockRegex, newSimBlock);

// 3. Replace script at bottom
const oldScriptRegex = /<!-- SCRIPT DU SIMULATEUR ROBOUSTE ROBUSTE SANS ERREUR JS -->[\s\S]*?<\/script>/;

const newScript = `<!-- SCRIPT DU SIMULATEUR 3D WEBGL (THREE.JS) -->
    <script>
        let scene, camera, renderer, controls;
        let solidGroup = null;
        let currentSolid = 'cube';
        let isPlaying = false;
        let playDirection = 1;
        let animFrameId = null;
        let viewMode = 'transp'; // 'solid', 'transp', 'wire'

        const SOLIDS_CONFIG = {
            cube: {
                name: "Cube / Pavé",
                legend: "Patron du Cube : 6 faces carrées égales ($A = 6 \\cdot a^2$). Pliage exact à 90°.",
                formula: "<strong>Cube (a = 4 cm) :</strong><br>• $A_{\\\\text{lat}} = 4 \\\\times a^2 = 64\\\\text{ cm}^2$<br>• $A_{\\\\text{tot}} = 6 \\\\times a^2 = 96\\\\text{ cm}^2$<br>• $V = a^3 = 64\\\\text{ cm}^3$",
                calc: { alat: "64 cm²", atot: "96 cm²", vol: "64 cm³" }
            },
            cylindre: {
                name: "Cylindre",
                legend: "Patron du Cylindre : Un rectangle latéral ($2\\pi R \\times h$) qui s'enroule + 2 disques de base.",
                formula: "<strong>Cylindre (R = 3 cm, h = 6 cm) :</strong><br>• $A_{\\\\text{lat}} = 2\\pi R \\\\times h \\\\approx 113{,}1\\\\text{ cm}^2$<br>• $A_{\\\\text{tot}} = A_{\\\\text{lat}} + 2\\pi R^2 \\\\approx 169{,}6\\\\text{ cm}^2$<br>• $V = \\pi R^2 h \\\\approx 169{,}6\\\\text{ cm}^3$",
                calc: { alat: "113,1 cm²", atot: "169,6 cm²", vol: "169,6 cm³" }
            },
            pyramide: {
                name: "Pyramide à base carrée",
                legend: "Patron de la Pyramide : Carré de base + 4 triangles isocèles articulés rejoignant le sommet.",
                formula: "<strong>Pyramide (a = 5 cm, h = 6 cm) :</strong><br>• $A_{\\\\text{lat}} = 4 \\\\times \\\\frac{a \\\\cdot h_t}{2} = 65\\\\text{ cm}^2$<br>• $A_{\\\\text{tot}} = a^2 + A_{\\\\text{lat}} = 90\\\\text{ cm}^2$<br>• $V = \\\\frac{1}{3} a^2 h = 50\\\\text{ cm}^3$",
                calc: { alat: "65 cm²", atot: "90 cm²", vol: "50 cm³" }
            },
            cone: {
                name: "Cône de révolution",
                legend: "Patron du Cône : Secteur circulaire (génératrice a) enroulé + disque de base (rayon R).",
                formula: "<strong>Cône (R = 3 cm, a = 7 cm, h = 6,3 cm) :</strong><br>• $A_{\\\\text{lat}} = \\pi R a \\\\approx 66{,}0\\\\text{ cm}^2$<br>• $A_{\\\\text{tot}} = A_{\\\\text{lat}} + \\pi R^2 \\\\approx 94{,}2\\\\text{ cm}^2$<br>• $V = \\\\frac{1}{3}\\pi R^2 h \\\\approx 59{,}4\\\\text{ cm}^3$",
                calc: { alat: "66,0 cm²", atot: "94,2 cm²", vol: "59,4 cm³" }
            },
            prisme: {
                name: "Prisme Droit Triangulaire",
                legend: "Patron du Prisme Droit : 3 faces rectangulaires latérales + 2 bases triangulaires identiques.",
                formula: "<strong>Prisme Triangulaire (b = 4 cm, ht = 3,5 cm, h = 6 cm) :</strong><br>• $A_{\\\\text{lat}} = P_{\\\\text{base}} \\\\times h = 72\\\\text{ cm}^2$<br>• $A_{\\\\text{tot}} = A_{\\\\text{lat}} + 2 A_{\\\\text{base}} = 86\\\\text{ cm}^2$<br>• $V = A_{\\\\text{base}} \\\\times h = 42\\\\text{ cm}^3$",
                calc: { alat: "72 cm²", atot: "86 cm²", vol: "42 cm³" }
            }
        };

        function selectSolid(solid) {
            currentSolid = solid;
            ['cube', 'cylindre', 'pyramide', 'cone', 'prisme'].forEach(s => {
                const btn = document.getElementById('btn-' + s);
                if (btn) {
                    if (s === solid) {
                        btn.className = 'p-3 bg-amber-500 text-slate-950 rounded-xl transition-all shadow-md flex flex-col items-center gap-1.5 font-bold hover:scale-[1.02]';
                    } else {
                        btn.className = 'p-3 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl transition-all flex flex-col items-center gap-1.5 font-bold hover:scale-[1.02]';
                    }
                }
            });
            updatePatronSim();
        }

        function togglePlayAnimation() {
            isPlaying = !isPlaying;
            const playText = document.getElementById('play-text');
            const playIcon = document.getElementById('play-icon');
            const playBtn = document.getElementById('btn-play-anim');
            if (isPlaying) {
                if (playText) playText.innerText = 'Pause';
                if (playIcon) playIcon.className = 'fa-solid fa-pause';
                if (playBtn) playBtn.className = 'px-3 py-1 bg-amber-400 text-slate-950 font-bold rounded-md transition flex items-center gap-1.5 shadow text-[10px] animate-pulse';
            } else {
                if (playText) playText.innerText = 'Animer';
                if (playIcon) playIcon.className = 'fa-solid fa-play';
                if (playBtn) playBtn.className = 'px-3 py-1 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-md transition flex items-center gap-1.5 shadow text-[10px]';
            }
        }

        function toggleViewMode() {
            const modes = ['transp', 'solid', 'wire'];
            const labels = { transp: 'Translucide', solid: 'Solide Opac', wire: 'Fil de fer' };
            const idx = (modes.indexOf(viewMode) + 1) % modes.length;
            viewMode = modes[idx];
            const labelEl = document.getElementById('view-mode-label');
            if (labelEl) labelEl.innerText = labels[viewMode];
            updatePatronSim();
        }

        function reset3DCamera() {
            if (camera && controls) {
                camera.position.set(0, 3.8, 6.5);
                controls.target.set(0, 0, 0);
                controls.update();
            }
        }

        function init3D() {
            const container = document.getElementById('patron-3d-canvas-container');
            if (!container) return;
            container.innerHTML = '';

            const width = container.clientWidth || 500;
            const height = 340;

            scene = new THREE.Scene();
            scene.background = new THREE.Color(0x040711);

            camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
            camera.position.set(0, 3.8, 6.5);

            renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
            renderer.setSize(width, height);
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
            renderer.shadowMap.enabled = true;
            container.appendChild(renderer.domElement);

            if (typeof THREE.OrbitControls !== 'undefined') {
                controls = new THREE.OrbitControls(camera, renderer.domElement);
                controls.enableDamping = true;
                controls.dampingFactor = 0.08;
                controls.maxPolarAngle = Math.PI / 2 + 0.15;
            }

            // Éclairage studio 3D
            const ambient = new THREE.AmbientLight(0xffffff, 0.8);
            scene.add(ambient);

            const sun = new THREE.DirectionalLight(0xffffff, 0.9);
            sun.position.set(6, 12, 8);
            scene.add(sun);

            const cyanLight = new THREE.DirectionalLight(0x38bdf8, 0.45);
            cyanLight.position.set(-6, -4, -6);
            scene.add(cyanLight);

            // Grille 3D au sol
            const grid = new THREE.GridHelper(14, 14, 0x334155, 0x1e293b);
            grid.position.y = -0.01;
            scene.add(grid);

            window.addEventListener('resize', () => {
                if (!container || !renderer || !camera) return;
                const w = container.clientWidth;
                const h = 340;
                camera.aspect = w / h;
                camera.updateProjectionMatrix();
                renderer.setSize(w, h);
            });

            updatePatronSim();
            animate3D();
        }

        function animate3D() {
            animFrameId = requestAnimationFrame(animate3D);
            if (controls) controls.update();

            if (isPlaying) {
                const slider = document.getElementById('fold-range');
                if (slider) {
                    let val = parseFloat(slider.value) + playDirection * 0.7;
                    if (val >= 100) { val = 100; playDirection = -1; }
                    if (val <= 0) { val = 0; playDirection = 1; }
                    slider.value = val;
                    updatePatronSim();
                }
            }

            if (renderer && scene && camera) {
                renderer.render(scene, camera);
            }
        }

        function getMaterial(colorHex, isBase = false) {
            const color = new THREE.Color(colorHex);
            if (viewMode === 'wire') {
                return new THREE.MeshBasicMaterial({ color: color, wireframe: true });
            } else if (viewMode === 'transp') {
                return new THREE.MeshStandardMaterial({
                    color: color,
                    roughness: 0.25,
                    metalness: 0.1,
                    transparent: true,
                    opacity: 0.7,
                    side: THREE.DoubleSide
                });
            } else {
                return new THREE.MeshStandardMaterial({
                    color: color,
                    roughness: 0.35,
                    metalness: 0.15,
                    side: THREE.DoubleSide
                });
            }
        }

        function addOutline(mesh, colorHex = 0xffffff) {
            const edges = new THREE.EdgesGeometry(mesh.geometry);
            const lineMat = new THREE.LineBasicMaterial({ color: colorHex, linewidth: 1.5 });
            const line = new THREE.LineSegments(edges, lineMat);
            mesh.add(line);
        }

        function updatePatronSim() {
            const foldRange = document.getElementById('fold-range');
            if (!foldRange) return;

            const fold = parseFloat(foldRange.value);
            const foldProgress = fold / 100;

            const foldValLabel = document.getElementById('fold-val');
            if (foldValLabel) {
                if (fold === 0) foldValLabel.innerText = '0 % (Patron 2D à plat)';
                else if (fold === 100) foldValLabel.innerText = '100 % (Solide 3D fermé)';
                else foldValLabel.innerText = Math.round(fold) + ' % (Pliage 3D)';
            }

            const cfg = SOLIDS_CONFIG[currentSolid] || SOLIDS_CONFIG.cube;

            const alatEl = document.getElementById('calc-alat');
            const atotEl = document.getElementById('calc-atot');
            const volEl = document.getElementById('calc-vol');
            const formulaBox = document.getElementById('patron-formula-box');
            const legend = document.getElementById('patron-legend');

            if (alatEl) alatEl.innerText = cfg.calc.alat;
            if (atotEl) atotEl.innerText = cfg.calc.atot;
            if (volEl) volEl.innerText = cfg.calc.vol;
            if (formulaBox) formulaBox.innerHTML = cfg.formula;
            if (legend) legend.innerHTML = cfg.legend;

            if (window.MathJax && MathJax.typesetPromise) {
                MathJax.typesetPromise([formulaBox, legend]).catch(() => {});
            }

            // Reconstruire le solide 3D dans la scène Three.js
            if (!scene) return;

            if (solidGroup) {
                scene.remove(solidGroup);
                solidGroup.traverse(child => {
                    if (child.geometry) child.geometry.dispose();
                    if (child.material) {
                        if (Array.isArray(child.material)) child.material.forEach(m => m.dispose());
                        else child.material.dispose();
                    }
                });
            }

            if (currentSolid === 'cube') {
                buildCube3D(foldProgress);
            } else if (currentSolid === 'pyramide') {
                buildPyramid3D(foldProgress);
            } else if (currentSolid === 'prisme') {
                buildPrism3D(foldProgress);
            } else if (currentSolid === 'cylindre') {
                buildCylinder3D(foldProgress);
            } else if (currentSolid === 'cone') {
                buildCone3D(foldProgress);
            }
        }

        function buildCube3D(fp) {
            solidGroup = new THREE.Group();
            const s = 1.8;
            const fa = fp * (Math.PI / 2);

            const baseMat = getMaterial(0x0284c7, true);
            const sideMat = getMaterial(0xf59e0b);
            const topMat  = getMaterial(0x10b981);

            // 1. Base (Center)
            const baseGeo = new THREE.PlaneGeometry(s, s);
            baseGeo.rotateX(-Math.PI / 2);
            const baseMesh = new THREE.Mesh(baseGeo, baseMat);
            addOutline(baseMesh, 0x38bdf8);
            solidGroup.add(baseMesh);

            // 2. North Face (Haut)
            const nHinge = new THREE.Group();
            nHinge.position.set(0, 0, -s/2);
            nHinge.rotation.x = -fa;
            const nGeo = new THREE.PlaneGeometry(s, s);
            nGeo.rotateX(-Math.PI / 2);
            nGeo.translate(0, 0, -s/2);
            const nMesh = new THREE.Mesh(nGeo, sideMat);
            addOutline(nMesh, 0xfcd34d);
            nHinge.add(nMesh);
            solidGroup.add(nHinge);

            // 3. South Face (Bas)
            const sHinge = new THREE.Group();
            sHinge.position.set(0, 0, s/2);
            sHinge.rotation.x = fa;
            const sGeo = new THREE.PlaneGeometry(s, s);
            sGeo.rotateX(-Math.PI / 2);
            sGeo.translate(0, 0, s/2);
            const sMesh = new THREE.Mesh(sGeo, sideMat);
            addOutline(sMesh, 0xfcd34d);
            sHinge.add(sMesh);
            solidGroup.add(sHinge);

            // 4. West Face (Gauche)
            const wHinge = new THREE.Group();
            wHinge.position.set(-s/2, 0, 0);
            wHinge.rotation.z = fa;
            const wGeo = new THREE.PlaneGeometry(s, s);
            wGeo.rotateX(-Math.PI / 2);
            wGeo.translate(-s/2, 0, 0);
            const wMesh = new THREE.Mesh(wGeo, sideMat);
            addOutline(wMesh, 0xfcd34d);
            wHinge.add(wMesh);
            solidGroup.add(wHinge);

            // 5. East Face (Droite)
            const eHinge = new THREE.Group();
            eHinge.position.set(s/2, 0, 0);
            eHinge.rotation.z = -fa;
            const eGeo = new THREE.PlaneGeometry(s, s);
            eGeo.rotateX(-Math.PI / 2);
            eGeo.translate(s/2, 0, 0);
            const eMesh = new THREE.Mesh(eGeo, sideMat);
            addOutline(eMesh, 0xfcd34d);
            eHinge.add(eMesh);
            solidGroup.add(eHinge);

            // 6. Top Cover (Couvercle attaché à la face Est)
            const tHinge = new THREE.Group();
            tHinge.position.set(s, 0, 0);
            tHinge.rotation.z = -fa;
            const tGeo = new THREE.PlaneGeometry(s, s);
            tGeo.rotateX(-Math.PI / 2);
            tGeo.translate(s/2, 0, 0);
            const tMesh = new THREE.Mesh(tGeo, topMat);
            addOutline(tMesh, 0x6ee7b7);
            tHinge.add(tMesh);
            eHinge.add(tHinge);

            scene.add(solidGroup);
        }

        function buildPyramid3D(fp) {
            solidGroup = new THREE.Group();
            const s = 2.0;
            const h = 2.2;
            const L = Math.sqrt((s/2)*(s/2) + h*h);
            const fa = fp * Math.atan2(h, s/2);

            const baseMat = getMaterial(0x0284c7, true);
            const sideMat = getMaterial(0xf59e0b);

            // Base
            const baseGeo = new THREE.PlaneGeometry(s, s);
            baseGeo.rotateX(-Math.PI / 2);
            const baseMesh = new THREE.Mesh(baseGeo, baseMat);
            addOutline(baseMesh, 0x38bdf8);
            solidGroup.add(baseMesh);

            // North Triangle
            const nHinge = new THREE.Group();
            nHinge.position.set(0, 0, -s/2);
            nHinge.rotation.x = -fa;
            const nGeo = new THREE.BufferGeometry();
            nGeo.setAttribute('position', new THREE.BufferAttribute(new Float32Array([
                -s/2, 0, 0,
                 s/2, 0, 0,
                   0, 0, -L
            ]), 3));
            nGeo.computeVertexNormals();
            const nMesh = new THREE.Mesh(nGeo, sideMat);
            addOutline(nMesh, 0xfcd34d);
            nHinge.add(nMesh);
            solidGroup.add(nHinge);

            // South Triangle
            const sHinge = new THREE.Group();
            sHinge.position.set(0, 0, s/2);
            sHinge.rotation.x = fa;
            const sGeo = new THREE.BufferGeometry();
            sGeo.setAttribute('position', new THREE.BufferAttribute(new Float32Array([
                -s/2, 0, 0,
                 s/2, 0, 0,
                   0, 0, L
            ]), 3));
            sGeo.computeVertexNormals();
            const sMesh = new THREE.Mesh(sGeo, sideMat);
            addOutline(sMesh, 0xfcd34d);
            sHinge.add(sMesh);
            solidGroup.add(sHinge);

            // West Triangle
            const wHinge = new THREE.Group();
            wHinge.position.set(-s/2, 0, 0);
            wHinge.rotation.z = fa;
            const wGeo = new THREE.BufferGeometry();
            wGeo.setAttribute('position', new THREE.BufferAttribute(new Float32Array([
                0, 0, -s/2,
                0, 0,  s/2,
               -L, 0,  0
            ]), 3));
            wGeo.computeVertexNormals();
            const wMesh = new THREE.Mesh(wGeo, sideMat);
            addOutline(wMesh, 0xfcd34d);
            wHinge.add(wMesh);
            solidGroup.add(wHinge);

            // East Triangle
            const eHinge = new THREE.Group();
            eHinge.position.set(s/2, 0, 0);
            eHinge.rotation.z = -fa;
            const eGeo = new THREE.BufferGeometry();
            eGeo.setAttribute('position', new THREE.BufferAttribute(new Float32Array([
                0, 0, -s/2,
                0, 0,  s/2,
                L, 0,  0
            ]), 3));
            eGeo.computeVertexNormals();
            const eMesh = new THREE.Mesh(eGeo, sideMat);
            addOutline(eMesh, 0xfcd34d);
            eHinge.add(eMesh);
            solidGroup.add(eHinge);

            scene.add(solidGroup);
        }

        function buildPrism3D(fp) {
            solidGroup = new THREE.Group();
            const w = 1.8;
            const h = 2.4;
            const ht = w * Math.sqrt(3) / 2;
            const sa = fp * (Math.PI / 3);
            const ca = fp * (Math.PI / 2);

            const baseMat = getMaterial(0x0284c7, true);
            const sideMat = getMaterial(0xf59e0b);
            const capMat  = getMaterial(0x10b981);

            // Base centrale
            const cGeo = new THREE.PlaneGeometry(w, h);
            cGeo.rotateX(-Math.PI / 2);
            const cMesh = new THREE.Mesh(cGeo, baseMat);
            addOutline(cMesh, 0x38bdf8);
            solidGroup.add(cMesh);

            // Gauche
            const lHinge = new THREE.Group();
            lHinge.position.set(-w/2, 0, 0);
            lHinge.rotation.z = sa;
            const lGeo = new THREE.PlaneGeometry(w, h);
            lGeo.rotateX(-Math.PI / 2);
            lGeo.translate(-w/2, 0, 0);
            const lMesh = new THREE.Mesh(lGeo, sideMat);
            addOutline(lMesh, 0xfcd34d);
            lHinge.add(lMesh);
            solidGroup.add(lHinge);

            // Droite
            const rHinge = new THREE.Group();
            rHinge.position.set(w/2, 0, 0);
            rHinge.rotation.z = -sa;
            const rGeo = new THREE.PlaneGeometry(w, h);
            rGeo.rotateX(-Math.PI / 2);
            rGeo.translate(w/2, 0, 0);
            const rMesh = new THREE.Mesh(rGeo, sideMat);
            addOutline(rMesh, 0xfcd34d);
            rHinge.add(rMesh);
            solidGroup.add(rHinge);

            // Triangle Nord
            const nHinge = new THREE.Group();
            nHinge.position.set(0, 0, -h/2);
            nHinge.rotation.x = -ca;
            const nGeo = new THREE.BufferGeometry();
            nGeo.setAttribute('position', new THREE.BufferAttribute(new Float32Array([
                -w/2, 0, 0,
                 w/2, 0, 0,
                   0, 0, -ht
            ]), 3));
            nGeo.computeVertexNormals();
            const nMesh = new THREE.Mesh(nGeo, capMat);
            addOutline(nMesh, 0x6ee7b7);
            nHinge.add(nMesh);
            solidGroup.add(nHinge);

            // Triangle Sud
            const sHinge = new THREE.Group();
            sHinge.position.set(0, 0, h/2);
            sHinge.rotation.x = ca;
            const sGeo = new THREE.BufferGeometry();
            sGeo.setAttribute('position', new THREE.BufferAttribute(new Float32Array([
                -w/2, 0, 0,
                 w/2, 0, 0,
                   0, 0, ht
            ]), 3));
            sGeo.computeVertexNormals();
            const sMesh = new THREE.Mesh(sGeo, capMat);
            addOutline(sMesh, 0x6ee7b7);
            sHinge.add(sMesh);
            solidGroup.add(sHinge);

            scene.add(solidGroup);
        }

        function buildCylinder3D(fp) {
            solidGroup = new THREE.Group();
            const R = 1.1;
            const H = 2.4;
            const P = 2 * Math.PI * R;
            const N = 36;
            const f = Math.max(0.0001, fp);

            const sideMat = getMaterial(0xf59e0b);
            const capMat  = getMaterial(0x0284c7, true);

            const segWidth = P / N;
            const curAngleTotal = f * 2 * Math.PI;
            const curRadius = f > 0.001 ? R / f : 1000;

            const latGroup = new THREE.Group();

            for (let i = 0; i < N; i++) {
                const segGeo = new THREE.PlaneGeometry(segWidth, H);
                const segMesh = new THREE.Mesh(segGeo, sideMat);

                if (f < 0.001) {
                    const x = (i - N/2 + 0.5) * segWidth;
                    segMesh.position.set(x, 0, 0);
                    segMesh.rotation.x = -Math.PI / 2;
                } else {
                    const angle = (i - N/2 + 0.5) * (curAngleTotal / N);
                    const x = curRadius * Math.sin(angle);
                    const z = curRadius * (1 - Math.cos(angle)) - (curRadius - R);
                    segMesh.position.set(x, 0, z);
                    segMesh.rotation.y = angle;
                }
                latGroup.add(segMesh);
            }

            // Top & Bottom caps
            const topCapHinge = new THREE.Group();
            topCapHinge.position.set(0, H/2 * f, f < 0.001 ? -H/2 - R : 0);
            topCapHinge.rotation.x = -f * (Math.PI / 2);

            const circleGeoTop = new THREE.CircleGeometry(R, 32);
            circleGeoTop.rotateX(-Math.PI / 2);
            if (f < 0.001) circleGeoTop.translate(0, 0, -R);
            const topCapMesh = new THREE.Mesh(circleGeoTop, capMat);
            addOutline(topCapMesh, 0x38bdf8);
            topCapHinge.add(topCapMesh);

            const botCapHinge = new THREE.Group();
            botCapHinge.position.set(0, -H/2 * f, f < 0.001 ? H/2 + R : 0);
            botCapHinge.rotation.x = f * (Math.PI / 2);

            const circleGeoBot = new THREE.CircleGeometry(R, 32);
            circleGeoBot.rotateX(-Math.PI / 2);
            if (f < 0.001) circleGeoBot.translate(0, 0, R);
            const botCapMesh = new THREE.Mesh(circleGeoBot, capMat);
            addOutline(botCapMesh, 0x38bdf8);
            botCapHinge.add(botCapMesh);

            solidGroup.add(latGroup);
            solidGroup.add(topCapHinge);
            solidGroup.add(botCapHinge);

            scene.add(solidGroup);
        }

        function buildCone3D(fp) {
            solidGroup = new THREE.Group();
            const R = 1.1;
            const H = 2.4;
            const A = Math.sqrt(R*R + H*H);
            const N = 36;
            const f = fp;

            const sideMat = getMaterial(0x7c3aed);
            const capMat  = getMaterial(0x0284c7, true);

            const sectorGroup = new THREE.Group();
            const targetTheta = 2 * Math.PI * (R / A);

            for (let i = 0; i < N; i++) {
                const t1 = (i / N) * targetTheta;
                const t2 = ((i + 1) / N) * targetTheta;

                const triGeo = new THREE.BufferGeometry();
                
                if (f < 0.001) {
                    const v = new Float32Array([
                        0, 0, 0,
                        A * Math.cos(t1 - targetTheta/2), 0, A * Math.sin(t1 - targetTheta/2),
                        A * Math.cos(t2 - targetTheta/2), 0, A * Math.sin(t2 - targetTheta/2)
                    ]);
                    triGeo.setAttribute('position', new THREE.BufferAttribute(v, 3));
                } else {
                    const phi1 = (t1 - targetTheta/2) * f;
                    const phi2 = (t2 - targetTheta/2) * f;
                    const curR = R * f + A * (1 - f) * 0.4;
                    const curH = H * f;

                    const v = new Float32Array([
                        0, curH, 0,
                        curR * Math.cos(phi1), 0, curR * Math.sin(phi1),
                        curR * Math.cos(phi2), 0, curR * Math.sin(phi2)
                    ]);
                    triGeo.setAttribute('position', new THREE.BufferAttribute(v, 3));
                }
                triGeo.computeVertexNormals();
                const triMesh = new THREE.Mesh(triGeo, sideMat);
                sectorGroup.add(triMesh);
            }

            const baseHinge = new THREE.Group();
            baseHinge.position.set(0, 0, f < 0.001 ? A*0.8 : 0);
            baseHinge.rotation.x = f * (Math.PI / 2);

            const baseGeo = new THREE.CircleGeometry(R, 32);
            baseGeo.rotateX(-Math.PI / 2);
            if (f < 0.001) baseGeo.translate(0, 0, R);
            const baseMesh = new THREE.Mesh(baseGeo, capMat);
            addOutline(baseMesh, 0x38bdf8);
            baseHinge.add(baseMesh);

            solidGroup.add(sectorGroup);
            solidGroup.add(baseHinge);

            scene.add(solidGroup);
        }

        // Initialisation de la simulation 3D au chargement
        function initApp() {
            init3D();
        }

        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initApp);
        } else {
            initApp();
        }
    </script>
</body>
</html>`;

html = html.replace(oldScriptRegex, newScript);

fs.writeFileSync(targetFile, html, 'utf-8');
console.log('Successfully updated cours.html with high-performance 3D WebGL Three.js simulator!');
