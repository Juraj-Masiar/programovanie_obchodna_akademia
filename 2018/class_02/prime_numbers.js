
const lgg = (function (startFrom = 1) {
  let i = startFrom - 1;

  return function LG() {
    i = i + 1;
    return i;
  }
});


function isPrime(x) {
  for (let i = 2; i < x; i++) {
    if (x % i === 0) return false;
  }
  return true;
}

const primeNumberGenerator = function (startFrom = 1) {
  const LG = lgg(startFrom);
  return function () {
    while (true) {
      const nextNumber = LG();
      if (isPrime(nextNumber)) return nextNumber;
    }
  }
};

const PG = primeNumberGenerator(1000000);

for (let i = 0; i < 5; i++) {
  console.log(PG());
}
