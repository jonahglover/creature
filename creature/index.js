var http    = require('http');
var Pool    = require('generic-pool').Pool
var request = require('request');


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
	request : function(url){
	},
	seed : function(){
	seedUrl = this.seedUrl
	}
};
module.exports = creature;
