// Number:

const score = 400
console.log(score, typeof score);

// Dedicated to define number:
const balance = new Number(1000)
console.log(balance);
console.log(typeof balance);


console.log(balance.toString(), typeof balance.toString(), balance.toString().length);
console.log(balance.length) // undefined

console.log(balance.toFixed(4)); // 1000.0000
console.log(balance.toFixed(2)); // 1000.00

const otherNumber = 29.889
console.log(otherNumber.toPrecision(3)); // 29.9

console.log(113.888.toPrecision(3)); // 114
console.log(1113.888.toPrecision(3)); // 1.11e+3

const hun = 1000000
console.log(hun.toLocaleString());
console.log(hun.toLocaleString('en-IN'));


// ++++++++++++++++++++++++++++++++++++++ Maths ++++++++++++++++++++++++++++++
console.log("\n\n ************** Math **************");

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(44.47474));
console.log(Math.ceil(44.33));
console.log(Math.floor(44.22));

console.log(Math.max(1,2,3,4,5,1,1,1,1));

console.log(Math.random()); // rannge value in between 0 to 1
console.log((Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)