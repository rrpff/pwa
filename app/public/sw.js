const CACHE_NAME = 'app-cache-v1'
const urlsToCache = [
  '/main.bundle.js'
]

const shouldSkipCache = (request, response) =>
  !response || response.status !== 200 || response.type !== 'basic' || request.method !== 'GET'

self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  )
})

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request).then(response => {
      if (response) return response
      const fetchRequest = event.request.clone()

      return fetch(fetchRequest).then(response => {
        if (shouldSkipCache(event.request, response)) return response
        const responseToCache = response.clone()

        caches.open(CACHE_NAME).then(cache =>
          cache.put(event.request, responseToCache)
        )

        return response
      })
    })
  )
})
