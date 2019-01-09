

const WordsController = (() => {
  const _fallingWords = [];   // contains objects with "animation", "node" and "text" properties


  return {
    forEachWord: forEachWord,
    startGame: startGame
  };

  async function startGame(words, {
    animationDuration
  }) {
    const wordsNodes = words
      .map(word => buildElement('span', {
        style: 'background: gray; color: white; display: inline-block; position: absolute;',
        textContent: word
      }))
      .slice(0, 10);

    console.log('wn', wordsNodes, words);

    _fallingWords.length = 0;   // clear list of words
    // Animation of all nodes:
    for (let i = 0; i < wordsNodes.length; i++) {
      // extract node
      const wordNode = wordsNodes[i];
      // add it to the page body
      document.body.prepend(wordNode);
      // start the animation

      const startX = px(window.innerWidth / 2);
      const startY = px(0);
      const endY = px(window.innerHeight);
      const animation = NodeAnimator.fromUpToDown(wordNode, startX, startY, endY, animationDuration);
      // add falling word to the list of all falling words
      _fallingWords.push({
        animation: animation,
        node: wordNode,
        text: wordNode.textContent
      });

      // todo: when animation is done, we can do something...
      animation.finished.then(() => {
        console.log('word animation done', wordNode);
        wordNode.remove();
        removeFromArrayPredicate(_fallingWords, item => item.animation.id === animation.id);
      });
      await animation.finished.catch(() => {});
    }
  }

  function forEachWord(fn) {
    // const wordsOnScreen = _fallingWords.filter(({animation, node, text}) => {
    //
    // })

    _fallingWords.forEach(fn);
  }

})();

