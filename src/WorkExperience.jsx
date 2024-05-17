import React from 'react';
import { Work } from "./Types";
import { arrayOf, shape } from "prop-types";
import {DateTime} from "luxon";

/**
 *
 * @param work
 * @returns {JSX.Element}
 * @constructor
 */
const WorkExperience = ({ work }) => (
  <section className="experience section">
    <div className="section-inner">
      <h2 className="heading">Work Experience</h2>
      <div className="content">
        {work.map(({
          position,
          website,
          name,
          startDate,
          endDate,
          highlights
        }, workIndex) => (
          <div key={"WorkXP-" + workIndex} className="item">
            <h3 className="title">
              {position} -
              <span className="place">
                <a href={website}>
                  {name}
                </a>
              </span>
              <span className="year">
                ({
                  DateTime.fromISO(startDate)
                    .toFormat('MMM, yyyy')
                } - {
                  endDate === 'Present' ?
                    'Present' :
                    DateTime.fromISO(endDate)
                      .toFormat('MMM, yyyy')
                })
              </span>
            </h3>
            <ul>
              {highlights.map((highlight, highlightIndex) => (
                <li key={"WorkXP-" + workIndex + "-highlight-" + highlightIndex}>
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);
WorkExperience.propTypes = {
  work: arrayOf(shape(Work)).isRequired,
};

export default WorkExperience;
