require('dotenv').config();
const fs = require('fs');
const path = require('path');
const { GoogleGenAI } = require('@google/genai');

if (!process.env.GEMINI_API_KEY) {
    console.error("ERREUR : Vous devez définir GEMINI_API_KEY dans un fichier .env à la racine du projet.");
    process.exit(1);
}

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
const dataPath = path.join(__dirname, '..', 'data', 'formations.json');
let data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

const COURS_PROMPT = `Tu es un professeur de Mathématiques/Sciences en lycée professionnel.
Rédige le code HTML complet (juste le HTML, sans Markdown autour) d'un cours structuré pour des élèves de lycée professionnel sur le thème : "{SEQUENCE_TITLE}".
Utilise le même design HTML Tailwind CSS que le fichier de référence fourni (avec des encadrés bleus pour Définitions, verts pour Propriétés, jaunes pour Méthodes, violets pour Applications pro).
Le contenu doit respecter scrupuleusement le Bulletin Officiel (BO) et être riche, structuré par chapitres (I, II, III).
Inclus des exemples concrets liés au monde du travail. Ne mets pas les balises markdown \`\`\`html. Le code doit commencer par <!DOCTYPE html>.`;

const TD_PROMPT = `Tu es un professeur de Mathématiques/Sciences en lycée professionnel.
Rédige le code HTML complet d'une fiche de TD (Exercices) sur le thème : "{SEQUENCE_TITLE}".
Utilise le même design HTML Tailwind CSS que le modèle fourni.
Le TD doit être progressif avec 4 niveaux (Niveau 1: Automatismes, Niveau 2: Application, Niveau 3: Contextualisation Pro, Niveau 4: Tâche Complexe).
Inclus au moins 6 exercices au total. Ajoute des zones en pointillé pour que les élèves puissent écrire sur la feuille imprimée. Ne mets pas les balises markdown \`\`\`html.`;

const TP_PROMPT = `Tu es un professeur de Mathématiques/Sciences en lycée professionnel.
Rédige le code HTML complet d'un Travail Pratique (TP) sur le thème : "{SEQUENCE_TITLE}".
Utilise le même design HTML Tailwind CSS que le modèle fourni.
Le TP doit présenter une "Mise en situation" professionnelle concrète (avec documents de référence) suivie d'un "Travail à réaliser" (missions à accomplir par l'élève). Ne mets pas les balises markdown \`\`\`html.`;

const REFERENCE_HTML = `<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Titre</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Outfit:wght@400;500;600;700;800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        body { font-family: 'Inter', sans-serif; background-color: #f8fafc; }
        h1, h2, h3, h4 { font-family: 'Outfit', sans-serif; }
        .def-box { border-left: 4px solid #3b82f6; background-color: #eff6ff; }
        .prop-box { border-left: 4px solid #10b981; background-color: #ecfdf5; }
        .meth-box { border-left: 4px solid #f59e0b; background-color: #fffbeb; }
        .ex-box { border-left: 4px solid #8b5cf6; background-color: #f5f3ff; }
    </style>
    <script>
        MathJax = {
            tex: { inlineMath: [['$', '$'], ['\\(', '\\)']] }
        };
    </script>
    <script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js"></script>
</head>
<body class="text-slate-800 antialiased pb-20">
    <header class="bg-white shadow-sm border-b border-slate-200 sticky top-0 z-50">... (Même header avec icônes appropriées)</header>
    <main class="max-w-4xl mx-auto px-6 mt-8 space-y-10">...</main>
</body></html>`;

async function generateHTML(prompt, sequenceTitle) {
    const fullPrompt = prompt.replace('{SEQUENCE_TITLE}', sequenceTitle) + 
                       "\n\nVoici le modèle HTML Tailwind à respecter strictement pour le design:\n" + REFERENCE_HTML;
    
    console.log("⏳ Génération par l'IA en cours...");
    const response = await ai.models.generateContent({
        model: 'gemini-1.5-flash',
        contents: fullPrompt,
        config: { temperature: 0.2 }
    });
    
    let text = response.text;
    if (text.startsWith('```html')) {
        text = text.replace(/^```html\n?/, '').replace(/\n?```$/, '');
    }
    return text.trim();
}

function slugify(text) {
    return text.toString().toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^\w\-]+/g, '')
        .replace(/\-\-+/g, '-')
        .replace(/^-+/, '')
        .replace(/-+$/, '');
}

async function main() {
    console.log("==========================================");
    console.log("🤖 Générateur Automatique de Séquences IA");
    console.log("==========================================\n");

    const classId = process.argv[2];
    const domain = process.argv[3];
    const seqIdx = process.argv[4];

    if (!classId || !domain || !seqIdx) {
        console.error("Usage: node generate_content.js <classId> <domain> <sequenceIndex>");
        process.exit(1);
    }

    const classe = data.find(f => f.id === classId);
    if (!classe) {
        console.error("Classe introuvable.");
        process.exit(1);
    }

    if (!classe.resources[domain]) {
        console.error("Domaine invalide.");
        process.exit(1);
    }

    const sequence = classe.resources[domain][parseInt(seqIdx)];
    if (!sequence) {
        console.error("Séquence introuvable.");
        process.exit(1);
    }

    const seqTitle = (sequence.title || sequence.titre).replace('Séquence : ', '');
    const folderName = slugify(seqTitle);
    const destFolder = path.join(__dirname, '..', 'ressources', classId, folderName);

    console.log(`\nCréation des ressources pour "${seqTitle}" dans le dossier: ${destFolder}`);
    if (!fs.existsSync(destFolder)) {
        fs.mkdirSync(destFolder, { recursive: true });
    }

    try {
        console.log("\n1/3 - Génération du Cours...");
        const coursHtml = await generateHTML(COURS_PROMPT, seqTitle);
        fs.writeFileSync(path.join(destFolder, 'cours.html'), coursHtml);

        console.log("\n2/3 - Génération du TD...");
        const tdHtml = await generateHTML(TD_PROMPT, seqTitle);
        fs.writeFileSync(path.join(destFolder, 'td.html'), tdHtml);

        console.log("\n3/3 - Génération du TP...");
        const tpHtml = await generateHTML(TP_PROMPT, seqTitle);
        fs.writeFileSync(path.join(destFolder, 'tp.html'), tpHtml);

        console.log("\n✅ Fichiers HTML générés avec succès !");

        sequence.items = [
            {
                "id": Date.now() + 1,
                "titre": `Leçon - ${seqTitle}`,
                "type": "Cours",
                "desc": "Cours structuré avec définitions, propriétés et méthodes.",
                "url": `ressources/${classId}/${folderName}/cours.html`,
                "date": new Date().toLocaleDateString('fr-FR'),
                "category": "cours"
            },
            {
                "id": Date.now() + 2,
                "titre": `TD Complet - ${seqTitle}`,
                "type": "Exercices",
                "desc": "Fiche d'exercices à imprimer (4 niveaux progressifs).",
                "url": `ressources/${classId}/${folderName}/td.html`,
                "date": new Date().toLocaleDateString('fr-FR'),
                "category": "exercices"
            },
            {
                "id": Date.now() + 3,
                "titre": `TP - Application Pro`,
                "type": "TP",
                "desc": "Mise en situation professionnelle.",
                "url": `ressources/${classId}/${folderName}/tp.html`,
                "date": new Date().toLocaleDateString('fr-FR'),
                "category": "tp"
            }
        ];

        fs.writeFileSync(dataPath, JSON.stringify(data, null, 2), 'utf8');
        console.log("💾 formations.json mis à jour !");

    } catch (error) {
        console.error("Erreur lors de la génération :", error);
    }
}

main();
