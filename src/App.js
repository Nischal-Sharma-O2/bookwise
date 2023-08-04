import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Home from "./pages/home";
import PageNotFound from "./pages/pageNotFound";
import Admin from "./pages/admin";
import Dashboard from "./pages/dashboard";
import Cart from "./pages/cart";
import Book from "./pages/book";


function App() {
  return (
    <>
      <Navbar/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/book" element={<Book />} />
          <Route path="*" element={<PageNotFound />} />
          // Navbar & Footer must not be shown
          <Route path="/admin" element={<Admin />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
      <Footer/>
    </>
  );
}

export default App;
