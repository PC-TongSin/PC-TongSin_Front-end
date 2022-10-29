import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getBoardApi } from "../API/boardAPI";

export const __getBoard = createAsyncThunk(
  "getBoard",
  async (payload, thunkAPI) => {
    try {
      const response = await getBoardApi(payload);
      return thunkAPI.fulfillWithValue(response);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const boardSlice = createSlice({
  name: "boards",
  initialState: {
    boards: [],
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
  }
});

export default boardSlice