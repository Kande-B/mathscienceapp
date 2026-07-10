# Contribuer à l'application Maths & Sciences

Merci de votre intérêt ! Ce document explique comment contribuer.

## Pour les enseignants (M. KANDE et collègues)

La grande majorité des modifications de contenu se fait **sans toucher au code** :

1. Ouvrez le fichier `data/formations.json`
2. Modifiez/ajoutez des classes ou des ressources
3. Relancez l'application (`npm start`)

Voir le guide complet : **[GUIDE-ENSEIGNANT.md](GUIDE-ENSEIGNANT.md)**

## Pour les développeurs

### Prérequis
- Node.js 18+
- Connaissance basique d'Electron + JavaScript moderne

### Workflow recommandé

```bash
git checkout -b feature/ma-super-idee
# ... modifications ...
npm run lint
npm run format
git commit -m "feat: description claire"
git push origin feature/ma-super-idee
```

### Règles de contribution

- Ne jamais modifier `data/formations.json` directement dans une PR (c'est le contenu de l'enseignant)
- Les PRs de structure / fonctionnalités sont les bienvenues
- Toujours tester `npm start` et `npm run dist:win` (ou équivalent)
- Respecter le style Tailwind + classes utilitaires existantes

### Architecture

- `electron/main.js` → Processus principal Electron
- `electron/preload.js` → Pont sécurisé (IPC)
- `data/formations.json` → Données métier (contenu éditable par l'enseignant)
- `src/renderer/` → Futur code modulaire (migration progressive de index.html)
- `assets/` → Icônes, images, médias

## Signaler un bug

Ouvrez une issue avec :
- Version de l'application
- Système d'exploitation
- Étapes pour reproduire
- Captures d'écran si possible

---

Merci de contribuer à la réussite des élèves du Lycée Gustave Eiffel ❤️
