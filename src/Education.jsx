import React from 'react';
import { DateTime } from "luxon";
import { arrayOf, shape } from "prop-types";

import { Education as EducationProps } from "./Types";

/**
 *
 * @param education
 * @returns {JSX.Element}
 * @constructor
 */
const Education = ({
  education,
 }) => (
  <aside className="education aside section">
    <div className="section-inner">
      <h2 className="heading">Education</h2>
      <div className="content">
        {education.map(college => (
          <div key={college.institution} className="item">
            <h3 className="title">
              <i className="fa fa-graduation-cap"></i> {college.area}
            </h3>
            <h4 className="university">
              {college.institution}
              <span className="year">
                ({
                  DateTime.fromISO(college.startDate)
                    .toFormat('YYYY')
                }-{
                  DateTime.fromISO(college.endDate)
                    .toFormat('YYYY')
                })
              </span>
            </h4>
          </div>
        ))}
      </div>
    </div>
  </aside>
);
Education.propTypes = {
  education: arrayOf(shape(EducationProps)).isRequired,
}

export default Education;
