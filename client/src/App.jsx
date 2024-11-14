/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar/page";
import Home from "./pages/home/page";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SkillsPage from './partials/skills/page'
import Footer from './components/footer/page'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<SkillsPage />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
