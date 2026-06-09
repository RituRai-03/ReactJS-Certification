import React, { useState } from "react";

export default function Upload() {
  const [caption, setCaption] = useState("");
  const [image, setImage] = useState("");

  const handleUpload = () => {
    alert(`Uploaded: ${caption} with image ${image}`);
    setCaption("");
    setImage("");
  };

  return (
    <div className="upload">
      <input
        type="text"
        placeholder="Image URL"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <input
        type="text"
        placeholder="Caption"
        value={caption}
        onChange={(e) => setCaption(e.target.value)}
      />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
}
