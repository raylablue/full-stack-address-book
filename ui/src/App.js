import React from "react";
import { Routes, Route } from "react-router-dom";
import './App.css';
import PageAddressList from "./atomic-design/pages/PageAddressList";
import PageAddressIndividual from "./atomic-design/pages/PageAddressIndividual";

function App() {
  return (
  <Routes>
      <Route path="/" element={<PageAddressList />} />
      <Route path="address/:id" element={<PageAddressIndividual />} />
  </Routes>
  );
}

export default App;
