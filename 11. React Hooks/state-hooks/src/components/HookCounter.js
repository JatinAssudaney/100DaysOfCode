import React, { useState } from "react";

function HookCounter() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    return setCount(count + 1);
  };

  const decrementCount = () => {
    return setCount(count - 1);
  };

  return (
    <div>
      <button onClick={decrementCount}>-</button>
      <div>Count : {count} </div>
      <button onClick={incrementCount}>+</button>
    </div>
  );
}

export default HookCounter;
