import React from "react";

import Foto from "../../images/cool_casual_02.jpg";

import "./PageMain.css";

const PageMain = () => {
  return (
    <>
      <img src={Foto} alt="foto" className="main__img" />
      <img src={Foto} alt="foto" className="main__img" />
      <img src={Foto} alt="foto" className="main__img" />
      <img src={Foto} alt="foto" className="main__img" />
    </>
  );
};

export default PageMain;
