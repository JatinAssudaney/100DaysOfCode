import React from "react";
import "./App.css";
import Counter from "./components/Counter";
import UserForm from "./components/UserForm";
// import ChangeDocTitleCustomHook from "./components/ChangeDocTitleCustomHook";
// import ChangeDocTitle from "./components/ChangeDocTitle";

function App() {
  return (
    <div className="App">
      {/* <ChangeDocTitle /> */}
      {/* <ChangeDocTitleCustomHook /> */}
      {/* <Counter /> */}
      <UserForm />
    </div>
  );
}

export default App;
