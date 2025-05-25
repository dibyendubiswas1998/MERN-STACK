// Learn let & const variable:

const accountId = 11445533
let accountEmail = "dibyendubiswas1998@gmail.com"
var accountPassword = "12345"
accountCity = "Siliguri"


console.log(accountId);
// accountId = 12 // not allow
console.log(accountId);
console.log(typeof accountId);
console.log("---------------------");



accountEmail = "abc@gmail.com"
accountPassword = 123
accountCity = "Darjeeling"

console.table([
    accountEmail, accountPassword, accountCity
])

/*
    Note:
        1. Prefer not to use var, becasue of issue of block score and functional score.
        2. const is emmutable variable.
*/

let accountState
console.table([
    accountEmail, accountPassword, accountCity, accountState
])

// accountState is undefined, becz not define any value.