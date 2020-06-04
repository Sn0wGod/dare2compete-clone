/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

importScripts(
  "/dare2compete-clone/precache-manifest.981c2d40e2a09690658a5e0a850c8231.js"
);


var CACHE_NAME='rdy';
var urlsToCache=[
  '/',
  '/favicon.ico',
  '/asset-manifest.json',
  '/manifest.json',
  '/service-worker.js',
  '/index.html',
  '/static/js/2.88abcad0.chunk.js',
  '/static/js/main.ee44d1fa.chunk.js',
  '/static/js/runtime-main.ca3281be.js',
];

self.addEventListener('install',event=>{
  event.waitUntil(
    caches.open(CACHE_NAME)
    .then(cache=>{
      return cache.addAll(urlsToCache);
    })
  )
})


self.addEventListener('activate',function(event){
  event.waitUntil(
    caches.keys().then(function(cacheNames){
      return Promise.all(
        cacheNames.filter(function(cacheName){

        }).map(function(cacheName){
          return caches.delete(cacheName);
        })
      );
    })
  );
});

self.addEventListener('fetch',event=>{
  event.respondWith(
    caches.match(event.request)
    .then(function(response){
      if(response){
        return response;
      }
      return fetch(event.request);
    })
  );
});


self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute(workbox.precaching.getCacheKeyForURL("/dare2compete-clone/index.html"), {
  
  blacklist: [/^\/_/,/\/[^/?]+\.[^/]+$/],
});
