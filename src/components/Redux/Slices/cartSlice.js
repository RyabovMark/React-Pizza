import {createSlice} from "@reduxjs/toolkit";

export const initialState = {
  items: [],
  totalPrice: 0,
  // pizzaCounter: 0,
};

const checkTotalPrice = (state) => {
  state.totalPrice = state.items.reduce((sum, current) => {
    return sum + current.price * current.count;
  }, 0);
}

// export const checkCounter = (state) => {
//   state.pizzaCounter = state.cart.items.reduce((sum, current) => {
//     return sum + current.count;
//   }, 0);
// }

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const findItem = state.items.find((obj) =>
        obj.id === action.payload.id &&
        obj.type === action.payload.type &&
        obj.size === action.payload.size
      );

      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({
            ...action.payload,
            count: 1
          },
        )
      }
      checkTotalPrice(state);
      // checkCounter(state);
    },
    plusItem: (state, action) => {
      const findItem = state.items.find((obj) => obj.id === action.payload);
      if (findItem) {
        findItem.count++;
      }
    },
    minusItem: (state, action) => {
      const findItem = state.items.find((obj) => obj.id === action.payload);
      if (findItem.count > 1) {
        findItem.count--;
      } else {
        state.items = state.items.filter(obj => obj.id !== action.payload);
      }
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((obj) => obj.id !== action.payload);
      checkTotalPrice(state);
      // checkCounter(state);
    },
    clearItems: (state) => {
      state.items = [];
      checkTotalPrice(state);
      // checkCounter(state);
    },
  },
});

export const selectedCart = (state) => state.cart;

export const {
  addItem,
  removeItem,
  clearItems,
  plusItem,
  minusItem,
} = cartSlice.actions;

export default cartSlice.reducer;
