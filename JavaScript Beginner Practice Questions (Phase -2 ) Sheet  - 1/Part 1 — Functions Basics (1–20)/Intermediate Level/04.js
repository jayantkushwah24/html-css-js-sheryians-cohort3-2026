// Write a function that counts vowels in a string.

function countVowel(str) {
  let count = 0;
  for (let s of str) {
    if (s == "a" || s == "e" || s == "i" || s == "o" || s == "u") {
      count++;
    }
  }
  return count++;
}
console.log(countVowel("jaantkasjffsdiouiaofd"));
