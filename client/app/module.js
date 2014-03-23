'use strict';

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
define(['angular',
        'angular-resource',
        'angular-route',
        'angular-animate',
        'angular-bootstrap',
        'angular-recursion',
        'angular-once'], function (ng) {
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


	var ApiNATOMY = ng.module('ApiNATOMY', ['ngResource',
	                                        'ngRoute',
	                                        'ngAnimate',
	                                        'ui.bootstrap',
	                                        'RecursionHelper',
	                                        'once']);


	ApiNATOMY.config(function ($locationProvider) {
		$locationProvider.html5Mode(true).hashPrefix('!');
	});

	ApiNATOMY.run(function ($rootScope) {

		//// 3D rotation is initially disabled

		$rootScope.threeDRotateEnabled = false;

	});


	return ApiNATOMY;


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
});/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
