import React, { Component } from 'react';
import resume from './resume.json';

const featureProjectImage = '/assets/images/projects/project-featured.jpeg';

const secondaryProjectWithImage = (publication) => (
  <div className="item row">
    <a
      className="col-md-4 col-sm-4 col-xs-12"
      href={publication.website}
      rel="noopener noreferrer"
      target="_blank">
      <img
        className="img-responsive project-image" src="assets/images/projects/project-5.png"
        alt={publication.name}
      />
    </a>
    <div className="desc col-md-8 col-sm-8 col-xs-12">
      <h3 className="title">
        <a
          href={publication.website}
          rel="noopener noreferrer"
          target="_blank">
          {publication.name}
        </a>
      </h3>
      <p>
        {publication.summary}
      </p>
      <p>
        <a
          className="more-link"
          href={publication.website}
          rel="noopener noreferrer"
          target="_blank">
          <i className="fa fa-external-link"></i> Find out more
        </a>
      </p>
    </div>
  </div>
);
secondaryProjectWithImage({});

class MainProjects extends Component {
  render() {
    if (resume.publications.length === 0) {
      return null;
    }
    return (
      <section className="latest section">
        <div className="section-inner">
          <h2 className="heading">Latest Projects</h2>
          <div className="content">
            <div className="item featured text-center">
              <h3 className="title">
                <a href={resume.publications[0].website} rel="noopener noreferrer" target="_blank">
                  {resume.publications[0].name}
                </a>
              </h3>
              <p className="summary">
                {resume.publications[0].summary}
              </p>
              <div className="featured-image">
                <a href={resume.publications[0].website} rel="noopener noreferrer" target="_blank">
                  <img className="img-responsive project-image" src={featureProjectImage} alt="OpenSprints Electron Race Screen" />
                </a>
                <div className="ribbon">
                  <div className="text">New</div>
                </div>
              </div>
              <div className="desc text-left">
                <p>
                  OpenSprints Electron allows anyone to run a bicycle roller race event for fun or profit!
                </p>
                <p>Features include:</p>
                <ul>
                  <li>Roster Management</li>
                  <li>Customizable Backgrounds</li>
                  <li>Downloadable Event Information</li>
                  <li>Easy Sponsor Customization</li>
                  <li>Complete Restyling of App with only CSS</li>
                </ul>
              </div>
              {/*<a className="github-button" href="https://github.com/opensprints/opensprints-electron" data-icon="octicon-star" data-style="mega" data-count-href="/opensprints/opensprints-electron/stargazers" data-count-api="/repos/opensprints/opensprints-electron#stargazers_count" data-count-aria-label="# stargazers on GitHub" aria-label="Star opensprints/opensprints-electron on GitHub">*/}
                {/*Star*/}
              {/*</a>*/}
              <a
                className="btn btn-cta-secondary"
                href="https://github.com/opensprints/opensprints-electron"
                rel="noopener noreferrer"
                target="_blank">
                  View Source Code on Github <i className="fa fa-chevron-right"></i>
              </a>
            </div>

            {/* <hr className="divider" /> */}
            {/* secondary featured projects go here */}
          </div>
        </div>
      </section>
    );
  }
}

export default MainProjects;
