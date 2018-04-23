var event = require("events");

var eventEmitter = new event.EventEmitter();

var connectHandler = function connected(){
	console.log("connect success");
	eventEmitter.emit("data_received");
}
eventEmitter.on("connection",connectHandler);

eventEmitter.on("data_received",function(){
	console.log("data connect success");
});
eventEmitter.emit("connection");
console.log("program end");

