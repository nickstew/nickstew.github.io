import React, { Component } from 'react';

class Music extends Component {
  render() {
    return (
      <aside className="list music aside section">
        <div className="section-inner">
          <h2 className="heading">Favourite coding music</h2>
          <div className="content">
            <ul className="list-unstyled">
              <li><i className="fa fa-headphones"></i> <a href="#">Etiam hendrerit urna nunc</a></li>
              <li><i className="fa fa-headphones"></i> <a href="#">Ut sollicitudin in mauris non auctor</a></li>
              <li><i className="fa fa-headphones"></i> <a href="#">Etiam hendrerit urna nunc</a></li>
              <li><i className="fa fa-headphones"></i> <a href="#">Duis et felis bibendum</a></li>
            </ul>
          </div>
        </div>
      </aside>
    );
  }
}

export default Music;
