// Group users by age.

const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 25 },
  { name: "David", age: 30 },
  { name: "Emma", age: 19 },
];

let ans = Object.groupBy(users, (user) => user.age);
console.log(ans);
