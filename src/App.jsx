import React from 'react';
import { find, filter } from "lodash";

import Header from './Header';
import About from './About';
import MainProjects from './MainProjects';
import OtherProjects from './OtherProjects';
import WorkExperience from './WorkExperience';
import Github from './Github';
import BasicInfo from './BasicInfo';
import SkillSet from './SkillSet';
import Education from './Education';
import Resume from "./Types";
import resume from './resume.json';

const linkedInProfile = find(resume.basic.profiles, (profile) => profile.network === "LinkedIn");
const App = () => (
  <div>
    <Header basics={resume.basic} />
    <div className="container sections-wrapper">
      <div className="row">
        <div className="primary col-md-8 col-sm-12 col-xs-12">
          <About summary={resume.basic.summary} />
          <MainProjects publication={find(resume.publications, p => p.name === 'OpenSprints Electron')} />
          <WorkExperience work={resume.work} />
          <OtherProjects publications={filter(resume.publications, p => p.name === 'nickstew.github.io')} />
          <Github />
        </div>
        <div className="secondary col-md-4 col-sm-12 col-xs-12">
          <BasicInfo basics={resume.basic} />
          <SkillSet skills={resume.skills} linkedInUrl={linkedInProfile.url} />
          <Education education={resume.education} />
        </div>
      </div>
    </div>
  </div>
);

export default App;
