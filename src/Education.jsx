import React, { Component } from 'react';
import moment from 'moment';
import resume from './resume.json';

class Education extends Component {
  render() {
    if (!resume.education || resume.education.length < 1) {
      console.log('no education listed in resume')
      return null;
    }
    const college = resume.education[0]
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
  }
}

export default Education;
