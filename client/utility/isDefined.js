'use strict';

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
define(['lodash'], function (_) {
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


	_.mixin({ isDefined: function (value) {
		return !_(value).isUndefined();
	}}, {chain: false});


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
});/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
