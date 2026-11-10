// Minimal service worker — exists mainly so Chrome/Android treats this as
// an installable app. Doesn't cache anything or work offline; it just
// needs to be present and control a fetch event for the install prompt
// to reliably appear. Pass-through only — every request goes to the network
// exactly as it would with no service worker at all.
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (e) => e.waitUntil(self.clients.claim()));
self.addEventListener("fetch", (event) => {
  event.respondWith(fetch(event.request));
});
