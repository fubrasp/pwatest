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
self.addEventListener('install', function (event) {
    event.waitUntil(caches.open(cacheName).then(function (cache) {
        returncache.addAll(['img/logo.png', 'img/UFR.jpg', 'index.html', 'js/main.js']);
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

