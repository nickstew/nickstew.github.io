import React, { Component } from 'react';

class Conferences extends Component {
  render() {
    return (
      <aside className="list conferences aside section">
        <div className="section-inner">
          <h2 className="heading">Conferences</h2>
          <div className="content">
            <ul className="list-unstyled">
              <li><i className="fa fa-calendar"></i> <a href="https://developer.apple.com/wwdc/" target="_blank">WWDC 2014</a> (San Francisco)</li>
              <li><i className="fa fa-calendar"></i> <a href="http://hive.aigaseattle.org/">Hive</a> (Seattle)</li>
            </ul>
          </div>
        </div>
      </aside>
    );
  }
}

export default Conferences;
