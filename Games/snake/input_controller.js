
const InputController = () => {
  const allowedKeys = ['ArrowRight', 'ArrowLeft', 'ArrowDown', 'ArrowUp'];
  let _direction = 'ArrowRight';
  window.addEventListener('keydown', onKeyDown);
  const _escHandlers = [];

  return {
    addOnEscHandler: fn => _escHandlers.push(fn),
    getDirection: () => _direction
  };

  function onKeyDown(e) {
    console.log('e', e);
    if (allowedKeys.includes(e.code)) {
      _direction = e.code
    }
    if (e.code === 'Escape') _escHandlers.forEach(fn => fn());
  }
};

