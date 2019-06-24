import React from 'react';
import logo from './logo.svg';
import './App.css';
import Contact from './Contact';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>About me</h1>
        <p>I'm an aspiring full stack web developer. I love cats, coding, and crocheting.</p>
      </header>

      <main> 
        <h2 className="skills">Skills</h2>
          <ul className="ul-skills">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>jQuery</li>
          </ul>
          <Contact/>
      </main>
    </div>
  );
}

export default App;