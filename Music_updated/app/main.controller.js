(function () {
    angular
        .module('myApp', ['spotify']) // one component per file.
        .controller('MainController', MainController); // Used named functions instead of passing an anonymous function
    MainController.$inject['spotify', 'myservice'];

    function MainController(Spotify, myservice) {
        var vm = this; //controllerAs with vm

        vm.searchArtist = function () {

            vm.fromservice = myservice.search(vm.searchartist, 'artist').then(function (data) {
                vm.artists = data.artists.items;
                vm.albums = data.albums.items;
                vm.res = data;


            });
            vm.IsHidden = vm.IsHidden ? false : true;
        };
    };
})(); 
