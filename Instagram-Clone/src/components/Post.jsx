import React from "react";

export default function Post({ user, image, caption }) {
  return (
    <div className="post">
      <h4>@{user}</h4>
      <img src={image} alt="post" />
      <p>{caption}</p>
    </div>
  );
}
