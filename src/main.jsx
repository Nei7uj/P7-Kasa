import { createRoot } from 'react-dom/client';
import './index.css';
import HomePage from './assets/pages/HomePage/HomePage';
import Navbar from './assets/components/Navbar';
import Footer from './assets/layout/Footer';
import ApartmentPage from "./assets/pages/ApartmentPage/ApartmentPage";
import About from "./assets/pages/About/About";
import { BrowserRouter, Routes, Route} from "react-router";

const root = document.getElementById("root");

createRoot(root).render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="flat" element={<ApartmentPage />} />
      <Route path="about" element={<About />} />
      <Route path="*" element={<h1>404</h1>} />
    </Routes>
    <Footer />
  </BrowserRouter>
);
