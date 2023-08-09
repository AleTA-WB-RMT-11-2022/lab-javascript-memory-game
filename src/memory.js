class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
    console.log(cards)
   this.shuffleCards()
  }

  shuffleCards() {
    if (!this.cards) return undefined;
    this.cards.sort((a, b) => Math.random() - 0.5);
    console.log(this.cards);
  }

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
