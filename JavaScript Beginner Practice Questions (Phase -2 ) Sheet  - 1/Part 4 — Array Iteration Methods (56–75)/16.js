// Sort array of objects by age.

let arr = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 35 },
];
let sort = arr.sort((a, b) => a.age - b.age);
console.log(sort);
