let game;
const buttonReset = document.getElementById("btn__reset");
buttonReset.addEventListener("click", (e) => {
  game = new Game();
  game.startGame();
});
//Event listener for keyboard clicks
const keyboard = document.getElementById("qwerty");
keyboard.addEventListener("click", (e) => {
  if (e.target.className === "key") {
    game.handleInteraction(e.target);
  }
});
//Allows user to use keyboard to guess letters
const keys = document.querySelectorAll(".key");
keys.addEventListener("keyup", (e) => {
  if (e.target.className === "key") {
    game.handleInteraction(e.target);
  }
});
