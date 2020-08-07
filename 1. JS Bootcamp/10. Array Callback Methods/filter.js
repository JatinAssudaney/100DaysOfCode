const nums = [34, 35, 67, 54, 100, 102, 32, 9];

// Return array having odd numbers from nums array
const odds = nums.filter((num) => {
  return num % 2 === 1;
});
console.log(odds);

// Return array having even numbers from nums array
const evens = nums.filter((num) => {
  return num % 2 === 0;
});
console.log(evens);

const books = [
  {
    title: "Good Omens",
    authors: ["Terry Pratchett", "Neil Gaiman"],
    rating: 4.25,
    genres: ["fiction", "fantasy"],
  },
  {
    title: "Changing My Mind",
    authors: ["Zadie Smith"],
    rating: 3.83,
    genres: ["nonfiction", "essays"],
  },
  {
    title: "Bone: The Complete Edition",
    authors: ["Jeff Smith"],
    rating: 4.42,
    genres: ["fiction", "graphic novel", "fantasy"],
  },
  {
    title: "American Gods",
    authors: ["Neil Gaiman"],
    rating: 4.11,
    genres: ["fiction", "fantasy"],
  },
  {
    title: "A Gentleman in Moscow",
    authors: ["Amor Towles"],
    rating: 4.36,
    genres: ["fiction", "historical fiction"],
  },
  {
    title: "The Name of the Wind",
    authors: ["Patrick Rothfuss"],
    rating: 4.54,
    genres: ["fiction", "fantasy"],
  },
  {
    title: "The Overstory",
    authors: ["Richard Powers"],
    rating: 4.19,
    genres: ["fiction", "short stories"],
  },
  {
    title: "The Way of Kings",
    authors: ["Brandon Sanderson"],
    rating: 4.65,
    genres: ["fantasy", "epic"],
  },
  {
    title: "Lord of the flies",
    authors: ["William Golding"],
    rating: 3.67,
    genres: ["fiction"],
  },
];

const highRated = books.filter((book) => {
  return book.rating >= 4.3;
});
// console.log(highRated);

const fantasyBooks = books.filter((book) => {
  return book.genres.includes("fantasy");
});
// console.log(fantasyBooks);

const shortBooks = books.filter((book) => {
  return (
    book.genres.includes("essays") || book.genres.includes("short stories")
  );
});
// console.log(shortBooks);

// Searching query for The in title
const query = "The";
const result = books.filter((book) => {
  return book.title.toLowerCase().includes(query.toLowerCase());
});
console.log(result);
