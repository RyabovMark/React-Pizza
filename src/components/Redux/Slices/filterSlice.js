import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  categoriesId: 0,
  sortType: {
    name: "Популярности",
    sortProperty: "rating",
    id: 0
  },
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
      state.sortType = action.payload;
    },
    setSearchValue: (state, action) => {
      state.searchValue = action.payload;
    }
  }

});

export const {
  setCategoriesId,
  setSortType,
  setSearchValue
} = filterSlice.actions;

export default filterSlice.reducer;
