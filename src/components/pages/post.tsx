import React, { FC } from 'react';
import { useParams } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import { useSelector } from 'react-redux';
import { BlogState } from 'reducer';

import { useStyles } from 'components/styles';
import { Grid, IconButton, Paper, Typography } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const Post: FC = ():JSX.Element => {
  const { slug } = useParams();
  const history = createBrowserHistory();
  const postData = useSelector<BlogState, BlogState['postData']>((state) => state.postData);

  const post = postData[slug];
  const classes = useStyles();
  const { title, description } = post;
  

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
