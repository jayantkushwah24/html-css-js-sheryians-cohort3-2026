// Create a function that finds power using recursion.

function power(num, pow) {
  if (pow == 0) return 1;
  return num * power(num, pow - 1);
}
console.log(power(5, 2));
