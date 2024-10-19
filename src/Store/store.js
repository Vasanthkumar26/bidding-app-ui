import { configureStore } from '@reduxjs/toolkit'
import biddingAppReducer from '../Reducer/biddingAppSlice'

export default configureStore({
  reducer: {
    biddingApp: biddingAppReducer
  },
})