import _ from 'lodash';
import React, { FC, useEffect } from 'react';
import { useLocation, Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getPostList } from 'features/postList';
import { Grid } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import PageHeader from 'components/organisms/pageHeader';
import photo from 'static/images/park.jpg';
import { BlogState, postData } from 'data/postData';

const Posts: FC = (): JSX.Element => {
  const location = useLocation();
  const dispatch = useDispatch();
  const postList =
    useSelector<BlogState, BlogState['postList']>((state) => state.postList);

  useEffect(() => {
    if (_.isEqual(postList, postData)) {
      return;
    }
    dispatch(getPostList(postData));
  }, [dispatch, postList]);

  return (
    <Grid container>
      <Grid container item xs={12}>
        {
          location.pathname === '/blog' && (
            <React.Fragment>
              <PageHeader
                description={'技術ブログ'}
                title="BLOG"
                image={photo}
              />
              <Divider />
            </React.Fragment>
          )
        }
        <Outlet />
      </Grid>
    </Grid>
  )
}

export default Posts;
