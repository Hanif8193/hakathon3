"use client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

export const cartSlice = createSlice({
name: "cart",
initialState: [] as CartItem[],
reducers: {
  addToCart(state, action: PayloadAction<CartItem>) {
    const { id } = action.payload;
    const existingItem = state.find((item) => item.id === id);
    if (existingItem) {
      existingItem.quantity++;
    } else {
      state.push({ ...action.payload, quantity: 1 });
    }
  },
  removeFromCart(state, action: PayloadAction<string>) {
    const id = action.payload;
    const existingItem = state.find((item) => item.id === id);
    if (existingItem) {
      if (existingItem.quantity === 1) {
        return state.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
      }
    }
  },
},




})
export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;