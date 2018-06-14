

const SnakeController = (STEP_DELAY = 200, MOVE_DELTA = 20) => {
  const _input = InputController();
  const _snake = Snake();
  let _isPaused = false;
  const _foodList = [];
  init();

  return {
    startSnake: startSnake
  };

  function init() {
    _input.addOnEscHandler(() => _isPaused = !_isPaused);
    [
      _snake.addBodyPart(0),
      _snake.addBodyPart(0),
      _snake.addBodyPart(0)
    ].forEach(bodyPart => bodyPart.setColor(randomHexColor()));
    _foodList.push(Food(100, 100), Food(40, 40), Food(140, 80));    // todo: make food appear on random but correct positions
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
      const [headX, headY] = head.getPosition();
      if (headX >= mapWidth) head.setPositionX(0);
      if (headX < 0) head.setPositionX(mapWidth);
      // todo: finish "y" axis


      const collisionFood = _foodList.find(food => {
        const [x, y] = food.getPosition();
        return x === headX && y === headY;
      });
      if (collisionFood) {
        collisionFood.remove();
        removeFromArray(_foodList, collisionFood);
        // todo: finish snake growing when eating
        // todo: make sure to add new food on the map once the old is gone

      }

      await timeoutPromise(STEP_DELAY);
    }
  }
};


