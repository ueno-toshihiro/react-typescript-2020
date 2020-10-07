import {
  NewsList,
  PostLists,
} from 'data/postData';


export const BlogActionType = {
  GET_NEWS: 'GET_NEWS',
  GET_POSTS: 'GET_POSTS',
} as const;

export type NewsAction = {
  type: 'GET_NEWS';
  payload: NewsList;
};

export type PostAction = {
  type: 'GET_POSTS';
  payload: PostLists;
};


export const getNews = (newsData: NewsList): NewsAction => ({
  type: BlogActionType.GET_NEWS,
  payload: newsData,
});

export const getPosts = (postData: PostLists): PostAction => ({
  type: BlogActionType.GET_POSTS,
  payload: postData,
});
