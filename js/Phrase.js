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
  checkLetter() {}
  showMatchedLetter() {}
}
