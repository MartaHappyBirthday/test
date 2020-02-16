/* eslint-disable linebreak-style */
import React, { useState } from "react";
import Choose from "../img/choose.png";

const SecondScreen = e => {
  const [secondScreenStatus, closeSecondScreen] = useState(
    "choose_container hidden"
  );
  return (
    <div className={e.screenStatus}>
      <img src={Choose} alt="Choose" className="choose_img" />
      <div className="choose_container__buttons">
        <button
          className="choose_container__button"
          onClick={() => {
            e.getSex("male");
            e.openSecond("choose_container hidden");
          }}
        >
          Наследник
        </button>
        <button
          className="choose_container__button"
          onClick={() => {
            e.getSex("female");
            e.openSecond("choose_container hidden");
          }}
        >
          Наследница
        </button>
      </div>
    </div>
  );
};

export default SecondScreen;
