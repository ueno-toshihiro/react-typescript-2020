import _ from 'lodash';
import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Home from 'components/templates'
import { BlogState, newsData } from 'data/postData';
import { getNewsList } from 'features/newsList';

const HomeContainer: FC = (): JSX.Element => {
  const dispatch = useDispatch();
  const newsList =
    useSelector<BlogState, BlogState['newsList']>((state) => state.newsList);

  useEffect(() => {
    if (_.isEqual(newsList, newsData)) {
      return;
    }
    dispatch(getNewsList(newsData));
  }, [dispatch, newsList]);


  return <Home list={newsList} />
}

export default HomeContainer;
