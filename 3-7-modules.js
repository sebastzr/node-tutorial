// CommonJS, every file is module (by default)
// Modules - Encapsuated code (only shane minimum)
const names = require("./4-names");
const { john, peter } = names;
const sayHi = require("./5-utils");
const data = require("./6-alternative-flavor");

require("./7-mind-grenade");
sayHi(names.john);
sayHi(john);
console.log(data);
