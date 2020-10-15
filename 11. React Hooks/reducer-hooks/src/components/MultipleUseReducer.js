import React, { useReducer, useState } from "react";

const initialState = 0;
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return state + action.payload;
    case "decrement":
      return state - action.payload;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

function MultipleUseReducer() {
  const [payload, setPayload] = useState(0);
  const [firstCounter, dispatchOne] = useReducer(reducer, initialState);
  const [secondCounter, dispatchTwo] = useReducer(reducer, initialState);

  return (
    <div>
      <div>FirstCount : {firstCounter}</div>
      <button onClick={() => dispatchOne({ type: "increment", payload: 1 })}>
        Increment
      </button>
      <button onClick={() => dispatchOne({ type: "decrement", payload: 1 })}>
        Decrement
      </button>
      <button onClick={() => dispatchOne({ type: "reset" })}>Reset</button>

      <div>SecondCount : {secondCounter}</div>
      <input
        type="text"
        value={payload}
        onChange={(e) => setPayload(parseInt(e.target.value))}
      />
      <button
        onClick={() => dispatchTwo({ type: "increment", payload: payload })}
      >
        Increment2
      </button>
      <button
        onClick={() => dispatchTwo({ type: "decrement", payload: payload })}
      >
        Decrement2
      </button>
      <button onClick={() => dispatchTwo({ type: "reset" })}>Reset</button>
    </div>
  );
}

export default MultipleUseReducer;
