import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
  deleteBoardIdApi,
  fixBoardIdApi,
  getBoardApi,
  getBoardIdApi,
} from '../API/boardAPI';

export const __getBoard = createAsyncThunk(
  'getBoard',
  async (payload, thunkAPI) => {
    try {
      const response = await getBoardApi(payload);
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __getBoardId = createAsyncThunk(
  'getBoard_ID',
  async (payload, thunkAPI) => {
    try {
      const response = await getBoardIdApi(payload);
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __fixBoardId = createAsyncThunk(
  'fixBoard_ID',
  async (payload, thunkAPI) => {
    try {
      console.log(payload);
      const response = await fixBoardIdApi(payload.id, payload.data);

      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// delete

export const __deleteBoardId = createAsyncThunk(
  'fixBoard_ID',
  async (payload, thunkAPI) => {
    try {
      const response = await deleteBoardIdApi(payload);
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const boardSlice = createSlice({
  name: 'boards',
  initialState: {
    boards: [],
    board: {},
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: {
    // GET Request BoardList
    [__getBoard.pending]: (state) => {
      state.isLoading = true;
    },
    [__getBoard.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.boards = action.payload;
    },
    [__getBoard.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    // GET Request one Board Item
    [__getBoardId.pending]: (state) => {
      state.isLoading = true;
    },
    [__getBoardId.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.board = action.payload;
    },
    [__getBoardId.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    // PUT Request one Board Item(수정)
    [__fixBoardId.pending]: (state) => {
      state.isLoading = true;
    },
    [__fixBoardId.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.board = action.payload;
    },
    [__fixBoardId.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    // DELETE Request one Board Item(삭제)
    [__deleteBoardId.pending]: (state) => {
      state.isLoading = true;
    },
    [__deleteBoardId.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.board = {};
    },
    [__deleteBoardId.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default boardSlice;
