import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  categoryId: 0,
  sort: {
     name: "популярности(DESC)",
    sortProperty: "rating",
  }, 
  currentPage: 1
}

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setCategoryId(state, action) {
      state.categoryId = action.payload
    },
    setSortItem(state, action) {
      state.sort = action.payload
    }, 
    setCurrentPage(state, action) {
      state.currentPage = action.payload
    }
  }
})

export const {setCategoryId, setSortItem, setCurrentPage} = filterSlice.actions;
export default filterSlice.reducer