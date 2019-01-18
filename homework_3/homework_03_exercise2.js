// var EventEmitter = require('events');
// class Gym extends EventEmitter{
// 	constructor(){
// 		super();
// 	}
// 	welcome(){
// 		console.log("Athlete is working out.");
// 		this.emit('boom')
// 	}
// }
// var gym = new Gym();
// gym.on('boom',function(){
// 	setInterval(callback,1000);
// });
// function callback(){ 
// 	console.log("boom");
// }
var eventsEmitter = require('events')

class gym extends eventsEmitter {
    constructor() {
        super();
        setInterval(() => {this.emit('gym', console.log('boom'))},1000);
    }

}

var ss = new gym();
ss.on('gym', function(message){console.log(`Athlete is working out`)})