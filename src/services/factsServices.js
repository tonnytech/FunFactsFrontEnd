import { createAsyncThunk } from "@reduxjs/toolkit";
import { baseUrl } from "../utils/utils";
import axios from "axios";

export const AddFact = createAsyncThunk(
  "facts/AddFact",
  async (data, thunkAPI) => {
    const { question, answer, Usd, Ksh } = data;
    try {
      const res = await axios({
        method: "POST",
        url: `${baseUrl}/api/v1/fact`,
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

export const fetchFactQuizOnly = createAsyncThunk(
  "facts/fetchFactQuizOnly",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`${baseUrl}/api/v1/script`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
