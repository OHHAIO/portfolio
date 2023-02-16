import React, { FC } from "react";
import "./styles.scss";

const Header: FC = () => {
  return (
    <>
      <header className="mainHeader">
        <span className="mainHeader__title">Portfolio</span>
        {/*<button className="mainHeader__menuButton"></button>*/}
      </header>
    </>
  );
};

export default Header;
