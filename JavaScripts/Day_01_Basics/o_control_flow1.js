// Control Flow:

// if:
const isUserLogin = true
const temparature = 40

if (temparature === 40){
    console.log("Temperature is less than 50")
}
else{
    console.log("Temperature is greater than 50")
}


if (isUserLogin){
    console.log("User is logged in")
}
else{
    console.log("User is not logged in")
}

// <, >, <=, >=, ==, !=, ===, !==

console.log("\n***************************************\n")
const score = 200

if (score > 100) {
    let power = "fly"
    console.log(`User power: ${power}`);
}

// console.log(`User power: ${power}`); // Error, access the variables outside the scope.


console.log("\n***************************************\n")

balance = 1000
// if (balance > 500) console.log("okay"), console.log("not okay") // not a best practice.

// nested condition:
if (balance < 500) {
    console.log("less than 500");
} else if (balance < 750) {
    console.log("less than 750");
} else if (balance < 900) {
    console.log("less than 750");
} else {
    console.log("less than 1200");
}

console.log("\n*****************************************\n");
const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2===3) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}
