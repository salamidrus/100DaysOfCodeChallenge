// to distict value
function distinctSubArray(arr) {
  return [...new Set(arr)].length;
}

console.log(distinctSubArray([5, 4, 1, 1, 2, 2, 4, 5, 4, 3]));
