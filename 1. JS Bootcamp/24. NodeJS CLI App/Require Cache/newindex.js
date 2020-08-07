const counterObject = require("./myscript");
const index = require("./index");
console.log(counterObject.getCounter());
counterObject.incementCounter();
console.log(counterObject.getCounter());

// OUTPUT
// 0
// 1
// 1
// 2
