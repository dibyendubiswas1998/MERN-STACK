// Array: it's a object

const myArray = [1, 2, 3, 4, true, false, "Dibyendu", [1,2,3]]
console.log(myArray);
console.log(typeof myArray); // object

console.log(myArray[0]);

console.log(myArray.length);


// Array Methods:
const arr = new Array(1,2,3,4,5)
console.log(arr);

arr.push(10)
console.log(arr);

let last = arr.pop()
console.log(last);
console.log(arr);


// Shift & Unshift
const arr1 = new Array(1,2,3,4,5,6,7,8,9)
console.log(arr1);

arr1.unshift(100)
console.log(arr1); // [ 100, 1, 2, 3, 4, 5, 6, 7, 8, 9]

arr1.shift();
console.log(arr1); // [1, 2, 3, 4, 5, 6, 7, 8, 9]


console.log(arr1.includes(9));
console.log(arr1.indexOf(-7));


const arr2 = new Array(1,2,3,4,5,6,7,8,9)
console.log(arr2.join(), typeof arr2.join());


// Slice and Splice:
const arr3 = new Array(0, 1,2,3,4,5)

// Slice:
const sl = arr3.slice(1, 3)
console.log("A: ", arr3);
console.log(sl);


// Splice:
const sp = arr3.splice(1, 3)
console.log("B: ", arr3);
console.log(sp);

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
console.log("\n\n************************************************************\n\n");






const fname = ['Dibyendu', 'Arko', 'Joe']
const lname = ['Biswas', 'Das', 'Smith']

const ar = fname + lname
console.log(ar); // Dibyendu,Arko,JoeBiswas,Das,Smith

fname.concat(lname) // [ 'Dibyendu', 'Arko', 'Joe' ]
console.log(fname);

const all = fname.concat(lname)
console.log(all); // [ 'Dibyendu', 'Arko', 'Joe', 'Biswas', 'Das', 'Smith' ]


// usespread operator:
const all_ = [...fname, ...lname]
console.log(all_); // [ 'Dibyendu', 'Arko', 'Joe', 'Biswas', 'Das', 'Smith' ]


const another_array = [1, 2, 3, [4, 5, 6], 7, [8, 9, 10, [11, 12]]]
const real_array = another_array.flat(Infinity)
console.log(real_array);


console.log(Array.isArray("Arko")) // false
console.log(Array.from("Arko")) //[ 'A', 'r', 'k', 'o' ]    

console.log(Array.from({name:"Arko"})) // []

let s1= 10
let s2 = 20
let s3 = 30
console.log(Array.of(s1, s2, s3)) // [ 10, 20, 30 ]