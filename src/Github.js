import React, { Component } from 'react';
import find from 'lodash/find';
import GitHubCalendar from 'github-calendar';
import Resume from './resume.json';
require('github-calendar/dist/github-calendar.css');


class Github extends Component {
  componentDidMount() {
    var githubProfile = find(Resume.basics.profiles,
        profile => profile.network.toLowerCase() === 'github')

    this.setState({
      github: githubProfile
    })
    if (githubProfile) {
      GitHubCalendar(".github-graph", githubProfile.username);
    } else {
      console.log('no GitHub profile found')
    }
  }

  render() {
    return (
      <section className="github section">
        <div className="section-inner">
          <h2 className="heading">My GitHub</h2>
          <div id="github-graph" className="github-graph"></div>
        </div>
      </section>
    );
  }
}

export default Github;
