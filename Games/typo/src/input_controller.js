
const InputController = (() => {
  const _listeners = [];
  const _escListeners = [];
  const _node = document.body.appendChild(buildElement('input', {style: styleNode(`
  position: fixed; 
  top: 0; 
  left: 0; 
  margin: 10px; 
  font-size: 20px; 
  background: white; 
  border: 1px solid black;
  `)}));
  setInterval(() => _node.focus(), 10);
  _node.oninput = inputChangeHandler;
  _node.onkeydown = onKeyDown;

  let _self;
  return (_self = {
    clear: () => _node.value = '',
    addListener: fn => _listeners.push(fn),
    addOnEscHandler: fn => _escListeners.push(fn),

  });

  function inputChangeHandler(e) {
    const text = e.target.value;
    _listeners.forEach(fn => fn(text, _self))
  }

  function onKeyDown(e) {
    if (e.code === 'Escape') _escListeners.forEach(fn => fn(e));
  }

})();

