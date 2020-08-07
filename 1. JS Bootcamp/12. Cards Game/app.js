/* const myDeck = {
  deck: [],
  drawnCards: [],
  suits: ["hearts", "diamonds", "spades", "clubs"],
  values: ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"],
  initializeDeck() {
    const { values, suits, deck } = this;
    for (let value of values) {
      for (let suit of suits) {
        deck.push({ value, suit });
      }
    }
  },
  drawCard() {
    const card = this.deck.pop();
    this.drawnCards.push(card);
    return card;
  },
  drawMultiple(nums) {
    cards = [];
    for (let i = 0; i < nums; i++) {
      cards.push(this.drawCard());
    }
    return cards;
  },
  shuffle() {
    // Fisher-Yates (aka Knuth) Shuffle.
    const { deck } = this;
    for (let i = deck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [deck[i], deck[j]] = [deck[j], deck[i]];
    }
  },
};

myDeck.initializeDeck();
myDeck.shuffle();
const h1 = myDeck.drawMultiple(2);
const h2 = myDeck.drawMultiple(2);
const h3 = myDeck.drawMultiple(5);
// console.log(h1);
// console.log(h2);
// console.log(h3);
console.log(myDeck.drawnCards); */

// IF WE WANT DIFFERENT DECKS

const makeDeck = () => {
  return {
    deck: [],
    drawnCards: [],
    suits: ["hearts", "diamonds", "spades", "clubs"],
    values: ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"],
    initializeDeck() {
      const { values, suits, deck } = this;
      for (let value of values) {
        for (let suit of suits) {
          deck.push({ value, suit });
        }
      }
    },
    drawCard() {
      const card = this.deck.pop();
      this.drawnCards.push(card);
      return card;
    },
    drawMultiple(nums) {
      cards = [];
      for (let i = 0; i < nums; i++) {
        cards.push(this.drawCard());
      }
      return cards;
    },
    shuffle() {
      // Fisher-Yates (aka Knuth) Shuffle.
      const { deck } = this;
      for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
      }
    },
  };
};

// OUR FIRST DECK!
const myDeck = makeDeck();
myDeck.initializeDeck();
myDeck.shuffle();
const h1 = myDeck.drawMultiple(2);
const h2 = myDeck.drawMultiple(2);
const h3 = myDeck.drawMultiple(5);

// OUR SECOND DECK!
const deck2 = makeDeck();
deck2.initializeDeck();

console.log(myDeck);
console.log(deck2);
