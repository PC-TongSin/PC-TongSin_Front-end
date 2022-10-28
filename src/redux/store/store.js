import { configureStore } from '@reduxjs/toolkit';
import { userSlice } from '../modules/userSlice';

export const store = configureStore({
  reducer: {
    users: userSlice.reducer
  },
})