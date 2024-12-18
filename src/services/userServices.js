import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { baseUrl } from "../utils/utils";

export const loginUser = createAsyncThunk(
  "users/loginUser",
  async (adminData, thunkAPI) => {
    try {
      const res = await axios({
        method: "POST",
        url: `${baseUrl}/api/v1/users/login`,
        data: adminData,
        withCredentials: true,
      });
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const registerUser = createAsyncThunk(
  "users/registerUser",
  async (adminData, thunkAPI) => {
    try {
      const res = await axios({
        method: "POST",
        url: `${baseUrl}/api/v1/users/signup`,
        data: adminData,
      });
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const getUser = createAsyncThunk(
  "users/getUser",
  async (_, thunkAPI) => {
    try {
      const res = await axios.get(`${baseUrl}/api/v1/users/me`, {
        withCredentials: true,
      });
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const logOutUser = createAsyncThunk(
  "users/getUser",
  async (_, thunkAPI) => {
    try {
      const res = await axios.get(`${baseUrl}/api/v1/users/logout`, {
        withCredentials: true,
      });
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const forgotPassword = createAsyncThunk(
  "users/forgotPassword",
  async (adminData, thunkAPI) => {
    try {
      const res = await axios({
        method: "POST",
        url: `${baseUrl}/api/v1/users/forgotPassword`,
        data: adminData,
        withCredentials: true,
      });
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const resetPassword = createAsyncThunk(
  "users/resetPassword",
  async (adminData, thunkAPI) => {
    const {token, formData} = adminData;
    try {
      const res = await axios({
        method: "POST",
        url: `${baseUrl}/api/v1/users/resetPassword/${token}`,
        data: formData,
        withCredentials: true,
      });
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
