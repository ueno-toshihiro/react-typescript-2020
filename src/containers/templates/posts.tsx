import React from 'react';
import { useLocation, Outlet } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import PageHeader from 'components/organisms/pageHeader';
import photo from 'static/images/park.jpg'

const Posts = (): JSX.Element => {
  const location = useLocation();

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
