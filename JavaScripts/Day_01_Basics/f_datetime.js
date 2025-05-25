// DateTime:


console.log(Date()); //Thu May 22 2025 14:02:01 GMT+0000 (Coordinated Universal Time)


let date = new Date()
console.log(date); // 2025-05-22T14:04:33.420Z

console.log(date.toDateString());
console.log(date.toLocaleDateString());

console.log(typeof date);

let myDate = new Date(2025, 0, 23)
console.log(myDate.toDateString());

let myDate2 = new Date(2025, 4, 23, 4, 5)
console.log(myDate2.toDateString());
console.log(myDate2.toLocaleDateString());

console.log(Date("2025-05-22"));
console.log(Date("05-22-2025"));

let myTimeStamp = Date.now()
console.log(myTimeStamp);


let dd = new Date()
console.log(dd.getDate(), dd.getDay(), dd.getFullYear());
