// Use reduce to find maximum number.

let arr = [1, 2, 3, 4, 5];
let maximum = arr.reduce((accumulator, current) => {
  return current > accumulator ? current : accumulator;
});
console.log(maximum);
