import React from "react";
import { Typography, Box, Grid, makeStyles } from "common/CommonIndex";

import EmailIcon from '@material-ui/icons/Email';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import CallIcon from '@material-ui/icons/Call';

import { OBJECTIVE_DATA } from "./data";

const useStyles = makeStyles((theme) => ({
  profileImage: {
    width: 200,
    height: 200,
    borderRadius: "100%",
  },
  profileInformation: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    textAlign: "center",
  },
  profilePic: {},
  circleIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 48,
    height: 48,
    borderRadius: '50%',
    border: '2px solid #000',
  },
  container: {
    display: 'flex',
    gap: 16,
    paddingBottom: theme.spacing(4),
    justifyContent: 'center',
  },
}));

const App = () => {
  const classes = useStyles();
  return (
    <div className={classes.profileInformation}>
      <Grid container justifyContent="center" alignItems="center">
        <Grid item sm={12} md={12}>
          <Box paddingX={2} paddingY={2} paddingTop={5}>
            <Typography variant="h4">Hi There,</Typography>
          </Box>
          <Box paddingX={2} paddingY={1}>
            <Typography variant="h4">I am Vignesh Srinivasan,</Typography>
          </Box>
          <Box paddingX={2} paddingY={1}>
            <Typography variant="h4">Javascript Developer</Typography>
          </Box>
          <Box paddingX={2} paddingY={1} paddingBottom={5}>
            <Typography variant="h4">11 Years of Experience</Typography>
          </Box>
        </Grid>
        <Grid item sm={12} md={8}>
          <Box paddingX={2} paddingY={1} paddingBottom={5}>
            <Typography variant="h6">
             {OBJECTIVE_DATA}
            </Typography>
          </Box>
          <div className={classes.container}>
            <Box className={classes.circleIcon}>
              <EmailIcon fontSize="large" />
           </Box>
           <Box className={classes.circleIcon}>
              <LinkedInIcon fontSize="large" />
           </Box>
           <Box className={classes.circleIcon}>
              <WhatsAppIcon fontSize="large" />
           </Box>
           <Box className={classes.circleIcon}>
              <CallIcon fontSize="large" />
           </Box>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
