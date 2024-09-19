import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  addCartItemsApi,
  deleteCartItemsApi,
  fetchCartItemsApi,
  updateCartItemsApi,
} from "./cartApi";

const initialState = {
  items: [],
  status: "idle",
};

export const fetchAsyncCartItems = createAsyncThunk(
  "cart/fetchcart",
  async () => {
    const response = await fetchCartItemsApi();
    return response.data;
  }
);

export const addAsyncCartItems = createAsyncThunk(
  "cart/addcart",
  async (item) => {
    console.log("product===>",item)
    const { title, thumbnail, price ,quantity } = item;
    const response = await addCartItemsApi({
      title,
      thumbnail,
      price,
      quantity: quantity,
    });
    return response.data;
  }
);

export const deleteAsyncCartItems = createAsyncThunk(
  "cart/deletecart",
  async (id) => {
    await deleteCartItemsApi(id);
    return id;
  }
);

export const updateAsyncCartItems = createAsyncThunk(
  "cart/updatecart",
  async ({ id, changeQuantity }) => {
    const response = await updateCartItemsApi(id, changeQuantity);
    console.log("respomse==>", response);
    return response.data;
  }
);

export const cartSlice = createSlice({
  name: "carts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAsyncCartItems.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchAsyncCartItems.fulfilled, (state, action) => {
        state.status = "idle";
        state.items = action.payload;
      })
      .addCase(addAsyncCartItems.fulfilled, (state, action) => {
        state.status = "idle";
        // state.items = action.payload;
        state.items.push(action.payload);
      })
      .addCase(deleteAsyncCartItems.fulfilled, (state, action) => {
        const index = state.items.findIndex(
          (item) => item.id == action.payload
        );
        console.log("index==>", action.payload, index);
        state.items.splice(index, 1);
        state.status = "idle";
      })
      .addCase(updateAsyncCartItems.fulfilled, (state, action) => {
        const index = state.items.findIndex(
          (item) => item.id == action.payload.id
        );
        state.items.splice(index, 1, action.payload);
        state.status = "idle";
      });
  },
});

// Action creators are generated for each case reducer function
export const {} = cartSlice.actions;

export default cartSlice.reducer;
