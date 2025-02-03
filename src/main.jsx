import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import HomePage from './assets/pages/HomePage/HomePage';
import Navbar from './assets/layout/Navbar/Navbar';
import Footer from './assets/layout/Footer/Footer';
import ApartmentPage from "./assets/pages/ApartmentPage/ApartmentPage";
import About from "./assets/pages/About/About";
import Error from "./assets/pages/Error/Error";

const App = () => {
  const [apartments, setApartments] = useState([]);

  useEffect(() => {
    fetch("logements.json")
      .then((res) => res.json())
      .then((res) => setApartments(res))
      .catch(console.error);
  }, []);
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage apartments={apartments} />} />
        <Route path="flat/:id" element={<ApartmentPage apartments={apartments} />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

const root = document.getElementById("root");
createRoot(root).render(<App />);


