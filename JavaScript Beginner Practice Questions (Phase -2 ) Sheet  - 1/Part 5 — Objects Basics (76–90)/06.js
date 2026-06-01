// Delete a property.

let student = {
  name: "jayant",
  age: 16,
  grade: 10,
  subjects: ["Math", "Science", "English"],
  isPassed: true,
};

delete student["age"];
console.log(student["age"]); // Output: undefined