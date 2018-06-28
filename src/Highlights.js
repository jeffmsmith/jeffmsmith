import React, { Component } from 'react';
import './App.css';

class Highlights extends Component {
  render() {
    return (
      <div className="Section">
        <h1 className="Section-title">{this.props.name}</h1>
        <ul className="Section-list">
        {
          this.props.highlights.map((highlight, key) => {
            return <li key={key}>{highlight}</li>
          })
        }
        </ul>
      </div>
    );
  }
}

export default Highlights;