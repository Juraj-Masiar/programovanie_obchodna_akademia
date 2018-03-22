
const inputArray = ['a', 'b', 'c'];
const resultArray = [];

for (let i = 0; inputArray.length > 0; i++) {
  console.log('hello from array', i);
  const randomIndex = random(inputArray.length);
  const randomItem = inputArray.slice(randomIndex, randomIndex + 1)[0];
  inputArray.splice(randomIndex, 1);
  resultArray.push(randomItem);
}

console.log('result is', resultArray);

function random(number) {
  return Math.floor(Math.random() * number)
}

['aa', 'bb', 'cc'].map(x => [x, Math.random()])

