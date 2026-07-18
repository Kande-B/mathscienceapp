function normalizeStr(str) {
            if (!str) return '';
            return str.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim();
        }
function isMatchingSequence(appSeq, driveSeq) {
            const normApp = normalizeStr(appSeq);
            const normDrive = normalizeStr(driveSeq);
            if (normApp === normDrive || normApp.includes(normDrive) || normDrive.includes(normApp)) return true;
            
            // Comparaison par mots (si au moins 1 mot long correspond)
            const appWords = normApp.match(/[a-z0-9]+/g) || [];
            const driveWords = normDrive.match(/[a-z0-9]+/g) || [];
            return driveWords.some(w => w.length >= 4 && appWords.includes(w));
        }
function mergeDriveData(localFormations, driveData) {
            // Créer une map avec les clés de classes normalisées
            const normDriveData = {};
            Object.keys(driveData).forEach(k => {
                normDriveData[normalizeStr(k)] = driveData[k];
            });

            localFormations.forEach(formation => {
                const driveClassData = normDriveData[normalizeStr(formation.id)] || normDriveData[normalizeStr(formation.folderName || formation.id)];
                if (!driveClassData) return;

                // Parcourir maths et sciences
                ['maths', 'sciences'].forEach(matiere => {
                    if (formation.resources && formation.resources[matiere]) {
                        formation.resources[matiere].forEach(seq => {
                            // Nettoyer le nom de la séquence pour correspondre au nom de dossier Drive
                            let cleanSeqName = seq.title.replace('Séquence : ', '').trim();
                            const driveMatiereData = driveClassData[matiere];
                            if (!driveMatiereData) return;

                            let driveFiles = [];
                            // Chercher tous les dossiers qui correspondent (ex: si l'utilisateur a créé un doublon)
                            for (let driveSeqName in driveMatiereData) {
                                if (isMatchingSequence(cleanSeqName, driveSeqName)) {
                                    driveFiles = driveFiles.concat(driveMatiereData[driveSeqName]);
                                }
                            }

                            if (driveFiles && driveFiles.length > 0) {
                                driveFiles.forEach(file => {
                                    // Vérifier si le fichier n'est pas déjà dans la séquence (par URL)
                                    const exists = seq.items.some(item => item.url === file.url);
                                    if (!exists) {
                                        // Déduire la catégorie en fonction du type MIME ou du nom
                                        let category = 'fiches';
                                        let type = 'Drive';

                                        if (file.type.includes('pdf')) { type = 'PDF'; category = 'cours'; }
                                        else if (file.type.includes('document')) { type = 'Doc'; category = 'exercices'; }
                                        else if (file.type.includes('presentation')) { type = 'Diapo'; category = 'cours'; }

                                        if (file.name.toLowerCase().includes('td') || file.name.toLowerCase().includes('exercice')) { category = 'exercices'; }
                                        if (file.name.toLowerCase().includes('tp')) { category = 'tp'; }
                                        if (file.name.toLowerCase().includes('cours') || file.name.toLowerCase().includes('leçon')) { category = 'cours'; }

                                        seq.items.push({
                                            id: file.id,
                                            titre: file.name + " ☁️",
                                            type: type,
                                            desc: "Document synchronisé depuis Google Drive",
                                            url: file.url,
                                            date: new Date(file.date).toLocaleDateString('fr-FR'),
                                            category: category
                                        });
                                    }
                                });
                            }
                        });
                    }
                });
            });}
const local = require('./data/formations.json');
const api = require('./api_2mmv.json');
mergeDriveData(local, { '2mmv': api });
const f = local.find(d => d.id === '2mmv');
const seq = f.resources.maths.find(s => s.title.includes('Géométrie'));
console.log(JSON.stringify(seq.items, null, 2));
