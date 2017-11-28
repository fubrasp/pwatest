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
    event.respondWith(
        caches.match(event.request).then(
            response => {return response; },
            error => {return fetch(event.request); }
        )
    );
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

