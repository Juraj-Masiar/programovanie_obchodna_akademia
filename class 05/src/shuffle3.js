
/*
  This shuffle will modify existing array by swapping each element with random following element.

  Good to know:
  - original array is directly shuffled without need to create new array!
  - random order can be guaranteed!
 */

const inputArray = ['a', 'b', 'c', 'd'];
console.log('input is ', inputArray);
const resultArray = shuffleUsingRandomInsert(inputArray);
console.log('result is', resultArray);


function shuffleUsingRandomInsert(inputArray) {
  // this loop will be executed until the input arrays is not empty
  for (let i = 0; i < inputArray.length; i = i + 1) {
    const item = inputArray[i];                           // get item from array
    console.log(item);
    // todo:
    // generate random index between current item and the end of the array
    // swap current item with the random item based on the generated random index
  }

  return inputArray;     // after the loop is finished, return result
}

// generates number between 0 and `maxNumber` (excluded), for example `random(2)` can return 0 or 1
function getRandomBetween(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;   //The maximum is exclusive and the minimum is inclusive
}

// swaps two items in array based on their indexes
function swapElementsInArray(array, indexX, indexY) {
  const tmp = array[indexX];
  array[indexX] = array[indexY];
  array[indexY] = tmp;
}
