import React, { FC } from 'react';
import Grid from '@material-ui/core/Grid';
import classNames from 'classnames';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import PageHeader from 'components/organisms/pageHeader';
import { useStyles } from 'components/styles';
import photo from 'static/images/flower.jpg';
import { NewsList } from 'data/postData';

interface HomeProps {
  list: NewsList;
}

const Home: FC<HomeProps> = ({
  list
}: HomeProps): JSX.Element => {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item xs={12}>
        <PageHeader
          description={'Front Engineer Blog Home'} 
          title="HOME" 
          image={photo}
        />
      </Grid>
      <Grid item xs={12}>
        <Paper elevation={0}>
          <p className={classNames(classes.paragraph, classes.textHeaderSpace)}>
            The Front-end は React で作っています。
          </p>
        </Paper>

        <Paper elevation={0}>
          <Grid item xs={12}>
            <Typography variant="h3" className={classNames(classes.h3, classes.listHeader)}>
              News
            </Typography>
            <div>
              <List className={classes.scrollList}>
                {
                  list && Object.entries(list).map(([key, item]): JSX.Element => (
                    <React.Fragment key={key}>
                      <ListItem className={classes.listBorder}>
                        <ListItemText
                          primary={
                            <React.Fragment>
                              <span className={classes.textP12}>{item.title}</span>
                              <span className={classNames(classes.textP8, classes.spaceLR1)}>{item.date}</span>
                            </React.Fragment>
                          }
                          secondary={<span className={classes.textP10}>{item.description}</span>}
                        />
                      </ListItem>
                    </React.Fragment>
                  )).reverse()
                }
              </List>
            </div>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  )
}

export default Home;
