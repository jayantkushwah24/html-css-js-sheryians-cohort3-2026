// Create a function that checks if a string is palindrome.

function isPalindrome(str) {
  let i = 0,
    j = str.length - 1;
  while (i < j) {
    if (str.charAt(i) != str.charAt(j)) {
      return false;
    }
    i++;
    j--;
  }
  return true;
}
console.log(isPalindrome("jayaj"));
