console.log("Hello Sandy ....");

console.log("------------- Local Module ------------------");

const sub = require("./sub");

console.log("------------- Module Exports ------------------");

const add = require("./add");

add(3, 2);
add(4, 3);
add(5, 4);

console.log("------------- Module Scope ------------------");

require("./person1");
require("./person2");

console.log("------------- IIFE (immediately invoke function expresion) ------------------");

require("./iife");

console.log("------------- Module Cache ------------------");

const build1 = require("./building");
console.log(build1.getName());
build1.setName("Modilfy the name : sandy");
console.log(build1.getName());

const build2 = require("./building");
console.log("module cache", build2.getName());

console.log("------------- Rectify The Module Cache ------------------");

const Building = require("./build");
const building1 = new Building("house");
console.log(building1.getName());
building1.setName("villa");
console.log(building1.getName());

const building2 = new Building("house");
console.log(building2.getName());
