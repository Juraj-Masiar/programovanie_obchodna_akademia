
const InputController = () => {
  const allowedKeys = ['ArrowRight', 'ArrowLeft', 'ArrowDown', 'ArrowUp'];
  let _direction = 'ArrowRight';
  window.addEventListener('keydown', onKeyDown);

  return {
    getDirection: () => _direction
  };

  function onKeyDown(e) {
    console.log('e', e);
    if (allowedKeys.includes(e.code)) {
      _direction = e.code
    }
  }
};

