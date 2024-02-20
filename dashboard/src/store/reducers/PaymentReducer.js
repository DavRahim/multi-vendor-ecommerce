import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api/api";

export const get_seller_payemt_details = createAsyncThunk(
  "payment/get_seller_payemt_details",
  async (sellerId, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await api.get(
        `/payment/seller-payment-details/${sellerId}`,
        { withCredentials: true }
      );
      return fulfillWithValue(data);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const send_withdrowal_request = createAsyncThunk(
  "payment/send_withdrowal_request",
  async (info, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await api.post(`/payment/withdrowal-request`, info, {
        withCredentials: true,
      });
      return fulfillWithValue(data);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);


export const PaymentReducer = createSlice({
  name: "payment",
  initialState: {
    successMessage: "",
    errorMessage: "",
    loader: false,
    pendingWithdrows: [],
    successWithdrows: [],
    totalAmount: 0,
    withdrowAmount: 0,
    pendingAmount: 0,
    availableAmount: 0,
  },
  reducers: {
    messageClear: (state, _) => {
      state.errorMessage = "";
      state.successMessage = "";
    },
  },
  extraReducers: {
    [get_seller_payemt_details.fulfilled]: (state, { payload }) => {
      state.pendingWithdrows = payload.pendingWithdrows;
      state.successWithdrows = payload.successWithdrows;
      state.totalAmount = payload.totalAmount;
      state.availableAmount = payload.availableAmount;
      state.withdrowAmount = payload.withdrowAmount;
      state.pendingAmount = payload.pendingAmount;
    },
    [send_withdrowal_request.pending]: (state, _) => {
      state.loader = true;
    },
    [send_withdrowal_request.rejected]: (state, { payload }) => {
      state.loader = false;
      state.errorMessage = payload.message;
    },
    [send_withdrowal_request.fulfilled]: (state, { payload }) => {
      state.loader = false;
      state.successMessage = payload.message;
      state.pendingWithdrows = [...state.pendingWithdrows, payload.withdrowal];
      state.availableAmount = state.availableAmount - payload.withdrowal.amount;
      state.pendingAmount = payload.withdrowal.amount;
    },
  },
});

export const { messageClear } = PaymentReducer.actions;
export default PaymentReducer.reducer;