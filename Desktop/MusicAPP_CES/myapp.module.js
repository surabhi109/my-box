 var app = angular
 	.module( 'myApp', [] )
 	.config( function( $httpProvider ) {
 		//Enable cross domain calls
 		/*"use strict" to indicate that the code should be executed in "strict mode"*/
 		"use strict";
 		$httpProvider.defaults.useXDomain = true;

 		//Remove the header containing XMLHttpRequest used to identify ajax call 
        //http encoding has been done with respect to the headers in utf-8 character mode
 		$httpProvider.defaults.headers.post[ 'Content-Type' ] = 'application/json; charset=utf-8';
 	} );