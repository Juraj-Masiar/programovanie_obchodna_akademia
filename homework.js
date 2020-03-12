
// Homework:
// using your Intellij Idea, create new JavaScript file (just like before) and paste there this

// Tasks:
// NOTE: write solution to each task right below each task:

// 1) define a constant called "userName" and assign to it your name, for example "Juraj"
const userName = 'Juraj';

// 2) implement a function called "getMagicNumber" that receives no parameters and returns number 42

// 3) call your function and store result in a constant called "magicNumber"

// 4) the following lines will validate that your previous code is working fine.
//    Try to understand some parts of it (not all) and modify it to print a secret message!

let everythingGood = false;
try {
  // inside "try" block you can write code full of errors and if something goes wrong, the program will "catch" those errors in the "catch" block
  console.assert(getMagicNumber() === 42, 'function getMagicNumber should return 42');
  console.assert(magicNumber === 42, 'constant magicNumber should be equal to 42');
  everythingGood = true;
} catch (e) {
  console.error(`Hello ${userName}, there is an error with your code :). The error is:\n`, e);
}

if (everythingGood) {
  if (userName === 'Juraj') {
    console.log(`Good job, HOWEVER you didn't changed your userName!`);
  }
  else if (userName.toLowerCase().includes('t')) {
    console.log(`!ti evresed uoy ,azzip a rof og woN !osammoT boj dooG`.split('').reverse().join(''));    // encrypted message :D..., or is it?
  }
  else if (userName.includes('brain')) {
    console.log( `D: !evresed uoy tahw teg uoy ,unem on s'erehT ?'amraK' dellac tnaruatser wen eht tuoba raeh uoy diD :EGASSEM TAERCES eht dnuof evah uoY`.split('').reverse().join(''));   // encrypted message :D..., or is it?
  }
  else if (userName.includes('armageddon')) {
    console.log( `.dlrow eht fo dne eht ton s’tI ?snaem ”noddegamrA“ tahw wonk t’nod I fi tahw oS`.split('').reverse().join(''));   // encrypted message :D..., or is it?
  }
  else {
    console.log( `!eciffo eht ni uoy rof gnitiaw elppa elohw a eb lliw erehT !boj dooG !yxuR ti did uoY`.split('').reverse().join(''));   // encrypted message :D..., or is it?
  }
}

