importScripts('/soloo/uv/uv.bundle.js');
importScripts('/soloo/uv/uv.config.js');
importScripts('/soloo/uv/uv.sw.js');
importScripts('https://arc.io/arc-sw-core.js');

const sw = new UVServiceWorker();

self.addEventListener('fetch', (event) => event.respondWith(sw.fetch(event)));
