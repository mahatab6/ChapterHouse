import { createSlice } from "@reduxjs/toolkit";
import { Bounce, toast } from "react-toastify";

const initialState = {
  cardItems: [],
};

export const cardSlice = createSlice({
  name: "card",
  initialState: initialState,
  reducers: {
    addToCard: (state, action) => {
      const existingItem = state.cardItems.find(
        (item) => item._id === action.payload._id
      );
      if (!existingItem) {
        state.cardItems.push(action.payload);
        toast.success("Item added successfully!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      } else
        toast.error("Item already exists", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
    },
    removeItem: (state, action) => {
      state.cardItems = state.cardItems.filter(item => item._id !== action.payload._id)
    },
    clearCart: (state) => {
      state.cardItems = []
    }
  },
});

export const { addToCard, removeItem, clearCart } = cardSlice.actions;

export default cardSlice.reducer;
