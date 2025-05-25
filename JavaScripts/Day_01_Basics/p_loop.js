// For Loop:

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for (let i = 0; i < array.length; i++) {
    const element = array[i];
    console.log(element)
};
console.log("\n***************************\n");


for (let i = 0; i < array.length; i++) {
    const element = array[i];
    console.log(element);
    if (element == 5){
        break;
    }
};
console.log("\n***************************\n");


// Multiplication:
for (let i = 1; i <= 5; i++) {
    console.log(`Outer Loop: ${i}`);
    
    for (let j = 1; j <= 5; j++) {
        console.log(`Inner loop j: ${j}, Innner Loop: ${i}`);
        console.log(`${i} * ${j} = ${i * j}`);       
    }
}
console.log("\n***************************\n");



let myArray = ["flash", "batman", "superman"]
//console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    //console.log(element);
    
}
console.log("\n***************************\n");



// break and continue
for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        break
    }
   console.log(`Value of i is ${index}`);
    
}
console.log("\n***************************\n");


for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue
    }
   console.log(`Value of i is ${index}`);
    
}