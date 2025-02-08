import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Syahi from "./pages/Syahi";
import Events from "./pages/Events";
import Shield from "./pages/Shield";
import Rules from "./pages/Rules";
import Sponsers from "./pages/Sponsers.jsx";
import Proshows from "./pages/Proshows";
import React, { useState, useEffect } from "react";

import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {loading && (
        <video
          autoPlay
          loop
          muted
          className="preloader-video absolute inset-0 object-cover w-full h-full"
        >
          <source src="/Preloader.mp4" type="video/mp4" />
        </video>
      )}
      {!loading && (
        <>
          <Navbar />
          <div>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/syahi" element={<Syahi />} />
              <Route path="/events" element={<Events />} />
              <Route path="/shield" element={<Shield />} />
              <Route path="/sponsors" element={<Sponsers />} />
              <Route path="/rules" element={<Rules />} />

              <Route path="/proshows" element={<Proshows />} />
            </Routes>
          </div>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
