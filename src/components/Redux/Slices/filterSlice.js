import {createSlice} from "@reduxjs/toolkit";

export const initialState = {
  categoriesId: 0,
  currentPage: 1,
  sortProperty: "rating",
  searchValue: "",
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCategoriesId: (state, action) => {
      state.categoriesId = action.payload;
    },
    setSortType: (state, action) => {
      state.sortProperty = action.payload;
    },
    setSearchValue: (state, action) => {
      state.searchValue = action.payload;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setFilters: (state, action) => {
      state.sortProperty = action.payload.sortProperty;
      state.searchValue = action.payload.searchValue;
      state.currentPage = Number(action.payload.currentPage);
      state.categoriesId = Number(action.payload.categoriesId);
    }
  },
});

export const selectedFilter = (state) => state.filter;

export const {
  setCategoriesId,
  setSortType,
  setSearchValue,
  setCurrentPage,
  setFilters,
} = filterSlice.actions;

export default filterSlice.reducer;
