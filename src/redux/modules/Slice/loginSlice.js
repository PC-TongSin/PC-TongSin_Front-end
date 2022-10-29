import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { loginUserApi } from '../API/userAPI';

export const __loginUser = createAsyncThunk(
  'loginUser',
  async (payload, thunkAPI) => {
    try {
      const response = await loginUserApi(payload);
      localStorage.setItem('accessToken', response.headers.authorization);
      return thunkAPI.fulfillWithValue(payload);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const loginSlice = createSlice({
  name: 'loginUser',
  initialState: {
    loginInfo: [],
  },
  reducers: {},
  extraReducers: {
    [__loginUser.fulfilled]: (state, action) => {
      state.loginInfo.push(action.payload);
    },
    [__loginUser.rejected]: (state, action) => {
      console.log(action.payload);
    },
  },
});

export default loginSlice.reducer;
