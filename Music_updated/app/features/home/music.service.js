(function () {
    'use strict';
    angular
        .module('myApp')
        .service('myService', myService);

    myService.$inject = ['Spotify'];

    function myService(Spotify) {
        return {
            search: searchArtist
        };

        function searchArtist(keywords) {
            var type = 'artist,album',
                options = {
                    limit: 50,
                    offset: 0
                };

            if (keywords) {
                return Spotify.search(keywords, type, options);
            }
        }

    }
})();
