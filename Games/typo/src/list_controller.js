

const ListController = (() => {
  const _container = init();
  return {
    drawWords: drawWords,
    drawNodes: drawNodes,
  };

  function init() {

    const box = buildElement('list-words', {
      style: styleBlock(`
      position: fixed; 
      top: 90px; 
      right: 0; 
      margin: 10px; 
      padding: 10px;
      font-size: 20px; 
      background: white; 
      border: 1px solid black;
      display: flex;
      flex-direction: column;
    `)
    });
    document.body.appendChild(box);
    return box;
  }

  function drawNodes(nodes) {
    replaceChildNodes(_container, nodes);
  }

  function drawWords(words) {
    const nodes = words.map(w => buildElement('word', {style: styleBlock(``), textContent: w}));
    drawNodes(nodes)
  }

})();

