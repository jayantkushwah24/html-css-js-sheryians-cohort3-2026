let arr1 = [1, 2, 3, 4, 5];
let arr2 = [6, 7, 8, 9, 10];

// Use splice to remove elements.
arr1.splice(2, 3);
console.log(arr1);

// Use splice to insert elements.
arr1.splice(2, 0, 3, 4, 5);
console.log(arr1);

// Use slice to copy array.
let copy = arr1.slice(2, 4);
console.log(copy);

// Find index of an element.
console.log(arr1.indexOf(3));

// Check if array contains a value.
console.log(arr1.includes(3));

// Join array elements with .
console.log(arr1.join("."));

// Merge two arrays using spread operator.
console.log([...arr1, ...arr2]);

// Copy array using spread operator.
let arr = [...arr1, ...arr2];

// Find maximum value using Math.max.
console.log(Math.max(...arr));

// Swap two variables using destructuring.
let a = 1;
let b = 2;
[a, b] = [b, a];
console.log(`a=${a} , b=${b}`);
