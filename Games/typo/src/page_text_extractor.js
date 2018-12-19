

const PageTextExtractor = (() => {
  return {
    getTextBlocks,
    getSentences,
    getWords
  };

  function getTextBlocks() {
    const textNodes = getTextNodes();
    const textBlocks = textNodes.map(node => node.textContent.trim());
    return textBlocks.filter(x => x);
  }

  function getSentences() {
    const blocks = getTextBlocks();
    const blocksOfSentences = blocks.map(textBlock => textBlock.split('.'));
    const sentences = flatten(blocksOfSentences).map(sentence => sentence.trim());
    return sentences.filter(x => x);
  }

  function getWords() {
    const sentences = getSentences();
    const sentencesWithWords = sentences.map(sentence => sentence.split(' '));
    const words = flatten(sentencesWithWords).map(word => word.trim());
    return words.filter(x => x);
  }
})();
