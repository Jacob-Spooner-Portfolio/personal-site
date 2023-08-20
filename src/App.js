import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';

import Home from './components/pages';
import About from './components/pages/about';
import Contact from './components/pages/contact';
import Projects from './components/pages/projects';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route>
          <Route exact path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/projects' element={<Projects />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
