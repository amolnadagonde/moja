import { configureStore } from "@reduxjs/toolkit";
import scoreReducer from "../reducers/scoreSlice";
import userSlice from "../reducers/userSlice";

export const store = configureStore({
  reducer: {
    score: scoreReducer,
    user: userSlice,
  },
});
