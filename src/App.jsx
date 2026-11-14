import React from "react";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import "./index.css";

const App = () => {
  return (
    <>
      <Nav />
      <Home />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
