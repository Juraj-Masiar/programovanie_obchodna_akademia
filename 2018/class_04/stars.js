
/*
EXPECTED RESULT:

// START:
*
**
***
****

****
 ***
  **
   *

   *
  *
 *
*
// END
*/

let result = '';

function printStars(count, predicateFn) {
  for (let i = 0; i < count; i++) {
    for (let j = 0; j < count; j++) {
      result += predicateFn(i, j) ? '*' : ' ';
    }
    result += '\n';
  }
}
printStars(4, (i, j) => i === j);

result += '\n';



console.log(result);


const timeoutPromise = delay => new Promise(resolve => resolve());

(async function infiniteRecursiveLoop() {
  await timeoutPromise();
  infiniteRecursiveLoop();
})();
