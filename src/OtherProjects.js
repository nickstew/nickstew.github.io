import React, { Component } from 'react';
import resume from './resume.json';

const openSourceProject = (publication) => (
  <div className="item">
    <h3 className="title">
      <a href={publication.website}>{publication.name}</a> <span className="label label-theme">Open Source</span>
    </h3>
    <p className="summary">{publication.summary}</p>
    <p>
      <a className="more-link" href={publication.website} target="_blank">
        <i className="fa fa-external-link"></i> Find out more
      </a>
    </p>
  </div>
);

class OtherProjects extends Component {
  render() {
    if (resume.publications.length <= 1) {
      return null;
    }
    return (
      <section className="projects section">
        <div className="section-inner">
          <h2 className="heading">Other Projects</h2>
          <div className="content">
            {openSourceProject(resume.publications[1])}
          </div>
        </div>
      </section>
    );
  }
}

export default OtherProjects;
