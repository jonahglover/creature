var http    = require('http');
var Pool    = require('generic-pool').Pool
var Request = require('./request');

exports.Creature = function(options){
// init queue and pool
	var pool = Pool({
		name    : 'Creature',
		max     : 100,
		create  : function(callback) {
			callback(1);
		},
		destroy : function(client) {
		// not relevant until clients are connecting to db
			console.log("destroying worker");
		},
		log : true
	});

	var queue = [];

	var request = function(url) {
		pool.acquire(function(err,client){		
			Request.send(url, function(links) {
     			pool.release(client);
				// TODO validate here 34    
				for(i = 0; i<links.length; i++){
					queue.push(links[i]);
				}
				console.log(queue);
				if(queue.length>0){
					request(queue.pop());
				}
			});
		});
	}

	var seed = function(seedUrl){
		request(seedUrl);
	}

	seed(options.seed)
};
