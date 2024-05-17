import React from 'react';
import { shape } from "prop-types";

import { Basic } from "./Types";
import {find} from "lodash";

/**
 * Display for Basic info of Resume (City & Region of Location, First Profile's email, & website)
 * @param basics
 * @returns {JSX.Element}
 * @constructor
 */
const BasicInfo = ({
  basics
}) => {
  const githubProfile = find(basics.profiles, p => p.network === 'GitHub');
    const { url: emailUrl, username: emailLabel } = find(basics.profiles, p => p.network === 'Email');
    const { city, region } = basics.location;
    // if (window.innerWidth <= 992) {
      // TODO: fix long email with ellipses
    // }
    return (
      <aside className="info aside section">
        <div className="section-inner">
          <h2 className="heading sr-only">
            Basic Information
          </h2>
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
                <a href={githubProfile.url}>{githubProfile.url}</a>
              </li>
            </ul>
          </div>
        </div>
      </aside>
    );
  }

BasicInfo.propTypes = {
  basics: shape(Basic).isRequired,
};

export default BasicInfo;
