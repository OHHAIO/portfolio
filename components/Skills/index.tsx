import React from "react";
import "./styles.scss";
import SkillsIcon from "../../assets/images/skills.png";

const Skills = () => {
  const skillData = {
    language: ["Javascript", "Typescript", "Java"],
    framework: ["React", "Angular"],
    markUp: ["HTML", "CSS", "SCSS"],
    database: ["Oracle", "Mysql"],
    codeManagement: ["Git", "GitHub", "GitLab", "SVN"],
    tool: ["Jira", "Confluence", "Zeplin", "Figma", "Slack"],
  };

  return (
    <section className="sectionContainer skills">
      <div className="inner">
        <div className="inner__subTitle black">
          <div className="inner__subTitle__container">
            <img src={SkillsIcon} alt="기술" />
            <h2>기술 스택</h2>
          </div>
        </div>
        <div className="mainContainer skills__container">
          <ul>
            <li>
              <span>📕 Language</span>
              {skillData.language.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </li>
            <li>
              <span>📙 Framework / Library</span>
              {skillData.framework.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </li>
            <li>
              <span>📒 MarkUp</span>
              {skillData.markUp.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </li>
            <li>
              <span>📗 Database</span>
              {skillData.database.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </li>
            <li>
              <span>📘 CodeManagement</span>
              {skillData.codeManagement.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </li>
            <li>
              <span>📔 Tools</span>
              {skillData.tool.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
