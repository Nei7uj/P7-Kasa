import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route, createBrowserRouter } from "react-router";

const root = document.getElementById("root");

createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="flat" element={<h1>Nos appartements</h1>} />
      <Route path="about" element={<h1>A propos</h1>} />
      <Route path="error" element={<h1>404</h1>} />
    </Routes>
  </BrowserRouter>
);
