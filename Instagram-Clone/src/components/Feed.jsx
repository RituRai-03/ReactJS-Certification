import React from "react";
import Post from "./Post.jsx";

export default function Feed() {
  const posts = [
    { id: 1, user: "ritu", image: "https://placekitten.com/400/300", caption: "Hello world!" },
    { id: 2, user: "alex", image: "https://placekitten.com/401/300", caption: "React is fun!" }
  ];

  return (
    <div className="feed">
      {posts.map(post => (
        <Post key={post.id} {...post} />
      ))}
    </div>
  );
}
