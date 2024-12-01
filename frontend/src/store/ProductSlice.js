import { createSlice } from "@reduxjs/toolkit";
import { DUMMY } from "../data/DummyData";

const initialState = {
  products: DUMMY,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    createTask(state, action) {
      state.products.push(action.payload);
    },

    deleteTask(state, action) {
      state.products.filter((prod) => prod.id !== action.payload.id);
    },

    updateTask(state, action) {
      console.log("called");

      const existingProduct = state.products.find(
        (prod) => prod.id === action.payload.id
      );

      if (existingProduct) {
        Object.assign(existingProduct, action.payload);
        // existingProduct.name = action.payload.name;
        // existingProduct.description = action.payload.description;
        // existingProduct.price = action.payload.price;
      }
    },
  },
});

export const productActions = productSlice.actions;
export default productSlice.reducer;
