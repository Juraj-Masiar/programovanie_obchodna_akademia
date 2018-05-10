
const Snake = () => {
  const _snakeBody = [BodyPart(true), BodyPart()];
  let self;
  return (self = {                            // Snake API
    getSnake: () => _snakeBody.slice(),
    getHead: () => _snakeBody.find(x => x.isHead()),
    getTail: () => _snakeBody.filter(x => x.isBody()),
    addBodyPart: addBodyPart,
    removeBodyPart: removeBodyPart
  });
  function BodyPart(isHead = false) {
    let _posX = 0, _posY = 0;
    const _id = NumberGenerator();
    const _node = buildElement('div', {id: _id, class: `snake_body_part ${isHead ? 'snake_head' : ''}`});   // body part is by default invisible (out of visible area), by setting correct position it will become visible
    return {                                  // BodyPart API
      isHead: () => isHead,
      isBody: () => !isHead,
      getPosition: () => [_posX, _posY],
      setPosition: setPosition,
      setPositionX: x => setPosition(x, _posY),
      setPositionY: y => setPosition(_posX, y)
    };

    function setPosition(x, y) {
      _posX = x;
      _posY = y;
      _node.style.left = px(x);   // todo: maybe extract graphics part to the separate component?
      _node.style.top = px(y);
    }
  } // BodyPart

  function addBodyPart(position) {
    if (position < 0 || position + 1 >= _snakeBody.length) throw `Wrong insert position, cannot insert at ${position} if snake length is ${_snakeBody.length}`;
    const bodyPart = BodyPart();
    _snakeBody.splice(position + 1, 0, bodyPart);
    return bodyPart;
  }
  function removeBodyPart(position) {
    if (position < 0 || position + 1 >= _snakeBody.length) throw `Wrong remove position, cannot remove at ${position} if snake length is ${_snakeBody.length}`;
    _snakeBody.splice(position + 1, 1);
  }

};  // Snake
