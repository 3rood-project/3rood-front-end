import { configureStore } from "@reduxjs/toolkit";
import UserData from "./redusers/UserData";

export const store = configureStore({
  reducer: {
    userData: UserData,
  },
});
