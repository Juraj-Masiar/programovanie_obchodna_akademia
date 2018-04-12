
/*
  This shuffle will create new random array by inserting elements from original array into random positions in new array.

  Good to know:
  - original array is preserved (not modified)
  - random order is not guaranteed - you can get same order
 */

const inputArray = ['a', 'b', 'c', 'd'];
console.log('input is ', inputArray);
const resultArray = shuffleUsingRandomInsert(inputArray);
console.log('result is', resultArray);


function shuffleUsingRandomInsert(inputArray) {
  const resultArray = [];
  // this loop will be executed until the input arrays is not empty
  for (let i = 0; i < inputArray.length; i = i + 1) {
    const item = inputArray[i];                           // get item from array
    console.log(item);
    const randomIndex = random(resultArray.length + 1);   // generate random position (index) in result array
    resultArray.splice(randomIndex, 0, item);             // insert the `item` into result array on random position `randomIndex`
  }

  return resultArray;     // after the loop is finished, return result
}

// generates number between 0 and `maxNumber` (excluded), for example `random(2)` can return 0 or 1
function random(maxNumber) {
  return Math.floor(Math.random() * maxNumber)
}

