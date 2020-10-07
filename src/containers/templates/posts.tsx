import React, { FC, useEffect } from 'react';
import { useLocation, Outlet } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getPosts } from '../../actions';
import { Grid } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import PageHeader from 'components/organisms/pageHeader';
import photo from 'static/images/park.jpg'

import { postData } from 'data/postData';

const Posts: FC = (): JSX.Element => {
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts(postData));
    // eslint-disable-next-line
  }, []);

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
