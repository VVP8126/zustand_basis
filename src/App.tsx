import React from 'react';
import './styles/App.css';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Base from './pages/Base';
import About from './pages/About';
import SharedLayout from './layout/SharedLayout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />}></Route>
          <Route path="base" element={<Base />}></Route>
          <Route path="about" element={<About />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
