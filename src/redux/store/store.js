import { configureStore } from '@reduxjs/toolkit';
import boardSlice from '../modules/Slice/boardSlice';
import { userSlice } from '../modules/Slice/userSlice';
import { loginSlice } from '../modules/Slice/loginSlice';

export const store = configureStore({
  reducer: {
    users: userSlice.reducer,
    boards: boardSlice.reducer,
    login: loginSlice.reducer,
  },
})