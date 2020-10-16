import React, { useState } from "react";
import useDocumentTitle from "../hooks/useDocumentTitle";

function ChangeDocTitleCustomHook() {
  const [count, setCount] = useState(0);
  useDocumentTitle(count);
  return (
    <div>
      <div>Count - {count}</div>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
    </div>
  );
}

export default ChangeDocTitleCustomHook;
