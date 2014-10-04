var jsdom = require('jsdom');
var validator = require('validator');

var Request = {
	/**
	 * Sends request to url and returns the links to the callback function
	 * @param  {string}   url
	 * @param  {Function} callback
	 * @return {Array} Array of links
	 */
	send: function(url, callback) {
		var self = this;

		// Check if the URL is truthy and validate
		if (!url) {
			console.error('Invalid URL: ' + url);
			return;
		}

		// FIXME: separate config file
		var validatorOptions = {
			protocols: ['http', 'https'],
			require_tld: true,
			require_protocol: false,
			allow_underscores: false,
			host_whitelist: false,
			host_blacklist: false
		};

		if (!validator.isURL(url, validatorOptions)) {
			console.error('Invalid URL: ' + url);
			return;
		}

		jsdom.env({
			url: url,
			scripts: ['http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js'],
			done: function(errors, window) {
				if (errors) {
					console.error(errors);
				}

				var $ = window.$;
				var links = [];

				$('body a[href^="http"]').each(function(index, el) {
					links.push($(el).attr('href'));
				});

				callback(links);
			}
		});
	}
};

module.exports = Request;
