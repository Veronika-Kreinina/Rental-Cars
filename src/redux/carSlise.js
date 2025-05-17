import { createSlice } from "@reduxjs/toolkit";
import { fetchBrand, fetchCars } from "./operations";

const initialState = {
  cars: [],
  brands: [],
  favourite: [],
  loading: false,
  error: null,
};

const carSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {
    addFavourite(state, action) {
      if (!state.favourite.includes(action.payload)) {
        state.favourite.push(action.payload);
      }
    },
    removeFavourite(state, action) {
      state.favourites = state.favourite.filter((id) => id !== action.payload);
    },

    clearCars: (state) => {
      state.cars = [];
      state.loading = false;
      state.error = null;
    },
    extraReducers: (builder) => {
      builder
        .addCase(fetchCars.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(fetchCars.fulfilled, (state, action) => {
          state.loading = false;
          state.cars = action.payload;
        })
        .addCase(fetchCars.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload;
          state.cars = [];
        });

      builder
        .addCase(fetchBrand.pending, (state) => {
          state.loading = true;
          state.error = null;
          state.brand = [];
        })
        .addCase(fetchBrand.fulfilled, (state, action) => {
          state.loading = false;
          state.brand = action.payload;
        })
        .addCase(fetchBrand.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload;
          state.brand = [];
        });
    },
  },
});

export const { addFavourite, removeFavourite, clearCars } = carSlice.actions;
export default carSlice.reducer;
