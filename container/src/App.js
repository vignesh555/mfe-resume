import React, { useRef, useEffect } from "react";

import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { theme } from "common/CommonIndex";
import { mount as mountObjective } from "objective/ObjectiveIndex";
import { mount as mountEducation } from "education/EducationIndex";
import { mount as mountExperience } from "experience/ExperienceIndex";
import { mount as mountSkills } from "skills/SkillsIndex";
import HeaderBar from "./HeaderBar";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  centerContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  paperWidth: {
    marginTop: theme.spacing(5),
  },
  objectiveContainer: {
    height: "100%",
    border: "1px solid #CCC",
  },
}));

const ObjectiveWrapper = () => {
  const classes = useStyles();
  const elObjectiveRef = useRef(null);
  useEffect(() => {
    if (elObjectiveRef.current) {
      mountObjective(elObjectiveRef.current);
    }
  }, []);
  return (
    <div className={classes.objectiveContainer} ref={elObjectiveRef}></div>
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

const App = () => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Paper elevation={3} className={classes.paperWidth}>
          <Box p={2}>
            <BrowserRouter>
              <HeaderBar />
              <Switch>
                <Route path="/" exact component={ObjectiveWrapper} />
                <Route path="/skills" component={SkillsWrapper} />
                <Route path="/education" component={EducationWrapper} />
                <Route path="/experience" component={ExperienceWrapper} />
              </Switch>
            </BrowserRouter>
          </Box>
        </Paper>
      </Container>
    </ThemeProvider>
  );
};

export default App;
