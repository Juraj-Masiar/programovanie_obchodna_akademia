/**
 *    Job assignment:
 *    Create function that will take one parameter - a sentence - and will return the same sentence but some letters will be swapped.
 *    There is only one rule: First and Last letter in every word needs to be correctly placed - all other letters can be shuffled.
 *
 *    Example input:    "Reading swapped words"
 *    Example output:   "Raenidg sawpepd wrdos"
 *
 *    How it works? Read here:
 *    https://www.mrc-cbu.cam.ac.uk/people/matt.davis/cmabridge/
 *
 */


function shuffleWords(inputText) {
  // your code goes here:

  const result = inputText
    .split(' ')
    .map(function (word) {// this is the transformation function
      // extract first and last letter
      // use slice function to get middle letters
      // call call shuffle function with the middle part
      // return first + shuffle_result + last
    })
    .join(' ');
  return result;
}

function shuffle(input) {
  const textAsArray = input.split('');
  const shuffledArray = shuffleUsingRandomPairs(textAsArray);
  const shuffledWord = shuffledArray.join('');
  return shuffledWord
}
function shuffleUsingRandomPairs(inputArray) {
  return inputArray
    .map(item => [item, Math.random()])   // create pairs - item and the random number
    .sort((a, b) => a[1] - b[1])          // sort array by the random number (the second item in pair)
    .map(x => x[0])                       // extract the original item from pair
}

const testInput = 'Reading swapped words';
const testOutput = shuffleWords(testInput);

console.log(`
Input and output:
"${testInput}"
"${testOutput}"
`);


