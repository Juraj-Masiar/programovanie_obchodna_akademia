
/*
  This shuffle will create new random array by taking randomly items from original array.

  Good to know:
  - original array is destroyed (empty) after the algorithm
  - random position is not guaranteed - you can get same order
 */

const inputArray = ['a', 'b', 'c', 'd'];
console.log('input is ', inputArray);
const resultArray = shuffleUsingRandomSelection(inputArray);
console.log('result is', resultArray);


function shuffleUsingRandomSelection(inputArray) {
  const resultArray = [];
  // this loop will be executed until the input arrays is empty
  for (let i = 0; inputArray.length > 0; i++) {
    console.log('hello from array', i);
    const randomIndex = random(inputArray.length);
    const randomItem = inputArray.slice(randomIndex, randomIndex + 1)[0];
    inputArray.splice(randomIndex, 1);
    resultArray.push(randomItem);
  }
  // return modified array
  return resultArray;
}

// generates number between 0 and `maxNumber` (excluded), for example `random(2)` can return 0 or 1
function random(maxNumber) {
  return Math.floor(Math.random() * maxNumber)
}

