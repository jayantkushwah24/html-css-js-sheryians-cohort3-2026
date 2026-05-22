import p from "prompt-sync";
import { use } from "react";
let prompt = p();

// 1
let num = 23;
if (num >= 0) {
  console.log("Number is positive");
} else {
  console.log("Number is negative");
}

// 2
if (num % 2 == 0) {
  console.log("Number is even");
} else {
  console.log("Number is odd");
}

// 3
let age = 26;
if (age >= 18) {
  console.log("eligible for voting");
} else {
  console.log("not eligible");
}

// 4
let num1 = 3;
let num2 = 2;
if (num1 > num2) {
  console.log(num1 + " is greater");
} else {
  console.log(num2 + " is greater");
}

// 5
let num3 = 8;
if (num1 > num2) {
  if (num1 > num3) {
    console.log(num1 + " is greatest");
  } else {
    console.log(num3 + " is greatest");
  }
} else {
  if (num2 > num3) {
    console.log(num2 + " is greatest");
  } else {
    console.log(num3 + " is greatest");
  }
}

// 6
let year = 2100;
if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
  console.log("leap year");
} else {
  console.log("not a leap year");
}
// 7
if (num1 % 3 == 0 && num1 % 5 == 0) {
  console.log(num1 + " is divisible by 3 and 5 both.");
} else {
  console.log(num2 + " is not divisible by 3 and 5 both");
}

// 8
let score = 85;
if (score >= 90) {
  console.log("A");
} else if (score >= 75) {
  console.log("B");
} else if (score >= 50) {
  console.log("C");
} else {
  console.log("Fail");
}

// 9
let letter = "a";
if (
  (letter =
    "a" || letter == "e" || letter == "i" || letter == "o" || letter == "u")
) {
  console.log(letter + " is a vowel");
} else {
  console.log(letter + " is a consonant");
}

// 10
let a = Number(prompt("Enter first number : "));
let operator = prompt("Enter operator : ");
let b = Number(prompt("Enter second number : "));
let ansOfCalcu;
switch (operator) {
  case "+":
    ansOfCalcu = a + b;
    break;
  case "-":
    ansOfCalcu = a - b;
    break;
  case "*":
    ansOfCalcu = a * b;
    break;
  case "/":
    ansOfCalcu = a / b;
    break;
  default:
    break;
}
console.log(ansOfCalcu);

// 11
let day = Number(prompt("Enter number(1-7) : "));
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
}
// 12
let username = "admin";
let password = 1234;
if (username == "admin" && password == 1234) {
  console.log("we are logging you in.");
} else {
  console.log("invalid credentials");
}
