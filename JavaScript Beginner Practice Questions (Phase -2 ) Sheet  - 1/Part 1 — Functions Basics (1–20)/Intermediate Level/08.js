// Write a function that returns another function.

function outer() {
  console.log("i am outer fn");

  return function () {
    console.log("i am inner fn");
  };
}
let inner = outer();
inner();
