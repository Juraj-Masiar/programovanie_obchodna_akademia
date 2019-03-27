
const LG = (function () {
  let i = 0;

  return function LG() {
    i = i + 1;
    return i;
  }
})();



console.log(LG());
console.log(LG());
console.log(LG());
console.log(LG());
