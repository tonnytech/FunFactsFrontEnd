import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { baseUrl } from "../utils/utils";

export const payByPaypal = createAsyncThunk(
  "payByPaypal",
  async (apiData, thunkAPI) => {
    const { priceData, jokeId } = apiData;
    try {
      const response = await axios({
        method: "POST",
        url: `${baseUrl}/api/v1/paypal/pay`,
        data: { price: priceData, jokeId },
        withCredentials: true,
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data || "Something went wrong"
      );
    }
  }
);
