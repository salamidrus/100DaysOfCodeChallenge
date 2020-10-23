function findMinimum(arr, low, high) {
  if (arr.length === 1) return arr[0];

  if (arr[0] < arr[arr.length - 1])
    return `minimum element is ${arr[0]} at index ${0}`;

  if (high < low) return `minimum element is ${arr[low]} at index ${low}`;

  // for binary search
  let mid = Math.floor((low + high) / 2);

  if (arr[mid] > arr[mid + 1])
    return `minimum element is ${arr[mid + 1]} at index ${mid + 1}`;

  if (arr[mid] < arr[mid - 1])
    return `minimum element is ${arr[mid]} at index ${mid}`;

  if (arr[mid] > arr[low]) return findMinimum(arr, mid + 1, high);
  else return findMinimum(arr, low, mid - 1);
}

const arr = [5, 7, 10, 11, 12, 40, 1, 2, 3];
const min = findMinimum(arr, 5, arr.length - 1);
console.log(min);
