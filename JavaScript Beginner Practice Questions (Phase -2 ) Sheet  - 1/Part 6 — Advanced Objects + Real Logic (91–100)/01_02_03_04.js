let student = {
  name: "jayant",
  age: 16,
  grade: 10,
  subjects: ["Math", "Science", "English"],
  isPassed: true,
  getDetails: function () {
    return `${this.name} is ${this.age} years old and has a grade of ${this.grade}.`;
  },
};

// Use Object.keys() on object.
let keys = Object.keys(student);
console.log(keys);

// Use Object.values().
let value = Object.values(student);
console.log(value);

// Use Object.entries().
let entry = Object.entries(student);
console.log(entry);

// Loop through object using for...in.
for (let [key, value] of Object.entries(student)) {
  console.log(`${key} : ${value}`);
}
