import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
  postUserApi,
  getUsernameInfoApi,
  getNicknameInfoApi,
} from '../API/userAPI';

export const __postUser = createAsyncThunk(
  'registerUser',
  async (payload, thunkAPI) => {
    try {
      const response = await postUserApi(payload);
      return thunkAPI.fulfillWithValue(response);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// username 불러오는 reducer (in 상세페이지)
export const __getUsername = createAsyncThunk(
  'getUsername',
  async (payload, thunkAPI) => {
    try {
      const response = await getUsernameInfoApi(payload);
      return thunkAPI.fulfillWithValue(response.data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// 닉네임 불러오는 reducer (in 상세페이지)
export const __getNickname = createAsyncThunk(
  'getNickname',
  async (payload, thunkAPI) => {
    try {
      const response = await getNicknameInfoApi(payload);
      return thunkAPI.fulfillWithValue(response.data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const userSlice = createSlice({
  name: 'users',
  initialState: {
    userInfo: [],
    username: null,
    nickname: null,
  },
  reducers: {},
  extraReducers: {
    [__postUser.fulfilled]: (state, action) => {
      state.userInfo.push(action.payload);
    },
    [__getUsername.fulfilled]: (state, action) => {
      // console.log("유저네임임", action.payload);
      state.username = action.payload;
    },
    [__getNickname.fulfilled]: (state, action) => {
      // console.log("닉네임임", action.payload);
      state.nickname = action.payload;
    },
  },
});
