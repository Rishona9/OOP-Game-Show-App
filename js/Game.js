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
    document.querySelector("#overlay").style.display = "none";
    this.activePhrase = this.getRandomPhrase();
    this.activePhrase.addPhraseToDisplay();
  }
  handleInteraction() {}
}
