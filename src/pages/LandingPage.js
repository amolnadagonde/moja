import React, { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUserDetails } from "../reducers/userSlice";
import transition from "../utils/transition";
import { motion } from "framer-motion";
// import girl from "./girl.png";
// import boy from "./boy.png";

const LandingPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const inputElementFocusRef = useRef();

  const [userData, setUserData] = useState({
    userName: "",
    gender: null,
  });

  const handleUserNameChange = (e) => {
    setUserData({
      ...userData,
      userName: e.target.value,
    });
  };

  const handleRadioChange = (e) => {
    setUserData({
      ...userData,
      gender: e.target.value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch(setUserDetails(userData));
    navigate("/questionsPage");
  };

  useEffect(() => {
    inputElementFocusRef.current.focus();
  }, []);

  return (
    <motion.div className="landing-page-container text-center">
      <h2 className="page-title">Welcome to Kiddos</h2>
      <form onSubmit={handleFormSubmit}>
        <div>
          <input
            className="name-input"
            type="text"
            onChange={handleUserNameChange}
            ref={inputElementFocusRef}
          />
        </div>
        <div className="gender-container">
          <div className="gender-item">
            <label>
              <img src="/girl.png" alt="Girl" />
            </label>
            <input
              type="radio"
              name="gender"
              value="girl"
              onChange={handleRadioChange}
            />
          </div>
          <div className="gender-item">
            <label>
              <img src="/boy.png" alt="Boy" />
            </label>
            <input
              type="radio"
              name="gender"
              value="boy"
              onChange={handleRadioChange}
            />
          </div>
        </div>

        <button
          className="login-btn"
          disabled={userData.userName === "" || userData.gender == null}
        >
          SUBMIT
        </button>
      </form>
    </motion.div>
  );
};

export default transition(LandingPage);
