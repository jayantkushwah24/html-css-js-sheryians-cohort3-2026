// Use reduce to find maximum number.

// array.reduce((accumulator, currentValue, currentIndex, array) => {
//   // Your logic here
// }, initialValue);

let arr = [1, 2, 3, 4, 5];
let total = arr.reduce((accumulator, current) => accumulator + current);
console.log(total);
