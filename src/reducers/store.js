import { configureStore } from "@reduxjs/toolkit";
import scoreReducer from "./scoreSlice";
import userSlice from "./userSlice";

export const store = configureStore({
  reducer: {
    score: scoreReducer,
    user: userSlice,
  },
});
