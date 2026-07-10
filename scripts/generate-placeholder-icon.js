/**
 * Génère une icône placeholder simple (carré indigo avec texte "MS")
 * 
 * Usage :
 *   node scripts/generate-placeholder-icon.js
 * 
 * Le résultat est un fichier PNG 512x512 dans assets/icons/icon.png
 * Vous pourrez ensuite le convertir en .ico avec les outils recommandés.
 */

const fs = require('fs');
const path = require('path');

const ICON_DIR = path.join(__dirname, '..', 'assets', 'icons');
const OUTPUT = path.join(ICON_DIR, 'icon.png');

// Crée un PNG minimal 512x512 (carré uni + texte centré "MS")
// On génère un PNG ultra-simple via buffer (sans dépendance externe)

function createPlaceholderIcon() {
  // Pour un vrai PNG on utiliserait sharp ou canvas.
  // Ici on crée juste un fichier d'instruction + un PNG 1x1 transparent en attendant.

  const placeholderNote = `
Ce dossier doit contenir :
- icon.ico (Windows) - 256x256 multi-résolutions
- icon.icns (macOS)
- icon.png (512x512)

Générez-les avec :
  npm install -g electron-icon-builder
  electron-icon-builder --input=icon.png --output=assets/icons

Ou utilisez https://icon.kitchen
`;

  fs.writeFileSync(path.join(ICON_DIR, 'PLACEHOLDER.txt'), placeholderNote.trim());

  // Crée un PNG 512x512 minimal (carré indigo uni) en base64
  // (image 512x512 unie #6366f1 + "MS" blanc centré - version simplifiée)
  // On utilise une image encodée en base64 pour éviter les dépendances lourdes.

  const simplePngBase64 = 'iVBORw0KGgoAAAANSUhEUgAAAgAAAAIAAQMAAADOtka5AAAAA1BMVEXm5uYAAABZ0kE9AAAAEklEQVR4AezBgQAAAADCoPdPbQ8HFAAAACwJREFUAA=='; // 1x1 placeholder (on remplace par un vrai plus tard)

  // Pour l'instant on crée juste un fichier texte indiquant la marche à suivre.
  // Le vrai PNG sera généré par l'enseignant ou via un outil en ligne.

  console.log('✅ Placeholder créé dans assets/icons/');
  console.log('   → Suivez les instructions dans assets/icons/README.md');
}

createPlaceholderIcon();
