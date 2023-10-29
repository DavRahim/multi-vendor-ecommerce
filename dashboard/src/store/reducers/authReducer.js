import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api/api";

export const admin_login = createAsyncThunk(
  "auth/admin_login",
  async (info, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await api.post("/admin-login", info, {
        withCredentials: true,
      });
      localStorage.setItem("accessToken", data.token);
      console.log(data);
      return fulfillWithValue(data);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const authReducer = createSlice({
  name: "auth",
  initialState: {
    successMessage: "",
    errorMessage: "",
    loader: false,
    userInfo: "",
  },
  reducers: {
    messageClear: (initialState, _) => {
      initialState.successMessage = "";
      initialState.errorMessage = "";
    },
  },
  extraReducers: {
    [admin_login.pending]: (state, { payload }) => {
      state.loader = true;
    },
    [admin_login.rejected]: (state, { payload }) => {
      state.loader = false;
      state.successMessage = ""
      state.errorMessage = payload.error;
    },
    [admin_login.fulfilled]: (state, { payload }) => {
      state.loader = false;
      state.errorMessage = "";
      state.successMessage = payload.message;
    },
  },
});

export const {messageClear} = authReducer.actions;
export default authReducer.reducer;
