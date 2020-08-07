function isValidPassword(password, username) {
  if (
    password.length < 8 ||
    password.indexOf(username) !== -1 ||
    password.indexOf(" ") !== -1
  ) {
    return false;
  }
  return true;
}
console.log(isValidPassword("Parul123", "Parul Assudaney")); //true
console.log(isValidPassword("Parul123", "Parul")); //false
console.log(isValidPassword("Hello World", "Parul Assudaney")); //false

function avg(arr) {
  let sum = 0;
  for (let val of arr) {
    sum += val;
  }
  return sum / arr.length;
}
console.log(avg([0, 50])); //25
console.log(avg([75, 76, 80, 95, 100])); //85.2

function isPangram(sentence) {
  // A pangram is a sentence containing every letter of the alphabet.
  sentence = sentence.toLowerCase();
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  for (let char of alphabet) {
    // if (sentence.indexOf(char) === -1) {
    //   return false;
    // }
    if (!sentence.includes(char)) {
      // NOT SUPPORTED IN Internet Explorer
      return false;
    }
  }
  return true;
}

console.log(isPangram("A quick brown fox jumps over the lazy dog")); //true

// function getCard() {
//   const values = [
//     "2",
//     "3",
//     "4",
//     "5",
//     "6",
//     "7",
//     "8",
//     "9",
//     "10",
//     "J",
//     "Q",
//     "K",
//     "A",
//   ];
//   const valIdx = Math.floor(Math.random() * values.length);
//   const value = values[valIdx];

//   const suits = ["clubs", "spades", "hearts", "diamonds"];
//   const suitIdx = Math.floor(Math.random() * suits.length);
//   const suit = suits[suitIdx];
//   return { value: value, suit: suit };
// }

function pick(arr) {
  //return random element from arr
  const idx = Math.floor(Math.random() * arr.length);
  return arr[idx];
}

function getCard() {
  const values = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A",
  ];
  const suits = ["clubs", "spades", "hearts", "diamonds"];
  return { value: pick(values), suit: pick(suits) };
}

console.log(getCard());
console.log(getCard());
console.log(getCard());
