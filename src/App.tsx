import React from 'react';
import './styles/App.css';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Async from './pages/Async';
import Middlewares from './pages/Middlewares';
import SharedLayout from './layout/SharedLayout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />}></Route>
          <Route path="async" element={<Async />}></Route>
          <Route path="middlewares" element={<Middlewares />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
