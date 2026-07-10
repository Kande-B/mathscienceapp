/**
 * ⚠️ FICHIER DÉPRÉCIÉ
 * 
 * Le point d'entrée principal est maintenant dans :
 *   electron/main.js
 * 
 * Ce fichier est conservé uniquement pour compatibilité.
 * Vous pouvez le supprimer en toute sécurité.
 * 
 * Le package.json pointe désormais sur "electron/main.js"
 */

console.warn('[DEPRECATED] Le fichier main.js racine n\'est plus utilisé. Utilisez electron/main.js');

// Redirection de secours (au cas où quelqu'un lance "electron ." directement)
const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 1280,
    height: 800,
    title: "Maths & Sciences - M. KANDE (version legacy)",
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true
    }
  });
  win.loadFile('index.html');
}

app.whenReady().then(createWindow);
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
