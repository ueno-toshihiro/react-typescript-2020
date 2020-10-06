import React, { FC } from 'react';
import Grid from '@material-ui/core/Grid';
import MainFeaturedPost from 'components/organisms/mainFeaturedPost';

interface PageHeaderProps {
  description: string;
  image: any;
  title: string;
}

const PageHeader: FC<PageHeaderProps> = ({
  image,
  title,
  description,
}): JSX.Element => {
  return (
    <Grid item xs={12}>
      <MainFeaturedPost
        image={image}
        imageText={title}
        title={title}
        description={description}
      />
    </Grid>
  )
}

export default PageHeader;
