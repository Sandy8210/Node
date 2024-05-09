const  eventEmitter  = require("events");

const event =new eventEmitter();

event.on("ice", (flavour, size) => {
  console.log(`your order is ICE it's flavour is  ${flavour} and size is : ${size}`);
});

event.emit("ice", "choco", "large");


