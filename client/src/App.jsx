/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar/page";
import Home from "./pages/home/page"

function App() {
  return (
    <>
      <Navbar />
      <Home/>
    </>
  );
}

export default App;
