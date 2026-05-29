// Create a function to reverse a string.

function reverseString(str) {
  let reverse = "";
  for (let s = str.length - 1; s >= 0; s--) {
    reverse += str.charAt(s);
  }
  return reverse;
}
console.log(reverseString("jayant"));
