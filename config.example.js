// # Creature configuration
// Configure Creature Install (refer to plugin folders for specifc config)
//
var path = require('path');
var config;

config = {
	// ### Production 
	production: {
			database: {
			},
			server: {
					host: '127.0.0.1',
					port: '3000'
			}
	},
	development: {
			database: {
			},
			server: {
					host: '127.0.0.1',
					port: '3000'
			}
	}
};

module.exports = config;
