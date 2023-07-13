import React from "react";
import { useHistory } from "react-router-dom";
import {
  Paper,
  makeStyles,
  Grid,
  Typography,
  Box,
  Button,
} from "common/CommonIndex";
import SkillsStructureWithIcon from "./SkillsStructureWithIcon";
import { KEY_SKILLS, TITLE_MAP } from "./data";

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
  skillsContainer: {
    alignItems: "center",
    textAlign: "center",
  },
}));

const HomeSkills = () => {
  const classes = useStyles();
  const history = useHistory();

  const onClickRedirectSkills = () => history.push("/skills");

  return (
    <Paper elevation={3}>
      <Box p={2}>
        <Grid container className={classes.skillsContainer}>
          <Grid item sm={12} md={12}>
            <Typography variant="h4">{TITLE_MAP.KEY_SKILLS}</Typography>
          </Grid>
          <Grid item sm={12} md={12}>
            <SkillsStructureWithIcon
              title={TITLE_MAP.KEY_SKILLS}
              skills={KEY_SKILLS}
            />
          </Grid>
        </Grid>
        <Grid item sm={12} md={12} className={classes.skillsContainer}>
          <Button variant="contained" color="primary" style={{ height: 50 }} onClick={onClickRedirectSkills}>
            View All Skills
          </Button>
        </Grid>
      </Box>
    </Paper>
  );
};

export default HomeSkills;
