

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
      // const previousPositions = snakeBody
      //   .map(x => x.getPosition());

      const aaa = [];

      for (let i = 1; i < snakeBody.length; i++) {
        const previousItem = snakeBody[i - 1];
        const bodyItem = snakeBody[i];
        const [x, y] = previousItem.getPosition();
        // const [x, y] = previousPositions[i - 1];
        // bodyItem.setPosition(x, y);
        // setTimeout(() => bodyItem.setPosition(x, y), 0);

        aaa.push(() => bodyItem.setPosition(x, y));
      }


      head.move(direction, MOVE_DELTA);
      aaa.reverse().forEach(fn => fn());


      const [x, y] = head.getPosition();
      if (x > 100) head.setPositionX(0);
      if (x < 0) head.setPositionX(100);

      await timeoutPromise(STEP_DELAY);
    }
  }
};


