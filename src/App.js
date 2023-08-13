import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Home from "./pages/home";
import PageNotFound from "./pages/pageNotFound";
import Admin from "./pages/admin";
import Cart from "./pages/cart";
import Book from "./pages/book";
import Dashboard from "./pages/dashboard";
import Login from "./pages/login";
import Register from "./pages/register";

function PagePath() {
  const location = useLocation();
  const hideNavbarAndFooter = location.pathname === "/register" || location.pathname === "/dashboard" || location.pathname === "/admin" || location.pathname === "/login";
  
  return (
    <>
      {!hideNavbarAndFooter && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/book" element={<Book />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />      
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      {!hideNavbarAndFooter && <Footer />}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <PagePath />
    </BrowserRouter>
  );
}

export default App;
