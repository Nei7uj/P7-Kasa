import { createRoot } from 'react-dom/client';
import './index.css';
import HomePage from './assets/pages/HomePage';
import Navbar from './assets/components/Navbar';
import Footer from './assets/layout/Footer';
import ApartmentPage from "./assets/pages/ApartmentPage";
import { BrowserRouter, Routes, Route} from "react-router";

const root = document.getElementById("root");

createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="flat" element={<><Navbar /><ApartmentPage /><Footer /></>} />
      <Route path="about" element={<><Navbar /><h1>A propos</h1><Footer /></>} />
      <Route path="error" element={<h1>404</h1>} />
    </Routes>
  </BrowserRouter>
);
