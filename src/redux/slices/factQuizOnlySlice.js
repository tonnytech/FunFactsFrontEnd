import { createSlice } from "@reduxjs/toolkit";
import { fetchFactQuizOnly } from "../../services/factsServices";

// Set the initial state
export const initialState = {
  quizes: {},
  quizesIsLoading: false,
  quizesError: null,
  quizesIsSuccessfull: false,
};

const factQuizOnlySlice = createSlice({
  name: "fetch quizes",
  initialState,
  reducers: {
    resetSuccessful: (state) => ({ ...state, isSuccessfull: false }),
  },
  extraReducers: (builder) => {
    // fetch all existing tours
    builder
      .addCase(fetchFactQuizOnly.pending, (state) => ({
        ...state,
        quizesIsLoading: true,
      }))
      .addCase(fetchFactQuizOnly.fulfilled, (state, action) => {
        const returnData = {
          ...state,
          quizes: action.payload,
          quizesIsLoading: false,
          quizesIsSuccessfull: true,
        };
        return returnData;
      })
      .addCase(fetchFactQuizOnly.rejected, (state, action) => ({
        ...state,
        quizesError: action.payload,
        quizesIsLoading: false,
      }));
  },
});

export const { resetSuccessful } = factQuizOnlySlice.actions;
export default factQuizOnlySlice.reducer;
