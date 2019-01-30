
/*
More info about WebAnimation API:
https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API
 */

const NodeAnimator = (() => {

  return {
    fromUpToDown: fromUpToDownJavaScriptVersion
  };

  function fromUpToDown(node, startX, startY, endY, duration) {
    node.style.left = `${px(startX)}`;
    return node.animate([
      {transform: `translateY(${px(startY)})`},
      {transform: `translateY(${px(endY)})`}
    ], {
      duration: duration,
      fill: 'forwards',
    });
  }

  function fromUpToDownJavaScriptVersion(node, startX, startY, endY, duration) {
    const [_promise, _resolve, _reject] = promiseFactory();
    let _isCanceled = false;
    let _isPaused = false;
    startAnimation();
    return {    // this is an animation object (API for our animation)
      id: `${NumberGenerator()}`,
      finished: _promise,
      pause: () => _isPaused = !_isPaused,
      cancel: () => _isCanceled = true
    };

    async function startAnimation() {
      setStyle(node, 'position', 'fixed');
      setStyle(node, 'left', px(startX));
      const pathLength = endY - startY;
      const startTime = getTime();
      const endTime = startTime + duration;
      await timeoutPromise(0);
      while (true) {
        if (_isPaused) {
          await timeoutPromise(100);
          continue;
        }
        const currentTime = getTime();
        const timeElapsed = currentTime - startTime;
        if (currentTime > endTime) break;
        if (_isCanceled) return _reject();
        setStyle(node, 'top', px(startY + timeElapsed * pathLength / duration));
        await requestAnimationFramePromise();
      }
      _resolve();
    }

  }

})();


