// map:


// Example 01:
const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numbers = myNumers.map( (item) => {
    return item * 2
});
console.log(numbers); 
console.log("++++++++++++++++++++++++++++\n\n");


// Example 02:
// Chaining:
const newNums = myNumers.map((num) => num * 10 ).map( (num) => num + 1).filter( (num) => num >= 40)
console.log(newNums);


/* Another way to that
const newNums = myNumers
                .map((num) => num * 10 )
                .map( (num) => num + 1)
                .filter( (num) => num >= 40)

console.log(newNums);
*/
const newNumss = myNumers
                .map((num) => num * 10 )
                .map( (num) => num + 1)
                .filter( (num) => num >= 40)

console.log(newNumss);
console.log("++++++++++++++++++++++++++++\n\n");



// for each doesnot return any value
const nn = myNumers.forEach( (num) => {
    return num *10
})
console.log(nn); // undefined