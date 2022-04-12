import React from "react";
import Contact from "./components/Contact";
import "./app.css";
import View from "./pages/View";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (

    <div className="app">
      <Routes>
        <Route path="/" element={<View />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
    
  );
}

export default App;
