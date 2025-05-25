// truly value, flase value:



// falsy values:
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values:
// "0", 'false', " ", [], {}, function(){}


// Check array is Empty of not:
const userEmail = []

if (userEmail.length === 0) {
    console.log("Array is empty");
}


// check object is empty or not:
const userObject = {}
if (Object.keys(userObject).length === 0) {
    console.log("Object is empty");
} else {
    console.log("Object is not empty");
}


// Nullish Coalescing Operator (??) :
let val1 = 5 ?? 10
console.log(val1) // output: 5

val1 = null ?? 10
console.log(val1) // output: 10

val1 = undefined ?? 10
console.log(val1) // output: 10

let val2
console.log(val2 ?? 10) // output: 10

val2 = null ?? 100 ?? 15
console.log(val2) // output: 100

console.log("\n*********************************\n");


// Terniary Operator:
// condition ? true : false

const icesTeaPrice = 100
icesTeaPrice >= 80 ? console.log("Price greater than 80")  : console.log("Less than 80");
