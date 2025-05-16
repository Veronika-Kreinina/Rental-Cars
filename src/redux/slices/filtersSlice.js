import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  brand: "",
  maxPrice: "",
  maxMileage: "",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setBrand: (state, action) => {
      state.brand = action.payload;
    },
    setMaxPrice: (state, action) => {
      state.maxPrice = action.payload;
    },
    setMaxMileage: (state, action) => {
      state.maxMileage = action.payload;
    },
    resetFilters: () => initialState,
  },
});

export const { setBrand, setMaxPrice, setMaxMileage, resetFilters } =
  filtersSlice.actions;
export default filtersSlice.reducer;
