import React from "react";
import {
  Paper,
  makeStyles,
  Grid,
  Avatar,
  Typography,
  Box,
  Divider,
} from "common/CommonIndex";
import SkillsStructure from "./SkillsStructure";
import {
  TITLE_MAP,
  LANGUAGE,
  FRONTEND_SKILLS,
  BACKEND_SKILLS,
  DEPLOYMENT_TOOLS,
  UNIT_TESTING_LIBRARY,
  DATABASE_SKILLS,
} from "./data";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    overflow: "hidden",
    padding: theme.spacing(3),
  },
  paper: {
    maxWidth: 400,
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2),
  },
  skillsTitle: {},
  skillName: {
    fontWeight: "bold",
  },
  titleCase: {
    margin: theme.spacing(2),
  },
}));


const App = () => {
  const classes = useStyles();
  return (
    <Paper elevation={3}>
      <Box p={2}>
        <SkillsStructure title={TITLE_MAP.LANGUAGE} skills={LANGUAGE} />
        <SkillsStructure
          title={TITLE_MAP.FRONTEND_SKILLS}
          skills={FRONTEND_SKILLS}
        />
        <SkillsStructure
          title={TITLE_MAP.UNIT_TESTING_LIBRARY}
          skills={UNIT_TESTING_LIBRARY}
        />
        <SkillsStructure
          title={TITLE_MAP.BACKEND_SKILLS}
          skills={BACKEND_SKILLS}
        />
        <SkillsStructure
          title={TITLE_MAP.DATABASE_SKILLS}
          skills={DATABASE_SKILLS}
        />
        <SkillsStructure
          title={TITLE_MAP.DEPLOYMENT_TOOLS}
          skills={DEPLOYMENT_TOOLS}
        />
      </Box>
    </Paper>
  );
};

export default App;
