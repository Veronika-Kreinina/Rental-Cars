import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const FAVORITES_KEY = "favoriteCars";

export const fetchCars = createAsyncThunk(
  "cars/fetchCars",
  async (filters = {}) => {
    const params = new URLSearchParams();
    if (filters.brand) params.append("brand", filters.brand);
    if (filters.maxPrice) params.append("maxPrice", filters.maxPrice);
    if (filters.maxMileage) params.append("maxMileage", filters.maxMileage);

    const response = await axios.get(
      ` https://car-rental-api.goit.global/api-docs/?${params.toString()}`
    );
    return response.data;
  }
);

const loadFavorites = () => {
  try {
    const saved = localStorage.getItem(FAVORITES_KEY);
    return saved ? JSON.parse(saved) : [];
  } catch (error) {
    console.log(error);

    return [];
  }
};

const saveFavorites = (favorites) => {
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
};

const carsSlice = createSlice({
  name: "cars",
  initialState: {
    list: [],
    favorites: loadFavorites(),
    status: "idle",
  },
  reducers: {
    toggleFavorite: (state, action) => {
      const car = action.payload;
      const isFav = state.favorites.some((f) => f.id === car.id);
      if (isFav) {
        state.favorites = state.favorites.filter((f) => f.id !== car.id);
      } else {
        state.favorites.push(car);
      }
      saveFavorites(state.favorites);
      state.list = state.list.map((item) => ({
        ...item,
        isFavorite: state.favorites.some((f) => f.id === item.id),
      }));
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCars.fulfilled, (state, action) => {
      state.list = action.payload.map((car) => ({
        ...car,
        isFavorite: state.favorites.some((f) => f.id === car.id),
      }));
    });
  },
});

export const { toggleFavorite } = carsSlice.actions;
export default carsSlice.reducer;
