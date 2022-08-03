import React from "react";
import { Routes, Route } from "react-router-dom";
import './App.css';
import PageIndex from "./atomic-design/pages/PageIndex";
import PageAddress from "./atomic-design/pages/PageAddress";

function App() {
  return (
  <Routes>
      <Route path="/" element={<PageIndex />} />
      <Route path="address:id" element={<PageAddress />} />
  </Routes>
  );
}

export default App;
