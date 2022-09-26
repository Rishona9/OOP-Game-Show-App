class Game {
  constructor() {
    this.missed = 0;
    this.phrases = [
      new Phrase("It is what it is"),
      new Phrase("It is always darkest before the dawn"),
      new Phrase("Take the good with the bad"),
      new Phrase("Another day another dollar"),
      new Phrase("Time heals all wounds"),
    ];
    this.activePhrase = null;
  }
  //Selects random phrase from phrases property
  getRandomPhrase() {
    const randomNumber = Math.floor(Math.random() * this.phrases.length);
    return this.phrases[randomNumber];
  }
  //Begins game by selecting a random phrase and displaying it to user
  startGame() {
    document.getElementById("overlay").style.display = "none";
    this.activePhrase = this.getRandomPhrase();
    this.activePhrase.addPhraseToDisplay();
  }
  //Checks for winning move
  checkForWin() {
    const hiddenCharacter = document.getElementsByClassName("hide");
    if (hiddenCharacter.length === 0) {
      return true;
    } else {
      return false;
    }
  }
  //Removes life from scoreboard if no matching letter in phrase
  removeLife() {
    const lifeHearts = document.querySelectorAll("img");
    if (this.missed < 4) {
      lifeHearts[this.missed].src = "images/lostHeart.png";
      this.missed++;
    } else {
      this.gameOver();
    }
  }
  //Displays the original start screen overlay and displays winning or losing message
  gameOver(gameWon) {
    const overLay = document.getElementById("overlay");
    if (gameWon) {
      document.getElementById("game-over-message").innerHTML =
        "You win, please play again!";
      overLay.className = "win";
      overLay.style.display = "";
    } else {
      document.getElementById("game-over-message").innerHTML =
        "You lose, please try again!";
      overLay.className = "lose";
      overLay.style.display = "";
    }
  }
  /*Checks to see if the onscreen keyboard button clicked by the player matches a letter in the phrase, 
  and then directs the game based on a correct or incorrect guess */
  handleInteraction(button) {
    button.disabled = true;
    if (this.activePhrase.checkLetter(button.textContent)) {
      button.classList.add("chosen");
      this.activePhrase.showMatchedLetter(button.textContent);
      this.checkForWin();
      if (this.checkForWin()) {
        this.gameOver(true);
      }
    } else {
      button.classList.add("wrong");
      this.removeLife();
    }
  }
  //Resets the gameboard between games
  resetGame() {
    const phrase = document.querySelector("#phrase");
    const keys = document.querySelectorAll(".key");
    const lifeHearts = document.querySelectorAll("img");
    const buttonReset = document.getElementById("btn__reset");

    buttonReset.addEventListener("click", (e) => {
      this.missed = 0;
      phrase.innerHTML = "<ul></ul>";
      keys.forEach((key) => {
        key.className = "key";
        key.disabled = false;
      });
      lifeHearts.forEach((life) => {
        life.src = "images/liveHeart.png";
      });
    });
  }
}
