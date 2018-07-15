import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
        <footer className="Footer">
          <div className="Footer-table">
            <div className="Footer-row">
              <div className="Footer-cell">Contact me via <a href="https://www.linkedin.com/in/jeff-m-smith/">LinkedIn</a></div>
              <div className="Footer-cell">GitHub: <a href="https://github.com/jeffmsmith">jeffmsmith</a></div>
            </div>
          </div>
        </footer>
    );
  }
}

export default Footer;