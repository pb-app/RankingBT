// O Service Worker avisa ao celular que este site é um App Instalável
self.addEventListener('install', (e) => {
  console.log('[Service Worker] Instalado com sucesso!');
});

self.addEventListener('fetch', (e) => {
  // Apenas deixa a navegação fluir normalmente
  e.respondWith(fetch(e.request));
});
