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

const SkillsStructure = ({ title, skills, noTitleDisplay }) => {
  const classes = useStyles();
  return (
    <Box paddingBottom={2}>
      {!noTitleDisplay && <Typography className={classes.skillsTitle} variant="h6">
        {title}
      </Typography>}
      <Box paddingBottom={2}>
        <Grid container spacing={2}>
          {skills.map((oSkills, index) => (
            <Grid item md={3} key={`skills_${title}_${index}`}>
              <Paper className={classes.paper} elevation={3}>
                <Grid container>
                  <Grid item>
                    {oSkills.icon ? (
                      <Avatar
                        className={classes.titleCase}
                        alt={oSkills.title[0].toUpperCase()}
                        src={oSkills.icon}
                      />
                    ) : (
                      <Avatar className={classes.titleCase}>
                        {oSkills.title[0].toUpperCase()}
                      </Avatar>
                    )}
                  </Grid>
                  <Grid item>
                    <Typography className={classes.skillName}>
                      {oSkills.title}
                    </Typography>
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
      <Divider />
    </Box>
  );
};

export default SkillsStructure;
