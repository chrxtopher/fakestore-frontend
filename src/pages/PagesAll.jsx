import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import SignUp from "./SignUp";
import Dashboard from "./Dashboard";

function PagesAll() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/dashboard/:username" element={<Dashboard />} />
    </Routes>
  );
}

export default PagesAll;
