function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName()

function addTwoNumbers(number1, number2){
    console.log(number1 + number2);
    return number1+number2
}

const result = addTwoNumbers(5, 7);
console.log(result, typeof result);


function loginUserMessage(username){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("Arko"))
console.log(loginUserMessage("Arko"))
console.log(loginUserMessage())



function calculateCartPrice(val1, val2, ...num1){ // '...' rest operator or spread operator
    return num1
}

console.log(calculateCartPrice(200, 400, 500, 2000)) // [ 500, 2000 ], num1 represent rest of values except val1 and val2


const fun = calculateCartPrice(200, 400, 500, 2000)
console.log(typeof fun, fun);



const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
handleObject(anyobject=user) // Username is hitesh and price is undefined

handleObject(anyobject={
    username: "hitesh",
    price: 199
})


const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 111400, 500, 1000]));