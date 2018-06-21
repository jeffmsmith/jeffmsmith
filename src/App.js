import React, { Component } from 'react';
import './App.css';
import Highlights from './Highlights';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Jeff Smith</h1>
        </header>
        <Highlights/>
        <footer className="App-footer"></footer>
      </div>
    );
  }
}

export default App;
