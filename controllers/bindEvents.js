var events = require('events');
var emitter = new events.EventEmitter();

var bindEvents = function(){

emitter.on("writing", function(){



})

emitter.emit('writing');
}

module.exports = bindEvents;
