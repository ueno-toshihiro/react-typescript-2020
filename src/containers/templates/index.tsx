import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BlogState } from 'reducer';
import { getNews } from 'actions';
import Home from 'components/templates'
import { newsData } from 'data/postData';


const HomeContainer: FC = (): JSX.Element => {
  const dispatch = useDispatch();
  const news = useSelector<BlogState, BlogState['newsData']>((state) => state.newsData);

  useEffect(() => {
    dispatch(getNews(newsData));
  });


  return <Home list={news} />
}

export default HomeContainer;
