var Promise = require('bluebird');
var fs      = require('fs');

// Creature Server class
function CreatureServer(app) {
	this.app				= app;
	this.httpServer = null;
	this.connections = [];

}

CreatureServer.prototype.connection = function (socket) {
	this.connections.push(socket);
};

CreatureServer.prototype.start = function(externApp) {
	var self = this;
	var app  = self.app;
	return new Promise(function (resolve) {
		self.httpServer = app.listen(3000);
		self.httpServer.on('connection', self.connection.bind(self));
		self.httpServer.on('listening', function () {
			console.log('Creature Server Instance Starting');
			console.log('Host: 3000');
		});		
	});
};

module.exports = CreatureServer;
