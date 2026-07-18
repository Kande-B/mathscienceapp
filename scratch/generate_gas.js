const fs = require('fs');
const data = JSON.parse(fs.readFileSync('data/formations.json', 'utf8'));

let classes = [];
data.forEach(c => {
    let maths = [];
    let sciences = [];
    if(c.resources && c.resources.maths) {
        c.resources.maths.forEach(seq => maths.push(seq.title));
    }
    if(c.resources && c.resources.sciences) {
        c.resources.sciences.forEach(seq => sciences.push(seq.title));
    }
    classes.push({ id: c.id, folderName: c.id, maths, sciences });
});

const scriptContent = `
/**
 * Script Google Apps Script pour synchroniser Maths-Sciences-App
 * 
 * 1. Exécutez creerArborescence() UNE SEULE FOIS depuis cet éditeur.
 * 2. Déployez en tant qu'application Web (Exécuter en tant que : Vous, Accès : Tous).
 */

const ROOT_FOLDER_NAME = 'Maths-Sciences-App';

const FORMATIONS = ${JSON.stringify(classes, null, 2)};

// Fonction à exécuter manuellement pour créer les dossiers
function creerArborescence() {
  let rootFolder;
  const folders = DriveApp.getFoldersByName(ROOT_FOLDER_NAME);
  if (folders.hasNext()) {
    rootFolder = folders.next();
    Logger.log('Le dossier racine existe déjà : ' + ROOT_FOLDER_NAME);
  } else {
    rootFolder = DriveApp.createFolder(ROOT_FOLDER_NAME);
    Logger.log('Dossier racine créé : ' + ROOT_FOLDER_NAME);
  }
  
  FORMATIONS.forEach(function(formation) {
    let classFolder;
    const classFolders = rootFolder.getFoldersByName(formation.folderName);
    if (classFolders.hasNext()) {
      classFolder = classFolders.next();
    } else {
      classFolder = rootFolder.createFolder(formation.folderName);
      Logger.log('  Dossier classe créé : ' + formation.folderName);
    }
    
    ['maths', 'sciences'].forEach(function(matiere) {
      if (!formation[matiere] || formation[matiere].length === 0) return;
      
      let matiereFolderName = matiere === 'maths' ? 'Maths' : 'Sciences';
      let matiereFolder;
      const matiereFolders = classFolder.getFoldersByName(matiereFolderName);
      if (matiereFolders.hasNext()) {
        matiereFolder = matiereFolders.next();
      } else {
        matiereFolder = classFolder.createFolder(matiereFolderName);
        Logger.log('    Dossier matière créé : ' + matiereFolderName);
      }
      
      formation[matiere].forEach(function(seqName) {
        // Nettoyer le nom de séquence pour le dossier (enlever "Séquence : ")
        let cleanSeqName = seqName.replace('Séquence : ', '').trim();
        const seqFolders = matiereFolder.getFoldersByName(cleanSeqName);
        if (!seqFolders.hasNext()) {
           matiereFolder.createFolder(cleanSeqName);
           Logger.log('      Dossier séquence créé : ' + cleanSeqName);
        }
      });
    });
  });
  
  Logger.log('Terminé ! Vous pouvez maintenant ajouter vos documents dans Google Drive.');
}

// Fonction API appelée par votre application web
function doGet(e) {
  const folders = DriveApp.getFoldersByName(ROOT_FOLDER_NAME);
  if (!folders.hasNext()) {
    return ContentService.createTextOutput(JSON.stringify({error: 'Dossier racine non trouvé'})).setMimeType(ContentService.MimeType.JSON);
  }
  
  const rootFolder = folders.next();
  let results = {}; // Map of className -> matiere -> sequenceName -> list of files
  
  const classFolders = rootFolder.getFolders();
  while (classFolders.hasNext()) {
    const classFolder = classFolders.next();
    const className = classFolder.getName();
    results[className] = { maths: {}, sciences: {} };
    
    const matiereFolders = classFolder.getFolders();
    while (matiereFolders.hasNext()) {
      const matiereFolder = matiereFolders.next();
      const matiereName = matiereFolder.getName().toLowerCase(); // 'maths' or 'sciences'
      if (matiereName !== 'maths' && matiereName !== 'sciences') continue;
      
      const seqFolders = matiereFolder.getFolders();
      while (seqFolders.hasNext()) {
        const seqFolder = seqFolders.next();
        const seqName = seqFolder.getName();
        results[className][matiereName][seqName] = [];
        
        const files = seqFolder.getFiles();
        while (files.hasNext()) {
          const file = files.next();
          results[className][matiereName][seqName].push({
            id: file.getId(),
            name: file.getName(),
            url: file.getUrl(),
            date: file.getDateCreated(),
            type: file.getMimeType()
          });
        }
      }
    }
  }
  
  return ContentService.createTextOutput(JSON.stringify(results))
    .setMimeType(ContentService.MimeType.JSON);
}
`;

fs.writeFileSync('scripts/google_apps_script.js', scriptContent, 'utf8');
console.log('Script GAS généré dans scripts/google_apps_script.js');
