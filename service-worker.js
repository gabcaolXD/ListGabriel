// Cache assets para funcionamento offline
const cacheName = 'my-app-cache-v1';
const assets = [
    '/',
    '/index.html',
    '/style.css',
    '/script.js',
    '/manifest.json'
];

// Instalar e armazenar recursos no cache
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(cacheName)
            .then((cache) => {
                return cache.addAll(assets);
            })
    );
});

// Recuperar recursos do cache (modo offline)
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((response) => {
                return response || fetch(event.request);
            })
    );
});
