import { Reducer } from 'redux';
import {
  NewsAction,
  PostAction,
  BlogActionType as Type
} from 'actions';
import * as DataType from 'data/postData';

export type BlogState = {
  postData: DataType.PostLists;
  newsData: DataType.NewsList
};

export const initialState: BlogState = { 
  newsData: {},
  postData: {},
};

export const blogReducer: Reducer<BlogState, NewsAction | PostAction> = (
  state: BlogState = initialState,
  action: NewsAction | PostAction,
): BlogState => {
  switch (action.type) {
    case Type.GET_NEWS:
      return {
        ...state,
        newsData: action.payload,
      };
    case Type.GET_POSTS:
      return {
        ...state,
        postData: action.payload,
      };
    default: {
      return state;
    }
  }
};
