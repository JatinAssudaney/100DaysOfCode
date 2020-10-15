import React, { createContext } from "react";
import "./App.css";
import ComponentC from "./components/ComponentC";

export const UserContext = createContext();
export const ChannelContext = createContext();

function App() {
  return (
    <div className="App">
      <UserContext.Provider value={"Jatin"}>
        <ChannelContext.Provider value={"webdevjourney"}>
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
