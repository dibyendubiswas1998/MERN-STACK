// Immediately Invoked Function Expressions (IIFE):


// IIFE, which is immediately invoked when the script is loaded, example like db connection
// IIFE used basicaly for encapsulation of code and to prevent global scope pollution


// named IIFE
(function fun() {
    console.log("DB Connected !!!");
    
})();


// Unnamed IIFE
// Use Array Function:
(() => {
    console.log("DB Connected 2 !!!");
})();


//  Unnamed IIFE with argument
// Use Array Function by passing variables:
((name) => {
    console.log(`Hello, ${name} !!!`);
})("Dibyendu")