import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import './Icons';
import Home from "./home/Home";
import Login from "./account/Login";
import Register from "./account/Register";
import ForgotPassword from "./account/ForgotPassword";
import Dashboard from "./dashboard/Dashboard";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/ForgotPassword" element={<ForgotPassword />} />
      </Routes>
    </Router>
  );
};

export default App;
