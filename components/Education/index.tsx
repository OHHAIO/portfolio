import React from "react";
import "./styles.scss";
import EducationIcon from "../../assets/images/education.png";
import { convertDateFormat } from "../../common/method/common";
import EducationInfo, { IEducationInfo } from "../../common/class/EducationInfo";

const Education = () => {
  const educationInfo: Array<IEducationInfo> = [
    new EducationInfo(
      "클라우드기반 JAVA 웹 응용 SW 엔지니어 양성",
      "넥스트 IT 교육센터",
      new Date(2018, 5, 25),
      new Date(2018, 11, 19),
    ),
  ];

  return (
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
  );
};

export default Education;
