import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userData: "",
};

export const userDataSlice = createSlice({
  name: "UserData",
  initialState,
  reducers: {
    saveData: (state, action) => {
      state.userData = action.payload;
    },
  },
});

export const { saveData } = userDataSlice.actions;

export default userDataSlice.reducer;
