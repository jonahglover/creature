var creature = require('./core');
var express  = require('express');

// Creating express app instance
//
var server = express();

creature().start().then(function (instance) {
	// mount creature on a subdir
	server.use(instance.config.paths.subdir, instance.app);
	// let creature handle our server instance
	instance.start(server);

}).catch(function (err) {
	// error on boot load
	console.log(err);
});
