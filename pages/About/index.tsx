import React, { FC } from "react";
import "./styles.scss";
import CareerInfo, { ICareerInfo } from "../../common/class/CareerInfo";
import { format } from "date-fns";
import EducationInfo, { IEducationInfo } from "../../common/class/EducationInfo";
import IntroduceIcon from "../../assets/images/person.png";
import CareerIcon from "../../assets/images/bag.png";
import SkillsIcon from "../../assets/images/skills.png";
import SeungjunIcon from "../../assets/images/seungjun.jpg";
import EducationIcon from "../../assets/images/education.png";
import CertificateIcon from "../../assets/images/certificate.png";

const About: FC = () => {
  const careerInfo: Array<ICareerInfo> = [
    new CareerInfo("엘지 히다찌", new Date("2022.05.02"), new Date("2022.10.31")),
    new CareerInfo("슈프리마", new Date("2020.11.23"), new Date("2022.04.21")),
    new CareerInfo("갈라랩", new Date("2020.06.17"), new Date("2020.11.01")),
    new CareerInfo("포그리트", new Date("2020.01.13"), new Date("2020.06.01")),
    new CareerInfo("아이티지이", new Date("2019.02.01"), new Date("2019.12.11")),
  ];

  const skillData = {
    language: ["Javascript", "Typescript", "Java"],
    framework: ["React", "Angular"],
    markUp: ["HTML", "CSS", "SCSS"],
    database: ["Oracle", "Mysql"],
    codeManagement: ["Git", "GitHub", "GitLab", "SVN"],
    tool: ["Jira", "Confluence", "Zeplin", "Figma", "Slack"],
  };

  const educationInfo: Array<IEducationInfo> = [
    new EducationInfo(
      "클라우드기반 JAVA 웹 응용 SW 엔지니어 양성",
      "넥스트 IT 교육센터",
      new Date("2018.06.25"),
      new Date("2018.12.19"),
    ),
  ];

  const convertDateFormat = (date: Date): string => {
    return format(date, "yyyy.MM");
  };

  return (
    <main className="about">
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
      <section className="sectionContainer introduce">
        <div className="inner">
          <div className="inner__subTitle black">
            <div className="inner__subTitle__container">
              <img src={IntroduceIcon} alt="소개" />
              <h2>소개</h2>
            </div>
          </div>
          <div className="mainContainer introduce__container">
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
                <span>https://github.com/OHHAIO</span>
              </li>
              <li>
                <span>Graduation</span>
                <span>Kwansei Gakuin University(Japan) / 국제학과</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="sectionContainer career">
        <div className="inner">
          <div className="inner__subTitle black">
            <div className="inner__subTitle__container">
              <img src={CareerIcon} alt="경력" />
              <h2>경력</h2>
            </div>
          </div>
          <div className="mainContainer career__container">
            <ul>
              {careerInfo.map((item: ICareerInfo, index) => (
                <li key={index}>
                  <span>
                    {convertDateFormat(item.startDate)} ~ {convertDateFormat(item.endDate)}
                  </span>
                  <span>{item.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
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
                <span>📙Framework / Library</span>
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
      <section className="sectionContainer education">
        <div className="inner">
          <div className="inner__subTitle black">
            <div className="inner__subTitle__container">
              <img src={EducationIcon} alt="교육" />
              <h2>교육</h2>
            </div>
          </div>
          <div className="mainContainer education__container">
            <ul>
              {educationInfo.map((item, index) => (
                <li key={index}>
                  <span>
                    {convertDateFormat(item.startDate)} ~ {convertDateFormat(item.endDate)}
                  </span>
                  <span>
                    {item.educationName}({item.academyName})
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section className="sectionContainer">
        <div className="inner">
          <div className="inner__subTitle black">
            <div className="inner__subTitle__container">
              <img src={CertificateIcon} alt="자격증" />
              <h2>자격증</h2>
            </div>
          </div>
          <div className="mainContainer">
            <ul>
              <li>
                <span>Test</span>
                <span>asd</span>
              </li>
              <li>Test</li>
              <li>Test</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
