const fs = require('fs');
const path = require('path');

const targetFile = path.join(__dirname, 'ressources', 'seconde', 'maths', 'geometrie-espace-volumes', 'cours.html');

let html = fs.readFileSync(targetFile, 'utf-8');

const oldScriptRegex = /<!-- SCRIPT DU SIMULATEUR 3D WEBGL \(THREE\.JS\) -->[\s\S]*?<\/script>/;

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
                legend: "Patron du Cube : 6 faces carrées identiques ($A = 6 \\times a^2$). Pliage exact à 90°.",
                formula: "<strong>Cube (a = 4 cm) :</strong><br>• $A_{\\\\text{lat}} = 4 \\times a^2 = 64\\text{ cm}^2$<br>• $A_{\\\\text{tot}} = 6 \\times a^2 = 96\\text{ cm}^2$<br>• $V = a^3 = 64\\text{ cm}^3$",
                calc: { alat: "64 cm²", atot: "96 cm²", vol: "64 cm³" }
            },
            cylindre: {
                name: "Cylindre de Révolution",
                legend: "Patron du Cylindre : Rectangle latéral ($2\\pi R \\times h$) qui s'enroule + 2 disques de base.",
                formula: "<strong>Cylindre (R = 3 cm, h = 6 cm) :</strong><br>• $A_{\\\\text{lat}} = 2\\pi R \\times h \\approx 113{,}1\\text{ cm}^2$<br>• $A_{\\\\text{tot}} = A_{\\\\text{lat}} + 2\\pi R^2 \\approx 169{,}6\\text{ cm}^2$<br>• $V = \\pi R^2 h \\approx 169{,}6\\text{ cm}^3$",
                calc: { alat: "113,1 cm²", atot: "169,6 cm²", vol: "169,6 cm³" }
            },
            pyramide: {
                name: "Pyramide à base carrée",
                legend: "Patron de la Pyramide : Base carrée + 4 triangles isocèles se rejoignant au sommet (apex).",
                formula: "<strong>Pyramide (a = 5 cm, h = 6 cm) :</strong><br>• $A_{\\\\text{lat}} = 4 \\times \\frac{a \\cdot h_t}{2} = 65\\text{ cm}^2$<br>• $A_{\\\\text{tot}} = a^2 + A_{\\\\text{lat}} = 90\\text{ cm}^2$<br>• $V = \\frac{1}{3} a^2 h = 50\\text{ cm}^3$",
                calc: { alat: "65 cm²", atot: "90 cm²", vol: "50 cm³" }
            },
            cone: {
                name: "Cône de Révolution",
                legend: "Patron du Cône : Secteur circulaire (génératrice a) s'enroulant + disque de base (rayon R).",
                formula: "<strong>Cône (R = 3 cm, a = 7 cm, h = 6,3 cm) :</strong><br>• $A_{\\\\text{lat}} = \\pi R a \\approx 66{,}0\\text{ cm}^2$<br>• $A_{\\\\text{tot}} = A_{\\\\text{lat}} + \\pi R^2 \\approx 94{,}2\\text{ cm}^2$<br>• $V = \\frac{1}{3}\\pi R^2 h \\approx 59{,}4\\text{ cm}^3$",
                calc: { alat: "66,0 cm²", atot: "94,2 cm²", vol: "59,4 cm³" }
            },
            prisme: {
                name: "Prisme Droit Triangulaire",
                legend: "Patron du Prisme Droit : 3 rectangles latéraux + 2 bases triangulaires articulées.",
                formula: "<strong>Prisme Triangulaire (b = 4 cm, ht = 3,5 cm, h = 6 cm) :</strong><br>• $A_{\\\\text{lat}} = P_{\\\\text{base}} \\times h = 72\\text{ cm}^2$<br>• $A_{\\\\text{tot}} = A_{\\\\text{lat}} + 2 A_{\\\\text{base}} = 86\\text{ cm}^2$<br>• $V = A_{\\\\text{base}} \\times h = 42\\text{ cm}^3$",
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
                camera.position.set(0, 3.2, 6.0);
                controls.target.set(0, 1.0, 0);
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
            camera.position.set(0, 3.2, 6.0);

            renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
            renderer.setSize(width, height);
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
            renderer.shadowMap.enabled = true;
            container.appendChild(renderer.domElement);

            if (typeof THREE.OrbitControls !== 'undefined') {
                controls = new THREE.OrbitControls(camera, renderer.domElement);
                controls.enableDamping = true;
                controls.dampingFactor = 0.08;
                controls.target.set(0, 1.0, 0);
                controls.maxPolarAngle = Math.PI / 2 + 0.15;
            }

            // Studio Lighting
            const ambient = new THREE.AmbientLight(0xffffff, 0.85);
            scene.add(ambient);

            const sun = new THREE.DirectionalLight(0xffffff, 0.95);
            sun.position.set(6, 12, 8);
            scene.add(sun);

            const cyanLight = new THREE.DirectionalLight(0x38bdf8, 0.5);
            cyanLight.position.set(-6, -4, -6);
            scene.add(cyanLight);

            // Ground Grid
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
                    roughness: 0.2,
                    metalness: 0.1,
                    transparent: true,
                    opacity: 0.75,
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

        // ==========================================
        // 1. CUBE / PAVÉ (Fermeture 3D exacte)
        // ==========================================
        function buildCube3D(fp) {
            solidGroup = new THREE.Group();
            const s = 1.8;
            const fa = fp * (Math.PI / 2);

            const baseMat = getMaterial(0x0284c7, true);
            const sideMat = getMaterial(0xf59e0b);
            const topMat  = getMaterial(0x10b981);

            // Base au sol
            const baseGeo = new THREE.PlaneGeometry(s, s);
            baseGeo.rotateX(-Math.PI / 2);
            const baseMesh = new THREE.Mesh(baseGeo, baseMat);
            addOutline(baseMesh, 0x38bdf8);
            solidGroup.add(baseMesh);

            // Face Nord
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

            // Face Sud
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

            // Face Ouest
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

            // Face Est
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

            // Couvercle
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

        // ==========================================
        // 2. PYRAMIDE À BASE CARRÉE (Pliage vers le HAUT vers le Sommet)
        // ==========================================
        function buildPyramid3D(fp) {
            solidGroup = new THREE.Group();
            const s = 2.0;
            const h = 2.2;
            const L = Math.sqrt((s/2)*(s/2) + h*h);
            const thetaClose = Math.atan2(h, s/2);
            const fa = fp * thetaClose;

            const baseMat = getMaterial(0x0284c7, true);
            const sideMat = getMaterial(0xf59e0b);

            // Base Carrée au sol Y=0
            const baseGeo = new THREE.PlaneGeometry(s, s);
            baseGeo.rotateX(-Math.PI / 2);
            const baseMesh = new THREE.Mesh(baseGeo, baseMat);
            addOutline(baseMesh, 0x38bdf8);
            solidGroup.add(baseMesh);

            // Triangle Nord (charnière z = -s/2, pointe vers -Z) -> rotation.x = +fa (PLIE VERS LE HAUT)
            const nHinge = new THREE.Group();
            nHinge.position.set(0, 0, -s/2);
            nHinge.rotation.x = fa;
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

            // Triangle Sud (charnière z = +s/2, pointe vers +Z) -> rotation.x = -fa (PLIE VERS LE HAUT)
            const sHinge = new THREE.Group();
            sHinge.position.set(0, 0, s/2);
            sHinge.rotation.x = -fa;
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

            // Triangle Ouest (charnière x = -s/2, pointe vers -X) -> rotation.z = -fa (PLIE VERS LE HAUT)
            const wHinge = new THREE.Group();
            wHinge.position.set(-s/2, 0, 0);
            wHinge.rotation.z = -fa;
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

            // Triangle Est (charnière x = +s/2, pointe vers +X) -> rotation.z = +fa (PLIE VERS LE HAUT)
            const eHinge = new THREE.Group();
            eHinge.position.set(s/2, 0, 0);
            eHinge.rotation.z = fa;
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

        // ==========================================
        // 3. PRISME DROIT TRIANGULAIRE (Pliage vers le HAUT)
        // ==========================================
        function buildPrism3D(fp) {
            solidGroup = new THREE.Group();
            const w = 1.8;
            const h = 2.4;
            const ht = w * Math.sqrt(3) / 2; // ~1.5588
            const sa = fp * (Math.PI / 3); // 60 deg
            const ca = fp * (Math.PI / 2); // 90 deg

            const baseMat = getMaterial(0x0284c7, true);
            const sideMat = getMaterial(0xf59e0b);
            const capMat  = getMaterial(0x10b981);

            // Base centrale rectangulaire sur XZ
            const cGeo = new THREE.PlaneGeometry(w, h);
            cGeo.rotateX(-Math.PI / 2);
            const cMesh = new THREE.Mesh(cGeo, baseMat);
            addOutline(cMesh, 0x38bdf8);
            solidGroup.add(cMesh);

            // Face Gauche (charnière x = -w/2, pointe vers -X) -> Pliage HAUT => rotation.z = -sa
            const lHinge = new THREE.Group();
            lHinge.position.set(-w/2, 0, 0);
            lHinge.rotation.z = -sa;
            const lGeo = new THREE.PlaneGeometry(w, h);
            lGeo.rotateX(-Math.PI / 2);
            lGeo.translate(-w/2, 0, 0);
            const lMesh = new THREE.Mesh(lGeo, sideMat);
            addOutline(lMesh, 0xfcd34d);
            lHinge.add(lMesh);
            solidGroup.add(lHinge);

            // Face Droite (charnière x = +w/2, pointe vers +X) -> Pliage HAUT => rotation.z = +sa
            const rHinge = new THREE.Group();
            rHinge.position.set(w/2, 0, 0);
            rHinge.rotation.z = sa;
            const rGeo = new THREE.PlaneGeometry(w, h);
            rGeo.rotateX(-Math.PI / 2);
            rGeo.translate(w/2, 0, 0);
            const rMesh = new THREE.Mesh(rGeo, sideMat);
            addOutline(rMesh, 0xfcd34d);
            rHinge.add(rMesh);
            solidGroup.add(rHinge);

            // Triangle Nord (charnière z = -h/2, pointe vers -Z) -> Pliage HAUT => rotation.x = +ca
            const nHinge = new THREE.Group();
            nHinge.position.set(0, 0, -h/2);
            nHinge.rotation.x = ca;
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

            // Triangle Sud (charnière z = +h/2, pointe vers +Z) -> Pliage HAUT => rotation.x = -ca
            const sHinge = new THREE.Group();
            sHinge.position.set(0, 0, h/2);
            sHinge.rotation.x = -ca;
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

        // ==========================================
        // 4. CYLINDRE DE RÉVOLUTION (Enroulement 3D fluide et disques fermés)
        // ==========================================
        function buildCylinder3D(fp) {
            solidGroup = new THREE.Group();
            const R = 1.0;
            const H = 2.2;
            const P = 2 * Math.PI * R;
            const N = 48;
            const f = fp;

            const sideMat = getMaterial(0xf59e0b);
            const capMat  = getMaterial(0x0284c7, true);

            const segWidth = P / N;
            const curAngleTotal = f * 2 * Math.PI;

            const latGroup = new THREE.Group();

            for (let i = 0; i < N; i++) {
                const segGeo = new THREE.PlaneGeometry(segWidth, H);
                segGeo.rotateX(-Math.PI / 2); // à plat sur XZ au départ

                const segMesh = new THREE.Mesh(segGeo, sideMat);

                if (f <= 0.001) {
                    const x = (i - N/2 + 0.5) * segWidth;
                    segMesh.position.set(x, 0, 0);
                } else {
                    const curRadius = R / f;
                    const angle = (i - N/2 + 0.5) * (curAngleTotal / N);
                    const x = curRadius * Math.sin(angle);
                    const z = -curRadius * (1 - Math.cos(angle));
                    segMesh.position.set(x, 0, z);
                    segMesh.rotation.y = angle;
                }
                latGroup.add(segMesh);
            }

            // Incurver la surface latérale en position verticale selon le pliage
            if (f > 0.001) {
                latGroup.children.forEach(mesh => {
                    mesh.rotation.x = f * (Math.PI / 2);
                    mesh.position.y = (H / 2) * f;
                });
            }

            // Disque Supérieur (Couvercle)
            const topHinge = new THREE.Group();
            const curH = f * H;
            topHinge.position.set(0, curH, f <= 0.001 ? -R : 0);
            topHinge.rotation.x = f * (Math.PI / 2);

            const circleGeoTop = new THREE.CircleGeometry(R, 32);
            circleGeoTop.rotateX(-Math.PI / 2);
            if (f <= 0.001) circleGeoTop.translate(0, 0, -R);
            const topMesh = new THREE.Mesh(circleGeoTop, capMat);
            addOutline(topMesh, 0x38bdf8);
            topHinge.add(topMesh);

            // Disque Inférieur (Base)
            const botHinge = new THREE.Group();
            botHinge.position.set(0, 0, f <= 0.001 ? R : 0);
            botHinge.rotation.x = -f * (Math.PI / 2);

            const circleGeoBot = new THREE.CircleGeometry(R, 32);
            circleGeoBot.rotateX(-Math.PI / 2);
            if (f <= 0.001) circleGeoBot.translate(0, 0, R);
            const botMesh = new THREE.Mesh(circleGeoBot, capMat);
            addOutline(botMesh, 0x38bdf8);
            botHinge.add(botMesh);

            solidGroup.add(latGroup);
            solidGroup.add(topHinge);
            solidGroup.add(botHinge);

            scene.add(solidGroup);
        }

        // ==========================================
        // 5. CÔNE DE RÉVOLUTION (Enroulement 3D fluide)
        // ==========================================
        function buildCone3D(fp) {
            solidGroup = new THREE.Group();
            const R = 1.0;
            const H = 2.2;
            const A = Math.sqrt(R*R + H*H); // ~2.4166
            const N = 48;
            const f = fp;

            const sideMat = getMaterial(0x7c3aed);
            const capMat  = getMaterial(0x0284c7, true);

            const targetTheta = 2 * Math.PI * (R / A);
            const curTheta = f * 2 * Math.PI + (1 - f) * targetTheta;
            const curHeight = f * H;
            const curRadius = f * R + (1 - f) * A;

            const sectorGroup = new THREE.Group();

            for (let i = 0; i < N; i++) {
                const t1 = (i / N) * curTheta - curTheta / 2;
                const t2 = ((i + 1) / N) * curTheta - curTheta / 2;

                const triGeo = new THREE.BufferGeometry();
                
                if (f <= 0.001) {
                    // Secteur à plat 2D sur plan XZ
                    const v = new Float32Array([
                        0, 0, 0,
                        A * Math.sin(t1), 0, A * Math.cos(t1),
                        A * Math.sin(t2), 0, A * Math.cos(t2)
                    ]);
                    triGeo.setAttribute('position', new THREE.BufferAttribute(v, 3));
                } else {
                    // Cône 3D s'enroulant progressivement VERS LE HAUT
                    const v = new Float32Array([
                        0, curHeight, 0,
                        curRadius * Math.sin(t1), 0, curRadius * Math.cos(t1),
                        curRadius * Math.sin(t2), 0, curRadius * Math.cos(t2)
                    ]);
                    triGeo.setAttribute('position', new THREE.BufferAttribute(v, 3));
                }
                triGeo.computeVertexNormals();
                const triMesh = new THREE.Mesh(triGeo, sideMat);
                sectorGroup.add(triMesh);
            }

            // Disque de Base du Cône
            const baseHinge = new THREE.Group();
            baseHinge.position.set(0, 0, f <= 0.001 ? A : 0);
            baseHinge.rotation.x = -f * (Math.PI / 2);

            const baseGeo = new THREE.CircleGeometry(R, 32);
            baseGeo.rotateX(-Math.PI / 2);
            if (f <= 0.001) baseGeo.translate(0, 0, R);
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
console.log('Applied trig fix to cours.html for ALL 5 SOLIDS!');
