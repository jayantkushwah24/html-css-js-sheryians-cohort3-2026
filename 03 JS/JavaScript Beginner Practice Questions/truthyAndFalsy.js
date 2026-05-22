// 1
const str = "";
if (str) console.log("truthy");
else console.log("falsy"); // falsy

// 2
let number = 0;
if (number) console.log("truthy");
else console.log("falsy"); // falsy

// 3
let symbol = [];
if (symbol) console.log("truthy");
else console.log("falsy"); // truthy

// 4
let variable = 0;
if (variable != undefined) console.log("valid");
else console.log("invalid"); // falsy
