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
            {resume.work.map((work, workIndex) => (
              <div key={"WorkXP-" + workIndex} className="item">
                <h3 className="title">
                  {work.position} -
                  <span className="place"><a href={work.website}>{work.company}</a></span>
                  <span className="year">({moment.utc(work.startDate).format('MMM, YYYY')} - {work.endDate === 'Present' ? 'Present' : moment.utc(work.endDate).format('MMM, YYYY')})</span>
                </h3>
                <ul>
                  {work.highlights.map((highlight, highlightIndex) => (
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
