import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalScore: 0,
};

const scoreSlice = createSlice({
  name: "score",
  initialState,
  reducers: {
    increaseScore(state) {
      console.log("coming in score");
      state.totalScore += 10;
    },
    resetScore(state) {
      state.totalScore = 0;
    },
  },
});

export const { increaseScore, resetScore } = scoreSlice.actions;

export default scoreSlice.reducer;
