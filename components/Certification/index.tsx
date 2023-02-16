import React from "react";
import "./styles.scss";
import CertificateIcon from "../../assets/images/certificate.png";

const Certification = () => {
  return (
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
              <span>2011.12</span>
              <span>JLPT N1 급</span>
            </li>
            <li>
              <span>2016.08</span>
              <span>ITQ Master(엑셀)</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Certification;
