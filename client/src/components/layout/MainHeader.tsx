import React from "react";

import NavBar from "./NavBar";
import classes from "./MainHeader.module.css";

const MainHeader = () => {
  return (
    <header className={classes["main-header"]}>
      <img
        src={`${process.env.PUBLIC_URL}/Irgo_logo.png`}
        alt="Home"
        height={50}
        width={125}
      />
      <NavBar />
    </header>
  );
};

export default MainHeader;
