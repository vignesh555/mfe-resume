import React from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import ProfileImage from "./images/VigneshS.jpeg";

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
    height: '100%',
  },
  profilePic: {},
}));

const App = () => {
  const classes = useStyles();
  return (
    <div className={classes.profileInformation}>
      <Box paddingX={2} paddingY={2}>
        <Typography variant="h4">Hi There,</Typography>
      </Box>
      <Box paddingX={2} paddingY={1}>
        <Typography variant="h4">I am Vignesh Srinivasan,</Typography>
      </Box>
      <img src={ProfileImage} className={classes.profileImage} />
      <Box paddingX={2} paddingY={1}>
        <Typography variant="h4">Javascript Developer</Typography>
      </Box>
      <Box paddingX={2} paddingY={1}>
        <Typography variant="h4">11 Years of Experience</Typography>
      </Box>
    </div>
  );
};

export default App;
