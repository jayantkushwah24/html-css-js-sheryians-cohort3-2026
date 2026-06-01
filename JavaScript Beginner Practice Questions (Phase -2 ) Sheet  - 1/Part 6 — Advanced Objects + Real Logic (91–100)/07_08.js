// Create array of objects for users.

const users = [
  {
    name: "Jayant",
    age: 26,
    email: "jayant@example.com",
  },
  {
    name: "Mahi",
    age: 23,
    email: "mahi@example.com",
  },
  {
    name: "Hemlata",
    age: 45,
    email: "hemu@example.com",
  },
  {
    name: "Devendra",
    age: 53,
    email: "devendra@example.com",
  },
  {
    name: "Dishika",
    age: 17,
    email: "dishika@example.com",
  },
];

// Find user with highest age.
let highestAge = 0;
let ans = "";
for (let user of users) {
  if (user.age > highestAge) {
    highestAge = user.age;
    ans = user.name;
  }
}
console.log(ans);
