import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import './Icons';
import Home from "./home/Home";
import Login from "./account/Login";
import Header from "./layouts/Header";
import Register from "./account/Register";
const App = () => {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
};

export default App;
