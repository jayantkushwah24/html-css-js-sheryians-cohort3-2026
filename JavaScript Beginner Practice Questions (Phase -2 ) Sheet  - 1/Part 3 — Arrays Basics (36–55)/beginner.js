// Create an array of 5 fruits.

let fruitsArr = ["apple", "orange", "banana", "guaua", "pineapple"];

// find first and last element of array
let arr = [1, 2, 3, 4, 5];
console.log(arr[0]);
console.log(arr[arr.length - 1]);

// Find length of array.
console.log(arr.length);

// Add element at end using push.
arr.push(6);

// Remove last element using pop.
arr.pop();

// Add element at beginning using unshift.
arr.unshift(0);

// Remove first element using shift.
arr.shift();

// Reverse an array.
arr.reverse();

// Sort numbers ascending.
arr.sort((a, b) => a - b);

// Sort numbers descending.
arr.sort((a, b) => b - a);
