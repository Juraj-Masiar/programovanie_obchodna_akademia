
/*
  This shuffle will create new random array by taking randomly items from original array.

  Good to know:
  - original array is destroyed (empty) after the algorithm
  - random order is not guaranteed - you can get same order
 */

const inputArray = ['a', 'b', 'c', 'd'];
console.log('input is ', inputArray);
const resultArray = shuffleUsingRandomSelection(inputArray);
console.log('result is', resultArray);


function shuffleUsingRandomSelection(inputArray) {
  const resultArray = [];
  // this loop will be executed until the input arrays is not empty
  while (inputArray.length > 0) {
    console.log('hello from array');
    const randomIndex = random(inputArray.length);    // generate random position (index)
    const randomItem = inputArray[randomIndex];       // get the item from that position
    inputArray.splice(randomIndex, 1);                // and remove it from original array
    resultArray.push(randomItem);                     // and push it to the new array
  }
  return resultArray;     // after the loop is finished, return modified array
}

// generates number between 0 and `maxNumber` (excluded), for example `random(2)` can return 0 or 1
function random(maxNumber) {
  return Math.floor(Math.random() * maxNumber)
}

