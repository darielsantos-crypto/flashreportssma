const CACHE='flash-report-lucena-v17-app';
self.addEventListener('install',e=>{self.skipWaiting();e.waitUntil(caches.open(CACHE).then(c=>c.addAll(['./','./index.html','./assets/manifest.webmanifest','./assets/icon-192.png','./assets/icon-512.png','./assets/share-preview.png']).catch(()=>{}))) });
self.addEventListener('activate',e=>{e.waitUntil(self.clients.claim())});
self.addEventListener('fetch',e=>{e.respondWith(fetch(e.request).catch(()=>caches.match(e.request))) });
