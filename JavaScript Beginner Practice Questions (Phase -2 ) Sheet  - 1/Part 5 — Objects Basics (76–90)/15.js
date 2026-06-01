// Merge two objects.

let object1 = {
  name: "John",
  age: 30,
};
let object2 = {
  city: "New York",
  country: "USA",
};
let mergedObject = { ...object1, ...object2 };
console.log(mergedObject); // Output: { name: "John", age: 30, city: "New York", country: "USA" }
