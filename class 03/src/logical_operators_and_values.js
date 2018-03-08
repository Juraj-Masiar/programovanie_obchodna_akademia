const noop = () => {};

// Falsy values: (you should know all these - `false`, empty string, zero, null, undefined, Not a Number)
if (false)      noop(); else console.log(`false is false`);
if ('')         noop(); else console.log(`empty string is false`);
if ("")         noop(); else console.log(`empty string is false`);
if (``)         noop(); else console.log(`empty string is false`);
if (0)          noop(); else console.log(`zero is false`);
if (null)       noop(); else console.log(`null is false`);
if (undefined)  noop(); else console.log(`undefined is false`);
if (NaN)        noop(); else console.log(`Not a Number is false`);

console.log('\n');
// Truthy values are everything else, these are just few examples:
if (true)                console.log('true is true');
if (42)                  console.log('every number expect 0 is true');
if ('not empty string')  console.log('not empty string is true');
if (' ')                 console.log('even single space is not empty string');
if ([])                  console.log('empty array is true');
if ({})                  console.log('empty object is true');


console.log('\n');
// Logical operations:
//    ||     - OR
//    &&     - AND
//    !      - NOT
//    >      - bigger than
//    >=     - bigger or equal
//    <      - smaller than
//    <=     - smaller or equal
//    ===    - equal than
//    !==    - not equal

if (false || 1 === 1 && !false && 1 < 2 && 2 >= 0 && 1 !== 2)
  console.log('this long expression if TRUE');