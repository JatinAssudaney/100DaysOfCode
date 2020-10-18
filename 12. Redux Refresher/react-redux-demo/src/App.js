import React from "react";
import "./App.css";
import CakeContainer from "./components/CakeContainer";
import HooksCakeContainer from "./components/HooksCakeContainer";

function App() {
  return (
    <div className="App">
      <CakeContainer />
      <HooksCakeContainer />
    </div>
  );
}

export default App;
