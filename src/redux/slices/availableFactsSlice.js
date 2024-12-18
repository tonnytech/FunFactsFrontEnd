import { createSlice } from "@reduxjs/toolkit";
import { fetchAvailableFacts } from "../../services/factsServices";

// Set the initial state
export const initialState = {
  availableQuizes: [],
  availableQuizesIsLoading: false,
  availableQuizesError: null,
  availableQuizesIsSuccessfull: false,
};

const availableFactsSlice = createSlice({
  name: "fetch quizes",
  initialState,
  reducers: {
    resetSuccessful: (state) => ({ ...state, isSuccessfull: false }),
  },
  extraReducers: (builder) => {
    // fetch all existing tours
    builder
      .addCase(fetchAvailableFacts.pending, (state) => ({
        ...state,
        availableQuizesIsLoading: true,
      }))
      .addCase(fetchAvailableFacts.fulfilled, (state, action) => {
        const returnData = {
          ...state,
          availableQuizes: action.payload.questionsOnly,
          availableQuizesIsLoading: false,
          availableQuizesIsSuccessfull: true,
        };
        return returnData;
      })
      .addCase(fetchAvailableFacts.rejected, (state, action) => ({
        ...state,
        availableQuizesError: action.payload,
        availableQuizesIsLoading: false,
      }));
  },
});

export const { resetSuccessful } = availableFactsSlice.actions;
export default availableFactsSlice.reducer;
