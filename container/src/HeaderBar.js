import React from 'react';
import { Avatar, makeStyles, Grid  } from "common/CommonIndex";
import Logo from "./images/Logo.png";
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
            <img src={Logo} style={{ height: 75 }} />
            {/* <Avatar alt="Vignesh Srinivasan" src="/static/images/VigneshS.jpeg" className={classes.large} /> */}
        </Grid>
        <Grid item xs={8} sm={8}>
            <NavBar />
        </Grid>
      </Grid>
    </div>
  );
}
