import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import * as DataType from 'data/postData';

const newsList = createSlice({
  name: 'news',
  initialState: {} as DataType.NewsList,
  reducers: {
    getNewsList: (
      state: Readonly<DataType.NewsList>,
      action: PayloadAction<DataType.NewsList>
    ) => ({
      ...state,
      ...action.payload,
    }),
  },
});

export const { getNewsList } = newsList.actions;
export default newsList.reducer;
