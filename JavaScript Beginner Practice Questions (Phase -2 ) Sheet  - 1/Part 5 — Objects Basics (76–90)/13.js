// Add default values during destructuring.

let person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
};
let { firstName, lastName, age, email = "No email provided" } = person;
console.log(firstName); // Output: John
console.log(lastName); // Output: Doe
console.log(age); // Output: 30
console.log(email); // Output: No email provided
