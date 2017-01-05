import React, { Component } from 'react';

import GitHubCalendar from 'github-calendar';
require('github-calendar/dist/github-calendar.css');
const GitHubActivity = window.GitHubActivity;

class Github extends Component {
  componentDidMount() {
    GitHubCalendar(".github-graph", "nickstew");
    GitHubActivity.feed({ username: "nickstew", selector: "#ghfeed" });
  }
  render() {
    return (
      <section className="github section">
        <div className="section-inner">
          <h2 className="heading">My GitHub</h2>
          <div id="github-graph" className="github-graph"></div>
          <div id="ghfeed" className="ghfeed"></div>
        </div>
      </section>
    );
  }
}

export default Github;
