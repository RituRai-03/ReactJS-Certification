import React from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Projects from "./pages/Projects";
import ContactForm from "./components/ContactForm";
import Counter from "./Counter";

function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <Projects />
      <ContactForm />
      <Counter />
    </div>
  );
}

export default App;
