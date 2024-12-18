import { createSlice } from "@reduxjs/toolkit";
import { fetchPaidFacts } from "../../services/factsServices";

// Set the initial state
export const initialState = {
  paidQuizes: {},
  paidQuizesIsLoading: false,
  paidQuizesError: null,
  paidQuizesIsSuccessfull: false,
};

const paidFactsSlice = createSlice({
  name: "fetch paid quizes",
  initialState,
  reducers: {
    resetSuccessful: (state) => ({ ...state, isSuccessfull: false }),
  },
  extraReducers: (builder) => {
    // fetch all existing tours
    builder
      .addCase(fetchPaidFacts.pending, (state) => ({
        ...state,
        paidQuizesIsLoading: true,
      }))
      .addCase(fetchPaidFacts.fulfilled, (state, action) => {
        const returnData = {
          ...state,
          paidQuizes: action.payload.data.facts,
          paidQuizesIsLoading: false,
          paidQuizesIsSuccessfull: true,
        };
        return returnData;
      })
      .addCase(fetchPaidFacts.rejected, (state, action) => ({
        ...state,
        paidQuizesError: action.payload,
        paidQuizesIsLoading: false,
      }));
  },
});

export const { resetSuccessful } = paidFactsSlice.actions;
export default paidFactsSlice.reducer;
