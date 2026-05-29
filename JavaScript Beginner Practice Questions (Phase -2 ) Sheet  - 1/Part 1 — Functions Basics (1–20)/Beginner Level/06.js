// Create a function with default parameter "Guest".

function welcome(name = "Guest") {
  return `Welcome ${name}`;
}
console.log(welcome());
