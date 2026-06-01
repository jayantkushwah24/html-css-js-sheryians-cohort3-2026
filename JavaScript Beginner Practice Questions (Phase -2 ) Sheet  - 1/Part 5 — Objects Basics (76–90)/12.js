// Rename variables while destructuring.

let person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
};
let { firstName: fName, lastName: lName, age: personAge } = person;
console.log(fName); // Output: John
console.log(lName); // Output: Doe
console.log(personAge); // Output: 30