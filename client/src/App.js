import React from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import TVbrands from './pages/TVbrands';
import TVmodels from './pages/TVmodels';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/brands" element={<TVbrands />} />
        <Route path="/models" element={<TVmodels />} />
      </Routes>
    </div>
  );
}

export default App;
