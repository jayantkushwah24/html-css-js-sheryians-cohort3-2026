// 1
let str = "50";
let strToNum = Number(str);
// 2
let num = 100;
let numToStr = String(num);
// 3
let str2 = "true";
let strToBoolean = Boolean(str2);
// 4
console.log("5" + 2);
console.log("5" - 2);
console.log(true + 1);
// 5
let str3 = "123abc";
let strToNum3 = Number(str3);
console.log(strToNum3); // NaN
// 6
let parse = parseInt("500px");
console.log(parse); // 500
// In JavaScript, parseInt() is a built-in function used to parse a string
// and return an integer. It extracts numeric characters from the start of
// a string and stops as soon as it hits a non-numeric character.
