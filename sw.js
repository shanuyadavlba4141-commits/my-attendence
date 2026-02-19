self.addEventListener('install', (event) => {
  console.log('Service Worker Installed');
});

self.addEventListener('fetch', (event) => {
  // Isse app online/offline dono mein chalega
  event.respondWith(fetch(event.request).catch(() => caches.match(event.request)));
});
