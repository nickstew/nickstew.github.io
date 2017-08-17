import React, { Component } from 'react';

import resume from './resume.json';

class Header extends Component {
  render() {
    if (!resume.basics || !resume.basics.profiles || resume.basics.profiles.length <=  2) {
      console.log('basics and profiles are currently required for the header section');
      return null;
    }
    return (
      <header className="header">
          <div className="container">
              <img className="profile-image img-responsive pull-left"
                   style={{
                     borderRadius: '180px'
                   }}
                   width="180" height="180"
                   src={resume.basics.picture} alt={resume.basics.name}
              />
              <div className="profile-content pull-left">
                  <h1 className="name">{resume.basics.name}</h1>
                  <h2 className="desc">{resume.basics.label}</h2>
                  <ul className="social list-inline">
                    <li><a href={resume.basics.profiles[1].url}><i className="fa fa-linkedin"></i></a></li>
                    <li><a href={resume.basics.profiles[2].url}><i className="fa fa-github-alt"></i></a></li>
                  </ul>
              </div>
              <a className="btn btn-cta-primary pull-right" href={resume.basics.profiles[0].url} target="_blank"><i className="fa fa-paper-plane"></i> Contact Me</a>
          </div>
      </header>
    );
  }
}

export default Header;
