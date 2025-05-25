// String Interpolation:

const fname = "Dibyendu"
const nums = 100

console.log(`My name is ${fname}, I have ${nums} books`); // object with key-val pairs{}


const gameName = new String("Dibyendu")
console.log(gameName, typeof gameName); // [String: 'Dibyendu'] object
console.log(gameName.__proto__);
console.log(gameName[0]);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('i'));

// slice:
const sunstr = gameName.substring(0, 4)
console.log(sunstr);


console.log(gameName.slice(0))
console.log(gameName.slice(0, -2))


const newString = "      Hello ALL        "
console.log(newString.length);

console.log(newString.trim(), newString.trim().length);


const urls = "https://leo.com%20done"
console.log(urls.replace("%20", ""));

console.log(urls.includes("20"));
console.log(urls.includes("arko"));


const str1 = "Dibyendu-Arko-Biswas"
console.log(str1);
console.log(str1.split("-"));
console.log(str1.split("-").join("---"));
