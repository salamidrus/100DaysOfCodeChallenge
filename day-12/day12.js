function findCharMapping(str1, str2) {
  // both str length must be same
  if (str1.length !== str2.length) return false;

  const mapChars = new Map();

  for (let i = 0; i < str1.length; i++) {
    // set the char if haven't mapped yet
    if (!mapChars.has(str1[i])) {
      console.log(str1[i]);
      mapChars.set(str1[i], str2[i]);
    }
    // if has been set to map, check if the char is same with the second str
    // then set to false because it should be one-to-one pair only
    else if (mapChars.get(str1[i]) !== str2[i]) {
      return false;
    }
    // console.log(mapChars);
  }

  return true;
}

const str1 = "foo";
const str2 = "bar";
const sol = findCharMapping(str1, str2);
console.log(sol);
