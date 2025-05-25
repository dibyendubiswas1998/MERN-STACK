// loop on object:

const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    console.log(`Key-${key} ----- Value-${myObject[key]}`);
}

// for (const key of myObject) { // Error: Object is not iterable, we need to use 'in' not 'of' for object.
                                 // Use for-in loop not for-of loop.
//     console.log(`Key-${key} ----- Value-${myObject[key]}`);
// }


const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    console.log(key, "-----", programming[key]);
}

for (const key of programming) {
    console.log(key); // then run
}


const strsings = "Dibyendu"
for (const item in strsings) {
    console.log(`Index: ${item}\t\t\t Value: ${strsings[item]}`);
}

const map  = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")

for (const key in map) {
    console.log(key); // not work with map
}