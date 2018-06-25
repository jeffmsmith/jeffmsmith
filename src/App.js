import React, { Component } from 'react';
import './App.css';
import Highlights from './Highlights';
import highlightsData from './highlights.json';
import Experience from './Experience';
import experienceData from './experience.json';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Jeff M. Smith</h1>
        </header>
        <Highlights name={highlightsData.name} highlights={highlightsData.highlights} />
        <Experience name={experienceData.name}  jobs={experienceData.jobs} />
        <footer className="App-footer">
          Contact me via <a href="https://www.linkedin.com/in/jeff-m-smith/">LinkedIn</a>
        </footer>
      </div>
    );
  }
}

export default App;
