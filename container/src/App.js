import React, { useRef, useEffect } from "react";

import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from 'history';

import {
  theme,
  Box,
  CssBaseline,
  Container,
  Paper,
  makeStyles,
  ThemeProvider,
  Grid,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Typography,
} from "common/CommonIndex";

import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import EmailIcon from "@material-ui/icons/Email";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import ConstructionIcon from "@material-ui/icons/Build";
import WorkIcon from "@material-ui/icons/Work";

import Logo from "./images/Logo.png";
import {
  mount as mountObjective,
  ObjectiveWrapper,
} from "objective/ObjectiveIndex";
import { mount as mountEducation } from "education/EducationIndex";
import { mount as mountExperience } from "experience/ExperienceIndex";
import { mount as mountSkills, HomeSkillsWrapper } from "skills/SkillsIndex";
import HeaderBar from "./HeaderBar";


const history = createBrowserHistory();

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  centerContainer: {
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
  },
  rightContainer: {
    display: "flex",
    justifyContent: "right",
    padding: theme.spacing(0, 1, 0),
  },
  paperWidth: {
    margin: theme.spacing(5, 0),
  },
  objectiveContainer: {
    // height: "100%",
    // border: "1px solid #CCC",
    margin: theme.spacing(3, 0),
  },
  circleIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 48,
    height: 48,
    borderRadius: "50%",
    border: "2px solid #000",
    margin: theme.spacing(0, 1),
  },
  boxNavBar: {
    position: "fixed",
    border: "1px solid #CCC",
    top: "35%",
    marginLeft: theme.spacing(2),
  },
  centerText: {
    textAlign: "center",
  },
}));

const ObjectiveWrapperFn = () => {
  return (
    <>
      <Box id="objectiveLinks" pt={3}>
        <ObjectiveWrapper />
      </Box>
      <Box id="objectiveLinks" pt={3}>
        <HomeSkillsWrapper />
      </Box>
    </>
  );
};

const EducationWrapper = () => {
  const classes = useStyles();
  const elEducationRef = useRef(null);
  useEffect(() => {
    if (elEducationRef.current) {
      mountEducation(elEducationRef.current);
    }
  }, []);
  return (
    <div className={classes.objectiveContainer} ref={elEducationRef}></div>
  );
};

const ExperienceWrapper = () => {
  const classes = useStyles();
  const elExperienceRef = useRef(null);
  useEffect(() => {
    if (elExperienceRef.current) {
      mountExperience(elExperienceRef.current);
    }
  }, []);
  return (
    <div className={classes.objectiveContainer} ref={elExperienceRef}></div>
  );
};

const SkillsWrapper = () => {
  const classes = useStyles();
  const elSkillsRef = useRef(null);
  useEffect(() => {
    if (elSkillsRef.current) {
      mountSkills(elSkillsRef.current);
    }
  }, []);
  return <div className={classes.objectiveContainer} ref={elSkillsRef}></div>;
};

const App = (props) => {
  const classes = useStyles();
  const history = createBrowserHistory();

  console.log(history);

  const onClickSkills = () => history.push("/skills");
  const onClickExperience = () => history.push("/experience");
  const onClickHome = () => history.push("/");

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box marginTop={1}>
        <Grid container>
          <Grid item md={2}>
            <img src={Logo} style={{ height: 70 }} />
            <Box className={classes.boxNavBar}>
              <List component="nav">
                <ListItem onClick={onClickHome} button className={classes.centerContainer}>
                  <Box>
                    <AccountBoxIcon fontSize="medium" />
                    <Typography>About Me</Typography>
                  </Box>
                </ListItem>
                <Divider />
                <ListItem onClick={onClickSkills} button className={classes.centerContainer}>
                  <Box>
                    <ConstructionIcon fontSize="medium" />
                    <Typography>Skills</Typography>
                  </Box>
                </ListItem>
                <Divider />
                <ListItem onClick={onClickExperience} button className={classes.centerContainer}>
                  <Box>
                    <WorkIcon fontSize="medium" />
                    <Typography>Experience</Typography>
                  </Box>
                </ListItem>
              </List>
            </Box>
          </Grid>
          <Grid item md={8}>
            <Box id="contactLinks" className={classes.centerContainer}>
              <Box className={classes.circleIcon}>
                <EmailIcon fontSize="large" />
              </Box>
              <Box className={classes.circleIcon}>
                <LinkedInIcon fontSize="large" />
              </Box>
              <Box className={classes.circleIcon}>
                <WhatsAppIcon fontSize="large" />
              </Box>
            </Box>
            <Router history={history}>
              <Switch>
                <Route path="/" exact component={ObjectiveWrapperFn} />
                <Route path="/skills" component={SkillsWrapper} />
                <Route path="/experience" component={ExperienceWrapper} />
              </Switch>
            </Router>
          </Grid>
          <Grid item md={2} className={classes.rightContainer}>
            <Button
              variant="contained"
              color="secondary"
              style={{ height: 50 }}
            >
              Hire me
            </Button>
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
};

export default App;
