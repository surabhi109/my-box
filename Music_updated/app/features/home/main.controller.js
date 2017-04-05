(function () {
  'use strict';
  angular
    .module('myApp')
    .controller('MainController', MainController);

  MainController.$inject = ['$scope', 'myservice','Spotify'];

  function MainController($scope, myservice,Spotify) {
    var vm = this;

    

    vm.searchArtist = function (keywords) {
      if (keywords) {
                myservice.searchArtist(vm.searchartist, 'artist').then(function (data) {
                vm.artists = data.artists.items;
                vm.albums = data.albums.items;
                vm.res = data;
           console.log(vm.res);


            });
            vm.IsHidden = vm.IsHidden ? false : true;
        }
       else {
        vm.res = null
      }
    
    };
  }

})();
