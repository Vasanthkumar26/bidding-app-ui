import { createSlice } from "@reduxjs/toolkit";

export const biddingAppSlice = createSlice({
  name: "biddingApp",
  initialState: {
    userDetails: {},
    items: [],
    selectedItem: {},
  },
  reducers: {
    updateUserDetails: (state, action) => {
      state.userDetails = action.payload;
    },
    getAllItemDetails: (state, action) => {
      state.items = action.payload;
    },
    updateSeletedItemDetails: (state, action) => {
      state.selectedItem = action.payload
    },
    resetDetails: (state, action) => {
      state.userDetails = {};
      state.selectedItem = {}
    }
  },
});

export const { updateUserDetails, getAllItemDetails, updateSeletedItemDetails, resetDetails } = biddingAppSlice.actions;

export default biddingAppSlice.reducer;
