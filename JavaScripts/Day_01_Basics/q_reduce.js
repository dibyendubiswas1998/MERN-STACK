// reduce:


// Example 01:
const nums  = [1, 2, 3, 4];
const total = nums.reduce( (acc, currVal) => {
    console.log(`acc: ${acc} \t currVal: ${currVal}`)    
    return acc + currVal
}, 0);
console.log(total);
console.log("++++++++++++++++++++++++++++++++\n\n");



// Example 02:
const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const totalPrice = shoppingCart.reduce( (acc, item) => {
    return acc + item.price
}, 0);
console.log("Total Price: ", totalPrice);