
const Snake = () => {
  const _snakeBody = [BodyPart(true), BodyPart()];
  let _self;
  return (_self = {                            // Snake API
    getSnake: () => _snakeBody.slice(),
    getHead: () => _snakeBody.find(x => x.isHead()),
    getTail: () => _snakeBody.filter(x => x.isBody()),
    addBodyPart: addBodyPart,
    removeBodyPart: removeBodyPart
  });
  function BodyPart(isHead = false) {
    let _posX = 0, _posY = 0;
    const _id = NumberGenerator();
    const _node = buildBodyNode();   // body part is by default invisible (out of visible area), by setting correct position it will become visible
    document.body.appendChild(_node);
    let _self;
    return (_self = {                                  // BodyPart API
      isHead: () => isHead,
      isBody: () => !isHead,
      getPosition: () => [_posX, _posY],
      setPosition: setPosition,
      setPositionX: x => setPosition(x, _posY),
      setPositionY: y => setPosition(_posX, y),
      move: move
    });

    function setPosition(x, y) {
      _posX = x;
      _posY = y;
      _node.style.left = px(x);   // todo: maybe extract graphics part to the separate component?
      _node.style.top = px(y);
    }

    function move(direction, delta) {
      switch (direction) {
        case 'ArrowRight': _self.setPositionX(_posX + delta); break;
        case 'ArrowLeft': _self.setPositionX(_posX - delta); break;
        case 'ArrowDown': _self.setPositionY(_posY + delta); break;
        case 'ArrowUp': _self.setPositionY(_posY - delta); break;
      }
    }

    function buildBodyNode() {
      return buildElement('div', {
        id: _id,
        class: `snake_body_part ${isHead ? 'snake_head' : ''}`
      }, buildElement('svg', {
          width: isHead ? 30 : 20,
          height: isHead ? 30 : 20,
          viewBox: '0 0 1792 1792',
          xmlns: 'http://www.w3.org/2000/svg'
        }, buildElement('path', {d: 'M1664 896q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z'}))
      )
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
