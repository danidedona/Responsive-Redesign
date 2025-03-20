import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";

const colors = {
  bg: "#FFFFF7",
};

function App() {
  return (
    <div
      className="font-poppins bg-[var(--color-bg)]"
      style={{ paddingTop: "var(--navbar-height)", "--color-bg": colors.bg }}
    >
      <nav id="nav">
        <Navbar />
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
