

// More info about letter case: https://en.wikipedia.org/wiki/Letter_case

// console.log('hello world');

// console.log('hello world', 42);

const testData = 'Kuzminová získala ďalšie striebro, Fialková skončila piata';
console.log(testData);

console.log('this is the result:\n', transformToTitleCase(testData));


function transformToTitleCase(inputText) {
  const result = inputText
    .split(' ')
    .map(function (word) {
      const firstLetter = word.charAt(0);
      const firstUpperCaseLetter = firstLetter.toLocaleUpperCase();
      const restOfTheWord = word.slice(1);
      return firstUpperCaseLetter + restOfTheWord;
    })
    .join(' ');
  return result;
}




