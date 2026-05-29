// 1
let name = "jayant";
let city = "indore";
let age = 26;
console.log(
  `Hello my name is ${name}. i am ${age} years young. i live in ${city}`,
);

// 2
let height = 10;
let base = 10;
let areaOfTriangle = 0.5 * height * base;
console.log(areaOfTriangle);

// 3
let pricipleAmount = 123421;
let rateOfInterest = 12;
let time = 2;
let simpleInterest = (pricipleAmount * rateOfInterest * time) / 100;
console.log(simpleInterest);

// 4
let celsius = -40;
let celsiusToFahrenheit = (9 * celsius) / 5 + 32;
console.log(celsiusToFahrenheit);

// 5
let km = 20;
let kmToMeter = km * 1000;
console.log(kmToMeter);

// 6
let maths = 100;
let english = 89;
let hindi = 88;
let physics = 86;
let chemistry = 95;
let totalMarks = maths + english + hindi + physics + chemistry;
let totalPercent = (totalMarks * 100) / 500;
console.log(totalPercent);

// 7
let unitConsumed = 250;
let ratePerUnit = 5;
let electricityBill = unitConsumed * ratePerUnit;
console.log(electricityBill);

// 8
let firstName = "jayant";
let birthYear = 2000;
let password = firstName + birthYear;
console.log(password);

// 9
let lastName = "kushwah";
console.log(lastName.startsWith("k"));

// 10
let sentence = "a quick brown fox jumps over the lazy dog";
let count = 0;
const count2 = sentence.split(" ").join("").length;
for (let i = 0; i < sentence.length; i++) {
  if (sentence.charAt(i) == " ") continue;
  count++;
}
console.log(count2);
