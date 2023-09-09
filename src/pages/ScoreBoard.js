import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { resetUserDetails } from "../reducers/userSlice";
import { resetScore } from "../reducers/scoreSlice";

const ScoreBoard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { totalScore } = useSelector((state) => state.score);
  const { userName } = useSelector((state) => state.user);

  useEffect(() => {
    if (!userName) {
      navigate("/");
      dispatch(resetScore());
    }
    return () => {
      // will show a modal to exit the game and redirect to landing page
      dispatch(resetUserDetails());
    };
  }, [dispatch, navigate, userName]);

  return (
    <div
      style={{ height: `${window.innerHeight}px` }}
      className="score-board-page"
    >
      <h1 className="white-text">
        {userName}, you scored{" "}
        <span className="highlighted-score">{totalScore}</span>
      </h1>

      <div className="firework"></div>
      <div className="firework"></div>
      <div className="firework"></div>
    </div>
  );
};

export default ScoreBoard;
