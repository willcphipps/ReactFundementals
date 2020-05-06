import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Hello Dojo</h1>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Things I need to do include 
           <ul>
            <li>
              clean the house
            </li>
            <li>
              drink coffee
            </li>
            <li>
              create chaos in react
            </li>
            <li>
              get job
            </li>
           </ul>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
