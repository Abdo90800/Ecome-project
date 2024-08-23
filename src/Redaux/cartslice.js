import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItemToCart: (state, action) => {
      const item = action.payload;
      const existingItem = state.items.find(
        (cartItem) => cartItem.id === item.id
      );

      if (existingItem) {
        // لو المنتج موجود، يمكن زيادة الكمية بدلاً من إضافة منتج جديد
        existingItem.quantity += item.quantity;
      } else {
        // لو المنتج مش موجود، يضاف للسلة
        state.items.push({ ...item, quantity: item.quantity || 1 });
      }
    },
    removeItemFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addItemToCart, removeItemFromCart } = cartSlice.actions;
export default cartSlice.reducer;
