let game;
const buttonReset = document.getElementById(`btn__reset`);

//Starts new game when user clicks "Start Game"
buttonReset.addEventListener("click", (e) => {
  game = new Game();
  game.startGame();
});
