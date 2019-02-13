

browser.runtime.onMessage.addListener((data, sender) => {
  switch (data.type) {
    case 'ping': return Promise.resolve('pong');
  }
});


async function RUN_TYPO() {
  const duration = 9000;

  console.log('hello from typo.js script');
  document.body.style.background = 'lightgray';

  const words = PageTextExtractor.getSimpleWords();
  ListController.drawWords(words);
  WordsController.addWordCreatedEventListener(onWordStart);
  WordsController.startGame(words, {animationDuration: duration});

  InputController.addOnEscHandler(onEscHandler);

  InputController.addListener((userText, constroller) => {
    // this code is executed when user types anything
    console.log(userText);

    WordsController.forEachWord(({animation, node, text, highlightNode}, i) => {
      // iterate though all falling words:
      if (text.startsWith(userText) && userText.length > 0) {
        highlightNode.textContent =  userText;
        setStyle(highlightNode, 'visibility', 'visible');
      }
      else {
        setStyle(highlightNode, 'visibility', 'hidden');

      }
      // todo: replace this block with something that will do the right thing
      if (text === userText) {
        animation.cancel();
        node.remove();
        highlightNode.remove();
        node.style.background = 'yellow';
        node.style.color = 'black';
        InputController.clear();   // this clears what user wrote
        StatisticsController.okWord();
      }
      if (!text.startsWith(userText)) {
        console.error('CHYBA');
        StatisticsController.wrongKey();
      } else {
        StatisticsController.okKey();
      }

    })

  });


  StatisticsController.draw();
  console.log('Game Over');

}

// executed for each falling word
function onWordStart({animation, node, text, highlightNode}) {
  console.log('new word is now falling:', text);
  InputController.clear();   // this clears what user wrote
  animation.finished.then(() => {
    StatisticsController.wrongWord();
  });

}

function onEscHandler(event) {
  console.log('ESC pressed');
  const {animation, animationH, node, text, highlightNode} = WordsController.getCurrentWord();
  if (animation.isPaused()) {
    animation.unpause();
    animationH.unpause();
  } else {
    animation.pause();
    animationH.pause();
  }
}


RUN_TYPO();
