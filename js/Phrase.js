class Phrase {
  constructor(phrase) {
    this.phrase = phrase.toLowerCase();
  }
  //Adds letter placeholders to the display when the game starts and adds appropriate class to each list item
  addPhraseToDisplay() {
    const charArray = this.phrase.split("");
    charArray.forEach((character) => {
      const ul = document.querySelector("ul");
      const li = document.createElement("li");
      li.textContent = character;
      if (character === " ") {
        li.classList.add("space");
      } else {
        li.classList.add("letter");
        li.classList.add("hide");
        li.classList.add(character);
      }
      ul.appendChild(li);
    });
  }
  //Checks if passed letter is in phrase
  checkLetter(letter) {
    return this.phrase.includes(letter);
  }
  //Displays passed letter on screen after a match is found
  showMatchedLetter(letter) {
    const matchedLetter = document.querySelectorAll(".letter");
    if (this.checkLetter(letter)) {
      for (let i = 0; i < matchedLetter.length; i++) {
        matchedLetter[i].classList.remove("hide");
        matchedLetter[i].classList.add("show");
      }
    }
  }
}
