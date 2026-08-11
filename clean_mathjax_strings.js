const fs = require('fs');
const path = require('path');

const targetFile = path.join(__dirname, 'ressources', 'seconde', 'maths', 'geometrie-espace-volumes', 'cours.html');

let html = fs.readFileSync(targetFile, 'utf-8');

const cleanSolidsConfig = `        const SOLIDS_CONFIG = {
            cube: {
                name: "Cube / Pavé",
                legend: "Patron du Cube : 6 faces carrées identiques ($A = 6 \\times a^2$). Pliage exact à 90°.",
                formula: "<strong>Cube (a = 4 cm) :</strong><br>• $A_{\\\\text{lat}} = 4 \\times a^2 = 64 \\text{ cm}^2$<br>• $A_{\\\\text{tot}} = 6 \\times a^2 = 96 \\text{ cm}^2$<br>• $V = a^3 = 64 \\text{ cm}^3$",
                calc: { alat: "64 cm²", atot: "96 cm²", vol: "64 cm³" }
            },
            cylindre: {
                name: "Cylindre de Révolution",
                legend: "Patron du Cylindre : Rectangle latéral ($2\\pi R \\times h$) qui s'enroule + 2 disques de base.",
                formula: "<strong>Cylindre (R = 3 cm, h = 6 cm) :</strong><br>• $A_{\\\\text{lat}} = 2\\pi R h \\approx 113{,}1 \\text{ cm}^2$<br>• $A_{\\\\text{tot}} = A_{\\\\text{lat}} + 2\\pi R^2 \\approx 169{,}6 \\text{ cm}^2$<br>• $V = \\pi R^2 h \\approx 169{,}6 \\text{ cm}^3$",
                calc: { alat: "113,1 cm²", atot: "169,6 cm²", vol: "169,6 cm³" }
            },
            pyramide: {
                name: "Pyramide à base carrée",
                legend: "Patron de la Pyramide : Base carrée + 4 triangles isocèles se rejoignant au sommet (apex).",
                formula: "<strong>Pyramide (a = 5 cm, h = 6 cm) :</strong><br>• $A_{\\\\text{lat}} = 4 \\times \\frac{a \\times h_t}{2} = 65 \\text{ cm}^2$<br>• $A_{\\\\text{tot}} = a^2 + A_{\\\\text{lat}} = 90 \\text{ cm}^2$<br>• $V = \\frac{1}{3} a^2 h = 50 \\text{ cm}^3$",
                calc: { alat: "65 cm²", atot: "90 cm²", vol: "50 cm³" }
            },
            cone: {
                name: "Cône de Révolution",
                legend: "Patron du Cône : Secteur circulaire (génératrice a) s'enroulant + disque de base (rayon R).",
                formula: "<strong>Cône (R = 3 cm, a = 7 cm, h = 6,3 cm) :</strong><br>• $A_{\\\\text{lat}} = \\pi R a \\approx 66{,}0 \\text{ cm}^2$<br>• $A_{\\\\text{tot}} = A_{\\\\text{lat}} + \\pi R^2 \\approx 94{,}2 \\text{ cm}^2$<br>• $V = \\frac{1}{3}\\pi R^2 h \\approx 59{,}4 \\text{ cm}^3$",
                calc: { alat: "66,0 cm²", atot: "94,2 cm²", vol: "59,4 cm³" }
            },
            prisme: {
                name: "Prisme Droit Triangulaire",
                legend: "Patron du Prisme Droit : 3 rectangles latéraux + 2 bases triangulaires articulées.",
                formula: "<strong>Prisme Triangulaire (b = 4 cm, ht = 3,5 cm, h = 6 cm) :</strong><br>• $A_{\\\\text{lat}} = P_{\\\\text{base}} \\times h = 72 \\text{ cm}^2$<br>• $A_{\\\\text{tot}} = A_{\\\\text{lat}} + 2 A_{\\\\text{base}} = 86 \\text{ cm}^2$<br>• $V = A_{\\\\text{base}} \\times h = 42 \\text{ cm}^3$",
                calc: { alat: "72 cm²", atot: "86 cm²", vol: "42 cm³" }
            }
        };`;

const configRegex = /const SOLIDS_CONFIG = {[\s\S]*?};/;
html = html.replace(configRegex, cleanSolidsConfig);

fs.writeFileSync(targetFile, html, 'utf-8');
console.log('Cleaned MathJax strings in cours.html!');
