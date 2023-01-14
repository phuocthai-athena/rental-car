import React from "react";
import { Route, Routes } from "react-router-dom";
import Cars from "pages/Cars";
import Home from "pages/Home";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cars" element={<Cars />} />
    </Routes>
  );
};

export default App;
