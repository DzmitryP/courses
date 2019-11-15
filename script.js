function isThereCat(animals) {
  if (animals.toLowerCase().indexOf("cat") == -1) {
    return false;
  } else {
    return true;
  }
}
console.log(isThereCat("dog, zebra, dog, cat"));
console.log(isThereCat("dog, zebra, dog"));


function gentleSum(a, b) {
  let c = parseInt(a);
  let d = parseInt(b);
  if (isNaN(c) || isNaN(d)) {
    return "Please enter valid data";
  } else {
    return c + d;
  }
}
console.log(gentleSum("122sfdf", 5));
console.log(gentleSum("Hello World", 5));
console.log(gentleSum("234asdfsdf", "232sdffgff"));
console.log(gentleSum(7, 5));
