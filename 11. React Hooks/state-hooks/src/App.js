import React from "react";
import "./App.css";
// import ClassCounter from "./components/ClassCounter";
// import HookCounter from "./components/HookCounter";
// import HookPreviousStateCounter from "./components/HookPreviousStateCounter";
// import HookCounterObject from "./components/HookCounterObject";
import HookCounterArray from "./components/HookCounterArray";

function App() {
  return (
    <div className="App">
      {/* <ClassCounter /> */}
      {/* <HookCounter /> */}
      {/* <HookPreviousStateCounter /> */}
      {/* <HookCounterObject /> */}
      <HookCounterArray />
    </div>
  );
}

export default App;
