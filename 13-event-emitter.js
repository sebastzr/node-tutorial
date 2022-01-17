const EventEmitter = require("events");

const customEmitter = new EventEmitter();

customEmitter.on("response", (name, age) => {
  console.log(`data recieved, Name: ${name}, Age: ${age}`);
});

customEmitter.on("response", () => {
  console.log(`some other logic`);
});

customEmitter.emit("response", "john", 34);
