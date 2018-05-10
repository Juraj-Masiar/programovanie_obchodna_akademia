

const SnakeController = () => {
  const _input = InputController();
  const _snake = Snake();

  return {
    startSnake: startSnake
  };

  async function startSnake() {
    while (true) {
      console.log('starting infinite loop iteration');

      await timeoutPromise(1000);
    }
  }
};


