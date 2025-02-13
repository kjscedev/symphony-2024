import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Syahi from "./pages/Syahi";
import Events from "./pages/Events";
import Shield from "./pages/Shield";
import Rules from "./pages/Rules";
import Sponsors from "./pages/Sponsors.jsx";
import Proshows from "./pages/Proshows";
import React from "react";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/syahi" element={<Syahi />} />
          <Route path="/events" element={<Events />} />
          <Route path="/shield" element={<Shield />} />
          <Route path="/sponsors" element={<Sponsors />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="/proshows" element={<Proshows />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
