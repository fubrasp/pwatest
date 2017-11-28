//*****************************************************//
//********* Enregistrement du Serivce Worker **********//
//*****************************************************//

//TO DO : enregistrer le sw auprès du navigateur

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('../sw.js').then(function (registration) {
        console.log('Serviceworker registration succeeded:', registration);
    }).catch(function (error) {
        console.log('Serviceworker registration failed:', error);
    });
}
else {
    console.log('Serviceworkers are not supported.');
}

varcacheName = 'pwaDemo';
self.addEventListener('fetch', function (event) {
    event.respondWith(fetch(event.request).catch(function () {
        return caches.match(event.request);
    }));
});

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('../sw.js').then(function (registration) {
        console.log('Serviceworker registration succeeded:', registration);
    }).catch(function (error) {
        console.log('Serviceworker registration failed:', error);
    });
}
else {
    console.log('Serviceworkers are not supported.');
}

