import React, { useEffect, useState } from "react";
import axios from "axios";

function DataFetching() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [post, setPost] = useState({});

  useEffect(() => {
    async function getPost() {
      try {
        const { data } = await axios.get(
          "https://jsonplaceholder.typicode.com/posts/1231"
        );
        setLoading(false);
        setError("");
        setPost(data);
      } catch (error) {
        setLoading(false);
        setPost({});
        setError("Something went wrong");
      }
    }
    getPost();
  }, []);
  return (
    <div>
      {loading ? "Loading" : post.title}
      {error ? error : null}
    </div>
  );
}

export default DataFetching;
