import React, { FC, useEffect, useState } from "react";
import "./styles.scss";
import Intro from "@components/Intro";
import AboutMe from "@components/AboutMe";
import Career from "@components/Career";
import Skills from "@components/Skills";
import Education from "@components/Education";
import Certification from "@components/Certification";

const About: FC = () => {
  const [isShowScrollTop, setIsShowScrollTop] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY >= 50) {
      setIsShowScrollTop(true);
      console.log(scroll);
    } else {
      setIsShowScrollTop(false);
    }
  };

  const scrollToTop = () => {
    if (!window.scrollY) return;

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <main className="about">
      <Intro />
      <AboutMe />
      <Skills />
      <Career />
      <Education />
      <Certification />
      {isShowScrollTop && <button className="goTop" onClick={scrollToTop} />}
    </main>
  );
};

export default About;
