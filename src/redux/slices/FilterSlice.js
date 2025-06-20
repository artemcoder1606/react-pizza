import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categoryId: 0,
  sort: {
     name: "популярности(DESC)",
    sortProperty: "rating",
  }
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
    }
  }
})

export const {setCategoryId, setSortItem} = filterSlice.actions;
export default filterSlice.reducer