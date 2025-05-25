// forEach Loop:

const coding = ["js", "ruby", "java", "python", "cpp"]


coding.forEach(function (item) { // use callback function:
    console.log(item)
})
console.log("****************************\n");


// Example 02:
coding.forEach((item) => {
    console.log(item)
} )
console.log("****************************\n");


// Example 03:
const getItems = (item) => {
    console.log(item)
}
coding.forEach(getItems) // use cutom pre-define function.
console.log("****************************\n");


coding.forEach( (item, index, array) => {
    console.log(item, index, array)
})
console.log("****************************\n");




const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    console.log(`Language Name: ${item.languageName}`);
} )