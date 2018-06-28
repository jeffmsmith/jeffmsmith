import React, { Component } from 'react';
import './App.css';
import Highlights from './Highlights';
import highlightsData from './highlights.json';
import Experience from './Experience';
import experienceData from './experience.json';
import Education from './Education';
import educationData from './education.json';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Jeff M. Smith</h1>
        </header>
        <Highlights name={highlightsData.name} highlights={highlightsData.highlights} />
        <Experience name={experienceData.name} jobs={experienceData.jobs} />
        <Education name={educationData.name} educations={educationData.educations} />
        <Footer />
      </div>
    );
  }
}

export default App;
