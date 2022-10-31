import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { loginUserApi } from '../API/userAPI';

export const __loginUser = createAsyncThunk(
  'loginUser',
  async (payload, thunkAPI) => {
    try {
      const response = await loginUserApi(payload);
      console.log(response);
      localStorage.setItem('accessToken', response.headers.authorization);
      localStorage.setItem('refreshToken', response.headers["refresh-token"]);
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
  reducers: {
    handleLoginDispatch: (state, action) => {
      state.isLogin = true;
    },
  },
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
