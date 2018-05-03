
/*
  This shuffle will generate random number for each item and then sorts the array by the generated random number.

  Good to know:
  - this is the simples shuffle possible with almost no place for error! Such solutions are almost always preferred.
  - random position is not guaranteed - you can get same order
 */

const inputArray = ['a', 'b', 'c', 'd'];
console.log('input is ', inputArray);
const resultArray = shuffleUsingRandomPairs(inputArray);
console.log('result is', resultArray);


function shuffleUsingRandomPairs(inputArray) {
  return inputArray
    .map(item => [item, Math.random()])   // create pairs - item and the random number
    .sort((a, b) => a[1] - b[1])          // sort array by the random number (the second item in pair)
    .map(x => x[0])                       // extract the original item from pair
}

