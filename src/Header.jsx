import React from 'react';
import { shape } from 'prop-types';
import { Basic } from "./Types";
import {first} from "lodash";

/**
 *
 * @param basics
 * @returns {JSX.Element}
 * @constructor
 */
const Header = ({
  basics
}) => {
  const {
    picture,
    name,
    label,
    profiles,
  } = basics;
  return (
    <header className="header">
        <div className="container">
            <img
              className="profile-image img-responsive pull-left"
              style={{
                borderRadius: '180px'
              }}
              width="180" height="180"
              src={picture}
              alt={name}
            />
            <div className="profile-content pull-left">
                <h1 className="name">
                  {name}
                </h1>
                <h2 className="desc">
                  {label}
                </h2>
                <ul className="social list-inline">
                  <li>
                    <a href={first(profiles, p => p.network === 'LinkedIn').url}>
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a href={first(profiles, p => p.network === 'GitHub').url}>
                      <i className="fa fa-github-alt"></i>
                    </a>
                  </li>
                </ul>
            </div>
            <a
              className="btn btn-cta-primary pull-right"
              href={first(profiles, p => p.network === 'Email').url}
              rel="noopener noreferrer"
              target="_blank"
            >
              <i className="fa fa-paper-plane"></i> Contact Me
            </a>
        </div>
    </header>
  );
}

Header.propTypes = {
  basics: shape(Basic).isRequired
};

export default Header;
