const  EventEmitter  = require("events"); // Get the class properly

const myFirstEmitter = new EventEmitter(); // Now make a usable instance

// Register a listener
myFirstEmitter.on("greet", (name) => {
  console.log(`hello ${name}`);
});

// Emit the event
myFirstEmitter.emit("greet", "Pavan");
