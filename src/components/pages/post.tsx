import React, { FC } from 'react';
import { useParams } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { postData } from 'data/postData';
import { useStyles } from 'components/styles';
import { Grid, IconButton, Paper, Typography } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const Post: FC = ():JSX.Element => {
  const { slug } = useParams();
  const history = createBrowserHistory();
  const post = postData[slug];
  const { title, description } = post;
  const classes = useStyles();

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
