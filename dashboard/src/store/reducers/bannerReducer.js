import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api/api";

export const add_banner = createAsyncThunk(
  "banner/add_banner",
  async (info, { rejectWithValue, fulfillWithValue }) => {
    try {
      //   const formData = new FormData();
      //   formData.append("name", name);
      //   formData.append("image", image);
      const { data } = await api.post("/banner/add", info, {
        withCredentials: true,
      });

      // console.log(data);
      return fulfillWithValue(data);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const update_banner = createAsyncThunk(
  "banner/update_banner",
  async ({bannerId, info}, { rejectWithValue, fulfillWithValue }) => {
    try {
      //   const formData = new FormData();
      //   formData.append("name", name);
      //   formData.append("image", image);
      const { data } = await api.put(`/banner/update/${bannerId}`, info, {
        withCredentials: true,
      });

      // console.log(data);
      return fulfillWithValue(data);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const get_banner = createAsyncThunk(
  "banner/get_banner",
  async (productId, { rejectWithValue, fulfillWithValue }) => {
    try {
      //   const formData = new FormData();
      //   formData.append("name", name);
      //   formData.append("image", image);
      const { data } = await api.get(`/banner/get/${productId}`, {
        withCredentials: true,
      });
      // console.log(data);
      return fulfillWithValue(data);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const bannerReducer = createSlice({
  name: "category",
  initialState: {
    successMessage: "",
    errorMessage: "",
    loader: false,
    banners: [],
    banner: {},
  },
  reducers: {
    messageClear: (initialState, _) => {
      initialState.successMessage = "";
      initialState.errorMessage = "";
    },
  },
  extraReducers: {
    [add_banner.pending]: (state, _) => {
      state.loader = true;
    },
    [add_banner.rejected]: (state, { payload }) => {
      state.loader = false;
      state.errorMassage = payload.message;
    },
    [add_banner.fulfilled]: (state, { payload }) => {
      state.loader = false;
      state.successMessage = payload.message;
      state.banner = payload.banner;
    },
    [get_banner.fulfilled]: (state, { payload }) => {
      state.banner = payload.banner;
    },
    [update_banner.pending]: (state, _) => {
      state.loader = true;
    },
    [update_banner.rejected]: (state, { payload }) => {
      state.loader = false;
      state.errorMassage = payload.message;
    },
    [update_banner.fulfilled]: (state, { payload }) => {
      state.loader = false;
      state.successMessage = payload.message;
      state.banner = payload.banner;
    },
  },
});

export const { messageClear } = bannerReducer.actions;
export default bannerReducer.reducer;
