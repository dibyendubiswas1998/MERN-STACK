const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

user.welcomeMessage()
user.username = "sam"
user.welcomeMessage()

/* 
    this, refer to the current context, mean values.
*/

console.log(this) // {}, empty object, becz noting inside node.
// Note: when you run these, inside the browser then this will refer to the window object.



// **************** Arrow Function *******************

function chai(){
    let username = "hitesh"
    console.log(this.username); // undefined, we cannot use the this keyword here (inside function).
}

chai()


function chai2(){
    let username = "hitesh"
    function fun(){
        console.log(this.username); // undefined
    }
    fun()
}
chai2()



console.log("\n\n ++++++++++++++++++++++++++++++++++++++++++++++++++++ \n\n")

const arrow = () => {
    username = "Dibyendu Biswas"
    console.log(this) // {}
    console.log(this.username) // undefined
}
// arrow()


const add = (n1, n2) => {
    return n1+n2
}
console.log(add(5, 7)) // 12


// Use Arrow function as implicit return:
const sub = (n2, n1) => n2 - n1  // it means, it assume that it return the value, so no need to use return keyword.
// const sub = (n2, n1) => (n2 - n1) // use parenthese also
console.log(sub(5, 7)) // -2


const multiple = (n1, n2) => (n1 * n2)
console.log(multiple(5, 7)) // 35


// return as object:
const person = (name=null, age=null) => ({fname:"Dibyendu", mage:20})
console.log("Persorn: ", person()) // Persorn:  { fname: 'Dibyendu', mage: 20 }

const person1 = (name, age) => ({fname:name, mage:age})
console.log("Persorn: ", person1("Arko", 20))


const variables = (n1=10, n2) => (n1+n2)
console.log(variables(5)) // NaN
console.log(variables(5, 7)) // 12


const variables2 = (n1, n2=10) => (n1+n2)
console.log(variables2(5)) // 15