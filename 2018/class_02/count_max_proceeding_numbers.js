


const input = Array(10).fill().map(() => Math.random() < 0.5 ? 0 : 1);

const Counter = () => {
  let i = 0;
  let maxValue = 0;
  return {
    addOne: () => i++,
    reset: reset,
    getMaxValue: () => maxValue,
  };
  function reset() {
    if (i > maxValue) maxValue = i;
    i = 0;
  }
};

const counterZeros = Counter();
const counterOnes = Counter();

input.forEach(x => {
  if (x === 0) {
    counterZeros.addOne();
    counterOnes.reset();
  }
  else {
    counterOnes.addOne();
    counterZeros.reset();
  }
});

console.log('input is', input);
console.log('max 0 is', counterZeros.getMaxValue());
console.log('max 1 is', counterOnes.getMaxValue());


