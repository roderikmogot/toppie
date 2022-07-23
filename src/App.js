import React, { useState } from "react";
import "./App.css";
import Navbar from "./component/Navbar";
import Home from "./page/Home";
import Menu from "./page/Menu";
import FAQ from "./page/faq";
import Signature from "./page/Signature";
import Burger from "./page/Burger";
import Chicken from "./page/Chicken";
import Drinks from "./page/Drinks";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/FAQ" element={<FAQ />} />
          <Route path="/signature" element={<Signature />} />
          <Route path="/burger" element={<Burger />} />
          <Route path="/chicken" element={<Chicken />} />
          <Route path="/drinks" element={<Drinks />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
