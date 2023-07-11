import React from 'react';
import { Tabs, Tab, makeStyles } from "common/CommonIndex";
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  tabStyles: {
    justifyContent: "right",
    display: "flex"
  },
  customTab: {
    fontSize: '22px',
  },
});

export default function NavBar() {
  const classes = useStyles();
  const history = useHistory();
  const [value, setValue] = React.useState("home");

  console.log(history)
  const handleChange = (event, newValue) => {
    setValue(newValue);

    if(newValue === 'home') {
      history.push("/");
    } else {
      history.push(`/${newValue}`);
    }
  };

  return (
    <div className={classes.tabStyles}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
      >
        <Tab label="Home" value="home" classes={{ root: classes.customTab }} />
        <Tab label="Skills" value="skills" classes={{ root: classes.customTab }}  />
        <Tab label="Experience" value="experience" classes={{ root: classes.customTab }} />
        <Tab label="Education" value="education" classes={{ root: classes.customTab }} />
      </Tabs>
    </div>
  );
}