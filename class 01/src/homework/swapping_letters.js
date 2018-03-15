/**
 *    Job assignment:
 *    Create function that will take one parameter - a sentence - and will return the same sentence but some letters will be swapped.
 *    There is only one rule: First and Last letter in every word needs to be correctly placed - all other letters can be shuffled.
 *
 *    Example input:    "Reading swapped words"
 *    Example output:   "Raeding sawpepd wrods"
 *
 *    How it works? Read here:
 *    https://www.mrc-cbu.cam.ac.uk/people/matt.davis/cmabridge/
 *
 */


function shuffleWords(inputText) {
  // your code goes here:

    const result = inputText
        .split(' ')
        .map(function (word) {      // this is the transformation function
            // extract first and last letter
            // use slice funtion to get middle letters
            // call call shuffle function
            // return first + shuffle result + last
        })
        .join(' ');
    return result;
}

function shuffle(input) {
    // todo: finish proper shuffle
    return input
}

const testInput = 'Reading swapped words';
const testOutput = shuffleWords(testInput);

console.log(`
Input and output:
"${testInput}"
"${testOutput}"
`);


