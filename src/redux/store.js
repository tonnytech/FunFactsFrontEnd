import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import factQuizOnlySlice from "./slices/factQuizOnlySlice";
import paidFactsSlices from "./slices/paidFactsSlices";
import availableFactsSlice from "./slices/availableFactsSlice";
import questionAnswerBlock from "./slices/questionAnswerSlice";

const store = configureStore({
  reducer: {
    currentUser: userSlice,
    quizBlock: factQuizOnlySlice,
    paidFacts: paidFactsSlices,
    availableFacts: availableFactsSlice,
    questionAnswerBlock,
  },
});

export default store;
