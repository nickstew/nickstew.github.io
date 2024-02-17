import React from 'react';
import PropTypes from "prop-types";

const About = ({
  summary
}) => (
  <section className="about section">
    <div className="section-inner">
      <h2 className="heading">About Me</h2>
      <div className="content">
        <p>{summary}</p>
      </div>
    </div>
  </section>
);

About.propTypes = PropTypes.shape({
  summary: PropTypes.string.isRequired,
});

export default About;
