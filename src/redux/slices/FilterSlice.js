import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categoryId: 0,
  sort: {
    name: "популярности(DESC)",
    sortProperty: "rating",
  },
  currentPage: 1,
};

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setCategoryId(state, action) {
      state.categoryId = action.payload;
    },
    setSortItem(state, action) {
      state.sort = action.payload;
    },
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
    setFilters(state, action) {
      state.currentPage = action.payload.currentPage;
      state.sort = action.payload.sort;
      state.categoryId = action.payload.categoryId;
    },
  },
});


export const selectSort = (state) => state.filter.sort;
export const selectFilter = (state) => state.filter;
export const { setCategoryId, setSortItem, setCurrentPage, setFilters } =
  filterSlice.actions;
export default filterSlice.reducer;
