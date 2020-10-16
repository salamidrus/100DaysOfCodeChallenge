function reArrange(str) {
  const strMap = new Map();

  // using priority queue paradigm
  // storing frequency of each character and finding the highest frequency
  let maxFreq = 0;
  for (let i = 0; i < str.length; i++) {
    // check if the char has been on the map or not
    strMap.set(str[i], strMap.get(str[i]) ? strMap.get(str[i]) + 1 : 1);
    if (maxFreq < strMap.get(str[i])) {
      maxFreq = strMap.get(str[i]);
    }
  }

  //checking if solution possible
  // if the max frequncy char length
  // more than half of whole str
  // then it's not possible
  if (str.length < 2 * maxFreq - 1) {
    return "None";
  }

  let finalString = [];

  //taking each character and placing at alternate position
  let charIndex = 0;
  for (let key of strMap.keys()) {
    while (finalString[charIndex]) {
      charIndex++;
    }
    for (let i = charIndex; i < str.length; i += 2) {
      if (strMap.get(key) > 0) {
        finalString[i] = key;
        strMap.set(key, strMap.get(key) - 1);
      } else break;
    }
    charIndex++;
  }

  return finalString.join("");
}

const x1 = "aaac";
const sol1 = reArrange(x1);
console.log(sol1);

const x2 = "aaabbc";
const sol2 = reArrange(x2);
console.log(sol2);
