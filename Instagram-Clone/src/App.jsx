import React from "react";
import Navbar from "./components/Navbar.jsx";
import Feed from "./components/Feed.jsx";
import Profile from "./components/Profile.jsx";
import Upload from "./components/Upload.jsx";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="main">
        <Feed />
        <Profile />
      </div>
      <Upload />
    </div>
  );
}

export default App;
