const staticDevClasses = "dev-classes-site-v1"
const assets = [
  "/",
  "index.html",
  "dgmc.png",
  "kbc-icon.png",
  "kbc-begin.mp3",
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticDevClasses).then(cache => {
      cache.addAll(assets)
    })
  )
})
self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request)
    })
  )
})