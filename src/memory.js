class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
    // shuffle cards every time a new MemoryGame instance has been created (every game)
    this.shuffleCards();
  }

  shuffleCards() {
    if (!this.cards) return undefined;
    this.cards.sort((a, b) => Math.random() - 0.5);
  }

  // another shuffle option
  //
  // shuffleCards() {
  //   if (!this.cards) {
  //     return undefined;
  //   };

  //   const cardsLength = this.cards.length;
  //   while (cardsLength > 0) {
  //     cardsLength--;
  //     let temp = this.cards[cardsLength];
  //     let rdmInd = Math.floor(Math.random() * cardsLength);
  //     this.cards[cardsLength] = this.cards[rdmInd];
  //     this.cards[rdmInd] = temp;
  //   }

  //   return this.cards;
  // }

  checkIfPair(card1, card2) {
    this.pairsClicked++;
    if (card1 === card2) {
      this.pairsGuessed++;
      return true;
    }
    return false;
  }

  checkIfFinished() {
    if (this.cards.length / 2 === this.pairsGuessed) {
      return true;
    }
    return false;
  }
}
