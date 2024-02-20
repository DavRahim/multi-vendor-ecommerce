import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api/api";

export const categoryAdd = createAsyncThunk(
  "category/categoryAdd",
  async ({ name, image }, { rejectWithValue, fulfillWithValue }) => {
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("image", image);
      const { data } = await api.post("/category-add", formData, {
        withCredentials: true,
      });

      return fulfillWithValue(data);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const get_category = createAsyncThunk(
  "category/get_category",
  async (
    { parPage, page, searchValue },
    { rejectWithValue, fulfillWithValue }
  ) => {
    try {
      const { data } = await api.get(
        `/category-get?page=${page}&&searchValue=${searchValue}&&parPage=${parPage}`,
        {
          withCredentials: true,
        }
      );
    // console.log(data);
      return fulfillWithValue(data);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const categoryReducer = createSlice({
  name: "category",
  initialState: {
    successMessage: "",
    errorMessage: "",
    loader: false,
    category: [],
    totalCategory: 0,
  },
  reducers: {
    messageClear: (initialState, _) => {
      initialState.successMessage = "";
      initialState.errorMessage = "";
    },
  },
  extraReducers: {
    [categoryAdd.pending]: (state, { payload }) => {
      state.loader = true;
    },
    [categoryAdd.rejected]: (state, { payload }) => {
      state.loader = false;
      state.successMessage = "";
      state.errorMessage = payload.error;
    },
    [categoryAdd.fulfilled]: (state, { payload }) => {
      state.loader = false;
      state.errorMessage = "";
      state.successMessage = payload.message;
      state.category = [...state.category, payload.category];
    },
    [get_category.fulfilled]: (state, { payload }) => {
      state.loader = false;
      state.errorMessage = "";
      state.successMessage = payload.message;
      state.totalCategory = payload.totalCategory;
      state.category = payload.categorys;
    },
  },
});

export const { messageClear } = categoryReducer.actions;
export default categoryReducer.reducer;
