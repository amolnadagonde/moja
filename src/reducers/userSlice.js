import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userName: null,
  gender: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserDetails(state, action) {
      const { userName, gender } = action.payload;

      state.userName = userName.charAt(0).toUpperCase() + userName.slice(1);
      state.gender = gender;
    },
    resetUserDetails(state) {
      state.userName = null;
      state.gender = null;
    },
  },
});

export const { setUserDetails, resetUserDetails } = userSlice.actions;

export default userSlice.reducer;
