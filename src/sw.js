const version = "1.0",
    preCache = "PRECACHE-" + version,
    cacheList = [
        "/",
        "/about",
        "/create",
        "/mapbox-map",
        "/login",
        "/apply",
        "bundle.js",
        "common.js",
        "styles.css"
    ];

/*  Service Worker Event Handlers */

self.addEventListener( "install", event => {

    console.log( "Installing the service worker!" );

    self.skipWaiting();

    caches.open( preCache )
        .then( cache => {

            for ( let index = 0; index < cacheList.length; index++ ) {

                const item = cacheList[ index ];

                cache.add( item );

            }

        } );

} );

self.addEventListener( "activate", function ( event ) {

    console.log( "Activating the service worker!" );

} );

self.addEventListener( "fetch", function ( event ) {

    event.respondWith(
        caches.match( event.request )
        .then( function ( response ) {

            if ( response ) {
                return response;
            }

            return fetch( event.request );

        } )
    );

} );