import React, { Component } from 'react';
import resume from './resume.json';

class SkillSet extends Component {
  render() {
    return (
      <aside className="skills aside section">
        <div className="section-inner">
          <h2 className="heading">Skills</h2>
          <div className="content">
            <p className="intro">
              I've been working in Javascript for a few years and have been enjoying how much there is to learn.  React has become one of my favorite front-end libraries and I use it in my personal projects.
            </p>
            <div className="skillset">
              {resume.skills.map((skill, index) => (
                <div key={"skill-" + index} className="item">
                  <h3 className="level-title">
                    {skill.name}
                    <span className="level-label">
                      {parseInt(skill.level, 10) >= 70 ? 'Expert' : 'Pro'}
                    </span>
                  </h3>
                  <div className="level-bar">
                    <div className="level-bar-inner" data-level={skill.level + '%'}>
                    </div>
                  </div>
                </div>
              ))}
              <p>
                <a className="more-link" href={resume.basics.profiles[1].url}>
                  <i className="fa fa-external-link"></i> More on LinkedIn
                </a>
              </p>
            </div>
          </div>
        </div>
      </aside>
    );
  }
}

export default SkillSet;
