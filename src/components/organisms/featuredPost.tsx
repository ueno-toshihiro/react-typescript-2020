import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';

const useStyles = makeStyles({
  card: {
    display: 'flex',
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 160,
  },
});

interface FeaturedPostProps {
  date: string;
  description: string;
  image: any;
  imageText: string;
  path: string;
  title: string;
}

const FeaturedPost: FC<FeaturedPostProps> = ({
  date,
  description,
  image,
  imageText,
  path,
  title
}: FeaturedPostProps) => {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <Grid item xs={6}>
      <CardActionArea component="a" onClick={() => navigate(path)}>
        <Card className={classes.card}>
          <div className={classes.cardDetails}>
            <CardContent>
              <Typography component="h2" variant="h5">
                {title}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                {date}
              </Typography>
              <Typography variant="body1" gutterBottom>
                {description}
              </Typography>
            </CardContent>
          </div>
          <Hidden xsDown>
            <CardMedia className={classes.cardMedia} image={image} title={imageText} />
          </Hidden>
        </Card>
      </CardActionArea>
    </Grid>
  );
}

export default FeaturedPost;
