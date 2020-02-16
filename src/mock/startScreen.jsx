import React, { useState } from "react";

const StartScreen = e => {
  const [screenStatus, closeStartScreen] = useState(
    "main_start__container visible"
  );
  return (
    <div className={screenStatus}>
      <div className="start_screen">
        <div className="start_screen_buttons">
          <button
            className="start_screen__button"
            onClick={() => {
              e.changeHidden("");
              closeStartScreen("main_start__container hidden");
              e.openSecond("choose_container visible");
            }}
          />
          {/* <button
            className="start_screen__button"
            onClick={() => {
              e.getSex("female");
              closeStartScreen("start_screen hidden");
              e.changeHidden("");
            }}
          >
            Леди
          </button> */}
        </div>
      </div>
    </div>
  );
};
export default StartScreen;
