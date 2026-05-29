import PromptSync from "prompt-sync";
const prompt = PromptSync();

// 1
// let num1 = Number(prompt("Enter First Number: "));
// let num2 = Number(prompt("Enter Second Number: "));
let num1 = 10;
let num2 = 20;
if (num1 > num2) {
  console.log(num1 + " is greater than " + num2);
} else {
  console.log(num2 + " is greater than " + num1);
}

// 2
let num = 45;
if (num >= 10 && num <= 50) {
  console.log(num + " lies between 10 and 50.");
} else {
  console.log(num + " does not lie between 10 and 50.");
}

// 3
let password = "jantjsojsd";
if (password.length >= 8) {
  console.log("Password is strong.");
} else {
  console.log("Password is weak.");
}

// 4
let age = 26;
let hasLiecense = true;
if (age >= 18 && hasLiecense == true) {
  console.log("eligible for driving");
} else {
  console.log("not eligible for driving");
}

// 5
num = 44;
if (num % 2 == 0) {
  if (num % 3 == 0) {
    console.log(num + " is divisible by both 2 and 3.");
  } else {
    console.log(num + " is divisible by 2");
  }
} else if (num % 3 == 0) {
  console.log(num + " is divisible by 3.");
} else {
  console.log(num + " is not divisible by both 2 and 3.");
}

// 6
let time = 14;
if (time < 12) {
  console.log("Good Morning");
} else if (time >= 12 && time < 17) {
  console.log("Good Afternoon");
} else if (time >= 17 && time < 21) {
  console.log("Good Evening");
} else if (time >= 21 && time <= 24) {
  console.log("Good Night");
}

// 7
num = 50;
if (num % 10 == 0) {
  console.log(num + " is a multiple  of 10");
} else {
  console.log(num + " is not a multiple of 10");
}

// 8
let discount = 50;
let MRP = 20978;
let discountedPrice = ((100 - discount) / 100) * MRP;
console.log(discountedPrice);

// 9
let quantity = 8;
if (quantity > 0) {
  console.log("In stock");
} else {
  console.log("out of stock");
}

// 10
let price = 6000;
let gst = 18;
let finalPrice = ((100 + gst) / 100) * price;
console.log(finalPrice);
