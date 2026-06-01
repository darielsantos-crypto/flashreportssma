const CACHE_NAME = 'flash-report-lucena-v27-pwa-v1';
const ASSETS = ['./', './index.html', './assets/manifest.webmanifest', './assets/icon-192.png', './assets/icon-512.png', './assets/apple-touch-icon.png', './assets/share-preview.png'];
self.addEventListener('install', event => { event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS)).catch(() => null)); self.skipWaiting(); });
self.addEventListener('activate', event => { event.waitUntil(caches.keys().then(keys => Promise.all(keys.map(k => k !== CACHE_NAME ? caches.delete(k) : null)))); self.clients.claim(); });
self.addEventListener('fetch', event => { event.respondWith(fetch(event.request).catch(() => caches.match(event.request))); });
