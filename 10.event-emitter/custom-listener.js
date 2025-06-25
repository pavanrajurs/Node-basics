const EventEmitter = require("events");

class MyCustomEmitter extends EventEmitter {
  constructor() {
    super();
    this.greeting = "hello";
  }

  greet(name) {
    this.emit("greeting", `${this.greeting} ${name}`);
  }
}

const myEmitterInstance = new MyCustomEmitter();

myEmitterInstance.on("greeting", (message) => {
  console.log(`greeting event: ${message}`);
});

myEmitterInstance.greet("Pavan");
