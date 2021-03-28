self.addEventListener('activate', async () => {
    // This will be called only once when the service worker is activated.
    console.log("SW activated");
});

self.addEventListener('push', function (event) {
    const promiseChain = self.registration.showNotification('Hello, World.');

  event.waitUntil(promiseChain);
});

