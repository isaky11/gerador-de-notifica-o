const CACHE_NAME = 'kvn-cache-v1';
const ASSETS = [
  '/',
  '/index.html',
  '/manifest.json'
];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
  // try cache first, then network
  event.respondWith(caches.match(event.request).then(resp => resp || fetch(event.request).then(r => {
    // optionally cache new requests
    return r;
  })).catch(() => {
    // fallback for navigation requests
    if (event.request.mode === 'navigate') return caches.match('/index.html');
  }));
});
