import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './landing_page/home/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import About from './landing_page/about/about';
import GetDemo from './landing_page/getDemo/GetDemo';
import Contact from './landing_page/contact/Contact';
import SignUp from './landing_page/signUp/SignUp';
import Footer from './landing_page/Footer';
import NavBar from './landing_page/NavBar';
import NotFound from './landing_page/NotFound';
import Login from './landing_page/login/Login';
import PrivateRoute from './landing_page/PrivateRoute';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <NavBar />
    <Routes>

      <Route element={<PrivateRoute isAuthenticated={false} />}>
        <Route path="/dashboard" element={<h1>Dashboard - Private Route</h1>} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/get-a-demo" element={<GetDemo />} />
        <Route path="/contact" element={<Contact />} />
      </Route>

      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);


