var http    = require('http');
var Pool    = require('generic-pool').Pool

var Request = require('./request');


var creature = {
	start : function(options) {
		// ## intiialize 
		this.seed = options.seed;
		this.queue = [];
		// initialize worker pool
		this.pool = Pool({
			name    : 'Creature',
			max     : 100,
		  create  : function(callback) {
				console.log("creating worker");
				callback(1);
 		  },
      destroy : function(client) {
			// not relevant until clients are connecting to db
				console.log("destroying worker");
			},
			log : true
		});
	},
	request: function(url) {
		Request.send(url, function(links) {
			// TODO: Use the links...
		});
	},
	seed : function(){
		seedUrl = this.seedUrl

	}
};

module.exports = creature;
