

async function RUN_TYPO() {
  console.log('hello from typo.js script');
  document.body.style.background = 'green';


  // todo: work in progress...
  const words = PageTextExtractor.getWords();
  const wordsNodes = words
    .map(word => buildElement('span', {style: 'background: gray; color: white; display: inline-block; position: absolute;', textContent: word}));

  console.log('wn', wordsNodes, words);

  const wordNode = wordsNodes[0];
  document.body.prepend(wordNode);

  const animation = NodeAnimator.fromUpToDown(wordNode, px(window.innerWidth / 2), px(0), px(window.innerHeight), 10000);

  animation.finished.then(() => console.log('word animation done', wordNode));



}



RUN_TYPO();
