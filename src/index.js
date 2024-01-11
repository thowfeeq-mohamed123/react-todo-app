import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./index.css";
import Register from "./components/register/Register";
import Login from "./components/login/Login";
import Dashboard from "./components/dashboard/Dashboard";
import reportWebVitals from "./reportWebVitals";
import Users from "./components/users/Users";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Header />
    <Router>
      <Routes>
        <Route path="/" exact element={<Dashboard />} />
        <Route path="/signup" exact element={<Register />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/users" exact element={<Users />} />
      </Routes>
    </Router>
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
