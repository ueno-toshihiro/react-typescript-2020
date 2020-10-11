import { combineReducers } from 'redux';
import newsList from 'features/newsList';
import postList from 'features/postList';

export const rootReducer = combineReducers({
  newsList,
  postList,
});



