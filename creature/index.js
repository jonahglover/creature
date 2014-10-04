var http    = require('http');
var Pool    = require('generic-pool').Pool

var Request = require('./request');


var creature = {
	init : function(options) {
		// ## intiialize 
		this.seed = seed;
		this.priorityQueue = [[]];
		// initialize worker pool
		this.pool = Pool({
			name    : 'Creature',
			max     : 10,
		  create  : function() {
				callback(1);
 		  },
      destroy : function(client) {
			}
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
