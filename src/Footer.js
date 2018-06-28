import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
        <footer className="Footer">
          <div className="Footer-table">
            <div className="Footer-row">
              <div className="Footer-cell">Contact me via <a href="https://www.linkedin.com/in/jeff-m-smith/">LinkedIn</a></div>
              <div className="Footer-cell">View this source on <a href="https://github.com/mrjeffms/jeffmsmith">GitHub</a></div>
            </div>
            <div className="Footer-row">
            <div className="Footer-cell">GitHub: <a href="https://github.com/jeffsmith-shiftwise">jeffsmith-shiftwise</a> -- <a href="https://github.com/mrjeffms">mrjeffms</a></div>
              <div className="Footer-cell">Bitbucket: <a href="https://bitbucket.org/mrjeffms/">mrjeffms</a></div>
            </div>
          </div>
        </footer>
    );
  }
}

export default Footer;