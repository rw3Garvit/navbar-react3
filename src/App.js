import React from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Notfound from "./components/pages/Notfound";
import Detail from "./components/pages/Detail";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/:id" element={<Detail />} />
        {/* <Route path="*" element={<Notfound />} /> */}
      </Routes>
    </>
  );
};

export default App;
