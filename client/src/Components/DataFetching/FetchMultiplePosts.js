import React, { useEffect, useState } from "react";
import axios from "axios";
function FetchMultiplePosts() {
  const [posts, setPosts] = useState([]);
  const [id, setId] = useState();
  const [buttonClickId, setButtonClickId] = useState();
  const handleClick = () => {
    setButtonClickId(id);
  };
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${buttonClickId}`)
      .then((res) => {
        setPosts(res.data);
      })
      .catch(() => {
        console.log("Error");
      });
  }, [buttonClickId]);

  return (
    <div>
      <button onClick={handleClick} type="button" value={id}>
        Fetch a post
      </button>
      <input type="text" onChange={(e) => setId(e.target.value)} />
      <h1>{posts.title}</h1>
    </div>
  );
}

export default FetchMultiplePosts;
