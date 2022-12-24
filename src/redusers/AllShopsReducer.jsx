import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const config = {
  method: "get",
  url: "http://127.0.0.1:8000/api/allShops",
  headers: {
    Accept: "application/vnd.api+json",
    "Content-Type": "application/vnd.api+json",
  },
};

const initialState = {
  allShops: [],
  shopData: [],
  shopTags: [],
  isLoading: false,
};

export const fetchAllShops = createAsyncThunk(
  "shops/fetchAllShops",
  async () => {
    const response = await axios.request(config);
    return response.data;
  }
);
export const fetchShopProfile = createAsyncThunk(
  "shops/ShopProfile",
  async (shopName) => {
    const response = await axios.get(
      `http://127.0.0.1:8000/api/allShops/${shopName}`
    );
    return response.data;
  }
);

export const AllShopsReducer = createSlice({
  name: "shops",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchAllShops.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchAllShops.fulfilled]: (state, action) => {
      state.allShops = action.payload.data;
      state.isLoading = false;
    },
    [fetchShopProfile.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchShopProfile.fulfilled]: (state, action) => {
      state.shopData = action.payload.data;

      action.payload.data.shop_products.forEach((product) => {
        state.shopTags.push(product.tag);
      });
      state.shopTags = Array.from(new Set(state.shopTags));
      state.isLoading = false;
    },
  },
});

// export const {  } = AllShopsReducer.actions;

export default AllShopsReducer.reducer;
