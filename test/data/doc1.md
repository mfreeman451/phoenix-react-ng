# Using Service Worker and Push Message

### What is `Service Worker`?
Service worker is design to control offline cache and push notification in the web.
It is a script that runs in the background, separate from a web page,
and enables features that do’nt need a web page or user interaction.
It acts as a proxy between the browser and the network,
allowing developers to control how network requests are handled,
cache resources, and deliver offline experiences.

### Key Purposes of a Service Worker:
1. Offline Capabilities (Progressive Web Apps - PWAs)

  * Caches critical assets (HTML, CSS, JS, images) to work offline or in poor network conditions.

  * Uses the Cache API to store and retrieve responses.

2. Network Request Interception (Proxy-like Behavior)

  * Can intercept and modify fetch requests (e.g., serve cached responses instead of network requests).

  * Useful for implementing stale-while-revalidate strategies.

3. Push Notifications

  * Enables push notifications even when the browser is closed (using the Push API).

4. Background Sync

  * Allows deferred actions (e.g., syncing data) when the connection is restored.

5. Performance Optimization

  * Pre-caches assets for faster loading on repeat visits.

  * Can implement lazy-loading strategies.

### Example of ussage

Register service workder

```javascript
// check service worker, only exists in secure context
if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/sw.js", {
      scope: "/",
      updateViaCache: 'imports',
    })
    .then((registration) => {
      console.log('navigator.serviceWorker.register', registration);
      let serviceWorker;
      if (registration.installing) {
        serviceWorker = registration.installing;
        console.log('service worker:', "installing");
      } else if (registration.waiting) {
        serviceWorker = registration.waiting;
        console.log('service worker:', "waiting");
      } else if (registration.active) {
        serviceWorker = registration.active;
        console.log('service worker:', "active");
      }
      if (serviceWorker) {
        console.log('serviceWorker.state', serviceWorker.state);
        serviceWorker.addEventListener("statechange", (e) => {
          console.log('serviceWorker.statechange', e.target.state);
        });
        console.log('serviceWorker', serviceWorker);
      }
    })
    .catch((error) => {
      // Something went wrong during registration. The service-worker.js file
      // might be unavailable or contain a syntax error.
      console.error('service worker error', error)
    });
} else {
  // The current browser doesn't support service workers.
  // Perhaps it is too old or we are not in a Secure Context.
  console.log(`The current browser doesn't support service workers.`);
}

```

Register web push notification

```javascript
navigator.serviceWorker.ready.then(registration => {
  console.log('service worker will get subscription');
  return registration.pushManager.getSubscription()
    .then(subscription => {
      console.log('service worker get subscription', subscription);
      if (subscription) {
        return subscription;
      }

      return fetch('/api/vapid-public-key')
            .then(response => response.json())
            .then(data => {
              console.log('service worker get vapid-public-key', data);
              const publicKey = base64UrlToUint8Array(data.public_key);

              return registration.pushManager.subscribe({
                userVisibleOnly: true,
                applicationServerKey: publicKey
              });
            });
        });
      })
      .then(subscription => {
        console.log('service worker new client subscription', subscription);
        return fetch('/api/subscribe', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ subscription })
        });
      })
      .catch(err => {
        console.error('Push registration failed:', err);
      });

```

in `sw.js`

```javascript
const CACHE_VERSION = 1;
const CURRENT_CACHES = {
  app: `cache-v${CACHE_VERSION}`,
};

self.addEventListener('install', (event) => {
  console.log('serviceWorker', 'install', event);
  event.waitUntil(caches.open(CURRENT_CACHES.app));
});

self.addEventListener("activate", (event) => {
  console.log('serviceWorker', 'activate', event);

  // Delete all caches that aren't named in CURRENT_CACHES.
  // While there is only one cache in this example, the same logic
  // will handle the case where there are multiple versioned caches.
  const expectedCacheNamesSet = new Set(Object.values(CURRENT_CACHES));
  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames.map((cacheName) => {
          if (!expectedCacheNamesSet.has(cacheName)) {
            // If this cache name isn't present in the set of
            // "expected" cache names, then delete it.
            console.log("Deleting out of date cache:", cacheName);
            return caches.delete(cacheName);
          }
        }),
      ),
    ),
  );
});

self.addEventListener("fetch", (event) => {
  console.log("Handling fetch event for", event.request.url, event.request, event);

  event.respondWith(
    caches.open(CURRENT_CACHES.app).then((cache) => {
      return cache
        .match(event.request)
        .then((response) => {
          if (response) {
            // If there is an entry in the cache for event.request,
            // then response will be defined and we can just return it.
            // Note that in this example, only font resources are cached.
            console.log(" Found response in cache:", response);

            return response;
          }

          // Otherwise, if there is no entry in the cache for event.request,
          // response will be undefined, and we need to fetch() the resource.
          console.log(
            " No response for %s found in cache. About to fetch " +
              "from network…",
            event.request.url,
          );

          // We call .clone() on the request since we might use it
          // in a call to cache.put() later on.
          // Both fetch() and cache.put() "consume" the request,
          // so we need to make a copy.
          // (see https://developer.mozilla.org/en-US/docs/Web/API/Request/clone)
          return fetch(event.request.clone()).then((response) => {
            console.log(
              "  Response for %s from network is: %O",
              event.request.url,
              response,
            );

            if (
              response.status < 400 &&
              response.headers.has("content-type") &&
              response.headers.get("content-type").match(/(^font\/)|(^text\/)|(^image\/)/i)
            ) {
              // This avoids caching responses that we know are errors
              // (i.e. HTTP status code of 4xx or 5xx).
              // We also only want to cache responses that correspond
              // to fonts, i.e. have a Content-Type response header that
              // starts with "font/".
              // Note that for opaque filtered responses
              // https://fetch.spec.whatwg.org/#concept-filtered-response-opaque
              // we can't access to the response headers, so this check will
              // always fail and the font won't be cached.
              // All of the Google Web Fonts are served from a domain that
              // supports CORS, so that isn't an issue here.
              // It is something to keep in mind if you're attempting
              // to cache other resources from a cross-origin
              // domain that doesn't support CORS, though!
              console.log("  Caching the response to", event.request.url);
              // We call .clone() on the response to save a copy of it
              // to the cache. By doing so, we get to keep the original
              // response object which we will return back to the controlled
              // page.
              // https://developer.mozilla.org/en-US/docs/Web/API/Request/clone
              cache.put(event.request, response.clone());
            } else {
              console.log("  Not caching the response to", event.request.url);
            }

            // Return the original response object, which will be used to
            // fulfill the resource request.
            return response;
          });
        })
        .catch((error) => {
          // This catch() will handle exceptions that arise from the match()
          // or fetch() operations.
          // Note that a HTTP error response (e.g. 404) will NOT trigger
          // an exception.
          // It will return a normal response object that has the appropriate
          // error code set.
          console.error("  Error in fetch handler:", error);

          throw error;
        });
    }),
  );
});

self.addEventListener('message', (event) => {
  console.log("Handling message event for", event.data, event);
  const data = event.data;
  if (data == 'delete cache') {
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames.map((cacheName) => {
          console.log("Deleting out of date cache:", cacheName);
          caches.delete(cacheName);
        }),
      ),
    );
  }
});

self.addEventListener('push', event => {
  console.log('Handling push event for', event.data, event);
  const data = event.data.json();

  event.waitUntil(
    self.registration.showNotification(data.title, {
      body: data.body,
      icon: '/images/logo.svg'
    })
  );
});

self.addEventListener('notificationclick', event => {
  console.log('Handling notificationclick event for', event);
  event.notification.close();
  // event.waitUntil(
  //   clients.openWindow('https://yourwebsite.com')
  // );
});


```


### Notice:
* Service worker only work in secure context.
* It has a default scope as same as its path, or set with http header `Service-Worker-Allowed`.
