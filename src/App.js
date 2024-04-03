import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar'; // Assuming you have a Navbar component
import About from './components/About';
import Home from './components/Home';
import Education from './components/Education';
import Projects from './components/Projects';
import Count from './components/Count';
import Skills from './components/Skills';
import Hire from './components/Hire';
import Parallax from './components/Parallax';
import FooterComponent from './components/Footer';
import NavbarComponent from './components/Navbar';

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <div className="content">
        <Home />
        <Count />
        <Projects />
        <About />
        <Education />
        <Skills />
        <Parallax />
        <Hire />
      </div>
      <FooterComponent />
    </div>
  );
}

export default App;








/*
<Router>
      <div className="App">
        <NavbarComponent /> 
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/education" element={<Education />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/count" element={<Count />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/hire" element={<Hire />} />
            <Route path="/parallax" element={<Parallax />} />
          </Routes>
        </div>
        <FooterComponent />
      </div>
    </Router>

*/