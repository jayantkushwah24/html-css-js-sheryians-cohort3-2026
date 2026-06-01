// Use forEach to print all numbers doubled.

let arr = [1, 2, 3, 4, 5];
arr.forEach((num, idx) => {
  arr[idx] = num * 2;
});
console.log(arr);
