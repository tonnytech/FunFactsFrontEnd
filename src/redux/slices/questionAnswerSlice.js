import { createSlice } from "@reduxjs/toolkit";
import { fetchQuizAnsBlock } from "../../services/factsServices";

// Set the initial state
export const initialState = {
  quize: {},
  quizeIsLoading: false,
  quizeError: null,
  quizeIsSuccessfull: false,
};

const questionAnswerBlock = createSlice({
  name: "fetch quizes",
  initialState,
  reducers: {
    resetSuccessful: (state) => ({ ...state, isSuccessfull: false }),
  },
  extraReducers: (builder) => {
    // fetch all existing tours
    builder
      .addCase(fetchQuizAnsBlock.pending, (state) => ({
        ...state,
        quizeIsLoading: true,
      }))
      .addCase(fetchQuizAnsBlock.fulfilled, (state, action) => {
        const returnData = {
          ...state,
          quize: action.payload,
          quizeIsLoading: false,
          quizeIsSuccessfull: true,
        };
        return returnData;
      })
      .addCase(fetchQuizAnsBlock.rejected, (state, action) => ({
        ...state,
        quizeError: action.payload,
        quizeIsLoading: false,
      }));
  },
});

export const { resetSuccessful } = questionAnswerBlock.actions;
export default questionAnswerBlock.reducer;
