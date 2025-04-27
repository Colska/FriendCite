const CACHE_NAME = 'friendCite-pwa-cache-v1';
const urlsToCache = [
  '/',
  '/indexCite.html',
  '/manifestCite.json',
  // Füge hier weitere Ressourcen hinzu, z. B. CSS-Dateien oder Icons:
  // '/icon-192.png',
  // '/icon-512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Cache wird befüllt');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
