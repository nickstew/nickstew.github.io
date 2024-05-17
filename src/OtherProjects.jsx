import React from 'react';
import {map} from 'lodash';
import {arrayOf, shape} from "prop-types";
import { Publication } from "./Types";

const OpenSourceProject = ({
 publication
}) => (
  <div className="item">
    <h3 className="title">
      <a href={publication.url}>
        {publication.name}
      </a> <span className="label label-theme">
      Open Source
    </span>
    </h3>
    <p className="summary">
      {publication.summary}
    </p>
    <p>
      <a
        className="more-link"
        href={publication.url}
        rel="noopener noreferrer"
        target="_blank"
      >
        <i className="fa fa-external-link"></i> Find out more
      </a>
    </p>
  </div>
);
OpenSourceProject.propTypes = {
  publication: shape(Publication).isRequired,
};

/**
 *
 * @param publications
 * @returns {JSX.Element|null}
 * @constructor
 */
const OtherProjects = ({
  publications
}) => (
  <section className="projects section">
    <div className="section-inner">
      <h2 className="heading">
        Other Projects
      </h2>
      {map(publications, p => (
        <div className="content">
        <OpenSourceProject publication={p} />
        </div>
      ))}
    </div>
  </section>
);
OtherProjects.propTypes = {
  publications: arrayOf(shape(Publication)).isRequired,
};

export default OtherProjects;
