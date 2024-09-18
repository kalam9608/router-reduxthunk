import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchProductApi } from "./productApi";

const initialState = {
  products: [],
  status: "idle",
};

export const fetchAsyncProduct = createAsyncThunk(
  "product/fetchProduct",
  async () => {
    const response = await fetchProductApi();
    return response.data;
  }
);

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAsyncProduct.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchAsyncProduct.fulfilled, (state, action) => {
        state.status = "idle";
        state.products = action.payload;
      });
  },
});

// Action creators are generated for each case reducer function
export const {} = productSlice.actions;

export default productSlice.reducer;
