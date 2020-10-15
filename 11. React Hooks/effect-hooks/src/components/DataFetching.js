import React, { useState, useEffect } from "react";
import axios from "axios";

function DataFetching() {
  const [id, setId] = useState(1);
  const [post, setPost] = useState([]);
  const [idFromButtonClick, setIdFromButtonClick] = useState(1);

  const handleClick = () => {
    setIdFromButtonClick(id);
  };

  useEffect(() => {
    async function getPost() {
      const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`
      );
      console.log(data);
      setPost(data);
    }
    getPost();
  }, [idFromButtonClick]);
  return (
    <div>
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      <button type="button" onClick={handleClick}>
        Fetch Post
      </button>
      <ul>
        <li key={post.id}>{post.title}</li>
      </ul>
    </div>
  );
}

export default DataFetching;
