import React, { Component } from 'react';
import './App.css';
import Job from './Job.js';

class Experience extends Component {
  render() {
    return (
      <div className="Section">
        <h1 className="Section-title">{this.props.name}</h1>
        {
            this.props.jobs.map((job, key) => {
              return <Job key={key} job={job} />;
            })
        }
      </div>
    );
  }
}

export default Experience;