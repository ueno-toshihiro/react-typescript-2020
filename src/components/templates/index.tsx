import React from 'react';
import Grid from '@material-ui/core/Grid';
import classNames from 'classnames';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import PageHeader from 'components/organisms/pageHeader';
import { newsData } from 'data/postData';
import { useStyles } from 'components/styles';
import photo from 'static/images/flower.jpg';

const Home = (): JSX.Element => {
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
              <List>
                {
                  Object.entries(newsData).map(([key, value]): JSX.Element => (
                    <React.Fragment key={key}>
                      <ListItem className={classes.listBorder}>
                        <ListItemText
                          primary={
                            <React.Fragment>
                              <span className={classes.textP12}>{value.title}</span>
                              <span className={classNames(classes.textP8, classes.spaceLR1)}>{value.date}</span>
                            </React.Fragment>
                          }
                          secondary={<span className={classes.textP10}>{value.description}</span>}
                        />
                      </ListItem>
                    </React.Fragment>
                  ))
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
