const CACHE='bibliotheka-1.25';
const CORE=['./','./index.html','./manifest.json','./icon.png'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(CORE)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('bibliotheka-')&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{
 if(e.request.method!=='GET')return;
 e.respondWith(caches.match(e.request).then(hit=>hit||fetch(e.request).then(res=>{
   if(!res||res.status!==200)return res;
   const copy=res.clone();caches.open(CACHE).then(c=>c.put(e.request,copy));return res;
 }).catch(()=>e.request.mode==='navigate'?caches.match('./index.html'):undefined)));
});
