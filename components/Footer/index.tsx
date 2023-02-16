import React from "react";
import "./styles.scss";

const Footer = () => {
  return (
    <>
      <footer className="mainFooter">
        <div className="mainFooter__contents">
          <button className="github" onClick={() => window.open("https://github.com/OHHAIO", "_blank")} />
          <button className="email" />
        </div>
      </footer>
    </>
  );
};

export default Footer;
