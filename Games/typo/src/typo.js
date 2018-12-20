

async function RUN_TYPO() {
  console.log('hello from typo.js script');
  document.body.style.background = 'green';


  // todo: work in progress...
  const words = PageTextExtractor.getWords();
  const wordsNodes = words
    .map(word => buildElement('span', {style: 'background: gray; color: white; display: inline-block; position: absolute;', textContent: word}))
    .slice(0, 10);

  console.log('wn', wordsNodes, words);

  // Animation of a single node:
  // const wordNode = wordsNodes[0];
  // document.body.prepend(wordNode);
  // const animation = NodeAnimator.fromUpToDown(wordNode, px(window.innerWidth / 2), px(0), px(window.innerHeight), 10000);
  // animation.finished.then(() => console.log('word animation done', wordNode));

  // Animation of all nodes:
  for (let i = 0; i < wordsNodes.length; i++) {
    // extract node
    const wordNode = wordsNodes[i];
    // add it to the page body
    document.body.prepend(wordNode);
    // start the animation
    const animation = NodeAnimator.fromUpToDown(wordNode, px(window.innerWidth / (i + 2)), px(i * 50), px(window.innerHeight + i * 50), 10000);
    // todo: when animation is done, we can do something...
    animation.finished.then(() => console.log('word animation done', wordNode));

  }


}



RUN_TYPO();
