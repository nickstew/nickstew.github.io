import React, { Component } from 'react';

import GitHubCalendar from 'github-calendar';
require('github-calendar/dist/github-calendar.css');

class Github extends Component {
  componentDidMount() {
    GitHubCalendar(".github-graph", "nickstew");
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
