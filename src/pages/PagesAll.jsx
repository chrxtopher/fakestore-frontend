import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";

function PagesAll() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
    </Routes>
  );
}

export default PagesAll;
