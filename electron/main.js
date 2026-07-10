/**
 * Main Process - Electron
 * Application Maths & Sciences - Lycée Professionnel Gustave Eiffel
 * 
 * Ce fichier gère :
 * - La fenêtre principale
 * - Le menu natif
 * - Les dialogues "À propos"
 * - Les opérations IPC sécurisées (sauvegarde, export, etc.)
 * - La préparation pour les mises à jour automatiques
 */

const { app, BrowserWindow, Menu, dialog, shell, ipcMain } = require('electron');
const path = require('path');
const fs = require('fs');

// Variables d'environnement
const isDev = process.argv.includes('--dev') || !app.isPackaged;
const APP_VERSION = app.getVersion();
const APP_NAME = 'Maths & Sciences - Lycée Gustave Eiffel';

// Référence à la fenêtre principale
let mainWindow = null;
let aboutWindow = null;

/**
 * Crée la fenêtre principale de l'application
 */
function createMainWindow() {
  mainWindow = new BrowserWindow({
    width: 1400,
    height: 900,
    minWidth: 1024,
    minHeight: 700,
    title: APP_NAME,
    icon: getIconPath(),
    backgroundColor: '#f8fafc',
    show: true, // On affiche immédiatement pour déboguer
    webPreferences: {
      nodeIntegration: false,           // Sécurité : jamais de Node direct dans le renderer
      contextIsolation: true,           // Sécurité : isolation du contexte
      preload: path.join(__dirname, 'preload.js'),
      sandbox: true,                    // Sécurité supplémentaire
      spellcheck: true,
    },
  });

  // Charge l'interface principale
  const indexPath = path.join(__dirname, '..', 'index.html');
  mainWindow.loadFile(indexPath);

  // Affiche la fenêtre quand elle est prête (meilleure UX)
  mainWindow.once('ready-to-show', () => {
    mainWindow.show();
    
    // Ouvre les DevTools automatiquement en mode développement
    if (isDev) {
      mainWindow.webContents.openDevTools({ mode: 'detach' });
    }
  });

  // Gestion de la fermeture
  mainWindow.on('closed', () => {
    mainWindow = null;
  });

  // Empêche la navigation vers l'extérieur (sécurité)
  mainWindow.webContents.setWindowOpenHandler(({ url }) => {
    // Autorise seulement les liens http/https (on les ouvre dans le navigateur système)
    if (url.startsWith('http:') || url.startsWith('https:')) {
      shell.openExternal(url);
    }
    return { action: 'deny' };
  });
}

/**
 * Retourne le chemin de l'icône selon la plateforme
 */
function getIconPath() {
  const iconDir = path.join(__dirname, '..', 'assets', 'icons');
  
  if (process.platform === 'win32') {
    return path.join(iconDir, 'icon.ico');
  } else if (process.platform === 'darwin') {
    return path.join(iconDir, 'icon.icns');
  } else {
    return path.join(iconDir, 'icon.png');
  }
}

/**
 * Crée le menu natif de l'application (très important pour une app de qualité)
 */
function createMenu() {
  const isMac = process.platform === 'darwin';

  const template = [
    // Menu Fichier
    {
      label: 'Fichier',
      submenu: [
        {
          label: 'Exporter les données (JSON)',
          accelerator: 'CmdOrCtrl+E',
          click: async () => {
            mainWindow?.webContents.send('menu:action', 'export-data');
          },
        },
        {
          label: 'Importer des données (JSON)',
          accelerator: 'CmdOrCtrl+I',
          click: async () => {
            mainWindow?.webContents.send('menu:action', 'import-data');
          },
        },
        { type: 'separator' },
        {
          label: 'Mode Enseignant',
          accelerator: 'CmdOrCtrl+Shift+T',
          click: () => {
            mainWindow?.webContents.send('menu:action', 'open-teacher-admin');
          },
        },
        { type: 'separator' },
        isMac ? { role: 'close' } : { role: 'quit', label: 'Quitter' },
      ],
    },

    // Menu Édition (standard)
    {
      label: 'Édition',
      submenu: [
        { role: 'undo', label: 'Annuler' },
        { role: 'redo', label: 'Rétablir' },
        { type: 'separator' },
        { role: 'cut', label: 'Couper' },
        { role: 'copy', label: 'Copier' },
        { role: 'paste', label: 'Coller' },
        { role: 'selectAll', label: 'Tout sélectionner' },
      ],
    },

    // Menu Affichage
    {
      label: 'Affichage',
      submenu: [
        { role: 'reload', label: 'Recharger' },
        { role: 'forceReload', label: 'Forcer le rechargement' },
        { role: 'toggleDevTools', label: 'Outils de développement' },
        { type: 'separator' },
        { role: 'resetZoom', label: 'Zoom normal' },
        { role: 'zoomIn', label: 'Zoom avant' },
        { role: 'zoomOut', label: 'Zoom arrière' },
        { type: 'separator' },
        { role: 'togglefullscreen', label: 'Plein écran' },
      ],
    },

    // Menu Enseignant (spécifique à l'application)
    {
      label: 'Enseignant',
      submenu: [
        {
          label: 'Panneau d\'administration',
          accelerator: 'CmdOrCtrl+Shift+A',
          click: () => {
            mainWindow?.webContents.send('menu:action', 'open-teacher-admin');
          },
        },
        { type: 'separator' },
        {
          label: 'Ouvrir le dossier des données',
          click: async () => {
            const dataPath = path.join(__dirname, '..', 'data');
            await shell.openPath(dataPath);
          },
        },
        {
          label: 'Ouvrir le guide enseignant',
          click: () => {
            const guidePath = path.join(__dirname, '..', 'GUIDE-ENSEIGNANT.md');
            shell.openExternal(`file://${guidePath}`);
          },
        },
      ],
    },

    // Menu Fenêtre (macOS uniquement)
    ...(isMac
      ? [
          {
            label: 'Fenêtre',
            submenu: [
              { role: 'minimize' },
              { role: 'close' },
              { role: 'front' },
            ],
          },
        ]
      : []),

    // Menu Aide
    {
      label: 'Aide',
      submenu: [
        {
          label: `À propos de ${APP_NAME}`,
          click: () => {
            createAboutWindow();
          },
        },
        {
          label: 'Contacter M. KANDE',
          click: () => {
            shell.openExternal('mailto:boubacar.kande@ac-creteil.fr');
          },
        },
        { type: 'separator' },
        {
          label: 'Documentation enseignant',
          click: () => {
            const guidePath = path.join(__dirname, '..', 'GUIDE-ENSEIGNANT.md');
            shell.openExternal(`file://${guidePath}`);
          },
        },
        {
          label: 'Vérifier les mises à jour',
          click: () => {
            mainWindow?.webContents.send('menu:action', 'check-updates');
          },
        },
      ],
    },
  ];

  const menu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(menu);
}

/**
 * Crée la fenêtre "À propos" (fenêtre native élégante)
 */
function createAboutWindow() {
  if (aboutWindow) {
    aboutWindow.focus();
    return;
  }

  aboutWindow = new BrowserWindow({
    width: 420,
    height: 380,
    resizable: false,
    minimizable: false,
    maximizable: false,
    parent: mainWindow,
    modal: true,
    icon: getIconPath(),
    backgroundColor: '#0f172a',
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
    },
  });

  const aboutHTML = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600&amp;family=Space+Grotesk:wght@600&amp;display=swap');
        body {
          font-family: 'Inter', system-ui, sans-serif;
          background: linear-gradient(145deg, #0f172a, #1e293b);
          color: #e2e8f0;
          margin: 0;
          padding: 32px 28px;
          text-align: center;
          height: 100vh;
          box-sizing: border-box;
        }
        .logo {
          width: 72px;
          height: 72px;
          background: #6366f1;
          border-radius: 20px;
          margin: 0 auto 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 36px;
          color: white;
          box-shadow: 0 10px 15px -3px rgb(99 102 241 / 0.3);
        }
        h1 { font-family: 'Space Grotesk', sans-serif; font-size: 21px; margin: 0 0 4px; letter-spacing: -0.02em; }
        .version { color: #64748b; font-size: 13px; margin-bottom: 24px; }
        .info { font-size: 13px; line-height: 1.6; color: #94a3b8; }
        .info strong { color: #e2e8f0; }
        .footer { margin-top: 28px; font-size: 11px; color: #475569; }
        button {
          margin-top: 20px;
          background: #334155;
          color: #e2e8f0;
          border: none;
          padding: 10px 24px;
          border-radius: 9999px;
          font-size: 13px;
          cursor: pointer;
          transition: background 0.2s;
        }
        button:hover { background: #475569; }
      </style>
    </head>
    <body>
      <div class="logo">√</div>
      <h1>Maths &amp; Sciences</h1>
      <div class="version">Version ${APP_VERSION} • Lycée Professionnel</div>
      
      <div class="info">
        Créé par <strong>M. Boubacar KANDE</strong><br>
        pour les élèves du <strong>Lycée Gustave Eiffel</strong><br>
        Varennes-sur-Seine (77)
      </div>

      <div class="info" style="margin-top:16px;">
        <strong>23 formations</strong> • <strong>280+ ressources</strong><br>
        ~220 élèves accompagnés
      </div>

      <button onclick="window.close()">Fermer</button>
      
      <div class="footer">
        © 2025-2026 • Tous droits réservés
      </div>
    </body>
    </html>
  `;

  aboutWindow.loadURL(`data:text/html;charset=utf-8,${encodeURIComponent(aboutHTML)}`);

  aboutWindow.on('closed', () => {
    aboutWindow = null;
  });
}

/**
 * Configure tous les canaux IPC (communication sécurisée renderer ↔ main)
 */
function setupIPC() {
  // Version et nom de l'app
  ipcMain.handle('app:get-version', () => APP_VERSION);
  ipcMain.handle('app:get-name', () => APP_NAME);

  // Ouvrir la fenêtre À propos depuis le renderer
  ipcMain.on('window:open-about', () => {
    createAboutWindow();
  });

  // Ouvrir le panneau enseignant (futur)
  ipcMain.on('window:open-teacher-admin', () => {
    mainWindow?.webContents.send('menu:action', 'open-teacher-admin');
  });

  // Ouvrir un lien externe de manière sécurisée
  ipcMain.on('shell:open-external', (event, url) => {
    if (typeof url === 'string' && (url.startsWith('http:') || url.startsWith('https:'))) {
      shell.openExternal(url);
    }
  });

  // Exporter des données (JSON)
  ipcMain.handle('data:export', async (event, data, filename = 'formations-export.json') => {
    const result = await dialog.showSaveDialog(mainWindow, {
      title: 'Exporter les données',
      defaultPath: filename,
      filters: [{ name: 'JSON', extensions: ['json'] }],
    });

    if (result.canceled) return { success: false };

    try {
      fs.writeFileSync(result.filePath, JSON.stringify(data, null, 2), 'utf-8');
      return { success: true, path: result.filePath };
    } catch (error) {
      return { success: false, error: error.message };
    }
  });

  // Importer des données
  ipcMain.handle('data:import', async () => {
    const result = await dialog.showOpenDialog(mainWindow, {
      title: 'Importer des données',
      filters: [{ name: 'JSON', extensions: ['json'] }],
      properties: ['openFile'],
    });

    if (result.canceled || result.filePaths.length === 0) {
      return { success: false };
    }

    try {
      const content = fs.readFileSync(result.filePaths[0], 'utf-8');
      const data = JSON.parse(content);
      return { success: true, data };
    } catch (error) {
      return { success: false, error: error.message };
    }
  });

  // Sauvegarder un fichier quelconque
  ipcMain.handle('file:save', async (event, { content, filename, filters }) => {
    const result = await dialog.showSaveDialog(mainWindow, {
      defaultPath: filename,
      filters: filters || [{ name: 'Fichiers', extensions: ['*'] }],
    });
    if (result.canceled) return { canceled: true };
    
    fs.writeFileSync(result.filePath, content);
    return { canceled: false, path: result.filePath };
  });
}

/**
 * Point d'entrée principal
 */
app.whenReady().then(() => {
  createMainWindow();
  createMenu();
  setupIPC();

  app.on('activate', () => {
    // Sur macOS, recréer la fenêtre si l'icône du dock est cliquée
    if (BrowserWindow.getAllWindows().length === 0) {
      createMainWindow();
    }
  });
});

// Quitter l'application quand toutes les fenêtres sont fermées (sauf macOS)
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

// Sécurité : empêcher la création de nouvelles fenêtres non contrôlées
app.on('web-contents-created', (event, contents) => {
  contents.on('will-navigate', (navigationEvent, navigationUrl) => {
    const parsedUrl = new URL(navigationUrl);
    
    // Autorise seulement les fichiers locaux et les liens http/https contrôlés
    if (parsedUrl.protocol !== 'file:' && parsedUrl.protocol !== 'http:' && parsedUrl.protocol !== 'https:') {
      navigationEvent.preventDefault();
    }
  });
});

// Logs utiles en développement
if (isDev) {
  console.log(`[Main] Application démarrée en mode développement`);
  console.log(`[Main] Version: ${APP_VERSION}`);
}
