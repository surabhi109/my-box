app.controller( 'MainController', MainController );
/*ngInject*/
MainController.$inject = [ '$scope', '$http' ]
	/*Used named functions instead of passing an anonymous function in as a callback.*/
function MainController( $scope, $http ) {
	$scope.IsHidden = true;
	/*"use strict" to indicate that the code should be executed in "strict mode"*/
	"use strict";
	$scope.get = function( value ) {
		/* http request to get artist details*/
		$http( {
				url: "https://api.spotify.com/v1/search?&type=artist"
				, method: "get"
				, params: {
					'q': value
				, }
			} )
			.success( function( result ) {
				console.log( result );

				$scope.resultget = result;


			} )
			.error( function() {
				console.log( "error" );
			} );
		/* "album view" link to be apperared when it is clicked*/
		$scope.IsHidden = $scope.IsHidden ? false : true;
	};


	/* http request to get track details*/
	"use strict";
	$scope.fetch = function( value ) {

		$http( {
				url: "https://api.spotify.com/v1/search?&type=track"
				, method: "get"
				, params: {
					'q': value
				, }
			} )
			.success( function( result ) {
				console.log( result );
				$scope.result = result;


			} )
			.error( function() {
				console.log( "error" );
			} );

	};


};
