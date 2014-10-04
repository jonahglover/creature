var http = require('http');
var Pool = require('generic-pool').Pool


var creature = {
	"init":function() {
		self.pool = Pool({
			name    : 'Creature',
			max     : 10,
		  create  : function(callback) {
					callback(1);
 		  },
      destroy : function(client) {
								}
		});
	}
};
module.exports = creature;
