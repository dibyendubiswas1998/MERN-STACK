// ************************* Conversatio *************************

let score = 33
// console.log(typeof score);
// console.log(typeof(score));


score = String(score)
// console.log(typeof score);


let score1 = "333"
let valueInNumber = Number(score1)
// console.log("Score1: ", valueInNumber);
// console.log("Score1: ", typeof valueInNumber);
// console.log("----------------------\n\n");


let score2 = "333abababa"
let valueInNumber2 = Number(score2)
// console.log("Score2: ", valueInNumber2);
// console.log("Score2: ", typeof valueInNumber2);
// console.log("----------------------\n\n");


let score3 = null
let valueInNumber3 = Number(score3)
// console.log("Score3: ", valueInNumber3);
// console.log("Score3: ", typeof valueInNumber3);
// console.log("----------------------\n\n");


let score4 = undefined
let valueInNumber4 = Number(score4)
// console.log("Score4: ", valueInNumber4);
// console.log("Score4: ", typeof valueInNumber4);
// console.log("----------------------\n\n");


// Note:
// "33" => 33
// "33ac" => NaN
// true => 1, false => 0
// null => 0
// undefined => NaN


let isValue = 0
let bool = Boolean(isValue)
// console.log(bool);

// any value to bool:
// 1 => true
// 111 => true
// 0 => false
// "" => false
// "111" => true
// "aa" => true


let numbers = true
let stNumber = String(numbers)
// console.log(stNumber, typeof stNumber);

// 33 => 33, type: string
// true => true, type: string


// ************************ Operation *************************
let val = 3
let negVal = -val
// console.log(val, negVal);

// console.log(2+2); // 4, number
// console.log(2+"2", typeof(2+"2")); // 22, string
// console.log("2"+2+2, typeof("2"+2+2)); // 222, string
// console.log("1" + 2 + 2, typeof("1" + 2 + 2)); // 122, string
// console.log(1 + 2 + "2", typeof(1 + 2 + "2")); // 32, string


// console.log(true); // true
// console.log(+true, typeof(+true)); // 1, number
// console.log(+"", typeof(+"")); // 0, number


let count = 100
// count++
// console.log(count);



// ********************************* Comparision *********************************
// console.log("2" > 1); //true
// console.log("02" > 1); // true
// console.log("02" > 11); // false

// console.log(null > 0); // false
// console.log(null == 0); // false
// console.log(null >= 0); // true, null convert to 0

// console.log(undefined > 0); // false
// console.log(undefined == 0); // false
// console.log(undefined >= 0); // false


// === strict check
// console.log("2" === 2); //false
// console.log("2" == 2); // true


// ******************** Symbol *********************
const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);

// bigint:
const bigInts = 999999999999999999999999999999999999999999999999n
console.log(bigInts, typeof bigInts);
