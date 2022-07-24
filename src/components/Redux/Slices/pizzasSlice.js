import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPizzas = createAsyncThunk('pizza/fetchPizzas',
  async (params, thunkAPI) => {
    const {order, sortBy, category, numPage, search} = params;
    const {data} = await axios.get(`https://62b626ae42c6473c4b403a58.mockapi.io/pizzas?${numPage}&${category}&sortBy=${sortBy}&order=${order}${search}`);


    if (data.length === 0) {
      return thunkAPI.rejectWithValue('SinglePage array is empty');
    }

    return thunkAPI.fulfillWithValue(data);
  }
);

export const initialState = {
  items: [],
  status: '',
};

export const pizzasSlice = createSlice({
  name: 'pizza',
  initialState,
  extraReducers: {
    [fetchPizzas.pending]: (state) => {
      state.status = 'request is loading';
      state.items = [];
    },
    [fetchPizzas.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.status = 'request is done';
    },
    [fetchPizzas.rejected]: (state) => {
      state.status = 'reject request';
      state.items = [];
    }
  },
});

export const selectedPizza = (state) => state.pizza;

export default pizzasSlice.reducer;


