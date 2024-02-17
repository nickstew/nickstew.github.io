import React from 'react';
import { arrayOf } from "prop-types";
import { Publication } from "./Types";
import resume from './resume.json';

const OpenSourceProject = ({
 publication
}) => (
  <div className="item">
    <h3 className="title">
      <a href={publication.url}>{publication.name}</a> <span className="label label-theme">Open Source</span>
    </h3>
    <p className="summary">{publication.summary}</p>
    <p>
      <a className="more-link" href={publication.url} rel="noopener noreferrer" target="_blank">
        <i className="fa fa-external-link"></i> Find out more
      </a>
    </p>
  </div>
);
OpenSourceProject.propTypes = {
  publication: Publication,
};

const OtherProjects = ({
  publications
}) => {
  if (resume.publications.length <= 1) {
    return null;
  }
  return (
    <section className="projects section">
      <div className="section-inner">
        <h2 className="heading">Other Projects</h2>
        <div className="content">
          <OpenSourceProject publication={publications[1]} />
        </div>
      </div>
    </section>
  );
};
OtherProjects.propTypes = {
  publications: arrayOf(Publication),
};

export default OtherProjects;
