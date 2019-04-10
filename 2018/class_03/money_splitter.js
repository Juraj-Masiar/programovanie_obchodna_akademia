
// Implement a function that will receive one parameter - money amount, and returns array of coins required for such amount
// Example: moneySplit(34) would return [20, 10, 2, 2]


const supportedCoins = [500,200,100,50,20,10,5,2,1];

function getMaxCoins(moneyValue) {
  for (const coin of supportedCoins) {
    const remainingMoney = moneyValue % coin;
    if (remainingMoney !== moneyValue) {
      const howManyCoins = Math.floor(moneyValue / coin);    // round value of how many coins we need to use
      return [coin, howManyCoins, remainingMoney];
    }
  }
}

function moneySplit(money) {
  const result = [];
  let rest = money;
  do {
    const [maxCoin, howManyCoins, restOfTheMoney] = getMaxCoins(rest);
    // console.log(maxCoin, restOfTheMoney);
    rest = restOfTheMoney;
    for (let i = 0; i < howManyCoins; i++) {    // use loop to insert the coin required times
      result.push(maxCoin);
    }
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

