
// Implement a function that will receive one parameter - money amount, and returns array of coins required for such amount
// Example: moneySplit(34) would return [20, 10, 2, 2]


const supportedCoins = [500,200,100,50,20,10,5,2,1];

function getMaxCoin(moneyValue) {
  for (const x of supportedCoins) {
    const modulo = moneyValue % x;
    if (modulo !== moneyValue) {
      return [x, modulo];
    }
  }
}

function moneySplit(money) {
  const result = [];
  let rest = money;
  do {
    const [maxCoin, restOfTheMoney] = getMaxCoin(rest);
    // console.log(maxCoin, restOfTheMoney);
    rest = restOfTheMoney;
    result.push(maxCoin);
  } while (rest > 0);
  return result;
}

// automatic tests:

const testFn = (input, output) => {
  const result = moneySplit(input);
  if (JSON.stringify(result) === JSON.stringify(output))
    console.log(`OK: ${input} = ${output}`);
  else
    console.warn(`FAILED: for input ${input} expected ${output}, but got ${result}`);
};

testFn(34, [20, 10, 2, 2]);
testFn(35, [20, 10, 5]);
testFn(1, [1]);
testFn(6, [5, 1]);
testFn(9, [5, 2, 2]);
testFn(3210, [500, 500, 500, 500, 500, 500, 200, 10]);

