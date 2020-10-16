import React, { useEffect, useReducer } from "react";
import axios from "axios";

const initialState = {
  loading: true,
  error: "",
  post: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        loading: false,
        error: "",
        post: action.payload,
      };
    case "FETCH_ERROR":
      return {
        loading: false,
        error: "Something went wrong",
        post: {},
      };
    default:
      return state;
  }
};

function DataFetchingReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    async function getPost() {
      try {
        const { data } = await axios.get(
          "https://jsonplaceholder.typicode.com/posts/12"
        );
        dispatch({ type: "FETCH_SUCCESS", payload: data });
      } catch (error) {
        dispatch({ type: "FETCH_ERROR" });
      }
    }
    getPost();
  }, []);

  return (
    <div>
      {state.loading ? "Loading" : state.post.title}
      {state.error ? state.error : null}
    </div>
  );
}

export default DataFetchingReducer;
