import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api/api";


export const get_category = createAsyncThunk(
  "category/get_category",
  async (_, { fulfillWithValue }) => {
    try {
      const { data } = await api.get("/home/get-categorys");
      console.log(data);
      return fulfillWithValue(data);
    } catch (error) {
      console.log(error.response);
    }
  }
);


export const homeReducer = createSlice({
  name: "home",
  initialState: {
    categorys: [],
  },
  reducers: {},
  extraReducers: {
    [get_category.fulfilled]: (state, { payload }) => {
      state.categorys = payload.categorys;
    },
  },
});
export default homeReducer.reducer

