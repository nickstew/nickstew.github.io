import React, { Component } from 'react';
import moment from 'moment';
import resume from './resume.json';

class WorkExperience extends Component {
  render() {
    return (
      <section className="experience section">
        <div className="section-inner">
          <h2 className="heading">Work Experience</h2>
          <div className="content">
            {resume.work.map(({ position, website, company, startDate, endDate, highlights }, workIndex) => (
              <div key={"WorkXP-" + workIndex} className="item">
                <h3 className="title">
                  {position} -
                  <span className="place"><a href={website}>{company}</a></span>
                  <span className="year">({moment.utc(startDate).format('MMM, YYYY')} - {endDate === 'Present' ? 'Present' : moment.utc(endDate).format('MMM, YYYY')})</span>
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
  }
}

export default WorkExperience;
