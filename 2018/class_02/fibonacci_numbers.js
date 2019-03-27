
const FG = (function () {
  let i = 1;
  let previousNumber = 0;

  return function () {
    const currentI = i;
    i = i + previousNumber;
    previousNumber = currentI;
    return i;
  }
})();


console.log(FG());
console.log(FG());
console.log(FG());
console.log(FG());
console.log(FG());
console.log(FG());
console.log(FG());
console.log(FG());
console.log(FG());
console.log(FG());