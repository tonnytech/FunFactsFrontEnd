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
      const response = await axios.get(`${baseUrl}/api/v1/fact`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const fetchPaidFacts = createAsyncThunk(
  "fetchPaidQuizAnsBlock",
  async (thunkAPI) => {
    try {
      const response = await axios({
        method: "GET",
        url: `${baseUrl}/api/v1/fact/paid`,
        withCredentials: true,
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const fetchAvailableFacts = createAsyncThunk(
  "fetchAvailableFacts",
  async (thunkAPI) => {
    try {
      const response = await axios({
        method: "GET",
        url: `${baseUrl}/api/v1/fact/available`,
        withCredentials: true,
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const fetchQuizAnsBlock = createAsyncThunk(
  "fetchQuizAnsBlock",
  async (id, thunkAPI) => {
    try {
      const response = await axios({
        method: "GET",
        url: `${baseUrl}/api/v1/fact/${id}`,
        withCredentials: true,
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);