import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";

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

const options = [
  {
    label: "The Color Red",
    value: "red",
  },
  {
    label: "The Color Green",
    value: "green",
  },
  {
    label: "A Shade of Blue",
    value: "blue",
  },
];

export default function App() {
  /* const [selected, setSelected] = useState(options[0]);
  const [showDropdown, setShowDropdown] = useState(true);
  return (
    <div>
      <button onClick={() => setShowDropdown(!showDropdown)}>
        Toggle Dropdown
      </button>
      {showDropdown ? (
        <Dropdown
          label="Select a Color"
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
        />
      ) : null}
    </div>
  ); */
  return (
    <div>
      <Translate />
    </div>
  );
}
