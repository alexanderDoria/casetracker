import React, { Component } from 'react';
import casetracker from './casetracker.png'
import './App.css';
import SearchCases from './SearchCases.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={casetracker} className="App-logo" alt="logo" />
          <h2>Case Tracker</h2>
        </div>
        
        <p className="App-intro">
          Get started by tracking cases.
        </p>
      <div><SearchCases /></div>
      </div>
    );
  }
}

export default App;
