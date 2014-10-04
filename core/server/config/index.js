// TODO this is not robust enough -- or at all

var path			 = require('path');
var configFile = require('../../../config.js');
var envFile = require('../../../environment.js');

function ConfigManager(env) {
	var config = configFile[env];
	return config;
}

module.exports = ConfigManager(envFile);

