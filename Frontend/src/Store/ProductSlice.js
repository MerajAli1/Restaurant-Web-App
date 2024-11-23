import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  allProduct: [],
  isLoading: false,
  error: false,
};

const options = {
  method: "GET",
  url: "https://chinese-food-db.p.rapidapi.com/",
  headers: {
    "x-rapidapi-key": "ac4aab79f1msh5bbc81a078dd7d2p1993eajsn2de66297c5fe",
    "x-rapidapi-host": "chinese-food-db.p.rapidapi.com",
  },
};
export const fetchProduct = createAsyncThunk(
  "product/fetch",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.request(options);
      //   console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error.message);
      return rejectWithValue(error.message);
    }
  }
);

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProduct.pending, (state) => {
      state.isLoading = true;
      console.log("pending");
    });
    builder.addCase(fetchProduct.fulfilled, (state, action) => {
      state.isLoading = false;
      state.allProduct = action.payload;
      console.log("fulfilled");
    });
    builder.addCase(fetchProduct.rejected, (state) => {
      state.isLoading = false;
      state.allProduct = [];
      state.error = true;
      console.log("rejected");
    });
  },
});

const { actions, reducer } = productSlice;
export default reducer;
