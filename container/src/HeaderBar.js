import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import NavBar from './Navbar';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
    paddingTop: 0,
  },
  large: {
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
}));

export default function HeaderBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={4} sm={4}>
            <Avatar alt="Vignesh Srinivasan" src="/static/images/VigneshS.jpeg" className={classes.large} />
        </Grid>
        <Grid item xs={8} sm={8}>
            <NavBar />
        </Grid>
      </Grid>
    </div>
  );
}
