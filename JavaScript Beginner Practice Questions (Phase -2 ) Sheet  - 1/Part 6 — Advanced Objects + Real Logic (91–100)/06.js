// seal an object and test modification.

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

Object.seal(student);
student["name"] = "mahi";
student["email"] = "jk@email.com";
console.log(student);
