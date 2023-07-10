import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import NavBar from './Navbar';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
}));

export default function HeaderBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={4} sm={4}>
            <Typography variant="h4">
                Vignesh Srinivasan
            </Typography>
        </Grid>
        <Grid item xs={8} sm={8}>
            <NavBar />
        </Grid>
      </Grid>
    </div>
  );
}
