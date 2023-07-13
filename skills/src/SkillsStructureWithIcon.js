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
  skillsItemWithIcon: {
    justifyContent: "center",
    textAlign: "left",
  },
}));

const SkillsStructureWithIcon = ({ title, skills }) => {
  const classes = useStyles();
  return (
    <Box paddingBottom={2}>
      <Grid container spacing={2} className={classes.skillsItemWithIcon}>
        {skills.map((oSkills, index) => (
          <Grid item sm={12} md={3} key={`skills_${title}_${index}`}>
            <Paper className={classes.paper} elevation={3}>
              <Grid container>
                <Grid item>
                  <Avatar
                    className={classes.titleCase}
                    alt={oSkills.title[0].toUpperCase()}
                    src={oSkills.icon}
                  />
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
  );
};

export default SkillsStructureWithIcon;
