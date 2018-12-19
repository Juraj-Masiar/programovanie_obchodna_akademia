
/*
More info about WebAnimation API:
https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API
 */

const NodeAnimator = (() => {

  return {
    fromUpToDown
  };

  function fromUpToDown(node, startX, startY, endY, duration) {
    node.style.left = `${startX}`;
    return node.animate([
      {transform: `translateY(${startY})`},
      {transform: `translateY(${endY})`}
    ], {
      duration: duration,
      fill: 'forwards',
    });
  }
})();


