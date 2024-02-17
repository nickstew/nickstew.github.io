import React from 'react';
import PropTypes from 'prop-types';

const Header = ({
  basics
}) => {
  const {
    picture,
    name,
    label,
    profiles,
  } = basics;
  if (!basics || !profiles || profiles.length <=  2) {
    console.log('basics and profiles are currently required for the header section');
    return null;
  }
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
                <h1 className="name">{name}</h1>
                <h2 className="desc">{label}</h2>
                <ul className="social list-inline">
                  <li>
                    <a href={profiles[1].url}>
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a href={profiles[2].url}>
                      <i className="fa fa-github-alt"></i>
                    </a>
                  </li>
                </ul>
            </div>
            <a
              className="btn btn-cta-primary pull-right"
              href={profiles[0].url}
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
  basics: PropTypes.shape({
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    profiles: PropTypes.arrayOf(PropTypes.shape({
      url: PropTypes.string.isRequired,
    }).isRequired).isRequired
  }).isRequired
};

export default Header;
