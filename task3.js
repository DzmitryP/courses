function getMaxSubSum(arr) {
  let sum = 0;
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    max = Math.max(sum, max);
    if (sum < 0) {
      sum = 0;
    }
  }
  return max;
}

console.log(getMaxSubSum([-1, 2, 3, -9]));

function descSort(arr) {
  arr.sort(function(a, b) {
    return a - b;
  });
  console.log(arr);
}
descSort([100, 5, -2, -10000, 0, 53]);

function independentSort(arr) {
  return arr.slice().sort();
}
let arr = ["HTML", "JavaScript", "CSS"];
let sorted = independentSort(arr);
console.log(arr);
console.log(sorted);
