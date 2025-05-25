let a = 300
if (true) {
    let a = 10
    const b = 20
    console.log("INNER: ", a);
    
}



console.log(a); // global score, 300
// console.log(b); // Error, it's a local score



function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website); // error, becz outside scope
}

// console.log(username); // error, becz outside scope

// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))

function addone(num){
    return num + 1
}



// addTwo(5) Error
// console.log(addTwo(5))  // error

// declare the function with variables:
const addTwo = function(num){
    return num + 2
}

console.log(addTwo(5))