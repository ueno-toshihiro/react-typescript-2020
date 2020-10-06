import React, { FC } from 'react';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { useStyles } from 'components/styles';
import LinkButton from 'components/molecules/linkButton';
import { navigationItems } from 'data/postData';


const Header: FC = (): JSX.Element => {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item xs={12} sm={6}>
        <Toolbar className={classes.toolbar}>
          <Typography
            component="h1"
            variant="h5"
            color="inherit"
            align="left"
            noWrap
            className={classes.toolbarTitle}
          >
            THE FRONT-END
          </Typography>
        </Toolbar>
      </Grid>
      
      <Grid item xs={12} sm={6} className={classes.toolbarSecondary}>
        <Toolbar component="nav" variant="dense">
          {navigationItems.map((section, index) => (
            <LinkButton key={index} path={section.path}>
              {section.title}
            </LinkButton>
          ))}
        </Toolbar>
      </Grid>
    </Grid>
  )
}

export default Header;
