// Create a higher-order function that executes another function twice.

function multiplyByTwo(a) {
  return a * 2;
}

function add(fn, num) {
  return fn(num) + fn(num);
}
console.log(add(multiplyByTwo, 3));
