// This problem was recently asked by Google.
// Given a list of numbers and a number k, return whether any two numbers from the list add up to k.
// For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

function checkSum(inputArr, k) {
  for (let i = 0; i < inputArr.length; i++) {
    for (let j = 0; j < inputArr.length; j++) {
      // skip array looping if i equal to j
      if (i === j) continue;

      if (inputArr[i] + inputArr[j] === k) return true;
    }
  }
  return false;
}

checkSum([1, 2, 3, 4, 5, 6], 11);
