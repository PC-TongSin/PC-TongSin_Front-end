import { configureStore } from '@reduxjs/toolkit';
import boardSlice from '../modules/Slice/boardSlice';
import { userSlice } from '../modules/Slice/userSlice';

export const store = configureStore({
  reducer: {
    users: userSlice.reducer,
    boards: boardSlice.reducer,
  },
})