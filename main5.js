var events = require("events");

var eventEmitter = new events.EventEmitter();

var listener1 = function listener1(){
	console.log("listener 1 action ");
}
var listener2 = function listener2(){
	console.log("listener 2 action  ");
}

eventEmitter.addListener("connection",listener1);

eventEmitter.on("connection",listener2);

var eventListeners = require("events").EventEmitter.listenerCount(eventEmitter,"connection");
console.log(eventListeners+ " listener size");
eventEmitter.emit("connection");
eventEmitter.removeListener("connection",listener1);
console.log("listener1 not listenered");


eventEmitter.emit("connection");

eventListeners = require("events").EventEmitter.listenerCount(eventEmitter,"connection");
console.log(eventListeners+" listener size");

console.log("EOF")
