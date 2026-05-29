// Create an impure function using global variable modification.
let a = 10;
function addOne() {
  a = a + 1;
  return a;
}
console.log(a);
addOne();
console.log(a);
