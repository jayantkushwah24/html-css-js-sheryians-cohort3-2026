// Copy object using spread operator.

let originalObject = {
  name: "John",
  age: 30,
  city: "New York",
};
let copiedObject = { ...originalObject };
console.log(copiedObject); // Output: { name: "John", age: 30, city: "New York" }
