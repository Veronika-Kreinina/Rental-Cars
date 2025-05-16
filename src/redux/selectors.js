export const selectCar = (state) => state.cars.list;
export const selectFilters = (state) => state.filters;
export const selectBrand = (state) => state.filters.brand;
export const selectMaxPrice = (state) => state.filters.maxPrice;
export const selectMaxMileage = (state) => state.filters.maxMileage;
export const selectError = (state) => state.cars.error;
