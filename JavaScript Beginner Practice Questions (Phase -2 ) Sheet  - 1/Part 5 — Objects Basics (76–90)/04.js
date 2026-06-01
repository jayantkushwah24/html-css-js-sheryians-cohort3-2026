// Add new property dynamically.

let student = {
  name: "jayant",
  age: 16,
  grade: 10,
  subjects: ["Math", "Science", "English"],
  isPassed: true,
};

student["email"] = "jayant@example.com";
console.log(student["email"]); // Output: jayant@example.com
