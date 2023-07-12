import React from "react";
import ExperienceList from "./ExperienceList";
import { EXPERIENCE_DATA } from "./data";

import {
    Box,
    Paper,
  } from "common/CommonIndex";

const App = () => {
  return (
    <Paper elevation={3}>
      <Box p={2}>
        <ExperienceList experienceData={EXPERIENCE_DATA} />
      </Box>
    </Paper>
  );
};

export default App;
