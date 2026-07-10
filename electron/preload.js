/**
 * Preload Script - Pont sécurisé entre le renderer et le processus principal
 * 
 * Ce fichier est le SEUL endroit où le renderer peut accéder à des APIs Node/Electron.
 * Toutes les communications passent par des canaux IPC explicites.
 */

const { contextBridge, ipcRenderer } = require('electron');

// Exposition d'APIs sécurisées vers le renderer
contextBridge.exposeInMainWorld('electronAPI', {
  // === Informations sur l'application ===
  getAppVersion: () => ipcRenderer.invoke('app:get-version'),
  getAppName: () => ipcRenderer.invoke('app:get-name'),
  
  // === Fenêtres natives ===
  openAboutWindow: () => ipcRenderer.send('window:open-about'),
  openTeacherAdmin: () => ipcRenderer.send('window:open-teacher-admin'),
  
  // === Système de fichiers (sécurisé) ===
  // Ces méthodes permettent au renderer de demander des opérations au main process
  saveFile: (options) => ipcRenderer.invoke('file:save', options),
  openFile: (options) => ipcRenderer.invoke('file:open', options),
  
  // === Données / Persistance ===
  exportData: (data, filename) => ipcRenderer.invoke('data:export', data, filename),
  importData: () => ipcRenderer.invoke('data:import'),
  
  // === Mises à jour (futur) ===
  checkForUpdates: () => ipcRenderer.invoke('updates:check'),
  
  // === Événements (exemple pour communication bidirectionnelle) ===
  onMenuAction: (callback) => {
    ipcRenderer.on('menu:action', (event, action, payload) => callback(action, payload));
  },
  
  // === Utilitaires ===
  openExternal: (url) => ipcRenderer.send('shell:open-external', url),
  showItemInFolder: (path) => ipcRenderer.send('shell:show-item', path),
  
  // Plateforme
  platform: process.platform,
});

// Petit message dans la console pour le débogage (seulement en dev)
if (process.env.NODE_ENV === 'development' || window.location.search.includes('dev')) {
  console.log('%c[Preload] Electron API bridge initialized successfully', 'color:#64748b');
}
