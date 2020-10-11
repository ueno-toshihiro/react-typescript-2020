import React, { FC } from 'react';
import { useParams } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import { useSelector } from 'react-redux';
import { BlogState } from 'data/postData';

import { useStyles } from 'components/styles';
import { Grid, IconButton, Paper, Typography } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const Post: FC = ():JSX.Element => {
  const classes = useStyles();
  const { slug } = useParams();
  const history = createBrowserHistory();
  const postList = useSelector<BlogState, BlogState['postList']>((state) => state.postList);

  if (!postList) return <div />;
  const { title, description } = postList[slug];

  return (
    <Grid item xs={12}>
      <Paper elevation={0}>
        <div className={classes.textHeaderSpace}>
          <Typography  className={classes.h3} variant="h3" gutterBottom>
            {title}
          </Typography>
          <p className={classes.paragraph}>{description}</p>
        </div>
      </Paper>
      <IconButton
        aria-label="Prev"
        className={classes.textLink}
        onClick={() => {history.back()}}
      >
        <ArrowBackIcon fontSize="large" />
      </IconButton>
    </Grid>
  )
}

export default Post;
