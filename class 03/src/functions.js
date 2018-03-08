

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


function printAllItemsFromArray(array) {
    for (let i = 0; i < array.length; i = i + 1) {
        const item = array[i];
        console.log(item);
    }
}

const arrayOfNumbers = [1, 2, 2];
printAllItemsFromArray(arrayOfNumbers);

function forEachItemInArray(array, fn) {
    for (let i = 0; i < array.length; i = i + 1) {
        const item = array[i];
        fn(item);
    }
}

console.log('printing numbers again:');
forEachItemInArray(arrayOfNumbers, console.log);

console.log('printing using forEach function');
arrayOfNumbers.forEach(function (item) {
    console.log(item * 2);
});


function transformEachItemInArray(array, fn) {
    const result = [];
    for (let i = 0; i < array.length; i = i + 1) {
        const item = array[i];
        const resultOfTransformationFunction = fn(item);
        result.push(resultOfTransformationFunction);
    }
    return result;
}

console.log('tranforming array by multiplying');

const resultArray = transformEachItemInArray(arrayOfNumbers, function (item) {
    return item * 4;
});

console.log('result array is', resultArray);

console.log('tranfroming array using `map` function');

const transformedArray = arrayOfNumbers.map(function(item) {
    return item * 4;
});

console.log('result is ', transformedArray);
