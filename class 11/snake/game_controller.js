

window.addEventListener('load', startGame);   // start game when page is loaded

async function startGame() {

  const snakeController = SnakeController();
  await snakeController.startSnake();

}

