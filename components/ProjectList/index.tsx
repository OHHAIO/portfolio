import React from "react";
import "./styles.scss";
import ProjectIcon from "../../assets/images/project.png";

const ProjectList = () => {
  return (
    <section className="sectionContainer">
      <div className="inner">
        <div className="inner__subTitle black">
          <div className="inner__subTitle__container">
            <img src={ProjectIcon} alt="프로젝트" />
            <h2>프로젝트</h2>
          </div>
        </div>
        <div className="mainContainer">
          <ul>
            <li>
              <span>2011.12 취득</span>
              <span>JLPT N1 급</span>
            </li>
            <li>
              <span>2016.08 취득</span>
              <span>ITQ Master(엑셀)</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ProjectList;
