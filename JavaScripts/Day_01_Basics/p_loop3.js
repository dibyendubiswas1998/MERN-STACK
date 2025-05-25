// Array Specific Loop:

// for of:
// ["", "", ""]
// [{}, {}, {}] // objects in array

const arr = [1, 2, 3, 4, 5]

for (const element of arr) { // for of perform oeration on object (string, arr, object, etc.)
    console.log(element)
}

const greetings = "Hello!"
for (const greet of greetings) {
    console.log(`Eacj character: ${greet}`);
}
console.log("\n\n*****************************\n\n");



// Maps: Map objects are collection of key-value pairs, key in the Map may only occurs onece; It's a unique in the Map's collection.

const map  = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India") // it take unique
console.log(map)


for (const [key, val] of map) {
    console.log(`key : ${key} ------------ value: ${val}`);
}

console.log(map.keys(), map.values())

// Implement on Object:
const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

for (const [key, value] of myObject) {
    console.log(key, ':-', value); // Error: myObject is not iterable
} // there is anotherway to interate the object.