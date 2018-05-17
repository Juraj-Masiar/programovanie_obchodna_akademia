

const SnakeController = (STEP_DELAY = 1000, MOVE_DELTA = 20) => {
  const _input = InputController();
  const _snake = Snake();
  init();

  return {
    startSnake: startSnake
  };

  function init() {
    const firstBody =_snake.addBodyPart(0);
    const secondBody =_snake.addBodyPart(0);
    const thirdBody =_snake.addBodyPart(0);
    [firstBody, secondBody, thirdBody].forEach(bodyPart => bodyPart.setColor(randomHexColor()))
  }

  async function startSnake() {

    const [mapWidth, mapHeight] = GameController.getMapDimensions();

    while (true) {
      console.log('starting infinite loop iteration');
      const direction = _input.getDirection();
      const head = _snake.getHead();
      const tail = _snake.getTail();
      const snakeBody = _snake.getSnake();
      head.move(direction, MOVE_DELTA);
      for (let i = 1; i < snakeBody.length; i++) {
        const previousItem = snakeBody[i - 1];
        const bodyItem = snakeBody[i];
        const [x, y] = previousItem.getPosition();

      }

      await timeoutPromise(STEP_DELAY);
    }
  }
};


