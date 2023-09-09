import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { store } from "./store";
import { Provider } from "react-redux";
import QuestionsPage from "./pages/QuestionsPage";
import ScoreBoard from "./pages/ScoreBoard";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<App />} />
        <Route path="/questionsPage" element={<QuestionsPage />} />
        <Route path="/scoreBoard" element={<ScoreBoard />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);
