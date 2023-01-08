import React, { Component } from 'react';

import resume from './resume.json';

class BasicInfo extends Component {
  render() {
    if (!resume.basics ||
      !resume.basics.location ||
      !resume.basics.profiles ||
      resume.basics.profiles.length < 1) {
      console.log('basics, basics.location, & basics.profiles are all required for the basic info component');
      return null;
    }
    const { url: emailUrl, username: emailLabel } = resume.basics.profiles[0];
    const { city, region } = resume.basics.location;
    // if (window.innerWidth <= 992) {
      // TODO: fix long email with ellipses
    // }
    return (
      <aside className="info aside section">
        <div className="section-inner">
          <h2 className="heading sr-only">Basic Information</h2>
          <div className="content">
            <ul className="list-unstyled">
              <li>
                <i className="fa fa-map-marker"></i>
                <span className="sr-only">Location:</span>
                {city}, {region}
              </li>
              <li>
                <i className="fa fa-envelope-o"></i>
                <span className="sr-only">Email:</span>
                <a href={emailUrl}>{emailLabel}</a>
              </li>
              <li>
                <i className="fa fa-link"></i>
                <span className="sr-only">Website:</span>
                <a href={resume.basics.website}>{resume.basics.website}</a>
              </li>
            </ul>
          </div>
        </div>
      </aside>
    );
  }
}

export default BasicInfo;
