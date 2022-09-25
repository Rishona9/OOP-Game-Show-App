let game;
const buttonReset = document.getElementById("btn__reset");
buttonReset.addEventListener("click", (e) => {
  game = new Game();
  game.startGame();
});
