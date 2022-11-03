import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
  addCommentApi,
  delCommentApi,
  editCommentApi,
} from '../API/commentAPI';

export const __addComment = createAsyncThunk(
  'addComment',
  async (payload, thunkAPI) => {
    try {
      await addCommentApi(payload);
      return thunkAPI.fulfillWithValue(payload);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __delComment = createAsyncThunk(
  'delComment',
  async (payload, thunkAPI) => {
    try {
      await delCommentApi(payload);
      thunkAPI.fulfillWithValue(payload);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __editComment = createAsyncThunk(
  'editComment',
  async (payload, thunkAPI) => {
    try {
      await editCommentApi(payload);
      return thunkAPI.fulfillWithValue(payload);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const commentSlice = createSlice({
  name: 'comments',
  initialState: {
    comment: [],
    isCommentChanged: false,
    isLoading: false,
    error: null,
  },
  reducers: {
    resetStatusComment: (state, _) => {
      state.isCommentChanged = false;
    },
  },
  extraReducers: {
    // POST Request Comment
    [__addComment.pending]: (state) => {
      state.isLoading = true;
    },
    [__addComment.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isCommentChanged = true;
      state.comment.push(action.payload);
    },
    [__addComment.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    // DELETE Request Comment
    [__delComment.pending]: (state) => {
      state.isLoading = true;
    },
    [__delComment.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isCommentChanged = true;
      state.comment = state.comment.filter(
        (item) => item.id !== action.payload
      );
    },
    [__delComment.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    // EDIT Request Comment
    [__editComment.pending]: (state) => {
      state.isLoading = true;
    },
    [__editComment.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isCommentChanged = true;
      state.comment = state.comment.map((item) => {
        return item.id === action.payload.id ? action.payload : item;
      });
    },
    [__editComment.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    },
  },
});

export const { resetStatusComment } = commentSlice.actions;
export default commentSlice.reducer;
