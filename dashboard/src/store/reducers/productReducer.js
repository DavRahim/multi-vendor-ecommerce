import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api/api";

export const add_product = createAsyncThunk(
  "product/add_product",
  async (product, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await api.post("/product-add", product, {
        withCredentials: true,
      });
      console.log(data);
      return fulfillWithValue(data);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const update_product = createAsyncThunk(
  "product/updateProduct",
  async (product, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await api.post("/product-update", product, {
        withCredentials: true,
      });
      return fulfillWithValue(data);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const get_Products = createAsyncThunk(
  "product/get_products",
  async (
    { parPage, page, searchValue },
    { rejectWithValue, fulfillWithValue }
  ) => {
    try {
      const { data } = await api.get(
        `/products-get?page=${page}&&searchValue=${searchValue}&&parPage=${parPage}`,
        {
          withCredentials: true,
        }
      );
      console.log(data);

      return fulfillWithValue(data);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const get_product = createAsyncThunk(
  "product/get_product",
  async (productId, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await api.get(`/product-get/${productId}`, {
        withCredentials: true,
      });
      return fulfillWithValue(data);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const product_image_update = createAsyncThunk(
  "product/product_image_update",
  async (
    { oldImage, newImage, productId },
    { rejectWithValue, fulfillWithValue }
  ) => {
    try {
      const formData = new FormData();
      formData.append("oldImage", oldImage);
      formData.append("newImage", newImage);
      formData.append("productId", productId);
      const { data } = await api.post("/product-image-update", formData, {
        withCredentials: true,
      });
      return fulfillWithValue(data);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const productReducer = createSlice({
  name: "product",
  initialState: {
    successMessage: "",
    errorMessage: "",
    loader: false,
    products: [],
    product: [],
    totalProducts: 0,
  },
  reducers: {
    messageClear: (initialState, _) => {
      initialState.successMessage = "";
      initialState.errorMessage = "";
    },
  },
  extraReducers: {
    [add_product.pending]: (state, { payload }) => {
      state.loader = true;
      state.successMessage = "";
      state.errorMessage = "";
    },
    [add_product.rejected]: (state, { payload }) => {
      state.loader = false;
      state.successMessage = "";
      state.errorMessage = payload.error;
    },
    [add_product.fulfilled]: (state, { payload }) => {
      state.loader = false;
      state.errorMessage = "";
      state.successMessage = payload.message;
      state.products = [...state.products, payload.products];
    },
    [get_Products.fulfilled]: (state, { payload }) => {
      state.loader = false;
      state.errorMessage = "";
      state.successMessage = payload.message;
      state.totalProducts = payload.totalProducts;
      state.products = payload.products;
    },
    [get_product.fulfilled]: (state, { payload }) => {
      state.loader = false;
      state.errorMessage = "";
      state.successMessage = payload.message;
      state.product = payload.product;
    },
    [update_product.pending]: (state, _) => {
      state.loader = true;
    },
    [update_product.rejected]: (state, { payload }) => {
      state.loader = false;
      state.successMessage = "";
      state.errorMessage = payload.error;
    },
    [update_product.fulfilled]: (state, { payload }) => {
      state.loader = false;
      state.product = payload.product;
      state.successMessage = payload.message;
    },
    [product_image_update.fulfilled]: (state, { payload }) => {
      state.loader = false;
      state.errorMessage = "";
      state.product = payload.product;
      state.successMessage = payload.message;
    },
  },
});

export const { messageClear } = productReducer.actions;
export default productReducer.reducer;
