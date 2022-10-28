import { configureStore } from '@reduxjs/toolkit';
import { userSlice } from '../modules/Slice/userSlice';

export const store = configureStore({
  reducer: {
    users: userSlice.reducer
  },
})