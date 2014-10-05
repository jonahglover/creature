var http    = require('http');
var Request = require('./request');

exports.Creature = function(options){
// init queue and pool
	var self = this;
	var live = true;
	var queue = [];
	self.pool = {
		numClients: 0,
		maxClients: 10
	}
	var request = function(url) {
		if(url){
			self.pool.numClients = self.pool.numClients+1;
			Request.send(url, function(links) {
				// TODO validate here 34  
				self.pool.numClients = self.pool.numClients-1;
				console.log(links);
				for(i = 0; i<links.length; i++){
					queue.push(links[i]);
				}
			 	for(c = 0; c<self.pool.maxClients - self.pool.numClients; c++){
			 		request(queue.shift());
			 	}				
			});	
		}
	}
	request(options.seed)
};
