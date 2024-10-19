import { createSlice } from '@reduxjs/toolkit'

export const biddingAppSlice = createSlice({
  name: 'biddingApp',
  initialState: {
    userDetails: {},
    items: [],
    selectedItem: {},
  },
  reducers: {
  },
})

export const {  } = biddingAppSlice.actions

export default biddingAppSlice.reducer