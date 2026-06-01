// Create object method.

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
console.log(student.getDetails()); // Output: jayant is 16 years old and has a grade of 10.
