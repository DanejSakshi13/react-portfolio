import './App.css';
import About from './components/About';
import Home from './components/Home';
import Education from './components/Education';
import Projects from './components/Projects';
import Count from './components/Count';
import Skills from './components/Skills';
import Hire from './components/Hire';
import Parallax from './components/Parallax';
import { Router } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Home />
      <Count />
      <Projects />
      <About />
      <Education />
      <Skills />
      <Parallax />
      <Hire />
    </div>
  );
}

export default App;
