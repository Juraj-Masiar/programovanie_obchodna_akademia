

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
      head.move(direction, MOVE_DELTA);
      tail.forEach(x => x.move(direction, MOVE_DELTA));

      await timeoutPromise(STEP_DELAY);
    }
  }
};


