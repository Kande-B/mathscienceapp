const CACHE_NAME = 'maths-sciences-v1';
const urlsToCache = [
  './',
  './index.html',
  './manifest.json',
  './assets/icons/icon.png'
  // En production, il faudrait lister ici tous les fichiers CSS/JS.
  // Pour l'instant, on laisse le navigateur gérer dynamiquement les fetchs.
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Cache ouvert');
        return cache.addAll(urlsToCache);
      })
  );
});

// Stratégie "Cache First, fallback to Network"
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Cache hit - on retourne la réponse du cache
        if (response) {
          return response;
        }

        // Sinon on fetch sur le réseau et on met en cache
        return fetch(event.request).then(
          response => {
            // Vérifier que la réponse est valide
            if(!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // On clone la réponse car c'est un flux
            var responseToCache = response.clone();

            caches.open(CACHE_NAME)
              .then(cache => {
                // On évite de cacher les requêtes non-http (ex: chrome-extension://)
                if (event.request.url.startsWith('http')) {
                  cache.put(event.request, responseToCache);
                }
              });

            return response;
          }
        );
      })
  );
});
