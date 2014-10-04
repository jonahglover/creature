// Creature Bootloader
var server = require('./server');
function makeCreature() {
	return server();
}

module.exports = makeCreature;
