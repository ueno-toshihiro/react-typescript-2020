import React, { FC } from 'react';

import { useSelector } from 'react-redux';
import { BlogState } from 'data/postData';

import Grid from '@material-ui/core/Grid';
import FeaturedPost from 'components/organisms/featuredPost';

const PostList: FC = ():JSX.Element => {
  const postList =
    useSelector<BlogState, BlogState['postList']>((state) => state.postList);

  return (
    <Grid container spacing={2}>
      {postList && Object.entries(postList).map(([slug, value]) => (
        <FeaturedPost key={slug} { ...value } path={`/blog/${slug}`} />
      ))}
    </Grid>
  )
}

export default PostList;
