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

// Print every title using forEach
books.forEach(function (obj) {
  console.log(obj["title"].toUpperCase());
});
