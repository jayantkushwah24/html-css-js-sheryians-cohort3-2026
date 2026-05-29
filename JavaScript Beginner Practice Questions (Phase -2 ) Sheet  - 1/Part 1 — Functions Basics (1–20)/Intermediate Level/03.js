// Create a function that accepts unlimited numbers and returns their
// sum using rest operator.

function sum(...ele) {
  let sum = 0;
  for (let a of ele) {
    sum += a;
  }
  return sum;
}
console.log(sum(1, 2, 3, 4, 5));
