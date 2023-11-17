import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import jwt from "jwt-decode";
import api from "../../api/api";

export const admin_login = createAsyncThunk(
  "auth/admin_login",
  async (info, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await api.post("/admin-login", info, {
        withCredentials: true,
      });
      localStorage.setItem("accessToken", data.token);
      // console.log(data);
      return fulfillWithValue(data);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const seller_login = createAsyncThunk(
  "auth/seller_login",
  async (info, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await api.post("/seller-login", info, {
        withCredentials: true,
      });
      localStorage.setItem("accessToken", data.token);
      // console.log(data);
      return fulfillWithValue(data);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const seller_register = createAsyncThunk(
  "auth/seller_register",
  async (info, { rejectWithValue, fulfillWithValue }) => {
    try {
      console.log(info);
      const { data } = await api.post("/seller-register", info, {
        withCredentials: true,
      });
      localStorage.setItem("accessToken", data.token);
      //  console.log(data);
      return fulfillWithValue(data);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const get_user_info = createAsyncThunk(
  "auth/get_user_info",
  async (_, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await api.get("/get-user", {
        withCredentials: true,
      });

      // console.log(data);
      return fulfillWithValue(data);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const profile_image_upload = createAsyncThunk(
  "auth/profile_image_upload",
  async (image, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await api.post("/profile-image-upload", image, {
        withCredentials: true,
      });
      return fulfillWithValue(data);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const profile_info_add = createAsyncThunk(
  "auth/profile_info_add",
  async (info, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await api.post("/profile-info-add", info, {
        withCredentials: true,
      });
      return fulfillWithValue(data);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);



const returnRole = (token) => {
  if (token) {
    const decodeToken = jwt(token);
    // console.log(decodeToken);
    const expireTime = new Date(token.exp);
    if (new Date() > expireTime) {
      localStorage.removeItem("accessToken");
      return "";
    } else {
      return decodeToken.role;
    }
  } else {
    return "";
  }
};

export const authReducer = createSlice({
  name: "auth",
  initialState: {
    successMessage: "",
    errorMessage: "",
    loader: false,
    userInfo: "",
    role: returnRole(localStorage.getItem("accessToken")),
    token: localStorage.getItem("accessToken"),
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
      state.errorMessage = "";
      state.successMessage = "";
    },
    [admin_login.rejected]: (state, { payload }) => {
      state.loader = false;
      state.successMessage = "";
      state.errorMessage = payload.error;
    },
    [admin_login.fulfilled]: (state, { payload }) => {
      state.loader = false;
      state.errorMessage = "";
      state.successMessage = payload.message;
      state.token = payload.token;
      state.role = returnRole(payload.token);
    },
    [seller_register.pending]: (state, { payload }) => {
      state.loader = true;
      state.errorMessage = "";
      state.successMessage = "";
    },
    [seller_register.rejected]: (state, { payload }) => {
      state.loader = false;
      state.successMessage = "";
      state.errorMessage = payload.error;
    },
    [seller_register.fulfilled]: (state, { payload }) => {
      state.loader = false;
      state.errorMessage = "";
      state.successMessage = payload.message;
      state.token = payload.token;
      state.role = returnRole(payload.token);
    },
    [seller_login.pending]: (state, { payload }) => {
      state.loader = true;
      state.errorMessage = "";
      state.successMessage = "";
    },
    [seller_login.rejected]: (state, { payload }) => {
      state.loader = false;
      state.successMessage = "";
      state.errorMessage = payload.error;
    },
    [seller_login.fulfilled]: (state, { payload }) => {
      state.loader = false;
      state.errorMessage = "";
      state.successMessage = payload.message;
      state.token = payload.token;
      state.role = returnRole(payload.token);
    },
    [get_user_info.fulfilled]: (state, { payload }) => {
      state.loader = false;
      state.errorMessage = "";
      state.successMessage = payload.message;
      state.userInfo = payload.userInfo;
    },
    [profile_image_upload.pending]: (state, _) => {
      state.loader = true;
      state.errorMessage = "";
      state.successMessage = "";
    },
    [profile_image_upload.fulfilled]: (state, { payload }) => {
      state.loader = false;
      state.errorMessage = "";
      state.successMessage = "";
      state.userInfo = payload.userInfo;
      state.successMessage = payload.message;
    },
    [profile_info_add.pending]: (state, _) => {
      state.loader = true;
       state.errorMessage = "";
       state.successMessage = "";
    },
    [profile_info_add.fulfilled]: (state, { payload }) => {
      state.loader = false;
      state.errorMessage = "";
      state.userInfo = payload.userInfo;
      state.successMessage = payload.message;
    },
  },
});

export const { messageClear } = authReducer.actions;
export default authReducer.reducer;
