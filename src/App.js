/* eslint-disable linebreak-style */
/* eslint-disable quotes */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-filename-extension */
import React, { useState, useEffect } from "react";

import questions from "./mock/questions";
import StartScreen from "./mock/startScreen";
import SecondScreen from "./mock/secondScreen";
import answers from "./mock/answers";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [answerValue, setAnswerValue] = useState(0);
  const [sex, getSex] = useState(null);
  const [hidden, changeHidden] = useState("hidden");
  const [containerStyle, changeContainerStyle] = useState("container");
  const [screenStatus, openSecond] = useState("choose_container hidden");
  const nextQuestion = e => {
    const newCount = count + 1;
    const newAnswerValue = answerValue + +e;
    if (count === 2 && sex === "male") {
      changeContainerStyle(`container${count}m`);
    } else if (count === 2 && sex === "female") {
      changeContainerStyle(`container${count}f`);
    } else {
      changeContainerStyle(`container${count}`);
    }
    setCount(newCount);
    setAnswerValue(newAnswerValue);
  };
  const backgroundImagePath = require(`./img/${
    count + 1 < 6 ? count + 1 : 1
  }.png`);
  // `${'backgroundImage:url(./img/'}${count}.png);`;
  if (count < 6) {
    return (
      <div className={containerStyle}>
        <StartScreen changeHidden={changeHidden} openSecond={openSecond} />
        <SecondScreen
          getSex={getSex}
          screenStatus={screenStatus}
          openSecond={openSecond}
        />
        {/* <div className={`logo_arts ${hidden}`}>
          <i
            className="main_photo"
            style={{ backgroundImage: `url(${backgroundImagePath})` }}
          />
        </div> */}
        <div className={`questions_answers${count} ${hidden}`}>
          {/* <div className="questions">{questions(count, sex)}</div> */}
          <div className={`answers_container${count}`}>
            <div className="question_mobile">{questions(count, sex)}</div>
            <div className="answer_item">
              <button
                className={`answer_button${count}`}
                count={answers[count].group[0].value}
                onClick={() => {
                  nextQuestion.bind(null, answers[count].group[0].value)();
                }}
              >
                {sex === "male"
                  ? answers[count].group[0].text[0]
                  : answers[count].group[0].text[1]}
              </button>
            </div>
            <div className="answer_item">
              <button
                className={`answer_button${count}`}
                onClick={() => {
                  nextQuestion.bind(null, answers[count].group[1].value)();
                }}
                count={answers[count].group[1].value}
              >
                {sex === "male"
                  ? answers[count].group[1].text[0]
                  : answers[count].group[1].text[1]}
              </button>
            </div>
            <div className="answer_item">
              <button
                className={`answer_button${count}`}
                count={answers[count].group[2].value}
                onClick={() => {
                  nextQuestion.bind(null, answers[count].group[0].value)();
                }}
              >
                {sex === "male"
                  ? answers[count].group[2].text[0]
                  : answers[count].group[2].text[1]}
              </button>
            </div>
            <div className="answer_item">
              <button
                className={`answer_button${count}`}
                onClick={() => {
                  nextQuestion.bind(null, answers[count].group[3].value)();
                }}
                count={answers[count].group[3].value}
              >
                {sex === "male"
                  ? answers[count].group[3].text[0]
                  : answers[count].group[3].text[1]}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  let finalContainer;
  console.log(answerValue);
  if (answerValue <= 1 && sex === "male") {
    finalContainer = "final_container1m";
  } else if (answerValue === 2 && sex === "male") {
    finalContainer = "final_container2m";
  } else if (answerValue <= 1 && sex === "female") {
    finalContainer = "final_container1f";
  } else if (answerValue === 2 && sex === "female") {
    finalContainer = "final_container2f";
  }
  return (
    <div className={finalContainer}>
      <div className="all_info " />
    </div>
  );
}

export default App;
