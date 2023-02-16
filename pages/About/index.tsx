import React, { FC } from "react";
import "./styles.scss";
import Intro from "@components/Intro";
import AboutMe from "@components/AboutMe";
import Career from "@components/Career";
import Skills from "@components/Skills";
import Education from "@components/Education";
import Certification from "@components/Certification";
import ProjectList from "@components/ProjectList";

const About: FC = () => {
  return (
    <main className="about">
      <Intro />
      <AboutMe />
      <Skills />
      <Career />
      <Education />
      <Certification />
      <ProjectList />
    </main>
  );
};

export default About;
