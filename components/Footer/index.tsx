import React from "react";
import "./styles.scss";
import { goToGithub } from "../../common/method/common";

const Footer = () => {
  return (
    <>
      <footer className="mainFooter">
        <div className="mainFooter__contents">
          <button className="github" onClick={goToGithub} />
        </div>
      </footer>
    </>
  );
};

export default Footer;
