import React, { useEffect, useState } from "react";
import axios from "axios";
function UseStateDataFetch() {
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [posts, setPosts] = useState({});

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        setLoading(false);
        setPosts(res.data);
        setError("");
      })
      .catch((error) => {
        setLoading(false);
        setPosts([]);
        setError("oops something went wrong");
      });
  }, []);
  return (
    <div className="App">
      {isLoading ? <h2>"Data is Loading..."</h2> : posts.map((post) => <h2>{post.body}</h2>)}
      {error && <h1>{error}</h1>}
    </div>
  );
}

export default UseStateDataFetch;
