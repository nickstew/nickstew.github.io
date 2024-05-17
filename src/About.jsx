import React from 'react';
import {string} from "prop-types";

/**
 *
 * @param summary
 * @returns {JSX.Element}
 * @constructor
 */
const About = ({
  summary
}) => (
  <section className="about section">
    <div className="section-inner">
      <h2 className="heading">
        About Me
      </h2>
      <div className="content">
        <p>
          {summary}
        </p>
      </div>
    </div>
  </section>
);

About.propTypes = {
  summary: string.isRequired,
};

export default About;
