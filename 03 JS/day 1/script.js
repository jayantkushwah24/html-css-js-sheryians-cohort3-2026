// variable

var marks = 100;
let age = 26;
const name = "jk";
const x = 67;

// showing data to user using function

// 1.console log => this function takes data as input and then display them
// in the output
console.log("jk");
console.log(10);
console.log(age);
console.log(marks, name, 20); // we can pass multiple value separated by a comma

console.error("404 : page not found");
console.warn("focus.you got less time left");

// data types

// Number
let a = 10;
let b = 20.43;
let c = -34;
// String
let d = "jayant";
let e = "mahi";
let f = `love`;
// boolean
let g = true;
let h = false;
// undefined = which is not defined yet but maybe defined later
let i = undefined;
// object
let j = {
  name: "jayant kushwah",
  age: 26,
  company: "Microsoft",
  position: "SDE 1",
};
// null = empty
let k = null;

// Special characters
console.log(`my name is \n jayant kushwah`);
console.log(`my age is \t 26 years`);

let num = prompt("Enter a number : ");
console.log(num);

alert("be careful");

let logout = confirm("Are you sure you want to logout?");
console.log(logout);
