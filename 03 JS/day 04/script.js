function add(a, b) {
  return a + b;
}
console.log(add(23, 45));

let subract = function (a, b) {
  return a - b;
};
console.log(subract(253, 145));

let multiply = (a, b) => {
  return a * b;
};
console.log(multiply(3, 5));

let double = (a) => a * 2;
console.log(double(6));

(function () {
  console.log("iife");
})();

