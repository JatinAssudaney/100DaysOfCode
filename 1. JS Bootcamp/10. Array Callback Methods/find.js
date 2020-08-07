const books = [
  {
    title: "Good Omens",
    author: ["Terry Pratchett", "Neil Gaiman"],
    rating: 4.5,
  },
  {
    title: "Bone : The Complete Edition",
    author: ["Jeff Smith"],
    rating: 4.42,
  },
  {
    title: "American Gods",
    author: ["Neil Gaiman"],
    rating: 4.11,
  },
  {
    title: "A Gentlemen in Moscow",
    author: ["Amor Towles"],
    rating: 4.36,
  },
];

// Find a Book with rating > 4.3
let bookTitle = books.find((book) => {
  // will return the array value where below statement is true
  return book.rating >= 4.3;
}).title;
console.log(bookTitle);
