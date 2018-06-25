import React, { Component } from 'react';
import './App.css';
import Job from './Job.js';

class Experiences extends Component {
  render() {
    return (
      <p className="Section">
        <h1 className="Section-title">{this.props.name}</h1>
        {
            this.props.jobs.map(job => {
              return <Job job={job} />;
            })
        }
      </p>
    );
  }
}

export default Experiences;