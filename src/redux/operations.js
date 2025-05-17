import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://car-rental-api.goit.global";

export const fetchCars = createAsyncThunk("cars/fetch", async (_, thunkAPI) => {
  try {
    const { data } = await axios.get("/cars");
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const fetchBrand = createAsyncThunk(
  "brands/fetch",
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get(`/brands`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
