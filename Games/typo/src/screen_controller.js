

const ScreenController = (() => {
  const duration = 9000;
  let _container;

  return {
    initialize: initialize,
    // showWelcome: showWelcome,
    // showEnd: showEnd,
  };

  function initialize() {
    _container = buildHtml(['welcome-screen', {
      style: styleBlock(`
      position: fixed; 
      top: 90px; 
      left: 25%;
      width: 50%;
      margin: 10px; 
      padding: 10px;
      background: lightgreen;
      font-size: 20px; 
      border: 1px solid gray;
      box-shadow: 0px 0px 4px 0px black;
      display: flex;
      flex-direction: column;
      align-items: center;
    `)
    }, [
      ['h1', {style: styleBlock('font-size: 42px; margin: 10px 0;'), textContent: 'Welcome to Typo!'}],
      ['button', {style: getButtonStyle(), textContent: 'Start game', handlers: {onclick: startGame}}],
      ['options', {style: styleBlock('width: 100%')}, [
        ['h2', {style: styleBlock('font-size: 20px; margin: 10px 0;'), textContent: 'Options:'}],
        createTextCheckbox('lower_case', 'Lower case only', false),
        createTextCheckbox('no_diacritics', 'Without diacritics', false),
      ]]
    ]
    ]);
    document.body.appendChild(_container);
  }


  function startGame() {
    console.log('starting game');
    const words = PageTextExtractor.getSimpleWords();
    ListController.drawWords(words);
    WordsController.startGame(words, {animationDuration: duration});   // todo: move all this logic to screen controller

    _container.remove();
  }

  function getButtonStyle(customStyle = '', size = 2) {
    return `
      padding: ${size}px ${size * 2 + 1}px;
      background-color: white;
      text-align: center;
      white-space: nowrap;
      vertical-align: middle;
      touch-action: manipulation;
      cursor: pointer;
      -moz-user-select: none;
      user-select: none;
      border: 1px solid #ccc;
      ${customStyle}
      `;
  }

  function createTextCheckbox(id, text, value) {
    return ['div', {style: styleBlock(`display: flex; align-items: center;`)}, [
      createCheckbox(value, {id: id}),
      ['label', {style: styleNode(`cursor: default;`), for: id, textContent: text}],
    ]]
  }

  function createCheckbox(value, attributes = {}, customStyle = '') {
    return ['input', {
      type: 'checkbox',
      ...attributes,
      ...(value ? {checked: true} : {}),
      style: styleNode(`width: 14px; height: 14px; margin: 0 10px 0 0; appearance: checkbox; -moz-appearance: checkbox; -webkit-appearance: checkbox;${customStyle}`)
    }]
  }

})();

