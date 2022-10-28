import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { addCommentApi } from "../API/commentAPI";

export const __addComment = createAsyncThunk(
  "addComment",
  async (payload, thunkAPI) => {
    try {
      const response = await addCommentApi(payload);
      return thunkAPI.fulfillWithValue(response)
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const commentSlice = createSlice({
  name: "comments",
  initialState: {
    comment: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [__addComment.pending]: (state) => {
      state.isLoading = true;
    },
    [__addComment.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.comment.push(action.payload);
    },
    [__addComment.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  }
})