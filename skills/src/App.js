import React from "react";
import {
  Paper,
  makeStyles,
  Grid,
  Avatar,
  Typography,
  Box,
} from "common/CommonIndex";
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
  skillsTitle: {
    borderBottom: "1px solid #CCC",
  },
  skillName: {
    fontWeight: "bold"
  }
}));

const SkillsStructure = ({ title, skills }) => {
  const classes = useStyles();
  return (
    <Box paddingTop={2} paddingBottom={2}>
      <Typography className={classes.skillsTitle} variant="h6">
        {title}
      </Typography>
      <Box paddingTop={1} paddingBottom={1}>
        <Grid container spacing={2}>
          {skills.map((oSkills, index) => (
            <Grid item md={3} key={`skills_${title}_${index}`}>
              <Paper className={classes.paper} elevation={3}>
                <Grid container spacing={2}>
                  <Grid item>
                    <Avatar>{oSkills.title[0].toUpperCase()}</Avatar>
                  </Grid>
                  <Grid item>
                    <Typography className={classes.skillName}>{oSkills.title}</Typography>
                    <Typography>Version: {oSkills.version}</Typography>
                    <Typography>
                      {oSkills.remarks
                        ? oSkills.remarks
                        : `Years: ${oSkills.totalYears} Months: ${oSkills.totalMonths}`}
                    </Typography>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

const App = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
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
    </div>
  );
};

export default App;
