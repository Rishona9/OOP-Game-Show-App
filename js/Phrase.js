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
  checkLetter(letter) {}
  //Displays passed letter on screen after a match is found
  showMatchedLetter(letter) {}
}
