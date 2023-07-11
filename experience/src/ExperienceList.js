import React from "react";
import {
  Avatar,
  Box,
  makeStyles,
  Typography,
  List,
  ListItem,
  Divider,
  ListItemText,
  ListItemAvatar,
} from "common/CommonIndex";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(3),
  },
  inline: {
    display: "inline",
  },
  experienceWrapper: {
  },
}));

export default function ExperienceList({ experienceData }) {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      {experienceData.map((oExperienceData, index) => (
        <Box key={`experience_${index}`} className={classes.experienceWrapper}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar>{oExperienceData.companyName[0].toUpperCase()}</Avatar>
            </ListItemAvatar>
            <ListItemText>
              <Box>
                <Typography>
                  Company Name: <b>{oExperienceData.companyName}</b>
                </Typography>
                <Typography>
                  Start Year: <b>{oExperienceData.startYear}</b>
                </Typography>
                <Typography>
                  End Year: <b>{oExperienceData.endYear}</b>
                </Typography>
                <Typography>
                  Location: <b>{oExperienceData.location}</b>
                </Typography>
                <Typography>Roles & Responsibilities:</Typography>
                {oExperienceData.resposiblities.map(
                  (oResposiblities, index) => (
                    <Box p={0} paddingLeft={2} key={`resposiblities_${index}`}>
                      <Typography>{`${
                        index + 1
                      }. ${oResposiblities}`}</Typography>
                    </Box>
                  )
                )}
              </Box>
            </ListItemText>
          </ListItem>
          <Divider />
        </Box>
      ))}
    </List>
  );
}
