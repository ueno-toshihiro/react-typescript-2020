import React, { FC } from 'react';

import { useSelector } from 'react-redux';
import { BlogState } from 'reducer';

import Grid from '@material-ui/core/Grid';
import FeaturedPost from 'components/organisms/featuredPost';

const PostLists: FC = ():JSX.Element => {
  const postData = useSelector<BlogState, BlogState['postData']>((state) => state.postData);

  return (
    <Grid container spacing={2}>
      {Object.entries(postData).map(([slug, value]) => (
        <FeaturedPost key={slug} { ...value } path={`/blog/${slug}`} />
      ))}
    </Grid>
  )
}

export default PostLists;
