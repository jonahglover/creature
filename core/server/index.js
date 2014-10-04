var express = require('express');
var CreatureServer = require('./CreatureServer');

function init(options) {
// do express config
	var server = express();
	return new CreatureServer(server);
}

module.exports = init;
