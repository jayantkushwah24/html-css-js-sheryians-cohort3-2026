// Update existing property.

let student = {
  name: "jayant",
  age: 16,
  grade: 10,
  subjects: ["Math", "Science", "English"],
  isPassed: true,
};

student["age"] = 17;
console.log(student["age"]); // Output: 17