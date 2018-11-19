
// this is inline comment

/* this is also inline comment */
/*
  This is
  multi-line
  asdflkjsklfj
  comment.
*/

var oldWay = "dont use this";       // dont use 'var' ever again
// contants
const pi = 3.1415926535;
// pi = 3;      // cannot change constant
const obchodnaName = 'Obchodna akademia';
const obchodnaName2 = "Obchodna akademia";
// variables
let number = 42;
console.log(number);

number = 2;     // we can reassign values in variables
console.log(number);

// console.log(pi);
// console.log(pi + ' ' + obchodnaName);

// TYPES:
const decimalNumber = 0;
const floatingPointNumber = 1.0;
const string = 'abc';
const booleanTrue = true;
const booleanFalse= false;
const object = {};
const array = [];
const functionType = function() {};

console.log(true);
console.log(false && true);
console.log(false || true);

// if else => altering code execution
if (decimalNumber === 0) {
    console.log('this was called in the `if` block')
}
else {
    console.log('this was called in the `else` block')
}


// loops

for (let i = 0; i < 5; i = i + 1) {
    console.log('hello from loop, iteration number: ', i);
}

// functional way is always better
Array(5).fill().forEach(function (item, i, array) {
    console.log('hello from functional loop, iteration number: ', i);
});

// functions
function x2 (number) {
    return number * number;
}

const shortX2 = number => number * number;
const multiply = (x, y) => x * y;
// function multiply(x, y) {
//     return x * y;
// }

const functionCallResult = x2(9);
const functionCallResultFromShort = shortX2(9);
console.log(functionCallResult, functionCallResultFromShort);
