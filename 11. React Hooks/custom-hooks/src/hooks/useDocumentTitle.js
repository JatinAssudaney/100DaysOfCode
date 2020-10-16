import { useEffect } from "react";

function useDocumentTitle(count) {
  useEffect(() => {
    document.title = `Count is ${count}`;
  }, [count]);
}

export default useDocumentTitle;
