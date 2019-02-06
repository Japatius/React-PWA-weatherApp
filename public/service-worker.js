var CACHE_VERSION = 'app-v0' ;

importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.6.1/workbox-sw.js');

if (workbox) {
    console.log(`Yay! Workbox is loaded 🎉`);
} else {
    console.log(`Boo! Workbox didn't load 😬`);
}

workbox.precaching.precacheAndRoute([
    { url: '/', revision: '4' },
    { url: '/index.html', revision: '4' }
]);

workbox.routing.registerRoute(
    new RegExp('.*\.css'),
    workbox.strategies.networkFirst({
        cacheName: 'css-cache',
        plugins: [
            new workbox.expiration.Plugin({
                maxAgeSeconds: 60,
            })
        ],
    })

);

workbox.routing.registerRoute(
    new RegExp('.*\.js'),
    workbox.strategies.networkFirst({
        cacheName: 'js-cache',
        plugins: [
            new workbox.expiration.Plugin({
                maxAgeSeconds: 60,
            })
        ],
    })

);