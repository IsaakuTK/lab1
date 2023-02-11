const m = require("npm-matematicas");
console.log(m)

console.log(m.suma(5, 15)); 
console.log(m.suma(9, 45));

console.log(m.multiplicacion(1, 22));
console.log(m.multiplicacion(4, 4));

console.log(m.division(1, 4));
console.log(m.division(2, 2));



//XORSHIFT

var xorshift = require('xorshift');

for (var i = 0; i < 10; i++) {
  console.log(xorshift.random()); // number in range [0, 1)
}