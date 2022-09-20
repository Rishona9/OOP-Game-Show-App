class Phrase {
  constructor(phrase) {
    this.phrase = phrase.toLowerCase();
  }
  //Adds letter placeholders to the display when the game starts
  addPhraseToDisplay() {
    const phrase = this.phrase;

    for (let i = 0; i < phrase.length; i++) {
      if (phrase[i] !== "") {
        const li = document.createElement("li");
        li.className = `hide letter ${phrase[i]}`;
        li.textContent = phrase[i];
        document.querySelector("#phrase ul").appendChild(li);
      } else {
        const emptyLi = document.createElement("li");
        emptyLi.className = "space";
        emptyLi.textContent = phrase[i];
        document.querySelector("#phrase ul").appendChild(emptyLi);
      }
    }
  }
  //Checks if passed letter is in phrase
  checkLetter(letter) {
    return this.phrase.includes(letter);
  }
  //Displays passed letter on screen after a match is found
  showMatchedLetter(letter) {
    const lettersInPhrase = document.querySelector("#phrase li");
    for (let i = 0; i < lettersInPhrase.length; i++) {
      if (lettersInPhrase[i].textContent.includes(letter)) {
        lettersInPhrase[i].classList.remove("hide");
        lettersInPhrase[i].classList.add("show");
      }
    }
  }
}
