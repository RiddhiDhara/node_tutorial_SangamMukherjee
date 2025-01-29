const EventEmitter = require('events');

const myFirstEmitter = new EventEmitter();

// register a listener

myFirstEmitter.on('greet',(name) => {
   console.log(`greet event with name ${name}`);
})

myFirstEmitter.emit('greet',"Riddhi");