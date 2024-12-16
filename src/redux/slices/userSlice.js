import { createSlice } from "@reduxjs/toolkit";
import { registerUser } from "../../services/userServices";
import { setLocalStorage, getLocalStorage } from "../../utils/utils";

// Set the initial state
const initialState = {
  user: getLocalStorage("AuthenticateWebUserData"),
  userRegisterMessage: "",
  userIsLoading: false,
  userError: null,
  userIsSuccessfull: false,
};

const userSlice = createSlice({
  name: "UserSlice",
  initialState,
  reducers: {
    setUser: (state, actions) => {
      state.user = actions.payload;
      setLocalStorage('AuthenticateWebUserData', actions.payload)
    },

    logoutUser: (state) => {
      state.user = "";
      setLocalStorage("AuthenticateWebUserData", '');
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => ({
        ...state,
        userIsLoading: true,
      }))
      .addCase(registerUser.fulfilled, (state, action) => {
        console.log(action.payload);
        const returnData = {
          ...state,
          userRegisterMessage: action.payload.message,
          userIsLoading: false,
          userIsSuccessfull: true,
        };
        return returnData;
      })
      .addCase(registerUser.rejected, (state, action) => ({
        ...state,
        userError: action.payload,
        userIsLoading: false,
        userIsSuccessfull: false,
      }));
  },
});

export const { setUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;
