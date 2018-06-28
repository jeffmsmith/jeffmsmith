import React, { Component } from 'react';
import './App.css';
import './Education.css';

class Education extends Component {
  render() {
    return (
      <div className="Section">
        <h1 className="Section-title">{this.props.name}</h1>
        <ul className="Section-list">
        {
          this.props.educations.map((education, key) => {
            return <li key={key}>
                     <div className="Education-school">{education.school}</div>
                     <div className="Education-course">{education.course}; {education.completionYear}</div>
                   </li>
          })
        }
        </ul>
      </div>
    );
  }
}

export default Education;