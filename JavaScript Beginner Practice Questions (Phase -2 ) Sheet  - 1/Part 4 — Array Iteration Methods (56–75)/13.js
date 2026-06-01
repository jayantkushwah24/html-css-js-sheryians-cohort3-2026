// Count occurrences of numbers in array.

let arr = [1, {}, 34, 21, 2, "j", true, "sf", "3", [11]];

let ans = arr.filter((ele) => Number.isInteger(ele));
console.log(ans.length);
