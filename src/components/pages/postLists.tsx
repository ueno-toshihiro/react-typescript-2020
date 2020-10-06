import React, { FC } from 'react';
import { postData } from 'data/postData';
import Grid from '@material-ui/core/Grid';
import FeaturedPost from 'components/organisms/featuredPost';

const PostLists: FC = ():JSX.Element => {

  return (
    <Grid container spacing={2}>
      {Object.entries(postData).map(([slug, value]) => (
        <FeaturedPost key={slug} { ...value } path={`/blog/${slug}`} />
      ))}
    </Grid>
  )
}

export default PostLists;
