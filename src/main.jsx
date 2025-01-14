import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navbar from './assets/components/Navbar'
import Footer from './assets/components/Footer'
import { BrowserRouter, Routes, Route} from "react-router";

const root = document.getElementById("root");

createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="flat" element={<><Navbar /><h1>Nos appartements</h1><Footer /></>} />
      <Route path="about" element={<><Navbar /><h1>A propos</h1><Footer /></>} />
      <Route path="error" element={<h1>404</h1>} />
    </Routes>
  </BrowserRouter>
);
