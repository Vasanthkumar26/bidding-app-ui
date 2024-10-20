import { createSlice } from "@reduxjs/toolkit";

export const biddingAppSlice = createSlice({
  name: "biddingApp",
  initialState: {
    userDetails: {},
    items: [],
    selectedItem: {},
    openBidPopup: false,
    openNewItemPopup: false,
    isEditingInNewPopup : false,
  },
  reducers: {
    updateUserDetails: (state, action) => {
      state.userDetails = action.payload;
    },
    getAllItemDetails: (state, action) => {
      state.items = action.payload;
    },
    updateSeletedItemDetails: (state, action) => {
      state.selectedItem = action.payload;
    },
    resetDetails: (state, action) => {
      state.userDetails = {};
      state.selectedItem = {};
    },
    updateBidPopupState: (state, action) => {
      state.openBidPopup = action.payload;
    },
    updateNewItemPopupState: (state, action) => {
      state.openNewItemPopup = action.payload.openPopup;
      state.isEditingInNewPopup = action.payload.isEditing;
    },
  },
});

export const {
  updateUserDetails,
  getAllItemDetails,
  updateSeletedItemDetails,
  resetDetails,
  updateBidPopupState,
  updateNewItemPopupState,
} = biddingAppSlice.actions;

export default biddingAppSlice.reducer;
