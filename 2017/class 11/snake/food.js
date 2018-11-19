
const Food = (_posX = 0, _posY = 0) => {
  const _id = NumberGenerator();
  const _node = buildBodyNode();   // body part is by default invisible (out of visible area), by setting correct position it will become visible
  document.body.appendChild(_node);
  let _self;
  return (_self = {                          // BodyPart API
    getPosition: () => [_posX, _posY],
    setPosition: setPosition,
    setPositionX: x => setPosition(x, _posY),
    setPositionY: y => setPosition(_posX, y),
    remove: () => _node.remove(),
    move: move,
    setColor: color => _node.style.setProperty('color', color)
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
        style: `top: ${_posY}px; left: ${_posX}px;`,
        class: `food`
      }, buildElement('svg', {
        width: 20,
        height: 20,
        viewBox: '0 0 1792 1792',
        xmlns: 'http://www.w3.org/2000/svg'
      }, buildElement('path', {d: 'M1585 1215q-39 125-123 250-129 196-257 196-49 0-140-32-86-32-151-32-61 0-142 33-81 34-132 34-152 0-301-259-147-261-147-503 0-228 113-374 113-144 284-144 72 0 177 30 104 30 138 30 45 0 143-34 102-34 173-34 119 0 213 65 52 36 104 100-79 67-114 118-65 94-65 207 0 124 69 223t158 126zm-376-1173q0 61-29 136-30 75-93 138-54 54-108 72-37 11-104 17 3-149 78-257 74-107 250-148 1 3 2.5 11t2.5 11q0 4 .5 10t.5 10z'}))
    )
  }
};  // Food
