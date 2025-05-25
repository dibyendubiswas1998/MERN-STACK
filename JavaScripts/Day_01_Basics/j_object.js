// Objects:

// Object Literals:
const user = {
    name: 'Dibyendu',
    phone: 9907278562,
    city: 'Siliguri',
    state: 'West Bengal',
    isLoggedin: false,
}
// console.log(user);
// console.log(typeof user);

// console.log(user.state); // not the correct way do that
// console.log(user['state']); // correct way do that



// use symbol
const sym = Symbol("Key1")
const user1 = {
    name: 'Dibyendu',
    phone: 9907278562,
    city: 'Siliguri',
    state: 'West Bengal',
    isLoggedin: false,
    [sym]: "Hey Key 1",
}

// console.log(user1[sym]);

// change the value
user1['state'] = 'Delhi'


// frezz the value, so that no one change the Object:
// Object.freeze(user1)

user1['name']= 'Arko'
// console.log(user1);
/*
    {
    name: 'Dibyendu',
    phone: 9907278562,
    city: 'Siliguri',
    state: 'Delhi',
    isLoggedin: false,
    [Symbol(Key1)]: 'Hey Key 1'
    }
*/


user1.greeting = function(){
    console.log("Hello JS User !!!")
}
console.log(user1.greeting); // [Function (anonymous)]
user1.greeting()


user1.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name} !!!`)
}
user1.greetingTwo()