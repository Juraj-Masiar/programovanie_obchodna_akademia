

const SnakeController = (STEP_DELAY = 200, MOVE_DELTA = 20) => {
  const _input = InputController();
  const _snake = Snake();
  let _isPaused = false;
  init();

  return {
    startSnake: startSnake
  };

  function init() {
    _input.addOnEscHandler(() => _isPaused = !_isPaused);
    const firstBody =_snake.addBodyPart(0);
    const secondBody =_snake.addBodyPart(0);
    const thirdBody =_snake.addBodyPart(0);
    [firstBody, secondBody, thirdBody].forEach(bodyPart => bodyPart.setColor(randomHexColor()))
  }

  async function startSnake() {
    while (true) {
      if (_isPaused) {
        await timeoutPromise(STEP_DELAY);
        continue;
      }
      console.log('starting infinite loop iteration');
      const direction = _input.getDirection();
      const head = _snake.getHead();
      const tail = _snake.getTail();
      const wholeSnake = _snake.getSnake();

      // NOTE: we will create an Array `movements` which will store actions - functions that will be executed later
      const movements = wholeSnake.map((bodyPart, i) => {     // go trough all snake parts
        if (bodyPart.isHead()) {
          return () => bodyPart.move(direction, MOVE_DELTA);  // it it's head, move it where user want it
        }
        else {                                                // if it's NOT head (it's tail)
          const previousBodyPart = wholeSnake[i - 1];         // get previous body part
          const [x, y] = previousBodyPart.getPosition();
          return () => bodyPart.setPosition(x, y);            // and move this part where the previous part is
        }
      });
      // now we will execute all the action in reverse order (to solve issue with wrong positioning)
      movements.reverse().forEach(fn => fn());

      // get dimension of the map
      const [mapWidth, mapHeight] = GameController.getMapDimensions();
      // prevent snake to get out of the map
      const [x, y] = head.getPosition();
      if (x >= mapWidth) head.setPositionX(0);
      if (x < 0) head.setPositionX(mapWidth);
      // todo: finish "y" axis

      await timeoutPromise(STEP_DELAY);
    }
  }
};


