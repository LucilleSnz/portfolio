import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import './App.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ContactForm from './components/ContactForm';
import Petals from './components/Petals';

function App() {
  return (
      <div className="App">
          <Petals />
          <Header />
          <Projects />
          <Skills />
          <About />
          <ContactForm />
      </div>
  );
}

export default App;