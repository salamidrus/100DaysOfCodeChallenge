// function to check prime number(s) in N range with The Sieve Erathostenes Algorithm
function primeNumbers(n) {
  // validate input to only receive numbers more than 1
  if (n <= 1) console.log("Please provide positive integers and more than 1!");

  // generate an array incrementally as n range
  let numContainer = [...Array(n).keys()];

  for (let i = 2; i * i < n; i++) {
    // start in index 2 and check the multiplier
    if (numContainer[i] !== 1) {
      // check if the value is 1 or not
      for (let j = i * i; j < n; j += i) {
        numContainer[j] = 1; // set the next multiplier to 1
      }
    }
  }

  let primes = [];

  for (let i = 0; i < numContainer.length; i++) {
    if (numContainer[i] > 1) {
      // filter out the 1 value and
      // return the distinct numbers which is primes
      primes.push(numContainer[i]);
    }
  }

  return primes;
}
