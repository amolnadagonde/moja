import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getRandomArray } from "../utils/random";
import IconItems from "../components/IconItems";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { resetUserDetails } from "../reducers/userSlice";
import { increaseScore, resetScore } from "../reducers/scoreSlice";

import { getRandomArrayOptionsIncludingANumber } from "../utils/random";

const QuestionsPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { userName } = useSelector((state) => state.user);
  const { totalScore } = useSelector((state) => state.score);
  const [randomNumberArray, setRandomNumberArray] = useState(
    getRandomArray(2, 10)
  );
  const [randomNumber, setRandomNumber] = useState(randomNumberArray[0]);
  const [randomNumberIndex, setRandomNumberIndex] = useState(0);
  const [optionsArray, setOptionsArray] = useState([]);

  useEffect(() => {
    if (!userName) {
      navigate("/");
      dispatch(resetScore());
    }
  }, [dispatch, navigate, userName]);

  // when click on next button the randomNumberIndex will change,
  // then this useEffect will change the randomNumber
  useEffect(() => {
    setRandomNumber(randomNumberArray[randomNumberIndex]);
    setOptionClicked(null);
    setIsAnswerSubmitted(false);
  }, [randomNumberIndex, randomNumberArray]);

  useEffect(() => {
    setOptionsArray(getRandomArrayOptionsIncludingANumber(randomNumber));
  }, [randomNumber]);

  const [optionClicked, setOptionClicked] = useState(null);
  const [isOptionClicked, setIsOptionClicked] = useState(false);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  const [showLoader, setShowLoader] = useState(false);

  const handleOptionClick = (e) => {
    setIsOptionClicked(true);
    setOptionClicked(e.target.innerText);
  };

  const handleNextQuestion = () => {
    setIsAnswerSubmitted(true);
    const isAnswerCorrect =
      Number.parseInt(optionClicked) === Number.parseInt(randomNumber);
    if (isAnswerCorrect) {
      console.log("in if to inc score");
      dispatch(increaseScore());
    }
    setTimeout(() => {
      setShowLoader(true);
    }, 1500);

    if (randomNumberIndex < randomNumberArray.length - 1) {
      setTimeout(() => {
        setRandomNumberIndex((prevState) => prevState + 1);
      }, 3000);
    } else {
      console.log("in else");
      setTimeout(() => {
        navigate("/scoreBoard");
      }, 3000);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setShowLoader(false);
    }, 1000);
  }, [randomNumberIndex]);

  const optionsContent = optionsArray.map((optionItem) => {
    let oc, as, asw;
    oc =
      Number.parseInt(optionItem) === Number.parseInt(optionClicked) &&
      "selected";
    as =
      isAnswerSubmitted &&
      isOptionClicked &&
      Number.parseInt(optionItem) === Number.parseInt(randomNumber) &&
      "green";
    asw =
      isAnswerSubmitted &&
      isOptionClicked &&
      Number.parseInt(optionItem) !== Number.parseInt(randomNumber) &&
      "red";

    return (
      <p
        key={optionItem}
        className={`option-item ${oc} ${as} ${asw}`}
        onClick={handleOptionClick}
      >
        {optionItem}
      </p>
    );
  });

  return (
    <div className="question-container">
      <h2 className="page-title">Hi {userName}</h2>
      <h5 className="score-title">Your total score: {totalScore}</h5>
      <p className="question-number">
        Question No. {randomNumberIndex + 1} / {randomNumberArray.length}
      </p>
      <div className="question-answer-container">
        {showLoader && <div className="loader">Loading.....</div>}
        <IconItems iconCount={randomNumber} />
        <div className="option-list">{optionsContent}</div>
        {optionClicked && (
          <button className="btn next" onClick={handleNextQuestion}>
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default QuestionsPage;
