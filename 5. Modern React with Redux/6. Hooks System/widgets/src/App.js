import React from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";

const items = [
  {
    title: "What is React",
    content:
      "React is an open-source JavaScript library for building user interfaces or UI components.",
  },
  {
    title: "Why use React",
    content:
      "It's used for handling the view layer for web and mobile apps. React also allows us to create reusable UI components",
  },
  {
    title: "How do you use React",
    content: "You use React by creating components",
  },
];

export default function App() {
  return (
    <div>
      <Search />
    </div>
  );
}
