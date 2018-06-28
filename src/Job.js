import React, { Component } from 'react';
import './Job.css';

class Job extends Component {
  render() {
    return (
    <div className="Job">
      <div className="Job-title">{this.props.job.title}</div>
      <div className="Job-sub-title">{this.props.job.employer}; {this.props.job.location}; {this.props.job.duration}</div>
      <ul className="Job-accomplishments-list">
      {
          this.props.job.accomplishments.map((accomplishment, key) => {
              return <li key={key}>{accomplishment}</li>;
          })
      }
      </ul>
    </div>
    )
}}

export default Job;