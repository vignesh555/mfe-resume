import React from "react";
import ExperienceList from "./ExperienceList";
import { EXPERIENCE_DATA } from "./data";

const App = () => {
    return (
        <>
           <ExperienceList experienceData={EXPERIENCE_DATA} />
        </>
    )
}

export default App;
