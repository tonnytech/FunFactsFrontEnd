import { createAsyncThunk } from "@reduxjs/toolkit";
import { baseUrl } from "../utils/utils";

import axios from "axios";

export const AddFacts = createAsyncThunk(
  "facts/AddFacts",
  async (data, thunkAPI) => {
    const { question, answer, Usd, Ksh } = data;
    try {
      const res = await axios({
        method: "POST",
        url: `${baseUrl}/api/v1/facts`,
        data: {
          question,
          answer,
          Usd,
          Ksh,
        },
        withCredentials: true,
      });
      console.log("Added quize", res.data);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
