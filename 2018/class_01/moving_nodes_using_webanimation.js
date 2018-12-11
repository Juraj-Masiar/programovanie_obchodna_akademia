
/*
More info about WebAnimation API:
https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API
 */

async function moveNodeFromUpDown(node) {
  node.animate([
    {transform: 'translateY(0px)'},
    {transform: 'translateY(1000px)'}
  ], {
    duration: 5000,
    fill: 'forwards',
  });
}

