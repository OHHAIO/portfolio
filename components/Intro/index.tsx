import React from "react";
import "./styles.scss";
import SeungjunIcon from "../../assets/images/seungjun.jpg";

const Intro = () => {
  return (
    <section className="sectionContainer intro">
      <div className="inner intro__inner">
        <div className="inner__subTitle">
          <p>
            FRONT-END
            <br />
            DEVELOPER
          </p>
        </div>
        <div className="intro__inner__centerContents">
          <img className="intro__inner__centerContents__photo" src={SeungjunIcon} alt="오승준 사진" />
          <div className="intro__inner__centerContents__description">
            <p>
              SEUNGJUN
              <br />
              PORTFOLIO
            </p>
          </div>
        </div>
        <div className="intro__inner__bottomContents">
          <p>
            JAVA 개발을 시작으로, 현재는 프론트 개발을 하고 있는 오승준입니다.
            <br />큰 성과는 혼자가 아닌 함께 만들수 있다고 생각합니다.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Intro;
