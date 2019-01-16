
const InputController = (() => {
  const _listeners = [];
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
  let _self;
  return (_self = {
    clear: () => _node.value = '',
    addListener: fn => _listeners.push(fn)
  });

  function inputChangeHandler(e) {
    const text = e.target.value;
    _listeners.forEach(fn => fn(text, _self))
  }

})();

