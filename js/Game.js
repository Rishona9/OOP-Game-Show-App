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
    this.missed++;
    const tries = document.querySelectorAll(".tries");
    const liveHeart = (document.querySelectorAll("img").src = "liveHeart.png");
    const lostHeart = (document.querySelectorAll("img").src = "lostHeart.png");
    for (let i = 0; i < tries.length; i++) {}
    if (this.missed === 5) {
      this.gameOver();
    }
  }
  //Displays the original start screen overlay and displays winning or losing message
  gameOver() {}
}
