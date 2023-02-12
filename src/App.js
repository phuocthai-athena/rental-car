import React from "react";
import { Route, Routes } from "react-router-dom";
import Cars from "pages/Cars";
import Home from "pages/Home";
import CarDetail from "pages/CarDetail";
import Rent from "pages/Rent";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cars" element={<Cars />} />
      <Route path="/cars/:id" element={<CarDetail />} />
      <Route path="/rent" element={<Rent />} />
    </Routes>
  );
};

export default App;
