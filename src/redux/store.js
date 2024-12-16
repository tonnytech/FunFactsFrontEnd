import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice"

const store = configureStore({
  reducer: {
    currentUser: userSlice,
  },
});

export default store;