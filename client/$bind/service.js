'use strict';

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
define(['app/module'], function (app) {
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


	app.factory('$bind', ['$rootScope', function ($rootScope) {
		return function $bind(fn, options, thisArg) {

			return function () {

				var args = arguments;

				if (options && options.checkPhase && $rootScope.$$phase) {
					fn.apply(thisArg, args);
				} else {
					$rootScope.$apply(function () {
						fn.apply(thisArg, args);
					});
				}

			}

		};
	}]);


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
});/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
