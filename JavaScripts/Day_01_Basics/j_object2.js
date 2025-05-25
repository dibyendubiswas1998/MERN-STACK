// Object:

// Singleton Object:
const obj1 = new Object()
// console.log(obj1); {}

// Non Singleton Object:
const obj2 = {}
// console.log(obj2); {}

obj2.id = '123'
obj2.fname = 'Dibyendu'
obj2.isLoggedin = false
console.log(obj2) // { id: '123', fname: 'Dibyendu', isLoggedin: false }

obj2.address  = {
    city: 'Siliguri',
    pin: 734001,
    state: 'West Bengal'
}
console.log(obj2);
/*
    {
    id: '123',
    fname: 'Dibyendu',
    isLoggedin: false,
    address: { city: 'Siliguri', pin: 734001, state: 'West Bengal' }
    }
*/

// check if the key or property present inside the object:
console.log(obj2.address?.city) // Siliguri
console.log(obj2.location?.city); // undefined


// Merger the Objects:

const ob1 = {1:'A', 2:'B', 3:'C'}
const ob2 = {4:'A', 5:'D', 6:'E'}

const ob3 = {ob1, ob2}
console.log(ob3);  // { ob1: { '1': 'A', '2': 'B', '3': 'C' }, ob2: { '4': 'A', '5': 'D', '6': 'E' } }


const ob = Object.assign({}, ob1, ob2) 
console.log(ob); // { '1': 'A', '2': 'B', '3': 'C', '4': 'A', '5': 'D', '6': 'E' }

const obb = {...ob1, ...ob2}
console.log(obb); // { '1': 'A', '2': 'B', '3': 'C', '4': 'A', '5': 'D', '6': 'E' }

// Get keys:
console.log(Object.keys(obj2)); // [ 'id', 'fname', 'isLoggedin', 'address' ]

// Get Values:
console.log(Object.values(obj2)); // 
/*
    [
    '123',
    'Dibyendu',
    false,
    { city: 'Siliguri', pin: 734001, state: 'West Bengal' }
    ]
*/

console.log(Object.entries(obj2)); // 
/*
    [
    [ 'id', '123' ],
    [ 'fname', 'Dibyendu' ],
    [ 'isLoggedin', false ],
    [
        'address',
        { city: 'Siliguri', pin: 734001, state: 'West Bengal' }
    ]
    ]
*/

console.log(obj2.hsaOwnProperty("address"));