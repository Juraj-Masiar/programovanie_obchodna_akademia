

const SnakeController = (STEP_DELAY = 1000, MOVE_DELTA = 20) => {
  const _input = InputController();
  const _snake = Snake();

  return {
    startSnake: startSnake
  };

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


      }

      await timeoutPromise(STEP_DELAY);
    }
  }
};


