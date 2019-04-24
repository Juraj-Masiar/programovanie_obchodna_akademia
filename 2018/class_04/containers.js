
/*
MDN Documentation:
Array:    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
Object:   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
Map:      https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
Set:      https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set

 */

let randomCallCount = 0;
function getRandomBetween(min, max) {
  randomCallCount++;
  return Math.floor(Math.random() * (max - min)) + min;
}
// 0 - 10 -> 3, 4, 1, 2, 5

function generateNumbers(from, to, howMany) {
  const result = [];
  // WRONG CODE START:    ----------------------------------- //
  while (result.length !== howMany) {
    const x = getRandomBetween(from, to);
    if (!result.includes(x))
      result.push(x);
  }
  // WRONG CODE END       ----------------------------------- //
  return result;
}
const {performance} = require('perf_hooks');
const x = performance.now();
console.log(generateNumbers(0, 10000, 10000));
const diff = performance.now() - x;
console.warn(diff / 1000);

console.warn(`called ${randomCallCount} times!!!`);

