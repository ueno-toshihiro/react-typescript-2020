import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import * as DataType from 'data/postData';

const initialState: DataType.PostList = {};

export const postList = createSlice({
  name: 'post',
  initialState,
  reducers: {
    getPostList: (
      state: Readonly<DataType.PostList>,
      action: PayloadAction<DataType.PostList>
    ) => ({
      ...state,
      ...action.payload,
    }),
  },
});

export const { getPostList } = postList.actions;
export default postList.reducer;
