import './App.css';
import React from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <div>
        <NavLink to="about">About</NavLink>
        <div></div>
        <NavLink to="home">Home</NavLink>
      </div>

      <div>
        <Routes>
          <Route path='/about' element={<About />} />
          <Route path='/home' element={<Home />} />
        </Routes>
      </div>

    </div>
  );
}

export default App;
