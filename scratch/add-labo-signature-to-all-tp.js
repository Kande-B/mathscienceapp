const fs = require('fs');
const path = require('path');

const ressourcesDir = path.join(__dirname, '..', 'ressources');

function findTpFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      findTpFiles(filePath, fileList);
    } else if (file === 'tice.html' || file === 'tp.html') {
      fileList.push(filePath);
    }
  });
  return fileList;
}

const tpFiles = findTpFiles(ressourcesDir);
console.log(`🔍 Trouvé ${tpFiles.length} fichiers TP/TICE dans ressources/`);

let updatedCount = 0;

const headerBadgeHTML = `<span class="bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-[10px] font-extrabold px-2.5 py-0.5 rounded-full border border-purple-300/30 flex items-center gap-1 shadow-sm"><i class="fa-solid fa-flask-vial text-yellow-300"></i> Labo Maths Sciences</span>`;
const titleBadgeHTML = `<div class="inline-flex items-center gap-2 bg-slate-900 border border-purple-500/40 text-purple-200 text-xs font-extrabold px-4 py-1.5 rounded-full shadow-md"><i class="fa-solid fa-atom text-amber-400 text-sm"></i> <span>Laboratoire Virtuel &amp; Réel • Propulsé par <strong>Labo Maths Sciences</strong></span></div>`;
const footerBadgeHTML = `\n        <!-- FOOTER BRANDING LABO MATHS SCIENCES -->\n        <div class="text-center pt-8 border-t border-slate-200 no-print">\n            <div class="inline-flex items-center gap-2 bg-slate-900 text-white text-xs font-bold px-4 py-2 rounded-xl shadow-md border border-slate-700">\n                <i class="fa-solid fa-flask text-emerald-400"></i>\n                <span>Module Expérimental Hybride (Réel &amp; Virtuel) • Propulsé par <strong>Labo Maths Sciences</strong></span>\n            </div>\n        </div>\n`;

tpFiles.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  if (!content.includes('Labo Maths Sciences')) {
    let modified = false;

    // 1. Inject header badge
    if (content.includes('Physique-Chimie</span>')) {
      content = content.replace(
        'Physique-Chimie</span>',
        `Physique-Chimie</span> ${headerBadgeHTML}`
      );
      modified = true;
    } else if (content.includes('Mathématiques</span>')) {
      content = content.replace(
        'Mathématiques</span>',
        `Mathématiques</span> ${headerBadgeHTML}`
      );
      modified = true;
    }

    // 2. Inject title badge above main H1
    if (content.includes('<div class="text-center space-y-3">')) {
      content = content.replace(
        '<div class="text-center space-y-3">',
        `<div class="text-center space-y-3">\n            ${titleBadgeHTML}`
      );
      modified = true;
    }

    // 3. Inject footer badge before </main>
    if (content.includes('</main>')) {
      content = content.replace('</main>', `${footerBadgeHTML}\n    </main>`);
      modified = true;
    }

    if (modified) {
      fs.writeFileSync(file, content, 'utf8');
      updatedCount++;
      console.log(`✅ Signature ajoutée : ${path.relative(ressourcesDir, file)}`);
    }
  } else {
    console.log(`ℹ️ Déjà signé : ${path.relative(ressourcesDir, file)}`);
  }
});

console.log(`\n🎉 Terminé ! ${updatedCount} fichiers TP/TICE ont été estampillés "Labo Maths Sciences".`);
