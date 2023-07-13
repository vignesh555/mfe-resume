import React from "react";
import {
  Typography,
  Box,
  Grid,
  makeStyles,
  Chip,
  Divider,
  Button,
  Paper,
} from "common/CommonIndex";

import EmailIcon from "@material-ui/icons/Email";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import CallIcon from "@material-ui/icons/Call";
import VigneshS from "./images/VigneshS.jpeg";

import { OBJECTIVE_DATA } from "./data";

const useStyles = makeStyles((theme) => ({
  profileImage: {
    width: 200,
    height: 200,
    borderRadius: "100%",
  },
  profileInformation: {
    padding: theme.spacing(3),
  },
  profilePic: {
    borderRadius: "100%",
    width: "150px",
    height: "150px",
  },
  circleIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 48,
    height: 48,
    borderRadius: "50%",
    border: "2px solid #000",
  },
  container: {
    display: "flex",
    gap: 16,
    paddingBottom: theme.spacing(4),
    justifyContent: "center",
  },
  spacingChip: {
    margin: theme.spacing(0, 1),
  },
  profilePicContainer: {
    alignItems: "center",
    textAlign: "center",
  },
}));

const App = () => {
  const classes = useStyles();
  return (
    <Paper elevation={3}>
      <Box p={4}>
        <Grid container className={classes.profilePicContainer}>
          <Grid item sm={12} md={12}>
            <img src={VigneshS} className={classes.profilePic} />
          </Grid>
          <Grid item sm={12} md={12}>
            <Box>
              <Typography variant="h4">VIGNESH SRINIVASAN</Typography>
            </Box>
            <Box p={1}>
              <Typography component="span" variant="h5">vigneshdotnet@gmail.com</Typography>
              <Typography component="span" variant="h5"> | </Typography>
              <Typography component="span" variant="h5">+6586943235</Typography>
            </Box>
            <Box p={2} paddingBottom={0}>
              <Typography variant="h6">{OBJECTIVE_DATA}</Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
};

export default App;

{
  /* <Grid item sm={12} md={8}>
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
        </Grid> */
}
{
  /* <Grid container>
        <Grid item sm={12} md={12}>
          <Typography variant="h5">Key Skills</Typography>
          <Divider />
          <Box m={2}>
            <Chip
              label="Javascript"
              classes={{ root: classes.spacingChip }}
              color="primary"
              size="medium"
            />
            <Chip
              label="React"
              classes={{ root: classes.spacingChip }}
              color="primary"
              size="medium"
            />
            <Chip
              label="Node JS"
              classes={{ root: classes.spacingChip }}
              color="primary"
              size="medium"
            />
          </Box>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item sm={12} md={12}>
          <Typography variant="h5">Strength</Typography>
          <Divider />
          <Box m={2}>
            <Chip
              label="Hard Work"
              classes={{ root: classes.spacingChip }}
              color="secondary"
              size="medium"
            />
            <Chip
              label="Dedication"
              classes={{ root: classes.spacingChip }}
              color="secondary"
              size="medium"
            />
            <Chip
              label="Smart Work - Believe Smart work comes from Hard work"
              classes={{ root: classes.spacingChip }}
              color="secondary"
              size="medium"
            />
            <Chip
              label="Friendly"
              classes={{ root: classes.spacingChip }}
              color="secondary"
              size="medium"
            />
            <Chip
              label="Listening"
              classes={{ root: classes.spacingChip }}
              color="secondary"
              size="medium"
            />
            <Chip
              label="Teaching Team"
              classes={{ root: classes.spacingChip }}
              color="secondary"
              size="medium"
            />
            <Chip
              label="Learning from Team"
              classes={{ root: classes.spacingChip }}
              color="secondary"
              size="medium"
            />
          </Box>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item sm={12} md={12}>
          <Typography variant="h5">Objective</Typography>
          <Divider />
          <Box paddingX={2} paddingY={1} paddingBottom={5}>
            <Typography variant="h6">{OBJECTIVE_DATA}</Typography>
          </Box>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item sm={12}>
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
      </Grid> */
}
