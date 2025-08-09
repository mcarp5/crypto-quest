const SCOPE='/crypto-quest/'; const CACHE='cq-pwa-v1';
const ASSETS=[SCOPE, SCOPE+'index.html', SCOPE+'manifest.json', SCOPE+'sw.js', SCOPE+'assets/icon-192.png', SCOPE+'assets/icon-512.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(keys=>Promise.all(keys.map(k=>k===CACHE?null:caches.delete(k)))));self.clients.claim()});
self.addEventListener('fetch',e=>{e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request).then(resp=>{const copy=resp.clone(); caches.open(CACHE).then(c=>c.put(e.request,copy)); return resp}).catch(()=>r||new Response('Offline',{status:503}))))});
