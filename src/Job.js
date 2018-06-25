import React, { Component } from 'react';
import './App.css';

class Job extends Component {
  render() {
    return (
    <p className="Job">
      <div className="Job-title">{this.props.job.title}</div>
      <div className="Job-sub-title">{this.props.job.employer}; {this.props.job.location}; {this.props.job.duration}</div>
      <ul className="Section-list">
      {
          this.props.job.accomplishments.map((accomplishment, key) => {
              return <li key={key}>{accomplishment}</li>;
          })
      }
      </ul>
    </p>
    )
}}

export default Job;