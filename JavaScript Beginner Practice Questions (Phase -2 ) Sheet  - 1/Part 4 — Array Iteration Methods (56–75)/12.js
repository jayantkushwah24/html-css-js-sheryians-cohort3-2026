// Calculate average using reduce.

let arr = [12, 3, 34, 56, 64, 34];

let average = arr.reduce((prev, curr) => prev + curr) / arr.length;
console.log(average.toFixed(2));
