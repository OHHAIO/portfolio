import React from "react";
import "./styles.scss";
import IntroduceIcon from "../../assets/images/person.png";
import { goToGithub, goToUniversity } from "../../common/method/common";

const AboutMe = () => {
  return (
    <section className="sectionContainer aboutMe">
      <div className="inner">
        <div className="inner__subTitle black">
          <div className="inner__subTitle__container">
            <img src={IntroduceIcon} alt="소개" />
            <h2>소개</h2>
          </div>
        </div>
        <div className="mainContainer aboutMe__container">
          <ul>
            <li>
              <span>Name</span>
              <span>오승준</span>
            </li>
            <li>
              <span>E-mail</span>
              <span>ohseungjun1205@gmail.com</span>
            </li>
            <li>
              <span>Birth</span>
              <span>1991.12.05</span>
            </li>
            <li>
              <span>GitHub</span>
              <span className="clickable" onClick={goToGithub}>
                https://github.com/OHHAIO
              </span>
            </li>
            <li>
              <span>Graduation</span>
              <span className="clickable" onClick={goToUniversity}>
                Kwansei Gakuin University(Japan) / 국제학과
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
