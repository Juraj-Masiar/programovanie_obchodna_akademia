

const ScreenController = (() => {
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

      ]]
    ]
    ]);
    document.body.appendChild(_container);
  }


  function startGame() {
    console.log('starting game');

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

  function createCheckbox(value) {
    buildCheckbox(value, {style: styleNode(`width: 14px; height: 14px; margin: 0 10px 0 0; appearance: checkbox; -moz-appearance: checkbox; -webkit-appearance: checkbox;`)})
  }

})();

