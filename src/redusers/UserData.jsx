import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userData: "",
  userOrder: "",
};

export const userDataSlice = createSlice({
  name: "UserData",
  initialState,
  reducers: {
    saveData: (state, action) => {
      state.userData = action.payload;
    },
    saveOrder: (state, action) => {
      state.userOrder = action.payload;
    },
  },
});

export const { saveData, saveOrder } = userDataSlice.actions;

export default userDataSlice.reducer;
