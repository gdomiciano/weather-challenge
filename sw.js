importScripts('workbox-sw.prod.v1.3.0.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "https://gdomiciano.github.io/weather-challenge/app.e4cb8416a7ce73adf9ce.js",
    "revision": "893318330a01a5c6e5e365006b0ba35f"
  },
  {
    "url": "https://gdomiciano.github.io/weather-challenge/common.ee2d7c2930ad1961c51e.js",
    "revision": "cae2c533d9b3f8dbfb13a9f2b111ca2a"
  },
  {
    "url": "https://gdomiciano.github.io/weather-challenge/layouts/default.a36f3e2542807f884600.js",
    "revision": "14d1f65554aee6a71f4e72844f74dee5"
  },
  {
    "url": "https://gdomiciano.github.io/weather-challenge/manifest.1e3846a5b5266f59e8f6.js",
    "revision": "8197dc00d2dc1bd392aa0f4750a2839a"
  },
  {
    "url": "https://gdomiciano.github.io/weather-challenge/pages/index.750c20794ca46634fa19.js",
    "revision": "29e93d3f1d66478c735e974acd33deaa"
  }
];

const workboxSW = new self.WorkboxSW({
  "cacheId": "weather-challenge_1.0.0",
  "clientsClaim": true,
  "directoryIndex": "/"
});
workboxSW.precache(fileManifest);
workboxSW.router.registerRoute('/**', workboxSW.strategies.networkFirst({}), 'GET');
workboxSW.router.registerRoute('https://gdomiciano.github.io/weather-challenge/**', workboxSW.strategies.cacheFirst({}), 'GET');
