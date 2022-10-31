import { configureStore } from '@reduxjs/toolkit';
import boardSlice from '../modules/Slice/boardSlice';
import { userSlice } from '../modules/Slice/userSlice';
import { loginSlice } from '../modules/Slice/loginSlice';
import { commentSlice } from '../modules/Slice/commentSlice';

export const store = configureStore({
  reducer: {
    users: userSlice.reducer,
    boards: boardSlice.reducer,
    login: loginSlice.reducer,
    comment: commentSlice.reducer,
  },
})