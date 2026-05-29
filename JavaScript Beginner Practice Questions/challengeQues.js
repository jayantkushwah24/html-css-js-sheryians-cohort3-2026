// 1
let password = Math.floor(Math.random() * 9000 + 1000);
console.log(password);

// 2
let str = "abc";
let ans = str[2] + str[1] + str[0];
console.log(ans);

// 3
let str2 = "jayant kushwah";
let lastChar = str2.charAt(str2.length - 1);
console.log(lastChar);

// 4
console.log(
  str2
    .split(" ")
    .map((str) => str.charAt(0))
    .join("")
    .toUpperCase(),
);

// 5
let str3 = "jaYant";
let str4 = "JayAnt";
if (str3.toLocaleLowerCase() === str4.toLocaleLowerCase()) {
  console.log("equal");
} else {
  console.log("not equal");
}

// 6
let userName = "jayant24";
let userPassword = 87704;
if (userName == "jayant24") {
  if (userPassword == 87668) {
    console.log("we are logging you in.");
  } else {
    console.log("wrong password");
  }
} else {
  console.log("user do not exist in our database");
}

// 7
let num = 233;
if (num >= 100 && num <= 999) {
  console.log(num + " is a three digit number");
}
if (num >= 10 && num <= 99) {
  console.log(num + " is a two digit number");
}

// 8
let cardNumber = "1234567890",
  pin = "1234",
  balance = 5000;
if (cardNumber == 1234567890) {
  if (pin == 1234) {
    console.log("your balance is " + balance);
  } else {
    console.log("wrong pin");
  }
} else {
  console.log("card number do not exist");
}

// 9
let trafficLight = "red";
switch (trafficLight) {
  case "red":
    console.log("Stop!");
    break;
  case "yellow":
    console.log("Ready to go");
    break;
  case "green":
    console.log("Go");
    break;

  default:
    break;
}

// 10
const studentName = "Jayant Kushwah";
const mathScore = 85;
const scienceScore = 92;
const englishScore = 78;
const totalMarks = mathScore + scienceScore + englishScore;
const average = totalMarks / 3;
let result = "";
let grade = "";
if (mathScore < 33 || scienceScore < 33 || englishScore < 33) {
  result = "FAIL";
  grade = "F";
} else {
  result = "PASS";
  if (average >= 90) {
    grade = "A+";
  } else if (average >= 80) {
    grade = "A";
  } else if (average >= 70) {
    grade = "B";
  } else if (average >= 60) {
    grade = "C";
  } else {
    grade = "D";
  }
}
console.log("=================================");
console.log("          STUDENT MARKSHEET       ");
console.log("=================================");
console.log(`Student Name : ${studentName}`);
console.log("---------------------------------");
console.log(`Math           : ${mathScore}`);
console.log(`Science        : ${scienceScore}`);
console.log(`English        : ${englishScore}`);
console.log("---------------------------------");
console.log(`Total Marks    : ${totalMarks} / 300`);
console.log(`Average        : ${average.toFixed(2)}`);
console.log(`Result         : ${result}`);
console.log(`Grade          : ${grade}`);
console.log("=================================");
