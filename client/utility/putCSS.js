'use strict';

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
define(['jquery', 'lodash'], function ($, _) {
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


	$.fn.extend({
		equals: function (that) {
			if (!that || this.length != that.length) {
				return false;
			}
			for (var i = 0; i < this.length; ++i) {
				if (this[i] !== that[i]) {
					return false;
				}
			}
			return true;
		},
		putCSS: function (rules) {
			_(rules).each(function (css, selector) {
				var context;
				if (selector.trim() === '&') {
					context = this;
				} else if (selector.trim().charAt(0) === '&') {
					context = this.find(selector.trim().substr(1));
				} else {
					context = this.find(selector);
				}
				context.css(css);
			}, this);
		}
	});


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
});/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////