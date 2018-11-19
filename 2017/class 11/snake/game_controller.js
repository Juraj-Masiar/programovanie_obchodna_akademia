
const GameController = (() => {
  window.addEventListener('load', init);   // start game when page is loaded

  return {
    getMapDimensions: getMapDimensions
  };

  function init() {
    startGame();
  }

  async function startGame() {

    const snakeController = SnakeController();
    await snakeController.startSnake();

  }

  function getMapDimensions() {
    return [window.innerWidth, window.innerHeight];
  }

})(); // GameController

