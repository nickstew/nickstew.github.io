import React from 'react';
import moment from 'moment';

import * as Types from "./Types";

const Education = ({
  education,
 }) => {
    if (!education || education.length < 1) {
      console.log('no education listed in resume')
      return null;
    }
    const college = education[0]
    return (
      <aside className="education aside section">
        <div className="section-inner">
          <h2 className="heading">Education</h2>
          <div className="content">
            <div className="item">
              <h3 className="title">
                <i className="fa fa-graduation-cap"></i> {college.area}
              </h3>
              <h4 className="university">
                {college.institution}
                <span className="year">
                  ({moment.utc(college.startDate).format('YYYY')}-{moment.utc(college.endDate).format('YYYY')})
                </span>
              </h4>
            </div>
          </div>
        </div>
      </aside>
    );
  };
Education.propTypes = {
  education: Types.Education,
}

export default Education;
