// Access deeply nested property.

let student = {
  name: "jayant",
  age: 16,
  address: {
    street: "123 Main St",
    city: "Anytown",
    state: "CA",
    zip: "12345",
  },
};
console.log(student.address.street); // Output: 123 Main St
