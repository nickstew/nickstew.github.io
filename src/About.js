import React, { Component } from 'react';
import resume from './resume.json';

class About extends Component {
  render() {
    return (
      <section className="about section">
        <div className="section-inner">
          <h2 className="heading">About Me</h2>
          <div className="content">
            <p>{resume.basics.summary}</p>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
