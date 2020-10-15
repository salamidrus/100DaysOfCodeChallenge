
function minSwaps(n) {
  // generate array as range of n
  let refList = Array.from({ length: n }, (_, index) => index + 1);
  //   console.log(refList);
  // randomize the order and sort it as reference list
  let sortList = [...refList];
  shuffle(sortList);
  //   console.log(sortList);

  // counter & saving index variables
  let swaps = 0;
  let index = 0;

  while (true) {
    // stop the loop if index > length - 1 of ref list
    if (index >= refList.length) {
      break;
    }
    // check if the current value in sort list has been
    // located at the same index in the ref_list
    // then continue the looping
    else if (sortList[index] == refList[index]) {
      index++;
    }
    // switch the current number if is not at the right index
    // with the required number that needs to be switched
    else {
      // search the index from ref array
      let toSwitch = sortList.findIndex((el) => el === refList[index]);
      // save the index of current number
      let savedValue = sortList[index];
      // switch both numbers
      sortList[index] = sortList[toSwitch];
      sortList[toSwitch] = savedValue;
      // increment index and counter
      index++;
      swaps++;
    }
  }
  return swaps;
}

console.log(minSwaps(20));

// helper for shuffling the array
function shuffle(array) {
  var ctr = array.length,
    temp,
    index;

  // While there are elements in the array
  while (ctr > 0) {
    // Pick a random index
    index = Math.floor(Math.random() * ctr);
    // Decrease ctr by 1
    ctr--;
    // And swap the last element with it
    temp = array[ctr];
    array[ctr] = array[index];
    array[index] = temp;
  }
  return array;
}

