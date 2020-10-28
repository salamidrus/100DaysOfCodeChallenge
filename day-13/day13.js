// using Kadane's Algorithm

function maxSubArraySum(arr) {
  // track the current sum
  let currentSum = 0;

  // track the max sum
  let maxSum = 0;

  for (let i = 0; i < arr.length; i++) {
    // store current number in a variable
    let currentNum = arr[i];

    // set currentSum accordingly
    currentSum = Math.max(currentSum + currentNum, 0);

    // set maxSum accordingly
    maxSum = Math.max(currentSum, maxSum);
  }

  return maxSum;
}

maxSubArraySum([4, -1, 2, 1]);

